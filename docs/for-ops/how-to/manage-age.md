---
slug: manage-age
title: Manage Age for Development, Security, and Recovery
sidebar_label: Manage Age
---

:::info
This documentation was written for SOPS that is using Age Encryption. Please check the SOPS page for other [KMS](/docs/get-started/installation/sops#use-sops-with-an-external-key-management-service-kms) providers.
:::

## Prerequisites

- Version >= `v3.1`

## Local development setup

### Steps

1. Create a values folder:

```bash
mkdir -p values-folder ~/workspace
```

2. Clone the values repo from Gitea:

:::info
In case your TLS certificate is not trusted, set GIT_SSL_NO_VERIFY to clone the git repository:
```bash
export GIT_SSL_NO_VERIFY=true
```
:::

```bash
git clone gitea.<cluster.domainSuffix>/otomi/values.git ~/workspace/values-folder
```

3. Copy SOPS_AGE_KEY secret:

- Copy the `SOPS_AGE_KEY` secret, which is the private key for Age, from the cluster. It is located in the `otomi-pipelines` namespace in the `otomi-sops-secrets`, or in the `otomi` namespace in the `otomi-api` secret.

- Create a `.secrets` file in the values-folder at the root level and insert the `SOPS_AGE_KEY` into it.

:::info
Don't forget to use = instead of :
```bash
SOPS_AGE_KEY=AGE-SECRET-KEY-1XXX
```
:::

4. Export ENV_DIR:

Export `ENV_DIR` in the core repository to use `otomi-cli`.

```bash
export ENV_DIR=~/workspace/values-folder
```

5. Use `otomi-cli`:

The local development environment is now ready to use [otomi-cli](/docs/for-ops/cli/installation) commands.

## Age keys rotation

:::info
Please follow the local development setup steps above and be prepared to use `otomi-cli`.
:::

### Steps

1. Decrypt files with the old key and credentials:

```bash
docker run -it -v $ENV_DIR:/home/app/stack/env linode/apl-core binzx/otomi decrypt
```

:::info
The decrypted files have the `.dec` extension.
:::

2. Change the following files
   
- In the `env/settings.yaml` file update the `kms.sops.age.publicKey` property.

- In the `env/secrets.settings.yaml.dec` file update the `kms.sops.age.privateKey` property.

- In the `.secrets` file change the `SOPS_AGE_KEY` credential.

3. Change the modification date of each `.dec` file

This way we enforce encryption of all secret files.

```bash
cd ~/workspace/values-folder && find . -name '*.dec' -type f  -exec touch {} \;
```

4. Encrypt the `*.dec` files:

```bash
docker run -it -v $ENV_DIR:/home/app/stack/env linode/apl-core binzx/otomi encrypt
```

5. Update the secrets in the cluster.

Update the following secrets in the cluster for `SOPS_AGE_KEY`:

- Update the `otomi-sops-secrets` secret in the `otomi-pipelines` namespace.

- Update the `otomi-api` secret in the `otomi` namespace.

:::info
These secrets and related applications are managed by Argo CD, so don’t forget to update the secret values via Argo CD. 
It’s also possible to use a tool such as Kubernetes Lens to update Argo CD applications.
Alternatively, `otomi apply` can be used to update the secrets in the cluster before the next `git push`.
:::

6. Push the values to the `otomi-values` repo in Gitea:

```bash
cd ~/workspace/values-folder && git push
```

## Age disaster recovery

:::info
For disaster recovery, users need the `SOPS_AGE_KEY`, which is the private key for Age. 
Please make sure to store the `SOPS_AGE_KEY` in a secure place.
This key can be obtained from the `otomi-sops-secrets` secret in the `otomi-pipelines` namespace or from the `otomi-api` secret in the `otomi` namespace.
:::

To configure Age public and private keys, add or update the following `kms` section in the values.yaml file when installing the Application Platform.

```yaml
kms:
  sops:
    provider: age
    age:
      publicKey: <age-public-key>
      privateKey: <age-private-key>
```

Make sure to replace `age-public-key` and `age-private-key` values with your actual (existing) Age public and private keys.
