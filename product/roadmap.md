---
slug: roadmap
title: Product Roadmap
sidebar_label: Roadmap
---

# Supported Kubernetes version

We are dedicated to maintain support for three different Kubernetes versions within a specific major version of Otomi. Whenever we decide to discontinue support for a particular Kubernetes version, we increment the major version of Otomi.

| Otomi Version | Supported Kubernetes version | Expected date |
| ------------- | ---------------------------- | ------------- |
| v1.0.0        | 1.25, 1.26, 1.27             | 2023-09-28    |
| v2.0.0        | 1.25, 1.26, 1.27             | 2023-11-28    |
| v3.0.0        | 1.26, 1.27, 1.28             | 2024-03-28    |

# Roadmap

## 2023 Q4

- Provide a developer catalog in Gitea
- Migrate platform pipeline from Drone to Tekton
- Leverage Argo CD to deploy Otomi apps and Teams
- Quality assurance cluster for continuous Otomi hardening and performance testing

## 2024 Q1

- Implement status indicators within Otomi Console to keep Team users informed about the status of various components, including Build processes, Workload management, and Service availability
- Harden the Istio service mesh configuration
- Add support for ARM architecture
- Enable user configurable storage classes
- Implement Gitea with a database managed by the CloudNativePG operator
- Provide disaster recovery procedures for Otomi core applications, such as Gitea, Keycloak and Harbor
- Implement a new secret management solution (as a replacement for Hashicorp Vault)

## 2024 Q2

- Add Team Dashboards to provide an overview of team resource status using Prometheus metrics
- Enhance network policies across the platform
- Establish separate Kubernetes namespaces for Team Applications
- Ensure Otomi's NSA and CISA compliance
- Provide Application specific dashboards

## After Q2 2024

After Q2 2024 we have the following goals:

- Make Otomi more plugable by enabling users to bring their own platform apps
- Offer more middleware services (like caching, message queuing, databases)
- Migrate to ambient mesh using eBPF
- Remove platform app forms in favor of generated values that can be customized in an editor
