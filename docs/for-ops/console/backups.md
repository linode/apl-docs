---
slug: backups
title: Platform - Backups
sidebar_label: Backups
---

:::info
To enable this feature, first make sure [Velero](../../apps/velero.md) is activated and a Linode API Token is added to the Backup section in the Settings.
:::

:::info
The Backup self-service feature is only supported on Linode!
:::

:::info
Backups of Team PVs can only be created by platform administrators. The back-up self service feature is not available for Teams.
:::


When Velero is activated, platform admins can create backups of Persistent Volumes (PVs) in Team namespaces using the Console. When creating backups using the Console, a Velero `schedule` resource is created that will create the backup at a specified time, defined by a Cron expression.

All known Backups on the platform are listed here. Backups can be sorted based on:

| Property      | Description                                            |
| ------------- | ------------------------------------------------------ |
| Name          | The name of the backup                                 |
| Schedule      | When the backup is scheduled to run                    |
| Team          | The name of the Team responsible for the backup        |

## Create a backup

1. Select the Team name in the top bar to set the context to the namespace that contains the PV to backup

2. Enter a name for the backup

3. Add the schedule of the backup. The schedule is a cron-type expression to schedule the backup. Defaults to once a day at 00:00. Create your cron-type expression [here](https://crontab.guru/).

4. (optional) Select `Snapshot Volumes` to snapshot volumes.

:::info
Snapshots are currently not supported on Linode.
:::

5. Add a label selector. Make sure your workload has the correct labels.

6. (optional) Change the default TTL (expiration of the backup). Defaults to 7 days.

7. Click `Submit`.