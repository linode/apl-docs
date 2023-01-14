---
slug: optional
title: Optional configuration
---

You can optionally configure Otomi to use an external IDP (Azure AD), use an external Key Management Service (KMS) provider for SOPS and use a DNS zone in combination with LetsEncrpt certificates. Below you can find detailed instructions on how to set up Azure AD as an external IDP and configure KMS. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta.

## Use DNS and Let's Encrypt

By default, Otomi uses the public IP address of the load balancer for nameresolving using [nip.io](http://nip.io). To use DNS with LetsEncrypt, follow these instructions:

- [Setting up external DNS in AWS](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md)
- [Setting up external DNS in Azure](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md)
- [Setting up external DNS in Google](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md)

To install Otomi with DNS and Let's Encrypt, use the following values:

```yaml
otomi:
  hasExternalDNS: true

# Configure cert-manager
apps:
  cert-manager:
    issuer: letsencrypt
    stage: staging # defaults to 'production' when commented out

# Configure DNS
dns:
#   domainFilters: []
#   zoneIdFilters: []
#   provider: # provide one of the following below: aws|azure|google
#     aws:
#       # next two keys are optional for explicit access with an iam role
#       # (if no metadata exists with implicit role access to manage dns)
#       accessKeySecret: ''
#       secretAccessKey: ''
#       # region is always needed
#       region: eu-central-1
#       role: '' # optional ARN, may be set explicitly if no metadata can be accessed
#     azure:
#       aadClientId: ''
#       aadClientSecret: ''
#       tenantId: '' # optional
#       subscriptionId: '' # optional
#     google:
#       serviceAccountKey: ''
#       project: ''
```

## Use Azure AD as IDP

The authentication of brokered identities through Azure AD requires a service principal with certain Azure AD API permissions. An app registration needs to be created with the following API permissions:

| API / Permission name       | Type      | Description                   |
| --------------------------- | --------- | ----------------------------- |
| Microsoft Graph / email     | Delegated | View users' email address     |
| Microsoft Graph / openid    | Delegated | Sign users in                 |
| Microsoft Graph / profile   | Delegated | View users' basic profile     |
| Microsoft Graph / User.Read | Delegated | Sign in and read user profile |

And the following token configurations:

| Claim       | Description                                      | Token type       | Optional settings |
| ----------- | ------------------------------------------------ | ---------------- | ----------------- |
| family_name | Provides the last name, surename, or family name | ID               | -                 |
| given_name  | Provides the first or "give" name of the user    | ID               | -                 |
| groups      | Optional formatting for group claims             | ID, Access, SAML | Default           |
| upn         | An identifier for the user that can be used ...  | ID               | Default           |

Note that the group type should be set to 'security groups'.

At the 'Authentication' tab you should be able to set the following callback URL§s and enable that both "Access tokens" and "ID tokens" are issued and public client flows are allowed:

- `https://keycloak.<dns-zone-name>/realms/master/broker/otomi-idp/endpoint`
- `https://keycloak.<dns-zone-name>`

To install Otomi with Azure Active Directory as IdP instead of (default) Keycloak, use the following values:

```yaml
oidc:
  clientID: ''
  clientSecret: ''
  issuer: ''
  # IDP group id used to identify global admin
  adminGroupID: ''
  # IDP group id used to identify team admin
  teamAdminGroupID: ''
```

:::note

`otomi-idp` is the default KeyCloak alias (shown as login title). To use another alias, add the following to the chart values:

```yaml
apps:
  keycloak:
    idp:
      alias: <your-alias>
```

:::

## Use KMS to manage keys for encryption

If you would like the secrets in the `values` repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by [sops](https://github.com/mozilla/sops), the tool used for encryption.

Find quickstart documentation below on how to setup KMS access per supported provider:

- [AWS KMS](https://aws.amazon.com/kms/getting-started/)
- [Azure Vault](https://azure.microsoft.com/en-us/services/key-vault/#getting-started)
- [Google KMS](https://cloud.google.com/kms/docs/quickstart)

Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps.

To install Otomi with SOPS/KMS, use the following values:

```yaml
kms:
  sops:
    provider: '' # provider can be one of aws|azure|google|vault
#     aws:
#       keys: ''
#       accessKey: ''
#       secretKey: ''
#       region: ''
#     azure:
#       keys: ''
#       tenantID: ''
#       clientID: ''
#       clientSecret: ''
#     google:
#       keys: ''
#       accountJson: ''
#       project: ''
#     vault:
#       token: ''
```

But you can also enable SOPS/KMS after installing Otomi using Otomi Console.