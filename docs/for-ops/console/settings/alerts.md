---
slug: alerts
title: Platform settings
sidebar_label: Alerts
---


## Alerts

:::note

Alerts settings will only be active when Alertmanager is active.
:::

The alerts settings section offers configuration options to define alerting endpoints for alert manager and deployment feedback. The list of providers selected in `Notification receivers` should reflect their configuration. I.e. when receiver "slack" is selected, the slack configuration needs to be defined. Teams can also configure additional endpoints for the alerts spawning from their team namespace.

| Setting | Description |
| ------- | ----------- |
| Repeat interval | Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more). |
| Group interval | How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) |
| Slack | Slack webhook url and channels for critical and non-critical alerts. |
| MSteams | Microsoft Teams webhook urls for critical (high prio) and non-critical alerts (low prio). |
| Email | Email address(es) for critical and non-critical alerts. |
| Notification receivers | Select default notification channel(s) for receiving alerts. |
| Drone notifications | Channel to be used by the deployment pipeline for failure/success notifications. Can only be delivered to Slack or MSteams (for now). |
