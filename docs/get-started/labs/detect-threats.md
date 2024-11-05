---
slug: detect-threats
title: Detect threats in running containers
sidebar_label: Detect Threats
---

:::info
Falco needs to be activated for this lab.
:::

Falco is a cloud native security tool that provides runtime security. It leverages custom rules on Linux kernel events and other data sources through plugins, enriching event data with contextual metadata to deliver real-time alerts. Falco enables the detection of abnormal behavior, potential security threats, and compliance violations.

## Generate threats

For this lab we'll deploy the `event-generator` in a Team namespace. The event-generator is a tool designed to generate events for both syscalls and k8s audits. The tool can be used to check if Falco is working properly. It does so by performing a variety of suspects actions which trigger security events. The event-event generator implements a minimalistic framework which makes easy to implement new actions.

1. Add the falcosecurity charts repository:

```bash
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm repo update
```

2. Install the chart in the team namespace:

```bash
helm install team-labs falcosecurity/event-generator -n team-labs
```

## See the events in the detected threats in containers dashboard

1. In the left menu, click on `Apps` and open `Grafana`.

2. Click on the `Detected threads in containers` dashboards

3. See all the generated threat events

![falco-dashboard](../../img/falco-dashboard.png)
