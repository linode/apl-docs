---
slug: installation/prerequisites
title: Prerequisites
---

## 1. Working k8s cluster(s)

Otomi needs a working kubernetes cluster to deploy on. It supports two versions down from 1.19, so at a minimum 1.17 is required. If you don't have access with kubectl to your cluster, you may have to pull the credentials from the cloud first:

- Azure: `az aks get-credentials --resource-group $RG --name $CLUSTER_NAME --admin`
- AWS: `aws eks update-kubeconfig --name $CLUSTER_NAME`
- Google: `gcloud container clusters get-credentials $CLUSTER_NAME --region europe-west4 --project xxx`

If you are not logged in with the correct credentials then re-login first:

- Azure: `az login`
- AWS: `aws login eks`
- Google: `gcloud auth login`

Otomi installs a complete suite of Kubernetes add-ons and applications. We recommend the following minimal setup:

| Provider         | Instance Type worker nodes | Min Node count | Auto Scaling enabled |
| ---------------- | -------------------------- | -------------- | -------------------- |
| Azure (AKS)      | Standard_DS3_v2            | 3              | Yes                  |
| AWS (EKS / kOPS) | c5.xlarge                  | 3              | Yes                  |
| GCP (GKE / kOPS) | n1-standard-4              | 3              | Yes                  |

## 2. DNS zone

Otomi requires credentials that allow to manage a DNS zone from one of the following providers: aws/azure/google.

### Azure

1. [Create a DNS zone](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md#creating-an-azure-dns-zone)
2. [Set permissions to modify the DNS zone](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md#permissions-to-modify-dns-zone)

### Google

Create a DNS zone which will contain the managed DNS records.

```console
$ gcloud dns managed-zones create "otomi-dns-test-yourdomain-com" \
    --dns-name "otomi-dns-test.yourdomain.com." \
    --description "Automatically managed zone by otomi"
```

### AWS

1. [Create an IAM policy](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md#iam-policy)
2. [Create an IAM role](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md#create-iam-role)

## 3. IDP

:::note ATTENTION: The new Otomi Chart install now only supports Azure AD as IDP!

We will soon come with an update to also support KeyCloak as IDP.

:::

The authentication of user brokered Keycloak identities through Azure AD requires a service principal with some Azure AD API permissions. An app registration needs to be created with the following API permissions:

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

At the 'Authentication' tab you should be able to set the following callback URL's and enable that both "Access tokens" and "ID tokens" are issued and public client flows are allowed:

- `https://keycloak.<dns-zone-name>/realms/master/broker/otomi-idp/endpoint`
- `https://keycloak.<dns-zone-name>`

`otomi-idp` is the default KeyCloak alias. To use another alias, add the following to the chart values:

```yaml
charts:
  keycloak:
    idp:
      alias: <your-alias>
```

## 4. Kubectl

To be able to target different kube contexts, [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) needs to be installed.

## 5. Docker

Otomi is a containerized platform, so [docker](https://www.docker.com/) must be installed and running.

## 6. KMS credentials to manage keys for encryption (optional)

If you would like the secrets in the values repo to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by [sops](https://github.com/mozilla/sops), the tool used for encryption by Otomi. Please read up on how to work with sops.

## 7. Helm

[Helm 3.0](https://helm.sh/docs/intro/install/) is necessary for an easy installation of the otomi.
