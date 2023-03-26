---
slug: lab-16
title: Configure Argo CD image updater
sidebar_label: Lab 16
---

In the previous part, you have seen how to use Argo CD to automatically deploy applications by adding the Kubernetes manifests in to the gitops repo in Gitea. You can also use Argo CD to deploy Helm charts and automatically update the version of the deployed image.

:::info
Argo CD currently only supports the image update feature in combination with a Helm chart.
:::

## Upload a Helm chart to Harbor

You can do this in the Harbor UI, or directly with the helm CLI:

- Login to the team's OCI registry first, by using the push credentials for your team provided by the platform administrator.

```
helm registry login -u 'otomi-team-demo-push' -p $token harbor.<your-domain>
```

- Upload the chart:

```
helm push <chart-name>.tgz oci://harbor.<your-domain>/library/<chart-name>
```

## Connect the repo in Argo CD

- In the apps section in Otomi console, click on the Argo CD app
- Open `Settings` > `Repositories`
- Choose `Connect Repo using https`
- Fill in the following:
   - `Type: Helm`
   - `Name: Harbor`
   - `Project: <team-name>`
   - `Repository URL: https://harbor.<your-domain>/chartrepo/library`
- Click `Connect`

## Create a new Argo CD application

- Select `Applications`, and click on `Create`
- Fill in the following:
   - `Application Name: <your-app-name>`
   - `Project: <team-name>`
   - `Sync Policy: Automatic`
   - `Repository URL: harbor.<your-domain>/chartrepo/library`
   - `Chart: <chart-name>`
   - `Version: <version>`
   - `Cluster URL: https://kubernetes.default.svc`
   - `Namespace: <team-name>`
- Click on `Create`

You'll see that the chart is now automatically deployed.

## Configure Argo CD Image Updater

- In Argo CD, go to applications and click on the new created application
- Click on `App Details` and then `edit`
- Under `Annotations`, add the following annotation (example):

```yaml
argocd-image-updater.argoproj.io/image-list: "otomi/nodejs-helloworld:~1.2"
```

- Now click `Save`

In the example above, we used the `semver` update strategy. Read more about the supported update strategies [here](https://argocd-image-updater.readthedocs.io/en/stable/basics/update-strategies/)

