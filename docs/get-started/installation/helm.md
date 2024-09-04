---
slug: helm
title: Helm
sidebar_label: Helm
---

# Install APL with Helm

## Install client binaries

When installing APL using the Helm chart, make sure the following client binaries exist:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster
- [Helm](https://helm.sh/docs/intro/install/) for Helm chart installation of APL

## Add the APL repository

```bash
helm repo add apl https://linode.github.io/apl-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

## Minimal values

:::info
The APL [Builds](../../for-devs/console/builds.md) and [Projects](../../for-devs/console/projects.md) features and using Harbor for private registries is NOT supported when APL is installed with minimal configuration. Install APL with DNS to use all APL features.
:::

```yaml
cluster:
  name: # the name of your cluster
  provider: # choose between aws, azure, google, digitalocean, ovh, vultr, scaleway or custom
```

When the chart is installed, follow the [post installation steps](../post-installation-steps).

## Custom values

To view the required `values.yaml` file with detailed comments, view and download the chart's latest [values.yaml](https://github.com/linode/apl-core/blob/main/chart/apl/values.yaml). Run the following command to view _all_ the values (which might be overwhelming):

```bash
helm show values apl/apl
```

To test wether the input values are correct run the following command:

```bash
helm template -f values.yaml apl/apl
```

## Install the Helm chart

Install the Helm chart:

```bash
helm install -f values.yaml apl apl/apl
```

## Monitoring the installation

The chart deploys a Job (`-apl`) in the `default` namespace. Monitor the chart install using `kubectl`:

```bash
# get the status of the job
kubectl get job apl-apl -w
# watch the helm chart install status:
watch helm list -Aa
```

Or view detailed info about Kubernetes resources with [k9s](https://k9scli.io)

When the chart is installed, follow the [post installation steps](../post-installation-steps).

## Installing from source

As an alternative, you can also clone the apl-core source code from the [Github](https://github.com/linode/apl-core) and install APL using the chart source code.

### Download source

```bash
git clone https://github.com/linode/apl-core.git
cd apl-core
```

Before installing the chart from source, first change the `CHART_VERSION_PLACEHOLDER` in the `chart/apl/Chart.yaml` to `v1.0.0`

### Install

Now customize the `values.yaml` file. Make sure to set the version to the branch you like to use:

```
otomi:
  version: main
```

Use the following command to install the chart with the name `my-apl-release` (a custom name that you choose).

```bash
helm install -f values.yaml my-apl-release chart/apl
```

<!-- ## Uninstalling Otomi

```bash
helm uninstall my-otomi-release
```

Doing a Helm uninstall will remove all Helm releases deployed by Otomi. After uninstalling, some namespaces created by Otomi can stay in a Terminating status. To remove all namespaces in a Terminating status, run the following command:

```
for ns in $(kubectl get ns --field-selector status.phase=Terminating -o jsonpath='{.items[*].metadata.name}'); do kubectl get ns $ns -ojson | jq '.spec.finalizers = []' | kubectl replace --raw "/api/v1/namespaces/$ns/finalize" -f -; done
``` -->
