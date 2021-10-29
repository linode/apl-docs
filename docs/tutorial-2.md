---
slug: tutorials/create-deployment
title: Create a deployment
sidebar_label: Create a K8s service
---

In this tutorial, we are going to deploy the image we build , tagged and pushed to harbor in the previous tutorial by creating a Kubernetes deployment to rollout a ReplicaSet and by creating a Kubernetes Service. 

## Create a Kubernetes Deployment and Service

Create a `hello.yaml` file and copy/paste the following 2 Kubernetes manifests:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello
  template:
    metadata:
      labels:
        app: hello
    spec:
      containers:
      - name: hello
        image: harbor.your-domain.com/team-demo/hello-world:latest
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        securityContext:
          runAsUser: 1001
        ports:
        - containerPort: 3000
      imagePullSecrets: 
      - name: "harbor-pullsecret" 
---
apiVersion: v1
kind: Service
metadata:
  name: hello
spec:
  selector:
    app: hello
  ports:
  - port: 80
    targetPort: 3000
```

### Set kubectl context

In Otomi console, select team `demo` in the top bar. On the bottom of the left panel, click on `download KUBECFG`.

Now export the KUBECFG to set the kubectl context:

```
export KUBECONFIG=$path-to-your-kubeconfig.yaml
```

And apply the manifest to Kubernetes:

```
kubectl apply -f hello.yaml
```

Check if the deployment and service have been created:

```
kubectl get deployment hello
```
```
kubectl get svc hello -n team-demo
```