---
slug: tutorials/expose-service
title: Publicly expose an existing Kubernetes service with Otomi
sidebar_label: Expose a K8s service
---

In his tutorial, we are going to create an Otomi Service to publicly expose the Kubernetes Service we created in the previous tutorial.

## Publicly expose the created service

- In the top bar in Otomi Console, select team demo 
- In the left panel under the Team demo, click `Services` then click on `Create Service`
- Fill in the form with these values: 

1. Name: hello (the name of the Kubernetes Service we created in the previous tutorial)
2. Exposure: Public 
3. Service type: Existing Kubernetes service

- Click on `Submit` 
- Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit)

Deploying changes in Otomi usually takes around 3 to 4 minutes.

Go to https://hello.team-demo.your-domain.com/ to see the app.