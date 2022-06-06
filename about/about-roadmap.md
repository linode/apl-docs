---
slug: roadmap
title: Roadmap
---

We are currently working on the following features for the next release.

**Release Cycle**

- Release from our **stable** channel every 3 months
- Release from **beta** channel bi-weekly
- Release from **alpha** is nightly

This approach might change, so keep watching our socials.

### In the first quarter of 2022 we added the following features

- [x] Internal ingress network policies: Controlling network traffic between team services
- [x] Outbound egress control: Specify the FQDNs or IPs that services need to be able to access
- [x] Add self-service for network policies (ingress/egress)
- [x] Modify the configuration of integrated apps using Otomi Console
- [x] Get a minimal set of installed apps to lower the initial footprint
- [x] Activate more apps after initial install
- [x] Support for Kubernetes 1.22 and 1.23

### For Q2 2022 we aim to incorporate the following features

- [x] Add the option to use more ingress controllers allowing to group services on a dedicated controller for segmentation
- [x] Offer option to expose all Otomi platform services privately (LB in private subnet)
- [x] Adding Argo CD for team GitOps
- [x] Adding [Kubeclarity](https://github.com/openclarity/kubeclarity) for runtime container security scanning
- [ ] Adding Velero for automatic backup of Otomi platform databases
- [ ] Add the option to backup Team PVCs
- [ ] Change DNS using Otomi Console after initial install

### For Q3 2022 we aim to incorporate the following features

- [ ] Make Otomi fully compliant to the [NSA hardening guide](https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF)
- [ ] Multi tenancy enhancements: When running Otomi in multi-tenant mode, shared apps will be private for teams
- [ ] Support for Kubernetes 1.24
- [ ] Adding Falco
