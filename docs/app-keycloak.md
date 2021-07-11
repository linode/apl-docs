---
slug: apps/keycloak
title: Working with KeyCloak
sidebar_label: KeyCloak
---

KeyCloak is used as an identity broker for all Otomi integrated applications. The login page for Otomi is a customized KeyCloak login page. After a login (using an external Identity Provider), KeyCloak is configured with mappers that normalize incoming identities from the IDP to have a predictable format and list of groups (OIDC, JWT) to be used by Otomi applications.

By default KeyCloak is configured with 3 roles:

- `otomi-admin`: admin role for all platform configuration and core applications
- `team-admin`: admin role for teams (create teams, delete teams and modify team configuration)
- `team-<team-name>`: group role per team

Teams can use KeyCloak to implement SSO for a service. This only allows the members of the team-group to access the application. KeyCloak in Otomi is not configured to be used for SSO for business applications (eg. roles that are not configured and managed by Otomi in KeyCloak).

In case there is a requirement to use KeyCloak for business applications, the shared namespace may be used to deploy an additional KeyCloak instance (to be managed by the customer). The shared namespace supports KeyCloak to be accessible from all team-namespaces (controlled by network policies).
