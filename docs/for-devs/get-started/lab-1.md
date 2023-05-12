---
slug: lab-1
title: Prerequisites for getting started
sidebar_label: Lab 1
---

Welcome to Otomi! If you are a developer and are going to use Otomi, this getting started guide is for you. In this first part we are going to make sure everything is ready to get started.

We assume the platform administrator has onboarded your team and you as a team member have received:

- The URL to access the Otomi web UI (Otomi Console)
- The login credentials

Also make sure to sign into Gitea:

- Open Gitea
- Click on `sign-in` in the top left
- Do not sign in with your username and password, but click on `Sign in with OpenID`

After signing in for the first time, the platform administrator can now provide you access to the Git repositories of the team in Gitea.

## Install required software

Make sure you have installed the following minimal software:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/), the Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters.

Optionally install:

- [Docker](https://docs.docker.com/get-docker/) or any other alternative ;-)
- [Helm](https://helm.sh/docs/intro/install/) for installing Helm charts
- [k9s](https://k9scli.io/) or [Lens](https://k8slens.dev/) to get a better UI to manage Kubernetes resources