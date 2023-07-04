---
slug: argocd
title: ArgoCD
sidebar_label: ArgoCD
---

ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. ArgoCD is configured by Otomi to use the SSO provided by keycloak, and maps otomi groups to ArgoCD roles. The otomi-admin role is made super admin within ArgoCD. The team-admin role has access to ArgoCD and is admin of all team projects. Members of team roles are only allowed to administer their own projects. All Teams will automatically get access to a Git repo, and ArgoCD is configured to listen to this repo. All a team has to do is to fill their repo with intended state, commit, and automation takes care of the rest.

Teams will be be automatically given a git repository in Gitea named `team-$teamId-argocd`, and ArgoCD is automatically configured to access the repository and sync. All that is left to do is for a team-admin (or team member with self-service rights) to fill their repository with intended state and commit.

ArgoCD is configured to use the SSO provided by keycloak, and maps Otomi groups to ArgoCD roles:

- Group otomi-admin is made super admin within ArgoCD.
- Group team-admin has access to, and is admin of all team projects.
- Team members are only allowed access to, and administer their own projects.

## Configuration values