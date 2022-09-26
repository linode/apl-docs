---
slug: backup
title: Platform settings
sidebar_label: Backup
---

## Backup

The Backup section provides the option to enable automatic backups of Otomi platform services and Team services. The Backup option will only be accessible if the Velero app is enabled.

### Platform

If enabled, this will create a Velero backup schedule to automatically backup all enabled Otomi platform services with persistence.

| Setting       | Description |
| ------------- | ----------- |
| Enabled| Select to enable the backup of Otomi platform services |
| TTL After Finished | Expiration of the backup. |
| Schedule | Cron-type expression to schedule the backup. Defaults to once a day at 00:00. |

Services included in the platform backup schedule:

| App | included |
| --- | -------- |
| Gitea | By default |
| Keycloak | By default |
| Drone | By default |
| Harbor | If app is enabled |
| Vault | If app is enabled |
| Argo CD | If app is enabled |
| Kubeapps | If app is enabled |


### Teams

If enabled, this will create a Velero backup schedule to automatically backup all Team namespaces.

| Setting       | Description |
| ------------- | ----------- |
| Enabled| Select to enable the backup of Otomi platform services |
| TTL After Finished | Expiration of the backup. |
| Schedule | Cron-type expression to schedule the backup. Defaults to once a day at 00:00. |
