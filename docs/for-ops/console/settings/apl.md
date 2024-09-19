---
slug: apl
title: Platform settings
sidebar_label: APL
---

## APL Settings

The APL settings section offers configuration options for APL and feature flags that influence the way APL behaves.

| Setting                | Description   |
| ---------------------- | ------------------------ |
| Admin password         | Default admin password for all APL apps. The default admin password can not be changed. |
| Additional Clusters    | A list of additional clusters to select in the APL Console. |
| Global pull secrets    | Add you Dockerhub pull secret. Will be connected to each "default" service account in all APL app namespaces. Handy for authenticating with DockerHub to avoid rate limiting. Also useful when pulling all APL images from a private repo. |
| Cloud ingress controller | Set this to true when using a cloud specific ingress controller. By default the Nginx Ingress Controller is used. |
| External DNS  | Set this to true when an external DNS zone is available to manage DNS records. (Expects required `dns:` fields to be set.) |
| External IdP | Set this to true when bringing your own external IDP such as Azure AD. (Expects required `oidc:` fields to be set.)  |
| Node Selector | When a label/value pair is added, all APL platform workloads will be scheduled on the nodes with this label/value pair |
| APL Version | The installed version of APL. Change to a new valid release to upgrade |