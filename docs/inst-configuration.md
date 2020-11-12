---
slug: configuration
title: Configuration & deployment
---

Assuming the setup steps are completed, you need to now configure the Otomi values repository. This repo is the source configuration for Otomi Container Platform. It contains drone pipeline configurations for each cluster, and each running drone will listen to updates of these values targeting the cluster it is running on. Any updated values might result in different cluster state resources, which will be applied by the Otomi image.

## 1. Configuration

Configuration can be done most easily through the Otomi Console. So if you have a license please refer to the [Otomi Console](console) documentation.

Not all configuration is (yet) exposed through the console however, so please look at the values repo's `env/*` files to edit the configuration files.

Important things to note:

- Every configuration file can have a `secrets.*.yaml` counterpart, but these are optional.
- A json schema and vscode settings are imported by the bootrap (in `.vscode/*`), so you will have automatic linting and hinting for the configuration when vscode is used.
- If `.sops.yaml` is correctly configured then automatic de-/en-cryption will also be performed when in vscode and editing a `secrets.*.yaml` file.

Configuration that is currently managed by the console:

1. Team settings: `env/teams.yaml`
2. Team secrets: `env/teams/secrets.$TEAM.yaml`
3. Team services: `env/$CLOUD/$CLUSTER/services.$TEAM.yaml`

Configuration not (yet) managed by the console:

1. Cluster config: `env/clusters.yaml` and `env/$CLOUD/$CLUSTER.sh`
2. Otomi settings: `env/settings.yaml` and `env/secrets.settings.yaml`
3. Charts config: `env/charts/$CHART.yaml` and `env/charts/secrets.$CHART.yaml`
4. Cloud overrides: `env/$CLOUD/overrides.$CLOUD.yaml` and `env/secrets.overrides.$CLOUD.yaml`
5. Cluster overrides: `env/$CLOUD/$CLUSTER/overrides.$CLOUD-$CLUSTER.yaml` and `env/$CLOUD/$CLUSTER/secrets.overrides.$CLOUD-$CLUSTER.yaml`

Please follow the guidance of the yaml hinting, as it has all the descriptions and example values you need to operate on these files.

:::info Otomi YAML hinting only works in vscode

VSCode automatically loads the '.vscode/values-schema.yaml' schema provided. Please inspect it or wire it up manually when using another editor.

:::

:::caution Make sure to have working dns management credentials

The most important part to get the platform deployed is having correctly set credentials for dns management. Without it no domains nor ip addresses can be registered, and certificate validation will fail.

:::

If you wish to be sure of your changes, you can always do a `git diff`. When you chose to use encryption and have correctly followed the corresponding instructions, then you should see a diff with the unencrypted values. That is, if you modified any ;)

## 2. Validation

When you are done with the configuration you can validate the results:

```bash
otomi validate
```

If you have made an error in the format of the values this will be reported.

## 3. Deployment

Now that you have the repo values configured, you can do the initial deployment:

```bash
# choose your CLOUD & CLUSTER and bootstrap the environment
export CLOUD=azure && CLUSTER=dev
otomi bootstrap
# deploy from the bootstrapped image version
otomi deploy
```

## 4. GitOps syncing

After initial deployment, to enable Continuous Deployment of this repo from within Drone (running in the cluster), for each cluster:

1. Login to Drone and activate the values repo to sync with: https://drone.$CLUSTER_DOMAIN
2. Choose the drone pipeline file to use: `.env/clouds/(azure|google|aws|onprem)/$CLUSTER/.drone.yml` and press save.

Sync is now live, and every git change is applied by each cluster's Drone.

## 5. Commit values

When you are ready you can do the initial commit of the values:

```bash
otomi commit
```

This will also trigger a deployment of any configured Drone, so you can see if they are working. Of course nothing should get deployed as no changes were made since your manual deployment.