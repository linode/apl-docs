---
slug: certmanager
title: CertManager
sidebar_label: Cert-Manager
---

## About

Cert-Manager is used by to automatically create and rotate wildcard TLS certificates for service endpoints. You may bring your own CA, or otherwise one is created for you. If you bring your own trusted wildcard certificate, then cert-manager will not manage this certificate.

:::info
The wildcard certificate must be valid for the following domain `*.<cluster.domainSuffix>`, where the value of `<cluster.domainSuffix>` comes from the cluster.yaml file.
:::

:::info
Setting Cert-Manager to use Letsencrypt requires DNS availability of the requesting domains, and forces Otomi to install [ExternalDNS](external-dns.md). Because a lot of DNS settings are used by other contexts, all DNS configuration can be found [here](../for-ops/console/settings/dns.md).
:::                                                                                                                                                                                                                                                      |
