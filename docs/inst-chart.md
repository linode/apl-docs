---
slug: installation/chart/
title: Install with Chart
---

Use Helm to install Otomi

:::note ATTENTION: The new Otomi Chart install is still in PREVIEW!

If you encounter problems, please create an issue [here](https://github.com/redkubes/otomi-core/issues).

:::

## Prerequisites

- See all the prerequisites [here](/docs/installation/prerequisites)
- [Helm 3.0](https://helm.sh/docs/intro/install/)
- A values.yaml. See [configuration](#configuration) below for more details.

## Installing via Helm repository

### Adding otomi helm repository

First add the Otomi Helm repository:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

### Installing the Chart

Now install the chart with the name `my-otomi-release` (a custom name that you choose) and with the prepared `values.yaml` file.

```bash
helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi
```

You can also install a specific version of the chart. See [here](https://github.com/redkubes/otomi-core/releases) for a list of all available versions.

```bash
helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi --version 0.1.4-rc6
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

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
helm install -f /path/to/values.yaml my-otomi-release chart/otomi
```

## Uninstalling the Chart

```bash
helm uninstall my-otomi-release
```

## Configuration

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml), or run these configuration commands:

```bash
helm show values otomi-repo/otomi
```

### Minimal required values

The following table lists the minimal required values

| Parameter | Description | Default |
| --- | --- | --- |
| `cluster.domainSuffix` |  | `''` |
| `cluster.name` | The name of the Kubernetes cluster | `''` |
| `cluster.provider` |  | `''` |
| `customer.name` | Organization name of Otomi user | `''` |
| `kms.sops.provider` | The cloud provider where the Kubernetes cluster is running. Use `aws`, `azure` or `google`. See [providers](#providers) | `''` |
| `oidc.clientID` |  | `''` |
| `oidc.clientSecret` |  | `''` |
| `oidc.adminGroupID` |  | `''` |
| `oidc.authUrl` |  | `''` |
| `oidc.issuer` |  | `''` |
| `oidc.teamAdminGroupID` |  | `''` |
| `oidc.tenantID` |  | `''` |
| `oidc.tokenUrl` |  | `''` |
| `otomi.version` | The version should not be changed! (Consider it read only) | `APP_VERSION_PLACEHOLDER` |
| `otomi.adminPassword` | The password of the otomi-admin account | `''` |
| `dns.provider` | The cloud provider where the DNS service is used. Use `aws`, `azure` or `google`. See [providers](#providers) |
| `charts.external-dns.domainFilters` |  | `''` |
| `charts.gitea.postgresqlPassword` | The password used for PostgreSQL db used by Gitea | `''` |
| `charts.keycloak.idp.alias` | Name shown on keycloak login page as a button | `otomi` |
| `charts.keycloak.idp.clientID` | Azure ClientID for credentials used by the apps' clients to access keycloak in the cluster | `''` |
| `charts.keycloak.idp.clientSecret` | Azure ClientSecret for credentials used by the apps' clients to access keycloak in the cluster | `''` |
| `charts.keycloak.postgresqlPassword` | The password used for PostgreSQL db used by KeyCloak. Needs to be set to avoid generating a new one each time | `''` |
| `charts.loki.adminPassword` | The password used for used for splitting logs for teams | `''` |
| `charts.kubeapps.postgresqlPassword` | The password used for PostgreSQL db used by KeyCloak. Needs to be set to avoid generating a new one each time | `''` |
| `charts.oauth2-proxy.config.cookieSecret` | Needs to be set to avoid generating a new one each time | `''` |
| `kms.sops.vault.token` |  | `''` |

### Providers

#### AWS

| Parameter                   | Description | Default |
| --------------------------- | ----------- | ------- |
| `kms.sops.aws.clientID`     |             | `''`    |
| `kms.sops.aws.clientSecret` |             | `''`    |
| `kms.sops.aws.accessKey`    |             | `''`    |
| `kms.sops.aws.secretKey`    |             | `''`    |
| `dns.provider.aws.region`   |             | `''`    |

#### Azure

| Parameter | Description | Default |
| --- | --- | --- |
| `kms.sops.azure.tenantID` |  | `''` |
| `kms.sops.azure.clientID` |  | `''` |
| `kms.sops.azure.clientSecret` |  | `''` |
| `kms.sops.azure.keys` |  | `''` |
| `dns.provider.azure.aadClientId` | The client ID of the Service Principal used | `''` |
| `dns.provider.azure.aadClientSecret` | The secret of the used Service Principal | `''` |
| `dns.provider.azure.tenantId` | The tenant ID of the Azure directory of the Azure AD client | `''` |
| `dns.provider.azure.subscriptionId` | The subscription ID of the Azure subscription containing the Azure DNS zone | `''` |
| `dns.provider.azure.resourceGroup` | The resource group name of the Azure DNS zone | `''` |

You can find the tenantId by running `az account show --query "tenantId"` or by selecting Azure Active Directory in the Azure Portal and checking the Directory ID under Properties.

You can find the subscriptionId by running `az account show --query "id"` or by selecting Subscriptions in the Azure Portal.

The aadClientID and aaClientSecret are associated with the required Service Principal.

#### Google

| Parameter                               | Description | Default |
| --------------------------------------- | ----------- | ------- |
| `kms.sops.google.accountJson`           |             | `''`    |
| `kms.sops.google.project`               |             | `''`    |
| `kms.sops.google.keys`                  |             | `''`    |
| `dns.provider.google.serviceAccountKey` |             | `''`    |
| `dns.provider.google.project`           |             | `''`    |

### Optional values

| Parameter | Description | Default |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cluster.region` | The cloud region where the Kubernetes cluster is running | `''` |
| `cluster.provider` | The cloud provider where the Kubernetes cluster is running | `''` |
| `cluster.k8sVersion` | The Kubernetes version of the cluster | `''` |
| `image.repository` | The otomi-core image name | `otomi/core` |
| `image.tag` | The otomi-core image tag | `latest` |
| `image.pullPolicy` | The image pull policy | `IfNotExists` |
| `tasksImage.repository` | The otomi-tasks image name | `otomi/tasks` |
| `tasksImage.tag` | The otomi-tasks image tag | `latest` |
| `otomi.pullSecret` | Add a pullsecret to run in EE mode | `''` |
| `otomi.isMultitenant` | Configure Otomi to run in multi-tenant mode `true` or `false` | `true` |
| `charts.gitea.enabled` | Use Gitea as a local GIT repository. Always true when deploying with chart | `true` |
| `charts.nginx-ingress.private.enabled` | Enable to start a LB on the private network | `false` |
| `charts.cert-manager.email` |  | `''` |
| `charts.external-dns.zoneIdFilters` |  | `[]` |
| `cluster.apiName` | The name of the cluster API | `''` |
| `cluster.apiServer` | The URL of the cluster API | `''` |
| `charts.cert-manager.stage` | Use `production` or `staging` | `production` |
| `teamConfig` |  | `{}` |  | `alerts` |  | `{}` |  | `services` |  | `[]` |
