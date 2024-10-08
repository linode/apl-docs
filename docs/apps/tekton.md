---
slug: tekton
title: Tekton
sidebar_label: Tekton
---

## About

Tekton is used for the Builds self-service feature. When a Build is created, the Tekton Pipeline and Pipelinerun resources are created automatically. There are 2 pipeline types:

- `Docker` for building images based on a Dockerfile

- `Buildpacks` for building images using buildpacks

When Tekton is activated, 4 Tekton tasks will be added to the Team's namespace:

1. [`buildpacks`](https://github.com/tektoncd/catalog/tree/main/task/buildpacks/0.6)

2. [`git-clone`](https://github.com/tektoncd/catalog/tree/main/task/git-clone/0.9)

3. [`kaniko`](https://github.com/tektoncd/catalog/tree/main/task/kaniko/0.6)

4. [`grype`](https://github.com/tektoncd/catalog/tree/main/task/grype/0.1)


and use them in the Build pipelines.

When the manifest for the pipeline and the pipelinerun are applied, the pipelinerun will automatically run the pipeline once. Use the following command to check if the status of the pipelinerun:

```
tkn pipelineruns logs  <name-of-the-pipelinerun> -n team-<team name>
```

If the Build is changed the pipelinerun will not be re-started. Use the following command to start the pipeline after a change:

```
tkn pipeline start <name-of-the-pipeline>  --use-pipelinerun <name-of-the-pipelinerun>  -n team-<team name>
```