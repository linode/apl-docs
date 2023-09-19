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

- Incorporate status indicators in Otomi Console - team users should be informed about status of the Drone pipline, Build, Workload, Service
- Team dashboard - an overview of the team-namespaces and corresponding resources based on prometheus metrics
- Deploy Otomi with Drone and ArgoCD

### 2024 Q1

- Istio service mesh configuration hardening
- Platform wide network policies hardening
- Support for ARM
- Configurable storage classes
- Team Applications with own kubernetes namespace
- Gitea with database managed by CloudNativePG operator
- Drone with database managed by CloudNativePG operator

### 2024 Q2

- Disaster recovery procedures of the Otomi core applications (Gitea, Keycloak, Drone, Harbor)
- Otomi security compliance with the NSA and CISA hardening guides
- Application Dashboard
