---
slug: installation/azure/
title: Install on Azure
---

The following example shows the minimal values to deploy Otomi (with all apps) on a Kubernetes cluster in Azure.

```
charts:
  cert-manager:
    email: # an email address
    stage: # use staging or production Let's Encrypt certificates
  external-dns:
    domainFilters:
      - my.domain.com # the (hosted) domain zone you're using
# Turn optional apps on or off
  harbor:
    enabled: # true by default. Set to false to disable
  kubeapps:
    enabled: # true by default. Set to false to disable
  httpbin:
    enabled: # true by default. Set to false to disable
cluster:
  domainSuffix: # The domain suffix the cluster is using
  k8sVersion: "1.19" #the K8s version. Choose 
  name: demo
  owner: redkubes
  provider: azure
otomi:
  adminPassword: # provide a password for the build-in otomi-admin account.
  globalPullSecret: # fill in your own pull secret if your using more then 100 pulls per day
    username: # your dockerhub username
    password: # your dockerhub password
  version: v0.14.4 # Optionally choose the Otomi release you would like to install
dns:
  provider:
    azure:
      resourceGroup: # the Azure resource group of Azure DNS
      aadClientId: # The client ID of the Service Principal with sufficient access rights
      aadClientSecret: # The client secret of the SP (will be encrypted in the values)
      tenantId: # The ID of the Azure tenant of Azure DNS
      subscriptionId: # The ID of the subscription of Azure DNS
kms:
  sops:
    provider: azure
    azure:
      tenantId: 57a3f6ea-7e70-4260-acb4-e06ce452f695
      clientId: ca6680ae-6803-453b-94ce-2750b5d6c9e8
      clientSecret: c14892a6-13c0-4b3f-ae6f-4dc82ed730e4
      keys: >-
        https://otomi-vault.vault.azure.net/keys/otomi-key/0fb75d551be64ae3b9411014e50e925b
oidc:
  adminGroupID: e69ded30-0882-4490-8e0f-2e67625a0693
  clientID: 5eb129f2-1b26-4910-a05a-70d8b6a380cd
  clientSecret: FPz36T8rSF..sV__5Qyqix~.mD2SL6O3o.
  issuer: https://login.microsoftonline.com/57a3f6ea-7e70-4260-acb4-e06ce452f695/
  teamAdminGroupID: 3c63814c-59df-46c3-9a69-d9e1c3611097
  tenantID: 57a3f6ea-7e70-4260-acb4-e06ce452f695
```