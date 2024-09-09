---
slug: builds
title: Platform - Builds
sidebar_label: Builds
---

:::info
To enable this feature, first make sure [Harbor](../../apps/harbor.md) is activated. To push images to Harbor, APL needs to be configured with DNS and trusted certificates (Lets encrypt with production certificates).
:::

All known Builds on the platform are listed here. Builds can be sorted based on:

| Property      | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| Name          | The name of the build                                           |
| Type          | Type of the build. Buildpacks or Docker                         |
| Webhook url   | The `copy to clipboard` webhook URL if a trigger is configured for the build |
| Tekton        | Link to the `PipelineRun`` of the build in the Tekton dashboard |
| Repository    | The `copy to clipboard` repository name of the image            |
| Tag           | The tag of the image                                            |
| Status        | The status of the Build. If the Build has failed. click on the Tekton link to see more details |
| Team          | The name of the Team responsible for the build                  |

A platform admin can also create builds. Make sure to select the correct context (team-name) in the top bar. See [here](/docs/for-devs/console/builds.md) for more information about creating builds.