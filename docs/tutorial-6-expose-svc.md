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
2. Exposure: Public
3. Service type: Choose one of `Existing Kubernetes service` or `Existing Knative service`, depending on the previous step you just took.

- Click on `Submit`
- Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit)

Deploying changes in Otomi usually takes around 3 to 4 minutes.

Go to https://hello.team-demo.your-domain.com/ to see the app.
