---
slug: /
title: What is Otomi
sidebar_label: Introduction
---

Otomi is an open-source cloud-agnostic platform to run on top of Kubernetes to securely deploy, run and manage applications with a desktop-like user interface. Otomi is free, easy to install, comes with an intuitive desktop-like UI and ready to use pre-configured built-in applications to offer an out-of-the-box experience. Just like you would expect from your favorite Linux distribution. After installing Otomi on Kubernetes, you can log in and immediately start deploying and use all the built-in applications.

Otomi offers an Operating System experience, using Kubernetes as it kernel. Use Otomi to create your enterprise-grade container platform or internal developer platform to increase developer efficiency, reduce complexity and avoid technical debt. Otomi integrates upstream Kubernetes with proven open source applications and add-ons. It is a single deployable package with curated industry proven applications and policies for better governance and security. With carefully crafted sane defaults at every step, it minimizes configuration effort and time to market. Otomi is completely open source, allowing customization but also extensibility. Incorporating open source standards and best practices, it aims to bring new features and stability with every iteration. Get maturity and speed while still supporting customization if desired.

This documentation is intended to provide technical, operational and background information for Otomi.

Please read the following sections to understand the reasoning and decisions made involving the development of Otomi:

- [Vision](/about/vision)
- [Development journey](/about/journey)
- [Architecture](/about/architecture)
- [Roadmap](/about/roadmap)

For developer information please visit the repositories involved:

- [otomi-core](https://github.com/redkubes/otomi-core/): The monorepo containing all the apps and configuration
- [otomi-tasks](https://github.com/redkubes/otomi-tasks/): The tasks used by core to massage apps to adhere to the configuration
- [otomi-clients](https://github.com/redkubes/otomi-clients/): The openapi generator for the clients used by the tasks
