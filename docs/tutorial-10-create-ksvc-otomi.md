---
slug: tutorials/create-ksvc-otomi
title: Create and expose a Knative service with Otomi
sidebar_label: Knative with Otomi
---

In his tutorial, we are going to create a Knative service with Otomi Console and publicly expose it.

- Go to the Apps section under Platform in the side menu and Drag and Drop Knative from the Disabled apps to the Enabled apps and Deploy changes
- In the top bar in Otomi Console, select team demo
- In the side menu under the Team demo, click `Services` then click on `Create Service`
- Fill in the form with these values:

1. Name: hello-otomi
2. Service type: New Knative service
3. In the `Security context` block, fill in `1001` in the `Run As User` field
4. In the `Container image` block, fill in the name of the image you previously pushed to Harbor in the `Repository` field and fill in `latest` in the `Tag` field
5. In the `Container resources` block, fill in the `Limits` and `Requests` (use the provided values: 50m and 64Mi)
6. Exposure: Public
7. Click on `Submit`
8. Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit)

Deploying changes in Otomi usually takes just a couple of minutes.

Go to `https://hello-otomi.team-demo.<your-ip>.nip.io/` to see the app.
