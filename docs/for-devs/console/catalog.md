---
slug: catalogs
title: App Catalogs
sidebar_label: App Catalogs
---

## About the Catalog Helm charts

A catalog is a library of curated Helm charts to create Kubernetes resources. The default Catalog contains a set of Helm charts provided to get started quickly. Platform administrators are managing the registered catalogs in the platform view and team members are deploying application from a given catalog in the team view.

## Catalog management

Each catalog has a single version that is set during the catalog registration. It is recommended to set a tag instead branch to ensure stability.
The catalog version can be changed at any time by the platform administrator. It is worth noting that the version change does not affect the existing team workloads and takes an effect only for new workloads deployed from that catalog.

Platform administrators can manage and register additional catalogs in the `Catalogs` page from the platform view.

## Deploying workloads from the catalog

A user selects a given catalog and an application to be deployed. Next, team member can adjust helm values and submit the change. The application status can be seen in the `Workloads` page.

The workload version does not follow the catalog version automatically. Team member can adjust its version independently from the catalog version.

## Catalog usage recommendations

- Use immutable Git tags (not branches) for catalog registration to ensure stable and repeatable deployments.
- Follow semantic versioning (SemVer) for catalog tags.
- Bump the catalog major version for breaking chart changes, and minor/patch versions for backward-compatible updates and fixes.
- Validate chart updates in a non-production environment before promoting a new catalog tag in the App Platform.
- Keep release notes for each catalog tag so teams can see what changed and plan workload upgrades.
- Upgrade existing workloads individually after a catalog update, because workload versions do not update automatically.

## Default Catalog

The default catalog is hosted at https://github.com/linode/apl-charts
It contains a set of Helm charts that can be used as quick starts. The following quick starts are available:

1. Kubernetes Deployment

The `k8s-deployment` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

2. Kubernetes Deployment with Open Telemetry Instrumentation

The `k8s-deployment-otel` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service`, a `ServiceAccount` and an `Instrumentation` resource. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

3. Kubernetes Canary Deployments

The `k8s-deployments-canary` Helm chart can be used to create 2 Kubernetes `Deployments` (to deploy 2 versions of an image), a `Service` and a `ServiceAccount` resource. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` (for each version) can be created.

4. Knative-service

The `knative-service` Helm chart can be used to create a Knative `Service` (to deploy a single image), a `Service` and a `ServiceAccount`. Optionally a Prometheus `ServiceMonitor` can be created.

5. PostgreSQL cluster

The `postgresql-cluster` Helm chart can be used to create a cloudnativepg PostgreSQL `Cluster`. Optionally a Prometheus `PodMonitor` and a `Configmap` (for adding a postgresql dashboard to Grafana) can be created.

6. Redis high availability cluster

The `redis-ha` Helm chart can be used to create a Redis high availability cluster with master-replica topology and HAProxy load balancer.

7. RabbitMQ Cluster and/or Queues

The `rabbitmq-cluster` Helm chart can be used to create a `RabbitmqCluster`, `queues` and `Policy`s.

Using the `rabbitmq-cluster` Helm chart requires `RabbitMQ` to be enabled by a platform administrator.
