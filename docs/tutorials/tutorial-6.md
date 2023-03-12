---
slug: tutorial-6
title: Create a Service
sidebar_label: Create a Service
---

In his tutorial, we are going to create a Service in Otomi to publicly expose the ClusterIP service of the Workload we deployed in the previous tutorial.

- In the top bar in Otomi Console, select `team: demo`
- In the left menu panel under `Team demo`, click `Services` then click on `Create Service`
- Fill in the form with these values:

1. Name: hello-world (the name of the ClusterIP service we deployed in the previous tutorial)
2. Exposure: Public

- Click on `Submit`
- Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit)

Deploying changes in Otomi usually takes just a couple of minutes depending on the amount of resources available on your cluster.

Go to `https://hello-world.team-demo.<your-ip>.nip.io/` to see the app.
