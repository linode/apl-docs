---
slug: dns
title: Platform settings
sidebar_label: DNS
---

:::info
The DNS section in the Settings will NOT be visible when the installation is done by Akamai Connected Cloud. In this case the DNS configuration is managed by Akamai.
:::

## DNS

:::note
DNS settings will only be active when `otomi.hasExternalDNS=true` flag is set during installation. This can also be set after installation in Settings/General.
:::

### Zones

Add additional DNS zones Extra that the cluster can administer. Team services can use these zones to publish their URL's on.

### Domain filters

Limit possible target Zones by suffix.

### Zone ID filters

Limit the possible target zones by zone id.

### Provider

The DNS provider used to manage the domain(s).

The following DNS providers are supported:

- AWS Route53
- Azure (Public zones)
- Azure Private DNS
- CloudFlare
- Digital Ocean
- Google
- Linode Domains
- Other

When `Other` is selected, the required values can be added to support any other DNS provider (supported by [ExternalDNS](https://github.com/kubernetes-sigs/external-dns/)).
