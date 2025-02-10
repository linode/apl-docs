---
slug: expose-services
title: Publicly expose workloads
sidebar_label: Expose Services
---

When you have deployed your application using the Workloads feature, you will probably like to expose it publicly. In this lab we'll create a Service to publicly expose your application. When you create a Service, the Istio virtual service and ingress resource for your application will be created automatically.

## Create a Service

1. In the left menu panel under click `Services` then click on `Create Service`:

![expose services](../../img/create-svc.png)

2. Select the `blue` service of the workload created in the previous lab. The blue service will become available once the ArgoCD application is ready:

![expose services](../../img/create-svc-2.png)

3. Under `Exposure Ingress`, select `External` and use the default configuration:

![expose services](../../img/create-svc-3.png)

4. Click `Submit`.

You will see your service in the list of Services:

![expose services](../../img/create-svc-4.png)

Click on the URL and see the blue application publicly exposed.
