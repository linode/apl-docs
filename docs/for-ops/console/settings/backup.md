---
slug: backup
title: Platform settings
sidebar_label: Backup
---

## Backup

The Backup section provides the option to enable automatic backups of Persisten Volumes of platform K8s applications. The Backup option will only be accessible if the Velero app is enabled.

If backup is enabled for a specif app, this will create a Velero backup schedule to automatically backup the PVC's of the app.

| Setting       | Description |
| ------------- | ----------- |
| Enabled | Select to enable the backup of Otomi platform services |
| TTL After Finished | Expiration of the backup. |
| Schedule | Cron-type expression to schedule the backup. Defaults to once a day at 00:00. |



