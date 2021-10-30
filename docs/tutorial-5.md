---
slug: tutorials/expose-ksvc
title: Publicly expose an existing Knative service with Otomi
sidebar_label: Expose a Knative service
---

In his tutorial, we are going to create an Otomi Service to publicly expose the Knative service we created in the previous tutorial.

## Publicly expose the knative service

- In the top bar in Otomi Console, select team demo 
- In the left panel under the Team demo, click `Services` then click on `Create Service`
- Fill in the form with these values: 

1. Name: hello-ksvc (the name of the Knative Service created in the previous tutorial)
2. Exposure: Public 
3. Service type: Existing Knative service

- Click on `Submit` 
- Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit)

Deploying changes in Otomi usually takes around 3 to 4 minutes.

Go to https://hello-ksvc.team-demo.your-domain.com/ to see the app.