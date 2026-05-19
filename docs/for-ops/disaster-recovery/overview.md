---
slug: overview
title: Disaster Recovery Overview
sidebar_label: Overview
---

## Prerequisites

This area covers some potential scenarios, when a complete or partial restore of the platform is required.

This guide has the following prerequisites and limitations that should be checked regularly:

1. The following items should be backed up regularly by the platform administrator:

- The Kubernetes secret ending in "-wildcard-cert" in namespace "istio-system" (if installed via the Linode cloud console, or using your own certificate).
- The `sealed-secrets-key` Kubernetes secret in namespace `sealed-secrets`. This contains the RSA key pair required to decrypt all platform secrets. See [Sealed Secrets Key Recovery](sealed-secrets-key.md) for export instructions.
- A download of the complete values in Platform -> Maintenance. Depending on whether these are downloaded with or without secrets, some passwords might have to be reset after recovery.
- Optionally manual backups of databases, as covered in this guide for the CloudNative PostgreSQL Operator, should be taken.

2. Object storage needs to be set up for all backup types referred to. Credentials should be added to Platform Settings -> Object Storage.

3. All backup types should be activated in the Platform Settings -> Backup.

4. This guide does not cover the partial or complete loss of attached object storage. For production environments, it is advised to set up additional object storage in a different region, where all contents of the platform object storage is mirrored to, and can be retrieved in the event of accidental deletes, data center availability issues etc. The transfer to and from these remote storage locations is not covered in this guide.

5. Workloads may store data in local storage, object storage, different types of databases, message queues etc. The backup and recovery strategy of Workload storage is not covered here.

6. Currently it is not supported to reinstall a cluster in-place that has been provisioned directly using the Linode API or Console. Such an LKE cluster must instead be reprovisioned with the application platform through a Helm install. However, since the cluster ID changes, the domainsuffix will also change. Adjustments need to be made to the values file before the restore. Also, you will need a domain name set up with a DNS provider supported by App Platform and the credentials should be added to the values file.

7. All instructions assume you are familiar with essential Kubernetes tools such as `kubectl` and have access to the Kubernetes API. Usage of TUI applications such as `k9s` from the administration terminal is strongly recommended.

## BYO Git

When using an external Git repository (BYO Git), disaster recovery is significantly simplified. The platform configuration is already stored externally, so Gitea backup and restore is not required. To restore the platform, you only need:

- The sealed-secrets key pair from the original cluster.
- Access credentials to the external Git repository.

Export the sealed-secrets key pair before decommissioning the cluster:

```bash
kubectl get secrets -n sealed-secrets \
  -l sealedsecrets.bitnami.com/sealed-secrets-key=active \
  -o yaml > sealed-secrets-key.yaml
```

Store the exported file securely outside the cluster. See the [BYO Git installation guide](../../get-started/installation/byo-git.md) and [Recovery Installation](../../get-started/installation/recovery.md) for more details.

## Guides

- [Gitea](gitea.md): Restoring the platform's Gitea database and repositories from the application backup
- [Databases](platform-databases.md): Backup and restore of the CNPG databases
- [Reinstall](platform-reinstall.md): Restoring the complete platform, including settings and data
- [Sealed Secrets Key](sealed-secrets-key.md): Back up and restore the sealed secrets key pair used to encrypt all platform secrets
