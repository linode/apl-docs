---
slug: apps/gitea
title: Working with Gitea
sidebar_label: Gitea
---

Gitea is a community managed lightweight code hosting solution written in Go.

Because Otomi uses Drone to deploy changes to the values repo, it needs a git hosting solution. When no source control is configured, Otomi will deploy Gitea for Drone to target as a git repo.

Gitea may be used for other purposes, and is especially useful in combination with Drone as a CI/CD solution. Just like Otomi uses it ;)
