---
slug: activation
title: Activation steps
sidebar_label: Activation
---

Follow the steps below to activate Otomi after initial installation.

### Step 1: Get the log output of the installer job

When the installer job (in the default namespace) has finished, copy the URL and the generated password from the bottom of the logs, sign in to the console with the provided URL, username and password.

Use the following command to get the logs of the installer job:

```
kubectl logs jobs/otomi -n default -f
```

### Step 2 (optional): Add the auto generated CA to your keychain

Otomi by default automatically generates a CA. The generated CA is of course not trusted on your local machine. Here are some options to prevent you from clicking away lots of security warning in your browser:

1. In the left menu of the console, click on "Download CA"
2. Double click the downloaded CA.crt or add the CA to your keychain on Mac using the following command:

```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt
```

On Windows, use PowerShell (running as Administrator) with the Certutil:

```powershell
certutil.exe -addstore root <downloaded cert path>
```

Or:

```powershell
Import-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\LocalMachine\Root
# Restart the browser
```

But you could also run Chrome in insecure mode:

```bash
alias chrome-insecure='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'
```

3. Optional: Restart Docker (to support pushing images to Harbor)

### Step 3: Activate Drone

[Drone](https://www.drone.io/) is an integral part in the deployment of Otomi cluster configuration.

1. In the side menu of Otomi Console under `platform` click on the **Drone** app
2. Click on the `play` button in the top right. A new tab will open for Drone
3. Sign in locally with as `otomi-admin` and the password provided in the logs of the installer job.
4. Click on `Authorize Application`
5. Click on `Submit on the Complete your Drone Registration page. You don't need to fill in your Email, Full Name or Company Name if you don't want to
6. Click on the `otomi/values` repository
7. Click on `+ Activate Repository`

### Step 4 (Optional): Create a new admin user

:::info ATTENTION

We strongly advise to not use the default `otomi-admin` account after activation and to not change the password. Store it somewhere safe and only use it in case absolutely required.

:::

[Create a new user account in Keycloak](/docs/apps/keycloak#step-2-create-a-user-in-keycloak) and add the new user to the `otomi-admin` and `team-admin`.

### Step 5 (Optional): Add the URL of the Kubernetes API

:::info NOTE

Adding the URL of the K8s cluster API is required by teams to be able to download the KUBECONFIG

:::

- Under `Platform` in Otomi Console, click on `Settings`
- Click on `Cluster`
- Add the full URL of the API server
- Click on `Submit`
- Click on `Deploy Changes`
