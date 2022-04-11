---
slug: tutorials/expose-service
title: Publicly expose an existing service with Otomi
sidebar_label: Expose a service
---

In his tutorial, we are going to publicly expose a service we created in one of the previous tutorials.

First navigate to the right form:

- In the top bar in Otomi Console, select `team: demo`
- In the left menu panel under `Team demo`, click `Services` then click on `Create Service`
- Fill in the form with these values:

1. Name: hello (the name of the service we created in the previous tutorials)
2. Service type: Choose one of `Existing Kubernetes service` or `Existing Knative service`, depending on the service/type you would like to expose
3. Exposure: Public


- Click on `Submit`
- Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit)

Deploying changes in Otomi usually takes just a couple of minutes depending on the amount of resources available on your cluster.

Go to `https://hello.team-demo.<your-ip>.nip.io/` to see the app.
