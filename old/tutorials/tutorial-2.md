---
slug: tutorial-2
title: Creating teams
sidebar_label: Creating teams
---

In this tutorial, we are going to create a Team in Otomi. Teams in Otomi serve the following purpose:

- Creating a namespace on the cluster, configuring RBAC and setting default quota's

- Provide self-service options for team members in Otomi Console

- Isolate traffic between teams

- Optionally: Separate team metrics and logs. When multi-tenancy is not enabled (default), metrics and logs are not separated (providing all users the admin role to see cluster wide metrics and logs)

:::info
The multi-tenancy option in Otomi is not enabled by default. Team metrics and logs will be separated per team when multi-tenancy is enabled. When multi-tenancy is disabled this effectively gives all users the admin role for logs and metrics, including metrics and logs of all platform services. For this lab, we will **not enable multi-tenancy**. To see if multi-tenancy is enabled, go to `Settings` under the `Platform` section in the side menu and then select `Otomi`. At the bottom of the page you will see the flag `Multi-tenancy`.
:::

Let's create a Team!

## Instructions

1. In the side menu, click on `Teams` under the `Platform` section

2. Click on `Create Team`

3. Provide a name for the team. For the purpose of these tutorials we recommend using `demo`

4. Under NetworkPolicy, disable `Network policies` and `Egress control` (we will activate this later on)

5. Leave all other settings default

6. Click on `submit`

7. Click on `Deploy Changes` (this will become active after in the side menu after you submit a change)

8. Select your team in the top bar. Here you can select your context (cluster and team)

9. In the side menu, the team section will now become visible