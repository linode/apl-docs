---
id: configuring-teams
title: Configuring teams
---

This page is for documenting how to create a team, and how to edit a team. Both creating and editing a team use the same
form.

| Setting | Description |
| ------- | ----------- |
| Name | A name for the team (lowercase). Can not be changed afterwards! Will result in the creation of namespace `team-$NAME`.
| Clusters | Which clusters the team will work with |
| [Alerting Endpoint](#alerting-endpoint) | Choose which endpoint to alert to |
| [Azure Monitor](#azure-monitor) | Choose which endpoint to alert to |

## Alerting Endpoint

In order to receive alerts, please choose an alerting endpoint.

| Option | Description |
| ------ | ----------- |
| Slack | Needs a slack webhook url that will give alerts for warnings and criticals |
| Microsoft Teams | Needs two alerting endpoints, for both warnings as well as criticals |
| None | No alerts (don't select this!) |

## Azure Monitor

Azure Monitor is the platform service that provides a single source for monitoring Azure resources.

| Option | Description |
| ------ | ----------- |
| No Azure monitoring | - |
| Azure monitoring with global settings | Takes on the global settings |
| Azure monitoring with custom settings | Overrides any global settings |
