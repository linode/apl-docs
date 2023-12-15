---
slug: falco
title: Falco
sidebar_label: Falco
---

Falco can be used for thread detection. Before activating Falco, please first check which [Driver](https://falco.org/docs/event-sources/kernel/) to use. If you know which driver should be selected, activate Falco, go to the `Values`, select the `Driver` and submit changes. No `Deploy Changes`

## Configuration values

### Driver settings

Select the driver to use:

- module
- ebpf (default)
- modern-bpf

### Resources

Adjust default provided resource requests and limits for Falco and Falco Exporter.

## Raw values

When Falco is installed, Otomi will add a set of rules to `white-list` all known behaviour. These rules are added using the Raw Values. 