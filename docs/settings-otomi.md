---
slug: console/settings/otomi
title: Otomi
---

The Otomi settings section offers configuration options for Otomi and feature flags that influence the way Otomi behaves.

| Setting | Description |
| --- | --- |
| Admin password | Default admin password for all Otomi apps. Handy for quick rotation ;) |
| Additional Clusters | A list of additional clusters to select in the Otomi console. |
| External load balancer | Set this to true when an external load balancer exists (Azure AppGW, Google Apigee) or needs to be started (AWS ALB). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion. |
| Home monitored | When this is turned on alerts will also be sent to the endpoints configured in the "Home" settings. |
| Managed masters | Whether masters are managed and not under control. Set this to false when onprem. |
| Multi-tenancy | Will separate team metrics and logs. Disabling this lets everybody be admin and see everything. Will still use team-\* namespaces for segmentation of services, but not use authorization of users. |
| Pull secret | A pull secret that gives access to the Otomi API. Needs and enterprise license. |
