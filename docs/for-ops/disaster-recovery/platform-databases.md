---
slug: databases
title: Restoring platform databases
sidebar_label: Databases
---

Generally it is recommended to follow the CNPG documentation on how to backup or restore a PostgreSQL database. The steps here are plotted out specifically to this platform.

## Preparation of backup and recovery

During a backup or recovery of the database, the application needs to be shut down for avoiding any write operations leading to inconsistencies.

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

## Regular recovery

...

## Point-in-time recovery

...

## Emergency backup and restore

The methods using the built-in tools of PostgreSQL `pg_dump` and `pg_restore` should be used of the operator is not available. Be aware that the backups are stored on the computer where the commands are executed. This requires a stable connection to the database pods during the time of the backup and recovery.

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
