---
slug: apps/argocd
title: Working with Argo CD
sidebar_label: Argo CD
---

## Introduction

Argo CD is configured by Otomi to use the SSO provided by keycloak, and maps Otomi groups to Argo CD roles:

- Group otomi-admin is made super admin within ArgoCD.
- Group team-admin has access to, and is admin of all team projects.
- Team members are only allowed access to, and administer their own projects.

Teams will be be automatically given a git repository in Gitea named `team-$teamId-argocd`, and Argo CD is automatically configured to access the repository and sync. All that is left to do is for a team-admin (or team member with self-service rights) to fill their repository with intended state, commit, and automation will take care of the rest.
