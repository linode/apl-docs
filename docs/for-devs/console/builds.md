---
slug: builds
title: Team Builds
sidebar_label: Builds
---

<!-- ![Console: new service](img/team-builds.png) -->

A Build in Otomi is a self-service feature for building OCI compliant images based on application source code.

:::info
Ask you platform administrator to activate Harbor and Tekton to be able to use this feature.
:::

:::info
The otomi Builds feature can only use public code repositories or private repo's in the local Gitea. Images will always be pushed to a registry in the local Harbor.
:::

## Create a build

1. Enter a name for the build

The name of the build will be used for the registry name of the image (`harbor.<domainSuffix>/team-name/build-name`)

2. (optional) Adjust the tag

The tag will be used to tag the image  (`harbor.<domainSuffix>/team-name/build-name:tag`)

Now choose the type of the build:

- Use `Docker` to build an image using the `./Dockerfile` in your code repository
- Use `Buildpacks` to build an image from application source using Buildpacks

### Docker

1. Add the URL of the Git repository that contains the application source code
2. (optional) Change the path of the `Dockerfile`
3. (optional) Change the revsion. This can be a commit, a tag, or a branch

### Buildpacks

1. Add the URL of the Git repository that contains the application source code
2. (optional) Add the path. This is a subpath within the repo where the source to build is located
3. (optional) Change the revsion. This can be a commit, a tag, or a branch

### Build status

To see the status of a build:

- Start/open a shell in the console
- run the following command:

```
tkn pipelineruns list
tkn pipelinerun logs <pipelinerun-name> -f
```

Build can be restarted by changing the `tag` of the build or by restarting the pipeline manually:

- Start/open a shell in the console
- run the following command:

```
tkn pipelines list
tkn pipeline start <pipeline-name> --use-pipelinerun <pipelinerun-name>
```


