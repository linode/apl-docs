---
slug: lab-prerequisites
title: Lab Prerequisites
sidebar_label: Lab Prerequisites
---

## Prerequisites

1. DNS is configured. See [here](get-started/installation/overview.md). Not needed when using the LKE automatic installation.

2. Platform Applications for the following labs are enabled:

| Lab                                         | App                                 |
|---------------------------------------------|-------------------------------------|
| Create container images                     | Harbor                              |
| Trigger builds                              | Harbor                              |
| Manually Push images to harbor              | Harbor                              |
| Scan running containers for vulnerabilities | Prometheus, Grafana, Trivy Operator |
| View container logs                         | Loki, Grafana                       |
| View container metrics                      | Prometheus                          |
| Using custom metrics                        | Prometheus                          |
| Tracing with Open Telemetry                 | Loki, Otel, Tempo                   |
| Create a RabbitMQ cluster                   | RabbitMQ                            |


For the [Tracing with Open Telemetry](use-otel.md) Lab, tracing needs to be configured in the `Istio` and `Nginx Ingress` apps.

3. A team called `labs` is created with `Alertmanager` activated. See how you can create teams on: [Platform - Teams](docs/for-ops/console/teams.md).

4. A user account is created and added to the `labs` Team. In the labs we'll be using the user `labs-user@example.com`. See how you can create users on: [Platform - User Management](docs/for-ops/console/usermgnt.md).

:::note
For each Team an Organization in Gitea is created. Only members of the Team are made a member of the `Owners` group of this organization. When using the `platform-admin` account, make sure to add your account to the `Owners` group of the Team's organization.
:::

## Sign in to the Console

- Go to the provided URL. The URL will look like this: https://console.yourdomain.com

- Sign in with the created user account.

After sign in, you will see this page (with grafana enabled):

![Team dashboard](../../img/team-dashboard.png)
