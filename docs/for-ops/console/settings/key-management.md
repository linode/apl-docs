---
slug: key-management
title: Platform settings
sidebar_label: Key Management
---

## Key management

The Key management settings section offers configuration options for the used Key Management Service (KMS) information needed to seal and unseal sensitive information in the Values repository. At least one key is required. It needs one for encrypting/decrypting the `otomi-values` repo.

It is advised to provide credentials to an external stable KMS, so that unseal keys can always be managed from one central location.