---
slug: container-images
title: Container Images
sidebar_label: Container Images
---

The Container Images self-service feature can be used to build OCI compliant images based on application source code and store the image in the Team's private container registry in Harbor.

:::info
Ask your platform administrator to activate the Harbor App to use this feature.
:::

## Container Images (all)

All Container Images created by the Team are listed here.

| Column      | Description                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| Name        | The auto-generated name used to identify the Container Image in App Platform                           |
| Type        | Type of the build task. `docker` or `buildpacks`                                                       |
| Webhook url | The webhook URL if a webhook listener is configured                                                   |
| Tekton      | Link to the `PipelineRun` in the Tekton dashboard                                                      |
| Repository  | The repository name of the image in the container registry                                             |
| Tag         | The tag of the image in the container registry                                                         |
| Status      | The status of the container image                                                                      |

## Create a Container Image

1. Click `CREATE CONTAINER IMAGE`

2. Select the build task to use:

- Use `Docker` to build an image using the `./Dockerfile` in your code repository.

- Use `Buildpacks` to build an image from application source using Buildpacks.

3. Configure the Code Repository

- Select the Repository from the list. Only registered [Code Repositories](code-repositories.md) are shown here.

- Select the reference (a branch or tag).

- (optional) Change the path. When using the `Docker` build task, the default path is `Dockerfile`. To use a Dockerfile in a specific folder, use `foldername/Dockerfile`.

4. Optionally: Adjust the `image name` and `tag`.

5. Optionally: Add Extra Arguments to pass on to the build executor.

6. Optionally: Create a webhook listener to trigger the build based on a repository webhook event.

:::note
The Create webhook listener option is only available when the Git service of the selected repository is `Gitea`. When the create webhook listener option is selected both the event listener and the webhook (in Gitea) will be automatically configured.
:::

## Check the status of a container image

There are 2 options to check the status of the container image

1. Click on the `PipelineRun` link of in the list of Container Images.

2. Use the Tekton CLI:

- Start a shell in the console.

- Run the following command:

```
tkn pipelineruns list
tkn pipelinerun logs <pipelinerun-name> -f
```

## Restart a build task

To restart a build task:

- Start a shell in the console.

- Run the following command:

```
tkn pipelines list
tkn pipeline start <pipeline-name> --use-pipelinerun <pipelinerun-name>
```
