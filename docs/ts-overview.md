---
slug: troubleshooting
title: Troubleshooting Overview
sidebar_label: Overview
---

Sometimes we notice minor issues with desired state of pods after deployment. Those usually go away after some time, usually when disk related activity is finished. The time it takes to (un)mount disks differs quite a lot between cloud provider. Google is the fastest, and Azure the slowest (and most problematic, as [AKS does not support auto-resizing](https://github.com/Azure/AKS/issues/1477)). We will not go into k8s nor cloud specifics here, but we thought it important to make you aware about this as most "issues" become non-issues after some minutes.

Let's focus instead on the tooling and applications we have chosen for our platform. Make sure to load the aliases required to perform documented solutions:

```bash
. bin/aliases
```

## Suggested debug tools

We recommend using [k9s](https://k9scli.io) or [Lens](https://k8slens.dev) for debugging and navigating resources.

## Issues with otomi cli

Otomi uses a lot of tools under the hood, and we have [dedicated troubleshooting documentation for the Otomi CLI](troubleshooting/cli) to help you drill down into related issues.

## Core apps issues

Otomi configures its suite of applications to work together. It expects certain conditions and dependencies to be in place. Under certain circumstances you might see problems. So far we have documented troubleshooting steps for the following apps:

- [Harbor](troubleshooting/harbor)
