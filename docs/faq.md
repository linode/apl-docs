---
slug: faq/
title: FAQ
---

## More about Otomi

<details>
  <summary>Is Otomi some lightweight version of Rancher or OpenShift</summary>

We understand that solutions like Rancher and OpenShift all propagate that their solutions ship with integrated tools, but we take the term integrated a little different. Within Otomi, integrated means that the application is pre-configured with Otomi base configuration values, the application has been adjusted to comply with all Otomi security policies, and all applications have been made user-aware and multi-tenant.

Otomi can NOT be used to provision and manage Kubernetes clusters. Otomi is a layer on top of Kubernetes that can be installed in one run and offers a complete suite of integrated and pre-configured applications combined with automation and developer self-service.

</details>

<details>
  <summary>Is Otomi some kind of Kubeapps</summary>

We can imagine when looking at the list of all pre-configured and ready-to-use apps, you might get the impression that Otomi is some kind of apps catalog. But the opposite is true. When you install Otomi, you will get all of these apps and they’re already configured for you. You can then use the web UI or values repository to adjust the configuration of these apps based on your own requirements.

</details>

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

<details>
  <summary>Can I install Otomi without using a DNS zone?</summary>

Yes, using a DNS zone for name resolution is optional. When installing Otomi with minimal values, nip.io is used for name resolution pointing to the public IP of the cloud load balancer.

</details>

<details>
  <summary>I don't have an external IdP like Azure AD. Can I still install Otomi?</summary>

Yes, using an external IdP like Azure AD is optional. When installing Otomi with minimal values (no optional configuration), Otomi will configure Keycloak as an IdP. You can create users in Keycloak and assign them to the pre-configured roles.

</details>

<details>
  <summary>Can I install Otomi on my laptop using Minikube?</summary>

Yes. You can use the Otomi `onprem` provider to install Otomi on Kubernetes running on your own hardware, including Minikube. Note that Otomi requires sufficient resources and that Otomi does not support ARM CPU architecture. We will soon publish more documentation on how to install Otomi using the onprem provider.

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
