---
slug: general
title: Platform settings
sidebar_label: General
---

## General Settings

The general settings section offers configuration options for platform and feature flags that influence the way the platform behaves.

| Setting                | Description   |
| ---------------------- | ------------------------ |
| Admin password         | The `root` password of the platform. |
| Additional Clusters    | A list of additional platform instances to select in the Console. |
| Global pull secrets    | Add you Dockerhub pull secret. Will be connected to each "default" service account in all platform namespaces. Handy for authenticating with DockerHub to avoid rate limiting. |
| Cloud ingress controller | Set this to true when using a cloud specific ingress controller. By default the Nginx Ingress Controller is used. |
| External DNS  | Set this to true when an external DNS zone is available to manage DNS records. (Expects required `dns:` fields to be set.) |
| External IdP | Set this to true when bringing your own external IDP such as Azure AD. (Expects required `oidc:` fields to be set.)  |
| Node Selector | When a label/value pair is added, all platform workloads will be scheduled on the nodes with this label/value pair |
| Version | The installed version. Change to a new valid release to upgrade. see the [core repo](https://github.com/linode/apl-core) for all available versions |