---
slug: faq/
title: FAQ
---

## More about Otomi

<details>
  <summary>Is Otomi a lightweight version of Rancher or OpenShift</summary>

We understand that solutions like Rancher and OpenShift all propagate that their products ship with integrated tools, but we take the term integrated a little more serious. Within Otomi, integrated means applications are pre-configured with Otomi default configuration values, applications have been adjusted to comply with all Otomi security policies, and applications have been made user-aware (using OIDC) and multi-tenant.

Otomi can NOT be used to provision and manage Kubernetes clusters. Otomi is an application stack on top of Kubernetes that can be installed with one Helm chart, and offers a complete suite of integrated and pre-configured applications combined with automation and developer self-service.

</details>

<details>
  <summary>Is Otomi some kind of Kubeapps</summary>

We can imagine when looking at the list of all pre-configured and ready-to-use apps, you might get the impression that Otomi is some kind of application catalog for Kubernetes. But the opposite is true. When you install Otomi, you will get all of these apps and they’re already configured for you, and they will work out-of-the-box. You can then use the web UI or values repository to adjust the configuration of these apps based on your own requirements.

</details>

## Setup and Installation

<details>
  <summary>What are the minimal requirements to install Otomi?</summary>

Otomi requires a running Kubernetes cluster of version `1.18` up to `1.23` using a Node pool with at least `6 vCPU` and `8 GiB memory`, but more is recommended. When using the `custom` provider (when installing Kubernetes on a not supported provider), make sure Otomi can create a K8s LoadBalancer Service that is accessible from your machine (but not using 127.0.0.1).

</details>

<details>
  <summary>Is the Quickstart the only way to install Otomi?</summary>

No. The [otomi-quickstart](https://github.com/redkubes/quickstart) uses Terraform to provision a three-node Kubernetes cluster in AWS, Azure, or GCP and installs Otomi. You can also provision a Kubernetes cluster yourself and install Otomi using the Helm chart. Check [chart-install](/docs/get-started/installation#install-otomi-with-helm) for more details.

</details>

<details>
  <summary>Where can I find all possible configuration options for Otomi?</summary>

When installing Otomi with the helm chart you can find its `values-schema.json` inside, which contains all the possible configuration parameters. It is generated from [otomi-core/values-schema.yaml](https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml).

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
