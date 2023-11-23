---
slug: introduction
title: Why Otomi
sidebar_label: Why Otomi
---

## The vision
Kubernetes has been called The Operating System of the Cloud. In our opinion, Kubernetes is only the Kernel of the Operating System of the Cloud. The Operating System (or Kubernetes-based Platform) is something you'll need to build yourself. And this is what organizations are now doing when using Kubernetes. All reinventing the wheel.

Building a Kubernetes-based platform requires a huge investment and requires skilled engineers. But why would you invest in building and maintaining a custom platform? Why can't you just install everyting you need to turn Kubernetes into a full platform, just like you can download a Linux distribution? 

This is what we indended when we created Otomi. Any infrastructure, any K8s, one install, all the tools you need in an integrated and automated way, easy self-service and everything as code.

## What is Otomi?

Otomi is a self-hosted PaaS and adds developer- and operations-centric tools, automation and self-service on top of Kubernetes offering a multi and hybrid platform experience out-of-the-box. Otomi is placed in the CNCF landscape under the [PaaS/Container Service](https://landscape.cncf.io/guide#platform--paas-container-service) section. Otomi attempts to connect many of the technologies found in the CNCF landscape in a way to provide direct value. No more re-inventing the wheel when building and maintaining your own Kubernetes based platform or bespoke stack.

### What is the difference between an IDP and a PaaS?

An Internal Developer Platform (IDP) consists of many different technologies, glued together to lowers cognitive load on developers without abstracting away context and underlying technologies. An IDP is always custom built.

A PaaS for Kubernetes also lowers cognitive load on developers, but abstracts away most of the underlying technologies. Unlike an IDP, a PaaS can be used almost instantly, just like downloading and using your favourite Linux Distribution. Organizations that use a PaaS instead of building an IDP can enjoy lower upfront costs and huge time savings.

### When to build an IDP or use a PaaS?

Because building an IDP requires a large upfront investment, it’s mostly suitable for large enterprises. For smaller organizations a PaaS can sometimes be far more efficient than building a custom IDP in-house.

## Otomi for developers
Otomi let's developers focus on their application, not on writing Kubernetes manifests! Kubernetes is great for running containers, but it's complex. Wouldn't it be awesome if you didn't need to worry about understanding Kubernetes objects and writing YAML manifests?

This is how Otomi helps developers:

### Removing the complexity
As a Developer, you want to focus on your code and don’t be bothered with Kubernetes internals. With Otomi, you can deploy your apps on Kubernetes without needing to understand or learn Kubernetes. Just build your image, push it to a registry in Otomi and use the Web Console to deploy your app in just a couple of minutes. Otomi makes Kubernetes easy!

### All the tools you need
Otomi provides developers with all the tools they need. After deploying your app you can directly see all the container logs, metrics, status, policy violations and vulnerabilities. Next to access to al kinds of dashboards, you will also get access to Harbor, Tekton and Argo CD. 

### Best practices
Otomi offers you the ability to immediately start deploying applications on Kubernetes and configure public exposure. This will give you a jump start to get apps running on Kubernetes. But in time you will probably learn more about Kubernetes and start trying out things yourself. Otomi does not force you to use the Web Console. You can just as easily download the KubeConfig for your team and create and deploy manifests yourself. But Otomi will always force you to adhere to the configured safeguards and best practices.

### Self-Serving
As a developer, you don’t like to go to the Ops team asking for help. Otomi provides full developer self-service. Developers can spin up new virtual environments, download pull secrets, create Kubernetes secrets, build images from source code, deploy workloads and configure public exposure. And all of these features are accessible through just one Web Console. Now you can deliver code completely autonomously.

## Otomi for Platform Teams
If you can’t scale beyond a handful of teams you're going to lose speed. Speed is everything to bring new products and applications to market. No one wants to slow down developers. Empower developers, ensure quality, compliance, and governance, avoid lock-in, and lower the operational burden. These are some of the challenges platform teams have to deal with and where Otomi can help out.

### Avoid Cloud Lock-In
Are you worried that you can’t adopt cloud-native technology without becoming completely reliant on one cloud provider? One way that organizations outsource management for Kubernetes is to use one of the cloud provider’s Kubernetes versions in conjunction with a variety of cloud provider native services. This is often faster than using vanilla Kubernetes and managing integrations and infrastructure in-house, but it also completely locks the organization into the cloud provider and often becomes very expensive.

This approach also takes away the flexibility to change cloud providers in the future while increasing the financial risks. With Otomi, you don’t have to lock yourself into any cloud provider or risk rapidly increasing cloud service bills in order to get the fastest possible platform to deploy containerized applications.

### Make Developers Self Serving
Free developers from worrying about the underlying platform setup while still enforcing standards and best practices so they can focus on delivering code. With Otomi, developers can be fully self-serving. They can spin up new namespaces, get access to all the tools they need, build images from source code, create secrets, deploy workloads, configure public exposure, add service monitors, and much more. And all of these features are accessible through just one web UI.

Platform administrators have access to all the platform applications. Team administrators can create team spaces for development teams and team members can create multiple namespaces within their team space(s).

### Lower The Operational Burden
Choosing the DIY platform engineering approach can be time-consuming and complex. On average, Platform teams need at least 6 months to build an initial setup. And the ongoing maintenance and hardening afterwards can become an operational nightmare. Otomi helps Platform teams to lower the operational burden by taking over the application management of everything running on top of Kubernetes, including the lifecycle management of all the integrated K8s applications.

This enables platform teams to focus on another very important aspect: Kubernetes cluster infrastructure management and cloud security. Now you have time to focus on other important aspects instead of building a custom (internal) developer platform solution.

### Prevent Kubernetes Cluster Sprawl
As companies look to further harness the power of cloud-native, they are adopting container technologies at rapid speed, increasing the number of clusters and workloads. As the number of Kubernetes clusters grows, this is creating increased work for Platform teams. When it comes to patching security vulnerabilities or upgrading clusters, teams are doing five times the amount of work.

With Otomi you can support (soft) multi-tenancy, allowing multiple development teams to work independently of each other on the same cluster, while sharing all the tools. Now you only have to deploy a single dev or staging cluster to support multiple development teams. This prevents you from Kubernetes cluster sprawl.