---
slug: harbor-keycloak-istio
title: Integrating Harbor, KeyCloak and Istio
author: Jehoszafat Zimnowoda
author_title: Developer @ Red Kubes
tags: [harbor, otomi, istio, keycloak]
---

This is our initial documentation setup for Otomi Container Platform. We hope you find it useful. Please don't hesitate to give us any [feedback](https://github.com/redkubes/redkubes/issues)!

This is my story is about building a multi-tenant Kubernetes environment that facilitates various DevOps teams (tenants) with their own Kubernetes namespace and private container registry (Harbor v2.1.0) with Single-Sign-On On (Keycloak v10.0.0) and service mesh (Istio 1.6.14) included.

## Harbor, A Fat But Versatile Container Registry

Harbor provides a container image registry, vulnerability scanning, container image signature and validation, OIDC based authentication and authorization. The fully-featured version is composed of ten micro-services. It is also CNCF graduated OSS.

In Harbor, a [project](https://goharbor.io/docs/2.2.0/working-with-projects/create-projects/) represents a container image registry, exposed under a unique URL, For example, **"harbor.otomi.io/team-demo/"**, where **team-demo** is a project name.

By creating projects you can achieve a multi-tenant container image repository for workloads in your Kubernetes cluster.

In Harbor, you can also define project membership, first by defining OIDC groups and then assigning them with a given project. For example, the OIDC group team-demo is a member of a team-demo project.

Next, we want pods from a given Kubernetes namespace to pull container images from a private registry. The [Harbor robot accounts](https://goharbor.io/docs/1.10/working-with-projects/project-configuration/create-robot-accounts/) are made for that purpose. I recommend creating two robot accounts in each Harbor project. The first one for using Kubernetes as a [PullSecret](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/) at a given namespace and the second one for CI/CD pipeline.

## Multi-Tenancy With Keycloak And Harbor

Keycloak can be used as an identity provider. In Harbor, a user can log in by performing an [OIDC authentication code flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with Keycloak. Upon successful authentication, a user is redirected back to Harbor with a [JSON Web Token](https://jwt.io/introduction) (JWT) signed by the identity Provider (Keycloak). The JWT contains a [ID token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken).

Harbor can verify JWT signature and automatically assign a user to a role and a project, based on groups claim from the ID token.

The following code snippet present an ID token with a groups claim:

```json
{
  "iss": "https://keycloak.otomi.io/realms/master",
  "sub": "xyz",
  "name": "Joe Doe",
  "groups": ["team-dev", "team-demo"],
  "given_name": "Joe",
  "family_name": "Doe",
  "email": "joe.doe@otomi.io"
}
```

There is a "Joe Doe" user that belongs to team-dev and team-demo groups, which in Harbor can be matched to predefined OIDC groups. The ID token is issued by the Keycloak (iss property) that is running in the same Kubernetes cluster. Harbor can be configured to leverage ID tokens by specifying a set of authentication parameters.

There is an OIDC endpoint URL, which is matched against iss property from the ID token. Next, OIDC Client ID with OIDC client secret is used by Harbor to authenticate with a client at Keycloak. The group claim name is crucial for enabling Harbor OIDC group matching.

If you want to perform an automatic user onboarding process you should provide the following OIDC scopes: OpenID (iss and sub-properties) and email scope (email and email_verified properties).

Do not forget about Keycloak, which requires an additional configuration of the OIDC client.

The client id is Otomi and the client secret is defined in the credentials tab. There are also valid redirect URLs and Web-origins that have to be set so a user can be redirected from and to the Harbor dashboard upon successful login.

## Secure Connectivity With Istio Service Mesh

Istio ensures service interconnectivity, encrypted traffic (mTLS), and routing (VirtualService + Gateways). Integrating Harbor with Istio is mostly about setting up proper URI routing.

Harbor is composed of ten microservices:

- Chartmuseum
- Clair
- Core
- Database
- Jobservice
- Portal
- Redis
- Registry
- Trivy
- Notary

The [Harbor Helm chart](https://github.com/goharbor/harbor-helm) provides also Nginx as a reverse server proxy service. You don't need it, instead, you can deploy the following Istio [VirtualService](https://istio.io/latest/docs/reference/config/networking/virtual-service/):

```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
 name: harbor
spec:
 hosts:
 – harbor.otomi.io
 http:
   – match:
       – uri:
           prefix: '/api/'
       – uri:
           prefix: '/c/'
       – uri:
           prefix: '/chartrepo/'
       – uri:
           prefix: '/service/'
       – uri:
           prefix: '/v1/'
       – uri:
           prefix: '/v2/'
     route:
       – destination:
           host: harbor-harbor-core.harbor.svc.cluster.local
           port:
             number: 80

   – match:
       – uri:
           prefix: /
     rewrite:
       uri: /
     route:
       – destination:
           host: harbor-harbor-portal.harbor.svc.cluster.local
           port:
             number: 80
```

The Virtual Services redirect URI paths into Harbor core service:

- `/api/`
- `/c/`
- `/chartrepo/`
- `/service/`
- `/v1/`
- `/v2/`

All other URI paths are redirected to the Harbor portal service (dashboard).

The destination hosts from harbor VirtualService is a Fully Qualified Domain Name (FQDN) that indicates the Kubernetes namespace of the Harbor services. It makes it possible for the Istio Ingress gateway to route the incoming traffic.

You might have noticed that traffic is routed to port 80 (HTTP) instead of 433 (HTTPS). It is because I disabled Harbor internal TLS in favor of the Istio proxy sidecar that enforces mTLS for each Harbor service.

## Automation With Otomi To Support Multi-Tenancy

With Otomi, we strive to integrate best of breed Open-Source projects and provide multi-tenancy awareness out-of-the-box.

Multi-tenancy is challenging and requires configuration automation to ensure scalability.

Part of Otomi's automation is to configure applications, so they are aware of each other. We do it either by using a declarative approach when that is possible, or else by interacting with their (REST) APIs directly.

We have generated REST API clients based on the open API specification for Harbor and Keycloak. You are welcome to use [our factory](https://github.com/redkubes/otomi-clients)

Next, we implemented idempotent tasks that leverage these REST API clients and automate service configuration. These are run as Kubernetes jobs whenever a configuration changes.For Harbor, we have automated the creation of projects, OIDC groups, project membership, and OIDC settings.

For Keycloak, we have automated configuration of the external identity provider, group names normalization, deriving Client ID, Client Secret and more. Are you inspired about both? Then take a look at our open-source code.

## Pitfalls

Each OSS project has its own goals and milestones, thus it may be challenging to integrate various projects to work together. Here, I share just a few Issues that I stumbled upon.

## Harbor

The container image registry, provided by Harbor, and Docker CLI do not support the OIDC protocol. Instead, it uses a username/password-based authentication. It means that whenever you perform Docker Login/push/pull commands, the HTTPS traffic from a docker client to the container registry does not carry JWT. Make sure to exclude /v1/, /v2/ and /service/ Harbor URI paths from the JWT verification. Otherwise, you won't be able to use the registry.

Next, OIDC users may experience issues with their Docker credentials (CLI secrets) that suddenly are invalidated. The [CLI secret](https://goharbor.io/docs/1.10/administration/configure-authentication/oidc-auth/) depends on the validity of the ID token, which has nothing in common with the container registry. This hybrid security solution is something that a regular docker user does not expect and can be a source of many misunderstandings.

Follow [this](https://github.com/goharbor/harbor/issues/14172) thread to get more insights.

The good news is that if you are an automation freak like me, you don't actually need CLI secrets. Instead, you can use [Harbor robot accounts](https://goharbor.io/docs/1.10/working-with-projects/project-configuration/create-robot-accounts/) that do not depend on OIDC authentication.

## Keycloak Or Other Identity Provider

If your organization decides to migrate users to another identity provider you may experience a duplicated user error: "Conflict, the user with the same username or email has been onboarded".

It is because **sub** and/or **iss** scopes from ID token may change, so the same user trying to login to the harbor dashboard will be treated as a new one. The onboarding process starts but fails because Harbor requires each user to have a unique email address. I ended up removing existing OIDC users from Harbor and allowing them to onboard once again. Interestingly the community of Harbor users is having a broad debate about using OIDC protocol and could not agree on a final solution so far. I encourage you to take a look [here](https://github.com/goharbor/harbor/issues/14172) for a very insightful conversation about it.

## Istio

While making Harbor services part of the Istio service mesh, it is very important that Kubernetes services are using port names that follow the Istio convention. For example, the Harbor registry services should have an HTTP-registry port name, instead of a registry. See the following example:

```yaml
apiVersion: v1
kind: Service
metadata:
 name: harbor-harbor-registry
spec:
 ports:
 – name: http-registry
 port: 5000
 protocol: TCP
 targetPort: 5000
 – name: http-controller
 port: 8080
 protocol: TCP
 targetPort: 8080
```

If the **service port name** does not follow the Istio convention, Harbor core service is not able to communicate with the Harbor registry service in Istio service mesh. Attempting to login into the Docker registry will end up with an "authentication required" error.

## Takeaways

- Harbor is a suitable solution for deploying a self-hosted container image repository in a multi-tenant Kubernetes cluster. Nevertheless, the lack of configuration automation makes it hard to maintain it in a constantly changing environment
- Using the OIDC group's claim can be used for granting users default role and access to Harbor project(s)
- While working with Istio, do not mess up with named ports
- Stay in touch with open-source communities for projects that you are using, as they are a true treasure trove of information

I hope that this article provides you a good insight into more advanced Harbor integration in the Kubernetes cluster.

Part of Otomi's automation is to configure applications, so they are aware of each other. We do it either by using a declarative approach when that is possible, or else by interacting with their (REST) APIs directly.

We have generated REST API clients based on the open API specification for Harbor and Keycloak. You are welcome to use our [factory](https://github.com/redkubes/otomi-clients) for building and publishing open API clients.

This article was originally posted by Jehoszafat Zimnowoda on [medium.com](https://jzimnowo.medium.com/harbor-keycloak-and-istio-a-good-dance-troupe-6c3520fb87de).
