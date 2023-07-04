---
slug: builds
title: Team Builds
sidebar_label: Builds
---

<!-- ![Console: new service](img/team-builds.png) -->

A Build in Otomi is a self-service feature for:

- Building OCI compliant images based on application source code
- Pushing the image to the teams private registry in Harbor

:::info
This is a BETA feature. Any feedback on this feature is very much appreciated.
:::

:::info
Ask you platform administrator to activate Harbor and Tekton to be able to use this feature.
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
4. (optional) Configure [repository access](#optional-configure-repository-access)


### Buildpacks

1. Add the URL of the Git repository that contains the application source code
2. (optional) Add the path. This is a subpath within the repo where the source to build is located
3. (optional) Change the revsion. This can be a commit, a tag, or a branch
4. (optional) Configure [repository access](#optional-configure-repository-access)


### (optional) Configure repository access

:::info
For now, Otomi only supports authenticated access to local Gitea repositories. Otomi will soon also support authenticated access to GitHib repositories.
:::

- If Gitea (provided by Otomi) is used to host the code repository, select `Otomi Gitea repo`
<!-- - If an external private Git repo is used that requires authentication, select `Private repo` and fill in the username ans password. If your github account has 2 factor auth configured, create a personal access token using [this procedure](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). -->

After a few minutes, Otomi will run a pipeline to create the build and push the build to the team's private Harbor registry. Check Harbor to see if the image is created and pushed.

To see the status of the build:

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


