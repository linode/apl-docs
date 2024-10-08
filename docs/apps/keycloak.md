---
slug: keycloak
title: Keycloak
sidebar_label: Keycloak
---

## About

The SSO login page for all platform services (like the Console) is served by Keycloak. It is used as an identity broker or provider for all integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by integrated applications.

Keycloak is automatically configured with 3 roles:

- `platform-admins`: super admin role for all platform configuration and core applications.
 
- `team-admins`: team admin role to manage teams and users.
 
- `team-members`: team role for team members.

Group (team) membership is reflected in the user's 'groups' claim. When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided groups and roles claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the "Authenticate with Single Sign On" checkbox. This then limits the application access to only allow the members of the team.

When there are different requirements to use Keycloak for business applications, Keycloak's designated "master" and "otomi" realms may not be used, and an additional realm needs to be created. We refer to the keycloak docs for any custom configuration targeting business applications.
