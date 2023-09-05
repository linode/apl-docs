---
slug: lab-24
title: Create a PostgreSQL database
sidebar_label: Create a database
---

Otomi by defalt installs the Cloudnative-gp database operator. Teams can use the operator to create their own PostgreSQL databases.

:::info
For now teams can create databases by adding a database resource to their GitOps repository. Creating databases will soon be a self-service feature in Otomi Console.
:::

## Create a database

1. In the apps section in Otomi console, click on Gitea. In the list of repo's you'll now see a new repo called `otomi/team-<name>-argocd`.
2. Create a new file in the repo called `my-db.yaml`

```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: my-db
spec:
  description: "Postgres Database used in Otomi labs"
  imageName: ghcr.io/cloudnative-pg/postgresql:15.3
  instances: 1
  primaryUpdateStrategy: unsupervised
  storage:
    size: 1Gi
  monitoring:
    enablePodMonitor: false
```
Note that we do not enable the pod monitor.

3. Save the file and commit the changes

The operator will now create the database and add a secret to the team's namespace called `my-db-superuser`. This secret contains the username and password for the database with the keys `username` and `password`.

If your application requires to use different keys, create the following `secretKeyRef` variables:

```yaml
env:
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: my-db-superuser
      key: password
- name: SECRET_KEY
  valueFrom:
    secretKeyRef:
      name: my-db-superuser
      key: username
```
