---
slug: ee/teams
title: Teams
---

This page describes how to create a team, and how to edit a team. Both creating and editing a team use the same form.

Screenshot (admin role):

![Console: new team](img/console-new-team.png)

## Name

A name for the team (lowercase). Can not be changed afterwards! Will result in the creation of namespace `team-$NAME`.

## OIDC

An OIDC group name/id granting access to this team.

## Alerting Endpoint

In order to receive alerts, please choose an alerting endpoint.

NOTE: When a field is left empty it will default to the global admin value for that field, if that exists.

| Option          | Description                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| Slack           | Needs a slack webhook url that will give alerts for warnings and criticals       |
| Microsoft Teams | Needs two alerting endpoints, for both warnings as well as criticals             |
| Email           | You may provide a list of email addresses for both 'Non Critical' and 'Critical' |
| None            | Global (admin) alerting endpoint configuration will be used                      |

## Resource Quota

List of kubernetes resource quota. Should adhere to the "spec.hard" format as described [here](https://kubernetes.io/docs/concepts/policy/resource-quotas/). Not validated as there is no schema published. Change at your own risk.

## Azure Monitor (Only on Azure)

Azure Monitor is the platform service that provides a single source for monitoring Azure resources.

| Option                                | Description                   |
| ------------------------------------- | ----------------------------- |
| No Azure monitoring                   | -                             |
| Azure monitoring with global settings | Takes on the global settings  |
| Azure monitoring with custom settings | Overrides any global settings |

## Team Self Service Flags

A uses with the `otomi-admin` and `team-admin` role can create teams and grant the team permissions to modify certain configuration parameters.

### Service

Select Ingress to grant the team the permission to configure exposure for [services](/docs/ee/configuring-services#exposure).

### Team

#### Alerts

Select to grant the team the permission to configure [Alerts](#alerting-endpoint) for the team.

#### OIDC

Select to grant the team the permission to configure [OIDC](#oidc) for the team.

#### resourceQuota

Select to grant the team the permission to configure [Resource Quota](#resource-quota) for the team.
