---
slug: installation/cli/
title: Install with CLI
---

:::note ATTENTION: This documentation is based on the old CLI

We will soon update the install with CLI section based on the [new CLI](/docs/cli/)

:::

## 1. Initialize a values repo

Otomi needs a git repo to store its configuration. We call it a **_values_** repo.

You can now bootstrap the versioned artifacts for aws/azure/google profile. In the following example values for azure

```bash
# initialize git repo
mkdir otomi-values && cd $_ && git init -b main .
# and get all the files
docker run --rm -e ENV_DIR=$PWD -v $PWD:$PWD otomi/core:latest bin/bootstrap.sh
# and source the aliases including the otomi cli
. bin/aliases
```

This will install the value files, but also the needed artifacts, such as the Otomi CLI. Lastly, it sources aliases you can use, such as the `otomi` cli (which is an alias to the imported `bin/otomi`).

## 2. Customize configuration

The essential otomi platform configurations are stored in `env/cluster.yaml`, `env/settings.yaml` and `env/secrets.settings.yaml` files. Inspect them and customize values to much your environment.

The environment variables are defined `env/.env` file, where:

- `K8S_CONTEXT` indicates a kubernetes context name to be used with otomi CLI

## 3. Configure credentials from a KMS (optional)

:::note No encryption needed?

If you don't need encryption straight away please continue to the next step

:::

