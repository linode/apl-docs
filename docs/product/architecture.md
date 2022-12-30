---
slug: architecture
title: Otomi Architecture
sidebar_label: Architecture
---

## Projects

Otomi consists out of the following projects:

| Project                                                    | open source |
| ---------------------------------------------------------- | ----------- |
| [otomi-core](https://github.com/redkubes/otomi-core)       | Yes         |
| [otomi-tasks](https://github.com/redkubes/otomi-tasks)     | Yes         |
| [otomi-clients](https://github.com/redkubes/otomi-clients) | Yes         |
| [otomi-console](https://github.com/redkubes/otomi-console) | No          |
| [otomi-api](https://github.com/redkubes/otomi-api)         | No          |


### Otomi Core

Otomi Core is the heart of Otomi and contains a set of about (currently) 47 Helm Charts. Most of these charts are optimized charts from open source projects, others are developed by [Red Kubes](https://redkubes.com). Otomi Core is made available (per release) as a container image.

Otomi Core also contains the source code for Otomi CLI. Otomi CLI is a custom developed Command Line Interface for Otomi. Otomi CLI can be used for advanced initial configuration (bootstrapping), deployment, sync, push, template validation, and much more.

### Otomi Tasks

Otomi Tasks consists of a set of Kubernetes jobs. These jobs ensure that the configuration of applications integrated in Otomi are always equal to the desired-state configuration (see Otomi Values). An example: If a team is created via Otomi Console (in combination with Otomi API), Otomi Tasks ensures that a project is created for the new team in Harbor, the access to the project in Harbor is configured, a robot account (that can be used to push images to the project registry) is created and that a pull secret is created in the namespace of the team.

Otomi Tasks is currently used to configure the following applications:

- KeyCloak
- Harbor
- Gitea
- Drone

### Otomi Clients

A factory to build and publish openapi clients used in the redkubes/otomi-tasks repo.

Otomi Clients is currently used to generate openapi clients for the following applications:

- KeyCloak
- Harbor
- Gitea

### Otomi API

Otomi API allows for a controlled change of all Otomi Values, based on a configuration scheme and is the brain of Otomi. Otomi API runs as a container on each cluster running.

### Otomi Console

Otomi Console is the User Interface of Otomi. Otomi Console communicates with Otomi API for reading and changing Otomi Values configuration. Otomi Console also offers (via the Otomi Apps option) shortcuts to the UI of the various integrated applications.

## Integrated Applications

Otomi contains four types of applications:

- Core applications: applications that are activated by default
- Shared applications: applications that are shared between teams. Shared applications are user-, and role-aware or not (user is anonymous)
- Team applications: applications with a dedicated instance per team
- Optional applications: applications that are optional and can be activated by the platform admin

The following table shows all integrated applications:

| Application                                  | Core | Shared | Team | User/role-aware | Optional |
| :------------------------------------------- | :--: | :----: | :--: | :-------------: | :------: |
| Istio                                        |  X   |        |      |                 |          |
| Ingress NGINX Controller                     |  X   |        |      |                 |          |
| Knative                                      |      |        |      |                 |    X     |
| [KeyCloak](/docs/apps/keycloak)              |  X   |        |      |        X        |          |
| Prometheus Server                            |      |        |  X   |                 |    X     |
| Prometheus kube state metrics                |      |        |  X   |                 |    X     |
| Alertmanager                                 |      |        |  X   |                 |    X     |
| Grafana/Loki                                 |      |   X    |      |        X        |    X     |
| [Gatekeeper Operator](/docs/apps/gatekeeper) |      |        |      |                 |    X     |
| [Hashicorp Vault](/docs/apps/vault)          |      |   X    |      |        X        |    X     |
| [Harbor](/docs/apps/harbor)                  |      |   X    |      |        X        |    X     |
| [Kubeapps](/docs/apps/kubeapps)              |      |   X    |      |                 |    X     |
| [Drone](/docs/apps/drone)                    |  X   |        |      |        X        |          |
| Gitea                                        |  X   |        |      |        X        |    X     |
| Httpbin                                      |      |   X    |      |                 |    X     |
| Jeager                                       |      |        |      |                 |    X     |
| Kiali                                        |      |        |      |                 |    X     |
| KubeClarity                                  |      |        |      |                 |    X     |
| Velero                                       |      |        |      |                 |    X     |
| Minio                                        |      |        |      |                 |    X     |

## Ingress & SSO

Otomi installs and configures an advanced ingress architecture. Ingress for a service can be configured using Otomi Services. The following figure shows the ingress and SSO architecture.

![img/ingress-overview](/img/ingress-overview.svg)

The ingress & SSO architecture explained (shortly):

- (optional) an external gateway is used for termination of external traffic (e.g. an Azure Application Gateway or an AWS Application Load Balancer).
- 2 Ingress NGINX controllers are deployed, one for public access and one for authenticated access
- Authenticated (SSO) access is handled by an oauth2 proxy and KeyCloak. The user logs in using the Otomi custom KeyCloak login page. - KeyCloak is configured with an external IDP (optional) or uses local accounts. After authentication, KeyCloak provides a normalized JWT token. The JWT token is used by integrated core applications (providing user and role information) and team services configured with SSO
- 4 Istio (ingress) gateways are provisioned: 1) a public gateway for routing public (non authenticated traffic to a service, 2) an authentication gateway to route authenticated traffic to a service, 3) a local gateway (for local cluster routing), 4) a Knative gateway to route traffic to Knative services
- For each service a Istio virtual service is configured
- One egress gateway is provisioned for all egress traffic (network policies allow all egress traffic)
