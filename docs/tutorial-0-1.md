---
slug: tutorials/full-install-for-tutorial
title: Installing Otomi with external DNS
sidebar_label: Install Otomi
---

To go through the tutorials, you first need to install Otomi with `otomi.hasExternalDNS=true` on a running Kubernetes cluster.

1. Follow the instructions [here](/docs/installation/optional) for setting up external DNS

2. Create a values.yaml to deploy Otomi using Helm

```yaml
cluster:
  domainSuffix: ''
  k8sVersion: '1.20'
  name: 'dev'
  owner: ''
  provider: '' # provider can be one of aws|azure|google|onprem
otomi:
  adminPassword: ''
  hasExternalDNS: true
charts:
  cert-manager:
    issuer: letsencrypt 
    email: ''
    stage: production
  external-dns:
    domainFilters:
      - ''
dns:
  provider: # provider can be one of aws|azure|google
#   aws:
#     # next two keys are optional for explicit access with an iam role
#     # (if no metadata exists with implicit role access to manage dns)
#     accessKeySecret: ''
#     secretAccessKey: ''
#     # region is always needed
#     region: eu-central-1
#     role: '' # optional ARN, may be set explicitly if no metadata can be accessed
#   azure:
#     aadClientId: ''
#     aadClientSecret: ''
#     tenantId: '' # optional
#     subscriptionId: '' # optional
#   google:
#     serviceAccountKey: ''
#     project: ''
```

3. Install the chart

Add the Otomi repository:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

Install the chart:

```bash
helm install -f values.yaml otomi otomi/otomi
```

4. Follow the [post installation steps](/docs/installation/post-install/)


