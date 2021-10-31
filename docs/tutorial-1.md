---
slug: tutorials/build-tag-push
title: Build, tag and push an image to Harbor
sidebar_label: Push an image to harbor
---

In this tutorial, you are going to:

1. Build an image and push it to Harbor in Otomi
2. Create a Kubernetes Deployment and Service
3. Publicly expose the Hello World app using Otomi

## Build an image and push it to Harbor

When you created a Team in Otomi, Otomi has automatically created a project for the team in Harbor. In this tutorial we'll assume you have created a team called `demo`.

### Create a robot account in Harbor

- Go to `https://harbor.<your domainSuffix>`
- Click 'Login with OIDC Provider'
- In projects page, click on `team-demo`
- on the team-demo page, click on `Robot Accounts`
- Click on `New Robot Account`
- Set `Name=hello`, `Expiration Time=Never` and then click on `Add`
- Copy the generated Token

### Download the demo application used in this tutorial

Clone the repo used for this tutorial:

```
git clone https://github.com/redkubes/nodejs-helloworld.git
```

### Login to Harbor

Login with username `robot$team-demo+hello` & password: `token`

```
docker login -u 'robot$team-demo+hello' -w '$token' harbor.your-domain.com
```

### Build, tag and push the image

Build and tag the image:

```
docker build -t harbor.your-domain.com/team-demo/hello-world .
```

Push the image to Harbor:

```
docker push harbor.your-domain.com/hello-world
```

Now go to the team-demo project and verify that the hello-world repository is there. 