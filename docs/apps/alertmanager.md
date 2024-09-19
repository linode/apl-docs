---
slug: alertmanager
title: Alertmanager
sidebar_label: Alertmanager
---

## About

Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of de-duplicating, grouping, and routing them to the correct receiver integration such as email, Slack, MS Teams, or OpsGenie. It also takes care of silencing and inhibition of alerts.

Alertmanager is configured to use the global values found under settings' [alerts](../for-ops/console/settings/alerts.md).

A team may decide to override some or all of them, in order to have alerts sent to their own endpoints. Self-service rights to alerting must be enabled for the team (enabled by default for all teams). Each Team can enable a dedicated alertmanager instance.

APL supports the following receivers:

- `Slack`
- `Microsoft Teams`
- `Ops Genie`
- `Email`
- (default) `None` (will use the `null` receiver to enable the Alertmanager UI).

