---
slug: cluster
title: Platform settings
sidebar_label: Cluster
---

## Cluster

The Cluster section provides information about the Kubernetes cluster running Otomi.

### Cluster

| Setting | Description | Configurable |
| ------- | ----------- | ------------ |
| Name | Short name that will be used in construction of cluster domain and messaging. | Yes |
| Domain Suffix | Domain suffix for the cluster. | Yes |
| API Name | Name of cluster. On AWS this must match the exact EKS cluster name. | No |
| API Server | Add the full url of the kubernetes API server. This is used to generate the KUBECONFIG for local API access. | Yes |
| Owner | A cluster owner. Used in alerts/reports to distinguish between resources for different customers. | Yes |
| AWS Region | An AWS region. Used by charts such as cluster-autoscaler and aws-certs job. Example: eu-central-1 | No |

### Provider

The provider used for this cluster

### Kubernetes version

The version of the Kubernetes cluster running Otomi.

