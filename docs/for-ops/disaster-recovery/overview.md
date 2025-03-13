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
  - The Kubernetes secret "otomi-sops-secrets" in namespace "otomi-pipelines".
  - A download of the complete values in Platform -> Maintenance. Depending on whether these are downloaded with or without secrets, some passwords might have to be reset after recovery.
  - Optionally manual backups of databases, as covered in this guide for the CloudNative PostgreSQL Operator, should be taken.

2. Object storage needs to be set up for all backup types referred to. Credentials should be added to Platform Settings -> Object Storage.

3. All backup types should be activated in the Platform Settings -> Backup.

4. This guide does not cover the partial or complete loss of attached object storage. For production environments, it is advised to set up additional object storage in a different region, where all contents of the platform object storage is mirrored to, and can be retrieved in the event of accidental deletes, data center availability issues etc. The transfer to and from these remote storage locations is not covered in this guide.

5. Workloads may store data in local storage, object storage, different types of databases, message queues etc. The backup and recovery strategy of Workload storage is not covered here.

6. Currently it is not supported to reinstall a cluster in-place that has been provisioned directly using the Linode API or Console. Such an LKE cluster must instead be reprovisioned with the application platform through a Helm install. However, since the cluster ID changes, the domainsuffix will also change. Adjustments need to be made to the values file before the restore. Also, you will need a domain name set up with a DNS provider supported by App Platform and the credentials should be added to the values file.

7. All instructions assume you are familiar with essential Kubernetes tools such as `kubectl` and have access to the Kubernetes API. Usage of TUI applications such as `k9s` from the administration terminal is strongly recommended.

## Guides

* [Gitea](gitea.md): Restoring the platform's Gitea database and repositories from the application backup
* [Databases](platform-databases.md): Backup and restore of the CNPG databases
* [Reinstall](platform-reinstall.md): Restoring the complete platform, including settings and data
