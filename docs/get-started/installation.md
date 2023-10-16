---
slug: installation
title: Installation
sidebar_label: Installation
---

## Install Otomi with Helm

### Add the Otomi repository

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

### Minimal configuration

:::info
As of version [1.0.0](https://github.com/redkubes/otomi-core/releases/tag/v0.21.0) Otomi supports Kubernetes versions `1.25`,`1.26` and `1.27`.
:::

:::info
The Otomi [Builds](../for-devs/console/builds.md) and [Projects](../for-devs/console/projects.md) features and using Harbor for private registries is NOT supported when Otomi is installed with minimal configuration. Install Otomi [with DNS](#install-otomi-with-dns) to use all Otomi features.
:::

```yaml
cluster:
  name: # the name of your cluster
  provider: # choose between aws, azure, google, digitalocean, ovh, vultr, scaleway or custom
```

When the chart is installed, follow the [activation steps](activation). 

<!-- Part of the activation is to register your cluster in [Otomi Cloud](https://portal.otomi.cloud) and download a Community Edition License to use Otomi Console and Otomi API. You can also first create a license key and add it to the chart values:

```yaml
license: <License Key>
``` -->

### Custom values

To view the required `values.yaml` file with detailed comments, view and download the chart's latest [values.yaml](https://github.com/redkubes/otomi-core/blob/main/chart/otomi/values.yaml). Run the following command to view _all_ the values (which might be overwhelming):

```bash
helm show values otomi/otomi
```

To test wether the input values are correct run the following command:

```bash
helm template -f values.yaml otomi/otomi
```

### Install the Chart

Install the chart with the following command:

```bash
helm install -f values.yaml otomi otomi/otomi
```

### Monitoring the chart install

The chart deploys a Job (`otomi`) in the `default` namespace. Monitor the chart install using `kubectl`:

```bash
# get the status of the job
kubectl get job otomi -w
# watch the helm chart install status:
watch helm list -Aa
```

Or view detailed info about kubernetes resources with [k9s](https://k9scli.io)

When the chart is installed, follow the [activation steps](activation)

## Installing from source

As an alternative, you can also clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code.

### Download source

```bash
git clone https://github.com/redkubes/otomi-core.git
cd otomi-core
```

#### Install

Now customize the `values.yaml` file.

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

## Optional Configuration

You can optionally configure Otomi to use an external IDP (Azure AD), use an external Key Management Service (KMS) for SOPS and use a DNS zone in combination with LetsEncrpt certificates or a custom CA. Below you can find detailed instructions on how to set up Azure AD as an external IDP and configure KMS. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta.

### Install Otomi with DNS

When Otomi is installed with minimal values, Otomi uses the public IP address of the load balancer for nameresolving using [nip.io](http://nip.io). To install Otomi with DNS, use the following values:

```yaml
cluster:
  name: # the name of your cluster
  provider: # choose between aws, azure, google, digitalocean, ovh, vultr, scaleway or custom
  domainSuffix: cluster-name.your-domain.com
otomi:
  hasExternalDNS: true

apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@your-domain.com

dns:
#   domainFilters:
      - your-domain.com
#   provider: # provide one of the following: aws|azure|google|digitalocean|azure-private-dns|cloudflare|other
#     aws:
#       credentials:
#         secretKey: ''
#         accessKey: ''
#       region: eu-central-1
#       role: '' # optional ARN, may be set explicitly if no metadata can be accessed
#     azure:
#       aadClientId: ''
#       aadClientSecret: ''
#       tenantId: '' # optional
#       subscriptionId: '' # optional
#     google:
#       serviceAccountKey: ''
#       project: ''
```

See [here](../for-ops/how-to/install-with-dns.md) for more examples on how to install Otomi with DNS.

### Use Azure AD as IDP

The authentication of brokered identities through Azure AD requires a service principal with certain Azure AD API permissions. An app registration needs to be created with the following API permissions:

| API / Permission name       | Type      | Description                   |
| --------------------------- | --------- | ----------------------------- |
| Microsoft Graph / email     | Delegated | View users' email address     |
| Microsoft Graph / openid    | Delegated | Sign users in                 |
| Microsoft Graph / profile   | Delegated | View users' basic profile     |
| Microsoft Graph / User.Read | Delegated | Sign in and read user profile |

And the following token configurations:

| Claim       | Description                                      | Token type       | Optional settings |
| ----------- | ------------------------------------------------ | ---------------- | ----------------- |
| family_name | Provides the last name, surename, or family name | ID               | -                 |
| given_name  | Provides the first or "give" name of the user    | ID               | -                 |
| groups      | Optional formatting for group claims             | ID, Access, SAML | Default           |
| upn         | An identifier for the user that can be used ...  | ID               | Default           |

Note that the group type should be set to 'security groups'.

At the 'Authentication' tab you should be able to set the following callback URL§s and enable that both "Access tokens" and "ID tokens" are issued and public client flows are allowed:

- `https://keycloak.<dns-zone-name>/realms/master/broker/otomi-idp/endpoint`
- `https://keycloak.<dns-zone-name>`

To install Otomi with Azure Active Directory as an IdP instead of (default) using Keycloak as an IdP, use the following values:

```yaml
oidc:
  clientID: ""
  clientSecret: ""
  issuer: ""
  # IDP group id used to identify global admin
  adminGroupID: ""
  # IDP group id used to identify team admin
  teamAdminGroupID: ""
```

:::note

`otomi-idp` is the default KeyCloak alias (shown as login title). To use another alias, add the following to the chart values:

```yaml
apps:
  keycloak:
    idp:
      alias: <your-alias>
```
:::

### Use KMS to manage keys for encryption

If you would like the secrets in the `values` repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by [sops](https://github.com/mozilla/sops), the tool used for encryption.

Find quickstart documentation below on how to setup KMS access per supported provider:

- [AWS KMS](https://aws.amazon.com/kms/getting-started/)
- [Azure Vault](https://azure.microsoft.com/en-us/services/key-vault/#getting-started)
- [Google KMS](https://cloud.google.com/kms/docs/quickstart)

Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps.

To install Otomi with SOPS/KMS, use the following values:

```yaml
kms:
  sops:
    provider: "" # provider can be one of aws|azure|google|vault
#     aws:
#       keys: ''
#       accessKey: ''
#       secretKey: ''
#       region: ''
#     azure:
#       keys: ''
#       tenantID: ''
#       clientID: ''
#       clientSecret: ''
#     google:
#       keys: ''
#       accountJson: ''
#       project: ''
#     vault:
#       token: ''
```