---
slug: lab-26
title: Trigger builds
sidebar_label: Trigger builds
---

In the previous lab we created a build in Otomi using the `blue` repo in Gitea. In this lab we'll create a build for the `green` repo and trigger the build based on a webhook.

## Create a build in Otomi with Trigger enabled

1. In the left menu, click on `Builds`
2. Click on `Create Build`
3. Fill in the name `green` for your build
4. Choose `./Dockerfile` and fill in the repo URL for the `green` repo created in the previous lab.
5. Enable `Trigger`
6. Click `Submit`

## Get the webhook URL

Before we can configure the webhook for the `green` repo in Gitea, we will need the webhook URL. You can find this webhook URL for your build in the list of Builds. Add the webhook URL to your clipboard.

## Create a Webhook

1. In Otomi Console, click on `apps` the left menu and then open `Gitea`
2. In the top menu of Gitea, click on `Explore` and then on the `green` repo
3. Go to `Settings` (top right) and then to `Webhooks`
4. Click `Add Webhook` and select `Gitea`
5. In the `Target URL`, paste the webhook URL from your clipboard.
6. Click `Add Webhook`

## Trigger the build

You can now trigger the build by doing a commit in the `green` repo, or by testing the webhook. Let's test the webhook:

1. In Gitea, go to the `Settings` (top right) of the `green` repo and then to `Webhooks`
2. Click on the webhook we just created
3. In the bottom, click on `Test Delivery`

## Check the status of the build

The build should now have started. Based on the webhook, Tekton has now created a `PipelineRun`. Let's check the status of the PipelineRun:

1. In Otomi Console, click on `Builds`
2. In the list of Builds, click on the `PipelineRun` link of the `green` build
3. Tekton Dashboard will open and show a list of all the PipelineRuns
4. Click on the PipelineRun with the name `docker-trigger-build-green-*`
5. You can now see the status of the build

## Find your image in Harbor

The build succeeded. Now it is time to see artifacts

1. In Otomi Console, got to Apps and click on `Harbor`
2. Click `LOGIN VIA OIDC PROVIDER`
3. Navigate to the `team-demo` project
4. In the `Repositories` tab, click `team-demo/blue` link
5. Observe artifacts
