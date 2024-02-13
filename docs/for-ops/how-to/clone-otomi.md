---
slug: otomi
title: Clone Otomi Instance
sidebar_label: Clone Otomi
---

It may happen that you need to move Otomi to another Kubernetes cluster. Since Otomi if GitOps driven platfrom you can export exiting values that can be leveraged to install a new Otomi instance.

:::info
This procedure does not cover cloning the persistent volumes from your old cluster.
:::

## Prerequisites

- Otomi version >= `v2.6`

## Steps

### Download values file

1. As admin, in the platform context, navigate to the `Maintenance` page through the left menu bar.

2. Click the `Download Otomi values` link
3. The values should be in you "Downloads" folder.

:::info
It is advised to keep this file save as it contains passwords and access credentials.
:::

### Use values to install a new Otomi instance

Depending on your use case, you may need to change some settings from the `values.yaml` file before using it to install a new Otomi instance. The most common use cases:

- change `domianSuffix`,
- change team service URLs,
- change access credentials to cloud resources,
- change Otomi `license` key.

Once the `values.yaml` file is ready you can use helm to install Otomi in the new Kubernetes cluster:

```
helm install -f values.yaml otomi otomi/otomi
```
