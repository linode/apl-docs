---
slug: falco
title: Falco
sidebar_label: Falco
---

Falco can be used for thread detection. When turned on

:::Notes:
Your deployed workloads may trigger one or more Falco rules. Hence, you may want to reconfigure some of the defaults. Something you consider as normal can be whitelisted in the Raw values of the Falco application.
:::

## Configuration values

### Falco sidekick configuration

- Number of replica's of Falco Sidekick
- Minimum priority (defaukt is informational).

### Resources

Adjust default provided resource requests and limits for Falco, Falco Sidekick and Falco Exporter.

