---
slug: loki
title: 'Known Issues: Loki'
sidebar_label: 'Loki'
---

When working with Grafana's Loki data source you can expect to run into the following issues:

## Time Range does not show all data

Unfortunately the Grafana team has not yet solved their long running problems with their LogQL interface. Instead of providing paginated queries to Loki, it is needed to provide a "line limit" by the user manually.

In a data driven application that has pagination, when a user selects a time window for a data query, the user will not have to provide additional information to perform that query. The UI application takes responsibility for instrumenting the query towards its data backend. It should thus load & render the results either through pagination or by scrolling the time range into view.

**Solution:**

When you don't see enough data, try increasing the line limit. The maximum is configurable in the Loki values.
