---
slug: tutorials/expose-service
title: Publicly expose an existing Kubernetes service
sidebar_label: Create a Ksvc
---

In this tutorial, we are going to deploy the image we build , tagged and pushed to harbor in the previous tutorial by creating a Knative service.

## Create a Knative service

Create a `hello-ksvc.yaml` file and copy/paste the following 2 Kubernetes manifests:

```yaml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello-ksvc
spec:
  template:
    metadata:
      annotations:
        policy.otomi.io/ignore-sidecar: container-limits,psp-allowed-users
        autoscaling.knative.dev/minScale: '1'
    spec:
      containers:
        - env: # optional: add environment variables
            - name: # name of the env
              value: # value of the env
          image: # the image you would like to deploy
          securityContext:
            runAsUser: 1001
```