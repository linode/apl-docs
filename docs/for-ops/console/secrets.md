---
slug: secrets
title: Platform - Secrets
sidebar_label: Secrets
---

:::info
To enable this feature, first make sure [Hashicorp Vault](/apps/vault.md) is activated.
:::

All known Builds on the platform are listed here. Builds can be sorted based on:

| Property      | Description                                            |
| ------------- | ------------------------------------------------------ |
| Name          | The name of the secret                                 |
| Type          | The secret type (generic, docker-registry, TLS)        |
| Team          | The name of the Team responsible for the secret        |

A platform admin can NOT create secrets and does NOT have access to the team's secrets in Vault. In case an administrator needs access to team secrets, retrieve the `vault vault-unseal-keys` and sign in with the `token` method. See [here](/docs/apps/vault.md) for detailed instructions.