---
slug: azure
title: Azure
sidebar_label: Azure
---

# Install Otomi on AKS with DNS

## Prerequisites

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [jq](https://jqlang.github.io/jq/download/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Helm](https://kubernetes.io/docs/tasks/tools/)

> Note: If you login via [Azure Cloud Shell]( https://shell.azure.com), you don't need to install the prerequisites

**Azure CLI Cheat Sheet**

```bash
# Sign in to Azure
az login
# Get a list of subscriptions for the logged in account
az account list
# Set subscription
az account set --subscription=<subscription_id>
```

## Create an AKS cluster

Setting the environment variables
```bash
# Set Resource Group Name 
RGNAME=rg-otomi
# Set Region (Location) or any other location
LOCATION=westeurope
# Create Resource Group
az group create -n $RGNAME -l $LOCATION
# Set Cluster name
CLUSTER_NAME=otomi
```

Creating the cluster

```bash
# Create AKS cluster
az aks create --name $CLUSTER_NAME \
--resource-group $RGNAME \
--location $LOCATION \
--zones 1 2 \
--vm-set-type VirtualMachineScaleSets \
--nodepool-name otomipool \
--node-count 3 \
--node-vm-size Standard_F8s_v2 \
--kubernetes-version 1.29.1 \
--enable-cluster-autoscaler \
--min-count 1 \
--max-count 6 \
--max-pods 100 \
--network-plugin azure \
--network-policy calico \
--outbound-type loadBalancer \
--generate-ssh-keys
```

Update the Kubernetes config file

```bash
az aks get-credentials -n $CLUSTER_NAME -g $RGNAME
```

## Configure DNS

### Create an Azure DNS zone

- Create a resource group:

```
$ az group create --name "MyDnsResourceGroup" --location $LOCATION
```

- Create a Azure DNS zone for example.com:

```
$ az network dns zone create --resource-group "MyDnsResourceGroup" --name "example.com"
```

Substitute a domain you own for example.com if desired.

If using your own domain that was registered with a third-party domain registrar, you should point your domain's name servers to the values in the `nameServers` field from the JSON data returned by the `az network dns zone create` command. Please consult your registrar's documentation on how to do that.

### Create a Service Principal

Create a Service Principal with a minimum access level of DNS Zone Contributor or Contributor to the DNS zone(s) and Reader to the resource group containing the Azure DNS zone(s).

```bash
$ DNS_NEW_SP_NAME="ExternalDnsServicePrincipal" # name of the service principal
$ AZURE_DNS_ZONE_RESOURCE_GROUP="MyDnsResourceGroup" # name of resource group where dns zone is hosted
$ AZURE_DNS_ZONE="example.com" # DNS zone name like example.com or sub.example.com

# Create the service principal
$ DNS_SP=$(az ad sp create-for-rbac --name $DNS_NEW_SP_NAME)
$ DNS_SP_APP_ID=$(echo $DNS_SP | jq -r '.appId')
$ DNS_SP_PASSWORD=$(echo $DNS_SP | jq -r '.password')
```

Grant access to Azure DNS zone for the service principal.

```bash
# fetch DNS id used to grant access to the service principal
DNS_ID=$(az network dns zone show --name $AZURE_DNS_ZONE \
 --resource-group $AZURE_DNS_ZONE_RESOURCE_GROUP --query "id" --output tsv)

# 1. as a reader to the resource group
$ az role assignment create --role "Reader" --assignee $DNS_SP_APP_ID --scope $DNS_ID

# 2. as a contributor to DNS Zone itself
$ az role assignment create --role "Contributor" --assignee $DNS_SP_APP_ID --scope $DNS_ID
```

## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: azure
  domainSuffix: azure.example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - example.com
  provider:
    azure:
      resourceGroup: $AZURE_DNS_ZONE_RESOURCE_GROUP
      aadClientId: $DNS_SP_APP_ID
      aadClientSecret: $DNS_SP_PASSWORD
      tenantId: "$(az account show --query tenantId -o tsv)"
      subscriptionId: "$(az account show --query id -o tsv)"
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@example.com
EOF
```

And adjust the `domainSuffix`, `domainFilters` and `email`.

## Install Otomi using helm

Install Otomi using Helm:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
helm install -f values.yaml otomi otomi/otomi
```

Monitor the logs of the installer job:

```bash
kubectl logs jobs/otomi -n default -f
```

When the installer is finished, copy the `url` and `admin-password` from the console output.

Follow the activation steps [here.](https://otomi.io/docs/get-started/activation)

:::tip
Like to learn how to use Otomi? Go through the [Get Started labs](../labs/overview.md)
:::