---
slug: post-installation-steps
title: Post installation steps
sidebar_label: Post Installation Steps
---

Follow the post-installation steps after initial installation.

## Step 1: Get the log output of the installer job

When the installer job (in the default namespace) has finished, copy the URL and use the generated password from the bottom of the logs, sign in to the Console.

Use the following command to get the logs of the installer job:

```
kubectl logs jobs/apl -n default -f
```

## Step 2 (optional): Add the auto generated CA to your keychain

When installed without DNS, a CA is automatically generated. The generated CA is not trusted on your local machine. Here are some options to prevent you from clicking away lots of security warning in your browser:

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

## Step 3 (Optional): Create a new admin user

:::info
We strongly advise to not use the default `otomi-admin` account after activation and to not change the password. Store it somewhere safe and only use it in case absolutely required.
:::

Create a new user account in Keycloak and add the new user to the `otomi-admin` and `team-admin` group:

To create users in Keycloak, follow these steps:

1. Open the Keycloak app

2. Click on `Administration Console`.

3. Login with admin credentials (using `otomi-admin` user and password provided in the installer log or the `otomi.adminPassword` provided in the initial values).

4. Select the `Otomi` realm.

5. Click on `Users` then `Add user`.

6. Fill in a user name in the `Username` field.

7. Fill in your email address in the `Email` field.

8. Select `Email verified`.

9. Click `Join Groups`.

10. Add the user to the required group (otomi-admin).

11. Click `Create`.

12. Choose the `Credentials` tab and then `Set password`.

13. Fill in a password.

14. Optional: Make the password `Temporary`. This requires the user to change the password at the first login.

15. Click on "Save".

16. Click `Save password`.

## Step 4 (Optional): Add the URL of the Kubernetes API

:::info
Adding the URL of the K8s cluster API is required by teams to be able to download the KUBECONFIG
:::

1. Under `Platform` in the Console, click on `Settings`.

2. Click on `Cluster`.

3. Add the full URL of the API server.

4. Click on `Submit`.

5. Click on `Deploy Changes`.

## Step 5 (Optional): Configure Object Storage

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

5. Click on `Deploy Changes`.

## Step 6 (Optional): Add a Linode Personal Access Token to backup Persistent Volumes (Linode only)

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

## Step 7 (Optional): Activate more Apps

Application Platform for LKE is a composable platform. Activate more Apps based on the required platform capabilities:

| Capability      | App                                                    | Object storage |
| --------------- | ------------------------------------------------------ | -------------- |
| Log aggregation | Loki and Grafana | Optional |
| Metric collection | Prometheus and Grafana | No |
| Send Alerts | Prometheus and Alert manager | No |
| Tracing | Tempo, OTEL, Loki and Grafana | Required |
| Build images from source code | Harbor | Optional |
| Scan running containers for vulnerabilities | Trivy | No |
| Enforce security policies | Kyverno | No |
| Database backups | CloudnativePG | Required |
<!-- | Long term retention of Logs, Metrics and Traces | Thanos | Required | -->

## Step 8: Create Teams

Create your first team. Follow the instructions [here](/docs/for-ops/console/teams#creating-a-team).

## Step 9: Create users and add them to a Team

Create users in Keycloak and add the users to a Team `Group` in Keycloak:

1. Open the Keycloak app

2. Click on `Administration Console`.

3. Login with admin credentials (using `otomi-admin` user and password provided in the installer log or the `otomi.adminPassword` provided in the initial values).

4. Select the `Otomi` realm.

5. Click on `Users` then `Add user`.

6. Fill in a user name in the `Username` field.

7. Fill in your email address in the `Email` field.

8. Select `Email verified`.

9. Click `Join Groups`.

10. Add the user to the required Team group (`team-<team-name>`).

11. Click `Create`.

12. Choose the `Credentials` tab and then `Set password`.

13. Fill in a password.

14. Optional: Make te password `Temporary`. This requires the user to change the password at the first login.

15. Click on "Save".

16. Click `Save password`.







