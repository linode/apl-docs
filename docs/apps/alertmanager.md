---
slug: alertmanager
title: Working with Alertmanager
sidebar_label: Alertmanager
---

## Introduction

Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of de-duplicating, grouping, and routing them to the correct receiver integration such as email, Slack, MS Teams, or OpsGenie. It also takes care of silencing and inhibition of alerts.

Alertmanager is configured by Otomi to use the global values found under settings' [alerts](../for-ops/console/settings/alerts) and [co-monitoring](../for-ops/console/settings/co-monitoring).

A team may decide to override some or all of them, in order to have alerts sent to their own endpoints. Self-service rights to alerting must be enabled for that team (enabled by default for all teams).

