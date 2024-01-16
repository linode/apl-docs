---
slug: edge
title: Otomi at the edge
sidebar_label: Edge
---

## Introduction

Edge computing is an approach where you run applications as close as possible to its data sources or end users. One of the benefits is improved response times. 

However, managing edge applications using Kubernetes comes with challenges, like:

- Deploy and update applications consistently accross multiple clusters
- Manage the run-time specifications for the applications like ingress, certificates, DNS, network policies, etc.
- Lifecycle management of all supporting tools
- Using managed Kubernetes services in different clouds/infrastructures

## How Otomi supports edge computing using Kubernetes

One of the benefits of Otomi is that everything managed by Otomi can be specified in a single values file. This enables you to not only define the applications workloads that need to be running on the cluster, but also all the required tools and configuration to support and secure the workloads.

Let's explain this with an example:

Suppose you have 2 application workloads that you would like to run on multiple Kubernetes clusters in multiple geographic regions, using different public cloud providers (AWS, Azure, GCP) and different Kubernetes versions (1.22 and 1.23). Next to the 2 workloads, you also would like to use Istio for mTLS, cert-manager for certificates, ingress/egress network policies for isolation and HTTP response headers. Because you can not afford using L7 load balancers with WAF features in the different clouds, you would like to implement Nginx ingress with Modsecurity and OWASP filtering. The following picture shows the desired situation:

![edge](../img/edge.png)

Read [this](/docs/for-ops/how-to/core-only) how-to to learn more about installing Otomi at the edge.




