---
slug: installation/chart/
title: Install with Chart
---

Use Helm 3 to install Otomi

## Prerequisites

- A Kubernetes cluster version 1.18+
- [Helm 3.0+](https://helm.sh/docs/intro/install/)
- Git
- values.yaml that contains all configuration about kubernetes cluster and cloud provider resources like DNS or KMS. See [configuration](#configuring) below for more details.

## Installing via Helm repository

You can install otomi using otomi helm repository. You don't need to download the otomi source code using this method.

### Adding otomi helm repository

```bash
helm repo add otomi-repo https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

### Installing the Chart

Now install the chart with the name my-otomi-release (a custom name that you choose) and with the prepared values.yaml file.

```bash
helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi
```

You can also install a specific version of the chart. See [here](https://github.com/redkubes/otomi-core/releases) for the a list of all available versions.

```bash
helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi --version 0.1.4-rc6
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

## Installing from source

As an alternative method, you can clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code.

### Download source

```bash
git clone https://github.com/redkubes/otomi-core.git
cd otomi-core
```

### Install from source

Use the following command to install the chart with the name my-otomi-release (a custom name that you choose) and with the prepared:

```bash
helm install -f /path/to/values.yaml my-otomi-release chart/otomi
```

## Uninstalling the Chart

```bash
helm uninstall my-otomi-release
```

## Configuring

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml), or run these configuration commands:

```bash
helm show values otomi-repo/otomi
```

### Minimal required values

The following table lists the minimal required values

| Parameter | Description | Default |
| --- | --- | --- |
| `cluster.apiName` | The name of the cluster API | `''` |
| `cluster.apiServer` | The URL of the cluster API | `''` |
| `cluster.domainSuffix` |  | `''` |
| `cluster.k8sVersion` | The Kubernetes version of the cluster | `''` |
| `cluster.name` | The name of the Kubernetes cluster | `''` |
| `cluster.provider` | The cloud provider where the Kubernetes cluster is running | `''` |
| `cluster.region` | The cloud region where the Kubernetes cluster is running | `''` |
| `kms.sops.provider` | The cloud provider where the Kubernetes cluster is running. Use `aws`, `azure` or `google` | `''` |
| `oidc.clientID` |  | `''` |
| `oidc.clientSecret` |  | `''` |
| `oidc.adminGroupID` |  | `''` |
| `oidc.authUrl` |  | `''` |
| `oidc.issuer` |  | `''` |
| `oidc.teamAdminGroupID` |  | `''` |
| `oidc.tenantID` |  | `''` |
| `oidc.tokenUrl` |  | `''` |
| `otomi.adminPassword` | The password of the otomi-admin account | `''` |
| `otomi.isMultitenant` | Configure Otomi to run in multi-tenant mode `true` or `false` | `true` |
| `otomi.version` | The version should not be changed! (Consider it read only) | `APP_VERSION_PLACEHOLDER` |
| `dns.provider` | The cloud provider where the DNS service is used. Use `aws`, `azure` or `google` |
| `charts.cert-manager.stage` | Use `production` or `staging` | `production` |
| `charts.gitea.postgresqlPassword` | The password used for PostgreSQL db used by Gitea | `''` |
| `charts.gitea.enabled` | Use Gitea as a local GIT repository. Always true when deploying with chart | `true` |
| `charts.keycloak.idp.alias` | Name shown on keycloak login page as a button | `otomi` |
| `charts.keycloak.idp.clientID` | Azure ClientID for credentials used by the apps' clients to access keycloak in the cluster | `''` |
| `charts.keycloak.idp.clientSecret` | Azure ClientSecret for credentials used by the apps' clients to access keycloak in the cluster | `''` |
| `charts.keycloak.postgresqlPassword` | The password used for PostgreSQL db used by KeyCloak. Needs to be set to avoid generating a new one each time | `''` |
| `charts.loki.adminPassword` | The password used for used for splitting logs for teams | `''` |
| `charts.nginx-ingress.private.enabled` | Enable to start a LB on the private network | `false` |
| `charts.kubeapps.postgresqlPassword` | The password used for PostgreSQL db used by KeyCloak. Needs to be set to avoid generating a new one each time | `''` |
| `charts.oauth2-proxy.config.cookieSecret` | Needs to be set to avoid generating a new one each time | `''` |
| `customer.name` | Organization name of Otomi user | `''` |
| `kms.sops.vault.token` |  | `''` |
| `charts.cert-manager.email` |  | `''` |
| `charts.external-dns.domainFilters` |  | `''` |
| `charts.external-dns.zoneIdFilters` |  | `[]` |
| `charts.keycloak.enabled` | KeyCloak is always enabled | 'true' |
| `teamConfig` |  | `{}` |
| `alerts` |  | `{}` |
| `services` |  | `[]` |

#### Provider = AWS

| Parameter                   | Description                                     | Default |
| --------------------------- | ----------------------------------------------- | ------- |
| `kms.sops.aws.clientID`     |                                                 | `''`    |
| `kms.sops.aws.clientSecret` |                                                 | `''`    |
| `kms.sops.aws.accessKey`    |                                                 | `''`    |
| `kms.sops.aws.secretKey`    |                                                 | `''`    |
| `dns.provider.aws.region`   | The AWS region where the Route53 zone is hosted | `''`    |

#### Provider = Azure

| Parameter                            | Description | Default |
| ------------------------------------ | ----------- | ------- |
| `kms.sops.azure.tenantID`            |             | `''`    |
| `kms.sops.azure.clientID`            |             | `''`    |
| `kms.sops.azure.clientSecret`        |             | `''`    |
| `kms.sops.azure.keys`                |             | `''`    |
| `dns.provider.azure.aadClientId`     |             | `''`    |
| `dns.provider.azure.aadClientSecret` |             | `''`    |
| `dns.provider.azure.tenantId`        |             | `''`    |
| `dns.provider.azure.subscriptionId`  |             | `''`    |

#### Provider = Google

| Parameter                               | Description | Default |
| --------------------------------------- | ----------- | ------- |
| `kms.sops.google.accountJson`           |             | `''`    |
| `kms.sops.google.project`               |             | `''`    |
| `kms.sops.google.keys`                  |             | `''`    |
| `dns.provider.google.serviceAccountKey` |             | `''`    |
| `dns.provider.google.project`           |             | `''`    |

### Optional values

| Parameter               | Description                        | Default       |
| ----------------------- | ---------------------------------- | ------------- |
| `image.repository`      | The otomi-core image name          | `otomi/core`  |
| `image.tag`             | The otomi-core image tag           | `latest`      |
| `image.pullPolicy`      | The image pull policy              | `IfNotExists` |
| `tasksImage.repository` |                                    | `otomi/tasks` |
| `tasksImage.tag`        |                                    | `latest`      |
| `otomi.pullSecret`      | Add a pullsecret to run in EE mode | `''`          |
