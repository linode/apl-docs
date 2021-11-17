---
slug: architecture
title: Otomi Architecture
sidebar_label: Architecture
---

## Projects

Otomi consists out of multiple projects:

| Project                                                    | open source |
| ---------------------------------------------------------- | ----------- |
| [otomi-core](https://github.com/redkubes/otomi-core)       | Yes         |
| [otomi-tasks](https://github.com/redkubes/otomi-tasks)     | Yes         |
| [otomi-clients](https://github.com/redkubes/otomi-clients) | Yes         |
| [otomi-console](https://github.com/redkubes/otomi-console) | Yes         |
| [otomi-api](https://github.com/redkubes/otomi-api)         | Yes         |


## Overview

Otomi is a single package that combines multiple open-source projects with (developer) self-service and Kubernetes application configuration management.

![img/architecture](/img/architecture.png)

## Components
### Otomi Core

Otomi Core is the heart of Otomi and contains a set of about (currently) 47 Helm Charts. Most of these charts are optimized charts from open source projects, others are developed by [Red Kubes](https://redkubes.com). Otomi Core is made available (per release) as a container image. For more information, see the public repository [here](https://github.com/redkubes/otomi-core) (and star ;)

Otomi Core also contains the source code for Otomi CLI and Otomi Chart.

### Otomi CLI

Otomi CLI is a custom developed Command Line Interface for Otomi. Otomi CLI is part of the Otomi Core repository. At the time of writing the CLI is using bash scripts, but these are now ported to Javascript, allowing for multi platform support. Otomi CLI can be used for (advanced) initial configuration (bootstrapping), deployment, sync, push, template validation, and more.

### Otomi Chart

Installing Otomi can also be done using a Helm Chart. The chart install supports setting Otomi Values as values in the chart. The Chart contains a Job that uses Otomi CLI to deploy Otomi. One benefit of using the chart install is that installation is done locally on the cluster. This limits possible issues during install when dealing with poor network connectivity between client and Kubernetes API.

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

### Otomi Values

The charts in Otomi Core contain the default configuration values. Each cluster on which Otomi is installed also has its own configuration, the Otomi Values. These values ​​are managed in a Git repository (Gitea), running on each cluster where Otomi is installed. The Otomi Values ​​can be changed directly (by pulling the repository and making validated changes via Otomi CLI in combination with autocompletion in Visual Studio Code) or can be changed via the Otomi API (using Otomi Console). A commit in the values repository automatically triggers a synchronization (via a Drone pipeline). During synchronization, the Otomi Values ​​are 'injected' into the Otomi Core charts and applied to the cluster, resulting in a new state.

Otomi Values can be bootstrapped and adjusted before initial deployment of Otomi using the Otomi CLI. When deployed using the Helm Chart, Otomi Values will be automatically bootstrapped and adjusted based on the values configured in the chart.

### Otomi API

Otomi API allows for a controlled change of all Otomi Values, based on a configuration scheme and is the brain of Otomi. Otomi API runs as a container on each cluster running.

### Otomi Console

Otomi Console is the User Interface of Otomi. Otomi Console communicates with Otomi API for reading and changing Otomi Values configuration. Otomi Console also offers (via the Otomi Apps option) shortcuts to the UI of the various integrated applications.

## Functions

Otomi offers a set of functions, built on top of the suite of integrated open source applications. All of these functions are controlled by the Otomi operation (Otomi Console, Otomi API and Otomi Core.

### Teams

Teams are tenants on the platform to support Development-, DevOps teams, projects or even DTAP. A team can operate on multiple Kubernetes clusters, even when running on different Clouds.

A team will get access to Otomi Console, providing access to all the tools needed for complete observability. Container logs are only accessible for team members and traffic between services of different teams is not allowed based on network policies.

Teams can choose to receive alerts in Microsoft Teams, Slack or email and each team will automatically get access to a project in Harbor and a space in Vault (if these applications are enabled). Team Members can access all the team apps using Otomi Console with SSO.

A Team Administrator can set Team Self Service Flags to grant the team permissions to modify specific team configurations. Currently the following flags are provided:

- Ingress: allows the team to configure public and private ingress for a service
- Alerts: allows the team to change the alerting endpoints used
- OIDC: allows the team to change the OIDC group mapping for the team

Teams are provided access to the team with Otomi Console based on a OIDC group mapping. When configured a Role in KeyCloak is automatically configured for the team.

### Secrets

Secrets can be used to map and synchronize secrets stored in the local Hashicorp Vault. After a secret is created in Vault, a secret in Otomi can be created and then be used in Services and Jobs, or by custom deployments. A Secret is synchronized with Kubernetes and available as a Kubernetes secret. Otomi supports 3 kinds of secrets: 1) Generic secrets, 2) TLS secrets and 3) Docker registry (pull) secrets.

### Services

A service in Otomi is a feature for easy deployment of container workloads using Knative Serving and exposing services with a public URL.

An Otomi Service contains 2 sections:

#### Exposure

The exposure part of a Services enables teams to configure (advanced) ingress for a service. By default every service is configured as a clusterIP service. Ingress can be configured for private and public exposure.

When exposure is configured for a service, Otomi will automatically configure all the Kubernetes ingress resources, including Istio, certificates and DNS A-records in the selected DNS zone.

#### Service type

Ingress can be configured for 3 service types: 1) a pre-deployed Kubernetes service, 2) a pre-deployed Knative service or 3) a Knative service created by Otomi. Pre-deployed services are services deployed by the team (the team has set up a pipeline to deploy Kubernetes objects). Otomi also offers the option to create a Knative service manifest for you and deploy it. When using the New knative service option, all settings can be configured for a new knative service.

### Jobs

Jobs can be used to create and run Kubernetes Jobs and CronJobs.

### Settings

The values schema of Otomi supports a rich set of settings that can be configured using Otomi Console. The following settings sections are available:

- Alerts: Configure alerting settings for the customer
- Customers: the name of the customer
- DNS: the Domain zones available for the cluster
- KMS: credential settings for retrieving encryption keys
- Home: configure alerting settings to share with an organization (in case a third party monitors the cluster)
- OIDC: Configure OpenID settings
- Otomi: add additional Otomi clusters (so support changing context in Otomi Console), turn multi tenancy on/off, enable cloud load balancers, enable home monitored
- Policies: turn security policies on/off and adjust policy configuration
- SMTP: configure SMTP mail server

### Role based access

Otomi supports role based access control for Otomi Console and user and tenant aware applications. See KeyCloak for more information.

## Integrated Applications

Otomi contains four types of applications:

- Core applications; applications that operate on the platform-level
- Shared applications; applications that are shared between teams. Shared applications can be user- and role-aware or not (user is anonymous)
- Team applications; applications with a dedicated instance per team
- Optional applications; applications that can be turned on or off

The following table shows all integrated applications:

| Application                                  | Core | Shared | Team | User/role-aware | Optional |
| :------------------------------------------- | :--: | :----: | :--: | :-------------: | :------: |
| Istio                                        |  X   |        |      |                 |          |
| Nginx Ingress Controller                     |  X   |        |      |                 |          |
| Knative                                      |  X   |        |      |                 |          |
| [KeyCloak](/docs/apps/keycloak)              |  X   |        |      |        X        |          |
| Prometheus Server                            |  X   |        |  X   |                 |          |
| Prometheus kube state metrics                |  X   |        |  X   |                 |          |
| Alertmanager                                 |  X   |        |  X   |                 |          |
| Grafana/Loki                                 |  X   |   X    |      |        X        |          |
| [Gatekeeper Operator](/docs/apps/gatekeeper) |  X   |        |      |                 |    X     |
| [Hashicorp Vault](/docs/apps/vault)          |      |   X    |      |        X        |    X     |
| [Harbor](/docs/apps/harbor)                  |      |   X    |      |        X        |    X     |
| [Kubeapps](/docs/apps/kubeapps)              |      |   X    |      |                 |    X     |
| [Drone](/docs/apps/drone)                    |  X   |        |      |        X        |          |
| Gitea                                        |  X   |        |      |        X        |    X     |
| Httpbin                                      |      |   X    |      |                 |    X     |
| Jeager                                       |  X   |        |      |                 |    X     |
| Kiali                                        |  X   |        |      |                 |          |

## Ingress & SSO

Otomi installs and configures an advanced ingress architecture. Ingress for a service can be configured using Otomi Services. The following figure shows the ingress and SSO architecture.

![img/ingress-overview](/img/ingress-overview.svg)

The ingress & SSO architecture explained (shortly):

- (optional) an external gateway is used for termination of external traffic (e.g. an Azure Application Gateway or an AWS Application Load Balancer).
- 2 nginx ingress controllers are deployed, one for public access and one for authenticated access
- Authenticated (SSO) access is handled by an oauth2 proxy and KeyCloak. The user logs in using the Otomi custom KeyCloak login page. - KeyCloak is configured with an external IdP (optional) or uses local accounts. After authentication, KeyCloak provides a normalized JWT token. The JWT token is used by integrated core applications (providing user and role information) and team services configured with SSO
- 4 Istio (ingress) gateways are provisioned: 1) a public gateway for routing public (non authenticated traffic to a service, 2) an authentication gateway to route authenticated traffic to a service, 3) a local gateway (for local cluster routing), 4) a Knative gateway to route traffic to Knative services
- For each service a Istio virtual service is configured
- One egress gateway is provisioned for all egress traffic (network policies allow all egress traffic)
