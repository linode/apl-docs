---
slug: dns
title: DNS
sidebar_label: DNS
---

The APL [Builds](../../for-devs/console/builds.md) and [Projects](../../for-devs/console/projects.md) features are NOT supported when APL is installed with minimal values. Install APL with DNS to use all APL features.

## Route53

Follow these steps to use AWS Route53:

1. Install [AWS CLI](https://aws.amazon.com/cli/)

2. Register a domain and retrieve the Hosted zone ID

3. Create a `dns-policy.json` file for the policy and add the Zone ID:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "route53:GetChange",
            "Resource": "arn:aws:route53:::change/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "route53:ChangeResourceRecordSets",
                "route53:ListResourceRecordSets"
            ],
            "Resource": [
                "arn:aws:route53:::hostedzone/<your-zone-id>"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "route53:ListHostedZonesByName",
                "route53:ListHostedZones"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

4. Create the policy:

```bash
aws iam create-policy --policy-name "otomi-dns" --policy-document file://dns-policy.json
```

5. export the policy ARN:

```bash
export POLICY_ARN=$(aws iam list-policies --query 'Policies[?PolicyName==`<policy-name>`].Arn' --output text)
```

6. Create a user:

```bash
USER=user-name
aws iam create-user --user-name $USER
```

7. Attach the user to the policy:

```bash
aws iam attach-user-policy --user-name $USER --policy-arn $POLICY_ARN
```

8. Create the `access-key`:

```bash
ACCESS_KEY=$(aws iam create-access-key --user-name $USER)
```

9. Get the `secret-access-id` and `secret-access-key`:

```bash
ACCESS_KEY_ID=$(echo $ACCESS_KEY | jq -r '.AccessKey.AccessKeyId')
ACCESS_KEY_SECRET=$(echo $ACCESS_KEY | jq -r '.AccessKey.SecretAccessKey')
```

10. Create the values.yaml file

- Get the API server endpoint. You can find the API server endpoint in the Details section of the cluster in the AWS console.

- Add the DNS configuration created in the previous step, the API server endpoint, the `domainSuffix`, `domainFilters`, `region` and `email` to the `values.yaml` that we'll use to install Otomi:

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: aws
  region: your-region
  apiName: api-server-endpoint
  domainSuffix: your-domain.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - your-domain.com
  provider:
    aws:
      credentials:
        secretKey: $ACCESS_KEY_ID
        accessKey: $ACCESS_KEY_SECRET
      region: your-region
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@your-domain.com
EOF
```

## Azure DNS

Follow these steps to use AWS Route53:

1. Create a resource group:

```
$ az group create --name "MyDnsResourceGroup" --location $LOCATION
```

2.  Create a Azure DNS zone for example.com:

```
$ az network dns zone create --resource-group "MyDnsResourceGroup" --name "example.com"
```

Substitute a domain you own for example.com if desired.

If using your own domain that was registered with a third-party domain registrar, you should point your domain's name servers to the values in the `nameServers` field from the JSON data returned by the `az network dns zone create` command. Please consult your registrar's documentation on how to do that.

3. Create a Service Principal

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

4. Grant access to Azure DNS zone for the service principal.

```bash
# fetch DNS id used to grant access to the service principal
DNS_ID=$(az network dns zone show --name $AZURE_DNS_ZONE \
 --resource-group $AZURE_DNS_ZONE_RESOURCE_GROUP --query "id" --output tsv)

# 1. as a reader to the resource group
$ az role assignment create --role "Reader" --assignee $DNS_SP_APP_ID --scope $DNS_ID

# 2. as a contributor to DNS Zone itself
$ az role assignment create --role "Contributor" --assignee $DNS_SP_APP_ID --scope $DNS_ID
```

5. Create the values.yaml file

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

## Google Cloud DNS

Follow these steps to use Google Cloud DNS:

1. Create a DNS zone which will contain the managed DNS records. If using your own domain that was registered with a third-party domain registrar, you should point your domain's name servers to the values under the `nameServers` key. Please consult your registrar's documentation on how to do that.  This tutorial will use example domain of  `example.com`.

```bash
gcloud dns managed-zones create "example-com" --dns-name "example.com." \
  --description "Automatically managed zone by kubernetes.io/external-dns"
```

2. Make a note of the nameservers that were assigned to your new zone.

```bash
gcloud dns record-sets list \
    --zone "example-com" --name "example.com." --type NS
```

3. Create a Google Service Account for use with static credentials

In this scenario, a new GSA (Google Service Account) is created that has access to the CloudDNS zone.  The credentials for this GSA are saved and installed as a Kubernetes secret that will be used by ExternalDNS. This allows only containers that have access to the secret, such as ExternalDNS to update records on the Cloud DNS Zone.

```bash
DNS_SA_NAME="external-dns-sa"
DNS_SA_EMAIL="$DNS_SA_NAME@${GKE_PROJECT_ID}.iam.gserviceaccount.com"

# create GSA used to access the Cloud DNS zone
gcloud iam service-accounts create $DNS_SA_NAME --display-name $DNS_SA_NAME

# assign google service account to dns.admin role in cloud-dns project
gcloud projects add-iam-policy-binding $DNS_PROJECT_ID \
  --member serviceAccount:$DNS_SA_EMAIL --role "roles/dns.admin"
```

4. Create credentials

Generate static credentials from the ExternalDNS GSA:

```bash
# download static credentials
gcloud iam service-accounts keys create /local/path/to/credentials.json \
  --iam-account $DNS_SA_EMAIL
```

5. Get the contents of the `credentials.son`. Note that you don't need to create a Kubernetes secret. The credentials will be directly provided to the Otomi installer and Otomi will create the secret.

```bash
cat /local/path/to/credentials.json
```

```json
{
    "type": "service_account",
    "project_id": "xxx",
    "private_key_id": "xxx",
    "private_key": xxx,
    "client_email": "external-dns-sa@apl.iam.gserviceaccount.com",
    "client_id": "000000000000",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx.iam.gserviceaccount.com"
}

```
6. Create the values.yaml file

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

## DigitalOcean DNS

If you want to learn about how to use DigitalOcean's DNS service read the following tutorial series:

[An Introduction to Managing DNS](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-managing-dns), and specifically [How To Set Up a Host Name with DigitalOcean DNS](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)

1. Create a new DNS zone where you want to create your records in. Let's use `example.com` as an example here.

2. Generate a new personal token by going to [the API settings](https://cloud.digitalocean.com/settings/api/tokens) or follow [How To Use the DigitalOcean API v2](https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2) if you need more information. Provide a name for the token and choose read and write access.

```bash
DO_TOKEN="<your-token>"
```

3. Create the values.yaml file

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: digitalocean
  domainSuffix: do.example.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - example.com
  provider:
    digitalocean:
      apiToken: $DO_TOKEN
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@example.com
EOF
```