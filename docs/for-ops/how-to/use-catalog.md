---
slug: catalog
title: Managing the Catalog
sidebar_label: Manage the Catalog
---

APL offers a Catalog to Teams on the platform to offer them golden path templates (Helm charts). This is how it works:

- Add a Helm chart to the `otomi/charts` repo in the local Gitea.

- Configure which Teams can use the chart.

- Teams can create Workloads from the Catalog.

After APL is installed, the catalog (the `otomi/charts` repo) will contain a set of quick start Helm charts. The APL provided Helm charts are not mandatory to use and can be removed or modified to your own liking. They are only provided to make it easier to get started.

## Quick start Helm charts

The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:

### k8s-deployment

The `quickstart-k8s-deployment` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

### k8s-deployment-otel

The `quickstart-k8s-deployment-otel` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service`, a `ServiceAccount`, an `OpenTelemetryCollector` and an `Instrumentation`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

### k8s-deployments-canary

The `quickstart-k8s-deployments-canary` Helm chart can be used to create 2 Kubernetes `Deployments` (to deploy 2 versions of an image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` (for each version) can be created.

### knative-service

The `quickstart-knative-service` Helm chart can be used to create a Knative `Service` (to deploy a single image), a `Service` and a  `ServiceAccount`. Optionally a Prometheus `ServiceMonitor` can be created.

### APL quick start for creating a PostgreSQL cluster

The `quickstart-postgresql` Helm chart can be used to create a cloudnativepg PostgreSQL `Cluster`. Optionally a Prometheus `PodMonitor` and a `Configmap` (for adding a postgresql dashboard to Grafana) can be created.

### APL quick start for creating a Redis master-replica cluster

The `quickstart-redis` Helm chart can be used to create a Redis master-replica cluster.

## Customize the catalog

The APL provided charts are not mandetory to use and can be removed or modified to your own liking. They are only provided to make it easier to get started. To manage the catalog, just pull the `otomi/charts` repo, add the Helm charts you would like to make available and push changes. A newly added chart will immediately become available in the catalog for Teams to use.

## Configure chart access

For charts to become available for Teams to use, Teams need to be given access to use a chart. The catalog supports the following access options:

### Everybody

If a chart can be used by all teams, including the `team-admin` Team, add the following to the `rbac.yaml` in the root of the `otomi/charts` repository:

```yaml
rbac:
  chart-name: null
```

### Specific teams

If a chart is only allowed to be used by one or more specific teams, add the following to the `rbac.yaml`:

```yaml
rbac:
  chart-name:
    - team-demo
    - team-hello
```

To allow a chart to be used by the `team-admin` only, add the following to the `rbac.yaml`:

```yaml
rbac:
  chart-name:
    - team-admin
```
