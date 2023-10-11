---
slug: lab-26
title: Trigger builds
sidebar_label: Trigger builds
---

In the previous lab we created a build in Otomi using a public code repository. In this lab we'll create a build based on a private code repo in the local Gitea and trigger the build based on a webhook.

## Create private repo in Gitea

First create a private repo in Gitea and mirror a sample repo:

- Create a private repo `hello` in the `otomi` organization in Gitea as described in the [Create a private Git repo](/docs/for-devs/get-started/lab-3.md) lab.
- Clone the sample repo:

```bash
git clone https://github.com/redkubes/nodejs-helloworld.git
cd nodejs-helloworld
```

- Mirror the sample repo to the new Gitea repo:

```
git push --mirror https://gitea.<your-domain>/otomi/hello.git
```

## Create a build in Otomi with Trigger enabled

1. In the right menu, click on `Build`
2. Click on `Create Build`
3. Fill in the name `hello` for your build and a tag (default is tag is latest)
4. Choose `./Dockerfile`
5. In the `Application source` section, fill in the following:

- RepoURL: `https://gitea.<your-domain>/otomi/hello.git`
- revision: `main`

6. Enable `Trigger`
7. Copy the link in the description `(http://el-gitea-webhook-<build-name>.team-<team-name>.svc.cluster.local:8080)`
7. Click `Submit`

## Create a Webhook

1. In Otomi Console, click on `apps` the left menu and then open `Gitea`
2. In the top menu of Gitea, click on `Explore` and then on the `otomi/hello` repo
3. Go to `Settings` (top right) and then to `Webhooks`
4. Click `Add Webhook` and select `Gitea`
5. In the `Target URL`, add the link we copied when we created a build in Otomi and adjust the URL based on your team-name. Example: the team name is `demo`, so the URL should be: `http://el-gitea-webhook-hello.team-demo.svc.cluster.local:8080`
6. Click `Add Webhook`

## Trigger the build

You can now trigger the build by doing a commit in the `hello` repo, or by testing the webhook. Let's test the webhook

1. In Gitea, go to the `Settings` (top right) of the `hello` repo and then to `Webhooks`
2. Click on the webhook we just created
3. In the bottom, click on `Test Delivery`

## Check the status of the build

The build should now have started. For this, Otomi created a pipeline in Tekton. Based on the webhook, Tekton has now created a `PipelineRun`. Let's check the status of the PipelineRun:

1. In Otomi Console, click on `Builds`
2. In the list of Builds, click on the `PipelineRun` link of the `hello` build
3. Tekton Dashboard will open and show a list of all the PipelineRuns
4. Click on the PipelineRun with the name `docker-trigger-build-hello-*`
5. You can now see the status of the build.



