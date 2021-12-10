---
slug: tutorials/create-knative-service
title: Create a Knative service
sidebar_label: Create a Knative service
---

In this tutorial, you are going to deploy the image you build, tagged and pushed to harbor in the previous tutorial by creating a Knative service.

### Create a Knative Service

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
        autoscaling.knative.dev/minScale: '1'
        policy.otomi.io/ignore-sidecar: container-limits,psp-allowed-users
    spec:
      containers:
        - image: harbor.your-domain.com/team-demo/hello-world:demo
          securityContext:
            runAsUser: 1001
```

### Deploy the Knative Service

If you haven't done already, first set your kubectl context:

In Otomi console, select team `demo` in the top bar. On the bottom of the left panel, click on `download KUBECFG`.

Now export the KUBECFG to set the kubectl context:

```bash
export KUBECONFIG=$path-to-your-kubeconfig.yaml
```

And apply the manifest to Kubernetes:

```bash
kubectl apply -f hello-ksvc.yaml
```

Check if the Knative service has been created:

```bash
kubectl describe ksvc hello-ksvc
```
