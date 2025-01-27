---
slug: gitea
title: Gitea repositories and database
sidebar_label: Gitea
---
## Introduction

Gitea stores the platform configuration (value repository), the workload catalog, as well as all user-created repositories.

The recovery described here uses the application-level backup of Gitea, i.e. using the `gitea dump` command line. That backup type includes a current SQL dump of the database, as well as all repositories' data. The backup therefore ensures more than other backup methods (e.g. the CNPG database backup and volume snapshots in combination) that the two different data stores match. However, Gitea documentation recommends different methods for restoring the database, due to potential compatibility issues.

A restore using this method is advised, if for some reason only Gitea has been affected by a severe operational event leading to data corruption or loss. Where required, it is also possible to restore only either the database or single repositories. After such a partial restore there may be mismatches between the repository information and the database however.

## Retrieving backups

While uploading and keeping backups on the configured object storage, there is also a local retention of these backups on a local volume for one day. After the local retention has expired, archives can be retrieved from the remote storage.

Note that `rclone` is installed on the first time upload of a Gitea backup. If not present, it can be obtained from the releases page at https://github.com/rclone/rclone/releases/

```sh
cd /backup

## Optional, not required if backup is available locally
.bin/rclone copy gitea:/$BUCKET_NAME/<backup-name>.tar.bz2 /backup/

## Extract the backup
tar xvjf <backup-name>.tar.bz2

cd <backup-name>
```

## Restoring a single repository

...

## Other assets

...

## Restoring the database

...

## Cleaning up

Remove any extracted files from the local backup directory to free up space. They are not removed automatically. Only compressed backups with the `.tar.bz2` are cleaned up after one day.

```sh
cd /backup
rm -R <backup-directory-name>
```
