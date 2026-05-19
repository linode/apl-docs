---
slug: overview
title: Installation
sidebar_label: Overview
---

**How to get Akamai App Platform up and running**

---

### [Automatic deployment on LKE](akamai-connected-cloud.md)

Deploy App Platform automatically through LKE (Akamai's cloud computing managed Kubernetes service).

---

**Manual installation**

### [Manual installation on LKE](linode.md)

Create an LKE cluster and manually install the App Platform. This is not recommended unless you have specific needs that are not addressed in the automatic deployment method.

### [Custom installation on other Kubernetes services](custom.md)

Install App Platform on any other conformant Kubernetes cluster.

---

**Other installation resources**

### [Helm](helm.md)

Instructions for using the Helm chart.

---

**Advanced configurations**

### [Use DNS](dns.md)

Install with DNS.

### [Use Azure AD as IDP](oidc.md)

Install with Azure Entra ID for OIDC.

### [Sealed Secrets](sops.md)

Platform secrets are encrypted automatically using Sealed Secrets. Learn how to back up the key pair.

### [Use an entrypoint](entrypoint.md)

Install with an entrypoint for an external gateway.

### [Bring Your Own Wild Card Certificate](byo-wildcard.md)

Install using a BYO (wild card) certificate.

### [Bring Your Own Git](byo-git.md)

Install using an external Git repository (e.g. GitHub or GitLab) instead of the built-in Gitea.

### [Recovery Installation](recovery.md)

Reinstall on a new cluster using an existing BYO Git repository and a backed-up sealed-secrets key pair.

---
