---
slug: post-installation-steps
title: Post installation steps
sidebar_label: Post Installation Steps
---

Follow the post-installation steps after initial installation.

## Step 1: Get the initial administrator credentials

The `apl-operator` handles the installation and continuously reconciles the cluster. During the installation process, a `welcome` ConfigMap is created in the `apl-operator` namespace containing the console URL and login instructions. Note that the presence of this ConfigMap does not necessarily mean the full installation is complete, as the operator continues to reconcile.

The best way to verify that the installation is complete and ready to use is to check if the console URL is accessible in your browser.

To view the welcome message and console URL, use the following command:

```bash
kubectl get configmap welcome -n apl-operator -o yaml
```

The ConfigMap contains a welcome message with the console URL and instructions for obtaining your login credentials:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: welcome
  namespace: apl-operator
data:
  consoleUrl: https://console.${domainSuffix}
  message: |
    Welcome to App Platform!

    Your installation has completed successfully.

    CONSOLE ACCESS:
      The App Platform console is available at: https://console.${domainSuffix}

    LOGIN CREDENTIALS:
      To obtain your login credentials, run the following commands:

      Username: kubectl get secret platform-admin-initial-credentials -n keycloak -o jsonpath='{.data.username}' | base64 -d
      Password: kubectl get secret platform-admin-initial-credentials -n keycloak -o jsonpath='{.data.password}' | base64 -d

    NEXT STEPS:
      1. Visit the console URL above
      2. Log in using the credentials obtained from the commands above
      3. Explore the platform features and start deploying your applications

    For documentation and support, visit: https://techdocs.akamai.com/app-platform/docs/welcome
  secretName: platform-admin-initial-credentials
  secretNamespace: keycloak
```

Perform the 2 commands shown in the message to get the initial credentials and use them to sign in to the Console. You will need to change your password at first login.

## Step 2 (optional): Add the auto generated CA to your keychain

The generated CA is not trusted on your local machine when installed using Let's Encrypt `staging` certificates. Here are some options to prevent you from clicking away lots of security warning in your browser:

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

## Step 3 (Optional): Add the URL of the Kubernetes API

:::info
Adding the URL of the K8s cluster API is required by teams to be able to download the KUBECONFIG
:::

1. Under `Platform` in the Console, click on `Settings`.

2. Click on `Cluster`.

3. Add the full URL of the API server.

4. Click on `Submit`.


## Step 4 (optional): Configure Object Storage

If you're planning on activating apps that can use Object Storage (like Loki, Harbor, Tempo, Velero), then first configure Object Storage. Check the table in Step 6 to see which App requires Object Storage configured.

:::info
Velero requires Object Storage!
:::

:::info
Creating Database backups requires Object Storage!
:::

1. Under `Platform` in the Console, click on `Settings`.

2. Click on `Object Storage`.

3. Select `Minio Local` or `Linode`.

When Minio is selected (only for development), Minio App is enabled and all required buckets are automatically provisioned.
When Linode is selected, create the buckets for the apps you are planning to use and fill in the region and the Access Key ID and Secret Access Key (with read/write access).

4. Click on `Submit`.

## Step 5 (Optional): Add a Linode Personal Access Token to backup Persistent Volumes (Linode only)

To use the self-service feature to create backups of Persistent Volumes in Linode, first create a new Personal Access Token with Read/Write access for Volumes:

1. Go to your profile on the top right.

2. Click on `API Tokens`.

3. Click on `Create A Personal Access Token`.

4. Add a `Label`.

5. Select the desired `Expiry`.

6. Select `No Access` for all.

7. Select `Read/Write` for `Volumes`.

8. Click `Create Token`.

9. Copy your Personal Access Token.

Then Add the Token:

1. Sign in to the Console as an admin.

2. In the left menu, click on Settings.

3. Click on `Backup`.

4. Add the API Token in the `Backup persistent volumes` section.

When Object Storage is configured and an API Token is added, then activate the Velero App. You can now use the Backup self-service feature to create backup schedules to backup Persistent Volumes.

## Step 6 (optional): Activate more Apps

Akamai App Platform is a composable platform. Activate more Apps based on the required platform capabilities:

| Capability                                      | App                                             | Object storage |
| ----------------------------------------------- | ----------------------------------------------- | -------------- |
| Log aggregation                                 | Loki and Grafana                                | Optional       |
| Metric collection                               | Prometheus and Grafana                          | No             |
| Send Alerts                                     | Prometheus and Alert manager                    | No             |
| Tracing                                         | Tempo, OTEL, Loki and Grafana                   | Required       |
| Build images from source code                   | Harbor                                          | Optional       |
| Scan running containers for vulnerabilities     | Trivy                                           | No             |
| Enforce security policies                       | Kyverno                                         | No             |
| Database backups                                | CloudnativePG                                   | Required       |
| Long term retention of Logs, Metrics and Traces | Thanos                                          | Required       |

## Step 7: Create Teams

Create your first team. Follow the instructions [here](/docs/for-ops/console/teams#creating-a-team).

## Step 8: Create users and add them to a Team

:::info
The option to create users and add them to Teams is not available when installed with [OIDC](oidc.md).
:::

Create Users and add them to a Team. Follow the instructions [here](/docs/for-ops/console/user-management)
