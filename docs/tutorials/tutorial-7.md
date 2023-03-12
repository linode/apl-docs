---
slug: tutorial-7
title: Using Knative
sidebar_label: Using Knative
---

In this lab, we are going to:

- Activate Knative
- Create a Knative service using Otomi Console
- Create a Knative service with manifest (using ArgoCD)

## Activate Knative

Go to the Apps section under `Platform` in the side menu and Drag and Drop `Knative` from the `Disabled apps` to the `Enabled apps` and `Deploy Changes`

## Create a Knative service using Otomi Console

1. Select your team in the top bar, click `Services` under your team in the right menu and click on `Create Service`

You might notice that in the `Service type` section there are now 2 extra options:

- Existing knative service: to map a pre-deployed knative service to Otomi
- New knative service: to create a new knative service using Otomi

2. Provide a name for your service (`helloworld` recommended)

3. Select `New knative service` and use the following values:

- Run As User: `1001`
- Repository: `otomi/nodejs-helloworld`
- Tag: `v1.2.12`
- Limits: `CPU=200m`, `Memory=128Mi`
- Requests: `CPU=100m`, `Memory=64Mi`PP
- Exposure: `Ingress`

4. Now click `submit` and then `Deploy Changes`

5. The new service and the hostname are now shown in the list of services. Wait until the Drone pipeline has finished and click on the hostname. What do you see?

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

6. Optionally you can now expose this service by selecting `Existing knative service` when creating a Service in Otomi.