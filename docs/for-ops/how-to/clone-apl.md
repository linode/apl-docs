---
slug: clone-apl
title: Clone Platform Instance
sidebar_label: Clone the Platform
---

It may happen that you need to move the platform configuration to another Kubernetes cluster. Because everyting is GitOps driven, you can export the existing setup that can then be used to install it on a new cluster.

:::info
This procedure does not cover cloning the persistent volumes from your old cluster.
:::

## Prerequisites

- Version >= `v2.6`

## Steps

### Download values file

1. Sign in as an admin.

2. Select the `platform` view in the top bar.

3. Navigate to the `Maintenance` page in the left menu bar.

4. Click the `Download Values` link.

5. The values should be in your `Downloads` folder.

:::info
It is advised to keep this file save as it contains passwords and access credentials.
:::

### Use the values to install a new instance

Depending on your use case, you may need to change some settings from the `values.yaml` file before using it to install a new platform instance. The most common use cases:

- Change the `domainSuffix`.

- Change the team service URLs.

- Change the access credentials to cloud resources.

Once the `values.yaml` file is ready you can use Helm to install the platform on a new Kubernetes cluster:

```
helm install -f values.yaml apl apl/apl
```
