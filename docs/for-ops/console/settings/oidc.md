---
slug: oidc
title: Platform settings
sidebar_label: OIDC
---

## OIDC

:::note
OIDC settings will only be active when the `otomi.hasExternalIDP=true` flag is set during installation. This can also be set after installation in Settings/APL.
:::

The OIDC settings section offers configuration options to connect with an external Identity Provider (Bring Your Own IDP). This allows to map IDP group names to the following platform roles:

- APL admins (`adminGroupID`)
- Team admins (`teamAdminGroupID`)