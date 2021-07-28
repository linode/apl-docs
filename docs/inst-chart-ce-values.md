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
  name: demo # name of your cluster
  provider: azure # the cloud where your cluster runs
  domainSuffix: demo.yourdomain.com #the domain suffix of the cluster
oidc: # OIDC configuration for using Azure AD
  adminGroupID: 00000000-0000-0000-0000-000000000000
  authUrl: https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/oauth2/authorize
  issuer: https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/
  teamAdminGroupID: 00000000-0000-0000-0000-000000000000
  tenantID: 00000000-0000-0000-0000-000000000000
  tokenUrl: https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/oauth2/token
  clientID: 00000000-0000-0000-0000-000000000000
  clientSecret: theclientsecretofthespused
otomi:
  adminPassword: yoursecretpasswordhere # the master password for the otomi-admin account
  isMultitenant: false # this disables teams with multi-tenancy (separate logs/alerts/metrics/secrets)
dns:
  provider:
    azure:
      resourceGroup: resource-group-name
      aadClientId: 00000000-0000-0000-0000-000000000000
      aadClientSecret: 00000000-0000-0000-0000-000000000000
      tenantId: 00000000-0000-0000-0000-000000000000
      subscriptionId: 00000000-0000-0000-0000-000000000000
charts:
  cert-manager:
    email: admin@yourdomain.com
    stage: production
  external-dns:
    domainFilters:
      - yourdomain.com
  gitea:
    postgresqlPassword: yoursecretpasswordhere
  keycloak:
    postgresqlPassword: yoursecretpasswordhere
    idp:
      alias: my-azure
      clientID: otomi
      clientSecret: yoursecretpasswordhere
  loki:
    adminPassword: yoursecretpasswordhere
  oauth2-proxy:
    config:
      cookieSecret: yoursecretpasswordhere
```
