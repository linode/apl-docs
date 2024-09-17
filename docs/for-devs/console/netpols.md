---
slug: netpols
title: Team Network Policies
sidebar_label: Network Policies
---

A Network Policy in APL is a self-service feature for creating Kubernetes Network Policies (Ingress) and Istio Service Entries (Egress).

When the Network Policies `Ingress control` option is enabled for the team, all traffic to the Pods of the Team (from other Pods within the Team and from Pods in other Teams) will be blocked by default. To allow other Pods to access your Pod you will need to create a Network Policy of type `ingress`.

When the Network Policies `Egress control` option is enabled for the team, all traffic to external endpoints (outside of the cluster) is blocked by default. To allow access to external endpoints you will need to create a Network Policy of type `egress`.

## Network Policies (all)

All Network Policies of the team are listed here.

| Property      | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| Name          | The name of the Network Policy                                  |
| Rule type     | Type of the Network Policy (Ingress or Egress)                  |
| Team          | The name of the Team responsible for the build                  |

## Create a Network Policy

1. Enter a name for the Network Policy.

2. Select the Rule type:

- Use `Ingress` to allow other Pods to connect to your Pod
- Use `Egress` to allow all Pods in the Team to connect an external (outside of the cluster) endpoint (based on a FQDN or an IP address)

### Ingress

If type `Ingress` is selected:

3. Add the label name and value of your Pod.

4. Select the mode.

- Select `AllowAll` to allow all Pods in all Teams to connect to your Pod
- Select `AllowOnly` to only allow specific Pods in a specific Namespace

If mode `AllowOnly` is selected:

- Add the label name (`fromLabelName`) of the Pod that is allowed to connect
- Add the label value (`fromLabelValue`) of the Pod that is allowed to connect
- Add the namespace (`fromNamespace`) of the Pod that is allowed to connect


### Egress

If type `Egress` is selected:

3. Add the Fully Qualified Domain Name (FQDN) or the IP address of the external endpoint.

4. Add the Port number (between 1 and 65535).

5. Select the Protocol (HTTP, HTTPS or TCP).




