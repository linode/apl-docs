---
slug: lab-1
title: Prerequisites for getting started
sidebar_label: Prerequisites
---

Welcome to Otomi! If you would like to explore Otomi, this getting started guide is for you.

## Prerequisites

We assume you (or the platform administrator) have:

1. Installed Otomi with DNS configured

2. Activated the following applications:

- Harbor
- ArgoCD
- Prometheus
- Loki
- Grafana
- Trivy Operator
- Gatekeeper (with option `Disable validating webhook` set to true)

For the [Use OpenTelemery](lab-27) Lab, the Tempo app needs to be enabled together with tracing in the `Istio` and `Nginx Ingress` apps.

3. Created a team called `demo` with `Managed prometheus and alert manager` enabled
4. [Created an account](/docs/apps/keycloak#create-a-user-in-keycloak) and added your user to the team group in Keycloak
5. Provided you with the following information:

- The URL to access the Otomi web UI (Otomi Console)
- Your login credentials

When you have received the URL of the web UI and have a username/password, then it's time to sign-in

## Sign in to the Console

- Go to the provided URL. The URL will look like this: https://otomi.yourdomain.com
- Sign in with the provided username/password or your existing corporate AD account

After sign in, you will see this page:

![Team apps](../../img/team-apps.png)