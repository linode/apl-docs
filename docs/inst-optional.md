---
slug: installation/optional
title: Optional configuration
---

You can optionally configure Otomi to use an external IDP (Azure AD) and use an external Key Management Service (KMS) provider for SOPS. Below you can find detailed instructions on how to set up Azure AD as an external IDP and configure KMS. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta.

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

:::note

`otomi-idp` is the default KeyCloak alias (shown as login title). To use another alias, add the following to the chart values:

```yaml
charts:
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
