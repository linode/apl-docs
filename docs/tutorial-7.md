---
slug: tutorials/add-secret
title: Securely add a secret to Kubernetes
sidebar_label: Add secret to Kubernetes
---

In his tutorial, you are going to add the secret created in Hashicorp Vault to Kubernetes by using the Secrets  so the secret can be used by the team.

## Create a secret in Otomi

- In the left panel under the Team demo, click `Secrets`
- Click on `Create secret`
- Provide a name for the secret. The name should match the name of the secret in Vault. Use the name `hello`
- Select `Generic` (default)
- Under `Entries` fill in `TARGET` (the key of the secret in Vault)
- Click `Submit`
- Click on `Deploy Changes` in the left pane of the console

The secret in Vault is now mapped and can be used by the team in Kubernetes deployments, pre deployed Knative services and in Knative services and Jobs created using Otomi Console.