---
slug: sealed-secrets
title: Sealed Secrets
sidebar_label: Sealed Secrets
---

Platform secrets are automatically encrypted using [Bitnami Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets). No additional configuration is required. During installation the platform generates an RSA key pair and uses it to encrypt all sensitive configuration values into `SealedSecret` manifests stored in the values Git repository.

## How It Works

- All sensitive values (passwords, API tokens, TLS keys) are encrypted at bootstrap using the platform's RSA key pair.
- Encrypted `SealedSecret` manifests are committed to the values repository — no plaintext secrets are stored on disk or in Git.
- The sealed-secrets controller running in the cluster decrypts the manifests into standard Kubernetes Secrets.
- The External Secrets Operator (ESO) distributes secrets to each application's namespace automatically.

## Back Up the Key Pair

The sealed-secrets key pair is the root of trust for all platform secrets. Back it up immediately after installation.

```bash
kubectl get secrets -n sealed-secrets \
  -l sealedsecrets.bitnami.com/sealed-secrets-key=active \
  -o yaml > sealed-secrets-key.yaml
```

Store the resulting file securely outside the cluster. If the key is lost, platform secrets cannot be decrypted and the platform must be reinstalled with fresh secrets.

:::note
See [Sealed Secrets Key Recovery](../../for-ops/disaster-recovery/sealed-secrets-key.md) for detailed backup and restore instructions, and [Recovery Installation](recovery.md) for how to restore the platform on a new cluster using the backed-up key.
:::
