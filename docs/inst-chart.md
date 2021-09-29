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
- A valid [`values.yaml`](/docs/installation/values) file that contains the minimum values you need to install otomi on a K8s cluster

If your K8s cluster(s) are running on one of these cloud providers(Azure, AWS, GCP), you can use the sample values.yaml from the list below:

- [`azure-values.yaml`](/docs/installation/chart/azure)
- [`aws-values.yaml`](/docs/installation/chart/aws)
- [`gcp-values.yaml`](/docs/installation/chart/google)

**NOTE:** The `values.yaml` file provided above is a default template used for each of the cloud providers.

The [Otomi Chart Configuration](/docs/installation/chartconfig) page, contains all the parameters that can be configured in the _otomi_ chart.

---

## Installing with Helm chart

#### Add the Otomi Helm repository

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

#### Installing the Chart

Now install the chart with the name `<your-release-name>` (a custom name that you choose) along with the configured `values.yaml` file.

```bash
helm install -f </path/to/values.yaml> <your-release-name> otomi/otomi
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

Here is a short terminal cast (TODO: perhaps a youtube link?):

![install](img/helm-install.gif)

#### Monitoring the Chart install

The chart deploys a Job (`<your-release-name>`) in the `default` namespace.

```bash
# Monitor the chart install using `kubectl`
kubectl get job <your-release-name> -w
```

Once the chart is installed, you are ready to dive in to the console.

**Pro Tip:** We recommend [K9s](https://k9scli.io/) for cluster interactions.

<!---
check Gitea to see if the `otomi\values` repo contains values. If not, uninstall the chart and install a second time.
-->

### Next steps

Once _Otomi_ is installed, visit [Post Installation](/docs/postinstallation/) page where we provide a step-by-step guide to using Otomi.

<!-- ## Installing from source

As an alternative, you can also clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code. -->

<!-- ### Download source

```bash
git clone https://github.com/redkubes/otomi-core.git
cd otomi-core
```

### Install from source

Now customize the `values.yaml` file. See [configuration](#configuring) below for more details.

Use the following command to install the chart with the name `my-otomi-release` (a custom name that you choose).

```bash
helm install -f /path/to/values.yaml my-otomi-release chart/otomi
``` -->
<!--
## Uninstalling the Chart

```bash
helm uninstall my-otomi-release
```

Doing a Helm uninstall will only remove the job used to deploy Otomi. It will not remove all the installed components. If you would like to do a complete uninstall, we advise to first clone the `otomi/values` repository (to secure the configuration) and then uninstall using Otomi CLI.

Uninstalling optional applications using the chart is possible by toggeling them on/of (by specifying enabled is true or false).

## Monitoring the Chart install

The chart deploys a Job (`<your-release-name>`) in the default namespace. Use K9s (or any tool of your preference), to monitor the install. After the deploy job has finished, check Gitea to see if the `otomi\values` repo contains values. Note that after logging in into Gitea with OIDC, it takes a couple minutes before you can see the repo. When the values repo is available, log in into Drone to activate the repository. -->
