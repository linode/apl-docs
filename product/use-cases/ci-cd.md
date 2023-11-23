---
slug: ci-cd
title: CI/CD
sidebar_label: CI/CD
---

## Introduction

Otomi adds developer- and operations-centric tools, automation and self-service on top of Kubernetes. The integrated tools mainly focus on Continuous Deployment  (to automatically deploy code changes after the build stage) and on all runtime controls. When using Otomi, we advice to setup a seprate CI environment (using specialized CI tools like GitHub Actions or CircleCI) where artifacts (images) are build and then pushed to an image registry (like Harbor provided by Otomi). But with integrated tools like Gitea and Tekton, Otomi can in some cases also be used for Continuous Integration (CI). This can be especially interesting in greenfield environments (where there is (not yet) a full CI toolset implemented) or in isolated environments (where developers don't have access to cloud CI services).

## CI with Otomi

Users on the platform can get access to an organization in Gitea. See [here](https://docs.gitea.io/en-us/comparison/) for a full list of all Gitea features and a comparison with other self-hosted Git solutions.

Otomi also includes Tekton pipelines. Tekton is used for the build feature in Otomi. The build feature can be used to build images from source using Kaniko (when there is a Docker file), or Buildpacks. To use the build feature, source code needs to be in a private Gitea repo, or in a public git repo. Other private repo's can also be replicated to Gitea.

## CD with Otomi

The most common workflow when using Otomi starts when an artifact (image) has been build. Using the workloads feature in Otomi, images can be deployed using a Helm chart from the Developer Catalog.

Otomi uses the `otomi/charts` repository in Gitea that contains a library of curated Helm charts that are offered as a quick start. The quick start Helm charts can be adjusted or replaced by your custom (Golden path) Helm charts.

When a workload specification (a combination of a Helm chart with custom values) has been created, Otomi automatically creates an Argo CD applicationset that deploys the configured chart. A workload can also be configured with the [Argo CD Image Updater](https://argocd-image-updater.readthedocs.io/en/stable/) that can check for new versions of images that are deployed with by the workload and then automatically update to the latest allowed version. The Argo CD Image Updater is only supported in combination with Otomi workloads and images stored in Harbor.
