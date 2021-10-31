---
slug: tutorials/create-knative-svc
title: Create a Knative service
sidebar_label: Create a Knative service
---

In this tutorial, you are going to deploy the image you build, tagged and pushed to harbor in the previous tutorial by creating a Knative service.

## Create a Knative service

Create a `hello-ksvc.yaml` file and copy/paste the following Kubernetes manifests:

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
        - image: harbor.your-domain.com/team-demo/hello-world:latest
          securityContext:
            runAsUser: 1001
```

### Create the knative service

If you haven't done already, first set your kubectl context:

In Otomi console, select team `demo` in the top bar. On the bottom of the left panel, click on `download KUBECFG`.

Now export the KUBECFG to set the kubectl context:

```
export KUBECONFIG=$path-to-your-kubeconfig.yaml
```

And apply the manifest to Kubernetes:

```
kubectl apply -f hello-ksvc.yaml
```

Check if the Knative service has been created:

```
kubectl describe ksvc hello-ksvc
```