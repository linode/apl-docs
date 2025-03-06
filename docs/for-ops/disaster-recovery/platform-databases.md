---
slug: databases
title: Restoring platform databases
sidebar_label: Databases
---

Generally it is recommended to get familiar with the [CNPG documentation](https://cloudnative-pg.io/documentation/current/recovery/) on how to restore a PostgreSQL database. The steps here are plotted out specifically to this platform.

## Initial notes

Changes to the `values` repository can usually be made through the Gitea UI after signing in with the `platform-admin` user. As this requires Keycloak in addition to Gitea operating normally, the risk can be reduced by creating an application token and pulling/pushing local changes to the repository. In Gitea, go to the user settings, `Applications` tab, enter a token name and select `repo` as the scope. After creating this token, you can include it in the repository URL, e.g.

```sh
git clone https://<token>@gitea.example.com/otomi/values.git
```

In the event that platform-critical services Gitea and Keycloak are not able to start, required changes to the database configuration can be applied directly in the following ArgoCD applications in the `argocd` namespace. This change persists and is synchronized into the cluster until the next following Tekton pipeline overwrites them:

* Gitea database: `gitea-gitea-otomi-db`
* Keycloak database: `keycloak-keycloak-otomi-db`

Where applicable, in these manifests the `initdb` section in `clusterSpec.bootstrap` can be replaced with `recovery` and `externalClusters` just as instructed below. Note that `recovery` and `externalClusters` do not need to be reflected in the values file later, since they are only considered when initializing the cluster; even when Tekton does revert these changes, after a successful recovery this no longer has an effect.

## Regular recovery with backup in same cluster

This procedure should be taken if the database has gotten to an unhealthy state, e.g. because of volume filesystem corruption. For reverting undesired updates, additional instructions for a point-in-time recovery are to be considered as described in the following sections.

Recovering any of the platform databases should be performed in the following order:

1. Note the name of the `Backup` resource that you intend to run the recovery from.
2. Make adjustments to the values as described in this section. This needs to be done within the values repository directly, since this is not exposed to the platform API.
3. Shut down the service accessing the database (see above).
4. Halt ArgoCD auto-sync and delete the database `Cluster` resource.
5. Re-enable ArgoCD sync.
6. Re-enable the backup disabled in step 2. This is also possible via the Console.

### Listing backup resources

Available backups can be listed using the following command. Consider only `completed` ones for recovery.
Note that the time stamps of the backup names are universal time (UTC).

```sh
kubectl get backup -n <app>
```
where `<app>` is to be replaced with `gitea`, `harbor`, or `keycloak`.

### Adjustments to backup configuration

After the recovery, new backups will be created. For avoiding accidental mixing and overwriting of backups, CloudnativePG does not allow for the new backup and the recovery source to be in the same location. Therefore, the backups should be temporarily disabled, and the suffix (the directory inside the object storage) are to be adjusted.

Inside `env/settings.yaml`, locate the path `platformBackups.database.<app>` (where `<app>` is either `gitea`, `harbor`, or `keycloak`) and set the values `enabled: false` and `pathSuffix: <app>-1`. The path suffix may also be set to something completely different, but must not exist in the object storage.

Example:

```yaml
# ...
platformBackups:
    database:
        gitea:
            enabled: false
            retentionPolicy: 7d
            schedule: 0 0 * * *
            pathSuffix: gitea-1
# ...
```

### Adjustments to database configuration

The following change only has an effect on an initial database cluster. Therefore it can be made ahead of shutting down platform-critical services.

In the file `env/databases/<app>.yaml`, update the structure of `databases.<app>.recovery` as follows, depending on the app, inserting the backup name as determined above:

For Gitea:
```yaml
databases:
  gitea:
    # ...
    recovery:
      backup:
        name: <backup-name>
      database: gitea
      owner: gitea
      secret:
        name: gitea-db-secret
```

For Harbor:
```yaml
databases:
  harbor:
    # ...
    recovery:
      backup:
        name: <backup-name>
      database: registry
      owner: harbor
```

For Keycloak:
```yaml
databases:
  keycloak:
    # ...
    recovery:
      backup:
        name: <backup-name>
      database: keycloak
      owner: keycloak
```

Note that ArgoCD may show a sync error, pointing out that there are multiple `bootstrap` configurations on an existing database cluster. This will be resolved in the following steps.

### Shutting down services

Check the Tekton pipelines to ensure that values changes have been deployed as expected. After this, during a backup or recovery of the database, the application should to be shut down for avoiding any write operations leading to inconsistencies.

For temporarily disabling Gitea:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd gitea-gitea --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Scale Gitea statefulset to zero
kubectl patch statefulset -n gitea gitea --patch '[{"op": "replace", "path": "/spec/replicas", "value": 0}]' --type=json
## Verify that pods are shut down
kubectl get statefulset -n gitea gitea  # Should show READY 0/0
```

For temporarily disabling Keycloak:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd keycloak-keycloak-operator --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Scale Keycloak statefulset to zero
kubectl patch keycloak -n keycloak keycloak --patch '[{"op": "replace", "path": "/spec/instances", "value": 0}]' --type=json
## Verify that pods are shut down
kubectl get statefulset -n keycloak keycloak  # Should show READY 0/0
```

For temporarily disabling Harbor:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd harbor-harbor --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Scale Harbor deployment to zero
kubectl patch deploy -n harbor harbor-core --patch '[{"op": "replace", "path": "/spec/replicas", "value": 0}]' --type=json
## Verify that pods are shut down
kubectl get deploy -n harbor harbor-core  # Should show READY 0/0
```

### Removing the existing database

After deploying the values changes and shutting down applications accessing the database, delete the database cluster.

For Gitea:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd gitea-gitea-otomi-db --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Delete the cluster
kubectl delete cluster -n gitea gitea-db
## Re-enable ArgoCD auto-sync
kubectl patch application -n argocd gitea-gitea-otomi-db --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
```

For Harbor:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd harbor-harbor-otomi-db --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Delete the cluster
kubectl delete cluster -n harbor harbor-otomi-db
## Re-enable ArgoCD auto-sync
kubectl patch application -n argocd harbor-harbor-otomi-db --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
```

For Keycloak:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd keycloak-keycloak-otomi-db --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Delete the cluster
kubectl delete cluster -n keycloak keycloak-db
## Re-enable ArgoCD auto-sync
kubectl patch application -n argocd keycloak-keycloak-otomi-db --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
```

The cluster should now be recreated from the backup. Wait until the `Cluster` status shows `Cluster in healthy state` and restart the dependent services.

### Restarting services

For restoring Gitea processes:
```sh
## Re-enable ArgoCD auto-sync, which should also change the Gitea statefulset to scale up
kubectl patch application -n argocd gitea-gitea --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
## Optional: scale up, for not having to wait for re-sync of ArgoCD
kubectl patch statefulset -n gitea gitea --patch '[{"op": "replace", "path": "/spec/replicas", "value": 1}]' --type=json
```

For restoring Keycloak processes:
```sh
## Re-enable ArgoCD auto-sync
kubectl patch application -n argocd keycloak-keycloak-operator-cr --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
## Optional: scale up, for not having to wait for re-sync of ArgoCD
kubectl patch keycloak -n keycloak keycloak --patch '[{"op": "replace", "path": "/spec/instances", "value": 1}]' --type=json
## Required: force a restart of the platform Keycloak operator; ArgoCD re-creates the Deployment
kubectl delete deploy -n apl-keycloak-operator apl-keycloak-operator
```

For restoring Harbor processes:
```sh
## Re-enable ArgoCD auto-sync
kubectl patch application -n argocd harbor-harbor --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
## Optional: scale up, for not having to wait for re-sync of ArgoCD
kubectl patch deploy -n harbor harbor-core --patch '[{"op": "replace", "path": "/spec/replicas", "value": 1}]' --type=json
```

## Obtaining a backup outside the cluster

The following instructions for example apply for Gitea in the last step of [reinstalling a platform setup on a new cluster](platform-reinstall.md). If the backup to recover from is not available as a `Backup` resource within the cluster, but in an attached object storage, follow the instructions above, except for making the following change to `env/databases/<app>.yaml` in the `values` repository:

Adjust the object storage parameters below as needed, at least replacing the `<bucket-name>` and `<location>` placeholders. Typically `serverName` should remain unchanged. `linode-creds` are the account credentials set up by the platform and can be reused provided that they have access to the storage.

env/databases/gitea.yaml:
```yaml
databases:
  gitea:
    # ...
    recovery:
      source: gitea-backup
      database: gitea
      owner: gitea
    externalClusters:
      - name: gitea-backup
        barmanObjectStore:
          serverName: gitea-db
          destinationPath: s3://<bucket-name>/gitea
          endpointURL: https://<location>.linodeobjects.com
          s3Credentials:
            accessKeyId:
              name: linode-creds
              key: S3_STORAGE_ACCOUNT
            secretAccessKey:
              name: linode-creds
              key: S3_STORAGE_KEY
          wal:
            compression: gzip
            maxParallel: 8
          data:
            compression: gzip
```

env/databases/harbor.yaml:
```yaml
databases:
  harbor:
    # ...
    recovery:
      source: harbor-backup
      database: registry
      owner: harbor
    externalClusters:
      - name: harbor-backup
        barmanObjectStore:
          serverName: harbor-otomi-db
          destinationPath: s3://<bucket-name>/harbor
          endpointURL: https://<location>.linodeobjects.com
          s3Credentials:
            accessKeyId:
              name: linode-creds
              key: S3_STORAGE_ACCOUNT
            secretAccessKey:
              name: linode-creds
              key: S3_STORAGE_KEY
          wal:
            compression: gzip
            maxParallel: 8
          data:
            compression: gzip
```

env/databases/keycloak.yaml:
```yaml
databases:
  keycloak:
    # ...
    recovery:
      source: keycloak-backup
      database: keycloak
      owner: keycloak
    externalClusters:
      - name: keycloak-backup
        barmanObjectStore:
          serverName: keycloak-db
          destinationPath: s3://<bucket-name>/keycloak
          endpointURL: https://<location>.linodeobjects.com
          s3Credentials:
            accessKeyId:
              name: linode-creds
              key: S3_STORAGE_ACCOUNT
            secretAccessKey:
              name: linode-creds
              key: S3_STORAGE_KEY
          wal:
            compression: gzip
            maxParallel: 8
          data:
            compression: gzip
```

## Point-in-time recovery

For restoring a backup only up to a specific point in time, add a recovery target to the `recovery` sections above, according to the [CloudnativePG docs](https://cloudnative-pg.io/documentation/current/recovery/#point-in-time-recovery-pitr). For example, for restoring Gitea up to a change that was made after 2023-03-06 08:00:39 CET, add the following value:

```yaml
databases:
  gitea:
    # ...
    recovery:
      source: gitea-backup
      database: gitea
      owner: gitea
      recoveryTarget:
        # Time base target for the recovery
        targetTime: "2023-03-06 08:00:39+01"
    externalClusters:
    # ...
```

You can also use a [named backup resource](#regular-recovery-with-backup-in-same-cluster). However, the backup must be from **before** the timestamp you choose as a recovery target, considering that they are named with a timestamp in universal time (UTC).

Note that the timestamp above is not exactly in the common ISO 8601 format such as `2023-07-06T08:00:39Z`. Instead date and time must be separated by space and the timezone should be written out explicitly such as `+00` (for UTC) or `+01` (for CET without DST). For all valid formats, refer to the [specific section of the PostgreSQL documentation](https://www.postgresql.org/docs/current/datatype-datetime.html#DATATYPE-DATETIME-INPUT-TIME-STAMPS).

## Emergency backup and restore

The methods using the built-in tools of PostgreSQL `pg_dump` and `pg_restore` should be used of the operator is not available. This type of backup can also be used as an additional safety measure before using any of the aforementioned methods. Be aware that the backups are stored on the computer where the commands are executed. This requires a stable connection to the database pods during the time of the backup and recovery.

1. Scale the application to zero that is using the database cluster ([see above](#shutting-down-services)).
2. Perform the backup or the restore as needed (following commands).
3. Restore the application processes ([see above](#restarting-services)).

Note that in difference to the commands as documented in the [CNPG site](https://cloudnative-pg.io/documentation/current/troubleshooting/#emergency-backup), the following `pg_restore` commands include the `--clean` flag which will clear tables before the import. Otherwise, the import will likely fail as the database is usually not empty after the application has been initializing it on startup. Nevertheless **use this flag with care**!

In the following steps, the `-n` suffix of each pod name (e.g. `gitea-db-n`) needs to be replaced with the primary pod instance (e.g. `kubectl exec -n gitea gitea-db-1 ...`).

### Gitea database

Determine the primary instance:
```sh
kubectl get cluster -n gitea gitea-db
```

Backup:
```sh
kubectl exec -n gitea gitea-db-n postgres \
  -- pg_dump -Fc -d gitea > gitea.dump
```

Restore:
```sh
kubectl exec -i -n gitea gitea-db-n postgres \
  -- pg_restore --no-owner --role=gitea -d gitea --verbose --clean < gitea.dump
```

### Keycloak database

Determine the primary instance:
```sh
kubectl get cluster -n keycloak keycloak-db
```

Backup:
```sh
kubectl exec -n keycloak keycloak-db-n postgres \
  -- pg_dump -Fc -d keycloak > keycloak.dump
```

Restore:
```sh
kubectl exec -i -n keycloak keycloak-db-n postgres \
  -- pg_restore --no-owner --role=keycloak -d keycloak --verbose --clean < keycloak.dump
```

### Harbor database

Determine the primary instance:
```sh
kubectl get cluster -n harbor harbor-otomi-db
```

Backup:
```sh
kubectl exec -n harbor harbor-otomi-db-n postgres \
  -- pg_dump -Fc -d harbor > harbor.dump
```

Restore:
```sh
kubectl exec -i -n harbor harbor-otomi-db-n postgres \
  -- pg_restore --no-owner --role=keycloak -d harbor --verbose --clean < harbor.dump
```
