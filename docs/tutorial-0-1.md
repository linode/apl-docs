---
slug: tutorials/full-install-for-tutorial
title: Installing Otomi with external DNS
sidebar_label: Install Otomi
---

To go through the tutorials, you first need to install Otomi with `otomi.hasExternalDNS=true` on a running Kubernetes cluster.

1. Follow the instructions [here](/docs/installation/optional) for setting up external DNS

2. Create a `values.yaml` to deploy Otomi using Helm

Add the Otomi repository:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

Copy the output of `helm show values otomi/otomi` to `values.yaml` and make sure to update it with the following settings:

```yaml
otomi:
  hasExternalDNS: true
charts:
  cert-manager:
    issuer: letsencrypt
    # change:
    email: ''
    stage: production
  external-dns:
    domainFilters:
      - ''
```

3. Install the chart

Install the chart with:

```bash
helm install -f values.yaml otomi otomi/otomi
```

4. Follow the [post installation steps](/docs/installation/post-install/)
