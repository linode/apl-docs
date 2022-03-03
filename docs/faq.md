---
slug: faq/
title: FAQ
---

## Setup and Installation

<details>
  <summary>What are the minimal requirements to install Otomi?</summary>

Otomi requires a running Kubernetes cluster of version `1.18` up to `1.21` using a Node pool with at least `12 vCPU` and `16 GiB memory` in AWS, Azure, or Google Cloud Platform. Otomi can also be installed using the `on-prem` provider. See the [Quickstart](https://github.com/redkubes/quickstart/tree/main/onprem) for more information about installing Otomi on your own hardware.

</details>

<details>
  <summary>Is the Quickstart the only way to install Otomi?</summary>

No. The [otomi-quickstart](https://github.com/redkubes/quickstart) uses Terraform to provision a three-node Kubernetes cluster in AWS, Azure, or GCP and installs Otomi. You can also provision up a Kubernetes cluster yourself and install Otomi using the Helm chart. Check [chart-install](https://otomi.io/docs/installation/chart) for more details.

</details>

<details>
  <summary>Where can I find all possible configuration options for Otomi?</summary>

When installing Otomi with the helm chart you can find its `values.schema.json` inside, which contains all the possible install configuration parameters. It is generated from [otomi-core/values-schema.yaml](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml).

</details>

<details>
  <summary>Can Otomi be deployed on an existing cluster?</summary>

Yes, Otomi can be installed on any cluster as long as there are no namespaces that are also created by Otomi.

</details>

## Otomi Configuration

<details>
  <summary>Can I disable applications such as `Vault` and `Harbor` if I want to?</summary>

Yes, it is possible to disable certain applications. See the [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml) for all options. Also checkout the [values-schema.yaml](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) to check which applications can be `disabled`. We will soon come with a new release that will by default install the minimal set of applications and where you can use Otomi Console to enable optional applications.

See the following example to enable/disable optional apps when installing Otomi using the Helm Chart:

```yaml
# values.yaml configuration
otomi:
# Disabling apps such as Harbor, Vault
apps:
  harbor:
    enabled: false
  vault:
    enabled: false
```

</details>

## Other

<details>
  <summary>Do you provide commercial support?</summary>

Yes, you can contact us for commercial support. [Red Kubes](https://redkubes.com) is the company behind Otomi.

</details>
