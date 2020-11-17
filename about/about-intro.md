---
slug: intro
title: Otomi Container Platform
sidebar_label: Introduction
---

Otomi Container Platform offers an out-of-the-box enterprise container management platform (on top of Kubernetes) that increases developer efficiency and reduces complexity. It is a turnkey cloud native solution that integrates upstream Kubernetes with proven open source components. It is a single deployable package with curated industry proven applications and policies for better governance and security. With carefully crafted sane defaults at every step, it minimizes configuration effort and time to market. It strives to automate most (if not all) of your cluster operations, and includes application lifecycle management at it's core. Day 2 operations can start at day 1 and can focus mostly on optimization and streamlining of performance. It is open source and transparent, allowing customization but also extensibility. Incorporating Open Source standards and best practices, it aims to bring new features and stability with every iteration. Otomi offers maturity and speed while still supporting customization if desired.

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
