---
slug: intro
title: Otomi Container Platform
sidebar_label: Introduction
---

Otomi Container Platform offers an out-of-the-box enterprise container management platform (on top of Kubernetes) that increases developer efficiency and focuses on results rather than creating complexity. Otomi is a curated stack that integrates upstream Kubernetes with proven open source components for automated cluster operations and application lifecycle management to create a unified enterprise container management platform. Thus offering organizations maturity and speed while still supporting customization if desired. A curated list of apps like this offers a lot of benefits like governance, security and most of all speed in delivering added value to your business.

This documentation is intended to provide technical, operational and background information for Otomi Container Platform.

Please read the following sections to understand the reasoning and decisions made involving the development of Otomi:

- [Vision](vision)
- [Development journey](development-journey)
- [Design & Architecture](design-and-architecture)
- [Roadmap](roadmap)

For developer information please visit the repositories involved:

- [otomi-core](https://github.com/redkubes/otomi-core/): The monorepo containing all the apps and configuration.
- [otomi-tasks](https://github.com/redkubes/otomi-tasks/): The tasks used by core to massage apps to adhere to the configuration.
- [otomi-clients](https://github.com/redkubes/otomi-clients/): The openapi generator for the clients used by the tasks.