Otomi will encrypt any `secrets.*.yaml` files with [sops](https://github.com/mozilla/sops), but only if it finds a `.sops.yaml` configuration file. (How to work with sops is not in scope of this documentation.)

In order to en-/decrypt the secrets in the values repo, the KMS configuration needs to be provided in `.sops.yaml`. Examples are provided in `.sops.yaml.sample` for the big 3 cloud KMS providers. Copy it, and then edit it:

```bash
cp .sops.yaml.sample .sops.yaml
```

Now, these KMS endpoints also need credentials to access them. Your AWS profile is always pointed and loaded (make sure you have loaded the correct one that has access), but in case of Google KMS add the following to the `.secrets` file:

```bash
export GCLOUD_SERVICE_KEY="YOUR_KEY_JSON_DATA_WITHOUT_NEWLINES"
```

Then you can run `otomi bootstrap` again, which will result in the creation of `gcp-key.json`, which is needed for sops to work locally, like when doing a `git diff`.

To allow `git diff` to show unencrypted values, you must register the sops diffing routine once with git. To register it:

```bash
git config diff.sopsdiffer.textconv "sops -d"
```

This only registers the sops differ, which is responsible for invoking sops. But sops still needs the credentials to the KMS service. Again, your AWS profile is always pointed and loaded, but in case of Google KMS you will need to point GOOGLE_APPLICATION_CREDENTIALS to the `gcp-key.json` file holding your account information:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=$PWD/gcp-key.json
```

Now try a diff:

```bash
git diff
```

## 4. Start Otomi Console on your local machine (optional)

Bootstrap again and start the console:

```bash
otomi bootstrap
otomi console
```

The console allows for easy configuration of many settings but not all. Assuming the setup steps are completed, you need to now configure the Otomi values repository. This repo is the source configuration for Otomi Container Platform. It contains drone pipeline configuration for listening to updates of these values targeting the cluster the drone instance is running on.

## 5. Configuration

Configuration can be performed much easier through the Otomi Console, so please refer to the [Otomi Console](/docs/console/) documentation.

However, not all configuration is (yet) exposed through the console, so please look at the values repo's `env/*` files to edit the configuration files.

Important things to note:

- Every configuration file can have a `secrets.*.yaml` counterpart, but these are optional.
- A json schema and vscode settings are imported by the bootrap (in `.vscode/*`), so you will have automatic linting and hinting for the configuration when vscode is used.
- If `.sops.yaml` is correctly configured then automatic de-/en-cryption will also be performed when in vscode and editing a `secrets.*.yaml` file.

Configuration that is currently managed by the console:

1. Team settings: `env/teams.yaml`
2. Team secrets: `env/teams/secrets.$TEAM.yaml`
3. Team services: `env/teams/services.$TEAM.yaml`

Configuration not (yet) managed by the console:

1. Cluster config: `env/cluster.yaml` and `env/.env`
2. Otomi settings: `env/settings.yaml` and `env/secrets.settings.yaml`
3. Charts config: `env/charts/$CHART.yaml` and `env/charts/secrets.$CHART.yaml`

Please follow the guidance of the yaml hinting, as it has all the descriptions and example values you need to operate on these files.

:::info Otomi YAML hinting only works in vscode

VSCode automatically loads the '.vscode/values-schema.yaml' schema provided. Please inspect it or wire it up manually when using another editor.

:::

:::caution Make sure to have working dns management credentials

The most important part to get the platform deployed is having correctly set credentials for dns management. Without it no domains nor ip addresses can be registered, and certificate validation will fail.

:::

If you wish to be sure of your changes, you can always do a `git diff`. When you chose to use encryption and have correctly followed the corresponding instructions, then you should see a diff with the unencrypted values. That is, if you modified any ;)

## 6. Validation

When you are done with the configuration you can validate the results:

```bash
otomi validate-values
```

If you have made an error in the format of the values this will be reported.

To check if all the output manifests are valid for the target cluster's k8s version, _and_ following best practices you can run another variation:

```bash
otomi validate-templates
```

## 7. Configure Dependencies

### IDP

In our demo files we refer to Azure AD as IDP for Keycloak, which is a common use case. It needs to know the valid callbacks to return control to Otomi's oauth endpoints. The following callbacks needed to be in place (change $clusterDomain to proper one):

- https://keycloak.$clusterDomain/realms/master/broker/redkubes-azure/endpoint
- https://keycloak.$clusterDomain

This will be the same for any IDP.

## 8. Deployment

### Charted vs uncharted resources

The output manifests generated by otomi are deployed in two ways:

- Uncharted: some base manifests are applied directly with `kubectl apply`
- Charted: manfests that are packaged up in helm charts.

Ideally, we would like to deploy as helm chart as it has [many benefits](https://www.google.nl/search?q=benefits+of+helm+chart) such as rollback. But in some cases we can't or we don't wish to. The reasons for that are the following:

1. Some resources we don't want governed by charts (as charts might get accidentally removed, erasing everything that was deployed with it).
2. Some existing resources have to be patched (like pull secrets in service accounts), which helmfile won't do as it will not modify existing resources not annotated to be under control by a chart.
3. Some resources need to exist before the charts are deployed (such as CRDs).

The manifests that are currently not charted are:

- `k8s/base` (unparameterized, mostly rbac roles)
- `values/cloud` (applies cloud specific "normalization" patterns, such as for storageclasses)
- `values/k8s` (team resources, such as namespaces, service accounts, pull secrets)

### Working with uncharted resources

Currently we don't have any subcommand that only works on uncharted resources, but we have the following commands that target the entire bundle.

- `otomi test`: does a dry run, showing all manifests that will be deployed, and will also show any errors in the output manifests.
- `otomi deploy`: deploys all the manifests (uncharted first, then charted)

So after doing `otomi test`, if all looks ok, go ahead and do the initial deployment of all resources:

```bash
otomi deploy
```

This command executes two stages (please see `bin/deploy.sh`). The first stage will deploy all uncharted resources with `kubectl apply`, and the second stage will deploy all the charted resources with `helmfile apply`.

Whenever you add a team, or change or add to these uncharted resources, you have to run `otomi deploy` to apply them. When you let Drone do the syncing for you, it will invoke that command to synchronize the cluster.

### Working with charted resources

During development iterations you will probably not touch uncharted resources often, but instead you will add features in charts.

Otomi has these subcommands that only target charted resources:

```bash
otomi (diff|apply|sync|template)
```

You can always target a single chart like this:

```bash
otomi (diff|apply|sync|template) -l name=prometheus-operator
```

(For a list of all supported flags to use those subcommands, we defer to the [helmfile documentation](https://github.com/roboll/helmfile), as those are deferred to the helmfile cli.)

Let's do a diff of all the charts that are enabled:

```bash
otomi diff
```

### Need to know quirks

Whenever you modify resources without using helm, its internal bookkeeping (the versioned secrets in the namespaces) will not change, and any subsequent `otomi apply` commands will not modify anything. If you notice this, and want to overwrite with the output manifests, you can use `otomi sync`, which will skip doing a diff, and instead apply all charted manifests as a new version.

## 9. GitOps syncing (optional)

After initial deployment, to enable Continuous Deployment of this repo from within Drone (running in the cluster), for each cluster:

1. Login to Drone and activate the values repo to sync with: https://drone.$clusterDomain/
2. (Optional) Configure the encryption related secrets as referred to in the [configuration](#5-configuration) section:
   - Google KMS: Set `GCLOUD_SERVICE_KEY` with the contents of the service account json file.
   - Aws KMS: Set `AWS_SECRET_ACCESS_KEY` and `AWS_ACCESS_KEY_ID` to an account that has access.
   - Azure: provide `AZURE_TENANT_ID`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET` and `AZURE_ENVIRONMENT`.

Sync is now live, and every git change in the values repo is applied by each cluster's Drone.

## 10. Committing values

When you are not using Otomi Enterprise Edition, or are doing development, you will operate on values directly and have to commit them manually:

```bash
otomi commit
```

This will detect any version changes, generate Drone pipeline configuration, and then commit all files with a standardized message "Manual commit". (We believe all values repo configuration changes are equally meaningful and don't need explicit commit messages.) Directly doing a `git commit` is discouraged with a git hook saying so, but whenever you did not touch any versions in `env/clusters.yaml` you may bypass with `git commit -m "Manual commit" --no-verify` to save development time.

This will then trigger the pipeline of any [configured Drone](https://drone.$clusterDomain/) (if you followed the previous step).
