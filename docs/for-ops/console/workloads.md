---
slug: workloads
title: Platform - Workloads
sidebar_label: Workloads
---

:::info
To enable this feature, first make sure [Argo CD](../../apps/argocd.md) is activated.
:::

All known Workloads on the platform are listed here. Workloads can be sorted based on:

| Property      | Description                                            |
| ------------- | ------------------------------------------------------ |
| Name          | The name of the workload                                    |
| Argocd        | Link to the Argo CD application in the Argo CD UI           |
| Image update strategy | The configured update strategy for the workload |
| Status        | The status of the workload. Click on the Argo CD application link to see more status details |
| Team Name     | The name of the Team responsible for the workload      |

A platform admin can also create Workloads. Make sure to select the correct context (team-name) in the top bar. See [here](/docs/for-devs/console/workloads) for more information about creating builds.