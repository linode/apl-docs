---
slug: harbor
title: Harbor
sidebar_label: Harbor
---

## About

Harbor is an open-source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted. Harbor delivers compliance, performance, and interoperability to help you consistently and securely manage artifacts across cloud-native compute platforms like Kubernetes. (source: https://goharbor.io/)

APL automates the following Harbor maintanace tasks:

- Creating a project in Harbor for each team.

- Creating a bot-account for each team.

- Creating a Kubernetes pull secret in the team namespace to enable pulling of images out of the local registry.

- Creating a Kubernetes push secret in the team namespace that can be downloaded (if enabled) by team members to push images to a private repo.

- Creating a Kubernetes push secret in the team namespace that is used by the Build self-service feature to push images to Harbor.

## Known issues

### OIDC: conflicting user

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

### Pod multi-attach error

**Problem**

Kubernetes cannot schedule the `harbor-harbor-registry` Pod.

**Cause**

Multi-Attach error occurs for persistent volumes that support only one writer at a time.

**Solution**

Delete an existing harbor registry replicaset. Note that this operation makes registry temporarely unavailable.
