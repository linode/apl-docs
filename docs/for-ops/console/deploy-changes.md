---
slug: deploy-changes
title: Deploy changes
---

When a change has been made, by pressing `Submit`, the `Deploy Changes` button will light up to deploy the changes you have made in the Console. This will create a commit of the changes to the values repository in Gitea and trigger the Drone pipeline run to generate the new `Values` used for all `Argo CD` applications.
