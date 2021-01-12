---
slug: console/configuring-teams
title: Configuring teams
---

This page describes how to create a team, and how to edit a team. Both creating and editing a team use the same form.

Screenshot (admin perspective):

![Console: new team](img/console-new-team.png)

| Setting | Description |
| --- | --- |
| Name | A name for the team (lowercase). Can not be changed afterwards! Will result in the creation of namespace `team-$NAME`. |
| Clusters | Which clusters the team will work with |
| [Alerting Endpoint](#alerting-endpoint) | Choose which endpoints to alert to. |
| [Azure Monitor](#azure-monitor) | Configure to use an Azure Monitor endpoint |

## Alerting Endpoint

In order to receive alerts, please choose an alerting endpoint.

NOTE: When a field is left empty it will default to the global admin value for that field, if that exists.

| Option          | Description                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| Slack           | Needs a slack webhook url that will give alerts for warnings and criticals       |
| Microsoft Teams | Needs two alerting endpoints, for both warnings as well as criticals             |
| Email           | You may provide a list of email addresses for both 'Non Critical' and 'Critical' |
| None            | Global (admin) alerting endpoint configuration will be used                      |

## Azure Monitor

Azure Monitor is the platform service that provides a single source for monitoring Azure resources.

| Option                                | Description                   |
| ------------------------------------- | ----------------------------- |
| No Azure monitoring                   | -                             |
| Azure monitoring with global settings | Takes on the global settings  |
| Azure monitoring with custom settings | Overrides any global settings |
