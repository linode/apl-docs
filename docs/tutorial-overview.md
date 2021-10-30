---
slug: tutorials/
title: Tutorial Overview
sidebar_label: Overview
---

In this tutorial section, we try to provide as many tutorials as possible about working with Otomi and all the integrated apps.

<!-- - [Install Otomi with all options on AKS](full-install-azure) - work in progress -->
- [Creating and managing users when using Keycloak as IDP](create-keycloak-users)
- [Build, tag and push an image to Harbor](build-tag-push)
- [Create a Kubernetes service](create-k8s-svc)
- [Publicly expose an existing Kubernetes service using Otomi Console](expose-service)
- [Create a Knative service](create-knative-svc)
- [Publicly expose an existing Knative service using Otomi Console](expose-ksvc)
- [Create a secret in Hashicorp Vault](create-secret-vault)
- [Add a secret created in vault to Kubernetes](add-secret)
- [Use secrets in Kubernetes](use-secret)
- [Creating Knative services using Otomi Console](create-ksvc-otomi)

To be able to do the tutorials, please make sure you have:

- Otomi installed on your K8s cluster
- Docker (or an alternative) installed on your machine
- A Git client installed on your machine
- Visual Studio Code code (or any other text editor) installed on you machine (in this tutorial we'll use VSC)
- Created a Team in Otomi. In the tutorials we'll use a team called `demo`
- Signed in to Otomi as a user who is a member of the `team-demo` group

If you haven't already, first [create a user in Keycloak](create-keycloak-users)