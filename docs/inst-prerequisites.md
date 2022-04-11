---
slug: installation/prerequisites
title: Prerequisites
---

## Client binaries

When installing Otomi using the chart, make sure the following client binaries exist:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster
- [Helm](https://helm.sh/docs/intro/install/) for helm chart installation of Otomi

## Providers

### AWS, Azure and Google

Otomi supports 3 cloud provides. The `aws`, `azure` and `google` providers include creating optimized storage classes and optional integration with L7 load balancers (like an ALB in AWS and a Application Gateway in Azure).

### Other clouds and on-prem

Use the `custom` provider for all other clouds and when running Kubernetes on your own hardware. The custom provider uses the default available storage classes. The only requirement for using the custom provider is to be able to create a Kubernetes LoadBalancer Service that obtains an external accessible IP.

### Local machine

Use the `local` provider when installing Otomi on your labtop. Note that when running installing Otomi on your local machine (using minikube for instance), the K8s Loadbalancer Service needs to obtain an external accessible IP and using `127.0.0.1` is not supported.

## Kubernetes versions

Otomi currently supports the following Kubernetes versions:

- 1.18
- 1.19
- 1.20
- 1.21
- 1.22
- 1.23

## Minimal compute resource requirements

Otomi requires a node pool with at least **6 vCPU** threads and **8GiB+ RAM**. Note that this is the requirements for a minimal (default) install. When activating more apps, you'll probably need more resources.

:::info ATTENTION

The minimal resource requirement to run Otomi is based on running Core Apps only! The core apps provide an advanced ingress architecture based on Nginx, Istio, Keycloak, Oaut2 Proxy and Certmanager. Activating optional apps will require more compute resources. We advise to have a node pool available with 12 vCPU and 36 GiB memory.

:::

## CNI

To use the network policies feature in Otomi, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.
