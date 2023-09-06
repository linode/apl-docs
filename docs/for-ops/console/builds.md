---
slug: builds
title: Platform - Builds
sidebar_label: Builds
---

:::info
To enable this feature, first make sure [Harbor](../../apps/harbor.md) and [Tekton](../../apps/tekton.md) are activated. To be able to push images to Harbor, Otomi needs to be configured with a DNS and trusted certificates (Lets encrypt with production certificates).
:::

All known Builds on the platform are listed here. Builds can be sorted based on:

| Property      | Description                                            |
| ------------- | ------------------------------------------------------ |
| Build         | The name of the build                                  |
| Team          | The name of the Team responsible for the build         |

A platform admin can also create builds. Make sure to select the correct context (team-name) in the top bar. See [here](/docs/for-devs/console/builds) for more information about creating builds.