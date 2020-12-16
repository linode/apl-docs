---
slug: installation/prerequisites
title: Prerequisites
---

### 1. Working k8s cluster(s)

Otomi needs a working kubernetes cluster to deploy on. It supports two versions down from 1.19, so at a minimum 1.17 is required. If you don't have access with kubectl to your cluster, you may have to pull the credentials from the cloud first:

- Azure: `az aks get-credentials --resource-group $RG --name $CLUSTER_NAME --admin`
- AWS: `aws eks update-kubeconfig --name $CLUSTER_NAME`
- Google: `gcloud container clusters get-credentials $CLUSTER_NAME --region europe-west4 --project xxx`

If you are not logged in with the correct credentials then re-login first:

- Azure: `az login`
- AWS: `aws login eks`
- Google: `gcloud auth login`

### 2. Kubectl running

To be able to target different kube contexts, kubectl needs to be installed.

### 3. Docker running

Otomi runs everything else from containers, so please start docker if you haven't already.

### 4. KMS credentials to manage keys for encryption (optional)

If you would like the secrets in the values repo to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by [sops](https://github.com/mozilla/sops), the tool used for encryption by otomi. Please read up there on how to work with sops, as it is out of scope for these docs.

### 5. Pull secret for the API (optional)

:::info Otomi Enterprise Edition license needed

If you have a license for Otomi EE you can run the api, unlocking self service features.

:::

When you have a paid license to use the api you will have a pull secret. Please keep it handy for the [setup steps](setup).
