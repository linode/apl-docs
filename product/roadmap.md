---
slug: roadmap
title: Product Roadmap
sidebar_label: Roadmap
---

## Supported Kubernetes version

We are committed to support three kubernetes version for a given Otomi major version.
Every time we drop support of a given Kubernetes version we increase Otomi major version.

| Otomi Version | Supported Kubernetes version | Expected date |
| ------------- | ---------------------------- | ------------- |
| v1.0.0        | 1.25, 1.26, 1.27             | 2023-09-28    |
| v2.0.0        | 1.26, 1.27, 1.28             | 2024-02-28    |
| v3.0.0        | 1.27, 1.28, 1.29             | 2024-05-28    |

## Roadmap

### 2023 Q4

- Implement status indicators within the Otomi Console to keep team users informed about the status of various components, including the Drone pipeline, Build process, Workload management, and Service availability.

- Create a Team Dashboard that provides an overview of team-specific namespaces and their associated resources, using Prometheus metrics as a basis for this information.

- Deploy Otomi by leveraging Drone and ArgoCD.

### 2024 Q1

- Strengthen the Istio service mesh configuration.
- Enhance network policies across the platform.
- Add support for ARM architecture.
- Enable configurable storage classes.
- Establish separate Kubernetes namespaces for Team Applications.
- Implement Gitea with a database managed by the CloudNativePG operator.
- Implement Drone with a database managed by the CloudNativePG operator.

### 2024 Q2

- Develop disaster recovery procedures for core Otomi applications, such as Gitea, Keycloak, Drone, and Harbor.
- Ensure Otomi's security compliance with hardening guides from NSA and CISA.
- Create an Application Dashboard.
