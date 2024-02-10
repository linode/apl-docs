---
slug: roadmap
title: Product Roadmap
sidebar_label: Roadmap
---

# Roadmap

## Supported Kubernetes version

We are dedicated to maintain support for three different Kubernetes versions within a specific major version of Otomi. Whenever we decide to discontinue support for a particular Kubernetes version, we increment the major version of Otomi.

| Otomi Version | Supported Kubernetes version | Expected release date |
| ------------- | ---------------------------- | ------------- |
| v1.0.0        | 1.25, 1.26, 1.27             | 2023-09-28    |
| v2.0.0        | 1.25, 1.26, 1.27             | 2023-11-28    |
| v3.0.0        | 1.26, 1.27, 1.28             | 2024-03-28    |

## 2023 Q4

- Provide a developer catalog in Gitea ✅
- Migrate platform pipeline from Drone to Tekton ✅
- Implement status indicators within Otomi Console to keep Team users informed about the status of various components, including Build processes, Workload management, and Service availability ✅
- Add Team and Platform Dashboards to provide an overview of team resource status using Prometheus metrics ✅
- Leverage Argo CD to deploy Team K8s resources ✅
- Quality assurance cluster for continuous Otomi hardening and performance testing ✅
- Provide UI interface for adding Helm charts to developer catalog in Gitea ✅

## 2024 Q1

- Add Grype to the Otomi Build pipeline to scan source code for security vulnerabilities ✅
- Add the option to add charts from [artifacthub](https://artifacthub.io) to the Catalog 🔄
- Implement a new secret management solution (as a replacement for Hashicorp Vault) 🔄
- Move network policies out of the Service configuration to improve network policy management 🔄
- Migrate OPA/Gatekeeper to Kyverno and offer a large set of default policies that can also be managed by Teams 🔄
- Improve Team self-service permissions 🔄
- Leverage Argo CD to deploy Otomi Platform apps 🔄
- Harden the Istio service mesh configuration
- Implement Gitea with a database managed by the CloudNativePG operator
- Migrate Harbor and Keycloak Jobs to the Otomi operators
- Create an Organization in Gitea for each Team (tenant)

## 2024 Q2

- Bring user management into Otomi when Keycloak is used as an IdP
- Enhance network policies across the platform
- Establish separate Kubernetes namespaces for Team Applications
- Ensure Otomi's NSA and CISA compliance
- Enable user configurable storage classes
- Provide disaster recovery procedures for Otomi core applications, such as Gitea, Keycloak and Harbor
- Show a compliance report (code vulnerabilities, image vulnerabilities, security violations, container vulnerabilities, config audit, exposed secrets) per workload

## After Q2 2024

After Q2 2024 we have the following goals:

- Make Otomi more plugable by enabling users to bring their own platform apps
- Migrate to ambient mesh using eBPF
- Remove platform app forms in favor of generated values that can be customized in an editor
