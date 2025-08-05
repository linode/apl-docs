---
slug: netpols
title: Network Policies
sidebar_label: Network Policies
---

Kubernetes Network Policies (Ingress) and Istio Service Entries (Egress) are managed via two dedicated UIs: **Inbound Rules** and **Outbound Rules**. When Ingress control is enabled for your team, _all_ pod‑to‑pod traffic is denied by default. When Egress control is enabled, _all_ external traffic is denied by default. You must explicitly create rules to open up traffic.

---

## Inbound Rules

This page lists every Ingress rule for your team:

| Property | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| Name     | The name of the Inbound rule                                                        |
| Source   | The workload(s) network traffic that is going to be accepted by the target workload |
| Target   | The workload (and its pod label) receiving traffic                                  |

1. **Create inbound rule**: click **CREATE INBOUND RULE**.

2. **Inbound rule name**: enter a unique, descriptive name.

3. **Sources**

   - Click the **Workload** dropdown → pick a Knative Service, Deployment, Helm release, etc.
   - The **Label(s)** dropdown will auto‑fetch that workload’s pod labels; you can leave the default or pick another.
   - Click **ADD SOURCE** to permit multiple source entries.

4. **Target**

   - Click the **Workload** dropdown → pick the target workload whose pods you’re opening up.
   - You can leave the default label or pick another.

5. **Save Changes** to apply the rule. You can edit or delete rules via the same UI.

---

## Outbound Rules

This page lists every Egress rule for your team:

| Property | Description                                |
| -------- | ------------------------------------------ |
| Name     | The name of the Outbound rule              |
| Domain   | The FQDN or IP address being contacted     |
| Port     | The port number(s) opened (1–65535)        |
| Protocol | The protocol(s) allowed (TCP, HTTP, HTTPS) |

1. **Create outbound rule**: click **CREATE OUTBOUND RULE**.

2. **Outbound rule name**: enter a unique, descriptive name.

3. **Domain name or IP address**: enter the FQDN or IPv4/IPv6.

4. **Protocol & Port**

   - Use the **Protocol** dropdown to pick TCP, HTTP or HTTPS.
   - Enter a **Port** (1–65535).
   - Click **ADD PORT** to open additional port/protocol fields.

5. **Save Changes** to apply the rule. You can edit or delete rules via the same UI.

---
