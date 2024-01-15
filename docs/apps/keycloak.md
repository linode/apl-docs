---
slug: keycloak
title: Keycloak
sidebar_label: Keycloak
---

The SSO login page for Otomi is served by Keycloak. It is used as an identity broker or provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications.

Keycloak is automatically configured with 2 roles:

- `otomi-admin`: super admin role for all platform configuration and core applications
- `team-admin`: team admin role to manage teams and users

A role `team-<name>` needs to be created for each additional team.

Group (team) membership is reflected in the user's 'groups' claim. When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided groups and roles claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the "Authenticate with Single Sign On" checkbox. This then limits the application access to only allow the members of the team.

When there are different requirements to use Keycloak for business applications, Keycloak's designated "master" and "otomi" realms may not be used, and an additional realm needs to be created. We refer to the keycloak docs for any custom configuration targeting business applications.

## Instructions

### Sign in

1. Open the Keycloak app
2. Click on `Administration Console`
3. Login with admin credentials (using `otomi-admin` user and password provided in the installer log or the `otomi.adminPassword` provided in the initial values)

### Create a role and group in Keycloak

The roles and groups for Otomi teams are prefixed
with `team-`. For example, we create each a role
and group `team-labs` for assigning users to the
team created in the Otomi console.

1. Select the `otomi` realm
2. Click on `Realm roles`, then `Create role`
3. Fill in the role name
4. Click on `Save`
5. Click on `Groups`, then `Create group`
6. Fill in the group name and click `Save`
7. Click on the new group on the list
8. Select the `Role mapping` tab
9. Click on `Assign role`
10. Check the role from above and click `Assign`

### Create a user in Keycloak

To create users in Keycloak, follow these steps:

1. Select the `otomi` realm
2. Click on `Users`, then `Add user`
3. Fill in a user name in the `Username` field
4. Fill in your email address in the `Email` field
   (the address is required to be unique)
5. Select `Email verified`
6. Click `Join Groups`
7. Add the user to the required group (Team)
8. Click `Create`
9. Choose the `Credentials` tab and then `Set password`
10. Fill in a password
11. Optional: Make the password `Temporary`. This requires the user to change the password at the first login
12. Click on `Save`
