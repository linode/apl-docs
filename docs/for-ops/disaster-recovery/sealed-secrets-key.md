---
slug: sealed-secrets-key
title: Sealed Secrets Key Recovery
sidebar_label: Sealed Secrets Key
---

The sealed-secrets RSA key pair is the root of trust for all platform secrets. It is stored as a Kubernetes TLS secret named `sealed-secrets-key` in the `sealed-secrets` namespace. The sealed-secrets controller uses this key to decrypt all `SealedSecret` manifests in the cluster.

If the key pair is lost and cannot be recovered, all `SealedSecret` manifests become undecryptable and the platform must be reinstalled with fresh secrets.

## Back Up the Key Pair

Back up the key pair immediately after installation and store it securely outside the cluster.

Run the following command to export the key manifest:

```bash
kubectl get secrets -n sealed-secrets \
  -l sealedsecrets.bitnami.com/sealed-secrets-key=active \
  -o yaml > sealed-secrets-key.yaml
```

Store `sealed-secrets-key.yaml` securely — for example, in a password manager or encrypted storage in a different location from the cluster.

## Restore the Key Pair on a New Cluster

Use this procedure when the cluster has been destroyed but you have:

- A BYO Git repository containing the existing values and `SealedSecret` manifests.
- A backup of the sealed-secrets key pair.

### Steps

1. Start from the values file used for the original BYO Git installation.

2. Add `installation.mode: recovery` and embed the contents of `sealed-secrets-key.yaml` under `installation.recovery.manifests`:

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

The values for `tls.crt` and `tls.key` come directly from the `sealed-secrets-key.yaml` export — they are already base64-encoded.

3. Install the platform:

```bash
helm install apl apl/apl -f values.yaml
```

During installation the operator provisions the sealed-secrets key before bootstrap. The sealed-secrets controller then decrypts the existing `SealedSecret` manifests from the values repository using the restored key, and ESO distributes the secrets to application namespaces.

## Recovery Scenarios

| Scenario | Recovery Path |
| --- | --- |
| Cluster destroyed, key pair backed up, values repo (BYO Git) intact | Use `installation.mode: recovery` with the backed-up key pair (this guide) |
| Key pair lost, values repo intact | Reinstall with fresh secrets; all platform passwords will reset |
| Values repo lost, key pair intact | Restore the values repo from a backup, then reinstall using `installation.mode: recovery` |
| Both key pair and values repo lost | Reinstall with fresh secrets; all platform passwords will reset |
