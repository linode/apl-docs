---
slug: push-images
title: Push images to Harbor
sidebar_label: Manually Push Images
---

:::info
For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (Let's Encrypt production certificates).
:::

## Login to Harbor

To be able to push images to Harbor, you'll need a robot account with push permissions. Teams are offered the option to download the Docker config for their Team's private registry in Harbor. In the left menu you will see the option `Download DOCKERCFG`. Click on it to download the credentials.

:::info
The Download the DOCKERCFG feature needs to be enabled by a platform admin!
:::

![harbor-projects](../../img/download-dcfg.png)

When you have downloaded the docker config, copy the file to your `.Docker` folder:

```bash
cp docker-team-labs.json $HOME/.Docker
```

And log in to the Harbor registry:

```bash
docker login harbor.<domain-of-your-cluster>
```

Build and tag your image:

```bash
docker build -t harbor.<your-domain>/team-<team-name>/<image-name>:<tag> <path to your Dockerfile>
```

Push the image to Harbor:

```bash
docker push harbor.<your-domain>/team-<team-name>/<image-name>:<tag>
```
