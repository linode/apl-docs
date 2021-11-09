---
slug: console/settings/oidc
title: OIDC
---

The OIDC settings section offers configuration options to connect with an external Identity Provider (Bring Your Own IdP). This allows to map IdP group names to the following Otomi roles:

- Otomi admins (`adminGroupID`)
- Team admins (`teamAdminGroupID`)

Some settings are left in case Keycloak is not needed (it is heavy, and small teams might not need authorization), and are used by Grafana only:

- Auth url
- Api url
- Token url
