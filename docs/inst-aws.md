---
slug: installation/aws/
title: Install on AWS
---

The following example shows the minimal values to deploy Otomi (with all apps) on a Kubernetes cluster in AWS.

```yaml
cluster:
  domainSuffix: # The domain suffix the cluster is using
  name: # the K8s cluster name
  owner: # your company name (or any other name)
  provider: aws
oidc:
  adminGroupID: # The group ID of the Azure AD group used for the Otomi platform admin role
  clientID: # The client ID of the Service Principal with sufficient access rights
  clientSecret: # The client secret of the SP used (will be encrypted in the values)
  issuer: # Use this format: https://login.microsoftonline.com/<tenantID>/
  teamAdminGroupID: # The group ID of the Azure AD group used for the Otomi team admin role
  tenantID: # The ID of the Azure tenant used
otomi:
  adminPassword: # provide a password for the build-in otomi-admin account.
  globalPullSecret: # fill in your own pull secret if your using more then 100 pulls per day
    username: # your dockerhub username
    password: # your dockerhub password
  version: # otomi release version ex: v0.14.6
dns:
  provider:
    aws:
      region: # Ex: eu-central-1
kms:
  sops:
    provider: aws
    aws:
      accessKey: #
      keys:
      secretKey: #
charts:
  cert-manager:
    email: # an email address
    stage: # use staging or production Let's Encrypt certificates
  external-dns:
    domainFilters:
      -  # my.domain.com # the (hosted) domain zone you're using
  # Turn optional apps on or off
  harbor:
    enabled: # true by default. Set to false to disable
  kubeapps:
    enabled: # true by default. Set to false to disable
  httpbin:
    enabled: # true by default. Set to false to disable
```
