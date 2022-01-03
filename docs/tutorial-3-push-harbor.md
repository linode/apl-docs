---
slug: tutorials/build-tag-push
title: Build, tag and push an image to Harbor
sidebar_label: Push an image to harbor
---

:::note

When Otomi is installed with minimal values, make sure to download the CA.crt, add it to your Keychain and restart Docker. See [here](/docs/installation/post-install/#step-4-add-the-auto-generated-ca-to-your-keychain) for more information 

:::

In this tutorial, you are going to:

1. Build an image and push it to Harbor in Otomi
2. Create a Kubernetes Deployment and Service
3. Publicly expose the Hello World app using Otomi

When you created a Team in Otomi, Otomi has automatically created a project for the team in Harbor. In this tutorial we'll assume you have created a team called `demo`.

### Create a robot account in Harbor

:::note

Robot accounts for teams can only be created by users with the `otomi-admin` role

:::

- Go to `https://harbor.<your domainSuffix>`
- Click 'Login with OIDC Provider'
- Fill in your user name and click save
- Under `Administration`, click `Robot Accounts`
- Click on `+ New Robot account`
- Provide a name for the new robot account: `team-demo-push`
- Set an Expiration time
- Select `team-demo` and optionally change the permissions
- Click `Add`
- Copy the generated token


### Download the demo application used in this tutorial

Clone the repo used for this tutorial:

```bash
git clone https://github.com/redkubes/nodejs-helloworld.git
```

### Login to Harbor

Login with username `otomi-team-demo-push` & password: `token`

```bash
docker login -u 'otomi-team-demo-push' -p '$token' harbor.your-domain.com
```

### Build, tag and push the image

Build and tag the image:

```bash
docker build -t harbor.your-domain.com/team-demo/hello-world:latest .
```

Push the image to Harbor:

```bash
docker push harbor.your-domain.com/team-demo/hello-world:latest
```

Now go to the team-demo project and verify that the hello-world repository has been created.
