---
slug: console/settings/azure
title: Azure
---

The Azure settings section offers specific configuration options when running Otomi on a Kubernetes cluster in Azure. Note that this section will only be available when running on Azure (cloud=azure).

| Setting       | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| Appgw         | Select if Azure Application Gateway is used as an external Load Balancer. |
| Azure Monitor | Turn on Azure monitor to use Azure metrics in Grafana dashboards.         |
| Storage Types | Specify the Azure disk types used for storage classes in Otomi.           |

IMPORTANT NOTES:

Using an Azure Application Gateway is optional. In case an application gateway is used with a WAF, make sure that its on detection mode and not prevention, as this might deny traffic to your cluster, which can have consequences on the availability of services. For example Grafana relies heavily on queries inside the api request that might trigger OWASP rules.
