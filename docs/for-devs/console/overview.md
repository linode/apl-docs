---
slug: overview
title: Overview
sidebar_label: Overview
---

<!-- ![Console apps](img/apps.png) -->

## Console

The Console is the web UI of the platform and offers access to all integrated apps and self-service features. The Console has a topbar showing a Team selector. The Team selector allows you to switch between different Teams (if you are a member of different Teams).

The Team view in the Console gives access to 2 sections:

Self-service section:

- [Dashboard](dashboard.md): An overview of Team Pod status, resource utilization and vulnerabilities.
- [Apps](apps.md): All the apps available to the Team.
- [Catalog](catalog.md): The Helm charts available for the Team in the Catalog.
- [Projects](projects.md): A self-service form to create Projects.
- [Builds](builds.md): A self-service form to create Builds.
- [Sealed Secrets](sealed-secrets.md): A self-service form to create Sealed Secrets.
- [Workloads](workloads.md): A self-service form to create Workloads.
- [Network Policies](netpols.md): A self-service form to create Network Policies.
- [Services](services.md): A self-service form to create Services.
- [Security Policies](security-policies.md): A list of all Security Policies applicable to the Team.
- [Settings](settings.md): Specific Team configuration options.

Access Section:

- [Shell](shell.md): Access to the cloud Shell within the context of the Team.
- A "Download KUBECFG" link to download a KUBECONFIG file that gives access to the namespace of the team selected. Admins can download one with `cluster-admin` permissions (giving access to all namespaces) by setting the team selector to '-'. You can use it like `export KUBECONFIG=$file_location` or by merging it with another KUBECONFIG file like `.kube/config`. Please visit the official Kubernetes [documentation about managing kube contexts](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/).
- When Harbor is enabled, a link to download the Dockercfg file.
- When automatic generated CA or Let's Encrypt staging certificates are used, a "Download CA" link is provided.

