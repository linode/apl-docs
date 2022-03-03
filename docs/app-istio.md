---
slug: apps/istio
title: Working with Istio
sidebar_label: Istio
---

Since Otomi has security best practices built in, it is designed for intrusion.
Istio is installed by Otomi as a service mesh to deliver the following capabilities:

- mTLS enforcement for all traffic that is deemed compromisable.
- egress control, forcing teams to choose explicit egress endpoints.
- advanced routing capabilities such as weight based load balancing (A/B or blue/green testing)

In the future we might make it possible to opt out of Istio, but that effectively nullifies the mTLS capabilities and egress control.
