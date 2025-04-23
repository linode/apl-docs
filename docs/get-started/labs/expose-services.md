---
slug: expose-services
title: Publicly expose workloads
sidebar_label: Expose Services
---

When you have deployed your application using the Workloads feature, you will probably like to expose it publicly. In this lab we'll create a Service to publicly expose your application. When you create a Service, the Istio virtual service and ingress resource for your application will be created automatically by App Platform.

## Create a Service

1. In the left menu click `Services` then click on `CREATE SERVICE`.

2. Select the `blue` service from the `Service Name` drop-down list:

![expose services](../../img/create-svc-2.png)

4. Click `Create Service`.

You will see your service in the list of Services:

![expose services](../../img/create-svc-4.png)

Click on the URL and see the blue application publicly exposed.
