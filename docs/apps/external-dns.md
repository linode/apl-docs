---
slug: external-dns
title: External-DNS
sidebar_label: ExternalDNS
---

External-dns is required to make public service domains accessible by registering them with Otomi's front loadbalancer CNAME or IP address. When it is not enabled (default) Otomi will instead rely on [nip.io](https://nip.io) to create host names for all services.

The use of external-dns is a prerequisite for using the following features:

- Harbor private registries for teams
- Builds (rely on Harbor)
- Projects (rely on Harbor)

## Configuration values

External-dns can be configured in the [DNS section](/docs/for-ops/console/settings/dns) of the Platform Setting