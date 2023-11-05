---
slug: digitalocean
title: Digital Ocean
sidebar_label: Digital Ocean
---

# Installing Otomi using the Digital Ocean marketplace

Otomi can be installed as a [1-click-app](https://marketplace.digitalocean.com/apps/otomi?refcode=476bfcac9ec9&action=deploy) on DigitalOcean martketplace. You can find the install instructions [here.](https://marketplace.digitalocean.com/apps/otomi)

:::info ATTENTION
Otomi can also be installed using the Digital Ocean  marketplace. When Otomi is installed using the Digital Ocean marketplace, Otomi is installed without DNS! To see the full potential of Otomi, install Otomi with DNS as described here.
:::

## Prerequisites

- [Digital Ocean CLI](https://docs.digitalocean.com/reference/doctl/how-to/install/)
- [Helm](https://kubernetes.io/docs/tasks/tools/)

## Create a Kubernetes cluster

Create a Kubernetes cluster using `doctl`:

```bash
doctl kubernetes cluster create otomi --count 3 --region ams3 --size s-4vcpu-8gb --version 1.27.6-do.0
```

Other options to create a Kubernetes cluster in Digital Ocean using:

- The [Control Panel](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/)
- [Terraform](https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs/resources/kubernetes_cluster)

## Configure DNS

### Creating a DigitalOcean DNS zone

If you want to learn about how to use DigitalOcean's DNS service read the following tutorial series:

[An Introduction to Managing DNS](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-managing-dns), and specifically [How To Set Up a Host Name with DigitalOcean DNS](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)

Create a new DNS zone where you want to create your records in. Let's use `example.com` as an example here.

### Creating DigitalOcean Credentials

Generate a new personal token by going to [the API settings](https://cloud.digitalocean.com/settings/api/tokens) or follow [How To Use the DigitalOcean API v2](https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2) if you need more information. Give the token a name and choose read and write access.

```bash
DO_TOKEN="<your-token>"
```

## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: digitalocean
  domainSuffix: example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - example.com
  provider:
    digitalocean:
      apiToken: $DO_TOKEN
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@example.com
EOF
```

And adjust the `domainSuffix`, `domainFilters` and `email`.

## Install Otomi using helm

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