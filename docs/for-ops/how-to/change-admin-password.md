---
slug: change-admin-password
title: Change the otomi-admin password
sidebar_label: Change admin password
---

This how to provides a step-by-step instruction to reset the `otomi-admin` password.

## Prerequisites:

1. Access to the Keycloak admin console.

2. Docker  installed and configured.

3. SOPS set up with Age encryption(default in LKE).

## Steps:

### Step 1: Generate a New Password

1. Create a secure password (16 characters with alphanumeric and special characters).

2. Make sure this password meets client security specifications.

### Step 2: Update the Password in Keycloak

1. Log in to Keycloak as `otomi-admin` user.

2. Go to **Users** in the left-hand sidebar and find the `otomi-admin` user.

3. Navigate to the **Credentials** tab.

4. Change the password to the one you generated.

5. Save changes(set Temporary=Disabled).

7. Switch to the otomi realm

8. Repeat steps 2 to 5

:::info
Don’t make any other changes during this operation.
:::

### Step 3: Update the Password in Otomi’s Values Repository

1. Clone the Otomi values repository if you haven't already:

```bash
git clone gitea.<cluster.domainSuffix>/otomi/values.git ~/workspace/values-folder
```

2. Export `ENV_DIR` to point to your values directory:

```bash
export ENV_DIR=~/workspace/values-folder
```

3. Create the `.secrets` file:

- Get the SOPS AGE KEY secret:

```
kubectl get secret otomi-sops-secrets -n otomi-pipelines -o jsonpath='{.data.SOPS_AGE_KEY}' | base64 -d
```

- Create the `.secrets` file in the root of the values directory with the SOPS_AGE_KEY secret. The file's content should look like this:

`SOPS_AGE_KEY=<PASTE_HERE_THE_SOPS_AGE_KEY>`

4. Decrypt the secrets in your values repository by running:

```bash
docker run -it -v $ENV_DIR:/home/app/stack/env linode/apl-core binzx/otomi decrypt
```

5. Open the `secrets.keycloak.yaml.dec` file (or similar secret file for Keycloak credentials).

6. Update the `otomi-admin` password:

```yaml
otomi:
    adminPassword: YOUR_NEW_PASSWORD
```

### Step 4: Re-encrypt the Secrets

1. Encrypt the `.dec` file to secure the updated password:

```bash
docker run -it -v $ENV_DIR:/home/app/stack/env linode/apl-core binzx/otomi encrypt
```

2. Commit and push your changes to the values repository:

```bash
cd ~/workspace/values-folder
git add .
git commit -m "Update otomi-admin password"
git push
```

### Step 5: Apply the Changes

1. Allow the tekton pipeline to run and verify it passes.

2. After the pipeline completes, restart the `otomi-api` and `apl-keycloak-operator` to ensure it applies the new credentials.
    
    ```bash
    kubectl rollout restart deployment -n otomi otomi-api
    kubectl rollout restart deployment -n apl-keycloak-operator apl-keycloak-operator
    ```

3. Confirm that the Otomi platform is working as expected with the new credentials.


This completes the password reset process for `otomi-admin`.