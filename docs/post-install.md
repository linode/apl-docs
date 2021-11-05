---
slug: installation/post-install/
title: Post installation steps
---

After installing Otomi, a couple of post install configuration actions are required. Follow these instructions:

### Sign in to the Otomi Console

Open the url in the browser of your choice `https://otomi.<domainSuffix>`. The `domainSuffix` can be found in the `values.yaml` that was provided during installation.

If Otomi is configured with OIDC (using Azure AD as an IDP), click on the right button (redkubes-azure in the example below). If you did not configure OIDC, then first [create a user account in Keycloak](/docs/tutorials/create-keycloak-users#create-users) and add the user account to the `otomi-admin` group.


![console-login](img/console-login.png)

After you have successfully logged in, you will see the Otomi Admin Dashboard. Click [here](/docs/console) to learn more about using Otomi Console.

![console-lading-page](img/console-landing-page.png)

![console-apps](img/console-apps.png)


## Add the auto generated CA to your keychain (optional)

When Otomi is installed with a auto generated CA (when installing Otomi with minimal values), the add the CA to you keychain:

1. In the left pane of the console, click on `download CA`
2. Add the CA to your keychain:

```
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt
```

### Activate Drone

[Gitea](https://gitea.io/en-us/) and [Drone](https://www.drone.io/) are an integral part of how Otomi cluster configurations are stored and updated. Click on the **Gitea** app (under Platform/Otomi Apps) in the console. It will open a new browser tab and show the sign in page of Gitea. Sign in into with the default `otomi-admin` account and the password provided in the values or the auto generated password from the installer logs.

![gitea-login](img/gitea-login.png)

The `otomi/values` repository holds the otomi cluster configuration and is updated whenever new changes occur through the console.

![gitea-values](img/gitea-values.png)

Now head back to the console to activate Drone.

![console-apps](img/console-apps.png)

Click on the Drone app and it should open a new tab as shown below,

![drone-landing](img/drone-landing.png)

Select `Activate`, and then `ACTIVATE REPOSITORY`

![drone-activate](img/drone-activate.png)

Save the changes and you are good to go.

![drone-save](img/drone-save.png)

Now the final step is to create a Team. See the **[Teams](/docs/console/teams)** page for more information.
