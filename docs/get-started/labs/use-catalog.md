---
slug: use-catalog
title: Use the Catalog
sidebar_label: Use the Catalog
---

In this lab we are going to explore the Catalog. The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team.

## About Catalog quick starts

The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:

### k8s-deployment

The `k8s-deployment` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

### k8s-deployment-otel

The `k8s-deployment-otel` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service`, a `ServiceAccount`, an `OpenTelemetryCollector` and an `Instrumentation`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

### k8s-deployments-canary

The `k8s-deployments-canary` Helm chart can be used to create 2 Kubernetes `Deployments` (to deploy 2 versions of an image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` (for each version) can be created.

### knative-service

The `knative-service` Helm chart can be used to create a Knative `Service` (to deploy a single image), a `Service` and a `ServiceAccount`. Optionally a Prometheus `ServiceMonitor` can be created.

### postgresql-cluster

The `postgresql-cluster` Helm chart can be used to create a cloudnativepg PostgreSQL `Cluster`. Optionally a Prometheus `PodMonitor` and a `Configmap` (for adding a postgresql dashboard to Grafana) can be created.

### redis-cluster

The `redis-cluster` Helm chart can be used to create a Redis master-replica cluster.

### rabbitmq-cluster

The `rabbitmq-cluster` Helm chart can be used to create a RabbitMQ cluster.

## Using the Catalog

1. Click on `Catalog` in the left menu.

2. You will now see all the templates that are available to use.

![catalog](../../img/team-catalog.png)

3. Click on the `Quickstart-k8s-deployment` template.

![catalog](../../img/catalog-2.png)

In the Info tab you'll see some information about the Chart like the version and additional instructions.

4. Click on the `Values` tab.

![catalog](../../img/catalog-3.png)

From here you can create a Workload using the Catalog template by adding a name and changing the values. Go to the [next lab](create-workloads.md) to create a Workload.
