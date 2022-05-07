---
slug: installation/
title: Getting started with Otomi
sidebar_label: Get started
---
## Provision a Kubernetes cluster

To get started with Otomi, first provision a Kubernetes cluster. Read the [minimal requirements](prerequisites) to make sure your cluster is ready to install Otomi.

We have created [quickstarts](https://github.com/redkubes/quickstart) for Azure, GCP, AWS, Linode, Digital Ocean and Minikube to help you spin-up a Kubernetes cluster.

:::info NOTE

When using Minikube, only Otomi Core apps can be used! Activating more apps will require more compute resources. We advise to have a node pool available with at least 12 vCPU and 32 GiB memory.

:::

## Install Otomi

Use the Otomi Helm chart to install Otomi on your Kubernetes cluster. In order to guarantee exact outcomes, we strongly advise to follow the these steps:

- Check the [optional configuration](optional) options
- Install Otomi using the [Helm chart](chart)
- Follow the [activation steps](activation)

## Explore Otomi

To help you start using Otomi, we have prepared a comprehensive set of hands-on labs to get a good understanding/overview of Otomi. Go to the [workshops](https://github.com/redkubes/workshops) repository to get started.
