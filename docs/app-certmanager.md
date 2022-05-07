---
slug: apps/certmanager
title: Working with CertManager
sidebar_label: CertManager
---

## Introduction

CertManager is used by Otomi to automatically create and rotate TLS certificates for service endpoints. You may bring your own CA, or let Otomi create one for you, but we recommend using [Letsencrypt](https://letsencrypt.org) for production certificates.

Setting CertManager to use Letsencrypt requires DNS availability of the requesting domains, and forces Otomi to install [ExternalDNS](external-dns). Because a lot of DNS settings are used by other Otomi contexts, most DNS configuration is found under [settings/dns](/docs/console/settings#dns).
