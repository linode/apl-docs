---
slug: apps/vault
title: Working with Hashicorp Vault
sidebar_label: Hashicorp Vault
---

HashiCorp Vault is a shared application for securely storing and managing secrets. (Read more about Vault [here](https://www.vaultproject.io/docs/what-is-vault).) Vault has been made tenant aware in Otomi. When it is enabled, a space will automatically be created for each team, and only team members are allowed access. Vault is automatically configured to use Otomi's Keycloak OIDC settings to login users through Otomi's SSO.

Vault (like all parts of Otomi) runs natively on Kubernetes. To prevent data from Vault being lost during a rolling cluster upgrade, data persistence can be configured in combination with external (blob) storage. Read more [here](https://www.vaultproject.io/docs/configuration/storage) for configuring external data persistence.

## Sign in with full access

If you would like to sign in into Vault with full access (and not with limited access provided by Otomi), you need to:

1. Get the token

```
kubectl get secret -n vault vault-unseal-keys -o jsonpath='{.data.vault-root}' | base64 -d | pbcopy
```

2.  Open Vault and sign in with method `token`

3.  Paste the token generated in step 1.
