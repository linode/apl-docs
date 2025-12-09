---
slug: helm
title: Helm
sidebar_label: Helm
---

# Install with Helm

## Install client binaries

When installing using the Helm chart, make sure the following client binaries exist:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster
- [Helm](https://helm.sh/docs/intro/install/) for Helm chart installation

## Add the repository

```bash
helm repo add apl https://linode.github.io/apl-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

When the chart is installed, follow the [post installation steps](post-install-steps.md).

## Custom values

To view the required `values.yaml` file with detailed comments, view and download the chart's latest [values.yaml](https://github.com/linode/apl-core/blob/main/chart/apl/values.yaml). Run the following command to view _all_ the values (which might be overwhelming):

```bash
helm show values apl/apl
```

To test wether the input values are correct run the following command:

```bash
helm template -f values.yaml apl/apl
```

## Customize the values

Adjust the `values.yaml` by changing the `provider` and adding `dns` configuration.

## Install the Helm chart

Install the Helm chart:

```bash
helm install -f values.yaml apl apl/apl
```

## Monitoring the installation

The chart deploys the `apl-operator` which handles the installation and continuously reconciles the cluster. You can monitor the installation progress using `kubectl`:

```bash
# Watch the apl-operator pod status
kubectl get pods -n apl-operator -w

# Watch the helm chart install status
watch helm list -Aa

# Check for the welcome ConfigMap (created during installation)
kubectl get configmap welcome -n apl-operator
```

Or view detailed info about Kubernetes resources with [k9s](https://k9scli.io)

When the chart is installed, follow the [post installation steps](post-install-steps.md).

## Installing from source

As an alternative, you can also clone the `apl-core` source code from the [Github](https://github.com/linode/apl-core) and install using the chart source code.

### Download source

```bash
git clone https://github.com/linode/apl-core.git
cd apl-core
```

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
