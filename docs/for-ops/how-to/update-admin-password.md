---
slug: update-admin-password
title: Update the otomi-admin password
sidebar_label: Update admin password
---

This guide provides step-by-step instructions to update the `otomi-admin` password.

## Prerequisites

1. Access to the Keycloak admin console.
2. Access to the platform console (platform view).

## Steps

### Step 1: Generate a New Password

```bash
# Generate a random 16-character alphanumeric password
head /dev/urandom | LC_ALL=C tr -dc A-Za-z0-9 | head -c 16
# Example output: FPpLvZyAdAmuzc3N
```

### Step 2: Update the Password in Keycloak

1. Log in to the Keycloak admin console using the platform admin credentials.

2. Go to **Users** in the left-hand sidebar and find the `otomi-admin` user.

3. Navigate to the **Credentials** tab.

4. Change the password to the one you generated.

5. Save changes (set Temporary to Disabled).

:::info
Don't make any other changes during this operation.
:::

### Step 3: Update the Password in the Platform Console

1. Open the platform console and go to the **Platform** view.

2. Navigate to **Secrets** in the left-hand sidebar.

3. Click on `otomi-secrets` (namespace: `apl-secrets`).

4. Find the `adminPassword` field in the **Secret Data** section 
   
5. Click on the lock `🔒` icon and enter the new password in **plain text**.

6. Click **Save Changes**.

The platform encrypts the value using Sealed Secrets and commits the updated manifest to the values repository. No manual encryption is required.

:::info
Changes become active after the pipeline finishes applying the updated secrets.
:::

### Step 4: Verify the Changes

1. Allow the pipeline to run and verify it completes successfully.

2. Restart the `apl-keycloak-operator` deployment to ensure the new credentials are applied:

```bash
kubectl rollout restart deployment -n apl-keycloak-operator apl-keycloak-operator
```

3. Verify that the platform is working as expected with the new credentials.

This completes the password update process for `otomi-admin`.
