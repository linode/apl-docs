---
slug: roadmap
title: Roadmap
---

We are currently working on the following features for the next release. We release from our **stable** channel every 2 months. We will release from **beta** channel bi-weekly, and **alpha** is nightly. This approach might change, so keep watching our socials.

For the next release (around oct/nov 2021) we aim to incorporate the following features:

- Continuous Deployment: semver/glob based image tags scanned in registry are deployed automatically and state is written back to values repo
- Deploy Otomi without OIDC (and manage users in KeyCloak)
- Create Teams and Services using the CLI

For the end of 2021 we aim to release the following:

- CI pipeline for teams: most teams already have CI, but we like Drone and GitHub and will offer various flavours of pipeline templates for both. Drone is already deployed for gitops and thus available, and GitHub is rather heavy so will become optional

After that we see the following features on the horizon:

- Multi tenancy enhancements: Allow multiple tenants to have their own teams, allowing sharing of cluster resources bringing down costs with scale
- Kubernetes operators: expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades).
- Bring Message Queue options to the stack. We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions)
- Streaming tools for real time inspection and tagging of traffic
- A Market place to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories)
- A Catalog with preconfigured flavours of stateful applications: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs
