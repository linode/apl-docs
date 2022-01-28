---
slug: installation/prerequisites
title: Minimal requirements
---

## Client binaries

Please make sure the following client binaries exist:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster.
- [Docker](https://www.docker.com/) must be installed and running, as Otomi runs in a container.
- [Helm](https://helm.sh/docs/intro/install/) for helm chart installation of Otomi.
- Optional: [Otomi CLI](/docs/cli/)

## Kubernetes

Otomi requires a running Kubernetes cluster of version `1.18` up to `1.21` with a node pool with at least **16 CPU** threads and **32GB+ RAM** in AWS, Azure, Google Cloud Platform.

Running Otomi on an onprem cluster is also supported. More information about installing Otomi on your own hardware can be found [here](https://github.com/redkubes/quickstart/tree/main/onprem)

To use the network policies feature in Otomi, make sure to install the Calico CNI (or any other CNI that supports Kubernetes network polices).

Follow the instructions below to set up a Kubernetes cluster in your the cloud of your choice:

### AWS

Set up an EKS cluster on AWS: https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html

Get access to the cluster with kubectl:

```bash
aws eks update-kubeconfig --name $CLUSTER_NAME
```

### Azure (AKS)

Set up an AKS cluster on Azure: https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal

Get access to the cluster with kubectl:

```bash
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

### Google (GKE)

Set up a GKE cluster on Google Cloud Platform: https://cloud.google.com/kubernetes-engine/docs/how-to

Get access to the cluster with kubectl:

```bash
gcloud container clusters get-credentials <cluster-name> --region <region> --project <project>
```

