---
slug: backup
title: Platform settings
sidebar_label: Backup
---

## Backup

:::note
To create backups, Object Storage needs to be enabled.
:::

The Backup section provides the option to enable automatic backups of APL application databases and add a Linode API Token for Velero to make backups of Persistent Volumes.

### Database Backups

Select to backup the database of the app. 

| Setting       | Description |
| ------------- | ----------- |
| Enabled | Select to enable the backup of Otomi platform services |
| TTL After Finished | Expiration of the backup. |
| Schedule | Cron-type expression to schedule the backup. Defaults to once a day at 00:00. |

### Persistent Volume Backups

:::note
To use Velero to create backups of Persistent Volumes, Object Storage needs to be enabled.
:::

To use Velero to create backups of Persistent Volumes in Linode:

1. Create a Linode API Token in Linode.

2. Fill in the token and submit changes.

3. Go to the apps section in the left menu and enable Velero.

