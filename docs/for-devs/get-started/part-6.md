---
slug: part-6
title: Configuring network policies
sidebar_label: Part 6
---

In some cases you want to explicitly allow access to your application. This can be done by creating network policies. Otomi supports 2 types of network policies:

- Policies for ingress traffic inside the cluster
- Policies for egress traffic to go outside of the cluster (to access external FQDNs)

## configuring internal ingress network policies

The internal ingress network policies alllow you to:

- Deny all traffic to your application
- Allow selected applications running on the cluster to access your application

Deny all and Allow all we don't need to explain right?

To configure selected applications running on the cluster to access your application, do the following:

- Register the Kubernetes ClusterIP service of your app as a Service in Otomi. If no public ingress is required, then just use the `Cluster` ingress option

- 