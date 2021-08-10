---
slug: installation/azure/
title: Install on Azure
---

Quickstart: Deploy Otomi CE on an Kubernetes cluster in Azure

## Create a Kubernetes Cluster

Use any tool of your preference to create a Kubernetes cluster in Azure. AKS is also supported. The minimal AKS requirements are:

- Kubernetes version 1.18.17 or higher
- Network Policy: Calico
- Network Plugin: Azure
- Min count: 3
- Node VM Size: Standard_D3_v2
- Node OS Disk Size: 200
- Enable Cluster Autoscaler: true

## Setup DNS

## Setup OIDC with Azure AD

## Setup KMS with Azure Vault (optional)

## Create values.yaml

Add all the above created configuration items to the `values.yaml`

## Install the Chart

First add the Otomi Helm repository:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

Now install Otomi on your cluster using the Chart install:

```bash
helm install -f /path/to/values.yaml my-otomi-release otomi/otomi
```

The chart deploys a Job with the release name in the default namespace. Use K9s (or any tool of your preference), to monitor the install.

When Otomi is installed, first create a team. In CE mode, start [here](/docs/ce/teams).
