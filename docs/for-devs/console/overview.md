---
slug: overview
title: Overview
sidebar_label: Overview
---

<!-- ![Console apps](img/apps.png) -->

## APL Console

APL Console is the web UI of APL and offers access to all integrated apps and self-service features. APL Console has a topbar showing a Team selector. The Team selector allows you to switch between different Teams (if you are a member of different Teams).

The Team view in APL Console gives access to 3 menu sections:

Deploy section:

- [Deploy Changes](deploy-changes): Commit changes to the configuration repository
- Revert Changes: Revert your changes made in APL Console

Self-service section:

- [Apps](dashboard.md): An overview of Team Pod status, resource utilization and vulnerabilities.
- [Apps](apps.md): All the apps available to the team on this platform.
- [Catalog](catalog.md): The Helm charts available for the Team in the Catalog.
- [Projects](projects.md): A list of all Projects created by the team.
- [Builds](builds.md): A list of all Builds created by the team.
- [Sealed Secrets](sealed-secrets.md): A list of all Sealed Secrets created by the Team.
- [Workloads](workloads.md): A list of all Workloads created by the Team.
- [Network Policies](netpols.md): A list of all Network Policies created by the team.
- [Services](services.md): A list of all team services.
- [Security Policies](security-policies.md): A list of all Security Policies applicable to the Team.
- [Settings](settings.md): Specific Team configuration options.
- [Shell](shell.md): Access to the cloud Shell within the context of the Team.

Download links section:

- A "Download KUBECFG" link to download a KUBECONFIG file that gives access to the namespace of the team selected. Admins can download one with `cluster-admin` permissions (giving access to all namespaces) by setting the team selector to '-'. You can use it like `export KUBECONFIG=$file_location` or by merging it with another KUBECONFIG file like `.kube/config`. Please visit the official Kubernetes [documentation about managing kube contexts](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/).
- When Harbor is enabled, a link to download the Dockercfg file.
- When APL uses an automatic generated CA or Let's Encrypt staging certificates, a "Download CA" link is provided.

