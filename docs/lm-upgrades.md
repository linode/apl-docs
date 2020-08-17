---
id: lm-upgrades
title: Otomi Upgrades
---

Since Otomi is a mono repo with many open source charts that are working together, it is very hard to coordinate updates to it's parts.
Luckily we can rely on a lot of smart operators to take care of upgrades, but some scripting is always needed in this case.
We strived to make this as painless as possible by creating upgrade scripts for the minor versions of Otomi. You can find these in `bin/upgrades`.

So in order to migrate from `v0.10.*` to `v0.11.*` you would run `bin/upgrades/v0.11.sh`.
The upgrade script can also be used to migrate from an older version, as it will apply any in between upgrade scripts successively.