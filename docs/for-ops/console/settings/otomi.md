---
slug: otomi
title: Platform settings
sidebar_label: Otomi
---

## Otomi

The Otomi settings section offers configuration options for Otomi and feature flags that influence the way Otomi behaves.

| Setting                | Description   |
| ---------------------- | ------------------------ |
| Admin password         | Default admin password for all Otomi apps. The default admin password can not be changed. |
| Additional Clusters    | A list of additional clusters to select in the Otomi console. |
| Global pull secrets    | Add you Dockerhub pull secret. Will be connected to each "default" service account in all otomi app namespaces. Handy for authenticating with DockerHub to avoid rate limiting. Also useful when pulling all otomi images from a private repo. |
| Cloud ingress controller | Set this to true when using a cloud specific ingress controller. By default the Nginx Ingress Controller is used. |
| External DNS  | Set this to true when an external DNS zone is available to manage DNS records. (Expects required `dns:` fields to be set.) |
| External IdP | Set this to true when bringing your own external IDP such as Azure AD. (Expects required `oidc:` fields to be set.)  |
| Remote monitoring | When this is turned on alerts will also be sent to the endpoints configured in the "Co-monitoring" settings. |
| Multi-tenancy          | When turned on, team metrics and logs will be separated. Disabling this lets everybody be admin and see everything. Will still use team-\* namespaces for segmentation and network isolation of services. |
| Node Selector | When a label/value pair is added, all Otomi platform workloads will be scheduled on the nodes with this label/value pair |
| Otomi Version | The installed version of Otomi. Change to a new valid release to upgrade |