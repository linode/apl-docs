---
slug: oidc
title: OIDC
sidebar_label: OIDC
---

## Use Azure Entra ID

The authentication of brokered identities through Azure Entra ID (formerly Azure Active Directory) requires a service principal with certain API permissions. An app registration needs to be created with the following API permissions:

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

To use Azure Entra ID as an IdP instead of (default) using Keycloak as an IdP, use the following values:

```yaml
oidc:
  clientID: ""
  clientSecret: ""
  issuer: ""
  # IDP group id used to identify global admin
  adminGroupID: ""
  # IDP group id used to identify team admin
  teamAdminGroupID: ""
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