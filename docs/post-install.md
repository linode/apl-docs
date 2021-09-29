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

After you have successfully logged in, you will arrive at the **Otomi Dashboard.** To get an overview of the cosole and it's layout, checkout [Otomi Console](/docs/console)

![console-lading-page](img/console-landing-page.png)

### Gitea and Drone Activation

[Gitea](https://gitea.io/en-us/) and [Drone](https://www.drone.io/) are an integral part of how otomi cluster configurations are stored and updated. Now let's go ahead and activate the _Gitea-Drone_ pipeline.

![console-apps](img/console-apps.png)

Click on the **Gitea** app on the console and it should redirect you to gitea repo as shown below,

![gitea-login](img/gitea-login.png)

Log in with your _credentials_,

![gitea-values](img/gitea-values.png)

The **_otomi/values_** repository holds the otomi cluster configuration and is updated whenever new changes occur through the console.

Now head back to the console to activate Drone.

![console-apps](img/console-apps.png)

Click on the **Drone** app on the console and it should redirect you to Drone-CI as shown below,

![drone-landing](img/drone-landing.png)

Select `Activate` -> `ACTIVATE REPOSITORY`

![drone-activate](img/drone-activate.png)

Save the changes and you are good to go, ![drone-save](img/drone-save.png)

Let's head to the **[Teams](/docs/console/teams)** page to start creating them.
