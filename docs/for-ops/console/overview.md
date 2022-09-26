---
slug: overview
title: Overview
sidebar_label: Overview
---

<!-- ![Console apps](img/apps.png) -->

## Otomi Console

Otomi Console is the web UI of Otomi and offers access to all integrated apps and self-service tasks.

Otomi Console has a topbar showing a cluster and team selector, the logged-in user and a dark/light-mode. The team selector allows to switch to your desired context. Otomi Console also has a menu on the left. This menu shows the sections "Platform", "Team `$name`" and "Cluster".

### Platform section

The Platform section in the left menu provides access to:

- Dashboard
- [Apps](apps): All active and inactive apps. Activate apps by dragging them to the active apps section
- [Shortcuts](shortcuts): A list off all shortcuts created on this platform
- [Clusters](clusters): A list of all known Kubernetes clusters running Otomi 
- [Policies](policies): A list of all available security policies and their configuration for this platform
- [Teams](teams): A list of all Teams using this platform
- [Services](services): A list of all services running on this platform
- [Jobs](jobs): A list of all Jobs running on this platform
- [Settings](settings/alerts): Specific configuration of the platform

### Team section

The Team `$name` section gives access to:

- [Apps](../../for-devs/console/apps): All the apps available to the team on this platform
- [Shortcuts](../../for-devs/console/shortcuts): All shortcuts available to the team on this platform
- [Services](../../for-devs/console/services): Services managed by the team on this platform
- [Jobs](../../for-devs/console/jobs): Jobs managed by the team on this platform
- [Secrets](../../for-devs/console/secrets): Secrets managed by the team on this platform
- [Settings](../../for-devs/console/settings): Specific Team configuration options

### Cluster section

The Cluster section shows:

- Cluster information such as name, cloud, region, k8s version, otomi version, etc
- A "Download KUBECFG" link to download a KUBECONFIG file that gives access to the namespace of the team selected. Admins can download one with `cluster-admin` permissions (giving access to all namespaces) by setting the team selector to '-'. You can use it like `export KUBECONFIG=$file_location` or by merging it with another KUBECONFIG file like `.kube/config`.
- When Otomi uses an automatic generated CA or Let's Encrypt staging certificates, a "Download CA" link is provided.

Please visit the official Kubernetes [documentation about managing kube contexts](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/).
