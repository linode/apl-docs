---
slug: roadmap
title: Product Roadmap
sidebar_label: Roadmap
---

## Supported Kubernetes version

We are dedicated to maintain support for three different Kubernetes versions within a specific major version of Otomi. Whenever we decide to discontinue support for a particular Kubernetes version, we increment the major version of Otomi.

| Otomi Version | Supported Kubernetes version | Expected date |
| ------------- | ---------------------------- | ------------- |
| v1.0.0        | 1.25, 1.26, 1.27             | 2023-09-28    |
| v2.0.0        | 1.26, 1.27, 1.28             | 2024-02-28    |
| v3.0.0        | 1.27, 1.28, 1.29             | 2024-05-28    |

## Roadmap

### 2023 Q4

- Implement status indicators within Otomi Console to keep Team users informed about the status of various components, including Drone pipeline, Build processes, Workload management, and Service availability
- Deploy Otomi by leveraging Drone and ArgoCD
- Quality assurance cluster for continuous Otomi hardening and performance test

### 2024 Q1

- Add Team Dashboards to provide an overview of team-specific resources using Prometheus metrics
- Harden the Istio service mesh configuration
- Add support for ARM architecture
- Enable user configurable storage classes
- Implement Gitea with a database managed by the CloudNativePG operator
- Implement Drone with a database managed by the CloudNativePG operator

### 2024 Q2

- Enhance network policies across the platform
- Provide disaster recovery procedures for core Otomi applications, such as Gitea, Keycloak, Drone, and Harbor
- Establish separate Kubernetes namespaces for Team Applications
- Ensure Otomi's NSA and CISA compliance
- Provide Application Dashboards
