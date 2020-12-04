---
slug: known-issues/gke-timeout
title: 'Known issues: GKE timeout'
sidebar_label: GKE timeout
---

## Observation

Sometimes the otomi cli will time out when operating on a Google cluster.

## Cause

This happens when the containerized kubectl binary wants to refresh an access token, but it can't find the binary that was registered to do so in the otomi docker container.

## Solution

Retry the command. Before every invocation with the containerized `kubectl` binary, otomi cli first runs `kubectl version` with the local binary to invoke a token refresh, resulting in an up-to-date config to mount.

## Background

The otomi cli is a docker container with all the binaries it needs to deploy to these clusters. When running a command the local cloud configs are mounted. These configs may contain configuration for token refresh mechanisms, including the name of a binary to execute with certain parameters. This makes it possible to include the binaries in the image, and make them available via the known `$PATH`.

However, Google Cloud SDK breaks with that approach, by tightly coupling a hard path to the local gcloud binary. Sample user section from `$KUBECONFIG`:

```yaml
- name: gke_otomi-cloud_europe-west4_otomi-gke-demo
  user:
    auth-provider:
      config:
        access-token: xxxxxxxxx
        cmd-args: config config-helper --format=json
        cmd-path: /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/gcloud
        expiry: '2020-10-29T02:15:37Z'
        expiry-key: '{.credential.token_expiry}'
        token-key: '{.credential.access_token}'
      name: gcp
```

This will not work with containerization unfortunately. We also can't predict the path on the users host computer to this binary, so we have to hope for Google to fix this some day. They are not inclined to do so it seems:

https://issuetracker.google.com/issues/171493249

Maybe they will start to see the importance of this after getting more feedback ;)
