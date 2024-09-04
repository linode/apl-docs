---
slug: linode
title: Linode
sidebar_label: Linode Kubernetes Engine
---

# Install APL on LKE with Linode DNS

Provision a LKE cluster in Cloud Manager or by using the Linode CLI and manually install APL onto it by using a Linode Domain.

## Prerequisites

- Create an account for Linode [here](https://cloud.linode.com/)

## Provision a LKE cluster

### Using Cloud Manager

Provision a LKE cluster with the following specs:

- K8s version: `1.30`

- Enable HA Control Plane

- Dedicated CPU: Dedicated 8 GB Plan, 4 CPUs, 160 GB Storage

- Download the `kubeconfig`.

```bash
# Update the KUBECONFIG env to gain access to the cluster
export KUBECONFIG=<path-to-downloads>/$CLUSTER_NAME-kubeconfig.yaml
```

### Using Linode CLI

[Install and configure](https://techdocs.akamai.com/cloud-computing/docs/install-and-configure-the-cli) the CLI.

Provision a LKE cluster using the Linode CLI:

```bash
linode-cli lke cluster-create \
  --label $CLUSTER_NAME \
  --region $REGION \
  --k8s_version 1.30 \
  --control_plane.high_availability true \
  --node_pools.type g6-dedicated-8 \
  --node_pools.count 3
```

And get the Kubecfg:

```bash
linode-cli get-kubeconfig --label $CLUSTER_NAME
k config use-context lke<cluster_id>-ctx
```

## Create a Domain

:::info
When using Domains in Linode, name resolving takes at least 30 min to work. The APL installer will retry until it can resolve the Keycloak host name in the configured domain.
:::

If you want to learn about how to use Linode DNS Manager read the following tutorial: [Get started with DNS Manager](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-dns-manager).

### Creating a Personal Access Token

Create a new Personal Access Token with Read/Write access for Domains.

Set environment variable for the token:

```bash
LINODE_TOKEN="<your-token-here>"
```

## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: $CLUSTER_NAME
  provider: linode
  domainSuffix: linode.example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - linode.example.com
  provider:
    linode:
      apiToken: $LINODE_TOKEN
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@example.com
EOF
```

And adjust the `domainSuffix`, `domainFilters` and `email`.

## Install APL

Install APL using Helm:

```bash
helm repo add apl https://linode.github.io/apl-core
helm repo update
helm install -f values.yaml apl apl/apl
```

Monitor the logs of the installer job:

```bash
kubectl logs jobs/apl-apl -n default -f
```

When the installer is finished, copy the `url` and `admin-password` from the console output.

Follow the post installation steps [here.](https://apl-docs.net/docs/get-started/post-installation-steps)

:::tip
Like to learn how to use APL? Go through the [Get Started labs](../labs/overview.md)
:::