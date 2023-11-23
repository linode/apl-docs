---
slug: dev-catalog
title: Managing the Developer Catalog
sidebar_label: Manage Developer Catalog
---

Otomi offers a Developer Catalog to provide golden path templates (Helm charts) to developers. This is how it works:

- Add a Helm chart to the `otomi/charts` repo in the local Gitea
- Configure who can use the chart
- Teams can create Workloads in Otomi using the provided charts

After Otomi is installed, the catalog (the `otomi/charts` repo) will contain a set of quick start Helm charts. Tbe The Otomi provided Helm charts are not mandetory to use and can be removed or modified to your own liking. They are only provided to make it easier to get started.

## Otomi quick start Helm charts

When Otomi is installed, the catalog will contain the following Otomi quick start templates:

### otomi-quickstart-k8s-deployment

The `otomi-quickstart-k8s-deployment` chart can be used to create a Kubernetes `Deployment`. Optionally a `HPA` and a `Service Monitor` can be created.

### otomi-quickstart-k8s-deployment-otel

The `otomi-quickstart-k8s-deployment-otel` chart can be used to create a Kubernetes `Deployment` with Open Telemetry `instrumentation`.

### otomi-quickstart-k8s-deployments-canary

The `otomi-quickstart-k8s-deployments-canary` chart can be used to create 2 Kubernetes `Deployments` to deploy 2 versions of an image and use the `Traffic Control` feature in Otomi to do canary or blue/green deployments.

### otomi-quickstart-knative-service

The `otomi-quickstart-knative-service` chart can be used to create a Knative service with a scale to zero configuration.

## Customize the catalog

The Otomi provided charts are not mandetory to use and can be removed or modified to your own liking. They are only provided to make it easier to get started. To manage the catalog, just pull the `otomi/charts` repo, add the Helm charts you would like to make available and push changes. A newly added chart will immediately become available in the catalog for Teams to use.

## Configure chart access

For charts to become available for Teams to use, Teams need to be given access to use a chart. The catalog supports the following access options:

### Everybody

If a chart can be used by all teams, including the `team-admin` Team, add the following to the `Chart.yaml` of the chart:

```yaml
teams:
    - all
```

### Specific teams

If a chart is only allowed to be used by one or more specific teams, add the following to the `Chart.yaml` of the chart:

```yaml
teams:
    - team-demo
    - team-hello
```

To allow a chart to be used by the `team-admin` only, add the following to the `Chart.yaml` of the chart:

```yaml
teams:
    - team-admin
```