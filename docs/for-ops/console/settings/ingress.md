---
slug: ingress
title: Platform settings
sidebar_label: Ingress
---

## Ingress

:::note

Using multiple ingress classes / Ingress controllers is only supported if `cluster.provider=azure`.

:::

By default (after installing Otomi), one ingress controller (ingress-nginx-platform) is deployed and is used to publicly expose both platform and user created services. In the settings for ingress, an admin can:

1. Configure the platform ingress class to be private (using a private load balancer)
2. Add additional ingress classes to expose user created services

By changing the platform ingress class from public to private, all platform services (like Otomi Console, the Keycloak platform instance and all other platform end-points) will only be accessible from the private network.

By adding additional ingress classes, each class will get a dedicated ingress controller and a dedicated cloud load balancer. This allows grouping of services and exposing them to differend networks.