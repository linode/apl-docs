---
slug: key-management
title: Platform settings
sidebar_label: Key Management
---

## Key management

The Key management settings section offers configuration options for the used Key Management Service (KMS) information needed to seal and unseal secrets used by APL. APL needs at least one key. It needs one for encrypting/decrypting the `otomi-values` repo.

:::important
When omitting KMS credentials for SOPS, the secrets in the `otomi-values` repo will be stored in plain text.
:::

It is advised to provide credentials to an external stable KMS, so that unseal keys can always be managed from one central location.