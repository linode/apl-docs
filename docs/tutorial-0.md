---
slug: tutorials/create-keycloak-users
title: Creating and managing users when using Keycloak as IDP
sidebar_label: Creating users in Keycloak
---

When you did not provide `oidc` in your values to configure an external identity provider, then you need to manually add new users and add them to groups.

In this tutorial, you are going to create a new user in Keycloak and add the user to a group.

## Create users

Sign in to the Keycloak administration console with the default `admin` user account, create additional users and add them to groups. You may follow these instructions:

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
