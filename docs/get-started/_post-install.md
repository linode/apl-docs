---
slug: installation/post-install/
title: Post installation steps
---

After Otomi is installed, a couple of post install configuration steps are required. Follow the instructions below:

## When Otomi is installed with minimal values

Follow these instructions when Otomi is installed without DNS (`otomi.hasExternalDNS=false`) and without a 3rd party IDP (`otomi.hasExternalIDP=false`).

### Step 1: Get the log output of the installer job

When Otomi is installed with minimal values, passwords and public URLs (based on nip.io) are automatically generated and Keycloak is configured as an Identity Provider (IDP), in which one has to define Otomi users. The public URL of Otomi Console, the public URL of Keycloak and the admin credentials can be retrieved from the installer log. The installer job runs in the default namespace. In case the installer failed in the first run, the installer will automatically restart. Make sure to get the logs of the installer job with status `Completed`.

Use the following command to get the logs of the installer job:
```
kubectl logs jobs/otomi -n default -f
```

### Step 2: Create a user in Keycloak

1. Navigate to Keycloak app (using the URL provided in the installer log)
2. Click on "Administration Console"
3. Login with admin credentials (using `admin` user and password provided in the installer log or the `otomi.adminPassword` provided in the initial values)
4. Select the "Otomi" realm
5. Click on "Users" then "Add user"
6. Fill in a user name in the "Username" field
7. Fill in your email address in the "Email" field
8. Select the "otomi-admin" group
9. Click on "Save"
10. Choose the "Credentials" tab and then fill in a password for this user
11. Click on "Set Password"

### Step 3: Sign in to the console

Open the Otomi console (using the URL provided in the installer logs), and sign in with the new user.

Click [here](/docs/console) to learn more about using Otomi Console.

### Step 4: Add the auto generated CA to your keychain

1. In the left pane of the console, click on "Download CA"
2. Double click the downloaded CA.crt or add the CA to your keychain using the following command:

```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt
```
3. Optional: Restart Docker (to support pushing images to Harbor)

### Create a Team

Now the final step is to create a team. See the [Teams](/docs/for-ops/console/teams) page for more information.

## When Otomi is installed with optional configuration

### Sign in to the console

If Otomi is configured with `hasExternalIDP=true` and `oidc` settings have been provided for an external IDP, click on the right button ("redkubes-azure" in the example below).

<!-- ![console-login](img/console-login.png) -->

When OIDC is configured, an external IDP user needs to be a member of the "otomi-admin" group.
