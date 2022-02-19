---
slug: get-started-with-otomi-aks
title: Getting started with Otomi on AKS
authors: srodenhuis
tags: [otomi, documentation]
---

## Introduction

Otomi is a Kubernetes applications configuration and automation platform, and can be installed on top of any Kubernetes cluster. Otomi enhances the developer experience of Kubernetes, by making it easy to deploy services to Kubernetes and automatically get DNS, mTLS, routing, logging, observability, secrets management, network policies, and much more. All it takes to get started is to have an existing Kubernetes cluster and install Otomi.

In this post I'll walk you through all the steps to install Otomi on an existing AKS cluster in Azure with minimal values. When installing Otomi with minimal values (basic setup), Otomi uses nip.io for name resolution, automatically generates a custom CA, uses the local Keycloak instance as an IdP, does not encrypt sensitive configuration and uses the local Gitea instance as a GIT repository.

## Requirements

To be able to install Otomi with minimal values, you'll need to have a Kubernetes cluster running with a version of 1.18 up to 1.21 and a node pool with at least 12 vCPU and 32GB+ RAM. In this walkthrough I'll be installing Otomi on an AKS cluster with version 1.21.9 (default) and a node pool with 3 `Standard B4ms` instances (offering 12 vCPU and 48 GiB RAM).

Make sure to run AKS with the following options:

- Cluster preset configuration: `Dev/Test ($)`
- Enable virtual machine scale sets: `true`
- Encryption type: `Default`
- Authentication method: `System-assigned managed identity`
- RBAC: `Enabled`
- Network configuration: `Azure CNI` (use defaults)
- Network policy: `Calico`
- Container monitoring: `Disabled`
- Azure policy: `Disabled`
- Enable secret store CSI driver: `Off`

## Install Otomi

Make sure you have the credentials of the cluster:

```
az aks get-credentials — resource-group <resource-group-name> — name <cluster-name> — admin
```

Create the following `values.yaml` file:

```
cluster:
  k8sVersion: '1.21'
  name: my-cluster
  provider: azure
```

:::note

To lower the initial footprint, you can turn off Harbor. To turn off harbor, add the following to your `values.yaml`:

```yaml
charts:
  harbor:
    enabled: false
```

:::

:::note

Installing with minimal values (basic setup) now installs almost all integrated apps. This is going to change soon. The new basic setup (installing with minimal values) will install a minmal set of applications with the lowest possible footprint. After installing Otomi, a user can sign in to the console and turn on additional apps.

:::

Now add the Otomi Helm repository and update:

```
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

and install the chart:

```
helm install -f values.yaml otomi otomi/otomi
```

The installer job will now install Otomi on your cluster. You can follow the progress of the installer by looking at the logs of the installer job in the default namespace. When the installer job has finished, first copy the URL and the generated admin password from the bottom of the logs.

Now follow step 2 to 5 of the [post installation steps](/docs/installation/post-install/)

When the post installation steps are done, you can now [create your first team](/docs/console/teams#creating-teams).

## Important to know

Otomi can (for now) only successfully install when there is no namespace conflicts. Make sure there are no namespaces that are also used by Otomi. Otomi will create/use the following namespaces:

- `gatekeeper-system`
- `istio-system`
- `jaeger`
- `jaeger-operator`
- `ingress`
- `knative-serving`
- `keycloak`
- `monitoring`
- `maintenance`
- `vault`
- `cert-manager`

:::note

We'll soon add the option to install Otomi independent of your current setup, automatically avoiding any namespace conflicts.

:::









