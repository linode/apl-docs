---
slug: lab-3
title: Create a private Git repo
sidebar_label: Create repo
---

As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, Otomi has you covered. Otomi includes a complete self-hosted Git solution called Gitea.

As a team member, you can create and manage your own repositories.

## Create a private repository

In the apps section in Otomi console, you'll see an app called Gitea. Click on it.

![kubecfg](../../img/team-app-gitea.png)

Now follow these steps:

- Click on `Sign In` with OpenID

![kubecfg](../../img/gitea-openid.png)

- Click on `+ New Repository`

![kubecfg](../../img/new-gitea-repo.png)

- Fill in a Repository Name
- Optional: Enable `Initialize Repository`
- Optional: Make Repository Private
- Click on `Create Repository`

Your repo is now ready to be used!

![kubecfg](../../img/new-gitea-repo-ready.png)

:::info
Otomi does not create a group in Gitea that contains all the team members. Team members first have to sign in to Gitea (using OpenID), after which they are automatically added to the correct team.
:::
