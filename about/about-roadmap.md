---
slug: roadmap
title: Roadmap
---

## In the first quarter of 2022 we added the following features

- [x] Internal ingress network policies: Controlling network traffic between team services
- [x] Outbound egress control: Specify the FQDNs or IPs that services need to be able to access
- [x] Add self-service for network policies (ingress/egress)
- [x] Modify the configuration of integrated apps using Otomi Console
- [x] Get a minimal set of installed apps to lower the initial footprint
- [x] Activate more apps after initial install
- [x] Support for Kubernetes 1.22 and 1.23

## For Q2/Q3 2022 we aim to incorporate the following features

- [x] Add the option to use more ingress controllers allowing to group services on a dedicated controller for segmentation
- [x] Offer option to expose all Otomi platform services privately (LB in private subnet)
- [x] Adding Argo CD for team GitOps
- [x] Adding [Kubeclarity](https://github.com/openclarity/kubeclarity) for runtime container security scanning
- [x] Adding Velero for automatic backup of Otomi platform databases
- [x] Add the option to backup Team PVCs
- [x] Add support for more DNS providers in Otomi and the option to choose any other provider supported by external-dns

## For Q3 2022 and Q1 2023 we aim to incorporate the following features

We will make a destinction between `developer-workflow` and `platform operations`:

### Developer workflow

| Feature | Description | Planned for | Status |
| ------- | ----------- | ----------- | ------ |
| Workloads | Separate workloads (now only knative) from services. Services will be used only for networking (ingress and netpols). A new feature will be added to create workloads using Otomi Console | End Q4 2022 | In progress |
| Push secrets | Download a push secret for the teams private image registry | End 2022 | |


### Platform operations

| Feature | Description | Planned for | Status |
| ------- | ----------- | ----------- | ------ |
| Integrate Falco | Add the option to activate Falco for threat detection | End 2022 | | |
| Integrate Thanos | adding Thanos for multi-cluster monitoring | End 2022 | In progress |
| Improve compliancy | Make Otomi compliant to the [NSA hardening guide](https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF) | Q1 2023 | In progress|
| Policy exceptions | To improve governance, sec policy exceptions need to be approved by platform admin | | |
| Team apps | A platform admin can configure the shared apps available for a team | | |


