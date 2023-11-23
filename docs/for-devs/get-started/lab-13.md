---
slug: lab-13
title: Deploy workloads using Otomi
sidebar_label: Create workloads
---

In the previous lab we deployed a workload using Argo CD. In this lab we'll deploy a regular workload (a Kubernetes Deployment) using the Otomi Developer Catalog and Otomi Workload feature.

The Otomi Developer Catalog allows to store any Helm chart in the `otomi/charts` repository in Gitea. By deploying a given Helm chart from the catalog, Otomi saves the corresponding Helm chart values in a separate file in the `otomi/values` repo. Otomi configures Argo CD to observe the values and automatically deploy changes when values are adjusted (based on the GitOps principle).

## About the Developer Catalog

The Developer Catalog in Otomi is a curated list of Helm charts that can be used in workloads to create Kubernetes resources. The catalog by default only contains a set of Otomi quick start Helm charts.

## Create a Workload from the Developer Catalog

Before creating a workload from the developer catalog, we'll need the `repository` and `tag` of the image to use. Go to the list of Builds and add the `repository` of the `blue` build to your clipboard. Remember that the tag is `latest`.

You can create a workload from the developer catalog:

1. Go to `Workloads` in the left menu and click on `New Workload`

2. Add the Name `blue` for the workload

3. Select `otomi-quickstart-k8s-deployment` from the catalog

4. Leave the `Auto image updater` to `Disabled`

5. In the workload `values`, change the following parameters:

```yaml
image:
  repository: <paste from clipboard>
  tag: latest
```

6. Click `Submit`

Now click on `Deploy Changes`

After a few minutes, Otomi will have created all the needed Argo CD resources to deploy your workload. In the workloads list, click on the `Application` link of your workload to see the status of your workload in Argo CD.

The values of a workload can be changed at any time. Changes will be deployed automatically.
