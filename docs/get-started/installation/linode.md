---
slug: linode
title: Linode
sidebar_label: Linode Kubernetes Engine
---

# Install APL on Linode Kubernetes Engine (LKE) with Linode DNS

## Prerequisites

- [linode-access](https://cloud.linode.com/)

## Provision a LKE cluster

Provision a LKE cluster with the following specs:

- K8s version: `1.30`
- Enable HA Control Plane
- Dedicated CPU: Dedicated 8 GB Plan, 4 CPUs, 160 GB Storage

Download the `kubeconfig`.

```bash
# Update the KUBECONFIG env to gain access to the cluster
export KUBECONFIG=<path-to-downloads>/otomi--kubeconfig.yaml
```

## Configure DNS

:::info
When using Domains in Linode, name resolving takes at least 30 min to work. The APL installer will retry until it can resolve the Keycloak host name in the configured domain.
:::

If you want to learn about how to use Linode DNS Manager read the following tutorials:

[An Introduction to Managing DNS](https://www.linode.com/docs/platform/manager/dns-manager/), and [general documentation](https://www.linode.com/docs/networking/dns/)

### Creating Linode Credentials

Generate a new oauth token by following the instructions at [Access-and-Authentication](https://developers.linode.com/api/v4#section/Access-and-Authentication)

Set environment variable for the token:

```bash
LINODE_TOKEN="<your-token-here>"
```

The environment variable `LINODE_TOKEN` will be needed to run ExternalDNS with Linode.

## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: linode
  domainSuffix: linode.example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - example.com
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

## Install Otomi

Install Otomi using Helm:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
helm install -f values.yaml otomi otomi/otomi
```

Monitor the logs of the installer job:

```bash
kubectl logs jobs/otomi -n default -f
```

When the installer is finished, copy the `url` and `admin-password` from the console output.

Follow the post installation steps [here.](https://otomi.io/docs/get-started/post-installation-steps)

:::tip
Like to learn how to use APL? Go through the [Get Started labs](../labs/overview.md)
:::