---
slug: reinstall
title: Reinstalling the platform
sidebar_label: Reinstall
---

## Prerequisites

* The following steps assume that all required backups exist in object storage, and that this storage has not been corrupted.
* You should have downloaded a (non-redacted) values file using Platform -> Maintenance.
* It requires that you have your own domain name for the cluster. The old and the reinstalled cluster may use the same domain, but in that case the old cluster should no longer be running; due to issues with DNS caching it is advised to use a new (sub-)domain.
* Re-installing a Linode LKE cluster with the platform reinstalled is currently not supported. It can only be installed in a new LKE cluster without the pre-installed platform, using your own domain.
* Gitea cannot be restored directly onto a new platform. The data and a database backup can however be restored after the installation with an initial database.

## Steps

The following steps are described in more detail:

1. Pepare a new cluster.
2. Prepare the values for for reinstallation.
3. Make sure to stop any write operations to object storage.
4. Reinstall the platform on the new cluster.
5. Restore the Gitea database and repositories.

## Provision a new cluster

Provide a new cluster suitable for running the configuration. Do not install the platform directly when creating an LKE cluster. Example:

```sh
# Update variables as needed
CLUSTER_LABEL=new-cluster
CLUSTER_REGION=nl-ams

# Create the new cluster
linode-cli lke cluster-create \
  --label "$CLUSTER_LABEL" \
  --region "$CLUSTER_REGION" \
  --k8s_version 1.31 \
  --control_plane.high_availability true \
  --node_pools.type g6-dedicated-8 \
  --node_pools.count 3
# Retrieve the kubeconfig
linode-cli get-kubeconfig --label "$CLUSTER_LABEL"
# Set cluster id variable
CLUSTER_ID=$(linode-cli lke clusters-list --label "$CLUSTER_LABEL" --json  | jq ".[0].id")
# Set new default context
kubectl config use-context lke$CLUSTER_ID-ctx
```

## Values file adjustments

Make a copy of the downloaded values file and adjust
   * `cluster.domainSuffix`
   * `dns.domainFilters`
   * `cluster.name` (preferably to the label of the new cluster from the previous step)
   * any credentials (e.g. access tokens) that will change
   * domains of any services that are changed

Then prepare the database to be initialized with the backup data from the attached object storage.

First relocate the backups, provided they are using the same storage buckets, by updating the `pathSuffix`.

```yaml
# ...
platformBackups:
  database:
    gitea:
      enabled: true
      retentionPolicy: 7d
      schedule: 0 0 * * *
      pathSuffix: gitea-1
    harbor:
      enabled: true
      retentionPolicy: 7d
      schedule: 0 0 * * *
      pathSuffix: harbor-1
    keycloak:
      enabled: true
      retentionPolicy: 7d
      schedule: 0 0 * * *
      pathSuffix: keycloak-1
```

Then prepare the recovery values, replacing the `<bucket-name>` and `<storage-region>` placeholders. If the source platform itself has been recovered from a backup before, also update the last portion of the `destinationPath`, e.g. to `harbor-1`. In that case, change the aforementioned `pathSuffix` to a different value, e.g. `harbor-2`.

In the section `databases.harbor`:
```yaml
# ...
databases:
  # ...
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
          endpointURL: https://<storage-region>.linodeobjects.com
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

In `databases.keycloak`:
```yaml
# ...
databases:
  # ...
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
          endpointURL: https://<storage-region>.linodeobjects.com
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

## Stopping write operations

If the old cluster is still running, make sure to halt any write operations to the object storage that the new one will be using for recovery. While for your applications this is very individual, for the platform this means in detail:

* Go to Settings -> Backup, and disable all options. Also clear the `linodeApiToken`.
* Got to Settings -> Object storage, and set the provider to `Disabled`.

Note that applications strictly dependent on object storage (e.g. Harbor) will become unavailable on the old cluster.

## Re-installing the platform

Follow the basic [installation instructions](../../get-started/installation/helm.md) to install the Helm repository. Then install the platform using the edited values file:

```sh
helm install -f updated-values.yaml apl apl/apl
```

Note that due to some race conditions, the some recoverable errors may occur during the installation process. Currently known issues are:

* The database recovery pods (suffixed with `-full-recovery`) may fail to start, reporting a missing secret. This can usually be fixed by deleting the pod. It will be recreated automatically.
* The Istio operator can sometimes take a long time  to start.

When the installation has completed, you should be able to log into the console using the credentials known from the previous platform.

## Restoring Gitea repositories

When the platform is installed, Gitea can also be restored to the state as preserved in the backups.

For restoring the database, refer to the [instructions on platform databases](platform-databases.md). The contents of the code repositories can be retrieved following the [Gitea-specific steps](gitea.md).
