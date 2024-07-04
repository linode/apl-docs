---
slug: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
---

## Client binaries

When installing Otomi using the chart, make sure the following client binaries exist:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster
- [Helm](https://helm.sh/docs/intro/install/) for helm chart installation of Otomi

## Kubernetes

Otomi requires a (Vanilla) Kubernetes cluster.

### Versions

Otomi currently supports the following Kubernetes versions:

- `1.27`
- `1.28`
- `1.29`

### Minimal compute resource requirements

Otomi requires a node pool with at least **12 vCPU** and **12 GiB RAM**. Note that this is the requirements for a minimal install. When activating more apps, you'll probably need more resources.

### CNI

To use the network policies feature in Otomi, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.

### CSI

Install a CSI driver for exposing block and file storage systems to containerized workloads.

## Supported Providers

### Azure (AKS)

To install Otomi on a AKS cluster in Azure, use the `azure` provider. The `azure` provider includes creating optimized storage classes and optional integration with the a Application Gateway Ingress Controller add-on.

### Amazon Web Services (EKS)

To install Otomi on a EKS cluster in AWS, use the `aws` provider.

### Google Cloud Platform (GKE)

To install Otomi on a GKE cluster in GCP, use the `google` provider.

### Digital Ocean

To install Otomi on a Kubernetes cluster in Digital Ocean, use the `digitalocean` provider. Otomi is also available in the Digital Ocean [marketplace](https://marketplace.digitalocean.com/apps/otomi?refcode=476bfcac9ec9&action=deploy).

### OVH cloud

To install Otomi on a OVHcloud [Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/), use the `ovh` provider.

### Linode Kubernetes Engine (LKE)

To install Otomi on a [Linode Kubernetes Engine](https://www.linode.com/products/kubernetes/) cluster, use the `linode` provider.

### Vultr (VKE)

To install Otomi on a [Vultr Kubernetes Engine (VKE)](https://www.vultr.com/docs/vultr-kubernetes-engine/) cluster, use the `vultr` provider.

### Civo

To install Otomi on a [Civo K3s](https://www.civo.com/kubernetes) cluster, use the `civo` provider.

Otomi on CIVO requires at least:

* A node pool with `3` Large Standard nodes (4 CPU Cores and 8 GB RAM)
* Kubernetes version `1.28` or `1.29`

Otomi installs and configures Nginx as a default ingress controller. When launching from the marketplace, make sure to unselect the default Traefik v2 (NodePort).

### All others

Use the `custom` provider for all other clouds, and when running Kubernetes on your own hardware. The custom provider uses the default available storage classes. The only requirement for using the custom provider is to be able to create a Kubernetes LoadBalancer Service that can obtain an external accessible IP.

