---
slug: faq/
title: FAQ
---
## Setup and Installation

**What are the minimal requirements to install Otomi?**

Otomi requires a running Kubernetes cluster of version `1.18` up to `1.21` using a Node pool with at least `12 vCPU` and `12 GiB memory` in AWS, Azure, or Google Cloud Platform. Otomi can also be installed using the `on-prem` provider. See the [Quickstart](https://github.com/redkubes/quickstart/tree/main/onprem) for more information about installing Otomi on your own hardware.

---
**Is the Quickstart the only way to install Otomi?**

No. The [otomi-quickstart](https://github.com/redkubes/quickstart) uses Terraform to provision a three-node Kubernetes cluster in AWS, Azure, or GCP and installs Otomi. You can also provision up a Kubernetes cluster yourself and install Otomi using the Helm chart. Check [chart-install](https://otomi.io/docs/installation/chart) for more details.

---
**Where can I find all possible configuration options for the Otomi?**

The [otomi-core/values-schema.yaml](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) contains all the possible Otomi chart install configuration parameters.

---
## Otomi Configuration

**Can I disable applications such as `Vault` and `Harbor` if I want to?**

Yes, it is possible to disable certain applications. See the [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml) for all options. Also checkout the [values-schema.yaml](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) to check which applications can be `disabled`. We will soon come with a new release that will by default install the minimal set of applications and where you can use Otomi Console to enable optional applications.

See the following example to enable/disable optional apps when installing Otomi using the Helm Chart:

```yaml
# values.yaml configuration
otomi:
# Disabling apps such as Harbor, Vault
charts:
  harbor:
    enabled: false
  vault:
    enabled: false
```

