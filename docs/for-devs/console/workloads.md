---
slug: workloads
title: Team Workloads
sidebar_label: Workloads
---

<!-- ![Console: new service](img/team-services.png) -->

A Workload in Otomi is a self-service feature for:

- Deploying Kubernetes workloads
  * A regular Kubernetes deployment with a HPA (Horizontal Pod Autoscaler)
  * A Knative service
- Automatically create the ArgoCD resources to deploy the workload in a GitOps way
- Manage the custom values of the workloads in Git

:::info
Ask you platform administrator to activate ArgoCD to be able to use this feature.
:::

:::info
Ask you platform administrator to activate Knative to be able to create Function as a Service workloads.
:::


## Create a Workload

1. Select the workload type

- Regular application: will use the [Otomi deployment Helm chart](https://github.com/redkubes/otomi-charts)
- Function as a Service: will use the [Otomi Knative service Helm chart](https://github.com/redkubes/otomi-charts)
- Bring your own Helm chart: use your own (custom) Helm chart

## Regular application

1. Enter a name for the workload
2. Fill in the image name of the image the workload will deploy
3. Fill in the tag of the image
4. (optionally) Adjust the port
5. (optionally) Adjust the required CPU and memory resources
6. (optionally) Adjust the Min and Max instances. This will be used to auto-scale the application based on a Kubernetes HPA
7. Click `Next`
8. Review the Values used to install the chart. Optionally add more values. See [here](https://github.com/redkubes/otomi-charts) for all supported values

## Function as a Service

1. Enter a name for the workload
2. Fill in the image name of the image the workload will deploy
3. Fill in the tag of the image
4. (optionally) Adjust the port
5. (optionally) Adjust the required CPU and memory resources
6. (optionally) Adjust the Min and Max instances. This will be used by Knative to auto scale the application. By default the Min count is set to `0`. This means that the workload will scale to zero. The application container in this case will start when a request is received.
7. Click `Next`
8. Review the Values used to install the chart. Optionally add more values. See [here](https://github.com/redkubes/otomi-charts) for all supported values

## BYO Helm chart

1. Enter a name for the workload
2. Enter the URL to the Git repo containing the Helm Chart or a Helm repository
3. Optionally (only when using a Git repo) add the relative directory path within the Git repository. Absolute paths cause errors.
4. Optionally (only when using a Chart registry) add the name of the Helm chart
5. Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version
6. Click `Next`
7. Review the Values used to install the chart
8. Click `Submit`

Now click on `Deploy Changes`

After a few minutes, Otomi will have created all the needed ArgoCD resources to deploy your workload. In the workloads list, click on the `Application` link of your workload to see the status of your workload.

The values of a workload can be changed at any time. Changes will automatically be deployed.

