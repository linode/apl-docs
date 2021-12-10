---
slug: sre/known-issues/harbor
title: 'Known Issues: Harbor'
sidebar_label: 'Harbor'
---

When working with Harbor you can expect to run into the following issues:

## Docker login

Unfortunately Harbor has not yet delivered a user friendly mechanism for users to interface with their registry via docker cli. To use docker cli one has to login with the registry EVERY time before using the cli. At the same time this fails when one is not logged into the Harbor dashboard beforehand. In order to login without issues one has to follow these steps:

- ONLY ONCE: get the cli secret from the Harbor dashboard (via User Profile).
- refresh Harbor dashboard web view (this will refresh the OIDC auth token)
- docker login using the cli secret as password: `docker login harbor.<cluster-domain> -u < User_Name > -p <CLI secret>`
- do your docker pull/push etc within the token TTL window (60 secs)

Usually this is not a problem as team users don't pull or push these images directly. We are working on solving this, and expect to have a fix soon.

## OIDC: conflicting user

**Problem:**

Error while logging in to harbor with OIDC: `Conflict, the user with same username or email has been onboarded.`.

**Cause:**

By redeploing keycloak the same user gets a new `sub` claim in `openid` scope. Harbor uses `sub` and `iss` claims in order to match them to a user from its database (see: `subiss` column at `oidc_user` table in `registry` database). If the same user identifies with a new sub then harbor tries to create a new entry in the `harbor_user` database table and it fails on the username column uniqueness constraint.

**Solution:**

Please check up on this link when this problem occurs, because a fix might already be released: [goharbor/harbor#13674](https://github.com/goharbor/harbor/issues/13674). If so, please create a PR to fix this in the [otomi-core](https://github.com/redkubes/otomi-core) repo, or create an issue there. Otherwise continue:

Connect to the database service

```
kh exec harbor-database-0 -it -- psql -U postgres
```

Select the `registry` database

```sql
\c registry
```

Find out the `<user_id>`

```sql
SELECT user_id FROM harbor_user WHERE username = '<user name>';
```

Remove the user from the database

```sql
DELETE FROM oidc_user WHERE user_id = <userid>;
DELETE FROM harbor_user WHERE user_id = <userid>;
```

Exit psql

```sql
\q
```

Try to login once again and observe that you are asked to confirm your username.

## Pod multi-attach error

**Problem**

Kubernetes cannot schedule the `harbor-harbor-registry` Pod.

**Cause**

Multi-Attach error occurs for persistent volumes that support only one writer at a time.

**Solution**

Delete an existing harbor registry replicaset. Note that this operation makes registry temporarely unavailable.
