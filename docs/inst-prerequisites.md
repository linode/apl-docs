---
id: prerequisites
title: Prerequisites
---

Otomi needs a working kubernetes cluster to deploy on.
If you don't have access with kubectl to your cluster, you may have to pull the credentials from the cloud first:

- Azure: `az aks get-credentials --resource-group $RG --name $CLUSTER_NAME --admin`
- AWS: `aws eks update-kubeconfig --name $CLUSTER_NAME`
- Google: `gcloud container clusters get-credentials $CLUSTER_NAME --region europe-west4 --project xxx`

If you are not logged in with the correct credentials then re-login first:

- Azure: `az login`
- AWS: `aws login eks`
- Google: `gcloud auth login`
