---
slug: sre/
title: SRE Overview
sidebar_label: Overview
---

Otomi is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, Otomi offers all required parts in a single package. Otomi can be seen as any other Kubernetes application or add-on, with the difference that Otomi is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications.

The user controls the configuration of all objects installed by Otomi, based on the [values schema](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) provided by Otomi, and the user controls the full configuration of all Kubernetes objects deployed.

For SRE's we have created a couple of guidelines:

- [Daily routine](/sre/daily)
- [Troubleshooting](sre/troubleshooting)
