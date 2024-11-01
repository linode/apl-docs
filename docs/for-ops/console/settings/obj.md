---
slug: obj
title: Platform settings
sidebar_label: Object Storage
---

## Object Storage

:::note
Object Storage needs to be configured to be able to use Velero and create database backups. See the [backup section](backup.md).
:::

:::important
To prevent loss of data it is advised to configure Object Storage before activating apps that use Object Storage (like Loki, Harbor and Tempo).
:::

:::info
The Local Minio provider will not be visible when the installation is done by Akamai Connected Cloud.
:::

### Providers

Select between one of the following Object Storage Providers:

- Disabled (default): No provider is configured. Apps that can use Object Storage will instead be configured to use persistent volumes.

- Minio Local: Use the local self-hosted Minio instance. When Minio Local is selected, the Minio app also needs to be enabled.

- Linode: Use Linode Object Storage.

### Linode

| Setting         | Description                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| region          | The name of the Linode region (Datacenter ID) where the buckets are created. See [here](https://techdocs.akamai.com/cloud-computing/docs/access-buckets-and-files-through-urls#cluster-url-s3-endpoint) for all Linode Datacenter IDs |
| accessKeyId     | The Id of the access key with read/write permissions for all buckets                                                                                                                                                                  |
| secretAccessKey | The secret of the access key used                                                                                                                                                                                                     |

### Buckets

The preferred bucket names to be used for each app

| Bucket | Description                                                 |
| ------ | ----------------------------------------------------------- |
| loki   | Bucket used to store Loki logs                              |
| cnpg   | Bucket used to store backups of databases                   |
| velero | Bucket used to store backups of Perstent Volumes by Velero  |
| harbor | Bucket used to store images of private registries in Harbor |
| tempo  | Bucket used to store Tempo traces                           |
