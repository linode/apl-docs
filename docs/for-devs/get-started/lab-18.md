---
slug: lab-18
title: Publicly expose your application
sidebar_label: Expose services
---

When you have deployed your application using the Workloads feature, you will probably like to expose it publicly. In this lab we'll create a Service in Otomi to expose your application publicly. When you create a Service, Otomi will create the Istio virtual service and configure ingress for your application.

## Create a Service

- In the left menu panel under click `Services` then click on `Create Service`

![expose services](../../img/create-svc.png)

- Select the `blue` service of the Workload we created in the previous laby:

![expose services](../../img/create-svc-2.png)

- Under `Exposure Ingress`, select `Ingress` and use the default configuration

![expose services](../../img/create-svc-3.png)

- Click `Submit`
- Click `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit).

Deploying changes in Otomi usually takes just a couple of minutes depending on the amount of resources available on your cluster. You will see your service in the list of Services. Click on the URL and see your application.