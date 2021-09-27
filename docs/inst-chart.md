---
slug: installation/chart/
title: Install with Chart
---

Use Helm to install Otomi

:::note ATTENTION: The new Otomi Chart install is now in PREVIEW!

If you encounter problems, please create an issue [here](https://github.com/redkubes/otomi-core/issues).

:::

## Before you begin

- Verify if you have met the [prerequisites](/docs/installation/prerequisites)
- A valid `values.yaml` that contains See [configuration](#configuration) below for more details.

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
helm install -f /path/to/values.yaml my-otomi-release otomi/otomi
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

### Monitoring the Chart install

The chart deploys a Job (`<your-release-name>`) in the `default` namespace. Monitor the chart install using [K9s](https://k9scli.io/) or any other tool of your choice.

<!---
check Gitea to see if the `otomi\values` repo contains values. If not, uninstall the chart and install a second time.
-->

### Next steps

When Otomi is installed, first create a [team](/docs/console/teams).

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

Doing a Helm uninstall will only remove the job used to deploy Otomi. It will not remove all the installed components. If you would like to do a complete uninstall, we advise to first clone the `otomi/values` repository (to secure the configuration) and then uninstall using Otomi CLI.

Uninstalling optional applications using the chart is possible by toggeling them on/of (by specifying enabled is true or false).

## Monitoring the Chart install

The chart deploys a Job (`<your-release-name>`) in the default namespace. Use K9s (or any tool of your preference), to monitor the install. After the deploy job has finished, check Gitea to see if the `otomi\values` repo contains values. Note that after logging in into Gitea with OIDC, it takes a couple minutes before you can see the repo. When the values repo is available, log in into Drone to activate the repository.

## Configuration

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml), or run these configuration commands:

```bash
helm show values otomi/otomi
```

### Minimal required values

The following table lists the minimal required values:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `cluster.domainSuffix` | `string` | `''` | The top-level domain for the cluster, for example: `my-cluster.my-domain.com` |
| `cluster.name` | `string` | `''` | The name of the cluster |
| `cluster.owner` | `string` | `''` | The owner/organization of the cluster |
| `cluster.provider` | `string` | `''` | The cloud provider where the K8s cluster is running. Use `aws`, `azure` or `google`. |
| `dns.provider` | `string` | `''` | The cloud provider where the DNS service is used. Use `aws`, `azure` or `google`. See [providers](#providers) |
| `oidc` | `string` | `''` | The cloud provider where the DNS service is used. Use `aws`, `azure` or `google`. See [providers](#providers) |
| `otomi.adminPassword` | `string` | `''` | The password of the otomi-admin account |
| `otomi.version` | `string` | `''` | The otomi-core version used. Use the latest release `v0.14.6` |
| `charts.external-dns.domainFilters` | `string` | `''` | The name of your hosted DNS zone, for example `my-domain.com` |
| `charts.cert-manager.email` | `string` | `''` | Choose between staging or production Let's Encrypt certificates. Otomi requires production for fill functionality |
| `charts.cert-manager.stage` | `string` | `''` | An email address |

#### OIDC

At the moment, Otomi can only use Azure AD as IDP to provide SSO. We will soon provide the option to also use KeyCloak as IDP.

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `oidc.clientID` | `string` | `''` | The client ID of the Azure Service Principal used |
| `oidc.clientSecret` | `string` | `''` | The secret of the used Azure Service Principal used |
| `oidc.adminGroupID` | `string` | `''` | The ID of the Azure AD group used for the Otomi otomi-admin (platform admin) role |
| `oidc.authUrl` | `string` | `''` | `https://login.microsoftonline.com/your-azure-ad-tenant-id/oauth2/authorize` |
| `oidc.issuer` | `string` | `''` | `https://login.microsoftonline.com/your-azure-ad-tenant-id/` |
| `oidc.teamAdminGroupID` | `string` | `''` | The ID of the Azure AD group used for the Otomi team-admin role |
| `oidc.tenantID` | `string` | `''` | The tenant ID of Azure Active Directory |
| `oidc.tokenUrl` | `string` | `''` | `https://login.microsoftonline.com/your-azure-ad-tenant-id/oauth2/token` |

#### Providers

Configure these parameters based on your cloud of choice.

##### AWS

| Parameter                 | Type     | Default | Description |
| ------------------------- | -------- | ------- | ----------- |
| `dns.provider.aws.region` | `string` | `''`    |             |

##### Azure

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `dns.provider.azure.aadClientId` | `string` | `''` | The client ID of the Service Principal used |
| `dns.provider.azure.aadClientSecret` | `string` | `''` | The secret of the used Service Principal |
| `dns.provider.azure.tenantId` | `string` | `''` | The tenant ID of the Azure directory of the Azure AD client |
| `dns.provider.azure.subscriptionId` | `string` | `''` | The subscription ID of the Azure subscription containing the Azure DNS zone |
| `dns.provider.azure.resourceGroup` | `string` | `''` | The resource group name of the Azure DNS zone |

You can find the tenantId by running `az account show --query "tenantId"` or by selecting Azure Active Directory in the Azure Portal and checking the Directory ID under Properties.

You can find the subscriptionId by running `az account show --query "id"` or by selecting Subscriptions in the Azure Portal.

The aadClientID and aaClientSecret are associated with the required Service Principal.

##### Google

| Parameter                               | Type     | Default | Description |
| --------------------------------------- | -------- | ------- | ----------- |
| `dns.provider.google.serviceAccountKey` | `string` | `''`    |             |
| `dns.provider.google.project`           | `string` | `''`    |             |

### Optional: using SOPS

:::caution ATTENTION: Although using SOPS to encrypt all secrets is optional, we strongly recommend using it!

:::

#### Providers

Configure these parameters based on your cloud of choice.

##### AWS

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `kms.sops.provider` | `string` | `''` | The cloud provider where the Kubernetes cluster is running. Use `aws`. |
| `kms.sops.aws.clientID` | `string` | `''` |  |
| `kms.sops.aws.clientSecret` | `string` | `''` |  |
| `kms.sops.aws.accessKey` | `string` | `''` |  |
| `kms.sops.aws.secretKey` | `string` | `''` |  |

##### Azure

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `kms.sops.provider` | `string` | `''` | The cloud provider where the Kubernetes cluster is running. Use `azure`. |
| `kms.sops.azure.tenantID` | `string` | `''` | The tenant ID of the Azure directory |
| `kms.sops.azure.clientID` | `string` | `''` | The client ID of the Service Principal used |
| `kms.sops.azure.clientSecret` | `string` | `''` | The secret of the used Service Principal |
| `kms.sops.azure.keys` | `string` | `''` | Comma separated list of one or two paths to keys as defined in Azure Vault. One if used for both enc+dec. Two if one for enc, other for dec. |

##### Google

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `kms.sops.provider` | `string` | `''` | The cloud provider where the Kubernetes cluster is running. Use `google`. |
| `kms.sops.google.accountJson` | `string` | `''` |  |
| `kms.sops.google.project` | `string` | `''` |  |
| `kms.sops.google.keys` | `string` | `''` | Comma separated list of one or two paths to keys as defined in GCP KMS. One if used for both enc+dec. Two if one for enc, other for dec. |

### All values

| Parameter | Type | Description | Default |
| --- | --- | --- | --- |
| `alerts.drone` | `string` |  | `slack` |
| `alerts.email.critical` | `string` | One or more email addresses (comma separated) for critical events. | `nil` |
| `alerts.email.nonCritical` | `string` | One or more email addresses (comma separated) for non-critical events. | `nil` |
| `alerts.groupInterval` | `string` | How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) | `5m` |
| `alerts.msteams.highPrio` | `string` | The low prio web hook. | `nil` |
| `alerts.msteams.lowPrio` | `string` | The high prio web hook. | `nil` |
| `alerts.receivers.[]` | `string` |  | `nil` |
| `alerts.repeatInterval` | `string` | How long to wait before sending a notification again if it has already been sent successfully for an alert. (Usually ~3h or more). | `3h` |
| `alerts.slack.channel` | `string` | The Slack channel for non-critical notifications. | `dev-mon-otomi` |
| `alerts.slack.channelCrit` | `string` | The Slack channel for critical notifications. | `dev-mon-otomi` |
| `alerts.slack.url` | `string` | A Slack webhook URL. | `nil` |
| `azure.storageType.fast` | `string` |  | `nil` |
| `azure.storageType.standard` | `string` |  | `nil` |
| `azure.appgw.isManaged` | `boolean` | Is this appgw installed as AKS addon? | `true` |
| `azure.monitor.appInsightsApiKey` | `string` | An Azure AppInsights client secret. | `nil` |
| `azure.monitor.appInsightsAppId` | `string` | An Azure client id. | `nil` |
| `azure.monitor.azureLogAnalyticsSameAs` | `boolean` |  | `true` |
| `azure.monitor.clientId` | `string` | An Azure client id. | `nil` |
| `azure.monitor.clientSecret` | `string` | An Azure client secret. | `nil` |
| `azure.monitor.logAnalyticsClientId` | `string` | An Azure client secret. | `nil` |
| `azure.monitor.logAnalyticsClientSecret` | `string` | An Azure client secret. | `nil` |
| `azure.monitor.logAnalyticsTenantId` | `string` | An Azure tenant id. | `nil` |
| `azure.monitor.logAnalyticsDefaultWorkspace` | `string` | An Azure LogAnalytics workspace. | `nil` |
| `azure.monitor.subscriptionId` | `string` | An Azure subscription id. | `nil` |
| `azure.monitor.tenantId` | `string` | An Azure tenant id. | `nil` |
| `cloud.skipStorageClasses.[]` | `string` |  | `nil` |
| `charts.cert-manager.email` | `string` |  | `nil` |
| `charts.cert-manager.stage` | `string` | The Let's Encrypt environment that is used for issuing certificates. The 'production' environment issues trusted certificates but has narrow rate limits, whereas the 'staging' environment issues untrusted certificates but provides broader rate limits. Read more about rate limits: https://letsencrypt.org/docs/rate-limits/. | `staging` |
| `charts.cluster-overprovisioner.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.cluster-overprovisioner.enabled` | `boolean` |  | `nil` |
| `charts.cluster-overprovisioner.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.demo-tlspass.enabled` | `boolean` |  | `nil` |
| `charts.demo-tlspass.tlsCert` | `string` |  | `nil` |
| `charts.demo-tlspass.tlsKey` | `string` |  | `nil` |
| `charts.drone.adminIsMachine` | `boolean` |  | `nil` |
| `charts.drone.adminUser` | `string` |  | `nil` |
| `charts.drone.adminToken` | `string` |  | `nil` |
| `charts.drone.debug` | `boolean` |  | `nil` |
| `charts.drone.enabled` | `boolean` |  | `nil` |
| `charts.drone.githubAdmins.org` | `string` |  | `nil` |
| `charts.drone.githubAdmins.team` | `string` |  | `nil` |
| `charts.drone.githubAdmins.token` | `string` |  | `nil` |
| `charts.drone.orgsFilter` | `string` |  | `nil` |
| `charts.drone.owner` | `string` |  | `nil` |
| `charts.drone.repo` | `string` | A lowercase name that starts with a letter and may contain dashes. | `nil` |
| `charts.drone.repoFilter` | `string` |  | `nil` |
| `charts.drone.resources.runner.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.drone.resources.runner.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.drone.resources.runner.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.drone.resources.runner.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.drone.resources.server.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.drone.resources.server.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.drone.resources.server.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.drone.resources.server.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.drone.sharedSecret` | `string` | A secret used by drone-admit-members plugin. | `nil` |
| `charts.drone.sourceControl.bitbucketCloud.clientID` | `string` |  | `nil` |
| `charts.drone.sourceControl.bitbucketCloud.clientSecretValue` | `string` |  | `nil` |
| `charts.drone.sourceControl.bitbucketServer.consumerKey` | `string` |  | `consumerKey` |
| `charts.drone.sourceControl.bitbucketServer.passwordKey` | `string` |  | `password` |
| `charts.drone.sourceControl.bitbucketServer.privateKey` | `string` |  | `privateKey` |
| `charts.drone.sourceControl.bitbucketServer.server` | `string` |  | `nil` |
| `charts.drone.sourceControl.bitbucketServer.username` | `string` |  | `nil` |
| `charts.drone.sourceControl.gitea.clientID` | `string` |  | `nil` |
| `charts.drone.sourceControl.gitea.clientSecretValue` | `string` |  | `nil` |
| `charts.drone.sourceControl.gitea.server` | `string` |  | `nil` |
| `charts.drone.sourceControl.github.clientID` | `string` |  | `nil` |
| `charts.drone.sourceControl.github.clientSecretValue` | `string` |  | `nil` |
| `charts.drone.sourceControl.github.server` | `string` |  | `https://github.com` |
| `charts.drone.sourceControl.gitlab.clientID` | `string` |  | `nil` |
| `charts.drone.sourceControl.gitlab.clientSecretValue` | `string` |  | `nil` |
| `charts.drone.sourceControl.gitlab.server` | `string` |  | `nil` |
| `charts.drone.sourceControl.gogs.server` | `string` |  | `nil` |
| `charts.drone.sourceControl.password` | `string` |  | `nil` |
| `charts.drone.sourceControl.provider` | `string` |  | `github` |
| `charts.drone.sourceControl.secret` | `string` |  | `nil` |
| `charts.drone.sourceControl.username` | `string` |  | `nil` |
| `charts.drone.trace` | `boolean` |  | `nil` |
| `charts.external-dns.domainFilters.[]` | `string` |  | `nil` |
| `charts.external-dns.zoneIdFilters.[]` | `string` |  | `nil` |
| `charts.gatekeeper-operator.enabled` | `boolean` |  | `nil` |
| `charts.gatekeeper-operator.excludedNamespaces.[]` | `string` |  | `nil` |
| `charts.gatekeeper-operator.emitAuditEvents` | `boolean` |  | `nil` |
| `charts.gatekeeper-operator.emitAdmissionEvents` | `boolean` |  | `nil` |
| `charts.gatekeeper-operator.auditFromCache` | `boolean` |  | `nil` |
| `charts.gatekeeper-operator.disableValidatingWebhook` | `boolean` |  | `nil` |
| `charts.gatekeeper-operator.logLevel` | `string` |  | `nil` |
| `charts.gatekeeper-operator.constraintViolationsLimit` | `integer` |  | `nil` |
| `charts.gatekeeper-operator.auditInterval` | `integer` |  | `nil` |
| `charts.gatekeeper-operator.replicas` | `integer` |  | `nil` |
| `charts.gitea.enabled` | `boolean` |  | `nil` |
| `charts.gitea.adminPassword` | `string` |  | `nil` |
| `charts.gitea.postgresqlPassword` | `string` | Once set and deployed it cannot be changed with manual intervention. | `nil` |
| `charts.harbor.adminPassword` | `string` |  | `nil` |
| `charts.harbor.core.secret` | `string` |  | `nil` |
| `charts.harbor.core.xsrfKey` | `string` |  | `nil` |
| `charts.harbor.enabled` | `boolean` |  | `nil` |
| `charts.harbor.jobservice.secret` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.accesskey` | `string` | An AWS access key ID. | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.secretkey` | `string` | An AWS secret key. | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.region` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.regionendpoint` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.bucket` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.encrypt` | `boolean` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.keyid` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.secure` | `boolean` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.v4auth` | `boolean` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.chunksize` | `integer` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.multipartcopychunksize` | `integer` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.multipartcopymaxconcurrency` | `integer` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.multipartcopythresholdsize` | `integer` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.aws.rootdirectory` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.azure.accountname` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.azure.accountkey` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.azure.container` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.azure.realm` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.gcs.bucket` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.gcs.encodedkey` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.gcs.rootdirectory` | `string` |  | `nil` |
| `charts.harbor.persistence.imageChartStorage.type` | `string` |  | `nil` |
| `charts.harbor.registry.secret` | `string` |  | `nil` |
| `charts.harbor.registry.credentials.htpasswd` | `string` |  | `nil` |
| `charts.harbor.registry.credentials.username` | `string` |  | `nil` |
| `charts.harbor.registry.credentials.password` | `string` |  | `nil` |
| `charts.harbor.resources.adapter.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.adapter.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.adapter.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.adapter.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.chartmuseum.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.chartmuseum.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.chartmuseum.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.chartmuseum.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.clair.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.clair.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.clair.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.clair.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.controller.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.controller.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.controller.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.controller.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.core.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.core.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.core.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.core.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.database.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.database.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.database.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.database.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.jobservice.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.jobservice.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.jobservice.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.jobservice.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.portal.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.portal.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.portal.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.portal.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.redis.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.redis.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.redis.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.redis.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.registry.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.registry.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.registry.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.registry.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.registry-controller.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.registry-controller.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.resources.registry-controller.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.harbor.resources.registry-controller.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.harbor.secretKey` | `string` |  | `nil` |
| `charts.hello.enabled` | `boolean` | Hello world demo chart. When you turn this off you may also have to remove the ingress service. | `nil` |
| `charts.httpbin.enabled` | `boolean` | The famous httpbin application. | `nil` |
| `charts.ingress-azure.enabled` | `boolean` |  | `nil` |
| `charts.ingress-azure.appgw.name` | `string` | A name of the Application Gateway. | `nil` |
| `charts.ingress-azure.appgw.resourceGroup` | `string` | A name of the Azure Resource Group in which Application Gateway was created. | `nil` |
| `charts.ingress-azure.appgw.subnetName` | `string` | A subnet of the application gateway. | `nil` |
| `charts.ingress-azure.appgw.subnetPrefix` | `string` | A subnet in CIDR notation. | `nil` |
| `charts.ingress-azure.appgw.subscriptionId` | `string` | The Azure Subscription ID in which Application Gateway resides. | `nil` |
| `charts.ingress-azure.appgw.usePrivateIP` | `boolean` | Whether a private ip range or not. | `nil` |
| `charts.ingress-azure.armAuth.secretJSON` | `string` | A service Principal secret JSON key (base64 encoded). | `nil` |
| `charts.istio.addonComponents.grafana.enabled` | `boolean` |  | `nil` |
| `charts.istio.addonComponents.kiali.enabled` | `boolean` |  | `nil` |
| `charts.istio.addonComponents.prometheus.enabled` | `boolean` |  | `nil` |
| `charts.istio.addonComponents.tracing.enabled` | `boolean` |  | `nil` |
| `charts.istio.autoscaling.egressgateway.maxReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.egressgateway.minReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.gateway-local.maxReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.gateway-local.minReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.ingressgateway.maxReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.ingressgateway.minReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.ingressgateway-auth.maxReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.ingressgateway-auth.minReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.pilot.maxReplicas` | `integer` |  | `nil` |
| `charts.istio.autoscaling.pilot.minReplicas` | `integer` |  | `nil` |
| `charts.istio.egressGateway.enabled` | `boolean` |  | `nil` |
| `charts.istio.global.logging.level` | `string` |  | `nil` |
| `charts.istio.global.mtls.enabled` | `boolean` |  | `nil` |
| `charts.istio.global.proxy.resources.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.global.proxy.resources.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.global.proxy.resources.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.global.proxy.resources.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.global.sds.enabled` | `boolean` |  | `nil` |
| `charts.istio.resources.egressgateway.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.egressgateway.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.egressgateway.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.egressgateway.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.gateway-local.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.gateway-local.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.gateway-local.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.gateway-local.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.ingressgateway.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.ingressgateway.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.ingressgateway.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.ingressgateway.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.ingressgateway-auth.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.ingressgateway-auth.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.ingressgateway-auth.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.ingressgateway-auth.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.pilot.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.pilot.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.istio.resources.pilot.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.istio.resources.pilot.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.keycloak.enabled` | `boolean` |  | `true` |
| `charts.keycloak.idp.alias` | `string` |  | `nil` |
| `charts.keycloak.idp.clientID` | `string` |  | `nil` |
| `charts.keycloak.idp.clientSecret` | `string` |  | `nil` |
| `charts.keycloak.postgresqlPassword` | `string` | Once set and deployed it cannot be changed with manual intervention. | `nil` |
| `charts.keycloak.resources.keycloak.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.keycloak.resources.keycloak.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.keycloak.resources.keycloak.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.keycloak.resources.keycloak.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.keycloak.resources.postgresql.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.keycloak.resources.postgresql.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.keycloak.resources.postgresql.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.keycloak.resources.postgresql.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.keycloak.theme` | `string` |  | `nil` |
| `charts.kubeapps.enabled` | `boolean` |  | `true` |
| `charts.kubeapps.postgresqlPassword` | `string` | Once set and deployed it cannot be changed with manual intervention. | `nil` |
| `charts.kubernetes-external-secrets.logLevel` | `string` |  | `info` |
| `charts.kube-descheduler.enabled` | `boolean` |  | `true` |
| `charts.kube-descheduler.schedule` | `string` |  | `*/30 * * * *` |
| `charts.loki.adminPassword` | `string` |  | `nil` |
| `charts.loki.persistence.size` | `string` |  | `20Gi` |
| `charts.loki.retention.duration` | `string` |  | `24h` |
| `charts.loki.retention.period` | `string` | Should be a multiple of 24h. See https://grafana.com/docs/loki/latest/operations/storage/boltdb-shipper/. | `24h` |
| `charts.loki.azure.account_key` | `string` |  | `nil` |
| `charts.loki.azure.account_name` | `string` |  | `nil` |
| `charts.loki.azure.container_name` | `string` |  | `nil` |
| `charts.loki.storageType` | `string` |  | `nil` |
| `charts.loki.v11StartDate` | `string` | Set this to a date just after deployment in case of an upgrade. (Otomi started at v9 with filesystem.) | `nil` |
| `charts.nginx-ingress.autoscaling.enabled` | `boolean` |  | `true` |
| `charts.nginx-ingress.autoscaling.maxReplicas` | `integer` |  | `10` |
| `charts.nginx-ingress.autoscaling.minReplicas` | `integer` |  | `2` |
| `charts.nginx-ingress.loadBalancerIP` | `string` |  | `nil` |
| `charts.nginx-ingress.loadBalancerRG` | `string` |  | `nil` |
| `charts.nginx-ingress.maxBodySize` | `string` |  | `1024m` |
| `charts.nginx-ingress.maxBodySizeBytes` | `number` | Needed for modsecurity. Should correspond to maxBodySize, but expressed in bytes. | `1073741824` |
| `charts.nginx-ingress.modsecurity.block` | `boolean` | Makes nginx block requests that are marked as violating the modsec rules. | `true` |
| `charts.nginx-ingress.modsecurity.enabled` | `boolean` |  | `nil` |
| `charts.nginx-ingress.modsecurity.owasp` | `boolean` | Turns on the default OWASP rule set for modsec. See | `true` |
| `charts.nginx-ingress.resources.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.nginx-ingress.resources.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.nginx-ingress.resources.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.nginx-ingress.resources.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.nginx-ingress.private.enabled` | `boolean` | Enable to start an extra loadbalancer for private network traffic. | `nil` |
| `charts.nginx-ingress.private.autoscaling.enabled` | `boolean` |  | `true` |
| `charts.nginx-ingress.private.autoscaling.maxReplicas` | `integer` |  | `10` |
| `charts.nginx-ingress.private.autoscaling.minReplicas` | `integer` |  | `2` |
| `charts.nginx-ingress.private.loadBalancerIP` | `string` |  | `nil` |
| `charts.nginx-ingress.private.loadBalancerRG` | `string` |  | `nil` |
| `charts.nginx-ingress.private.resources.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.nginx-ingress.private.resources.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.nginx-ingress.private.resources.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.nginx-ingress.private.resources.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.nginx-ingress.private.service.annotations.patternProperties.^((([a-zA-Z0-9]\|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]\|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` | `string` |  | `nil` |
| `charts.nginx-ingress.service.annotations.patternProperties.^((([a-zA-Z0-9]\|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]\|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` | `string` |  | `nil` |
| `charts.oauth2-proxy.config.cookieSecret` | `string` | Cookie secret must be 128 bit base64 encoded string. | `nil` |
| `charts.oauth2-proxy-redis.architecture` | `string` |  | `standalone` |
| `charts.oauth2-proxy-redis.password` | `string` |  | `nil` |
| `charts.oauth2-proxy-redis.resources.master.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.oauth2-proxy-redis.resources.master.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.oauth2-proxy-redis.resources.master.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.oauth2-proxy-redis.resources.master.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.oauth2-proxy-redis.resources.sentinel.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.oauth2-proxy-redis.resources.sentinel.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.oauth2-proxy-redis.resources.sentinel.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.oauth2-proxy-redis.resources.sentinel.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.oauth2-proxy-redis.resources.slave.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.oauth2-proxy-redis.resources.slave.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.oauth2-proxy-redis.resources.slave.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.oauth2-proxy-redis.resources.slave.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.oauth2-proxy-redis.sizes.master` | `string` | Disk size. Valid units are E\|P\|T\|G\|Ti\|Gi. | `nil` |
| `charts.oauth2-proxy-redis.sizes.sentinel` | `string` | Disk size. Valid units are E\|P\|T\|G\|Ti\|Gi. | `nil` |
| `charts.oauth2-proxy-redis.sizes.slave` | `string` | Disk size. Valid units are E\|P\|T\|G\|Ti\|Gi. | `nil` |
| `charts.otomi-api.git.branch` | `string` |  | `nil` |
| `charts.otomi-api.git.email` | `string` |  | `nil` |
| `charts.otomi-api.git.localPath` | `string` |  | `nil` |
| `charts.otomi-api.git.password` | `string` |  | `nil` |
| `charts.otomi-api.git.repoUrl` | `string` | Path to a remote git repo without protocol. Will use https to access. | `nil` |
| `charts.otomi-api.git.user` | `string` |  | `nil` |
| `charts.otomi-api.image.pullPolicy` | `string` |  | `IfNotPresent` |
| `charts.otomi-api.image.tag` | `string` |  | `nil` |
| `charts.otomi-api.resources.api.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.otomi-api.resources.api.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.otomi-api.resources.api.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.otomi-api.resources.api.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.otomi-api.resources.tools.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.otomi-api.resources.tools.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.otomi-api.resources.tools.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.otomi-api.resources.tools.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.otomi-api.tools.image.pullPolicy` | `string` |  | `IfNotPresent` |
| `charts.otomi-api.tools.image.tag` | `string` |  | `nil` |
| `charts.otomi-console.image.pullPolicy` | `string` |  | `IfNotPresent` |
| `charts.otomi-console.image.tag` | `string` |  | `nil` |
| `charts.prometheus-operator.grafana.adminPassword` | `string` |  | `nil` |
| `charts.prometheus-operator.prometheus.storageSize` | `string` |  | `nil` |
| `charts.prometheus-operator.resources.grafana.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.prometheus-operator.resources.grafana.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.prometheus-operator.resources.grafana.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.prometheus-operator.resources.grafana.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.redis-shared.architecture` | `string` |  | `standalone` |
| `charts.redis-shared.password` | `string` |  | `nil` |
| `charts.redis-shared.resources.master.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.redis-shared.resources.master.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.redis-shared.resources.master.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.redis-shared.resources.master.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.redis-shared.resources.sentinel.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.redis-shared.resources.sentinel.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.redis-shared.resources.sentinel.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.redis-shared.resources.sentinel.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.redis-shared.resources.slave.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.redis-shared.resources.slave.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.redis-shared.resources.slave.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `charts.redis-shared.resources.slave.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `charts.redis-shared.sizes.master` | `string` | Disk size. Valid units are E\|P\|T\|G\|Ti\|Gi. | `nil` |
| `charts.redis-shared.sizes.sentinel` | `string` | Disk size. Valid units are E\|P\|T\|G\|Ti\|Gi. | `nil` |
| `charts.redis-shared.sizes.slave` | `string` | Disk size. Valid units are E\|P\|T\|G\|Ti\|Gi. | `nil` |
| `charts.redis-shared.enabled` | `boolean` |  | `nil` |
| `charts.sitespeed.enabled` | `boolean` |  | `nil` |
| `charts.sitespeed.pvc.graphite` | `string` |  | `nil` |
| `charts.sitespeed.pvc.results` | `string` |  | `nil` |
| `charts.sitespeed.retention` | `string` |  | `nil` |
| `charts.sitespeed.schedule` | `string` |  | `nil` |
| `charts.vault.enabled` | `boolean` |  | `true` |
| `charts.vault.logLevel` | `string` |  | `info` |
| `charts.vault.seal.gcpckms.project` | `string` |  | `nil` |
| `charts.vault.seal.gcpckms.region` | `string` |  | `nil` |
| `charts.vault.seal.gcpckms.key_ring` | `string` |  | `nil` |
| `charts.vault.seal.gcpckms.kmsAccount` | `string` |  | `nil` |
| `charts.vault.seal.awskms.region` | `string` |  | `nil` |
| `charts.vault.seal.awskms.access_key` | `string` |  | `nil` |
| `charts.vault.seal.awskms.secret_key` | `string` |  | `nil` |
| `charts.vault.seal.awskms.endpoint` | `string` |  | `nil` |
| `charts.vault.seal.azurekeyvault.vault_name` | `string` |  | `nil` |
| `charts.vault.seal.azurekeyvault.tenant_id` | `string` |  | `nil` |
| `charts.vault.seal.azurekeyvault.client_id` | `string` |  | `nil` |
| `charts.vault.seal.azurekeyvault.client_secret` | `string` |  | `nil` |
| `charts.weave-scope.enabled` | `boolean` |  | `nil` |
| `cluster.apiName` | `string` | Only used for API/UI to show in app. | `nil` |
| `cluster.apiServer` | `string` | Used by kubectl for local deployment to target cluster. | `nil` |
| `cluster.domainSuffix` | `string` | Domain suffix for the cluster. Also added to list of dns zones in the Otomi Console. | `nil` |
| `cluster.entrypoint` | `string` | A Kubernetes API public IP address (onprem only). | `nil` |
| `cluster.k8sVersion` | `string` | The cluster k8s version. Otomi supports 2 minor versions backwards compatibility from the suggested default. | `nil` |
| `cluster.name` | `string` |  | `nil` |
| `cluster.provider` | `string` |  | `nil` |
| `cluster.region` | `string` | Dependent on provider. | `nil` |
| `cluster.vpcID` | `string` | AWS only. If provided will override autodiscovery from metadata. | `nil` |
| `customer.name` | `string` |  | `nil` |
| `dns.zones.[]` | `string` |  | `nil` |
| `dns.provider.aws.region` | `string` |  | `nil` |
| `dns.provider.azure.cloud` | `string` | Azure Cloud | `nil` |
| `dns.provider.azure.resourceGroup` | `string` | Azure resource group | `nil` |
| `dns.provider.azure.hostedZoneName` | `string` |  | `nil` |
| `dns.provider.azure.tenantId` | `string` | Azure tenant ID | `nil` |
| `dns.provider.azure.subscriptionId` | `string` | Azure subscription ID | `nil` |
| `dns.provider.azure.aadClientId` | `string` | Azure Application Client ID | `nil` |
| `dns.provider.azure.aadClientSecret` | `string` | Azure Application Client Secret | `nil` |
| `dns.provider.azure.useManagedIdentityExtension` | `boolean` | If you use Azure MSI, this should be set to true | `nil` |
| `dns.provider.google.serviceAccountKey` | `string` | A service account key in json format for managing a DNS zone. | `nil` |
| `dns.provider.google.project` | `string` |  | `nil` |
| `home.drone` | `string` |  | `slack` |
| `home.email.critical` | `string` | One or more email addresses (comma separated) for critical events. | `nil` |
| `home.email.nonCritical` | `string` | One or more email addresses (comma separated) for non-critical events. | `nil` |
| `home.groupInterval` | `string` | How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) | `5m` |
| `home.msteams.highPrio` | `string` | The low prio web hook. | `nil` |
| `home.msteams.lowPrio` | `string` | The high prio web hook. | `nil` |
| `home.receivers.[]` | `string` |  | `nil` |
| `home.repeatInterval` | `string` | How long to wait before sending a notification again if it has already been sent successfully for an alert. (Usually ~3h or more). | `3h` |
| `home.slack.channel` | `string` | The Slack channel for non-critical notifications. | `dev-mon-otomi` |
| `home.slack.channelCrit` | `string` | The Slack channel for critical notifications. | `dev-mon-otomi` |
| `home.slack.url` | `string` | A Slack webhook URL. | `nil` |
| `k8s.namespaces.[].disableIstioInjection` | `boolean` |  | `nil` |
| `k8s.namespaces.[].disablePolicyChecks` | `boolean` |  | `nil` |
| `k8s.namespaces.[].name` | `string` |  | `nil` |
| `kms.sops.provider` | `string` |  | `nil` |
| `kms.sops.aws.keys` | `string` | Comma separated list of one or two ARNs to keys as defined in AWS KMS. One if used for both enc+dec. Two if one for enc, other for dec. | `nil` |
| `kms.sops.aws.region` | `string` |  | `nil` |
| `kms.sops.provider` | `string` |  | `nil` |
| `kms.sops.azure.keys` | `string` | Comma separated list of one or two paths to keys as defined in Azure Keyvault. One if used for both enc+dec. Two if one for enc, other for dec. | `nil` |
| `kms.sops.azure.tenantId` | `string` | An Azure tenant id. | `nil` |
| `kms.sops.provider` | `string` |  | `nil` |
| `kms.sops.google.keys` | `string` | Comma separated list of one or two paths to keys as defined in GCP KMS. One if used for both enc+dec. Two if one for enc, other for dec. | `nil` |
| `kms.sops.google.accountJson` | `string` |  | `nil` |
| `kms.sops.google.project` | `string` |  | `nil` |
| `kms.sops.provider` | `string` |  | `nil` |
| `kms.sops.vault.keys` | `string` | Comma separated list of one or two paths to keys as defined in Vault. One if used for both enc+dec. Two if one for enc, other for dec. | `nil` |
| `kms.sops.vault.token` | `string` |  | `nil` |
| `letsencryptCA` | `string` |  | `nil` |
| `letsencryptRootCA` | `string` |  | `nil` |
| `oidc.adminGroupID` | `string` |  | `nil` |
| `oidc.apiUrl` | `string` | Only used for grafana when Keycloak is disabled. (Not recommended because that disables authorization.) | `nil` |
| `oidc.authUrl` | `string` | Only used for grafana when Keycloak is disabled. (Not recommended because that disables authorization.) | `nil` |
| `oidc.clientID` | `string` |  | `nil` |
| `oidc.clientSecret` | `string` |  | `nil` |
| `oidc.issuer` | `string` |  | `nil` |
| `oidc.scope` | `string` | Default values are used by keycloak. May be overridden in case keycloak is disabled. | `openid email profile` |
| `oidc.teamAdminGroupID` | `string` |  | `nil` |
| `oidc.tenantID` | `string` |  | `nil` |
| `oidc.tokenUrl` | `string` |  | `nil` |
| `oidc.usernameClaimMapper` | `string` | Claim name used by Keycloak to identify incoming users from identity provider | `${CLAIM.email}` |
| `oidc.subClaimMapper` | `string` | Select OIDC claim to be passed by Keycloak as a unique user identifier. Best to not change this from the default. | `sub` |
| `otomi.additionalClusters.[].apiName` | `string` | Only used for API/UI to show in app. | `nil` |
| `otomi.additionalClusters.[].apiServer` | `string` | Used by kubectl for local deployment to target cluster. | `nil` |
| `otomi.additionalClusters.[].domainSuffix` | `string` | Domain suffix for the cluster. Also added to list of dns zones in the Otomi Console. | `nil` |
| `otomi.additionalClusters.[].entrypoint` | `string` | A Kubernetes API public IP address (onprem only). | `nil` |
| `otomi.additionalClusters.[].k8sVersion` | `string` | The cluster k8s version. Otomi supports 2 minor versions backwards compatibility from the suggested default. | `nil` |
| `otomi.additionalClusters.[].name` | `string` |  | `nil` |
| `otomi.additionalClusters.[].provider` | `string` |  | `nil` |
| `otomi.additionalClusters.[].region` | `string` | Dependent on provider. | `nil` |
| `otomi.additionalClusters.[].vpcID` | `string` | AWS only. If provided will override autodiscovery from metadata. | `nil` |
| `otomi.adminPassword` | `string` |  | `generated string` |
| `otomi.globalPullSecret.username` | `string` |  | `nil` |
| `otomi.globalPullSecret.password` | `string` |  | `nil` |
| `otomi.globalPullSecret.email` | `string` |  | `not@us.ed` |
| `otomi.globalPullSecret.server` | `string` |  | `docker.io` |
| `otomi.hasCloudLB` | `boolean` | Set this to true when an external LB exists or needs to be started (AWS ALB, Azure AppGW, Google Apigee). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion. | `nil` |
| `otomi.isHomeMonitored` | `boolean` | Whether this cluster is home monitored (like when under a Premium SLA). Sends criticals home. | `nil` |
| `otomi.isManaged` | `boolean` | Whether masters are managed and not under control. Set this to false when onprem. | `true` |
| `otomi.isMultitenant` | `boolean` | Whether to separate team metrics and logs. Disabling this lets everybody be admin and see everything. | `true` |
| `otomi.pullSecret` | `string` | The pullsecret to deploy the Otomi API and Console. Requires an Otomi license. | `nil` |
| `otomi.version` | `string` | Best pin this to a valid release version found in the repo. | `latest` |
| `policies.banned-image-tags.tags.[]` | `string` |  | `nil` |
| `policies.banned-image-tags.enabled` | `boolean` |  | `nil` |
| `policies.container-limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `policies.container-limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `policies.container-limits.enabled` | `boolean` |  | `nil` |
| `policies.psp-allowed-repos.repos.[]` | `string` |  | `nil` |
| `policies.psp-allowed-repos.enabled` | `boolean` |  | `nil` |
| `policies.psp-host-filesystem.allowedHostPaths.[].pathPrefix` | `string` |  | `nil` |
| `policies.psp-host-filesystem.allowedHostPaths.[].readOnly` | `boolean` |  | `nil` |
| `policies.psp-host-filesystem.enabled` | `boolean` |  | `nil` |
| `policies.psp-allowed-users.runAsUser.rule` | `string` |  | `nil` |
| `policies.psp-allowed-users.runAsUser.ranges.[].min` | `integer` |  | `nil` |
| `policies.psp-allowed-users.runAsUser.ranges.[].max` | `integer` |  | `nil` |
| `policies.psp-allowed-users.runAsGroup.rule` | `string` |  | `nil` |
| `policies.psp-allowed-users.runAsGroup.ranges.[].min` | `integer` |  | `nil` |
| `policies.psp-allowed-users.runAsGroup.ranges.[].max` | `integer` |  | `nil` |
| `policies.psp-allowed-users.supplementalGroups.rule` | `string` |  | `nil` |
| `policies.psp-allowed-users.supplementalGroups.ranges.[].min` | `integer` |  | `nil` |
| `policies.psp-allowed-users.supplementalGroups.ranges.[].max` | `integer` |  | `nil` |
| `policies.psp-allowed-users.fsGroup.rule` | `string` |  | `nil` |
| `policies.psp-allowed-users.fsGroup.ranges.[].min` | `integer` |  | `nil` |
| `policies.psp-allowed-users.fsGroup.ranges.[].max` | `integer` |  | `nil` |
| `policies.psp-allowed-users.enabled` | `boolean` |  | `nil` |
| `policies.psp-host-security.enabled` | `boolean` |  | `nil` |
| `policies.psp-host-networking-ports.enabled` | `boolean` |  | `nil` |
| `policies.psp-privileged.enabled` | `boolean` |  | `nil` |
| `policies.psp-capabilities.enabled` | `boolean` |  | `nil` |
| `policies.psp-capabilities.allowedCapabilities.[]` | `string` |  | `nil` |
| `policies.psp-capabilities.requiredDropCapabilities.[]` | `string` |  | `nil` |
| `policies.psp-forbidden-sysctls.enabled` | `boolean` |  | `nil` |
| `policies.psp-forbidden-sysctls.forbiddenSysctls.[]` | `string` |  | `nil` |
| `policies.psp-apparmor.enabled` | `boolean` |  | `nil` |
| `policies.psp-apparmor.allowedProfiles.[]` | `string` |  | `nil` |
| `policies.psp-seccomp.enabled` | `boolean` |  | `nil` |
| `policies.psp-seccomp.allowedProfiles.[]` | `string` |  | `nil` |
| `policies.psp-selinux.enabled` | `boolean` |  | `nil` |
| `policies.psp-selinux.seLinuxContext` | `string` |  | `nil` |
| `policies.psp-selinux.allowedSELinuxOptions.[].level` | `string` |  | `nil` |
| `policies.psp-selinux.allowedSELinuxOptions.[].role` | `string` |  | `nil` |
| `policies.psp-selinux.allowedSELinuxOptions.[].type` | `string` |  | `nil` |
| `policies.psp-selinux.allowedSELinuxOptions.[].user` | `string` |  | `nil` |
| `services.[].authz.forwardOriginalToken` | `boolean` | If true istio will forward the bearer token instead of removing it from the headers. | `nil` |
| `services.[].authz.workload.patternProperties.^((([a-zA-Z0-9]\|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]\|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` | `string` |  | `nil` |
| `services.[].domain` | `string` | A custom service domain name (max 64 bytes). | `nil` |
| `services.[].forwardPath` | `boolean` | Whether to forward the path into the service, or 'terminate' it. | `nil` |
| `services.[].hide` | `boolean` | Used by otomi console to determine wether to render it on screen or not. Only used by core services. | `nil` |
| `services.[].host` | `string` | Reference to another core service name. Used by otomi console to show a variation of a core service with a different path (i.e. Loki). Only used by core services. | `nil` |
| `services.[].id` | `string` | Unique identifier created by and used in API. Optional. | `nil` |
| `services.[].auth` | `boolean` | When true the service will get it's own domain by prefixing the app name to the cluster domain. Mostly used by core apps. | `nil` |
| `services.[].isShared` | `boolean` | When true the service will get it's own domain by prefixing the app name to the cluster domain. Mostly used by core apps. | `nil` |
| `services.[].ksvc.annotations.patternProperties.^((([a-zA-Z0-9]\|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]\|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` | `string` |  | `nil` |
| `services.[].ksvc.podSecurityContext.runAsNonRoot` | `boolean` |  | `true` |
| `services.[].ksvc.podSecurityContext.runAsUser` | `integer` |  | `1001` |
| `services.[].ksvc.podSecurityContext.runAsGroup` | `integer` |  | `1001` |
| `services.[].ksvc.image.pullPolicy` | `string` |  | `IfNotPresent` |
| `services.[].ksvc.image.repository` | `string` | A container image repository. | `nil` |
| `services.[].ksvc.image.tag` | `string` |  | `latest` |
| `services.[].ksvc.securityContext.runAsNonRoot` | `boolean` |  | `true` |
| `services.[].ksvc.securityContext.runAsUser` | `integer` |  | `1001` |
| `services.[].ksvc.securityContext.runAsGroup` | `integer` |  | `1001` |
| `services.[].ksvc.resources.limits.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `services.[].ksvc.resources.limits.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `services.[].ksvc.resources.requests.cpu` | `string` | Amount of cores, or slice of cpu in millis. | `nil` |
| `services.[].ksvc.resources.requests.memory` | `string` | Amount of memory. Valid units are E\|P\|T\|G\|M\|K\|Ei\|Pi\|Ti\|Gi\|Mi\|Ki. | `nil` |
| `services.[].ksvc.env.patternProperties.[a-zA-Z_]{1,}[a-zA-Z0-9_]*` | `string` |  | `nil` |
| `services.[].ksvc.files.patternProperties.^[/].*` | `string` |  | `nil` |
| `services.[].ksvc.secrets.[]` | `string` |  | `nil` |
| `services.[].ksvc.secretMounts.patternProperties.^[/].*$` | `string` |  | `nil` |
| `services.[].ksvc.command.[]` | `string` |  | `nil` |
| `services.[].ksvc.args.[]` | `string` |  | `nil` |
| `services.[].ksvc.autoCD.semver` | `string` | Use this filter if your images tags follow semantic versioning rules (MAJOR.MINOR.PATCH). E.g.: PATCH only: "~1.1", MINOR and PATCH only "~1", ALL "\*". | `nil` |
| `services.[].ksvc.autoCD.tagMatcher` | `string` |  | `semver` |
| `services.[].ksvc.autoCD.glob` | `string` | Use this filter if you want to make simple non-standard patterns. E.g.: "master-v1._._". | `nil` |
| `services.[].ksvc.autoCD.tagMatcher` | `string` |  | `glob` |
| `services.[].ksvc.containerPort` | `number` | Container port the knative pod will connect with. Leaving this empty will let knative infer the port from the container, which usually works, but might be problematic when the container does not specifically expose a port. (As is the case with nginx derived images!) | `nil` |
| `services.[].ksvc.scaleToZero` | `boolean` | Scales to zero after 60 seconds and needs approximately 8 seconds to start back up. | `nil` |
| `services.[].ksvc.predeployed` | `boolean` | Has this service been predeployed? Otherwise otomi will start it with the configuration given. | `true` |
| `services.[].logo.name` | `string` |  | `nil` |
| `services.[].name` | `string` | Short name. Will be used for generation of knative service name, as well as service URL. | `nil` |
| `services.[].namespace` | `string` | A kubernetes namespace. Only used by core services, so should be disallowed for non-admins. | `nil` |
| `services.[].ownHost` | `boolean` | When true the service will get it's own domain by prefixing the app name to the team domain. Mostly set to true. This will probably be removed soon. | `true` |
| `services.[].path` | `string` | Used by otomi-console to render a path for the app. Only used by core services. | `nil` |
| `services.[].paths.[]` | `string` | Path mapping to only route certain paths to the service. This allows micro services to operate on the same domain and port. When left empty all paths will go to this service. | `nil` |
| `services.[].port` | `number` | Points to the backing k8s service (only used when 'svc' is set). | `nil` |
| `services.[].svc` | `string` | When given a backing k8s service is expected to be deployed with this name, which will be exposed through this team service. | `nil` |
| `services.[].tlsPass` | `boolean` | Will pass the request to the backing service without TLS termination. | `nil` |
| `services.[].type` | `string` | Will determine the ingress routing. | `public` |
| `smtp.auth_identity` | `string` |  | `nil` |
| `smtp.auth_password` | `string` |  | `nil` |
| `smtp.auth_secret` | `string` |  | `nil` |
| `smtp.auth_username` | `string` |  | `nil` |
| `smtp.from` | `string` | The "from" address. Defaults to alerts@$clusterDomain. | `nil` |
| `smtp.hello` | `string` |  | `nil` |
| `smtp.smarthost` | `string` | The smtp host:port combination. | `nil` |