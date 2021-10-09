---
slug: apps/keycloak
title: Working with Keycloak
sidebar_label: Keycloak
---

The SSO login page for Otomi is served by Keycloak. It is used as an identity broker _or_ provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications.

Keycloak is automatically configured with 3 roles:

- `otomi-admin`: super admin role for all platform configuration and core applications
- `team-admin`: team admin role to manage teams and users
- `team-<team-name>`: team role for team members, which also includes the name of the team given access to

When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided `groups` and `roles` claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the  "Authenticate with Single Sign On" checkbox. This then limits access the application to only allow the members of the team. 

When there are different requirements to use Keycloak for business applications, Keycloak's designated "otomi" realm may _not_ be used, and an additional realm needs to be created. We refer to the [keycloak docs](https://www.keycloak.org/docs/latest/server_admin/index.html) for any custom configuration targeting business applications. 

## Create users

When you did not provide `oidc` in your values to configure an external identity provider, then you need to manually add new users and add them to groups.

After installation, sign in to the Keycloak administration console with the default `admin` user account, create additional users and add them to groups. You may follow these instructions:

1. Go to Keycloak admin console using the following url: `keycloak.<your domainSuffix>`
2. Click on `Administration Console`
3. Login with username: `admin` and the password `<otomi.adminPassword>` provided in your values.
4. Select the `Otomi` realm
5. Click on `Users` then `Add user` 
6. Fill in a user name in the Username field
7. Fill in your email address in the Email field
8. Select the `otomi-admin` group
9. Click on `Save`
10. Click on the `Credentials` tab and then fill in a password for this user in the `Password` and `Password Confirmation` fields
11. Click on `Set Password`

You can also create users and add them to the `team-admin` group. When you create a team, Otomi will automatically create a new group for the team, called `team-teamname`.
