---
slug: tutorials/
title: Tutorial Overview
sidebar_label: Overview
---

:::info Important!

When Otomi is installed with minimal values (using the quickstarts), you can not use all the tutorials unless you add the auto generated CA to all worker nodes. To prevent adding the CA to all worker nodes, install Otomi with `hasExternalDNS=true`.

:::

This section contains tutorials to learn using Otomi and all the integrated apps.

1. [Install Otomi with external DNS](full-install-for-tutorial)
2. [Creating and managing users when using Keycloak as IDP](create-keycloak-users)
3. [Build, tag and push an image to Harbor](build-tag-push)
4. [Create a Kubernetes service](create-k8s-service)
5. [Create a Knative service](create-knative-service)
6. [Publicly expose an existing service using Otomi Console](expose-service)
7. [Create a secret in Hashicorp Vault](create-secret-vault)
8. [Add a secret created in vault to Kubernetes](add-secret)
9. [Use secrets in Kubernetes](use-secret)
10. [Creating Knative services using Otomi Console](create-ksvc-otomi)

To be able to do the tutorials, please make sure you have:

- A running Kubernetes cluster
- Docker installed on your machine
- A Git client installed on your machine
- Visual Studio Code (or any other text editor) installed on you machine (in the tutorials we'll use VSC)
- Created a Team in Otomi. In the tutorials we'll use a team called `demo`
- Signed in to Otomi as a user who is a member of the `team-demo` group

If you haven't already, first install Otomi.
