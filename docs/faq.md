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

Otomi requires a running Kubernetes cluster of version `1.18` up to `1.23` using a Node pool with at least `6 vCPU` and `8 GiB memory`. When using the `custom` provider (when installing Kubernetes on any other provider then azure, aws or google), make sure Otomi can create a K8s LoadBalancer Service that is accessible from your machine (not using 127.0.0.1).

</details>

<details>
  <summary>Is the Quickstart the only way to install Otomi?</summary>

No. The [otomi-quickstart](https://github.com/redkubes/quickstart) uses Terraform to provision a three-node Kubernetes cluster in AWS, Azure, or GCP and installs Otomi. You can also provision up a Kubernetes cluster yourself and install Otomi using the Helm chart. Check [chart-install](https://otomi.io/docs/installation/chart) for more details.

</details>

<details>
  <summary>Where can I find all possible configuration options for Otomi?</summary>

When installing Otomi with the helm chart you can find its `values.schema.json` inside, which contains all the possible install configuration parameters. It is generated from [otomi-core/values-schema.yaml](https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml).

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

Yes. You can use the Otomi `custom` provider to install Otomi on Kubernetes running on your own hardware, including Minikube. Note that Otomi needs to be able to create a Kubernetes LoadBalancer service and the IP needs to be accessible for pods running in the cluster and for your local browser. `127.0.0.1` can not be used, so running minikube with the Docker provider is not supported. Use the [Hyperkit driver](https://minikube.sigs.k8s.io/docs/drivers/hyperkit/) instead.

</details>

## Other

<details>
  <summary>Do you provide commercial support?</summary>

Yes, you can contact us for commercial support. [Red Kubes](https://redkubes.com) is the company behind Otomi.

</details>
