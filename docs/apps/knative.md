---
slug: apps/knative
title: Working with Knative
sidebar_label: Knative
---

Knative may be installed by Otomi to deliver Container-as-a-Service (CaaS) functionality with scale-to-zero possibility. It can be compared to Functions-as-a-service (FaaS) but is container oriented, and takes only one manifest to configure an autoscaling service based on a container image of choice.

Otomi offers an on-the-fly Knative Service deployment when configuring a service, making it very easy to deploy containerized services without the hassle of providing all the supporting resources involved with Helm charts.

Otomi uses Istio Virtual Services under the hood to route traffic coming in for a public domain to its backing Knative Service, allowing to set a custom domain.
