---
slug: roadmap
title: Product Roadmap
sidebar_label: Roadmap
---

## In 2023 we aim to incorporate the following features

We will make a destinction between `developer-workflow` and `platform operations`:

### Developer workflow

| Feature | Planned for | Status |
| ------- | ------ | ------ |
| Self-service default Response headers per service | Q1 | Ready |
| Deploy Helm and Knative workloads using Otomi and ArgoCD | Q1 |
| Separate workloads from services. Services will be used for ingress/egress | Q1 | In progress |
| Download a push secret for the teams private image registry | Q1 | |
| Independent Drone pipelines for teams | Q2 | |


### Platform operations

| Feature | Planned for | Status |
| ------- | ------ | ------ |
| Upgrade Harbor and add db backup option | Q1 | Ready |
| Integrate Thanos for multi-cluster monitoring | Q1 | PR |
| Split-up cloud and storage configuration for Velero | Q1 | PR |
| Define ingress-nginx settings for each ingress class | Q1 | In progress |
| Upgrade external secrets operator and add option for cluster-wide secrets | Q1 | PR |
| Add AlertManager receivers for Watchdog | Q1 | |
| Support for Kubernetes version 1.24 | Q1 | In progress |
| Integrate Falco for threat detection | Q2 | |
| Make Otomi compliant to the [NSA hardening guide](https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF) | Q2 | In progress |
| Pod sec policy exceptions need to be approved by platform admin | Q2 | |
| Harden Istio service mesh configuration | Q2 | |
| Support use of Istio egress gateway without disrupting outbound traffic | Q2 | |
| A platform admin can configure the shared apps available for a team | Q3 | |


