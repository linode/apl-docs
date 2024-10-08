---
slug: byo-wildcard-cert
title: BYO Wild card Certificate
sidebar_label: BYO Wild Card Cert
---

When installing with DNS, there are 3 `issuers` you can use:

1. custom-ca
2. letsencrypt
3. byo-wildcard-cert

In most of the installation examples we use `letsencrypt`. In this example we'll show how to use a Bring Your Own wildcard certificate.

To use a `byo-wildcard-cert`, install with the following values:

```yaml
cluster:
  name: otomi
  provider: custom
  domainSuffix: try-otomi.net
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - try-otomi.net
  provider:
    aws:
      credentials:
        secretKey: xxx
        accessKey: xxx
      region: eu-central-1
apps:
  cert-manager:
    issuer: byo-wildcard-cert
    # Add the full chain of your wild card certificate
    byoWildcardCert: |
      -----BEGIN CERTIFICATE-----
      -----END CERTIFICATE-----
      -----BEGIN CERTIFICATE-----
      -----END CERTIFICATE-----
      -----BEGIN CERTIFICATE-----
      -----END CERTIFICATE-----
    byoWildcardCertKey: |
      -----BEGIN PRIVATE KEY-----
      -----END PRIVATE KEY-----
```