---
slug: vultr
title: Vultr
sidebar_label: Vultr
---

# Install Otomi on Vultr

## Prerequisites

- [Vultr CLI](https://github.com/vultr/vultr-cli)
- [Helm](https://kubernetes.io/docs/tasks/tools/)

Export your Vultr API Key:

```
export VULTR_API_KEY=<your api key>
```

## Create a Kubernetes cluster

```
vultr-cli kubernetes create \
    --label="otomi" \
    --region="ams" \
    --version="v1.27.7+1" \
    --node-pools="quantity:3,plan:vc2-4c-8gb,label:otomipool"
```

## Configure DNS using Cloudflare

Because DNS support for Vultr is not available in Otomi yet, we'll use Cloudflare DNS.

### Creating a Cloudflare DNS zone

We highly recommend to read this tutorial if you haven't used Cloudflare before:

[Create a Cloudflare account and add a website](https://support.cloudflare.com/hc/en-us/articles/201720164-Step-2-Create-a-Cloudflare-account-and-add-a-website)

### Creating Cloudflare Credentials

Snippet from [Cloudflare - Getting Started](https://api.cloudflare.com/#getting-started-endpoints):

>Cloudflare's API exposes the entire Cloudflare infrastructure via a standardized programmatic interface. Using Cloudflare's API, you can do just about anything you can do on cloudflare.com via the customer dashboard.

>The Cloudflare API is a RESTful API based on HTTPS requests and JSON responses. If you are registered with Cloudflare, you can obtain your API key from the bottom of the "My Account" page, found here: [Go to My account](https://dash.cloudflare.com/profile).


When using API Token authentication, the token should be granted Zone `Read`, DNS `Edit` privileges, and access to `All zones`.

If you would like to further restrict the API permissions to a specific zone (or zones), you also need to use the `--zone-id-filter` so that the underlying API requests only access the zones that you explicitly specify, as opposed to accessing all zones.

Set the `CF_API_TOKEN` environment variable:

```
CF_API_TOKEN="Your Cloudflare API Token"
```
## Create the values.yaml file

```
cluster:
  name: otomi
  provider: vultr
  domainSuffix: linode.example.com
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
```

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

:::tip
Like to learn how to use Otomi? Go through the [Get Started labs](../labs/overview.md)
:::