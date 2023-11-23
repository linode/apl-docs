---
slug: faq
title: FAQ
---

## More about Otomi

<details>
  <summary>Is Otomi a lightweight version of Rancher or OpenShift</summary>

No. Otomi is a pre-configured and curated package of open source projects combined with a self-service portal and requires an existing Kubernetes cluster to be installed on. Otomi can not be used to install a Kubernetes cluster.

</details>

<details>
  <summary>Is Otomi some kind of Kubeapps</summary>

We can imagine when looking at the list of all pre-configured and ready-to-use apps, you might get the impression that Otomi is some kind of application catalog for Kubernetes. But the opposite is true. When you install Otomi, you will get all of these apps and they’re already configured for you, and they will work out-of-the-box. You can then use the web UI or values repository to adjust the configuration of these apps based on your own requirements.

Otomi itself comes with a Developer Catalog that can be customized do offer custom Helm charts (Golden path Templates) to developers to use.

</details>

<details>
  <summary>Do I need to use Gitea for my code repositories?</summary>

No. Otomi itself uses Gitea for 2 repositories: the `otomi/values` and the `otomi/charts` repositories. `otomi/values` is used for the "local bookkeeping" of the platform configuration and `otomi/charts` is used for the Developer Catalog. Using external Git services for these repositories is not supported.

But it is not required to use Gitea for your own code repositories. Yes, Gitea can be used as a Git service for your own code projects, but if you are already using a Git service like Gitlab or GitHub, you are not forced to migrate.

The Build feature in Otomi is configured with credentials for Gitea private repositories, but it is also possible to use public Git repositories, or create a secret for an external Git service and use this secret.
</details>

<details>
  <summary>I already have a CI build pipeline. Do I need to use the Build feature in Otomi? </summary>

No. If you already have a CI build pipeline you can keep using it. You can choose to push your images to Harbor in Otomi. For this you can download the Docker credentials in Otomi Console.
</details>

<details>
  <summary>Do I need to use Harbor?</summary>

No, using Harbor is optional. The advantage of using Harbor is that Otomi automatically adds a `pull-secret` for Harbor to the Team namespace. If you would like to use an external image registry, then you will need to create the pull-secrets yourself.
</details>

## Setup and Installation

<details>
  <summary>What are the minimal requirements to install Otomi?</summary>

Otomi requires a running Kubernetes cluster of version `1.25` up to `1.27` using a Node pool with at least `12 vCPU` and `24 GiB memory`, but more is recommended. When using the `custom` provider (when installing Kubernetes on a unsupported provider), make sure Otomi can create a K8s LoadBalancer Service that is accessible from your machine (but not using 127.0.0.1).

</details>

<details>
  <summary>Where can I find all possible configuration options for Otomi?</summary>

When installing Otomi with the helm chart you can find its `values-schema.json` inside, which contains all the possible configuration parameters. It is generated from [otomi-core/values-schema.yaml](https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml).

</details>

<details>
  <summary>Can Otomi be deployed on an existing cluster?</summary>

Yes, Otomi can be installed on an existing cluster as long as there are no namespaces that are also used by Otomi. We advise to install Otomi on a Vanilla Kubernetes cluster without any cloud specific add-ons installed.

</details>

<details>
  <summary>Can I install Otomi without using a DNS zone?</summary>

Yes, using a DNS zone for name resolution is optional (but prefferred). When installing Otomi with minimal values, nip.io is used for name resolution pointing to the public IP of the cloud load balancer.

</details>

<details>
  <summary>I don't have an external IdP like Azure AD. Can I still install Otomi?</summary>

Yes, using an external IdP like Azure AD is optional. When installing Otomi without `OIDC` values, Otomi will configure Keycloak as an IdP. You can create users in Keycloak and assign them to the pre-configured roles.

</details>

<details>
  <summary>Can I install Otomi on my laptop using Minikube?</summary>

Yes. You can use the Otomi `custom` provider to install Otomi on Kubernetes running on your own hardware, including Minikube. Note that Otomi needs to be able to create a Kubernetes LoadBalancer service and the IP needs to be accessible for pods running in the cluster and for your local browser. `127.0.0.1` can not be used, so running minikube with the Docker provider is not supported. Use the [Hyperkit driver](https://minikube.sigs.k8s.io/docs/drivers/hyperkit/) instead. Also note that Otomi does not support ARM.

Otomi is a complete platform suite and not a single purpose tool. This is why otomi requires a stable (cloud) infrastructure and sufficient resources. Running Otomi on your laptop is therefor not advised.

</details>

## Other

<details>
  <summary>Do you provide commercial support?</summary>

Yes, you can contact us for commercial support. [Red Kubes](https://redkubes.com) is the company behind Otomi.

</details>
