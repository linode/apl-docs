---
slug: lab-14
title: Deploy serverless workloads
sidebar_label: Lab 14
---

Otomi uses Knative serving for serverless (or Function as a Service) support.

As a developer, you'll have the following options to deploy serverless workloads:

- BYO Knative service manifest and deploy it using kubectl or ArgoCD
- Use the workloads feature with the knative Helm Chart in `otomi-charts`

In this lab we're going to create a workload in Otomi to create a Knative service using the knative chart in `otomi-charts`.

## Create a workload

1. Enter a name for the workload

```
hello-ksvc
```

2. Enter the URL to the Git repo containing the Helm Chart or a Helm repository:

```
https://github.com/redkubes/otomi-charts.git
```

3. Enter the path of the chart

```
ksvc
```

4. Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version
5. Click `Submit`

After submitting the new workload specs, the values editor will be shown. Here you can edit the chart values.

1. Click on `Edit`
2. Add the following (minimal) values:

```
fullnameOverride: hello-ksvc
image:
  repository: otomi/nodejs-helloworld
  tag: v1.2.13
```

3. Click `Submit`

Now click on `Deploy Changes`


## Publicly expose the service

- In the left menu panel under click `Services` then click on `Create Service`

- Fill in the name of the (existing) knative service: `hello-world-ksvc`

- Under `service-type` select `existing knative service`

- Under `Exposure Ingress`, select `Ingress` and use the default configuration

- Click on `Submit`
  
- Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit).




