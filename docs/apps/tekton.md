---
slug: tekton
title: Tekton
sidebar_label: Tekton
---

## About

Tekton is used in APL for the Builds self-service. When a Build is created, APL generates the Tekton Pipeline and Pipelinerun resources. There are 2 types op pipelines:

- Docker for building images based on a Dockerfile

- Buildpacks for building images using buildpacks

When Tekton is activated, APL will add 3 Tekton tasks to the team's namespace:

1. [Buildpacks](https://github.com/tektoncd/catalog/tree/main/task/buildpacks/0.6)

2. [git-clone](https://github.com/tektoncd/catalog/tree/main/task/git-clone/0.9)

3. [kaniko](https://github.com/tektoncd/catalog/tree/main/task/kaniko/0.6)


and use them in the pipelines.

When APL generates the manifest resources for the pipeline and the pipelinerun, the pipelinerun will automatically run the pipeline once. Use the following command to check if the status of the pipelinerun:

```
tkn pipelineruns logs  <name-of-the-pipelinerun> -n team-<team name>
```

If the build is changed in APL, the pipelinerun will not be re-started. Use the following command to start the pipeline after a change:

```
tkn pipeline start <name-of-the-pipeline>  --use-pipelinerun <name-of-the-pipelinerun>  -n team-<team name>
```