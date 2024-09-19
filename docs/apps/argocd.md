---
slug: argocd
title: Argo CD
sidebar_label: Argo CD
---

## About

Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. Argo CD is configured by APL to use the SSO provided by keycloak, and maps APL groups to Argo CD roles. The `otomi-admin` role is made super admin within Argo CD. The team-admin role has access to Argo CD and is admin of all team projects. Members of team roles are only allowed to administer their own projects. All Teams will automatically get access to a Git repo, and Argo CD is configured to listen to this repo. All a team has to do is to fill their repo with intended state, commit, and automation takes care of the rest.

Teams will be be automatically given a git repository in Gitea named `team-$teamId-argocd`, and Argo CD is automatically configured to access the repository and sync. All that is left to do is for a team-admin (or team member with self-service rights) to fill their repository with intended state and commit.

Argo CD is configured to use the SSO provided by keycloak, and maps APL groups to Argo CD roles:

- Group `otomi-admin` is made super admin within Argo CD

- Group team-admin has access to, and is admin of all team projects

- Team members are only allowed access to, and administer their own projects

Teams will be be automatically given a git repository in Gitea named `team-$teamId-argocd`, and Argo CD is automatically configured to access the repository and sync. All that is left to do is Teams to fill their repository with the intended state (manifests) and commit.

## Known issues

**Problem:**

Argo CD shows the following sync error: `invalid memory address or nil pointer dereference`.

**Cause:**

See the issue on [Github](https://github.com/argoproj/argo-cd/issues/14098)

**Solution:**

Delete the Argo CD Application Controller Pod