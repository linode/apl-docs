---
slug: catalog
title: Catalog
sidebar_label: Catalog
---

## About the Catalog Helm charts

The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. 

The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team.

The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:

1. Kubernetes Deployment

The `k8s-deployment` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

2. Kubernetes Deployment with Open Telemetry Instrumentation

The `k8s-deployment-otel` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service`, a `ServiceAccount` and an `Instrumentation` resource. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

3. Kubernetes Canary Deployments

The `k8s-deployments-canary` Helm chart can be used to create 2 Kubernetes `Deployments` (to deploy 2 versions of an image), a `Service` and a `ServiceAccount` resource. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` (for each version) can be created.

4. Knative-service

The `knative-service` Helm chart can be used to create a Knative `Service` (to deploy a single image), a `Service` and a  `ServiceAccount`. Optionally a Prometheus `ServiceMonitor` can be created.

5. PostgreSQL cluster

The `postgresql-cluster` Helm chart can be used to create a cloudnativepg PostgreSQL `Cluster`. Optionally a Prometheus `PodMonitor` and a `Configmap` (for adding a postgresql dashboard to Grafana) can be created.

6. Redis master-replica cluster

The `redis-cluster` Helm chart can be used to create a Redis master-replica cluster.

7. RabbitMQ Cluster and/or Queues

The `rabbitmq-cluster` Helm chart can be used to create a `RabbitmqCluster`, `queues` and `Policy`s.

Using the `rabbitmq-cluster` Helm chart requires `RabbitMQ` to be enabled by a platform administrator. 

8. SpinApp

The `spin-app` Helm chart can be used to create a `SpinApp`. A SpinApp is a Custom Resource to deploy WebAssembly microservices and web applications based on Spin.

Using the `spin-app` Helm chart requires a `spin-shim-executor` to be added to the Team by a platform administrator.


## Using the Catalog

1. Click on `Catalog` in the left menu

2. You will now see all the templates that are available for use

3. Click on the `k8s-deployment` template. In the Info tab you'll see some information about the Chart like the version and additional instructions.

4. Click on the `Values` tab

5. Continue to [create a workload](workloads.md)
