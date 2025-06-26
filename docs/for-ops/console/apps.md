---
slug: apps
title: Platform - Apps
sidebar_label: Apps
---

The apps section lists all platform apps available.

## Platform App release stages

Platform apps in Akamai App Platform have 3 release stages: Alpha, Beta and GA. Alpha apps are experimental and may change significantly, while beta apps are more stable. General Availability (GA) apps are considered stable and have a commitment to remain unchanged in a major version. 

App Platform also sets standards for the following platform app integration criteria:

1. Backup and restore: Databases used by a platform app are automatically backed-up and restore procedures are tested.
2. Smooth database upgrades: Databases used by a platform app are automatically upgraded.
3. Lifecycle management: The platform app is part of the platform release cycle and will be upgraded accordingly.
4. Authentication: Only authenticated users can access the platform app.
5. Graceful Termination: Pods of a platform app will terminate gracefully in case of a node drain operation.
6. Continuity: A platform app will not be removed without a deprecation notice.
7. Kubernetes version support: A platform app is supported on all App Platform supported Kubernetes versions.

Based on the release stage, a platform app partially or fully complies to the integration criteria due to its immaturity or current limitations of the platform itself:

| Release Stage | Integration Criteria Compliance    |
| ------------- | ---------------------------------- |
| Alpha         | Minimal compliant (4, 5)           |
| Beta          | Partial compliant (4, 5, 6, 7)     |
| GA            | Fully compliant                    |

Alpha platform apps are labeled as `ALPHA`. Beta platform apps are labeled as `BETA`. GA platform apps do not have a label.

## Activating Core Apps

During installation only the Core apps are activated. To active more apps, hoover over the app you would like to activate and click on the power-on button. All apps are installed with a default configuration. To change the configuration, click on the configuration button and then click on `Values` tab.

:::info
Note: Some apps have dependencies with other apps. The dependencies can be found [here](https://github.com/linode/apl-core/blob/main/core.yaml). Dependencies are handled automatically.
:::

## App configuration

By hoovering over the apps, a configuration item will appear. The app configuration section will show (if applicable) the following tabs:

### Info

Here you will find more information about the app and how the app is integrated.

### Values

Here you will see the default values. You can change the defaults to customize the configuration of the app or use the `_rawValues` to override any value using the upstream chart values. All the used upstream Helm charts can be found [here](https://github.com/linode/apl-core/blob/main/charts/).
