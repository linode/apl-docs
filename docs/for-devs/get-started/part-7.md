---
slug: part-7
title: View container logs
sidebar_label: Part 7
---

When your application is deployed, you would of course like to be able to see container logs for debugging purposes. Grafana Loki is used in Otomi for log aggregation. When Grafana Loki is enabled, you'll see the Loki app in your apps.

:::info
Only when Otomi is configured in multi-tenant mode, container logs of teams are split up. This means you can only see the logs of your own team. If multi-tenancy is not enabled, you can see the logs of all containers running on the cluster. If you don't want other teams to see your logs, ask the administrator to configure multi-tenancy.
:::

## View container logs

- Open the Loki app in your team apps

![kubecfg](../../img/loki-teams.png)

In Grafana, you are directed to the `Explore` section. Otomi already added a query for you, showing the logs of all containers running in your team namespace

![kubecfg](../../img/grafana-loki.png)

Adjust the query to your own needs. Loki uses LogQL as a query language. Learn more about LOgQL [here](https://grafana.com/docs/loki/latest/logql/)

## Creating shortcuts

When you created a custom query that you would like to use more often, or would like to share with the team, you can create a shortcut in Otomi.

- 