---
slug: known-issues
title: Known Issues
sidebar_label: Overview
---

Sometimes we notice minor issues with desired state of pods after deployment. Those usually go away after some time, usually when disk related activity is finished. The time it takes to (un)mount disks differs quite a lot between cloud provider. Google is the fastest, and Azure the slowest (and most problematic, as [AKS does not support auto-resizing](https://github.com/Azure/AKS/issues/1477)). We will not go into k8s nor cloud specifics here, but we thought it important to make you aware about this as most "issues" become non-issues after some minutes.

## Suggested debug tools

We recommend using [k9s](https://k9scli.io) or [Lens](https://k8slens.dev) for debugging and navigating resources.

## Issues with otomi cli

Otomi uses a lot of tools under the hood, and we have a [dedicated section for the Otomi CLI](known-issues/cli) to help you drill down into related issues.

## Core apps issues

Otomi configures its suite of applications to work together. It expects certain conditions and dependencies to be in place. Under certain circumstances you might see problems. So far we have documented known issues for the following apps:

- [Harbor](known-issues/harbor)
