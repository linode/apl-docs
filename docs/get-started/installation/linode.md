---
slug: linode
title: Linode
sidebar_label: Linode Kubernetes Engine
---

# Install Akamai App Platform on LKE with DNS

Provision a LKE cluster in Cloud Manager or by using the Linode CLI and manually install the App Platform onto it by using a Linode Domain for DNS.

## Prerequisites

- Create an account for Linode [here](https://cloud.linode.com/)

## Provision a LKE cluster

### Using Cloud Manager

Provision a LKE cluster with the following specs:

- Fill in the `Cluster Label`

- Use Kubernetes version: `1.30`

- Enable HA Control Plane

- Add Node Pools. Select the Dedicated 8 GB Plan (with 8 GB RAM and 4 CPUs)

- Wait until the nodes are in a `Running` state

- Download the `kubeconfig`

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
kubectl config use-context lke<cluster_id>-ctx
```

## Create a Domain

If you want to learn about how to use Linode DNS Manager read the following tutorial: [Get started with DNS Manager](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-dns-manager).

When you create a domain in Linode, make sure to set the TTL of the SOA Record to 30 seconds:

1. Click on your domain.

2. Click on the tree dots on the right of the SOA Record and click `edit`.

3. Change the default TTL to `30 seconds`.

4. Click `Save`.

## Creating a Personal Access Token

Create a new Personal Access Token with Read/Write access for Domains:

1. Go to your profile on the top right.

2. Click on `API Tokens`.

3. Click on `Create A Personal Access Token`.

4. Add a `Label`.

5. Select the desired `Expiry`.

6. Select `No Access` for all.

7. Select `Read/Write` for `Domains`.

8. Click `Create Token`.

9. Copy your Personal Access Token.

10. Set environment variable for the token:

```bash
LINODE_TOKEN="<your-personal-access-token>"
```

## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: $CLUSTER_NAME
  provider: linode
  domainSuffix: <your-domain>
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - <your-domain>
  provider:
    linode:
      apiToken: $LINODE_TOKEN
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@<your-domain>
EOF
```

Adjust the `domainSuffix`, `domainFilters` and `email`!

:::info
You can also use a different DNS provider. See [here](dns.md) for examples on how to use Akamai EdgeDNS, AWS Route53, Cloudflare DNS and many others.
:::

## Install the App Platform

Install using Helm:

```bash
helm repo add apl https://linode.github.io/apl-core
helm repo update
helm install -f values.yaml apl apl/apl
```

Monitor the logs of the installer job:

```bash
kubectl logs jobs/apl -n default -f
```

When the installer is finished, copy the `url` and `admin-password` from the console output.

Follow the post installation steps [here](post-install-steps.md).

:::tip
Like to learn how to use App Platform for LKE? Go through the [Get Started labs](../labs/labs-overview.md)
:::

## Known issues

### During install Pods get stuck in a Pending state

During the installation, multiple `StatefullSets` are created that require a `PersistentVolumeClaim` (PVC). Each PVC is attached to a `Volume` in Linode. Volumes count towards the account limits. If you see Pods in a `Pending` state, it might be that your're hitting the account limit.

What to do:

- Delete unused resources in your Linode account (like unused Volumes).

- Create a support ticket and request to increase your account limit.
