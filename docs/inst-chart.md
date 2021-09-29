---
slug: installation/chart
title: Install from chart
---

Use Helm to install Otomi.

Visit the [helm documentation](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing) page for more details on how to work with helm charts.

Before you begin verify if you have met the [prerequisites](/docs/installation/prerequisites)

## Add the Otomi repository

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

## Create and test the values file

To view the required `values.yaml` file with detailed comments, view and download the chart's latest [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml). Run the following command to view _all_ the values (which might be overwhelming):

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

### Monitoring the Chart install

The chart deploys a Job (`otomi`) in the `default` namespace. Monitor the chart install using `kubectl`:

```bash
# get the status of the job
kubectl get job otomi -w
# watch the helm chart install status:
watch helm list -Aa
```

Or view detailed info about kubernetes resources with[k9s](https://k9scli.io)

For more detailed instructions on monitoring and other SRE tasks, visit the [SRE section](/docs/sre/).

Once the chart is installed, you are ready to dive in to the [console](/docs/console/).

### Next steps

Once Otomi is installed, visit the [Post Installation](/docs/installation/post-install-actions) page to finish setting up Otomi.

## Installing from source

As an alternative, you can also clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code.

### Download source

```bash
git clone https://github.com/redkubes/otomi-core.git
cd otomi-core
```

### Install from source

Now customize the `values.yaml` file. See [configuration](#configuring) below for more details.

Use the following command to install the chart with the name `my-otomi-release` (a custom name that you choose).

```bash
helm install -f values.yaml my-otomi-release chart/otomi
```

## Uninstalling the Chart

```bash
helm uninstall my-otomi-release
```

Doing a Helm uninstall will only remove the job used to deploy Otomi. It will not remove all the installed components. If you would like to do a complete uninstall, we advise to first clone the `otomi/values` repository (to secure the configuration) and then uninstall using Otomi CLI.
