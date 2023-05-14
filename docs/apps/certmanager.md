---
slug: certmanager
title: CertManager
sidebar_label: Cert-Manager
---

## Introduction

Cert-Manager is used by Otomi to automatically create and rotate TLS certificates for service endpoints. You may bring your own CA, or let Otomi create one for you, but we recommend using [Letsencrypt](https://letsencrypt.org) for production certificates.

Setting CertManager to use Letsencrypt requires DNS availability of the requesting domains, and forces Otomi to install [ExternalDNS](external-dns). Because a lot of DNS settings are used by other Otomi contexts, all DNS configuration can be found [here](../for-ops/console/settings/dns).

## Configuration

The following values cam be configured:

| Value     | Description                                            |
| ------------- | ------------------------------------------------------ |
| customRootCA          | CA that is used to create and verify self-signed certificates. Leave it empty to generate one automatically                                |
| customRootCAKey      | CA private key that is used to issue certificates. Leave it empty to generate one automatically                    |
| email          | Required when using the Let's Encrypt Issuer        |
| issuer | The certificate issuer. Choose between `letsencrypt` or `custom-ca` |
| stage | Required when using the Let's Encrypt Issuer. Choose between `staging` or `production` |
| resources | Configure Request and Limits for cert-manager |


## Automation

Not applicable.

## Integrations

## Instructions