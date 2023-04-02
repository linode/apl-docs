---
slug: lab-6
title: Deploy workloads using Otomi
sidebar_label: Lab 6
---

In the previous 2 parts we have explained how to deploy a workload with a BYO manifest using Kubectl and how to deploy a workload with a BYO manifest using ArgoCD in Otomi. In this part we'll deploy a workload using the Otomi Workloads feature.

When creating workloads in Otomi, the specifications (URL and path) and the values of a Helm chart is stored in `otomi-values` and then used to automatically create the ArgoCD resources to deploy the workload.

## Creating a Workload

You can create a workload to deploy your own Helm chart, or you can use one of the `otomi-charts` Helm charts. In this case we'll use the deployment chart in the `otomi-charts` repo.

1. Enter a name for the workload

```
hello-deploy
```

2. Enter the URL to the Git repo containing the Helm Chart or a Helm repository:

```
https://github.com/redkubes/otomi-charts.git
```

3. Enter the path of the chart

```
deployment
```

4. Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version
5. Click `Submit`

After submitting the new workload specs, the values editor will be shown. Here you can edit the chart values.

1. Click on `Edit`
2. Add the following (minimal) values:

```
fullnameOverride: hello-deploy
image:
  repository: otomi/nodejs-helloworld
  tag: v1.2.13
servicePorts:
  - port: 80
    targetPort: http
    protocol: TCP
    name: http
containerPorts:
  - name: http
    containerPort: 8080
    protocol: TCP
```


3. Click `Submit`

Now click on `Deploy Changes`

After a few minutes, Otomi will have created all the needed ArgoCD resources to deploy your workload. In the workloads list, click on the `Application` link of your workload to see the status of your workload.

The values of a workload can be changed at any time. Changes will automatically be deployed.