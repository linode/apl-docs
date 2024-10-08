---
slug: lab-prerequisites
title: Lab Prerequisites
sidebar_label: Lab Prerequisites
---

## Prerequisites

1. DNS is configured. See [here](get-started/installation/overview.md).

2. The following applications are enabled:

- Harbor
- Prometheus
- Loki
- Grafana
- Trivy Operator

For the [Using OpenTelemery](use-otel.md) Lab, the Tempo app needs to be enabled together with tracing configured in the `Istio` and `Nginx Ingress` apps.

3. A team called `labs` is created with `Grafana`, `Prometheus` and `Alertmanager` activated.

4. A user account is created and added to the `labs` team group in Keycloak. In the labs we'll be using the user `labs-user`.

## Sign in to the Console

- Go to the provided URL. The URL will look like this: https://console.yourdomain.com

- Sign in with the created user account (or when OIDC is configured, use your existing corporate AD account)

After sign in, you will see this page:

![Team apps](../../img/team-dashboard.png)