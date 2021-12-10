---
slug: tutorials/use-secret
title: Use secrets in Kubernetes
sidebar_label: Use secret in Kubernetes
---

In his tutorial, you are going to use the secret created in Hashicorp Vault and added to Kubernetes using the Otomi Secrets feature in a Kubernetes deployment.

Add the following snippet to the `hello-svc.yaml` file created in the previous tutorial to the `spec:` section of the deployment:

```yaml
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

Go to https://hello.team-demo.your-domain.com/

As you can see, the text on the page now shows the value `party people` of the secret you created in Vault.

You can do the same for the Knative service `hello-ksvc`.
```
