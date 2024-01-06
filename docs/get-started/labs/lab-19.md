---
slug: lab-19
title: Configuring network policies
sidebar_label: Configure network policies
---

In some cases you want to explicitly allow access to your application. This can be done by creating network policies. Otomi supports 2 types of network policies:

- Policies for ingress traffic inside the cluster
- Policies for egress traffic to go outside of the cluster (to access external FQDNs)

## About network policies for internal ingress

The internal ingress network policies alllow you to:

- Deny all traffic to the Pods of a Workload
- Allow selected Workload Pods running on the cluster to access your Workload's Pods

`Deny all` and `Allow all` we don't need to explain right?

:::info
The Ingress Network Policies in Otomi rely on the `otomi.io/app` label. All Workloads in Otomi need to use this label. When your using an Otomi quick start template from the Catalog, this label is always added.
:::

To allow other Workloads on the cluster to access your Workload's Pods, do the following:

**If the `ClusterIP` service of your workload has the same name as the `otomi.io/app` label value:**

- Register the Kubernetes ClusterIP service of the Workload as a Service in Otomi. If no public ingress is required, then just use the `Private` Exposure option
- In the `Network policies` section leave the `PodSelector` field blanc
- In the `Ingress traffic inside the cluster` select `Allow selected`
- Add the team name (without `team-`) and `otomi.io/app` label value of the Workload Pods that are allowed access

**If the `ClusterIP` service of your workload does NOT have the same name as the `otomi.io/app` label value:**

This is sometimes the case when a Workload has multiple `ClusterIP` services. In this scenario you will only need to configure the network policies in one of the Workload services. 

- Register the Kubernetes ClusterIP service of the Workload as a Service in Otomi. If no public ingress is required, then just use the `Private` Exposure option
- In the `Network policies` section leave the `PodSelector` add the `PodSelector`. Use a custom value for the "otomi.io/app:" label.
- In the `Ingress traffic inside the cluster` select `Allow selected`
- Add the team name (without `team-`) and `otomi.io/app` label value of the Workload Pods that are allowed access

## Configure network policies for the Example Voting App

### Building the images

Build the `Vote`, `Worker` and `Result` images from this [repo](https://github.com/redkubes/example-voting-app).

Use the Build feature in Otomi to build the images with `mode-Docker`. Set the `path` to `./vote/Dockerfile` for the Vote image (and `./worker/Dockerfile` for the Worker and `./result/Dockerfile` for Result).

### Create a Redis cluster and a PostgreSQL database

Use the `postgresql` and the `redis` charts from the Catalog to create a Redis master-replica cluster and a PostgreSQL database. For this lab, Redis authentication needs to be turned off by setting `auth.enabled=false`.

### Deploy the Vote app

Use the `k8s-deployment` chart to deploy the vote app. Use the following values:

Name: `vote`

```yaml
containerPorts:
  - name: http
    containerPort: 80
    protocol: TCP
env:
  - name: REDIS_HOST
    value: <redis-cluster-name>-master
```

### Deploy the Worker app

Use the `k8s-deployment` chart to deploy the worker app. Use the following values:

Name: `worker`

```yaml
containerPorts:
  - name: http
    containerPort: 80
    protocol: TCP
env:
  - name: DATABASE_USER
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-superuser
        key: username
  - name: DATABASE_PASSWORD
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-superuser
        key: password
  - name: REDIS_HOST
    value: <redis-cluster-name>-master
  - name: DATABASE_HOST
    value: <psql-cluster-name>-rw
```

### Deploy the Result app

Use the `k8s-deployment` chart to deploy the result app. Use the following values:

Name: `result`

```yaml
containerPorts:
  - name: http
    containerPort: 80
    protocol: TCP
env:
  - name: DATABASE_USER
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-superuser
        key: username
  - name: DATABASE_PASSWORD
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-superuser
        key: password
  - name: DATABASE_HOST
    value: <psql-cluster-name>-rw
```

### Register the services for Exposure and configure network policies

#### Postgres database

- Register the `<workload-name>-rw` Postgresql service
- Set exposure to `Private` (default)
- In `Network policies` add the Pod Selector `<postgres-workload-name>`
- Select `Allow selected`
- Add From team name `<team-name>` and From label value `<postgres-workload-name>`
- Add From team name `<team-name>` and From label value `<worker>`
- Add From team name `<team-name>` and From label value `<result>`

#### Redis

- Register the `<workload-name>-master` Redis service 
- Set exposure to `Private` (default)
- In `Network policies` add the Pod Selector `<redis-workload-name>`
- Select `Allow selected`
- Add From team name `<team-name>` and From label value `<redis-workload-name>`
- Add From team name `<team-name>` and From label value `<worker>`
- Add From team name `<team-name>` and From label value `<vote>`

#### Vote

- Register the `vote` service 
- Set exposure to `External`

#### Result

- Register the `<result>` service 
- Set exposure to `External`

### Test the app

Go to the external URL of the `vote` application. Click on `Cats` or `Dogs`. Now go to the external URL of the `result` application. You should see the result of your vote.

