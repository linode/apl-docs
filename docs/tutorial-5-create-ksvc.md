---
slug: tutorials/create-knative-service
title: Create a Knative service
sidebar_label: Create a Knative service
---

:::info

When Otomi is installed with minimal values, a CA is automatically generated and added to the worker nodes. When using Azure AKS version 1.19 and up, the CA can not be automatically added to the worker nodes and pulling images from a Harbor registry is not possible. See [this](/docs/sre/known-issues/custom-ca) known issue for more information.

:::

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

Check the namespace that you are locates in the *team-demo* namespace using the following command: 
```bash
kubectl config view --minify --output 'jsonpath={..namespace}'; echo
```

And apply the manifest to Kubernetes:

```bash
kubectl apply -f hello-ksvc.yaml
```

Check if the Knative service has been created:

```bash
kubectl describe ksvc hello-ksvc
```
