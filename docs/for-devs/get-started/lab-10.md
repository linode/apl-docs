---
slug: lab-10
title: BYO manifests to create a workload
sidebar_label: BYO manifests
---

:::info
Argo CD needs to be activated for this lab.
:::

Deploying your applications by doing `kubectl apply -f` is not ideal. You as a developer would like to automatically deploy and update your application after a new build. Otomi integrated Argo CD to provide an out-of-the-box GitOps solution.

## Using Argo CD to deploy manifests and charts

In the apps section in Otomi console, you'll see an app called Argo CD. Click on it.

![kubecfg](../../img/team-app-argo.png)

In Argo CD you'll see that an Argo app has already been created for your team. This app is configured to synchronize any manifest that is in the created repo in Gitea for Argo.

![kubecfg](../../img/argo-team-app.png)

If you click on the app and then click on `APP DETAILS`, you'll see the `REPO URL` and also that the `SYNC POLICY` is set to `ENABLE AUTO-SYNC`.

Go back to the console and click on the Gitea app in the apps section. In the list of repo's you'll now see a new repo called `otomi/team-<name>-argocd`.

![kubecfg](../../img/argo-team-repo.png)

To show the power of Argo CD, let's add a manifest to the repo and see what happens.

- Create a new file in the repo called `deploy-nginx.yaml` 
- Add the following contents to the file:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginxinc/nginx-unprivileged:stable
          resources:
            limits:
              memory: '128Mi'
              cpu: '200m'
            requests:
              memory: '64Mi'
              cpu: '100m'
          ports:
            - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 8080
```

- Commit Changes

Now go back to the Argo CD application and click on the `team<name>` application.

Note that the Argo CD application is not configured to automatically SYNC. So click `SYNC` and then `REFRESH`.

![kubecfg](../../img/argo-team-sync.png)


