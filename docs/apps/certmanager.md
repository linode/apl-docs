---
slug: certmanager
title: CertManager
sidebar_label: Cert-Manager
---

Cert-Manager is used by Otomi to automatically create and rotate wildcard TLS certificates for service endpoints. You may bring your own CA, or let Otomi create one for you. If you bring your own trusted wildcard certificate, then cert-manager will not manage this certificate.

:::info
The wildcard certificate must be valid for the following domain `*.<cluster.domainSuffix>`, where the value of `<cluster.domainSuffix>` comes from the cluster.yaml file.
:::

:::info
Setting Cert-Manager to use Letsencrypt requires DNS availability of the requesting domains, and forces Otomi to install [ExternalDNS](external-dns). Because a lot of DNS settings are used by other Otomi contexts, all DNS configuration can be found [here](../for-ops/console/settings/dns).
:::

## Configuration Values

The following values can be configured:

| Value              | Description                                                                                                                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| issuer             | Indicates the origin of the wildcard certificate. Set `custom-ca` to instruct cert-manager to derive certificate from the customRootCA. Set `letsencrypt` to instruct cert-manager to request certificate from letsencrypt endpoint. Set `byo-wildcard-cert` to provide your own wildcard certificate. |
| customRootCA       | CA that is used to create and verify self-signed certificates. Leave it empty to generate one automatically                                                                                                                                                                                            |
| customRootCAKey    | CA private key that is used to issue certificates. Leave it empty to generate one automatically                                                                                                                                                                                                        |
| byoWildcardCert    | Bring your own trusted wildcard certificate                                                                                                                                                                                                                                                            |
| byoWildcardCertKey | A certificate key corresponding to the byoWildcardCert                                                                                                                                                                                                                                                 |
| email              | Required when using the Let's Encrypt Issuer                                                                                                                                                                                                                                                           |
| stage              | Required when using the Let's Encrypt Issuer. Choose between `staging` or `production`                                                                                                                                                                                                                 |
| resources          | Configure Request and Limits for cert-manager                                                                                                                                                                                                                                                          |
