---
slug: roadmap
title: Roadmap
---

We are currently working on the following features for the next release.

**Release Cycle**

- Release from our **stable** channel every 2 months
- Release from **beta** channel bi-weekly
- Release from **alpha** is nightly

This approach might change, so keep watching our socials.

### For the first quarter of 2022 we aim to incorporate the following features

- [x] Internal ingress network policies: Controlling network traffic between team services
- [x] Outbound egress control: Specify the FQDNs or IPs that services need to be able to access
- [x] Add self-service for network policies (ingress/egress)
- [ ] Modify the configuration of integrated apps using Otomi Console
- [ ] Get a minimal set of installed apps to lower the initial footprint. Activate more apps after initial install
- [ ] Add the option to use more ingress controllers allowing to group services on a dedicated controller for segmentation

### For the second quater of 2022 we aim to incorporate the following features

- [ ] Support for Kubernetes 1.22
- [ ] Add Velero for backing up Otomi platform apps (like Harbor, Keycloak, Gitea and Kubeapps Postgresql databases)
- [ ] Add the option to backup Team apps
- [ ] Automated deployment of container images using Flux CD
- [ ] Add Falco and Kubei for runtime security monitoring
### After that we see the following features on the horizon

- Multi tenancy enhancements: Allow teams to create and manage namespaces
- Kubernetes operators: Expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades).
- Bring Message Queue options to the stack: We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions)
- Streaming tools for real time inspection and tagging of traffic
- A Market place to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories)
- A Catalog with preconfigured flavours of stateful applications: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs
- Adding buildpack
