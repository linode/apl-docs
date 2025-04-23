---
slug: services
title: Team Services
sidebar_label: Services
---

The Services self-service feature can be used to publicly expose ClusterIP services created by Workloads.

## Services (all)

All Services of the Team are listed here.

| Column        | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| Name          | The name of the exposed ClusterIP service                                             |
| Ingress class | The ingress class configured. This is the ingress controller that exposes the service |
| URL           | The URL of the exposed service                                                        |
| Status        | The status of the service                                                             |

## Create a Service

1. Click `CREATE SERVICE`

2. Select a ClusterIP service from the drop-down list. Only ClusterIP services available in the Team are listed here.

3. Optionally: If the ClusterIP is exposing multiple ports, select the port to use.

4. Optionally: Click [Advanced Settings](#advanced-settings)

5. Click `Create Service`

## Advanced settings

### URL paths

Add one or more URL paths you want to allow access to. When at least one URL path is added, all other paths that are not explicitly added here will result in a page not found (HTTP 404) error.

### Canonical Name (CNAME)

Use a Canonical Name (CNAME) that points to the Service domain name. This feature can also be used together with the TLS Passthrough option. Check the [Configure a CNAME lab](../../get-started/labs/configure-cname.md) to learn how to configure a CNAME.

### Enable Traffic Management

The traffic management option allows to split traffic between multiple deployed versions of the same app (blue-green, canary). Note that the traffic control can only be used when there are 2 versions deployed of an app deployed and exposed using the same ClusterIP service.

To enable Enable Traffic Management:

1. Select `Enable Traffic Management`.

2. Fill in the weight for the 2 versions. A 50/50 weight can be used for blue/green. A 90/10 weight can be used for canary.

### HTTP Response Headers

Add HTTP Response headers that will be set on the exposed service.