---
slug: ingress
title: Platform settings
sidebar_label: Ingress
---

## Ingress

By default (after installing APL), one ingress controller (ingress-nginx-platform) is deployed and is used to publicly expose both platform and user created services. In the settings for ingress, an admin can:

1. Configure the platform ingress class to be private (by adding the required `annotations`).

2. Add additional ingress classes to expose user created services.

3. Configure IP whitelisting, cloud specific annotations and/or static IP address for the load balancer.

By changing the platform ingress class from public to private, all platform services (like APL Console, the Keycloak platform instance and all other platform end-points) will only be accessible from the private network.

By adding additional ingress classes, each class will get a dedicated ingress controller and a dedicated cloud load balancer. This allows grouping of services and exposing them to differend networks.

Read more about configuring ingress classes [here](../../how-to/ingress-classes.md).