---
slug: get-started
title: Get started with installation
sidebar_label: Get started
---

## Prerequisites

### Client binaries

When installing Otomi using the chart, make sure the following client binaries exist:

- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster
- [Helm](https://helm.sh/docs/intro/install/) for helm chart installation of Otomi

### Supported Providers

:::info
We have created [quickstarts](https://github.com/redkubes/quickstart) for Azure, GCP, AWS, Linode, Digital Ocean and Minikube to help you spin-up a Kubernetes cluster.
:::

#### Azure (AKS)

To install Otomi on a AKS cluster in Azure, use the `azure` provider. The `azure` provider includes creating optimized storage classes and optional integration with the a Application Gateway Ingress Controller add-on.

#### Amazon Web Services (EKS)

To install Otomi on a EKS cluster in AWS, use the `aws` provider.

#### Google Cloud Platform (GKE)

To install Otomi on a GKE cluster in GCP, use the `google` provider.

#### Digital Ocean

To install Otomi on a Kubernetes cluster in Digital Ocean, use the `digitalocean` provider. Otomi is also available in the Digital Ocean [marketplace](https://marketplace.digitalocean.com/apps/otomi?refcode=476bfcac9ec9&action=deploy).

#### OVHcloud

To install Otomi on a OVHcloud [Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/), use the `ovh` provider.

#### Vultr (VKE)

To install Otomi on a [Vultr Kubernetes Engine (VKE)](https://www.vultr.com/docs/vultr-kubernetes-engine/) cluster, use the `vultr` provider.

#### All others

Use the `custom` provider for all other clouds, and when running Kubernetes on your own hardware (including Minikube on your local machine). The custom provider uses the default available storage classes. The only requirement for using the custom provider is to be able to create a Kubernetes LoadBalancer Service that obtains an external accessible IP.

:::info NOTE

When using Minikube, only Otomi Core apps can be used! Activating more apps will require more compute resources. We advise to have a node pool available with at least 12 vCPU and 32 GiB memory.

:::

### Kubernetes versions

Otomi currently supports the following Kubernetes versions:

- `1.18`
- `1.19`
- `1.20`
- `1.21`
- `1.22`
- `1.23`

### Minimal compute resource requirements

Otomi requires a node pool with at least **6 vCPU** threads and **8GiB+ RAM**. Note that this is the requirements for a minimal (default) install. When activating more apps, you'll probably need more resources.

:::info ATTENTION

The minimal resource requirement to run Otomi is based on running Core Apps only! The core apps provide an advanced ingress architecture based on Nginx, Istio, Keycloak, Oaut2 Proxy and Certmanager. Activating optional apps will require more compute resources. We advise to have a node pool available with 12 vCPU and 32 GiB memory.

:::

### CNI

To use the network policies feature in Otomi, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.

## Installation

### Install Otomi with Helm

#### Add the Otomi repository

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

#### Minimal configuration\*\*

```yaml
cluster:
  k8sVersion: "1.23" # currently 1.18, 1.19, 1.20, 1.21, 1.22 and 1.23 are supported
  name: # the name of your cluster
  provider: # choose between aws, azure, google, digitalocean or custom
```

#### Custom values

To view the required `values.yaml` file with detailed comments, view and download the chart's latest [values.yaml](https://github.com/redkubes/otomi-core/blob/main/chart/otomi/values.yaml). Run the following command to view _all_ the values (which might be overwhelming):

```bash
helm show values otomi/otomi
```

To test wether the input values are correct run the following command:

```bash
helm template -f values.yaml otomi/otomi
```

#### Install the Chart

Install the chart with the following command:

```bash
helm install -f values.yaml otomi otomi/otomi
```

#### Monitoring the chart install

The chart deploys a Job (`otomi`) in the `default` namespace. Monitor the chart install using `kubectl`:

```bash
# get the status of the job
kubectl get job otomi -w
# watch the helm chart install status:
watch helm list -Aa
```

Or view detailed info about kubernetes resources with [k9s](https://k9scli.io)

### Installing from source

As an alternative, you can also clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code.

#### Download source

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

Doing a Helm uninstall will only remove the job used to deploy Otomi. It will not remove all the installed components. If you would like to do a complete uninstall, we advise to first clone the `otomi/values` repository (to secure the configuration) and then uninstall using Otomi CLI.

## Optional Configuration

You can optionally configure Otomi to use an external IDP (Azure AD), use an external Key Management Service (KMS) provider for SOPS and use a DNS zone in combination with LetsEncrpt certificates. Below you can find detailed instructions on how to set up Azure AD as an external IDP and configure KMS. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta.

### Use DNS and Let's Encrypt

By default, Otomi uses the public IP address of the load balancer for nameresolving using [nip.io](http://nip.io). To use DNS with LetsEncrypt, follow these instructions:

- [Setting up external DNS in AWS](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md)
- [Setting up external DNS in Azure](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md)
- [Setting up external DNS in Google](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md)

To install Otomi with DNS and Let's Encrypt, use the following values:

```yaml
otomi:
  hasExternalDNS: true

# Configure cert-manager
apps:
  cert-manager:
    issuer: letsencrypt
    stage: staging # defaults to 'production' when commented out

# Configure DNS
dns:
#   domainFilters: []
#   zoneIdFilters: []
#   provider: # provide one of the following below: aws|azure|google
#     aws:
#       # next two keys are optional for explicit access with an iam role
#       # (if no metadata exists with implicit role access to manage dns)
#       accessKeySecret: ''
#       secretAccessKey: ''
#       # region is always needed
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

To install Otomi with Azure Active Directory as IdP instead of (default) Keycloak, use the following values:

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

But you can also enable SOPS/KMS after installing Otomi using Otomi Console.

## Activation

After Otomi is installed, Drone needs to be activated. Follow the instructions below:

### Step 1: Get the log output of the installer job

When the installer job (in the default namespace) has finished, copy the URL and the generated password from the bottom of the logs, sign in to the console with the provided URL, username and password.

Use the following command to get the logs of the installer job:

```
kubectl logs jobs/otomi -n default -f
```

### Step 2 (optional): Add the auto generated CA to your keychain

Otomi by default automatically generates a CA. The generated CA is of course not trusted on your local machine. Here are some options to prevent you from clicking away lots of security warning in your browser:

1. In the left menu of the console, click on "Download CA"
2. Double click the downloaded CA.crt or add the CA to your keychain on Mac using the following command:

```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt
```

On Windows, use PowerShell (running as Administrator) with the Certutil:

```powershell
certutil.exe -addstore root <downloaded cert path>
```

Or:

```powershell
Import-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\LocalMachine\Root
# Restart the browser
```

But you could also run Chrome in insecure mode:

```bash
alias chrome-insecure='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'
```

3. Optional: Restart Docker (to support pushing images to Harbor)

### Step 3: Activate Drone

[Drone](https://www.drone.io/) is an integral part in the deployment of Otomi cluster configuration.

1. In the side menu of Otomi Console under `platform` click on the **Drone** app
2. Click on the `play` button in the top right. A new tab will open for Drone
3. Sign in locally with as `otomi-admin` and the password provided in the logs of the installer job.
4. Click on `Authorize Application`
5. Click on `Submit on the Complete your Drone Registration page. You don't need to fill in your Email, Full Name or Company Name if you don't want to
6. Click on the `otomi/values` repository
7. Click on `+ Activate Repository`

### Step 4 (Optional): Create a new admin user

:::info ATTENTION

We strongly advise to not use the default `otomi-admin` account after activation and to not change the password. Store it somewhere safe and only use it in case absolutely required.

:::

[Create a new user account in Keycloak](/docs/apps/keycloak#step-2-create-a-user-in-keycloak) and add the new user to the `otomi-admin` and `team-admin`.

### Step 5 (Optional): Add the URL of the Kubernetes API

:::info NOTE

Adding the URL of the K8s cluster API is required by teams to be able to download the KUBECONFIG

:::

- Under `Platform` in Otomi Console, click on `Settings`
- Click on `Cluster`
- Add the full URL of the API server
- Click on `Submit`
- Click on `Deploy Changes`
