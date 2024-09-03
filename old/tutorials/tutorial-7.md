---
slug: tutorial-7
title: Using Knative
sidebar_label: Using Knative
---

In this lab, we are going to:

- Activate Knative
- Create a Knative service with manifest (using ArgoCD)

## Activate Knative

Go to the Apps section under `Platform` in the side menu and Drag and Drop `Knative` from the `Disabled apps` to the `Enabled apps` and `Deploy Changes`
## Create a Knative service with manifest (using ArgoCD)

1. Open the `Gitea` app
2. In Gitea (click `Explore` in the top menu) you will see a repo created by Otomi for each team, called `otomi/team-demo-argocd`
3. Go to the repo and create a new file called `hello-ksvc.yaml` and copy/paste the following YAML manifest:

```yaml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello-ksvc
spec:
  template:
    metadata:
      annotations:
        autoscaling.knative.dev/minScale: '1'
        policy.otomi.io/ignore-sidecar: container-limits,psp-allowed-users
    spec:
      containers:
        - image: harbor.<your-ip>.nip.io/team-demo/hello-world:demo
          securityContext:
            runAsUser: 1001
```

4. Open the `ArgoCD` app
5. In ArgoCD, click on the `team-demo` application

You can now see that the Knative service is created.

6. Optionally you can now expose this service by creating a Service in Otomi.

:::info
Comming soon: Let Otomi deploy your Knative service by generating a Helm chart for your Knative service
:::