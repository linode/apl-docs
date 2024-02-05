---
slug: sealed-secrets
title: Sealed Secrets
sidebar_label: Sealed Secrets
---

Encrypt your Secret into a SealedSecret, which is safe to store - even inside a public repository.

## Overview

[Bitnami Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) is a controller that allows you to encrypt your kubernetes secrets and store them in a secure manner, even in public repositories. The controller works by encrypting your secret into a SealedSecret, which can only be decrypted by the sealed secrets controller in your cluster.

## Bring your own certificates

:::info AlERT
You can use your certificates for the disaster recovery purpose. Please make sure to download encryption keys.
:::

While the controller generates its own certificates upon deployment, you also have the option to bring your own certificates. This allows the controller to consume certificates from a secret labeled with `sealedsecrets.bitnami.com/sealed-secrets-key=active`. The Secret should reside in the `sealed-secrets` namespace, which must be the same as the controller's namespace. You can have multiple secrets with this label.

To configure the certificates, add the following to the `values.yaml` when installing Otomi:

```yaml
bootstrap:
  apiVersion: v1
  items:
    - apiVersion: v1
      data:
        tls.crt: <tls-crt>
        tls.key: <tls-key>
      kind: Secret
      metadata:
        generateName: sealed-secrets-key
        labels:
          sealedsecrets.bitnami.com/sealed-secrets-key: active
        name: <sealed-secrets-name>
        namespace: sealed-secrets
      type: kubernetes.io/tls
  kind: List
```

Make sure to replace `<tls-crt>`, `<tls-key>`, `<sealed-secrets-name>` with your actual certificate data and sealed secrets name.
