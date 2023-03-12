---
slug: tutorial-8
title: Using secrets
sidebar_label: Using secrets
---

In his tutorial, you are going to:

-  Create a secret in Hashicorp Vault
-  Create a Secret in Otomi
-  Use a secret in your workload

## Create a secret in Hashicorp Vault

- In the left panel under the Team demo, click `Otomi Apps` then click on `Vault`
- Sign in with Method `OIDC`, skip role and click on `Sign in with OIDC Provider`

You are now automatically redirected to the team space `teams/team-demo/`created in Vault.

- Click on `Create secret`
- Provide a name for the secret. We'll use the name hello. The name of the secret will be: `teams/team-demo/hello`
- In the key field, fill in `TARGET`
- In the value field, fill in `party people`
- Click on `save`

The secret is now created in vault. In the next tutorial, you are going to "inject" the secret in the Otomi service configuration.

## Create a secret in Otomi

- In the left panel under the Team demo, click `Secrets`
- Click on `Create secret`
- Provide a name for the secret. The name should match the name of the secret in Vault. Use the name `hello`
- Select `Generic` (default)
- Under `Entries` fill in `TARGET` (the key of the secret in Vault)
- Click `Submit`
- Click on `Deploy Changes` in the left pane of the console

Note: under the hood an open source tool called `external-secrets` is at work that will transform a Vault secret into a regular Kubernetes secret.

The secret in Vault is now mapped and can be used by the team in any workload. Otomi Console makes this easy by offering a secrets selector during creation of services.

## Use a secret in your workload

Add the following snippet to the `hello-ksvc.yaml` file created in the previous tutorial to the `spec:` section of the Knative service:

```yaml
    spec:
      containers:
        - image: harbor.<your-ip>.nip.io/team-demo/hello-world:demo
          securityContext:
            runAsUser: 1001
          env:
          - name: TARGET
            valueFrom:
              secretKeyRef:
                name: hello
                key: TARGET
```

And apply the manifest to Kubernetes:

bash kubectl apply -f hello-svc.yaml

```

Go to https://hello.team-demo.<your-ip>.nip.io/

As you can see, the text on the page now shows the value `party people` of the secret you created in Vault.

You can do the same for the Knative service `hello-ksvc`.
```
