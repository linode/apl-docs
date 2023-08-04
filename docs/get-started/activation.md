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

### Step 2: Create an License Key for using Otomi Console and Otomi API

:::info
A Community Edition License Key is required per 17-05-2023
:::

If you would like to use the Otomi Console (Web UI) and Otomi API (for code validation and creation), then you will first need to create a Community Edition License key in [Otomi Cloud](https://portal.otomi.cloud). Follow these instructions to create a License Key:

- Go to [Otomi Cloud](https://portal.otomi.cloud)
- Create an account
- Click on `Register Cluster`
- Agree with the [EULA](../../product/eula/v1)
- Copy the License Key and click `Continue`
- Log in to Otomi Console. You can find the link in the logs of the installer (see step 1)
- Add the License key to Otomi Console
- Click `Activate`

### Step 3 (optional): Add the auto generated CA to your keychain

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
