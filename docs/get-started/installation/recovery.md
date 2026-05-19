---
slug: recovery
title: Recovery Installation
sidebar_label: Recovery
---

Use recovery mode to reinstall the platform on a new cluster while restoring all platform secrets from a previous installation. This requires a [BYO Git](byo-git.md) repository that contains the existing values and `SealedSecret` manifests, and a backup of the sealed-secrets key pair from the original cluster.

## Prerequisites

- A new Kubernetes cluster.
- BYO Git repository URL and credentials (the repository used in the original installation).
- Sealed-secrets key pair backup exported from the original cluster. See [Sealed Secrets Key Recovery](../../for-ops/disaster-recovery/sealed-secrets-key.md) for export instructions.

## Configure Recovery Mode

1. Start from the `values.yaml` file used for the original BYO Git installation.

2. Add `installation.mode: recovery` and embed the contents of the `sealed-secrets-key.yaml` export under `installation.recovery.manifests`:

```yaml
installation:
  mode: recovery
  recovery:
    manifests:
      apiVersion: v1
      items:
        - apiVersion: v1
          data:
            tls.crt: <base64-encoded certificate>
            tls.key: <base64-encoded private key>
          kind: Secret
          metadata:
            labels:
              sealedsecrets.bitnami.com/sealed-secrets-key: active
            name: sealed-secrets-key
            namespace: sealed-secrets
          type: kubernetes.io/tls
      kind: List
      metadata:
        resourceVersion: ""
```

The values for `tls.crt` and `tls.key` come directly from the `sealed-secrets-key.yaml` backup file — they are already base64-encoded.

To obtain the manifest from a running cluster before decommissioning it:

```bash
kubectl get secrets -n sealed-secrets \
  -l sealedsecrets.bitnami.com/sealed-secrets-key=active \
  -o yaml > sealed-secrets-key.yaml
```

3. Install the platform:

```bash
helm install apl apl/apl -f values.yaml
```

## What Happens During Recovery

When the operator starts in recovery mode:

1. It provisions the sealed-secrets key into the `sealed-secrets` namespace before bootstrap.
2. The sealed-secrets controller decrypts the existing `SealedSecret` manifests from the BYO Git repository using the restored key.
3. ESO distributes the decrypted secrets to all application namespaces.
4. Applications start with the same secrets as the original cluster.

:::note
For more information on the sealed-secrets key pair and backup procedures, see [Sealed Secrets Key Recovery](../../for-ops/disaster-recovery/sealed-secrets-key.md).
:::
