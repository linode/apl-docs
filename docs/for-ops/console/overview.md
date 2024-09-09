---
slug: overview
title: Overview
sidebar_label: Overview
---

<!-- ![Console apps](img/apps.png) -->

## APL Console

APL Console is the web UI of APL and offers access to all integrated apps and self-service tasks.

APL Console has a topbar showing a View and a Team selector. The View selector allows to switch between the `Platform` and the `Team` view.

### Platform View

The Platform View provides access to:

- [Dashboard](dashboard.md): A global overview of cluster resource utilization and cluster resource request commitments.
- [Apps](apps.md): All active and inactive apps. Activate apps clicking on the power-on button.
- [Teams](teams.md): A list of all Teams.
- [Projects](projects.md): A list of all Projects.
- [Builds](builds.md): A list of all Builds.
- [Workloads](workloads.md): A list of all Workloads.
- [Network Policies](netpols.ml): A list of all Network Policies.
- [Services](services.md): A list of all Services.
- [Backups](backups.md): A list of all Backups.
- [Maintenance](maintenance.md): Maintenance actions.
- [Settings](settings/alerts.md): Specific configuration of the platform.

### Team View

The Team View gives access to:

- [Dashboard](../../for-devs/console/dashboard.md): An overview of Team Pod status, resource utilization and vulnerabilities.
- [Apps](../../for-devs/console/apps.md): All the apps available to the team on this platform.
- [Catalog](../../for-devs/console/catalog.md): The Helm charts available for the Team in the Catalog.
- [Projects](../../for-devs/console/projects.md): A list of all Projects created by the team.
- [Builds](../../for-devs/console/builds.md): A list of all Builds created by the team.
- [Sealed Secrets](../../for-devs/console/sealed-secrets.md): A list of all Sealed Secrets created by the Team.
- [Workloads](../../for-devs/console/workloads.md): A list of all Workloads created by the Team.
- [Network Policies](../../for-devs/console/netpols.md): A list of all Network Policies created by the team.
- [Services](../../for-devs/console/services.md): A list of all team services.
- [Security Policies](../../for-devs/console/security-policies.md): A list of all Security Policies applicable to the Team.
- [Settings](../../for-devs/console/settings.md): Specific Team configuration options.
- [Shell](../../for-devs/console/shell.md): Access to the cloud Shell within the context of the Team.

The Team section also provided the following download links:

- A "Download KUBECFG" link to download a KUBECONFIG file that gives access to the namespace of the team selected. Admins can download one with `cluster-admin` permissions (giving access to all namespaces) by setting the team selector to '-'. You can use it like `export KUBECONFIG=$file_location` or by merging it with another KUBECONFIG file like `.kube/config`. Please visit the official Kubernetes [documentation about managing kube contexts](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/).
- When Harbor is enabled, a link to download the Dockercfg file.
- When APL uses an automatic generated CA or Let's Encrypt staging certificates, a "Download CA" link is provided.

