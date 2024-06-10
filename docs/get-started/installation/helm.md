---
slug: helm
title: Helm
sidebar_label: Helm
---

# Install Otomi with Helm

## Add the Otomi repository

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

## Minimal configuration

:::info
As of version [1.0.0](https://github.com/redkubes/otomi-core/releases/tag/v0.21.0) Otomi supports Kubernetes versions `1.27`,`1.28` and `1.29`.
:::

:::info
The Otomi [Builds](../../for-devs/console/builds.md) and [Projects](../../for-devs/console/projects.md) features and using Harbor for private registries is NOT supported when Otomi is installed with minimal configuration. Install Otomi with DNS to use all Otomi features.
:::

```yaml
cluster:
  name: # the name of your cluster
  provider: # choose between aws, azure, google, digitalocean, ovh, vultr, scaleway or custom
```

When the chart is installed, follow the [activation steps](../../get-started/activation.md).

<!-- Part of the activation is to register your cluster in [Otomi Cloud](https://portal.otomi.cloud) and download a Community Edition License to use Otomi Console and Otomi API. You can also first create a license key and add it to the chart values:

```yaml
license: <License Key>
``` -->

## Custom values

To view the required `values.yaml` file with detailed comments, view and download the chart's latest [values.yaml](https://github.com/redkubes/otomi-core/blob/main/chart/otomi/values.yaml). Run the following command to view _all_ the values (which might be overwhelming):

```bash
helm show values otomi/otomi
```

To test wether the input values are correct run the following command:

```bash
helm template -f values.yaml otomi/otomi
```

## Install the Chart

Install the chart with the following command:

```bash
helm install -f values.yaml otomi otomi/otomi
```

## Monitoring the chart install

The chart deploys a Job (`otomi`) in the `default` namespace. Monitor the chart install using `kubectl`:

```bash
# get the status of the job
kubectl get job otomi -w
# watch the helm chart install status:
watch helm list -Aa
```

Or view detailed info about kubernetes resources with [k9s](https://k9scli.io)

When the chart is installed, follow the [activation steps](../../get-started/activation.md)

## Installing from source

As an alternative, you can also clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code.

### Download source

```bash
git clone https://github.com/redkubes/otomi-core.git
cd otomi-core
```

Before installing the chart from source, first change the `CHART_VERSION_PLACEHOLDER` in the `chart/otomi/Chart.yaml` to `v1.0.0`

### Install

Now customize the `values.yaml` file. Make sure to set the version to the branch you like to use:

```
otomi:
  version: main
```

Use the following command to install the chart with the name `my-otomi-release` (a custom name that you choose).

```bash
helm install -f values.yaml my-otomi-release chart/otomi
```

## Uninstalling Otomi

```bash
helm uninstall my-otomi-release
```

Doing a Helm uninstall will remove all Helm releases deployed by Otomi. After uninstalling, some namespaces created by Otomi can stay in a Terminating status. To remove all namespaces in a Terminating status, run the following command:

```
for ns in $(kubectl get ns --field-selector status.phase=Terminating -o jsonpath='{.items[*].metadata.name}'); do kubectl get ns $ns -ojson | jq '.spec.finalizers = []' | kubectl replace --raw "/api/v1/namespaces/$ns/finalize" -f -; done
```
