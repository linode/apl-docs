---
slug: user-management
title: Platform - User Management
sidebar_label: User Management
---

:::info
User Management will only be available when Keycloak is configured as the Identity Provider (default). When OIDC is configured, the User Management section will not be available.
:::

:::info
User Management can only be used to manage the users of the platform instance (single cluster).
:::

## About User Management

What you need to know about the User Management feature:

- Only Platform admins can create or delete users in the platform view.
- A Platform admins can assign users the role of `platform admin`, `Team admin` or `Team member`.
- Users can be created without assigning them directly to a Team.
- Team admins can assign users the role of Team member of the Team they administer.
- Team admins can not remove themselves from Teams they administer (this can only be done by the platform admin).
- Team admins can not remove other Team admins from their teams (this can only be done by the platform admin).
- Team admins can not add Platform admins to their Teams.
- Team members are not able to see the User Management section in the menu.
- Users are stored encrypted in the `values` repository `env/secrets.users.yaml` file.
- The initial login credentials of a new User can be copied from the platform view user management page by Platform admins only.
- Users’ passwords are not stored in the values repo (except initial password).
- A password reset can only be performed by a Platform admin. Password restest need to be done in the Keycloak app using the `otomi-admin` credentials. As an alternative Platform admin can also re-create a user.
- The User management feature follows the Single Source of Truth principle by referencing the `env/secrets.users.yaml` file in the `values` repository. If a new user is created directly in Keycloak, this user will be deleted at the next commit.
- Kubernetes secrets are used to pass user data between Pods, but there is a limit for user-defined variables. The maximum size of a user-defined environment variable is 32,767 characters. This limits the amount of users that can be created to around 200.

## Creating Users

1. Select the `Platform` view in the top bar.

2. Click on `User Management` in the left menu.

3. Click on `Create User`.

4. Fill in a unique `email` address and the first and last name of the new user.

5. Add the new user to the required groups:

- Select `Is platform admin` to add the user to the `Platform Administrators` group.
- Select `Is team admin` to add the user to the `Team Administrators` group. When the user becomes a Team admin, optionally also select the Teams the user is going to administer.
- Select a `Team` to add the user to the `team members` group.

6. Click `Submit`.

7. Click `Deploy Changes`.

8. In the list of Users, click on the `copy initial credentials to clipboard` icon.

9. Send the initial credentials to the new user.

The new user will be prompted to change the initial password at first login.

The following example shows how to create a user account and assign the user the `team-admin` role for the Team `Demo`:

![User Management](../../img/create-user.png)

## Assinging Users to Teams

1. Select the `Team` view in the top bar and the Team that you would like to administer.

2. Search for the user you would like to make a member.

3. Select the `Assign to team <team-name>` checkbox.

4. Click on `Update Users`.

5. Click on `Deploy Changes`.





