---
slug: key-management
title: Platform settings
sidebar_label: Key Management
---

:::caution
SOPS-based key management was removed in v6.0.0. Upgrading from v5.x to v6.0.0 migrates your secrets automatically. See [Platform Secrets](../secrets.md) for the current approach.
:::

:::info
The Key Management section in the Settings will NOT be visible when the installation is done by Akamai Cloud. In this case Age is used as KMS.
:::

## Key management

The Key management settings section offers configuration options for the used Key Management Service (KMS) information needed to seal and unseal sensitive information in the Values repository. At least one key is required. It needs one for encrypting/decrypting the `values` repo.

It is advised to provide credentials to an external stable KMS, so that unseal keys can always be managed from one central location.
