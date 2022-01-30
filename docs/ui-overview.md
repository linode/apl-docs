---
slug: console/
title: Overview
sidebar_label: Overview
---

![Console apps](img/console-apps.png)

## Otomi Console

Otomi Console is the web UI of Otomi and offers access to all pre-configured apps and self-service features.

Otomi Console has a topbar showing a cluster and team selector on the top and the logged-in user. The team selector allows to switch to the context one wishes to operate for. Otomi Console also has a menu (on the left when in desktop mode). The menu shows the sections "Enterprise", "Team `$name`" and "Cluster".

### Enterprise section

The "Enterprise" section gives access to:

- Apps: Shortcuts to the UI of integrated apps and pre-configured dashboards
- The list of known Otomi [Clusters](clusters)
- The list of all security policies (and if enabled yes/no)
- The list of [Teams](teams) using this cluster
- The list of all [Services](services) running on this cluster
- The list of all [Jobs](jobs) running on this cluster
- Cluster settings

### Team section

The "Team `$name`" section gives access to:

- The [Apps](team-apps) available to the team on this cluster
- The list of [Services](services) managed by the team on this cluster
- The list of [Jobs](jobs) managed by the team on this cluster
- The list of [Secrets](secrets) managed by the team on this cluster
- [Team](teams) settings

### Cluster section

The "Cluster" section shows:

- Cluster information such as name, cloud, region, k8s version, otomi version, etc
- A "Download KUBECFG" link to download a KUBECONFIG file that gives access to the namespace of the team selected. Admins can download one with `cluster-admin` permissions (giving access to all namespaces) by setting the team selector to '-'. You can use it like `KUBECONFIG=$file_location kubectl ...` or by merging it with another KUBECONFIG file like `.kube/config`.
- When Otomi uses an automatic generated CA or Let's Encrypt staging certificates, a "Download CA" link is provided.

Please visit the official k8s [documentation about managing kube contexts](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/).
