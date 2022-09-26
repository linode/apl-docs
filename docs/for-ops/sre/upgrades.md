---
slug: sre/upgrades
title: Upgrades
---

## Introduction

Since otomi-core is a mono repo with many open source charts that are working together, it is very hard to coordinate updates to its parts. Luckily we can rely on a lot of smart operators to take care of upgrades (we strive to only adopt operators with capability level "Seamless Upgrades"), but some scripting is always needed in this case. We strive to make upgrades as painless as possible by creating upgrade scripts for the release versions.

Example: in order to migrate from `v0.10.*` to `v0.11.*` you would run `bin/upgrades/v0.11.sh`. Soon the upgrade scripts can also be used to migrate from an older version, as it will apply any in between upgrade scripts successively.

In some situations however, the automatic upgrades will throw an error, and might require removing/patching existing resources before helm can adopt or manipulate them. Notable issues:

- Resources not under helm chart control: since helm 3.2 these can be adopted. When trying to deploy helm resources over existing resources helm will give detailed instructions on how to adopt these.
- Some resources have labels and do not allow changing them. This usually points to bad chart practices, but mandates removal before recreating these resources. This can't always be done and is a big drawback. Remedies usually exist but might have to be investigated on the fly.

## Steps to upgrade otomi-core

So every time an upgrade of the stack is released it is important to follow these steps:

1. Read the release notes on [otomi-core](https://github.com/redkubes/otomi-core) for impact and special cases.
2. Check the corresponding upgrade script(s) and read the comments. It might involve manual steps.
3. Set the new version tag in `clusters.yaml` and run `otomi bootstrap` to pull in latest artifacts
4. Do a diff first: `otomi diff`
5. Run the upgrade script
6. Check the output and fix anything that needs fixing and repeat steps 4-6
7. Commit the values when all is well and Drone syncing will take it from there
