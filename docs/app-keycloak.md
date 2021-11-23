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

When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided `groups` and `roles` claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the "Authenticate with Single Sign On" checkbox. This then limits access the application to only allow the members of the team.

When there are different requirements to use Keycloak for business applications, Keycloak's designated "otomi" realm may _not_ be used, and an additional realm needs to be created. We refer to the [keycloak docs](https://www.keycloak.org/docs/latest/server_admin/index.html) for any custom configuration targeting business applications.
