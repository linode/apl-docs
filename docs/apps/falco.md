---
slug: falco
title: Falco
sidebar_label: Falco
---

## About

Falco can be used for threat detection. 

Before activating Falco, please first check which [Driver](https://falco.org/docs/event-sources/kernel/) to see which driver to use:

- module

- ebpf (default)

- modern-bpf

If you know which driver should be used, activate Falco, go to the `Values`, add the `Driver` and submit changes. Now `Deploy Changes`.

When Falco is installed, a set of rules to `white-list` all known behaviour is added. These rules are added using the Raw Values.  