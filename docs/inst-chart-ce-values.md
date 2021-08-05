---
slug: installation/chart/ce-values
title: Example values.yaml for CE
---

The following `values.yam` example shows a minimal Otomi CE configuration. In this example:

- Multi-tenancy is NOT enabled (so teams will not )
- SOPS is NOT used

## values.yaml

```yaml
cluster:
  k8sVersion: '1.19' # the K8s version used
  name: my-cluster # name of your cluster
  provider: azure # the cloud where your cluster runs
  domainSuffix: my-cluster.yourdomain.com #the domain suffix of the cluster
oidc: # OIDC configuration for using Azure AD
  adminGroupID: # The ID of the Azure AD group used to authorize users as platform admins
  authUrl: https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/oauth2/authorize
  issuer: https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/
  teamAdminGroupID: 00000000-0000-0000-0000-000000000000
  tenantID: 00000000-0000-0000-0000-000000000000 # The ID of the Azure AD group used to authorize users as team admins
  tokenUrl: https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/oauth2/token
  clientID: # The clientID of the Service Principal with required API read permissions
  clientSecret: # The clientSecret od the S
otomi:
  adminPassword: yoursecretpasswordhere # the master password for the otomi-admin account
  isMultitenant: true # this enables teams with multi-tenancy (separate logs/alerts/metrics/secrets)
dns:
  provider:
    azure: # Azure DNS zones is used to host the DNS zone:
      resourceGroup: # The resource group name of the DNS zone
      aadClientId: # The clientID of the Service Principal with required access rights to the DNS zone
      aadClientSecret: # The clientSecret od the SP
      tenantId: # The ID of the Azure tenant
      subscriptionId: # The ID of the Azure subscription hosting the DNS zone
charts:
  cert-manager:
    email: # your mail address
    stage: production
  external-dns:
    domainFilters:
      - yourdomain.com # The name of the DNS zone
  gitea:
    postgresqlPassword: yoursecretpasswordhere # a password
  keycloak:
    postgresqlPassword: yoursecretpasswordhere # a password
    idp:
      alias: my-azure # The alias used to show as a log-in button to log in with Azure AD. Do not use spaces!
      clientID: otomi
      clientSecret: yoursecretpasswordhere # a password
  loki:
    adminPassword: yoursecretpasswordhere # a password
  oauth2-proxy:
    config:
      cookieSecret: yoursecretpasswordhere # a password
```
