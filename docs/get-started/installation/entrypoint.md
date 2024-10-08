---
slug: entrypoint
title: Install with entrypoint
sidebar_label: Entrypoint
---

In some cases, the Kubernetes cluster will de deployed in a private setup where public access is only possible using an external gateway or firewall.

## Use case

When installed on a private Kubernetes cluster and all services are exposed using a private load balancer, we would like to create A records and point them to the IP address of the external gateway instead of the Ip address of the private load balancer.

For this you can use the `entrypoint`. The entrypoint is a public IP address that will override the (load balancer's private) IP used for registering hosts in DNS. This allows public access to private clusters through an external gateway.

To configure an entrypoint, add the following to the `values.yaml`:

```yaml
ingress:
  platformClass:
    entrypoint: <entrypoint-ip-address>
```

Make sure the external gateway is configured to connect to the IP of the private load balancer used by the `platformClass` ingress controller.

The DNS A records will now point to the IP address of the external gateway.