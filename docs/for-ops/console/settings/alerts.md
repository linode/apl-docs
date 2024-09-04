---
slug: alerts
title: Platform settings
sidebar_label: Alerts
---


## Alerts

:::note

Alerts settings will only be applied when Alertmanager is active.
:::

The alerts settings section offers configuration options to define alerting endpoints for alert manager and deployment feedback. The list of providers selected in `Notification receivers` should reflect their configuration. I.e. when receiver "slack" is selected, the slack configuration needs to be defined. Teams can also configure a receiver for alerts firing in their team namespace.

| Setting | Description |
| ------- | ----------- |
| Repeat interval | Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more). |
| Group interval | How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) |
| Notification receivers | Select default notification channel(s) for receiving alerts. |

| Receiver | Parameters |
| ------- | ----------- |
| Slack | Slack webhook URL and channels for critical and non-critical alerts. |
| Msteams | Microsoft Teams webhook URLs for critical (high prio) and non-critical alerts (low prio). |
| Email | Email address(es) for critical and non-critical alerts. |
| Opsgenie | Opsgenie API Key, URL and alert responder(s) |
