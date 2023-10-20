---
slug: backups
title: Create/Restore backups
sidebar_label: Backups
---

When Velero is activated on the platform level, platform admins can create backups of Persistent Volumes (PVs) in Team namespaces using Otomi Console. When creating backups using Otomi Console, a Velero `schedule` resource is created that will create the backup at a specified time, defined by a Cron expression.

In this how-to, we'll create a backup of a PV using Otomi and then restore it using the velero CLI integrated into the Otomi Shell.

## Prerequisites

To perform this how-to, first make sure Velero is enabled. Velero requires object storage to be be configured. By default Velero uses the local Minio provided by Otomi. In this how-to we'll use Minio.

When Otomi installs Velero, the Velero plug-in for Azure, AWS and Google are configured by default. Velero also has support for backing up and restoring Kubernetes volumes using [Restic](https://velero.io/docs/v1.3.2/restic/#limitations). Note that Restic is not enabled by default.

For this how-to we'll use the PV of a Team's private Prometheus instance, so make sure Prometheus is also enabled. 
 
## Create a backup schedule using Otomi

1. Select the Team name in the top bar to set the context to the namespace that contains the PV to backup. In this how-to we'll use the team `demo`.
2. In Otomi Console, click on `Backup` in the left menu under `Platform` and click on `Create`.
3. Enter a name for the backup. In this how-to we'll use the name `prom`.
4. Add the schedule of the backup. The schedule is a cron-type expression to schedule the backup. Defaults to once a day at 00:00. Create your cron-type expression [here](https://crontab.guru/).
5. Using snapshots only applies to Persistent Volumes in Azure, GCE, and AWS.
6. In this how-to, we'll create a backup of the private Prometheus PV in the `demo` team by using a `labelSelector`

:::note
If the labelSelector is not used, the backup schedule will backup all PVs of the team.
:::

- In Otomi Console, click on `Shell` in the bottom of the left menu.
- Run the following cmd in the shell:

```shell
kubectl get statefulset prometheus-demo-po-prometheus -n team-demo --show-labels
\NAME                            READY   AGE   LABELS
prometheus-demo-po-prometheus   1/1     77m   app.kubernetes.io/instance=prometheus-demo,app.kubernetes.io/managed-by=Helm,app.kubernetes.io/part-of=demo-po,app.kubernetes.io/version=46.4.1,app=demo-po-prometheus,chart=kube-prometheus-stack-46.4.1,heritage=Helm,operator.prometheus.io/mode=server,operator.prometheus.io/name=demo-po-prometheus,operator.prometheus.io/shard=0,prometheus=team-demo,release=prometheus-demo
```

- click on `Add Item` and fill in the following:

```yaml
name: prometheus
value: team-demo
```

7. Use the default TTL (expiration of the backup). Defaults to 7 days.
8. Click `Submit`

## Check if the schedule is created

1. In Otomi Console, click on `Shell` in the bottom of the left menu
2. Run the following cmd in the shell:

```shell
velero get schedules
NAME                    STATUS    CREATED                         SCHEDULE     BACKUP TTL   LAST BACKUP   SELECTOR   PAUSED
team-demo-backup-prom   Enabled   2023-09-24 11:50:59 +0000 UTC   55 * * * *   168h0m0s     n/a           <none>     false
```

## Check if the backup is created

- Run the following cmd in the shell:

```shell
velero get backups
NAME                                   STATUS      ERRORS   WARNINGS   CREATED                         EXPIRES   STORAGE LOCATION   SELECTOR
team-demo-backup-prom-20230924115514   Completed   0        0          2023-09-24 11:55:14 +0000 UTC   6d        otomi              prometheus=team-demo
```

You can see the status of the backup is `Completed`. The backup is now stored in the local Minio.

## Restore the backup

Now the backup is created, we can restore the backup.

Follow this procedure to restore a backup:

- Scale down the `replicas` of the `deployment` or `statefulset` that uses the PV

- Delete the PVC. You can find the name of the PVC in the deployment `spec.template.spec.volumes`

- Run the following cmd in the shell:

```shell
velero restore create --from-backup team-demo-backup-prom-20230924115514
Restore request "team-demo-backup-prom-20230924115514-20230924133133" submitted successfully.
Run `velero restore describe team-demo-backup-prom-20230924115514-20230924133133` or `velero restore logs team-demo-backup-prom-20230924115514-20230924133133` for more details.
```

- Scale up the `replicas` of the `deployment` or `statefulset` to use the restored PV

## Manually create backups

Otomi only provides a self-service option for administrators to schedule backups of persistent volumes within team namespaces. The shell in Otomi includes the Velero CLI, so if you're confortable with Velero you can also create you're own custom backups. Check the docs on [https://velero.io/](https://velero.io/) for more information.

This is an example of creating a custom backup:

- Create a full backup (to backup all resources, including PVs)

```shell
velero backup create my-custom-backup-01 --include-namespaces team-demo
```

- Create a backup of specific resources:

```shell
velero backup create my-custom-backup-02 --include-namespaces team-demo --include-resources secret,deployment
```

- Verify the backup:

```shell
velero describe backup my-custom-backup-01 --details
```

- Restore a backup:

```shell
velero restore create --from-backup my-custom-backup-01
```