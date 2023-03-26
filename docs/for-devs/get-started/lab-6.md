---
slug: lab-6
title: Deploy workloads using Otomi
sidebar_label: Lab 6
---

In the previous 2 parts we have explained how to deploy a workload with a BYO manifest using Kubectl and how to deploy a workload with a BTO manifest using ArgoCD in Otomi. In this part we'll deploy a workload using the Otomi Workloads feature.

## Create a Workload

1. Enter a name for the workload
2. Enter the URL to the Git repo containing the Helm Chart or a Helm repository
3. Optionally (only when using a Git repo) add the relative directory path within the Git repository. Absolute paths cause errors.
4. Optionally (only when using a Chart registry) add the name of the Helm chart
5. Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version
6. Click `Submit`

After submitting the new workload specs, the values editor will be shown. Here you can edit the chart values.

1. Click on `Edit`
2. Add your values (or leave empty to use chart default values)
3. Click `Submit`

Now click on `Deploy Changes`

After a few minutes, Otomi will have created all the needed ArgoCD resources to deploy your workload. In the workloads list, click on the `Application` link of your workload to see the status of your workload.

The values of a workload can be changed at any time. Changes will automatically be deployed.