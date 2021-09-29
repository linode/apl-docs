---
slug: postinstallation/
title: Overview
---

This guide provides the next steps required to start using _Otomi_

## Otomi Console: First Steps

At this point, you should have _otomi_ successfully installed on the cluster.

**Time to enter the Otomi world!**

### For Otomi Admins

- Open the url in the browser of your choice `https://otomi.<domainSuffix>` as `Admin`

  - the `domainSuffix` can be found in the `values.yaml` that was used in the installation of the otomi chart

  ```yaml
  # This is an example
  cluster:
  owner: redkubes
  apiServer: ''
  k8sVersion: '1.19'
  name: otomise
  provider: aws
  domainSuffix: otomise.eks.otomi.cloud
  ```

The login url in this case would be **`https://otomi.otomise.eks.otomi.cloud`**

![console-login](img/console-login.png)

After you have successfully logged in, you will arrive at the **Otomi Dashboard**

![console-lading-page](img/console-landing-page.png)

### Gitea and Drone Activation

Gitea and Drone are oa integral part of how otomi cluster configurations are stored and updated. We need to first activate and enable the _Gitea-Drone_ integration.

![console-apps](img/console-apps.png)

Click on the **Gitea** app on the console and it should redirect you to gitea repo as shown below,

![gitea-login](img/gitea-login.png)

Log in with your _credentials_,

![gitea-values](img/gitea-values.png)

The **_otomi/values_** repository holds the otomi cluster configuration and is updated whenever new changes occur through the console.

:::note Note: You need to checkout this repository on to your pc as we need it to perform few activities using the _Otomi CLI_

This will be dealt in the later [chapter](/docs/cli) :::

Now head back to the console to activate Drone.

![console-apps](img/console-apps.png)

Click on the **Drone** app on the console and it should redirect you to Drone-CI as shown below,

![drone-landing](img/drone-landing.png)

Select `Activate` -> `ACTIVATE REPOSITORY`

![drone-activate](img/drone-activate.png)

Save the changes and you are good to go, ![drone-save](img/drone-save.png)
