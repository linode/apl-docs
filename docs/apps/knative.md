---
slug: knative
title: Knative
sidebar_label: Knative
---

## Introduction

Knative can be activated in Otomi to deliver Container-as-a-Service (CaaS) functionality with scale-to-zero possibility. It can be compared to Functions-as-a-service (FaaS) but is container oriented, and takes only one manifest to configure an autoscaling service based on a container image of choice.

## Configuration

Otomi offers an on-the-fly Knative Service deployment when configuring a service, making it very easy to deploy containerized services without the hassle of providing all the supporting resources involved with Helm charts.

## Automation


## Integrations

Otomi uses Istio Virtual Services under the hood to route traffic coming in for a public domain to its backing Knative Service, allowing to set a custom domain.

## Instructions