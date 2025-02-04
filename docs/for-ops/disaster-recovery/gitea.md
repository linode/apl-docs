---
slug: gitea
title: Gitea repositories and database
sidebar_label: Gitea
---
## Introduction

Gitea stores the platform configuration (value repository), the workload catalog, and user-created repositories.

The recovery described here uses the application-level backup of Gitea, i.e. using the `gitea dump` command line. That backup type includes a current SQL dump of the database as well as all repositories' data. However, [Gitea documentation](https://docs.gitea.com/administration/backup-and-restore) recommends different methods for restoring the database, due to potential compatibility issues.

A restore using this backup is advised, if for some reason only Gitea has been affected by a severe operational event leading to data corruption or loss. It is also possible to restore only either the database or single repositories. After such a partial restore there may be mismatches between the repository information and the database however.

## Retrieving backups

While uploading and keeping backups on the configured object storage, there is also a local retention of these backups on a local volume for one day. After the local retention has expired, archives can be retrieved from the remote storage.

Note that `rclone` is installed on the first time upload of a Gitea backup. If not present, it can be obtained from the releases page at https://github.com/rclone/rclone/releases/. Following variables such as `$BUCKET_NAME` or storage authentication are pre-configured in the container, so they do not need to be changed.

```sh
##
## In the local terminal
##
kubectl exec -it -n gitea gitea-0 -- /bin/bash

##
## The following to be run in the remote container
##

## If needed, obtain and install Rclone
mkdir -p /backup/.bin
cd /backup/.bin
curl -fsSL -o rclone.zip https://github.com/rclone/rclone/releases/download/v1.69.0/rclone-v1.69.0-linux-amd64.zip
unzip -oj rclone.zip
cd /backup

## Optional, not required if backup is available locally
.bin/rclone lsf gitea:/$BUCKET_NAME  # List files
.bin/rclone copy gitea:/$BUCKET_NAME/<backup-name>.tar.bz2 /backup/  # Obtain file

## Extract the backup
mkdir restore
tar xvjf <backup-name>.tar.bz2 -C restore
cd restore
```

## Restoring a single repository

Repositories are stored in the mounted container path `/data/git/gitea-repositories`, with the owning user or organization as a subdirectory. To restore a single repository, find the backup in the backup's `data/repos/<owner>` directory and copy it over to `/data/git/gitea-repositories/<owner>`.

Note it is not recommended to restore the `otomi/values` repository with this method after restoring a full cluster.

```sh
## ... commands above to obtain and extract the backup
cp -R repos/otomi/charts.git /data/git/gitea-repositories/otomi/
```

## Other assets

Gitea file assets such as avatar images are to be found in the `data` directory of the backup. Similarly, they can be copied to the `/data/` subdirectory as needed, e.g.

```sh
## ... commands above to obtain and extract the backup
cp -R data/avatars /data/
```

## Restoring the database

For restoring the database of Gitea, please refer to the [platform database instructions](platform-databases.md).

## Cleaning up

Remove any extracted files from the local backup directory to free up space. They are not removed automatically. Only compressed backups with the `.tar.bz2` are cleaned up after one day.

```sh
cd /backup
rm -R restore
```
