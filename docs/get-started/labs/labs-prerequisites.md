---
slug: lab-prerequisites
title: Lab Prerequisites
sidebar_label: Lab Prerequisites
---

## Prerequisites

1. Make sure App Platform is installed with DNS. See [here](get-started/installation/overview.md). Not needed when using the LKE automatic installation.

2. Sign in with a user that has the `platform-administrator` role

3. Enable Prometheus on the platform level.

4. Enable additional Apps on the platform level to support the following labs:

| Lab                                         | App                                 |
|---------------------------------------------|-------------------------------------|
| Create container images                     | Harbor                              |
| Trigger builds                              | Harbor                              |
| Manually Push images to Harbor              | Harbor                              |
| Scan running containers for vulnerabilities | Prometheus, Grafana, Trivy Operator |
| View container logs                         | Loki, Grafana                       |
| Tracing with Open Telemetry                 | Loki, Otel, Tempo                   |
| Create a RabbitMQ cluster                   | RabbitMQ                            |

:::info
For the [Tracing with Open Telemetry](use-otel.md) Lab, tracing needs to be configured in the `Istio` and `Nginx Ingress` apps.
:::

5. Create a Team called `labs` with `Dashboards` and `Alerts` enabled. See [here](docs/for-ops/console/teams.md) how to create Teams.

6. Create a user and make this user a member of the `labs` Team. In the labs we'll be using the user `labs-user@labs.com`. See [here](docs/for-ops/console/usermgnt.md) how to create users and assign them to Teams.

:::info
The App Platform will automatically create an organization for each Team in Gitea. Only members of the Team are added to the `Owners` group of this organization. It is possible to go through the labs using the (default) `platform-admin` user account that was created during the installation of the App Platform. When using the `platform-admin` user, then make sure to add your account to the `Owners` group of the Team's organization in Gitea. Follow the instruction for adding the platform-admin user to the Owners group of a Team's organization in Gitea [here](../../for-ops/how-to/make-owner-in-gitea.md)
:::

6. Add the Kube API to the [Cluster Settings](../../for-ops/console/settings/cluster.md). Select the `platform` view and click on `Settings` in the left menu. Then click on `Cluster`. When using LKE: You can find the Kube API URL in the Summary of your LKE cluster. Here it is called the `Kubernetes API Endpoint`. You can remove `:443` at the end.

## Start with the labs

- Go to https://console.yourdomain.com.

- Sign in with the created user account (labs-user@labs.com) and change the initial password.

After sign in, you will see this page (with Dashboards enabled):

![Team dashboard](../../img/team-dashboard.png)

- Start with the [first lab](create-repos.md) to create a code repository in Gitea (the self-hosted Git service in the App Platform).
