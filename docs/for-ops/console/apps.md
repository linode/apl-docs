---
slug: apps
title: Platform - Apps
sidebar_label: Apps
---

<!-- ![Console apps](../../img/platform-apps.png) -->

The apps section lists all apps available.

### Activating apps

During installation only the Core applications are activated. To active more apps, hoover over the app you would like to activate and click on the power-on button. All apps are installed with a default configuration. To change the configuration, click on the configuration button and then click on `Values` tab.

:::info
Note: Some apps have dependencies with other apps. The dependencies can be found [here](https://github.com/linode/apl-core/blob/main/core.yaml). Dependencies are handled automatically.
:::

## App configuration

By hoovering over the apps, a configuration item will appear. The app configuration section will show (if applicable) the following tabs:

### Info

Here you will find more information about the app and how the app is integrated.

### Values

Here you will see the default values. You can change the defaults to customize the configuration of the app or use the `_rawValues` to override any value using the upstream chart values. All the used upstream Helm charts can be found [here](https://github.com/linode/apl-core/blob/main/charts/).
