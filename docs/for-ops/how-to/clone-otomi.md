---
slug: otomi
title: Clone Otomi Instance
sidebar_label: Clone Otomi
---

It may happen that you need to move Otomi to another Kubernetes cluster. Because Otomi is a GitOps driven platfrom, you can export existing values that can then be used to install a new Otomi instance.

:::info
This procedure does not cover cloning the persistent volumes from your old cluster.
:::

## Prerequisites

- Otomi version >= `v2.6`

## Steps

### Download values file

1. Sign in as an admin
2. Select the `platform` view in the top bar
3. Navigate to the `Maintenance` page in the left menu bar
4. Click the `Download Otomi values` link
5. The values should be in your `Downloads` folder.

:::info
It is advised to keep this file save as it contains passwords and access credentials.
:::

### Use the values to install a new Otomi instance

Depending on your use case, you may need to change some settings from the `values.yaml` file before using it to install a new Otomi instance. The most common use cases:

- Change the `domianSuffix`
- Change the team service URLs
- Change the access credentials to cloud resources
- Change the Otomi `license` key

Once the `values.yaml` file is ready you can use Helm to install Otomi on to a new Kubernetes cluster:

```
helm install -f values.yaml otomi otomi/otomi
```
