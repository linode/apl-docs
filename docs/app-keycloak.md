---
slug: apps/keycloak
title: Working with Keycloak
sidebar_label: Keycloak
---

Keycloak is used as an identity broker for all Otomi integrated applications. The login page for Otomi is a customized KeyCloak login page. After a sign in using an external Identity Provider, Keycloak is configured with mappers that normalize incoming identities from the IDP to have a predictable format and list of groups (OIDC, JWT) to be used by Otomi applications.

When configured with OIDC, Keycloak is automatically configured with 3 roles:

- `otomi-admin`: admin role for all platform configuration and core applications
- `team-admin`: admin role for teams (create teams, delete teams and modify team configuration)
- `team-<team-name>`: group role per team

Teams can use Keycloak to implement SSO for a service. This only allows the members of the team-group to access the application. KeyCloak in Otomi is not configured to be used for SSO for business applications (eg. roles that are not configured and managed by Otomi in KeyCloak).

In case there is a requirement to use Keycloak for business applications, the shared namespace may be used to deploy an additional KeyCloak instance (to be managed by the customer). The shared namespace supports Keycloak to be accessible from all team-namespaces (controlled by network policies).

## Create users

When you did not provide `oidc` in your values to configure an external identity provider, then you need to manually add new users and add them to groups.

After installation, sign in to the Keycloak administration console with the default `admin` user account, create additional users and them to groups. Follow this instruction:

1. Go to Keycloak admin console using the following url: `keycloak.<your domainSuffix>`
2. Click on `Administration Console`
3. Login with username: `admin` and the password `<otomi.adminPassword>` provided in your values.
4. Select the `Otomi` realm
5. Click on `Users` then `Add user` 
6. Fill in a user namer in the Username field and click on `Save`
7. Click on the `Credentials` tab and then fill in a password for this user in the `Password` and `Password Confirmation` fields
8. Click on `Set Password` 
9. Go to the `Groups` tab 
10. Select the desired group and then select `Join`