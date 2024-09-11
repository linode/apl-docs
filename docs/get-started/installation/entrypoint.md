---
slug: entrypoint
title: Install APL with an entrypoint
sidebar_label: Entrypoint
---

In some cases, the Kubernetes cluster will de deployed in a private setup where public access is only possible using an external gateway or firewall.

## Use case

When APL is installed on a private Kubernetes cluster and APL services are exposed using a private load balancer, we would like to create host names in APL and configure DNS entries to point to the external gateway.

For this you can use an `entrypoint` in APL. The entrypoint is a public IP address that will override the (load balancer's private) IP used for registering hosts. This allows public access to private clusters through an external gateway.

To configure an entrypoint, add the following to the `values.yaml` when installing APL:

```yaml
ingress:
  platformClass:
    entrypoint: <entrypoint-ip-address>
```

Make sure the external gateway is configured to connect to the IP of the private load balancer used by the `platformClass` ingress controller.

The DNS A records created by APL will now all point to the IP address of the external gateway.