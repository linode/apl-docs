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

### 2. DNS zone

Otomi requires credentials that allow to manage DNS zone from one of the following providers: aws/azure/google

### 3. IDP

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

Note that the group type should be set to ‘security groups’.

At the ‘Authentication’ tab you should be able to set the following callback URL’s and enable that both “Access tokens” and “ID tokens” are issued and public client flows are allowed:

- `https://keycloak.<dns-zone-name>/realms/master/broker/<idp alias>/endpoint`
- `https://keycloak.<dns-zone-name>`

### 4. Kubectl running

To be able to target different kube contexts, kubectl needs to be installed.

### 5. Docker running

Otomi runs everything else from containers, so please start docker if you haven't already.

### 6. KMS credentials to manage keys for encryption (optional)

If you would like the secrets in the values repo to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by [sops](https://github.com/mozilla/sops), the tool used for encryption by otomi. Please read up there on how to work with sops, as it is out of scope for these docs.

### 7. Pull secret for the API (optional)

:::info Otomi Enterprise Edition license needed

If you have a license for Otomi EE you can run the api, unlocking self service features.

:::

When you have a paid license to use the api you will have a pull secret. Please keep it handy for the [setup steps](setup).
