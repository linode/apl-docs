---
slug: /
title: Introduction
sidebar_label: Introduction
---

Otomi is an open source self-hosted PaaS to run on top of any Kubernetes cluster and is placed in the CNCF landscape under the [PaaS/Container Service](https://landscape.cncf.io/guide#platform--paas-container-service) section. Otomi attempts to connect many of the technologies found in the CNCF landscape in a way to provide direct value. Otomi can be installed on any Kubernetes cluster, offering a multi and hybrid platform experience out-of-the-box. No more re-inventing the wheel when building and maintaining your own Kubernetes based (internal developer) platform or bespoke stack.

## Goals

**Developers** - To focus on their apps only

- Deploy containerized apps without writing any YAML manifests
- Get a standardized set of observability tools
- Store charts and images in a private registry
- Build and run custom CI pipelines
- Enable declarative end-to-end app lifecycle management
- Configure ingress for apps with a single click
- Manage secrets

**Platform & Operations teams** - To setup and manage production-ready Kubernetes-based platforms

- Skip the Day-0 and Day-1 effort and minimize Day-2 operations
- Avoid creating and maintaining multiple bespoke Kubernetes stacks
- Onboard development teams on shared clusters in a comprehensive multi-tenant setup
- Get all the required observability tools in an integrated way
- Ensure governance with security policies
- Implement zero-trust networking with east-west and north-south network control within K8s
- Provide self-service features to development teams
- Change the desired state of the platform based on configuration-as-code
- Support multi and hybrid cloud use cases
- Offer a standardized set of tools to all development teams

**DevOps teams** - To take full control and responsibility over the complete stack

- Get all the tools needed to build, deploy, run and manage apps on Kubernetes


<!---
For developer information please visit the repositories involved:

 [otomi-core](https://github.com/redkubes/otomi-core/): The monorepo containing all the apps and configuration
- [otomi-tasks](https://github.com/redkubes/otomi-tasks/): The tasks used by core to massage apps to adhere to the configuration
- [otomi-clients](https://github.com/redkubes/otomi-clients/): The openapi generator for the clients used by the tasks-->
