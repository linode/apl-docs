---
slug: installation/prerequisites
title: Prerequisites
---

## Working Kubernetes(K8s) Clusters

_Otomi_ requires

- A working kubernetes cluster to deploy on
- `K8s versions`: `1.17` up to `1.20` are supported
- Access to the clusters through `kubectl`
- Cloud credentials that manage a `DNS Zone`

Find below the specific configurations for most common cloud-providers(Azure, GCP, AWS)

### Azure

- **Recommended cluster configuration**

| Provider    | Instance Type worker nodes | Min Node count | Auto Scaling enabled |
| ----------- | -------------------------- | -------------- | -------------------- |
| Azure (AKS) | Standard_DS3_v2            | 3              | Yes                  |

- **Access to the cluster**

```bash
az aks get-credentials --resource-group $RG --name $CLUSTER_NAME --admin
```

- **DNS Zone**
  - [Create a DNS zone](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md#creating-an-azure-dns-zone)
  - [Set permissions to modify the DNS zone](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md#permissions-to-modify-dns-zone)

---

### GCP

- **Recommended cluster configuration**

| Provider         | Instance Type worker nodes | Min Node count | Auto Scaling enabled |
| ---------------- | -------------------------- | -------------- | -------------------- |
| GCP (GKE / kOPS) | n1-standard-4              | 3              | Yes                  |

- **Access to the cluster**

```bash
gcloud container clusters get-credentials $CLUSTER_NAME --region europe-west4 \
--project xxx
```

- **DNS Zone**

```bash
# Create a DNS zone which will contain the managed DNS records
$ gcloud dns managed-zones create "otomi-dns-test-yourdomain-com" \
    --dns-name "otomi-dns-test.yourdomain.com." \
    --description "Automatically managed zone by otomi"
```

---

### AWS

- **Recommended cluster configuration**

| Provider         | Instance Type worker nodes | Min Node count | Auto Scaling enabled |
| ---------------- | -------------------------- | -------------- | -------------------- |
| AWS (EKS / kOPS) | c5.xlarge                  | 3              | Yes                  |

- **Access to the cluster**

```bash
aws eks update-kubeconfig --name $CLUSTER_NAME
```

- **DNS Zone**
  - [Create an IAM policy](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md#iam-policy)
  - [Create an IAM role](https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md#create-iam-role)

---

## IDP

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

## Kubectl

[kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) needs to be installed, in order to target different kube contexts

## Docker

[Docker](https://www.docker.com/) must be installed and running, as otomi is a containerized platform.

## Helm

[Helm 3.0](https://helm.sh/docs/intro/install/) is necessary for an easy installation of the otomi.

## KMS credentials to manage keys for encryption (optional)

<!-- Add this point in the doc, no one knows what values repo is -->

If you would like the secrets in the `values` repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by [sops](https://github.com/mozilla/sops), the tool used for encryption by Otomi. Please read up on how to work with sops.
