---
slug: roadmap
title: Roadmap
---

We are currently working on the following features for the next release. We release every 2 months.

For the next release (end of february) we aim to incorporate the following features:

- [Conftest](https://www.conftest.dev): static analysis of output manifests
- Jobs: already used in core, but made available for teams
- Continuous Deployment: semver/glob based image tags scanned in registry are deployed automatically and state is written back to values repo
- [EE only] Upgrade channels: subscribe a cluster to ALPHA/BETA/STABLE channel to automatically receive updates, or approve manually after
- Catalog with stateful applications: preconfigured flavours of availability vs affordability to meet current needs. First arrivals are likely to be MySQL, Redis, Postgres and Mongo

After that we see the following features on the horizon:

- Hashicorp Vault integration as a store or intermediary to cloud vaults. Allowing easy injection of secrets into services vi Console (EE version only).
- Better solution for GitOps syncing than Drone. We need periodic pulling of state to overcome temporary network glitches.
- CI pipeline for teams: most teams already have CI, but we like Drone and GitHub and will offer various flavours of pipeline templates for both. Drone is already deployed for gitops, and GitHub will become optional.
- Multi tenancy enhancements: Allow multiple tenants to have their own teams, allowing sharing of cluster resources bringing down costs with scale.
- Kubernetes operators: expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades).
- Bring Message Queue options to the stack. We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions).
- Streaming tools for real time inspection and tagging of traffic.
