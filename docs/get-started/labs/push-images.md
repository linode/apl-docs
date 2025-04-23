---
slug: push-images
title: Push images to Harbor
sidebar_label: Manually Push Images
---

:::info
For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (like Let's Encrypt using production certificate).
:::

## Login to Harbor

To be able to push images to Harbor, you'll need a robot account with push permissions. Teams are offered the option to download the Docker config for their team's private registry in Harbor. In the left menu you will see the option `Download DOCKERCFG`. Click on it to download the credentials.
:::info
To download the DOCKERCFG, enable this option in the team settings. See team settings for more information: [Platform - Teams](docs/for-ops/console/teams.md).
:::

![harbor-projects](../../img/download-dcfg.png)

When you have downloaded the docker config. Get the password from the config and paste it below, then run `docker login`:

```bash
docker login -u 'otomi-team-<team-name>-push' -p <password> harbor.<your-domain>
```

Build and tag your image:

```bash
docker build -t harbor.<your-domain>/team-<team-name>/<image-name>:<tag> <path to your Dockerfile>
```

Push the image to Harbor:

```bash
docker push harbor.<your-domain>/team-<team-name>/<image-name>:<tag>
```
