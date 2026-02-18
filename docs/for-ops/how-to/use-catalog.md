---
slug: catalog
title: Managing Catalogs
sidebar_label: Manage Catalogs
---

A Catalog is made available to Teams on the platform to offer them golden path templates (Helm charts). This is how it works:

- Use the default catalog or add catalogs in the platform view.

- Teams can create Workloads from picking a Catalog and using the charts that are in them.

The default catalog (which points to the `https://github.com/linode/apl-charts` repository) will contain a set of quick start Helm charts. The default catalog is not mandatory to use and can be removed or modified to your own liking by forking the repository, modifying it and re-adding it. It is only provided to make it easier to get started. 

## Managing the catalogs

To manage the catalogs, go to platform view and then go to catalogs. From here you can create, edit or delete existing catalogs.

### Creating a Catalog

To create a catalog go to platform view and click Catalogs in de sidebar. From here click on the create catalog button.

Now fill in the following required fields `Catalog name`, `Repository URL` and `Branch`. To test the connection to the repository click the `Test Connection` button. Afterwards decide if you want the catalog chart to be available for use by checking the `enabled` checkbox. When everything is filled in click the `Create Catalog button` and if `enabled` the catalog is ready for use in the teams overview.

:::note Note
The Test connection only uses the `repositoryURL` and checks if the platform can access the repository, we don't check if the branch exists or if there are catalogs in the repository.
:::

### Editing/Removing a Catalog

To edit or remove a catalog go to the platform view and click Catalogs in the sidebar. From here click on one of the existing catalogs in the table.

From here you can edit the catalog by changing the `Repository URL`, `branch` and if the catalog should be `enabled` or not. Or remove the catalog by clicking the `Delete` button.

## Using the catalogs

To use the catalogs you need to go to the team view and click Catalog in de sidebar or go to Workloads and click `Create Workload`. Here you will see a dropdown which contains all the `enabled` catalogs. By default it will select the `default` catalog or the first catalog in the list. If the catalog contains helm charts then they will show up on the page and can be used by clicking on the chart that you want to use.

## Quick start Helm charts

The default Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:

### quickstart-k8s-deployment

The `k8s-deployment` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

### quickstart-k8s-deployment-otel

The `k8s-deployment-otel` Helm chart can be used to create a Kubernetes `Deployment` (to deploy a single image), a `Service`, a `ServiceAccount`, an `OpenTelemetryCollector` and an `Instrumentation`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` can be created.

### quickstart-k8s-deployments-canary

The `k8s-deployments-canary` Helm chart can be used to create 2 Kubernetes `Deployments` (to deploy 2 versions of an image), a `Service` and a `ServiceAccount`. Optionally a `HorizontalPodAutoscaler`, a Prometheus `ServiceMonitor` and a `Configmap` (for each version) can be created.

### quickstart-knative-service

The `knative-service` Helm chart can be used to create a Knative `Service` (to deploy a single image), a `Service` and a  `ServiceAccount`. Optionally a Prometheus `ServiceMonitor` can be created.

### quickstart-postgresql

The `postgresql-cluster` Helm chart can be used to create a cloudnativepg PostgreSQL `Cluster`. Optionally a Prometheus `PodMonitor` and a `Configmap` (for adding a postgresql dashboard to Grafana) can be created.

### quickstart-redis

The `redis-ha` Helm chart can be used to create a Redis high availability cluster with master-replica topology and HAProxy load balancer.
