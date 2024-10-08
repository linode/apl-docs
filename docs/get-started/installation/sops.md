---
slug: sops
title: Use SOPS for value encryption
sidebar_label: SOPS
---

If you would like sensitive information in the `values` repository to be encrypted, you will have to use [sops](https://github.com/mozilla/sops).

## Use SOPS with an external Key Management Service (KMS)

Find quickstart documentation below on how to setup KMS access per supported provider:

- [AWS KMS](https://aws.amazon.com/kms/getting-started/)
- [Azure Vault](https://azure.microsoft.com/en-us/services/key-vault/#getting-started)
- [Google KMS](https://cloud.google.com/kms/docs/quickstart)

Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps.

To install with SOPS/KMS, use the following values:

```yaml
kms:
  sops:
    provider: "" # provider can be one of aws|azure|google|vault
#     aws:
#       keys: ''
#       accessKey: ''
#       secretKey: ''
#       region: ''
#     azure:
#       keys: ''
#       tenantID: ''
#       clientID: ''
#       clientSecret: ''
#     google:
#       keys: ''
#       accountJson: ''
#       project: ''
#     vault:
#       token: ''
```

## Use SOPS with AGE (comming soon!)

[AGE](https://github.com/FiloSottile/age) is a simple, modern, and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.