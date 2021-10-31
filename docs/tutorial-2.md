---
slug: tutorials/create-k8s-svc
title: Create a Kubernetes service
sidebar_label: Create a K8s service
---

In this tutorial, we are going to deploy the image we build , tagged and pushed to harbor in the previous tutorial by creating a Kubernetes deployment to rollout a ReplicaSet and by creating a Kubernetes Service. 

## Create a Kubernetes Deployment and Service

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
      annotations:
        policy.otomi.io/ignore-sidecar: container-limits,psp-allowed-users
      labels:
        app: hello-svc
    spec:
      containers:
      - name: hello-svc
        image: harbor.your-domain.com/team-demo/hello-world:latest
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
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

### Create the deployment and service

In Otomi console, select team `demo` in the top bar. On the bottom of the left panel, click on `download KUBECFG`.

Now export the KUBECFG to set the kubectl context:

```
export KUBECONFIG=$path-to-your-kubeconfig.yaml
```

And apply the manifest to Kubernetes:

```
kubectl apply -f hello-svc.yaml
```

Check to see if the pod is running and the service has been created:

```
kubectl get pod
```
```
kubectl describe svc hello
```