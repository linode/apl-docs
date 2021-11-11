---
slug: installation/post-install/
title: Post installation steps
---

After Otomi is installed, a couple of post install configuration steps are required. Follow the instructions below:

## When Otomi is installed without optional configuration

Follow these instructions when Otomi is installed without DNS (`otomi.hasExternalDNS=false`) and without 3rd party IDP (`otomi.hasExternalIDP=false`).

### Get the log output of the installer job

When Otomi is installed without any optional configuration, passwords and public URLs are automatically generated (based on nip.io). When `hasExternalIDP=false` is chosen, the Keycloak app is configured as an Identity Provider (IDP), in which one has to define users of the otomi container platform. To be able to access the public URL of Otomi Console and Keycloak and view the admin credentials, one has to view the end of the installer log.

Use the following command to access the log output.

```bash
kubectl logs jobs/otomi -n default
```

### Create a user in Keycloak

1. Navigate to Keycloak app (using the URL provided in the installer log)
2. Click on "Administration Console"
3. Login with admin credentials (using admin and password provided in the installer log)
4. Select the "Otomi" realm
5. Click on "Users" then "Add user"
6. Fill in a user name in the "Username" field
7. Fill in your email address in the "Email" field
8. Select the "otomi-admin" group
9. Click on "Save"
10. Choose the "Credentials" tab and then fill in a password for this user
11. Click on "Set Password"

:::info
When a password for the Keycloak admin is not provided in the values.yaml (but automatically generated), it is advised to first change the password.
:::

### Sign in to the console

Open the Otomi console (using the URL provided in the installer logs), and sign in with the new user.

After you have successfully logged in, you will see the Otomi Admin Dashboard. Click [here](/docs/console) to learn more about using Otomi Console.

![console-lading-page](img/console-landing-page.png)

### Add the auto generated CA to your keychain (optional)

When Otomi is installed without DNS and with an auto generated CA, add the CA to you keychain:

1. In the left pane of the console, click on "Download CA"
2. Add the CA to your keychain:

```
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt
```

### Activate Drone

[Drone](https://www.drone.io/)is an integral part of how Otomi cluster configuration is stored and updated.

1. Click on the **Drone** app (under Platform/Otomi Apps) in the console.

:::info
When you see this message: 'Jwks doesn't have key to match kid or alg from Jwt' Drone is not yet ready. Please wait for a couple of minutes and try again.
:::

2. Sign in

Gitea provides an oauth2 app connection for Drone to work with it's git values. It will popup when drone is accessed the first time.
You may sign in with "OpenID Connect", which registers the login as a new user, or with the Gitea admin credentials (username: "otomi-admin", password: `$otomi.adminPassword`). A job runs every 3 minutes promoting users with "admin" role to become co-owner of the otomi-values repo. When logging in with the admin user no waiting is necessary.

3. Use the pre-filled values for the `Username` and `Email Address` and click `Complete Account`
4. Select `Activate`

![drone-landing](img/drone-landing.png)

5. Click on `ACTIVATE REPOSITORY`

![drone-activate](img/drone-activate.png)

6. Save the changes and you are good to go.

![drone-save](img/drone-save.png)

Now the final step is to create a team. See the [Teams](/docs/console/teams) page for more information.

## When Otomi is installed with optional configuration

### Sign in to the console

If Otomi is configured with `hasExternalIDP=true` and `oidc` settings have been provided for an external IDP, click on the right button ("redkubes-azure" in the example below).

![console-login](img/console-login.png)

When OIDC is configured, an external IDP user needs to be a member of the "otomi-admin" group. Now follow the same steps as described above to activate Drone.
