---
slug: databases
title: Restoring platform databases
sidebar_label: Databases
---

Generally it is recommended to follow the CNPG documentation on how to backup or restore a PostgreSQL database. The steps here are plotted out specifically to this platform.

## Initial notes

The following instructions assume you are generally familiar with essential Kubernetes tools such as `kubectl`. Usage of TUI applications such as `k9s` from the administration terminal are strongly advised.

In the event that platform-critical services Gitea and Keycloak are not able to start, required changes to the database configuration can be applied directly in the following ArgoCD applications in the `argocd` namespace. This change persists and is synchronized into the cluster until the following Tekton pipeline overwrites them:

* Gitea database: `gitea-gitea-otomi-db`
* Keycloak database: `keycloak-keycloak-otomi-db`

Where applicable, in these manifests the `initdb` section in `clusterSpec.bootstrap` can be replaced with `recovery` and `externalClusters` as mentioned below. Note that `recovery` and `externalClusters` do not need to be reflected in the values file later, since they are only considered when initializing the cluster; even when Tekton does revert these changes, after a successful recovery this no longer has an effect.

## Preparation of backup and recovery

During a backup or recovery of the database, the application needs to be shut down for avoiding any write operations leading to inconsistencies. The following steps for each application will be referred to in the sections below.

### Gitea

For temporarily disabling Gitea:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd gitea-gitea --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Scale Gitea statefulset to zero
kubectl patch statefulset -n gitea gitea --patch '[{"op": "replace", "path": "/spec/replicas", "value": 0}]' --type=json
## Verify that pods are shut down
kubectl get statefulset -n gitea gitea  # Should show READY 0/0
```

For restoring Gitea processes:
```sh
## Re-enable ArgoCD auto-sync, which should also change the Gitea statefulset to scale up
kubectl patch application -n argocd gitea-gitea --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
## Optional: scale up, for not having to wait for re-sync of ArgoCD
kubectl patch statefulset -n gitea gitea --patch '[{"op": "replace", "path": "/spec/replicas", "value": 1}]' --type=json
```

### Keycloak

For temporarily disabling Keycloak:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd keycloak-keycloak-operator --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Scale Keycloak statefulset to zero
kubectl patch keycloak -n keycloak keycloak --patch '[{"op": "replace", "path": "/spec/instances", "value": 0}]' --type=json
## Verify that pods are shut down
kubectl get statefulset -n keycloak keycloak  # Should show READY 0/0
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

## Harbor

For temporarily disabling Harbor:
```sh
## Disable ArgoCD auto-sync during the changes
kubectl patch application -n argocd harbor-harbor --patch '[{"op": "remove", "path": "/spec/syncPolicy/automated"}]' --type=json
## Scale Harbor deployment to zero
kubectl patch deploy -n harbor harbor-core --patch '[{"op": "replace", "path": "/spec/replicas", "value": 0}]' --type=json
## Verify that pods are shut down
kubectl get deploy -n harbor harbor-core  # Should show READY 0/0
```

For restoring Harbor processes:
```sh
## Re-enable ArgoCD auto-sync
kubectl patch application -n argocd harbor-harbor --patch '[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true, "allowEmpty": true}}]' --type=json
## Optional: scale up, for not having to wait for re-sync of ArgoCD
kubectl patch deploy -n harbor harbor-core --patch '[{"op": "replace", "path": "/spec/replicas", "value": 1}]' --type=json
```

## Regular recovery with backup in same cluster

This procedure should be taken if the database has gotten to an unhealthy state, e.g. because of volume filesystem corruption. For reverting undesired change, additional instructions for a point-in-time recovery are to be considered.

The regular backup and recovery requires making adjustments to the values file. Since certain services may become unavailable in the course of restoring a backup, it is advised to:

* Create a Gitea application token for the `platform-admin` user.
* Have editing tools available for updating a Kubernetes resource in-place.

Recovering any of the platform services should be performed in the following order:

1. Note the name of the `Backup` resource that you intend to run the recovery from.
2. Make adjustments to the values as described in this section. This needs to be done within the values repository directly.
3. Shut down the service accessing the database (see above).
4. Halt ArgoCD auto-sync and delete the database `Cluster` resource (described below).
5. Re-enable ArgoCD sync.
6. Re-enable the backup disabled in step 1. This can also take place via the Console.

### Listing backup resources

Available backups can be listed using the following command. Consider only `completed` ones for recovery.

```sh
kubectl get backup -n <app>
```
where `<app>` is to be replaced with `gitea`, `harbor`, or `keycloak`.

### Adjustments to backup configuration

After the recovery, new backups will be created. For avoiding accidental mixing and overwriting of backups, CloudnativePG does not allow for the new backup and the recovery source to be in the same location. Therefore, the backups should be temporarily disabled, and the suffix (the directory inside the object storage) are to be adjusted.

Inside `env/settings.yaml`, locate the path `platformBackups.database.<app>` (where `<app>` is either `gitea`, `harbor`, or `keycloak`) and set the values `enabled: false` and `pathSuffix: <app>-1`. The path suffix may also be set to something completely different, but must not exist in the object storage.

Example:

```yaml
...
platformBackups:
    database:
        gitea:
            enabled: false
            retentionPolicy: 7d
            schedule: 0 0 * * *
            pathSuffix: gitea-1
...
```

### Adjustments to database configuration

The following change only has an effect on an initial database cluster.

In the file `env/databases/<app-name>.yaml`, update the structure of `databases.keycloak.recovery` as follows, depending on the app, inserting the backup name as determined above:

For Gitea:
```yaml
...
    recovery:
      source:
        backup: <backup-name>
      database: gitea
      owner: gitea
      secret:
        name: gitea-db-secret
```

For Harbor:
```yaml
...
    recovery:
      source:
        backup: <backup-name>
      database: registry
      owner: harbor
```

For Keycloak:
```yaml
...
    recovery:
      source:
        backup: <backup-name>
      database: keycloak
      owner: keycloak
```

### Shutting down services

Check the Tekton pipelines to ensure that values changes have been deployed as expected. After this, follow above instructions to shut down Gitea, Harbor, or Keycloak as needed.

### Removing the existing cluster

After deploying the values changes to the cluster, and shutting down applications accessing the database delete the database cluster.

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

### Observe the cluster recreation and restart services

The cluster should now be recreated from the backup. Wait until the `Cluster` status shows `Cluster in healthy state` and restart the dependent services using the instructions above.

## Point-in-time recovery

...

## Obtaining a backup outside the cluster

...

## Emergency backup and restore

The methods using the built-in tools of PostgreSQL `pg_dump` and `pg_restore` should be used of the operator is not available. This type of backup can also be used as an additional safety measure before using any of the methods above. Be aware that the backups are stored on the computer where the commands are executed. This requires a stable connection to the database pods during the time of the backup and recovery.

1. Scale the application to zero that is using the database cluster (see above).
2. Perform the backup or the restore as needed (following commands).
3. Restore the application processes (see above).

Note that in difference to the commands as documented in the CNPG site, the following `pg_restore` commands include the `--clean` flag which will clear tables before the import. Otherwise, the import will likely fail as the database is usually not empty after the application has been accessing it for the first time. Nevertheless **use this flag with care**!

In the following steps, the `-n` suffix of each pod name (e.g. `gitea-db-n`) needs to be replaced with the primary pod instance (e.g. `kubectl exec -n gitea gitea-db-1 ...`).

### Gitea

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

### Keycloak

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

### Harbor

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
