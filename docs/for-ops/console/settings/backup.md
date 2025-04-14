---
slug: backup
title: Platform settings
sidebar_label: Backup
---

## Backup

:::info
To create backups, Object Storage needs to be enabled.
:::

:::info
The Backup in the Settings will NOT be visible when the installation is done by Akamai Cloud. 
:::

The Backup section provides the option to:

- enable automatic backups of application databases
- add a Linode API Token for Velero to make backups of Persistent Volumes

### Database Backups

Select to backup the database of the app.

| Setting            | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| Enabled            | Select to enable the backup of Otomi platform services                        |
| TTL After Finished | Expiration of the backup.                                                     |
| Schedule           | Cron-type expression to schedule the backup. Defaults to once a day at 00:00. |

### Persistent Volume Backups

:::info
The Persistent Volume Backups section will not be visible when App Platform is deployed directly through LKE (not manually installed). This is because using Velero is not (yet) supported for Akamai's Block Storage Volumes.
:::

:::note
To use Velero to create backups of Persistent Volumes, Object Storage needs to be enabled.
:::

To use Velero to create backups of Persistent Volumes in Akamai:

1. Create a Linode API Token in Akamai's Cloud Manager.

2. Fill in the token and submit changes.

3. Go to the apps section in the left menu and enable Velero.
