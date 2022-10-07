---
slug: /
title: About Otomi
sidebar_label: Introduction
tags: [about, philosophy]
---

Otomi is an open source self-hosted PaaS to run on top of any 
Kubernetes cluster and is placed in the CNCF landscape under the
[PaaS/Container Service](https://landscape.cncf.io/guide#platform--paas-container-service)
section.

## Otomi helps 

1. **Developers**
* To focus on their apps only
* Deploy containerized apps with a few click without writing any K8s YAML manifests
* Get access to logs and metrics of deployed apps
* Store charts and images in a private registry
* Build and run custom CI pipelines
* Enable declarative end-to-end app lifecycle management
* Configure ingress for apps with a single click
* Manage own secrets

2. **Platform & Operations teams**
* To setup and manage production-ready Kubernetes-based platforms
* Onboard development teams on shared clusters in a comprehensive multi-tenant setup
* Get all the required observability tools in an integrated way
* Ensure governance with security policies
* Implement zero-trust networking with east-west and north-south network control within K8s
* Provide self-service features to development teams
* Change the desired state of the platform based on configuration-as-code

3. **DevOps teams**
* To take full control and responsibility over the complete stack
* Get all the tools needed to build, deploy and run apps on K8s

## Read more

Check out the following sections to understand the reasoning and decisions made involving the development of Otomi:

- [Architecture](/about/architecture)
- [Roadmap](/about/roadmap)

<!---
For developer information please visit the repositories involved:

 [otomi-core](https://github.com/redkubes/otomi-core/): The monorepo containing all the apps and configuration
- [otomi-tasks](https://github.com/redkubes/otomi-tasks/): The tasks used by core to massage apps to adhere to the configuration
- [otomi-clients](https://github.com/redkubes/otomi-clients/): The openapi generator for the clients used by the tasks-->
