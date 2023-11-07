---
slug: entrypoint
title: Install Otomi with entrypoint
sidebar_label: EntryPoint
---

In some cases, the Kubernetes cluster will de deployed in a private setup where public access is only possible using an external gateway or firewall.

## Use case

When Otomi is installed on a private Kubernetes cluster and services are exposed on a private load balances, we would like to create host names in Otomi and configure DNS entries to point to an external gateway.

For this you can use an `entrypoint` in Otomi. The entrypoint is a public IP address that will override the (loadbalancer) IP used for registering hosts. This allows public access to private clusters through an external gateway.

To configure an entrypoint, add the following to the `values.yaml` when installing Otomi:

```yaml
ingress:
  platformClass:
    entrypoint: <entrypoint-ip-address>
```

Make sure the external gateway is configured to connect to the IP of the private load balancer used by the `platformClass` ingress controller.

The DNS A records created by Otomi will now all point to the IP address of the external gateway.