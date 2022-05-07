---
slug: apps/argocd
title: Working with Argo CD
sidebar_label: Argo CD
---

## Introduction

Argo CD is configured by Otomi to use the SSO provided by keycloak, and maps otomi groups to Argo CD roles:

- Group otomi-admin is made super admin within ArgoCD.
- Group team-admin has access to, and is admin of all team projects.
- Team members are only allowed access to, and administer their own projects.

When Gitea is enabled (default), teams will each be given a git repo named `team-$teamId`, for which Argo CD is configured access. All that is left to do is for a team-admin (or team member with self-service rights) to fill their repo with intended state, commit, and automation takes care of the rest.
