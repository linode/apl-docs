---
slug: /
title: What is Otomi
sidebar_label: Introduction
---

Otomi offers an out-of-the-box enterprise-grade container/internal developer platform (on top of upstream/vanilla Kubernetes) to increases developer efficiency, reduce complexity and avoid technical debt. Otomi integrates upstream Kubernetes with proven open source applications and add-ons. It is a single deployable package with curated industry proven applications, and policies for better governance and security. With carefully crafted sane defaults at every step, it minimizes configuration effort and time to market. Otomi is completely open source, allowing customization but also extensibility. Incorporating open source standards and best practices, it aims to bring new features and stability with every iteration. Get maturity and speed while still supporting customization if desired.

This documentation is intended to provide technical, operational and background information for Otomi.

Please read the following sections to understand the reasoning and decisions made involving the development of Otomi:

- [Vision](vision)
- [Development journey](journey)
- [Architecture](architecture)
- [Roadmap](roadmap)

For developer information please visit the repositories involved:

- [otomi-core](https://github.com/redkubes/otomi-core/): The monorepo containing all the apps and configuration
- [otomi-tasks](https://github.com/redkubes/otomi-tasks/): The tasks used by core to massage apps to adhere to the configuration
- [otomi-clients](https://github.com/redkubes/otomi-clients/): The openapi generator for the clients used by the tasks
