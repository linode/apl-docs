---
slug: deployment
title: Deployment
---

Now that you have the repo values configured, you can do a bootstrap to get the image for your target cluster:

```bash
export CLOUD=google && CLUSTER=demo
otomi bootstrap
```

You can now do a diff to see what will be deployed:

```bash
otomi diff
```

You can always target a single chart like this:

```bash
otomi (diff|apply|sync|template) -l name=prometheus-operator
```

(For a list of supported flags to use those subcommands, we defer to the [helmfile documentation](https://github.com/roboll/helmfile), as those are deferred to the helmfile cli.)

If all looks ok, go ahead and do the initial deployment:

```bash
otomi deploy
```

## GitOps syncing (optional)

After initial deployment, to enable Continuous Deployment of this repo from within Drone (running in the cluster), for each cluster:

1. Login to Drone and activate the values repo to sync with: https://drone.$CLUSTER_DOMAIN
2. Choose the drone pipeline file to use: `.env/clouds/(azure|google|aws|onprem)/$CLUSTER/.drone.yml` and press save.

Sync is now live, and every git change is applied by each cluster's Drone.

## Commit values

When you are ready you can do the initial commit of the values:

```bash
otomi commit
```

This will also trigger a deployment of any configured Drone (if you followed the previous step), so you can see if they are working. Of course nothing should get deployed as no changes were made since your manual deployment.
