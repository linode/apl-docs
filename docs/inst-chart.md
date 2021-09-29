---
slug: installation/chart/
title: Overview
---

Use Helm to install Otomi

:::note ATTENTION: The new Otomi Chart install is now in PREVIEW!

If you encounter problems, please create an issue [here](https://github.com/redkubes/otomi-core/issues).

:::

## Before you begin

- Verify if you have met the [prerequisites](/docs/installation/prerequisites)
- A valid `values.yaml` file that contains the minimum values you need to install otomi on a K8s cluster

If your K8s cluster is running on Azure, AWS or GCP, you can use the following values.yaml examples:

- [`azure-values.yaml`](/docs/installation/chart/azure)
- [`aws-values.yaml`](/docs/installation/chart/aws)
- [`gcp-values.yaml`](/docs/installation/chart/google)

The [Otomi Chart Configuration](/docs/installation/all-values) page, shows the minimal required values, and all optional values that can be configured in the chart.

---

## Installing via Helm repository

### Add the Otomi Helm repository

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

### Installing the Chart

Now install the chart with the name `<your-release-name>` (a custom name that you choose) along with the configured `values.yaml` file.

```bash
helm install -f </path/to/values.yaml> <your-release-name> otomi/otomi
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

A terminal walkthrough on how `otomi chart install` looks like:

![install](img/helm-install.gif)

### Monitoring the Chart install

The chart deploys a Job (`<your-release-name>`) in the `default` namespace. Monitor the chart install using `kubectl`:

```bash
kubectl get job <your-release-name> -w
```

Or use [K9s](https://k9scli.io/):

![monitor-chart](img/monitor-install.gif)

Once the chart is installed, you are ready to dive in to the console.

### Next steps

Once _Otomi_ is installed, visit the [Post Installation](/docs/postinstallation/) page where we provide you a step-by-step guide to using Otomi.

## Installing from source

As an alternative, you can also clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code. -->

### Download source

```bash
git clone https://github.com/redkubes/otomi-core.git
cd otomi-core
```

### Install from source

Now customize the `values.yaml` file. See [configuration](#configuring) below for more details.

Use the following command to install the chart with the name `my-otomi-release` (a custom name that you choose).

```bash
helm install -f /path/to/values.yaml my-otomi-release chart/otomi
```

## Uninstalling the Chart

```bash
helm uninstall my-otomi-release
```

Doing a Helm uninstall will only remove the job used to deploy Otomi. It will not remove all the installed components. If you would like to do a complete uninstall, we advise to first clone the `otomi/values` repository (to secure the configuration) and then uninstall using Otomi CLI.
