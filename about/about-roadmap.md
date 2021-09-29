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

### For the next release (around oct/nov 2021) we aim to incorporate the following features

- **_Continuous Deployment_**: semver/glob based image tags scanned in registry are deployed automatically and state is written back to values repo
- **_Deploy Otomi without OIDC_** (and manage users in KeyCloak)
- **_Create Teams and Services using the CLI_**

For the end of 2021 we aim to release the following:

- **_CI pipeline for teams_**: Most teams already have CI, but we like Drone and GitHub and will offer various flavours of pipeline templates for both. Drone is already deployed for gitops and thus available, and GitHub is rather heavy so will become optional

### After that we see the following features on the horizon

- **Multi tenancy enhancements**: Allow multiple tenants to have their own teams, allowing sharing of cluster resources bringing down costs with scale
- **Kubernetes operators**: Expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades).
- Bring **_Message Queue_** options to the stack: We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions)
- **_Streaming tools for real time inspection and tagging of traffic_**
- A **_Market place_** to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories)
- **_A Catalog with preconfigured flavours of stateful applications_**: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs
