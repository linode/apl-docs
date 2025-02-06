---
slug: ingress
title: Platform settings
sidebar_label: Ingress
---

:::info
The Ingress section in the Settings will not be visible when App Platform is deployed directly through LKE (not manually installed). In this case you will not be able to create multiple ingress classes.
:::

## Ingress

By default (after installation), one ingress controller (ingress-nginx-platform) is deployed and is used to publicly expose both platform and user created services. In the settings for ingress, an admin can:

1. Configure the platform ingress class to be private (by adding the required `annotations`).

2. Add additional ingress classes to expose user created services.

By changing the platform ingress class from public to private, all platform services (like the Console, the Keycloak instance and all other platform end-points) will only be accessible from the private network.

By adding additional ingress classes, each class will get a dedicated ingress controller and a dedicated cloud load balancer. This allows grouping of services and exposing them to differend networks.

Read more about configuring ingress classes [here](../../how-to/ingress-classes.md).
