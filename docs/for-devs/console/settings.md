---
slug: settings
title: Team Settings
sidebar_label: Settings
---

Based on the configured self-service flags, team members can change the settings of their team.

## Configure OIDC group mapping

Change the OIDC group-mapping to allow access to the team based on group membership.

## Configure alert settings

:::note

Alerts settings will only be active when Alertmanager is active.
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

:::note Note

There is no validation as there is no schema published. Add/change resource quota at your own risk.

:::

## Configure Azure Monitor

:::note

Configuring Azure Monitor settings will only be active when `cluster.provider=azure`) and when multi-tenancy is enabled.
:::

Azure Monitor is the platform service that provides a single source for monitoring Azure resources.

| Option                                | Description                   |
| ------------------------------------- | ----------------------------- |
| No Azure monitoring                   | -                             |
| Azure monitoring with global settings | Takes on the global settings  |
| Azure monitoring with custom settings | Overrides any global settings |

## Configure Network Policies

| Option           | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| Network policies | When enabled team services will be bound by (ingress) network policies                 |
| Egress control   | When enabled team service egress traffic will be limited to pre-defined endpoints only |

## Team self service flags

The self-service flags (what is a team allowed to) can only be configured by an admin user.
