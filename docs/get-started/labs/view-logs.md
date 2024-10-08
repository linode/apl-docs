---
slug: view-logs
title: View container logs
sidebar_label: View Container Logs
---

:::info
Loki needs to be enabled on the platform level and Grafana needs to be enabled for the Team.
:::

When your application is deployed, you would of course like to be able to see container logs for debugging purposes. Grafana Loki is used for log aggregation. When Loki on the Platform level is enabled, you'll see the Loki app in your Team Apps.

## View container logs

- Open the Loki app in your team apps:

![kubecfg](../../img/loki-teams.png)

In Grafana, you are directed to the `Explore` section:

![kubecfg](../../img/grafana-loki.png)

Select the label `app` and then select `blue`. You will now see all the `blue` container logs. You can also create your own queries. Learn more about LogQL [here](https://grafana.com/docs/loki/latest/logql/).

