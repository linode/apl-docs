---
slug: team-admin-overview
title: Team Admin Overview
sidebar_label: Overview
---

## The Console - Team Admin

The Console is the web UI of the platform and offers access to all integrated apps and self-service tasks. The Console has a topbar showing a View and a Team selector. The View selector allows to switch between the `Platform` and the `Team` view.

Self-service section:

- [Catalog](team-admin-catalog.md): The Helm charts available for platform administrators to install in any namespace
- [Code Repositories](team-admin-code-repositories.md): A self-service form for platform administrators to register code repositories.
- [Container Images](team-admin-container-images.md): A self-service form for platform administrators to create container images from registered code repositories.
- [Secrets](team-admin-secrets.md): A self-service form for platform administrators to create a secret using Sealed Secrets.
- [Workloads](team-admin-workloads.md): A self-service form to create for platform administrators Workloads in any namespace.
- [Network Policies](team-admin-netpols.md): A self-service form for platform administrators to create Network Policies (in the `team-admin` namespace only).
- [Services](team-admin-services.md): A self-service form for platform administrators to create Services to expose endpoints (`ClusterIP` services) from any namespace.
- [Security Policies](team-admin-security-policies.md): A list of all Security Policies applicable to the `team-admin` namespace only.

Access Section:

- [Shell](shell.md): Access to the cloud Shell within the context of the complete cluster (all namespaces).
- The `Download KUBECFG` is disabled for platform administrators.
- When Harbor is enabled, a link to download the Dockercfg file.
- When automatic generated CA or Let's Encrypt staging certificates are used, a "Download CA" link is provided.



