---
slug: roadmap
title: Product Roadmap
sidebar_label: Roadmap
---

# Roadmap

## Supported Kubernetes version

We are dedicated to maintain support for three different Kubernetes versions within a specific major version of Otomi. Whenever we decide to discontinue support for a particular Kubernetes version, we increment the major version of Otomi.

| Otomi Version | Supported Kubernetes version | Expected release date |
| ------------- | ---------------------------- | --------------------- |
| v1.0          | 1.24, 1.25, 1.26             | 2023-09-28            |
| v2.0          | 1.25, 1.26, 1.27             | 2023-11-28            |
| v3.0          | 1.26, 1.27, 1.28             | 2024-03-28            |
| v4.0          | 1.27, 1.28, 1.29             | 2024-05-14            |

## Plan

### 2023 Q4

- Provide a developer catalog in Gitea ✅
- Migrate platform pipeline from Drone to Tekton ✅
- Implement status indicators within Otomi Console to keep Team users informed about the status of various components, including Build processes, Workload management, and Service availability ✅
- Add Team and Platform Dashboards to provide an overview of team resource status using Prometheus metrics ✅
- Leverage Argo CD to deploy Team K8s resources ✅
- Quality assurance cluster for continuous Otomi hardening and performance testing ✅
- Provide UI interface for adding Helm charts to developer catalog in Gitea ✅

### 2024 Q1

- Add Grype to the Otomi Build pipeline to scan source code for security vulnerabilities ✅
- Implement a new secret management solution (as a replacement for Hashicorp Vault) ✅
- Move network policies out of the Service configuration to improve network policy management 🔄
- Migrate OPA/Gatekeeper to Kyverno and offer a large set of default policies that can also be managed by Teams 🔄
- Improve Team self-service permissions ✅
- Harden the Istio service mesh configuration
- Create an Organization in Gitea for each Team (tenant)

### 2024 Q2

- Add the option to add charts from [artifacthub](https://artifacthub.io) to the Catalog 🔄
- Implement Gitea with a database managed by the CloudNativePG operator
- Migrate Harbor and Keycloak Jobs to the Otomi operators
- Enhance network policies across the platform
- Enable user configurable storage classes
- Provide disaster recovery procedures for Otomi core applications, such as Gitea, Keycloak and Harbor

### Q3 2024

After Q2 2024 we have the following goals:

- Leverage Argo CD to deploy Otomi Platform apps 🔄
- Bring user management into Otomi when Keycloak is used as an IdP
- Ensure Otomi's NSA and CISA compliance
- Show a compliance report (code vulnerabilities, image vulnerabilities, security violations, container vulnerabilities, config audit, exposed secrets) per workload
- Make Otomi more plugable by enabling users to bring their own platform apps

### Q4 2024

- Migrate to ambient mesh using eBPF
- Remove platform app forms in favor of generated values that can be customized in an editor
- Encrypt platform secrets with SealedSecrets instead of SOPS
- Migrate to ambient mesh using eBPF

## Removed features by release

### v3.0

#### Drone

Otomi will stop delivering Drone as a platform app.
The Tekton app is introduced in Otomi v2.0 as a replacement. There is no migration procedure, Drone is used primarely as an Otomi deployment pipeline. However if you used it as for custom pipeline then you may need to migrate them Tekton.

:::note
This app will not be deleted if it is already deployed.
:::

#### Hashicorp Vault

Otomi will stop delivering the Hashicorp Vault as a platform app.
The SealedSecrets app is introduced in Otomi v2.7 as a replacement.
The procedure to migrate from Hashicorp Vault to SealedSecrets is going to be announced soon.

:::note
This app will not be deleted if it is already deployed.
The external-secrets app is still going to be part of Otomi
:::

#### OPA Gatekeeper

Otomi will stop delivering the OPA Gatekeeper as a platform app.
The Kyverno app is introduced in Otomi v2.7 as a replacement. There is no migration procedure, as the basic policies are already covered. However if you used your custom policies then you may need to migrated them on your own.

:::note
This app will not be deleted if it is already deployed.
:::

#### Otomi shortcuts

Due to lack of interest in this feature, we decided to remove it from Otomi.
:::note
The shortcuts will be automatically removed from the values repo.
:::
