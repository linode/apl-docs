---
slug: lab-1
title: Prerequisites for getting started
sidebar_label: Prerequisites
---

Welcome to Otomi! If you are a developer and are going to use Otomi, this getting started guide is for you. In this first part we are going to make sure everything is ready to get started.

We assume the platform administrator has:

1. Created a team (called `demo`) on the platform
2. Created an account and added you as a team member to the team-demo group in KeyCloak
3. Provided you with the following information:

- The URL to access the Otomi web UI (Otomi Console)
- Your login credentials

4. Has activated the following applications:

- Harbor
- ArgoCD
- Prometheus
- Loki
- Grafana
- Trivy Operator
- Gatekeeper (with option `Disable validating webhook` set to true)

After receiving the login credentials, make sure to sign-in to Gitea for the first time:

- Open Gitea
- Click on `sign-in` in the top left
- Do not sign in with your username and password, but click on `Sign in with OpenID`
- You will now have access to Gitea and are able to create repositories
