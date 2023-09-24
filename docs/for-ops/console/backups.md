---
slug: backups
title: Platform - Backups
sidebar_label: Backups
---

:::info
To enable this feature, first make sure [Velero](../../apps/velero.md) is activated.
:::

All known Builds on the platform are listed here. Builds can be sorted based on:

| Property      | Description                                            |
| ------------- | ------------------------------------------------------ |
| Name          | The name of the backup                                 |
| Schedule      | When the backup is scheduled to run                    |
| Team          | The name of the Team responsible for the backup        |

## Create a backup

:::note
Backup can only be created by platform administrators
:::

1. Select the Team name in the top bar to set the context to the namespace that contains the PV to backup
1. Enter a name for the backup
2. Add the schedule of the backup. The schedule is a cron-type expression to schedule the backup. Defaults to once a day at 00:00. Create your cron-type expression [here](https://crontab.guru/).
3. (optional) Select `Snapshot Volumes` to snapshot volumes. This only applies to Persistent Volumes in Azure, GCE, and AWS.
4. Add a label selector. Make sure your workload has the correct labels.

5. (optional) Change the default TTL (expiration of the backup). Defaults to 7 days.
6. Click `Submit`