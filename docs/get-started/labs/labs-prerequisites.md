---
slug: lab-prerequisites
title: Prerequisites for getting started
sidebar_label: Prerequisites
---

Welcome to APL! If you would like to explore APL, this getting started guide is for you.

## Prerequisites

We assume you (or the platform administrator) have:

1. Installed APL with DNS configured. See [here](get-started/installation/overview.md).

2. Activated the following applications:

- Harbor
- Prometheus
- Loki
- Grafana
- Trivy Operator

For the [Using OpenTelemery](use-otel.md) Lab, the Tempo app needs to be enabled together with tracing in the `Istio` and `Nginx Ingress` apps.

3. Created a team called `labs` with `Grafana`, `Prometheus` and `Alertmanager` activated.

4. Created a user account and added the account to the `labs` team group in Keycloak. In the labs we'll be using the user `labs-user`.

5. The following information:

- The URL to access the APL web UI (APL Console)
- Your login credentials

When you have received the URL of the APL Console and have a username/password, then it's time to sign-in.

## Sign in to the Console

- Go to the provided URL. The URL will look like this: https://console.yourdomain.com
- Sign in with the provided username/password or your existing corporate AD account

After sign in, you will see this page:

![Team apps](../../img/team-dashboard.png)