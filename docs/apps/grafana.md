---
slug: grafana
title: Grafana
sidebar_label: Grafana
---

Otomi uses Grafana to visualize [Prometheus](prometheus.md) metrics and [Loki](loki.md) logs. Team members are automatically given `Editor` role, while admins are also given `Admin` role. It is possible to make configuration changes directly in Grafana, but only to non-conflicting settings. Data sources are preconfigured and must not be edited as changes will be lost when Grafana is redeployed.