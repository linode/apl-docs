---
slug: settings
title: Team Settings
sidebar_label: Settings
---

:::info
The Team settings can only be changed by a user with the platform administrator role. The Team settings are read only for Team members. Ask your platform administrator if any changes need to be made to the Team settings.
:::

## Dashboards

When Dashboards are enabled, a dedicated Grafana instance is installed in the Team namespace and pre-configured with dashboards. To see the Grafana dashboards, go to `Apps` and click on Grafana.

The Grafana instance is also used for Loki to show logs. 

### Alerts

When Alerts are enabled, a dedicated Alertmanager instance is installed in the Team namespace. The Alertmanager instance receives alerts relevant for the Team from the Platform Prometheus.

When a Notification Receiver is configured, Alertmanager will send the Team's alerts to the configured receiver (Slack or Microsoft Teams). Ask your platform administrator to enable Alerts and configure a notification receiver.

## Resource Quotas

Any configured resource quota for the Team are shown here. If the configured resource quota are blocking the Team, then ask your platform administrator to change them.

## Network Policies

The netwok policies section shows if network policies for the Team are enabled. There are 2 types of network policies:

| Option           | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| Ingress control  | When enabled team services will be bound by (ingress) network policies                 |
| Egress control   | When enabled team service egress traffic will be limited to pre-defined endpoints only |

## Permissions

The permissions section shows the permissions of the Team. These permissions are applied to all Team members:

| Action                            | Description                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Create Services                   | All Team members have the permission to create Services                                                 |
| Edit Security Policies            | All Team members have the permission to edit Security Policies                                          |
| Use Cloud Shell                   | All Team members have the permission to use the cloud shell                                             |
| Download kubeconfig file          | All Team members have the permission to download the KubeConfig to get Kube API access to the namespace |
| Download docker login credentials | All Team members have the permission to download the Dockerconfig for the teams project in Harbor       |