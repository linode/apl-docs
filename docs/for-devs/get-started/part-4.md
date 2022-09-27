---
slug: part-4
title: Deploy your application
sidebar_label: Part 4
---

Now that you have access to the team namespace and have pushed your image to Harbor, you can now deploy your application.

In this case we'll use a demo app called hello. If you like you can clone the repo

```bash
git clone https://github.com/redkubes/nodejs-helloworld.git
```

And then tag and build the image as you have done in [part 3](part-3).

## Create a Deployment and Service

Create a `hello-svc.yaml` file and copy/paste the following 2 Kubernetes manifests:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-svc
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-svc
  template:
    metadata:
      labels:
        app: hello-svc
    spec:
      containers:
        - name: hello-svc
          image: harbor.<your-domain>/<team-name>/<image-name>:<tag>
          resources:
            limits:
              memory: '128Mi'
              cpu: '200m'
            requests:
              memory: '64Mi'
              cpu: '100m'
          securityContext:
            runAsUser: 1001
          ports:
            - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: hello-svc
spec:
  selector:
    app: hello-svc
  ports:
    - port: 80
      targetPort: 8080
```


Now apply the manifest to Kubernetes:

```bash
kubectl apply -f hello-svc.yaml
```

Check to see if the pod is running and the service has been created:

```bash
kubectl get pod
```

```bash
kubectl describe svc hello
```

:::note
The example here is only a very simplified one. You can dive into the world of Kubernetes deployments, or you can ask your platform administrator to enable Knative Serving. Knative will then take care of auto scaling for you. We will also soon release a new feature that will help to remove the struggle of creating and managing Kubernetes manifests. Stay tuned!
:::
