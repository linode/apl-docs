---
slug: trigger-builds
title: Trigger Builds
sidebar_label: Trigger Builds
---

In the previous lab we created a Container Image using the `blue` repo in Gitea. In this lab we'll create a container image using the `green` repo and trigger the build based on a webhook event.

## Create a Container Image with create webhook listener enabled

1. In the left menu, click on `Container Images`.

2. Click on `CREATE CONTAINER IMAGE`.

3. Select the `Docker` build task.

4. Select the `green` repository from the Repository drop-down list.

5. Select the Reference (branch or tag). The `green` repo only has one branch (`main`).

6. Select `Create webhook listener`

7. Click `Create Container Image`.

App Platform will now create the Tekton event listener and configure the webhook for the `green` repo.

Because the build task has not been triggered yet, the status of the container image will show a status `waiting for first event`.

## Trigger the build

You can now trigger the build pipeline by doing a commit in the `green` repo, or by testing the delivery of the webhook. Let's test the delivery of the webhook:

1. In Gitea, go to the `Settings` (top right) of the `green` repo and then to `Webhooks`.

2. Click on the webhook that has been created.

3. In the bottom, click on `Test Delivery`.

## Check the status of the build

The build should now have started. Based on the webhook, Tekton has now created a `PipelineRun`. Let's check the status of the PipelineRun:

1. In the Console, click on `Container Images`

Because the build for the `green-main` image was triggered, a `PipelineRun` is now running and the status of the Container Image will now show `in progress`. When the build task has completed, the status will show `ready`.

2. In the list of Container Images, click on the `PipelineRun` link of the `green` build.

3. Tekton Dashboard will open and show a list of all the PipelineRuns. It will show all PipelineRuns because when starting the pipeline based on a trigger event, the Tekton `PipelineRun` resource is created based on a template and the Console will not know the exact name of the PipelineRun because the name is automatically generated.

4. Click on the PipelineRun with the name `docker-trigger-build-green-main-*`.

5. You can now see the the full log of the build task.
