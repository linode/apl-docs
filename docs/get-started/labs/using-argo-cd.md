---
slug: using-argo-cd
title: Using Argo CD
sidebar_label: Using Argo CD
---

Creating Kubernetes resources using `kubectl apply -f` can be inefficient. As a developer, managing resources based on code stored in Git enhances control and traceability. APL integrates with Argo CD to provide a seamless GitOps experience, streamlining your deployment process.

## Create Kubernetes resources with Argo CD

Start by navigating to the apps section in the APL console, where you will find an app named Argo CD. Click on it to proceed.

![Argo CD App in APL Console](../../img/team-app-argo.png)

In Argo CD, notice that an application specific to your team has already been set up. This application syncs with any manifest present in the Gitea repository designated for your team.

![Argo CD Team Application Overview](../../img/argo-team-app.png)

After clicking on the app and selecting `APP DETAILS`, you'll find the `REPO URL`.

Return to the APL console, select the Gitea app in the apps section. In Gitea you will see a repository titled `otomi/team-<name>-argocd`.

![Gitea Repository for Argo CD in APL](../../img/argo-team-repo.png)

## See the Power of Argo CD in action

Let's demonstrate the capabilities of Argo CD by adding some manifests to the repository:

1. Create a file named `deploy-nginx.yaml` in the repository.
2. Insert the following contents into the file:

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nginx
     labels:
       otomi.io/app: nginx
       app: nginx
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

3. Commit the changes to the repository.

Once you return to the Argo CD application, click on the `team<name>` application.

The application is configured for automatic syncing, so a manual `SYNC` is not needed.

![Syncing in ArgoCD](../../img/argo-team-sync.png)


