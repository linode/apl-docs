---
slug: apps/vault
title: Working with Hashicorp Vault
sidebar_label: Hashicorp Vault
---

Vault is a tool for safe use of secrets. A secret is something (e.g. a password) to which you want to restrict access and to be able to find out who used which secret based on an audit log. Read more about Vault [here](https://www.vaultproject.io/docs/what-is-vault)

HashiCorp Vault is a shared application for securely storing and managing secrets. Vault has been made tennant aware in Otomi. When Vault is enabled, each team will automatically be provided with a space in Vault and is only allowed to see and manage secrets owned by the team. Vault uses the generic Otomi integration options for user management. Based on the roles in Otomi, users get access to a space in Vault. A team user automatically gains access to the secrets of the team. The authentication (via OIDC) is also integrated offering SSO.

Vault (like all parts of Otomi) runs natively on Kubernetes. To prevent data from Vault being lost during a rolling cluster upgrade, data persistence can be configured in combination with external (blob) storage. Read more [here](https://www.vaultproject.io/docs/configuration/storage/azure) for configuring data persistence for Vault on Azure.

## Sign in with full access

If you would like to sign in into Vault with full access (and not with limited access provided by Otomi), you need to:

1. Get the token

```
kubectl get secret -n vault vault-unseal-keys -o jsonpath='{.data.vault-root}' | base64 -d | pbcopy
```

2.  Open Vault and sign in with method `token`

3.  Paste the token generated in step 1.
