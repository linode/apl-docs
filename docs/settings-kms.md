---
slug: console/settings/kms
title: KMS
---

The KMS settings section offers configuration options for the Key Management Service information needed to seal and unseal secrets used by Otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the `otomi-values` repo), and another one for sealing/unsealing Vault storage.

IMPORTANT NOTES:

- When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text
- When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!

It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide.

### SOPS

Credentials to a KMS used by SOPS. For now it expects the `.sops.yaml` file in the root of the `otomi/values` repo to have the configuration pointing to the keys in use there. (Soon this file will be generated from key configuration gathered here.)

### Vault

Settings for Vault can be found under `charts.vault` in the Otomi values repository, but will be added to this section soon.
