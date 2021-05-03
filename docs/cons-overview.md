---
slug: console/
title: Console Overview
sidebar_label: Overview
---

The Otomi CE Console UI has a topbar showing a team selector on the top and the logged-in user. The team selector allows to switch to the team one wishes to operate for. The UI also has a menu (on the left when in desktop mode). The menu shows the sections "Platform", "Enterprise", "Team `$name`" and "Cluster".

Screenshot (admin role):

![Console apps](img/console-apps.png)

## Platform section

The "Platform" section gives access to:

- The dashboard which gives stats about clusters, teams and services.
- [ADMIN ONLY] The list of admin applications.
- The otomi settings in use by the cluster.

## Enterprise section

The "Enterprise" section gives access to:

- The list of clusters in use by Otomi, allowing to switch to another cluster's console.
- The list of teams using this cluster.
- The list of all services running on this cluster.

## Team section

The "Team `$name`" section gives access to:

- The list of team managed services running on this cluster.
- The list of secrets created by the team.
- The list of secrets created by the team.
- The apps available to the team.

## Cluster section

The "Cluster" section shows:

- Cluster information such as name, cloud, region, k8s version, otomi version, etc.
- A "Download KUBECFG" link to download a KUBECONFIG file that gives access to the namespace of the team selected. Admins can download one with `cluster-admin` permissions (giving access to all namespaces) by setting the team selector to '-'. You can use it like `KUBECONFIG=$file_location kubectl ...` or by merging it with another KUBECONFIG file like `.kube/config`. Please visit the official k8s [documentation about managing kube contexts](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/).

## Enterprise edition

:::info Otomi Enterprise Edition license needed for self service functionality

If you have a license for Otomi EE you will get many more capabilities not found in the CE version.

:::

Administration of the Otomi Container Platform can be done most easily through the Otomi EE Console, which needs an enterprise license. The below information is solely aimed at operations through the Otomi EE Console, and is served when choosing "Help" from within the Console context.

Learn more about:

- [Apps](configuring-apps)
- [Clusters](configuring-clusters)
- [Teams](configuring-teams)
- [Services](configuring-services)
- [Secrets](configuring-secrets)
- [Settings](settings)
- [Deployment of changes](deploy-changes)
