---
slug: create-sealed-secrets
title: Create Sealed Secrets
sidebar_label: Create Sealed Secrets
---

In this lab we will create sealed secrets and see how to securely sensitive information in git repository.

## Creating a Sealed Secret

1. Click on the `Sealed Secrets` in the sidebar.

2. Click on `Create SealedSecret`. This will take you to the page where you can create a sealed secret.

![Sealed secrets](../../img/sealed-secrets.png)

3. Fill in a name for your secret. In this lab we will use the name `secret-credentials`

4. Select the secret type. In this lab we will create a secret of type `opaque`.

5. Add the secret `data`. Add the following key-value pairs:

- `password=helloworld`
- `username=labs-user`

![Create sealed secret](../../img/create-sealed-secrets.png)

6. Click on `submit` and then `Deploy Changes`.

Note that after the secret is created you can not see the values in APL Console anymore:

![Created sealed secret](../../img/created-sealed-secrets.png)

## Checking the GIT repository

Now go to Gitea and check the otomi/values repository. You will see that under `values/env/teams/sealedsecrets.<team-name>.yaml` the secret is stored in yaml, but the values are encrypted.

![Repository sealed secret](../../img/repository-sealed-secrets.png)

## Checking the Kubernetes secret

The only way to see the values of the secret is to decrypt the secret. The secret values are stored as base64 encoded values. Open a Shell and run the following command:

```bash
kubectl get secret secret-credentials -o yaml -n team-demo
```

This wil return the secret in yaml format. The values are stored as base64 encoded values.

```yaml
apiVersion: v1
data:
  password: aGVsbG93b3JsZA==
  username: bGFicy11c2Vy
kind: Secret
metadata:
  creationTimestamp: "2024-04-11T14:33:37Z"
  name: secret-credentials
  namespace: team-demo
  ownerReferences:
  - apiVersion: bitnami.com/v1alpha1
    controller: true
    kind: SealedSecret
    name: secret-credentials
    uid: 4ead6ffe-f1e9-4b30-91d7-94011af12452
  resourceVersion: "4085462"
  uid: 48d84c95-0eb1-47d8-acae-b0d3d7474921
type: kubernetes.io/opaque
```

If you want to decode the secret you can use `base64 -- decode`:

```bash
kubectl get secret secret-credentials -n team-demo -o jsonpath="{.data.password}" | base64 --decode
helloworld
```
