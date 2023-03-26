---
slug: lab-1
title: Prerequisites for getting started
sidebar_label: Lab 1
---

Welcome to Otomi! If you are a developer and are going to use Otomi Platform, this getting started guide is for you. In this first part we are going to make sure everything is ready to get started.

We assume the platform administrator has onboarded your team and you as a team member have received:

- The URL to access the Otomi web UI (Otomi Console)
- The login credentials

:::info
Normally you will log in via a username and a password of your organization's Identity Provider, such as Azure Active Directory.
:::

## Install required software

Make sure you have installed the following minimal software:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/), the Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters.

Optionally install:

- [Docker](https://docs.docker.com/get-docker/) or any other alternative ;-)
- [Helm](https://helm.sh/docs/intro/install/) for installing Helm charts
- [k9s](https://k9scli.io/) or [Lens](https://k8slens.dev/) to get a better UI to manage Kubernetes resources