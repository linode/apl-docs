---
slug: tutorial-5
title: Create a Workload
sidebar_label: Create a Workload
---

In his tutorial, we are going to create a Workload in Otomi.

- In the top bar in Otomi Console, select `team: demo`
- In the left menu panel under `Team demo`, click `Workloads` then click on `Create Workload`
- Fill in the form with these values:

1. Name: hello-world
2. URL of the Git repo: https://github.com/redkubes/nodejs-helloworld.git
3. Path: chart/hello-world

Click `submit`. You will now be asked to provide values for the chart. Click `Edit` and add the following value:

```
replicaCount: 2
```

- Click `Submit`
- Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit)

The new workload will now be in the list of workloads. 

- Click on `Application`

What do you see?

Go back to Otomi Console to edit the values of the workload. Set the replicacount to `1`.

What do you see happening in the ArgoCD app?
