---
slug: secrets
title: Platform Secrets
sidebar_label: Secrets
---

Platform secrets are encrypted using [Bitnami Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) and distributed to applications via the [External Secrets Operator](https://external-secrets.io) (ESO). No secrets are stored in plaintext on disk or in Git.

## How Platform Secrets Work

1. All sensitive configuration values (passwords, API tokens, TLS keys) are encrypted into `SealedSecret` manifests and stored in the values Git repository.
2. The sealed-secrets controller running in the cluster decrypts them into standard Kubernetes Secrets in the `apl-secrets` namespace.
3. ESO reads from `apl-secrets` via a `ClusterSecretStore` and distributes the secrets to each application's namespace using `ExternalSecret` resources.

This means the values Git repository contains only encrypted manifests, never plaintext secrets.

## Secret Lifecycle

### On Installation

During the bootstrap phase the platform:

1. Generates an RSA-4096 key pair for the sealed-secrets controller.
2. Encrypts all sensitive configuration values into `SealedSecret` manifests.
3. Writes the encrypted manifests to the values repository.
4. Deploys the sealed-secrets controller, which decrypts the manifests into Kubernetes Secrets in the `apl-secrets` namespace.
5. Deploys ESO and the `ClusterSecretStore`, which distributes secrets to application namespaces via `ExternalSecret` resources.

### On Runtime

The operator polls the values Git repository for changes. When a change is detected:

1. Helmfile applies updated `ExternalSecret` resources.
2. ESO syncs the corresponding Kubernetes Secrets to each application's namespace.
3. ESO refreshes all secrets on a one-hour interval to keep them in sync.

## The Sealed Secrets Key Pair

The RSA key pair used to encrypt and decrypt all platform secrets is stored as a Kubernetes TLS secret named `sealed-secrets-key` in the `sealed-secrets` namespace. The sealed-secrets controller uses this key to decrypt `SealedSecret` manifests on the cluster.

:::note
If this key pair is lost and cannot be recovered, all `SealedSecret` manifests become undecryptable. Back up the key pair immediately after installation and store it securely outside the cluster.
:::

### Back Up the Key Pair

Run the following command on the cluster to export the key manifest:

```bash
kubectl get secrets -n sealed-secrets \
  -l sealedsecrets.bitnami.com/sealed-secrets-key=active \
  -o yaml > sealed-secrets-key.yaml
```

Store the resulting `sealed-secrets-key.yaml` file securely — for example, in a password manager or encrypted storage outside the cluster.

See [Sealed Secrets Key Recovery](../disaster-recovery/sealed-secrets-key.md) for instructions on how to use this backup to restore a cluster.
