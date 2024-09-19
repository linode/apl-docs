---
slug: civo
title: Civo
sidebar_label: Civo
---

:::info ATTENTION
Otomi can also be installed using the Civo marketplace. When Otomi is installed using the Civo marketplace, Otomi is installed without DNS! To see the full potential of Otomi, install Otomi with DNS as described here.
:::

# Install Otomi on Civo with DNS

## Create a K3s cluster in Civo

1. Sign in to the [Civo dashboard](https://dashboard.civo.com/)
2. Click on `Kubernetes` in the left menu
3. Click `Create new cluster`
4. Provide a name for the cluster
5. Select the `Standard Large` node pool size (3 nodes)
6. Configure `Network` and `Firewall`
7. Show advanced options
8. Choose `Flannel`, Cluster type `K3S` and Kubernetes version `1.29.1`
9. In the Marketplace, under `Architecture`, de-activate `Traefik v2 (NodePort)`
10. Click `Create cluster`

## Configure DNS

Set up DNS in Civo:

1. Under `Networking` in the Civo Dashboard, click `DNS` and then `Add a domain name`
2. Fill in a domain name and then click `Add domain`
3. Create a NS record in the zone where your domain is hosted and add the Civo name servers `ns0.civo.com` ans `ns1.civo.com`
4. Under `Settings`, `Profile`, click on the tab `Security` and copy the `API key`

Add the API key to your environment variables:

```bash
CIVO_TOKEN="<your-api-key>"
```

## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: civo
  domainSuffix: civo.example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - example.com
  provider:
    civo:
      apiToken: $CIVO_TOKEN
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@your-domain.com
EOF
```

And adjust the `domainSuffix`, `domainFilters` and `email`.

## Install Otomi

:::info ALERT
There are some known issues when installing Otomi on Civo. Check them [here](known-issues.md)
:::

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