---
slug: roadmap
title: Roadmap
---

We are currently working on the following features for the next release. We release from our **stable** channel every 2 months. We will release from **beta** channel bi-weekly, and **alpha** is nightly. This approach might change, so keep watching our blog.

For the next release (end of february) we aim to incorporate the following features:

- [WIP] Jobs: already used in core, but made available for teams
- [WIP] Hashicorp Vault integration for secrets management. Allows for easy injection of secrets into services via console (EE version only).
- Continuous Deployment: semver/glob based image tags scanned in registry are deployed automatically and state is written back to values repo
- [WIP] Universal OPA Policies (we just coined it): policy checks for statical analysis of resources re-used by gatekeeper.
- [EE only] Upgrade channels: subscribe a cluster to ALPHA/BETA/STABLE channel to automatically receive updates, or approve manually after

For end of april we aim to release the following:

- Market place to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories).
- Catalog with preconfigured flavours of stateful applications: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs.
- CI pipeline for teams: most teams already have CI, but we like Drone and GitHub and will offer various flavours of pipeline templates for both. Drone is already deployed for gitops and thus available, and GitHub rather heavy so will become optional.
- Core upgrades: Istio upgrade from 1.6 to 1.8 (yes, skipping problematic 1.7), Knative serving upgrade from 0.17 to 0.19.
- Better solution for GitOps syncing than Drone. We want periodic pulling of state to overcome temporary network glitches.

After that we see the following features on the horizon:

- Multi tenancy enhancements: Allow multiple tenants to have their own teams, allowing sharing of cluster resources bringing down costs with scale.
- Kubernetes operators: expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades).
- Bring Message Queue options to the stack. We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions).
- Streaming tools for real time inspection and tagging of traffic.
