---
slug: tutorials/create-secret-vault
title: Create a secret in Hashicorp Vault
sidebar_label: Create a secret in Vault
---

In his tutorial, you are going to create a secret Hashicorp Vault

:::info
When Otomi is installed with an auto-generated CA or when using LetsEncrypt staging certificates, OIDC access to Vault does not work. A fix for this is coming soon.
It is possible to sign in using a token. Check [here](/docs/apps/vault) for instructions.
:::

## Create a secret in Vault

- In the left panel under the Team demo, click `Otomi Apps` then click on `Vault`
- Sign in with Method `OIDC`, skip role and click on `Sign in with OIDC Provider`

You are now automatically redirected to the team space `teams/team-demo/`created in Vault.

- Click on `Create secret`
- Provide a name for the secret. We'll use the name hello. The name of the secret will be: `teams/team-demo/hello`
- In the key field, fill in `TARGET`
- In the value field, fill in `party people`
- Click on `save`

The secret is now created in vault. In the next tutorial, you are going to 'map' the secret in the Otomi configuration.