---
slug: apps
title: Platform - Apps
sidebar_label: Apps
---

<!-- ![Console apps](../../img/platform-apps.png) -->

The apps section lists all apps available.

### Activating apps

When Otomi is installed, only the [core](../../../product/architecture#catagories) applications are activated. To active more apps, hoover over the app you would like to activate and click on the activation button. All apps are configured with default configuration. To change the configuration, click on the configuration button and then click on `VALUES`. 

:::info
Note: Some apps have dependencies with other apps. The dependencies can be found [here](https://github.com/redkubes/otomi-core/blob/main/core.yaml). Dependencies are handled automatically.
:::

## App configuration

By hoovering over the apps, a configuration item will appear. The app configuration section will show (if applicable) the following tabs:

### Info

Here you will find more information about the app and how the app is integrated into Otomi.

### Shortcuts

Create shortcuts to open the app at a target path. Created shortcuts will also become visable in the [Shortcuts](shortcuts) section

### Values

Here you will see the Otomi default values for the app that can be changed directly in Otomi Console. You can change the defaults to customize the configuration of the app.

### Raw values

In the Raw values, all values of the app chart that are not part of the Otomi values schema can be specified.
