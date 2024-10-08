---
slug: settings
title: Team Settings
sidebar_label: Settings
---

Based on self-service options allowed by the platfrom administrator, team members can change the settings of their team.

## Configure OIDC group mapping

:::note
The OIDC group mapping will only be visible when an external Identity Provider (IdP) is used.
:::

Change the OIDC group-mapping to allow access based on a group membership.

## Managed monitoring

Activate a (platform) managed Grafana, Prometheus or Alertmanager instance for the team. The installed Grafana, Prometheus and Alertmanager will be monitored by the Platform administrator.

### Grafana

Enable to install a Grafana instance for the team. 

**Dependencies:**

- The Grafana instance is automatically configured with a datasource for the Team's Prometheus if Prometheus for the Team is enabled.

- If Loki (for logs) is enabled on the Platform, Grafana needs to be enabled for the Team to able to see logs in Grafana.

- Grafana is provisioned with multiple dashboards that rely on the Platform Prometheus. If Prometheus on the Platform is not enabled, these dashboards will not work!

### Prometheus

Enable to install a Prometheus instance for the team. The Prometheus instance is configured to only scrape metrics from `PodMonitors` and `ServiceMonitors` that have the label `prometheus: team-<team-name>`.

### Alertmanger

Enable to install an Alertmanager instance for the team. The Alertmanger instance will only show alerts based on `Rules` for the Team's Prometheus.

### Private

Select to disable cross-team access (and make the Team Grafana private for Team members only)

## Configure alert settings

:::note
Alerts settings will only be applied when Alertmanager is enabled for the team.
:::

Change the alert settings and preferred notification receivers.

| Option           | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| Slack            | Needs a slack webhook url that will give alerts for warnings and criticals       |
| Microsoft Teams  | Needs two alerting endpoints, for both warnings as well as criticals             |
| Email            | You may provide a list of email addresses for both 'Non Critical' and 'Critical' |
| If none selected | Global (admin) alerting endpoint configuration will be used                      |

## Configure Resource Quotas

When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described [here](https://kubernetes.io/docs/concepts/policy/resource-quotas/).

:::note
There is no validation as there is no schema published. Add/change resource quota at your own risk.
:::


## Configure Network Policies

| Option           | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| Ingress control  | When enabled team services will be bound by (ingress) network policies                 |
| Egress control   | When enabled team service egress traffic will be limited to pre-defined endpoints only |

## Team self service flags

The self-service flags (what is a team allowed to) can only be configured by an admin user.

### Service

| Option           | Permission                                                                             |
| ---------------- | -------------------------------------------------------------------------------------- |
| Ingress          | The Team is allowed to configure External Exposure for a Service                       |

### Security Policies

| Option           | Permission                                                                             |
| ---------------- | -------------------------------------------------------------------------------------- |
| Edit policies    | The Team is allowed to edit Team Security Policies                      |

### Team

| Option                 | Permission                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------- |
| OIDC                   | The team is allowed to configure the OIDC group mapping for the team                   |
| Alerts                 | The Team is allowed to configure Alert settings for the team                           |
| Managed monitoring     | The team is allowed to configure Managed Monitoring                                    |
| Resource quotas        | The team is allowed to configure resource quotas for the team                          |
| Network policy         | The team is allowed to configure Security Policies (enable/disable Security Policies for the Team) |

### Access
| Option                 | Permission                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------- |
| Shell                  | The team is allowed to use the cloud Shell                                             |
| Download kube config   | The team is allowed to download the Kube Config                                        |
| Download docker config | The team is allowed to download the Docker Config                                      |
| Download certificate authority | The team is allowed to download the certificate authority (only when installed with a auto-generated or custom CA) |


