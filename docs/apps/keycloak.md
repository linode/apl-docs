---
slug: keycloak
title: Keycloak
sidebar_label: Keycloak
---

The SSO login page for Otomi is served by Keycloak. It is used as an identity broker or provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications.

Keycloak is automatically configured with 3 roles:

- `otomi-admin`: super admin role for all platform configuration and core applications
- `team-admin`: team admin role to manage teams and users
- `team`: team role for team members

Group (team) membership is reflected in the user's 'groups' claim. When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided groups and roles claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the "Authenticate with Single Sign On" checkbox. This then limits the application access to only allow the members of the team.

When there are different requirements to use Keycloak for business applications, Keycloak's designated "master" and "otomi" realms may not be used, and an additional realm needs to be created. We refer to the keycloak docs for any custom configuration targeting business applications.

## Instructions

### Create a user in Keycloak

To create users in Keycloak, follow these steps:

1. Open the Keycloak app
2. Click on `Administration Console`
3. Login with admin credentials (using `otomi-admin` user and password provided in the installer log or the `otomi.adminPassword` provided in the initial values)
4. Select the `Otomi` realm
5. Click on `Users` then `Add user`
6. Fill in a user name in the `Username` field
7. Fill in your email address in the `Email` field
8. Select `Email verified`
9. Click `Join Groups`
10. Add the user to the required group (Team)
11. Click `Create`
12. Choose the `Credentials` tab and then `Set password`
13. Fill in a password
14. Optional: Make te password `Temporary`. This requires the user to change the password at the first login
15. Click on "Save"
16. Click `Save password`
