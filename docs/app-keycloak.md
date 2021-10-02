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

## Use Keycloak as an IDP

When you did not provide `oidc` in your values to configure an external identity provider, then you need to configure Keycloak manually and create the required users, groups and roles.

After installation, sign in to the Keycloak administration console and create a role, group and user called `otomi-admin` and then map the role to the group and add the `otomi-admin` user to the group. Then additionally create other groups and roles for the `team-admin` role and teams. Follow this instruction:

1. Go to Keycloak admin console using the following url: `keycloak.<your domainSuffix>`
2. Click on `Administration Console`
3. Login with username: `admin` and the password `<otomi.adminPassword>` provided in your values. 
4. Click on `Roles` and then `Add Role`
5. Fill in `otomi-admin` in the `Role Name` and then click on `Save` 
6. Click on `Groups` and then click `New`
7. Fill in `otomi-admin` in `Name` field and click on `Save`
8. In the settings of the otomi-admin group, click on `Role Mappings`
9. Select `otomi-admin` from the `Available Roles` and then click on `Add selected`. Then add `admin` role the same way. 
10. Click on `Users` then `Add user` 
11. Fill in the name `otomi-admin` in username field 
12. Fill in an email address for the user in the `Email` field (using email addresses for users is mandatory to be able to login to other otomi apps) 
13. You can optionally fill in the first and last name of the user 
14. Click on the `Credentials` tab and then fill in a password for this user in teh `Password` and `Password Confirmation` fields
15. Click on `Save` 
16. Go to user settings then click on the `Groups` tab 
17. Select `otomi-admin` then select `Join`

### Create other users and groups

Any user that is now added to the otomi-admin group will have the admin role. 

Repeat the same above instructions to create a group called `team-admin` which has a role `team-admin`.  You can also create more users and groups for [Teams](/docs/console/teams) in Otomi. When you create a Team, create a role and group based on the following convetion: `team-<team name>`. Then map the role to that group and add (team) users to the group.