---
slug: backups
title: Team Backups
sidebar_label: Backups
---

<!-- ![Console: new service](img/team-builds.png) -->

A Backup in Otomi is a self-service feature for:

- Scheduling backups of Persistent Volumes of team workloads

:::info
This is a BETA feature. Any feedback on this feature is very much appreciated.
:::

:::info
Ask you platform administrator to activate Velero to be able to use this feature.
:::

## Create a backup

1. Enter a name for the backup
2. Add the schedule of the backup. The schedule is a cron-type expression to schedule the backup. Defaults to once a day at 00:00. Create your cron-type expression [here](https://crontab.guru/).
3. (optional) Select `Snapshot Volumes` to snapshot volumes. This only applies to Persistent Volumes in Azure, GCE, and AWS.
4. Add a label selector. Make sure your workload has the correct labels. Workloads created in Otomi always have the following labels:

- name: `app`
- value: `name of the workload`

5. (optional) Change the default TTL (expiration of the backup). Defaults to 7 days.
6. Click `Submit`

