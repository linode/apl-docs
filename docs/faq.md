---
slug: faq/
title: FAQ
---
## Setup and Installation

**What are the K8s cluster requirements to install Otomi?**

Otomi requires a running Kubernetes cluster of version `1.18` up to `1.21` with at least `3 worker nodes` (using General Purpose instance types with at least `4 vCPU` and `12 GiB memory`) in AWS, Azure, Google Cloud Platform.

Running Otomi on an `on-prem` cluster is also supported.

Check out [Otomi-Quickstart](https://github.com/redkubes/quickstart) to easily get started.

---
**Is the Quickstart the only way to install Otomi?**

No. The [otomi-quickstart](https://github.com/redkubes/quickstart) uses terraform to spin up a three-node Kubernetes cluster and install Otomi.
One can spin up a K8s cluster and install Otomi via helm chart.

Check [chart-install](https://otomi.io/docs/installation/chart) for more details.

---
**Where can we find all possible configuration parameters for Otomi install?**

The [otomi-core/values-schema.yaml](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) contains all the possible Otomi chart install configuration parameters.

---

## Otomi Configuration

**Can we disable applications such as `Vault` and `Harbor` if we want to?**

Yes, it is possible to disable applications. One can do so in the [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml) that is used in the Otomi chart install.

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
