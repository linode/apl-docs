---
slug: scaleway
title: Scaleway
sidebar_label: Scaleway
---

# Install Otomi on Scaleway Kubernetes Kapsule with Scaleway DNS

## Prerequisites

- [Scaleway CLI](https://github.com/scaleway/scaleway-cli)
- [Helm](https://kubernetes.io/docs/tasks/tools/)

## Create a Kubernetes Kapsule cluster

Set the Project ID variable:

```bash
SCW_DEFAULT_PROJECT_ID=""
```

And run the following commands:

```bash
SCALEWAY_CLUSTER_NAME="otomi"
SCALEWAY_NODE_TYPE="PRO2-M"
SCALEWAY_NODE_POOL_MIN_SIZE=3
SCALEWAY_K8s_VERSION="1.29.1"
SCALEWAY_PRIVATE_NETWORK_ID=$(scw vpc private-network create project-id=$SCW_DEFAULT_PROJECT_ID name=$SCALEWAY_CLUSTER_NAME-pn region=nl-ams -ojson | jq -r .id)
scw k8s cluster create name=$SCALEWAY_CLUSTER_NAME \
    project-id=$SCW_DEFAULT_PROJECT_ID \
    private-network-id=$SCALEWAY_PRIVATE_NETWORK_ID \
    auto-upgrade.enable=false \
    cni=calico \
    pools.0.node-type=$SCALEWAY_NODE_TYPE \
    pools.0.min-size=$SCALEWAY_NODE_POOL_MIN_SIZE \
    pools.0.size=$SCALEWAY_NODE_POOL_MIN_SIZE \
    pools.0.max-size=3 \
    pools.0.autohealing=true \
    pools.0.autoscaling=true \
    pools.0.name=$SCALEWAY_CLUSTER_NAME \
    pools.0.root-volume-size=50GB \
    version=$SCALEWAY_K8s_VERSION \
    region=nl-ams
```

## Configure DNS

:::info AlERT
Support for Scaleway DNS is coming soon!
:::

### Importing a Domain into Scaleway DNS

In order to use your domain, you need to import it into Scaleway DNS. If it's not already done, you can follow [this documentation](https://www.scaleway.com/en/docs/scaleway-dns/)

Once the domain is imported you can either use the root zone, or create a subzone to use.

In this example we will use `example.com` as an example.

### Creating Scaleway Credentials

To use Otomi with Scaleway DNS, you need to create an API token (composed of the Access Key and the Secret Key).
You can either use existing ones or you can create a new token, as explained in [How to generate an API token](https://www.scaleway.com/en/docs/generate-an-api-token/) or directly by going to the [credentials page](https://console.scaleway.com/account/organization/credentials).

Add the Access ans Secret key's to your environment variables:

```bash
SCW_ACCESS_KEY="<your-access-key>"
SCW_SECRET_KEY="your-secret-key"
```

## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: scaleway
  domainSuffix: your-sub-domain.example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - example.com
  provider:
    cloudflare:
      apiToken: $CF_API_TOKEN
      proxied: false
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@example.com
EOF
```

And adjust the `domainSuffix`, `domainFilters` and `email` based on your domain.

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

Follow the activation steps [here.](https://otomi.io/docs/get-started/activation)

:::tip
Like to learn how to use Otomi? Go through the [Get Started labs](../labs/overview.md)
:::
