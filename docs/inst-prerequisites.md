---
slug: installation/prerequisites
title: Prerequisites
---

## Client binaries

Please make sure the following client binaries exist:

- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) to access the cluster.
- [docker](https://www.docker.com/) must be installed and running, as Otomi runs in a container.
- [helm](https://helm.sh/docs/intro/install/) (optional) for helm chart installation of Otomi.
- [otomi](/docs/cli/) (optional) for helm chart installation of Otomi.

## Cloud services

Finally make sure to have configured the following cloud services:

### Kubernetes cluster with a DNS zone

Kubernetes versions `1.18` up to `1.20` are supported.

Find below the specific configurations for most common cloud-providers: Aws, Azure, Google.

#### AWS

Setting up a cluster on AWS' EKS is documented here: https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html

Get access to the cluster with kubectl:

```bash
aws eks update-kubeconfig --name $CLUSTER_NAME
```

Setting up external DNS: https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md

#### Azure (AKS)

Setting up an azure cluster through the portal is documented here: https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal

Get access to the cluster with kubectl:

```bash
az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin
```

Setting up external DNS: https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md

#### Google (GKE)

Setting up an azure cluster through the portal is documented here: https://cloud.google.com/kubernetes-engine/docs/how-to

Get access to the cluster with kubectl:

```bash
gcloud container clusters get-credentials <cluster-name> --region <region> --project <project>
```

Setting up external DNS: https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md

### Identity Provider (IDP)

:::note ATTENTION: The new Otomi Chart install now only supports an external IDP!

We will soon come with an update to also support the provided KeyCloak as IDP.

:::

Below you can find detailed instructions on how to set up Azure AD as an external IDP. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta.

#### Azure AD

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

:::note

`otomi-idp` is the default KeyCloak alias (shown as login title). To use another alias, add the following to the chart values:

```yaml
charts:
  keycloak:
    idp:
      alias: <your-alias>
```

:::

### KMS credentials to manage keys for encryption (optional)

If you would like the secrets in the `values` repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by [sops](https://github.com/mozilla/sops), the tool used for encryption.

Find quickstart documentation below on how to setup KMS access per supported provider:

- [AWS KMS](https://aws.amazon.com/kms/getting-started/)
- [Azure Vault](https://azure.microsoft.com/en-us/services/key-vault/#getting-started)
- [Google KMS](https://cloud.google.com/kms/docs/quickstart)

Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps.
