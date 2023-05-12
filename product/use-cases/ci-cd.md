---
slug: ci-cd
title: CI/CD
sidebar_label: CI/CD
---

## Introduction

Otomi adds developer- and operations-centric tools, automation and self-service on top of Kubernetes. The integrated tools mainly focus on Continuous Deployment  (to automatically deploy code changes after the build stage) and on all runtime controls. When using Otomi, we advice to setup a seprate CI environment (using specialized CI tools like GitHub Actions or CircleCI) where artifacts (images) are build and then pushed to an image registry (like Harbor provided by Otomi). But with integrated tools like Gitea and Drone, Otomi can in some cases also be used for Continuous Integration (CI). This can be especially interesting in greenfield environments (where there is (not yet) a full CI toolset implemented) or in isolated environments (where developers don't have access to cloud CI services).

## CI with Otomi

Users on the platform can get access to an organization in Gitea. See [here](https://docs.gitea.io/en-us/comparison/) for a full list of all Gitea features and a comparison with other self-hosted Git solutions. By adding a Drone pipeline to a Git repository, users can take advantage of Drone to automate steps in the software delivery process, such as initiating code builds, running automated tests, and pushing images to a private image registry in harbor.

## CD with Otomi

The most common workflow when using Otomi starts when an artifact (image) has been build. Using the workloads feature in Otomi, images can be used in 2 supported types of workloads:

1. A Kubernetes [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), combined with an [HPA](https://kubernetes.io/docs/tasks/
2. (if Knative enabled) A [Knative service](https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#service)

Otomi uses the `otomi-charts` repository that contains a library of curated Helm charts that are used to deploy the supported workload types. When a workload specification (a combination of a Helm chart with custom values) has been created, Otomi automatically creates an ArgoCD application that deploys the configured chart. A workload can also be configured with the [Argo CD Image Updater](https://argocd-image-updater.readthedocs.io/en/stable/) that can check for new versions of the container images that are deployed with the workload and automatically update the workload to the latest allowed version.
