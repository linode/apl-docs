---
slug: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
---

### Client binaries

When installing Otomi using the chart, make sure the following client binaries exist:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster
- [Helm](https://helm.sh/docs/intro/install/) for helm chart installation of Otomi

### Supported Providers

:::info
We have created [quickstarts](https://github.com/redkubes/quickstart) for Azure, GCP, AWS, Linode, Digital Ocean and Minikube to help you spin-up a Kubernetes cluster.
:::

#### Azure (AKS)

To install Otomi on a AKS cluster in Azure, use the `azure` provider. The `azure` provider includes creating optimized storage classes and optional integration with the a Application Gateway Ingress Controller add-on.

#### Amazon Web Services (EKS)

To install Otomi on a EKS cluster in AWS, use the `aws` provider.

#### Google Cloud Platform (GKE)

To install Otomi on a GKE cluster in GCP, use the `google` provider.

#### Digital Ocean

To install Otomi on a Kubernetes cluster in Digital Ocean, use the `digitalocean` provider. Otomi is also available in the Digital Ocean [marketplace](https://marketplace.digitalocean.com/apps/otomi?refcode=476bfcac9ec9&action=deploy).

#### OVHcloud

To install Otomi on a OVHcloud [Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/), use the `ovh` provider.

#### Vultr (VKE)

To install Otomi on a [Vultr Kubernetes Engine (VKE)](https://www.vultr.com/docs/vultr-kubernetes-engine/) cluster, use the `vultr` provider.

#### All others

Use the `custom` provider for all other clouds, and when running Kubernetes on your own hardware (including Minikube on your local machine). The custom provider uses the default available storage classes. The only requirement for using the custom provider is to be able to create a Kubernetes LoadBalancer Service that obtains an external accessible IP.

:::info NOTE

When using Minikube, only Otomi Core apps can be used! Activating more apps will require more compute resources. We advise to have a node pool available with at least 12 vCPU and 32 GiB memory.

:::

### Kubernetes versions

Otomi currently supports the following Kubernetes versions:

- `1.25`
- `1.26`
- `1.27`

### Minimal compute resource requirements

Otomi requires a node pool with at least **6 vCPU** threads and **8GiB+ RAM**. Note that this is the requirements for a minimal (default) install. When activating more apps, you'll probably need more resources.

:::info ATTENTION

The minimal resource requirement to run Otomi is based on running Core Apps only! The core apps provide an advanced ingress architecture based on Nginx, Istio, Keycloak, Oaut2 Proxy and Certmanager. Activating optional apps will require more compute resources. We advise to have a node pool available with 12 vCPU and 32 GiB memory.

:::

### CNI

To use the network policies feature in Otomi, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.
