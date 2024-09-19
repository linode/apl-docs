---
slug: create-postgresql-db
title: Create a PostgreSQL database
sidebar_label: Create a Database
---

APL by default installs the Cloudnative POstgreSQL database operator. Teams can use the operator and the `postgresql` quick start to create their own PostgreSQL databases.

## Create a database

You can create a postgresql database from the Catalog:

1. Go to `Catalog` in the left menu and click on the `postgresql` template.

2. Click on `Values`.

3. Fill in a name for the database.

4. Change other parameter values if required.

5. Click `Submit` and the `Deploy Changes`.

The operator will now create the database and add secrets to the team's namespace called `<database-name>-superuser` and `<database-name>-app`. `<database-name>-superuser` contains the secrets for the superuser of the PostgreSQL cluster, whereas the `<database-name>-app` is granted access to the default database with the name set for the database. Each secret contains the username and password for the database with the keys `username` and `password`.

You can now provide the username and password to a container as environment variables using a `secretKeyRef`:

```yaml
env:
  - name: DB_USER
    valueFrom:
      secretKeyRef:
        name: <database-name>-app
        key: username
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: <database-name>-app
        key: password
```

:::note
Using the superuser credentials for connecting an app is discouraged. The app user has the access it needs for initializing tables etc.
:::

## Monitoring

The `postgresql` quick start template includes two parameters that can be used to create a `PodMonitor` and a Grafana Dashboard. Set the `monitoring` parameter to `true` to create a PodMonitor and set the `dashboard` parameter to `true` to add a cloudnativepg dashboard to the Team's Grafana. Note that this dashboard can be used to monitor multiple databases so you'll just need to create it once.
