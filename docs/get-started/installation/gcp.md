---
slug: gcp
title: Google Cloud Platform
sidebar_label: Google Cloud Platform
---

# Install Otomi on GKE with a GCP DNS zone

## Prerequisites

- [GCloud SDK](https://cloud.google.com/sdk/docs/install)

>Note: If you login via [Google Cloud Shell](https://cloud.google.com/shell), you don't need to install the prerequisites

**GCloud CLI Cheat Sheet**

```bash
# Initialize and authentication
gcloud init
gcloud auth login
gcloud config set project PROJECT_ID

# Enable google services api
gcloud services enable compute.googleapis.com
gcloud services enable container.googleapis.com
```

---

## Create a GKE cluster

Set up environment variables

```bash
# Set Cluster name
CLUSTER_NAME=otomi
# Set region
COMPUTE_REGION=europe-west4
```

```bash
# Create the cluster 
gcloud container clusters create $CLUSTER_NAME \
    --enable-autoscaling \
    --enable-network-policy \
    --num-nodes 1 \
    --min-nodes 1 \
    --max-nodes 3 \
    --machine-type e2-standard-8 \
    --region $COMPUTE_REGION
```

Update the Kubernetes config file

```bash
gcloud container clusters get-credentials $CLUSTER_NAME --region $COMPUTE_REGION
```

## Configure DNS

### Create Cloud DNS Zone

Create a DNS zone which will contain the managed DNS records. If using your own domain that was registered with a third-party domain registrar, you should point your domain's name servers to the values under the `nameServers` key. Please consult your registrar's documentation on how to do that.  This tutorial will use example domain of  `example.com`.

```bash
gcloud dns managed-zones create "example-com" --dns-name "example.com." \
  --description "Automatically managed zone by kubernetes.io/external-dns"
```

Make a note of the nameservers that were assigned to your new zone.

```bash
gcloud dns record-sets list \
    --zone "example-com" --name "example.com." --type NS
```

### Static Credentials

In this scenario, a new GSA (Google Service Account) is created that has access to the CloudDNS zone.  The credentials for this GSA are saved and installed as a Kubernetes secret that will be used by ExternalDNS.  

This allows only containers that have access to the secret, such as ExternalDNS to update records on the Cloud DNS Zone.

#### Create GSA for use with static credentials

```bash
DNS_SA_NAME="external-dns-sa"
DNS_SA_EMAIL="$DNS_SA_NAME@${GKE_PROJECT_ID}.iam.gserviceaccount.com"

# create GSA used to access the Cloud DNS zone
gcloud iam service-accounts create $DNS_SA_NAME --display-name $DNS_SA_NAME

# assign google service account to dns.admin role in cloud-dns project
gcloud projects add-iam-policy-binding $DNS_PROJECT_ID \
  --member serviceAccount:$DNS_SA_EMAIL --role "roles/dns.admin"
```

#### Create credentials

Generate static credentials from the ExternalDNS GSA.

```bash
# download static credentials
gcloud iam service-accounts keys create /local/path/to/credentials.json \
  --iam-account $DNS_SA_EMAIL
```

Get the contents of the `credentials.son`. Note that you don't need to create a Kubernetes secret. The credentials will be directly provided to the Otomi installer and Otomi will create the secret.

```bash
cat /local/path/to/credentials.json
```

```json
{
    "type": "service_account",
    "project_id": "xxx",
    "private_key_id": "xxx",
    "private_key": xxx,
    "client_email": "external-dns-sa@otomi.iam.gserviceaccount.com",
    "client_id": "000000000000",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx.iam.gserviceaccount.com"
}

```
## Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: google
  domainSuffix: gcp.example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - example.com
  provider:
    google:
      serviceAccountKey: |
        {
            "type": "service_account",
            "project_id": "xxx",
            "private_key_id": "xxx",
            "private_key": xxx,
            "client_email": "external-dns-sa@otomi.iam.gserviceaccount.com",
            "client_id": "000000000000",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx.iam.gserviceaccount.com"
        }
      project: $DNS_PROJECT_ID
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