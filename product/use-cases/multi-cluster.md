---
slug: multi-cluster
title: Multi-cluster observability
sidebar_label: Multi-cluster observability
---

## Introduction

Using multiple Kubernetes clusters can have advantages based on your requirements. Some of the benefits of running multiple Kubernetes clusters are:

- High availability: When one cluster fails, the other cluster(s) can take the load. Losing one cluster when your applications are appropriately spread across several other clusters is much better than losing a single cluster with everything on it
- Better end user experience: Splitting workloads can improve performance and reduce latency by providing users with a geographically close environment
- Separate development and production clusters to reduce the risk of being served beta or non-production code versions

But from a technical perspective, managing multiple Kubernetes clusters is more complex than managing a single cluster. For effective multi-cluster management, a “single pane of glass” with centralized real-time monitoring, time series comparisons across and within clusters and high availability is essential for teams operating with multiple clusters and multiple providers.

## Multi-cluster observability with Otomi

![multi-cluster](../img/multi-cluster-observability.png)

Otomi supports multi-cluster observability by providing:

1. Automated installation of all required observability tools and their configuration on multiple clusters from a single source of truth
2. Aggregation of metrics from multiple clusters for Prometheus high availability
3. Multi-cluster log aggregation
4. Preconfigured multi-cluster dashboards
5. Multi-cluster alerting


