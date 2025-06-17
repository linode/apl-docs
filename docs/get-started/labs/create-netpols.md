---
slug: create-netpols
title: Configuring network policies
sidebar_label: Create Network Policies
---

In some cases you want to explicitly allow access to your application. This can be done by creating network policies. 2 types of network policies are supported:

1. Policies for ingress traffic inside the cluster.

2. Policies for egress traffic to go outside of the cluster (to access external FQDNs).

## Understanding Internal Ingress Network Policies

The internal ingress network policies allow you to:

- Deny all traffic to Pods (default mode)

- Allow selected Workload Pods running on the cluster to access your Workload's Pods

- Allow all traffic to the Pods of a Workload

`Deny all` and `Allow all` we don't need to explain right?

:::info
The Ingress Network Policies rely on Pod labels. We require that a single label covers Pods for a given workload. We recommend to use the `otomi.io/app: <workload-name>` label.
:::

To allow other Workloads in the cluster to access your Workload's Pods, follow these steps:

1. Navigate to the `Network Policies` page in the Console and click `Create Netpol`.

2. Name the network policy and select the `ingress` rule type.

3. Add the selector label name and value for the Workload Pods to be accessed. E.g.: use the `otomi.io/app` label.

4. Select either `AllowAll` or `AllowOnly` mode.

5. If you select `AllowOnly`, specify the namespace (e.g., `team-labs`), and the selector label name and value for the Workload Pods to be accessed.

6. Add more rules if needed.

## Understanding Egress Network Policies

The egress network policies allow you to:

- Deny all traffic from the Pods of a Workload (default)

- Allow all Pods within a namespace to access external FQDNs or IPs through an egress rule

To allow your Workload's Pods to access external FQDNs or IPs, follow these steps:

1. Navigate to the `Network Policies` page in the Console and click `Create Netpol`.

2. Name the network policy and select the `egress` rule type.

3. Add the FQDN or IP to be accessed.

4. Add port number(s) and protocol if needed.

:::info
The egress rules are namespace wide. You cannot bind an egress policy to one Workload only.
:::

## Setting Up Network Policies for the Example Voting App: An Ingress Example

### Create the images for the application

1. Register the Code Repository using this Repository URL: https://github.com/linode/apl-examples.

2. Create 3 Container Images (vote, worker and result) using the Docker build task

- Set the path for the vote image to `vote-app/vote/Dockerfile`

- Set the path for the worker image to `vote-app/worker/Dockerfile`

- Set the path for the result image to `vote-app/result/Dockerfile`

### Create a Redis Cluster and a PostgreSQL Database

Use the `postgresql` and the `redis` charts from the Catalog to create a Redis master-replica cluster and a PostgreSQL database. For this lab, Redis authentication needs to be turned off by setting `auth.enabled=false`.

### Deploy the Vote App

Use the `k8s-deployment` chart to deploy the vote app. Use the following values:

Name: `vote`

```yaml
image:
  repository: harbor.<your-domain>/team-<team-name>/vote
  pullPolicy: IfNotPresent
  tag: main
containerPorts:
  - name: http
    containerPort: 80
    protocol: TCP
env:
  - name: REDIS_HOST
    value: <redis-cluster-name>-master
replicaCount: 1
```

### Deploy the Worker App

Use the `k8s-deployment` chart to deploy the worker app. Use the following values:

Name: `worker`

```yaml
image:
  repository: harbor.<your-domain>/team-<team-name>/worker
  pullPolicy: IfNotPresent
  tag: main
containerPorts:
  - name: http
    containerPort: 80
    protocol: TCP
env:
  - name: DATABASE_USER
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-app
        key: username
  - name: DATABASE_PASSWORD
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-app
        key: password
  - name: REDIS_HOST
    value: <redis-cluster-name>-master
  - name: DATABASE_HOST
    value: <psql-cluster-name>-rw
replicaCount: 1
```

:::note
The worker pod will show an error “Waiting for db” in the logs. This is an expected error that will be resolved when all the steps in the lab are done.
:::

### Deploy the Result App

Use the `k8s-deployment` chart to deploy the result app. Use the following values:

Name: `result`

```yaml
image:
  repository: harbor.<your-domain>/team-<team-name>/result
  pullPolicy: IfNotPresent
  tag: main
containerPorts:
  - name: http
    containerPort: 80
    protocol: TCP
env:
  - name: DATABASE_USER
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-app
        key: username
  - name: DATABASE_PASSWORD
    valueFrom:
      secretKeyRef:
        name: <psql-cluster-name>-app
        key: password
  - name: DATABASE_HOST
    value: <psql-cluster-name>-rw
  - name: DATABASE_NAME
    value: <psql-cluster-name>
replicaCount: 1
```
:::note
The result pod will show an error “Waiting for db” in the logs. This is an expected error that will be resolved when all the steps in the lab are done.
:::

### Create the Services

- Create the `vote` service.

- Create the `result` service.

### Create the Network Policies for the Example Voting App

#### Postgres Database

1. Create a new `Network policy` and select the `ingress` rule type.

2. Add the selector label name `otomi.io/app`.

3. Add the selector label value `<postgres-workload-name>`.

4. Select `AllowOnly`.

5. Add the namespace `team-<name>`, the selector label name `otomi.io/app` and the selector label value `worker`.

6. Add the namespace `team-<name>`, the selector label name `otomi.io/app` and the selector label value `result`.

#### Redis

1. Create a new `Network policy` and select the `ingress` rule type.

2. Add the selector label name `otomi.io/app`.

3. Add the selector label value `<redis-workload-name>`.

4. Select `AllowOnly`.

5. Add the namespace `team-<name>`, the selector label name `otomi.io/app` and the selector label value `worker`.

6. Add the namespace `team-<name>`, the selector label name `otomi.io/app` and the selector label value `vote`.

### Test the Voting App

1. Go to the external URL of the `vote` application.

2. Click on `Cats` or `Dogs`.

3. Now go to the external URL of the `result` application.

4. You should see the result of your vote.

## Setting Up Network Policies for apl-docs.net: An Egress Example

### Register the Network Policy for apl-docs.net

1. Navigate to the `Network Policies` page in the Console and click `Create Netpol`.

2. Name the network policy `apl-docs` and select the `egress` rule type.

3. Add the FQDN `apl-docs.net` to be accessed.

4. Add port number `443` and protocol `HTTPS`.

### Deploy Netshoot Pod

Deploy a Netshoot pod in your namespace within your Kubernetes cluster. You can do this using kubectl command:

```shell
kubectl run -i --tty --rm netshoot --image nicolaka/netshoot -n team-labs
```

:::info
The [Netshoot](https://github.com/nicolaka/netshoot) pod is a network troubleshooting tool that includes a lot of network tools like `curl`, `dig`, `nslookup`, `ping`, `traceroute`, etc.
:::

### Test the Egress Network Policy

1. Run the following command in the Netshoot pod:

```shell
curl https://apl-docs.net
```
You should see the HTML of the apl-docs.net website

2. Run the following command to see the `<title data-rh="true">App Platform for LKE</title>` message:

```shell
curl -s https://apl-docs.net | grep -o '<title.*</title>'
```

3. Type `exit` to exit the Netshoot pod.

When you exit the Netshoot pod, it will be removed from the cluster.
