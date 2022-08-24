---
slug: cli/working-with
title: Working with Otomi CLI
sidebar_label: Working with Otomi CLI
---

When you would like to:

- Create a new values repo locally and operate on a cluster
- Clone a cluster: copy a values repo, make modifications and deploy to new k8s context
- Edit values not yet under management by the console, such as chart settings
- Do local development

Then you will have to create/edit a local values repo and perform operations with the CLI. If you haven't yet, [install the Otomi CLI](/docs/cli/) first, and then follow the steps below.

At any time you may ask for an overview of the available commands and their options, so please don't hesitate to run `otomi help`. In order for any command to show more output use `-v` (or `-vvv` to get even more output).

## Bootstrap a values repo

Pick the scenario you are interested in:

### 1. Bootstrap a new (empty) values repo to deploy otomi with the CLI

Running:

```bash
export ENV_DIR=$PWD/otomi-values
otomi bootstrap
```

Will create a folder named `otomi-values` in your cwd which contains all the files necessary to start editing. The minimal values that need to be provided are found in `env/cluster.yaml`, but more may be configured to your liking. Any cluster operations afterwards expect a correct `cluster.k8sContext`, so be sure to set it.

Running `otomi validate-values` immediately afterwards will show you errors for the missing minimal values. So go ahead and fill them in. If you are using VSCode yaml hinting is active and can be invoked with CTRL-SPACE. Keep running `validate-values` until your input is correct.

### 2. Bootstrap the values from a values repo deployed by chart

Clone the `otomi/values` repository from `gitea.<your.domain>/otomi/values` to work with the values locally.

```bash
git clone https://gitea.<your.domain>/otomi/values.git otomi-values
cd otomi-values
```

:::note Are you using SOPS?

Then, for automatic en-/encryption, provide the credentials:

- Create and edit the secrets file in the `otomi-values` folder: `cp .secrets.sample .secrets`

Optionally, in order for VSCode to provide on the fly en-/encryption:

- Install the SOPS extention for VSCode (as is automatically suggested from the config provided)
- Source the secrets: `source .secrets` before opening the values project, so the plugin has access.

:::

Now continue with the next step.

## Bootstrap the repo locally

A local repo always needs to be bootstrapped at least once to have all it's working files in place. However, whenever the `otomi.version` value has changed, it's corresponding artifacts need to be pulled and unpacked again. It can never hurt to run the bootstrap procedure as it is fast and idempotent:

```bash
otomi bootstrap
```

This will make sure that the correct files are unpacked from the versioned Otomi container, and other necessary files are generated.

## Adjust the initial values

Go to the `$ENV_DIR/env/cluster.yaml` file, and fill in the following minimal required values:

```yaml
cluster:
    name: 'dev' # The name of your cluster
    k8sVersion: '1.22' # The Kubernetes version of the cluster
    provider: 'custom' # Use azure|aws|google|digitalocean|ovh|vultr|custom
```

## Validate changes (optional)

Validate the configuration after making changes:

```bash
otomi validate-values
```

When successful, the output will show: `Values validation SUCCESSFUL`

## Deploy changes

:::info Diff output is logged in stderr!

Helmfile decided to output diff information to stderr to circumvent template output pollution. Don't be worried to see such output prefixed with `error:`.

:::

Note: To see the diff in manifest output created by the changed values, run `otomi diff` first.

Now deploy changes with:

```bash
otomi apply
```

Note: Creating a team can take around 5 to 10 minutes to complete.

## Commit changes

Now commit your changes to the (otomi/values) GIT repository on the cluster to store the new desired state configuration.

```bash
otomi commit
```

When bringing your own git repo you will be asked to push the values as a last step yourself. (The myriad of git auth mechanisms out there we simply can't afford to support ;)

Lastly, after seeing the new values in your remote git repo, one thing remains: restarting the otomi-api container. Why? The otomi-api container needs to re-inflate itself with the new values, and otomi does not (yet) detect such changes. (The drone runner does, however, and will immediately apply the changes in the values to the cluster.)

:::caution

If the container does not get restarted and changes are deployed via the Otomi console, the api will run into a merge conflict and any user input will be lost.

:::

To restart the otomi-api containers:

```bash
kubectl -n otomi delete po -l app.kubernetes.io/name=otomi-api
```
