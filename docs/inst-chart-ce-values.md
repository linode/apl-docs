---
slug: installation/chart/ce-values
title: Example values.yaml for CE
---

The following example shows the minimal values to deploy Otomi CE. In this example:

- Harbor is NOT enabled
- Kubeapps is NOT enabled
- Multi-tenancy IS enabled
- SOPS is NOT used

## values.yaml

```yaml
tasksImage:
  tag: master # use master for PoC / testing only
  pullPolicy: Always
cluster:
  k8sVersion: '1.19' # the K8s version used
  name: demo # name of your cluster
  provider: azure # the cloud where your cluster runs
  domainSuffix: demo.yourdomain.com #the domain suffix of the cluster
oidc: # OIDC configuration for using Azure AD
  adminGroupID: 00000000-0000-0000-0000-000000000000
  authUrl: https://login.microsoftonline.com/57a3f6ea-7e70-4260-acb4-e06ce452f695/oauth2/authorize
  issuer: https://login.microsoftonline.com/57a3f6ea-7e70-4260-acb4-e06ce452f695/
  teamAdminGroupID: 00000000-0000-0000-0000-000000000000
  tenantID: 00000000-0000-0000-0000-000000000000
  tokenUrl: https://login.microsoftonline.com/57a3f6ea-7e70-4260-acb4-e06ce452f695/oauth2/token
  clientID: 00000000-0000-0000-0000-000000000000
  clientSecret: theclientsecretofthespused
otomi:
  version: master # use master for PoC / testing only
  adminPassword: yoursecretpasswordhere # the master password for the otomi-admin account
  isMultitenant: true # this enables creating teams with multi-tenancy (logs/alerts/metrics/secrets)
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
      - aks.otomi.cloud
  gitea:
    postgresqlPassword: yoursecretpasswordhere
  keycloak:
    postgresqlPassword: yoursecretpasswordhere
    idp:
      alias: my-azure
      clientID: otomi
      clientSecret: yoursecretpasswordhere
  kubeapps:
    enabled: false
    postgresqlPassword: yoursecretpasswordhere
  loki:
    adminPassword: yoursecretpasswordhere
  oauth2-proxy:
    config:
      cookieSecret: yoursecretpasswordhere
```
