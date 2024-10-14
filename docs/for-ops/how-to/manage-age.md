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

1. Installing [Age](https://github.com/FiloSottile/age/)

```bash
brew install age
```

2. Verifying Age Versions

```bash
age --version
age-keygen --version
```

3. Installing [Dependencies](https://github.com/linode/apl-core/blob/main/bin/install-deps.sh)

```bash
helm plugin install https://github.com/databus23/helm-diff.git
helm plugin install https://github.com/jkroepke/helm-secrets.git --version v3.15.0
```

4. Create a values folder

```bash
mkdir -p values-folder ~/workspace
```

5. Clone the values repo from Gitea

:::info
Don't forget to set GIT_SSL_NO_VERIFY!
```bash
export GIT_SSL_NO_VERIFY=true
```
:::

```bash
git clone gitea.<cluster.domainSuffix>/otomi/values.git ~/workspace/values-folder
```

6. Copy SOPS_AGE_KEY secret

- Copy the SOPS_AGE_KEY secret, which is the private key for Age, from the cluster. It is located in the `otomi-pipelines` namespace in the `otomi-sops-secrets`, or in the `otomi` namespace in the `otomi-api` secret.
- Create a `.secrets` file in the values-folder at the root level and insert the `SOPS_AGE_KEY` into it.

:::info
Don't forget to use = instead of :
```bash
SOPS_AGE_KEY=AGE-SECRET-KEY-1XXX
```
:::

7. Export ENV_DIR

Export `ENV_DIR` in the core repository to use `otomi-cli`.

```bash
export ENV_DIR=~/workspace/values-folder
```

8. Use `otomi-cli`

The local development environment is ready for use [otomi-cli](/docs/for-ops/cli/installation) commands.


## Age keys rotation

:::info
Please follow the local development guidelines and be prepared to use `otomi-cli`.
:::

### Steps

1. Decrypt values with old key and credentials 

```bash
otomi decrypt
```

:::info
The decrypted versions of the values can be seen in the `.dec` files.
:::

2. Change the following files
   
- In the `env/settings.yaml` file update the `kms.sops.age.publicKey` property.
- In the `env/secrets.settings.yaml.dec` file update the `kms.sops.age.privateKey` property.
- In the `.secrets` file change the `SOPS_AGE_KEY` credential.

3. Change modification date of each `.dec` file

In this way we enforce encryption of all secret files.

```bash
cd ~/workspace/values-folder && find . -name '*.dec' -type f  -exec touch {} \;
```

4. Encrypt values

```bash
otomi encrypt
```

5. Update the secrets in the cluster

Update the following secrets in the cluster for SOPS_AGE_KEY

- Update the `otomi-sops-secrets` secret in the `otomi-pipelines` namespace.
- Update the `otomi-api` secret in the `otomi` namespace.

:::info
These secrets and related applications are managed by ArgoCD, so don’t forget to update the secret values via ArgoCD. 
It’s also possible to use a tool such as Kubernetes Lens to update ArgoCD applications.
Alternatively, `otomi apply` can be used to update the secrets in the cluster before the next `git push`.
:::

6. Push values to the values repo in Gitea

```bash
cd ~/workspace/values-folder && git push
```

## Age disaster recovery

:::info
For disaster recovery, users need the `SOPS_AGE_KEY`, which is the private key for Age. 
Therefore, they should store the `SOPS_AGE_KEY` in a secure place. 
This key can be obtained from the `otomi-pipelines` namespace in the `otomi-sops-secrets` secret or from the `otomi` namespace in the `otomi-api` secret.
:::

To configure Age public and private keys, add or update the following kms section in the values.yaml file when installing APL.

```yaml
kms:
  sops:
    provider: age
    age:
      publicKey: <age-public-key>
      privateKey: <age-private-key>
```

Make sure to replace `age-public-key` and `age-private-key` values with your actual (existing) Age public and private keys.
