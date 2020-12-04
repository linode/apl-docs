---
slug: known-issues/harbor
title: 'Known Issues: Harbor'
sidebar_label: 'Harbor'
---

When working with Harbor you can expect to run into the following issues:

## OIDC: conflicting user

**Problem:**

Error while logging in to harbor with OIDC: `Conflict, the user with same username or email has been onboarded.`.

**Cause:**

By redeploing keycloak the same user gets a new `sub` claim in `openid` scope. Harbor uses `sub` and `iss` claims in order to match them to a user from its database (see: `subiss` column at `oidc_user` table in `registry` database). If the same user identifies with a new sub then harbor tries to create a new entry in the `harbor_user` database table and it fails on the username column uniqueness constraint.

**Solution:**

Please check up on this link when this problem occurs, because a fix might already be released: [goharbor/harbor#13674](https://github.com/goharbor/harbor/issues/13674). If so, please create a PR to fix this in the [otomi-core](https://github.com/redkubes/otomi-core) repo, or create an issue there. Otherwise continue:

Connect to the database service

```
kh exec harbor-harbor-database-0 -it -- psql -U postgres
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

```
\q
```

Try to login once again and observe that you are asked to confirm your username.

**Note:** otomi-core creates a harbor project for each team. Each harbor project is owned by the harbor admin user. Users get access to projects by group membership provided via the groups claim in the openid scope. It may happen that a user owns another project or it is assigned directly to a project. We do not support this and do not provide known-issues guide for that case.
