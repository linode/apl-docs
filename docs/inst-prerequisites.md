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

## Kubernetes and DNS

Otomi requires at least:

- A running Kubernetes cluster with at least 3 worker nodes (using General Purpose instance types with at least 4 vCPU)
- Access to a public DNS zone

Otomi supports Kubernetes versions `1.18` up to `1.20`

Follow the instructions below to set up a Kubernetes cluster and DNS on the cloud of your choice:

### AWS

Set up an EKS cluster on AWS: https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html

Get access to the cluster with kubectl:

```bash
aws eks update-kubeconfig --name $CLUSTER_NAME
```

Setting up external DNS: https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md

### Azure (AKS)

Set up an AKS cluster on Azure: https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal

Make sure to use the Azure Network CNI and Calico network policies. 

Get access to the cluster with kubectl:

```bash
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

Setting up external DNS: https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md

### Google (GKE)

Set up a GKE cluster on Google Cloud Platform: https://cloud.google.com/kubernetes-engine/docs/how-to

Get access to the cluster with kubectl:

```bash
gcloud container clusters get-credentials <cluster-name> --region <region> --project <project>
```

Setting up external DNS: https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md

