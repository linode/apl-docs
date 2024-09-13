---
slug: loki
title: Grafana Loki
sidebar_label: Loki
---

## About

Loki aggregates all the container logs from the platform and stores them in a storage endpoint of choice (defaults to PVC). By default APL will split logs from team namespaces and make them available only to team members. APL splits logs per team, installs a dedicated Grafana instance per team and configures authentication for Grafana to allow access for team members only.

## Known issues

### Time Range does not show all data

Unfortunately the Grafana team has not yet solved their long running problems with their LogQL interface. Instead of providing paginated queries to Loki, it is needed to provide a "line limit" by the user manually.

In a data driven application that has pagination, when a user selects a time window for a data query, the user will not have to provide additional information to perform that query. The UI application takes responsibility for instrumenting the query towards its data backend. It should thus load & render the results either through pagination or by scrolling the time range into view.

**Solution:**

When you don't see enough data, try increasing the line limit. The maximum is configurable in the Loki values.
