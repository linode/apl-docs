---
slug: register-repos
title: Register code repositories
sidebar_label: Register Code Repositories
---

As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, you can use the integrated Git service.

As a team member, you can create and manage your own repositories.

:::info
Team members first have to sign in to Gitea (using OpenID), after which they are automatically added to the correct team.
:::

:::info
The `otomi-admin` account is unable to login with OpenID, this account needs to login with the user/password login form.
:::

In the labs we'll be using a Team called `labs` and a user called `labs-user@example.com`.

## Using a Git client

Gitea only supports HTTPS for Git authentication. To connect to Git using HTTPS you'll first need to add a password to your account in Gitea:

1. Sign in to Gitea using OpenID.

2. Click on your account (top right) and then click `Settings`.

3. Fill in a password in the `Account` tab.

After adding a password, you can now authenticate using your username (labs-user) and the password created in Gitea.

## Create the private repository

In the apps section in the console, you'll see an app called Gitea. Click on it.

![kubecfg](../../img/team-app-gitea.png)

Now follow these steps:

1. Click on `Sign In` with OpenID.

![kubecfg](../../img/gitea-openid.png)

2. Click on `+ New Repository`

![kubecfg](../../img/new-gitea-repo.png)

3. Add the name `blue` for the repository.

4. Select `Make Repository Private`.

5. Select `Initialize Repository`.

6. Click on `Create Repository`.

Your repo is now ready to be used!

![kubecfg](../../img/new-gitea-repo-ready.png)

Add the following 2 files to the repository:

Add `Dockerfile`:

```Dockerfile
FROM nginxinc/nginx-unprivileged:stable
COPY blue.html /usr/share/nginx/html/index.html
EXPOSE 8080
```

Add `blue.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Sample Deployment</title>
    <style>
      body {
        color: #ffffff;
        background-color: blue;
        font-family: Arial, sans-serif;
        font-size: 14px;
      }
      h1 {
        font-size: 500%;
        font-weight: normal;
        margin-bottom: 0;
      }
      h2 {
        font-size: 200%;
        font-weight: normal;
        margin-bottom: 0;
      }
      .centered-text {
          text-align: center;
      }
    </style>
  </head>
  <body>
  <div class="centered-text">
      <h1>Welcome to Blue</h1>
  </div>
  </body>
</html>
```

In the following labs we are going to use the `blue` repository, but we'll also need a `green` repository. 
Create the `green` repository and add the 2 files, but change `blue` into `green`:

1. Click on `+ New Repository`.

2. Add the name `green` for the repository.

3. Optional: Enable `Initialize Repository`.

4. Make Repository Private.

5. Click on `Create Repository`.

Add the following 2 files to the repository:

Add `Dockerfile`:

```Dockerfile
FROM nginxinc/nginx-unprivileged:stable
COPY green.html /usr/share/nginx/html/index.html
EXPOSE 8080
```

Add `green.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Sample Deployment</title>
    <style>
      body {
        color: #ffffff;
        background-color: green;
        font-family: Arial, sans-serif;
        font-size: 14px;
      }
      h1 {
        font-size: 500%;
        font-weight: normal;
        margin-bottom: 0;
      }
      h2 {
        font-size: 200%;
        font-weight: normal;
        margin-bottom: 0;
      }
      .centered-text {
          text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="centered-text">
      <h1>Welcome to Green</h1>
    </div>
  </body>
</html>
```
