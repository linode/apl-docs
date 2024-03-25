---
slug: lab-19
title: Configuring network policies
sidebar_label: Configure network policies
---

In some cases you want to explicitly allow access to your application. This can be done by creating network policies. Otomi supports 2 types of network policies:

- Policies for ingress traffic inside the cluster
- Policies for egress traffic to go outside of the cluster (to access external FQDNs)

## Understanding Internal Ingress Network Policies

The internal ingress network policies allow you to:

- Deny all traffic to Pods (default mode)
- Allow selected Workload Pods running on the cluster to access your Workload's Pods
- Allow all traffic to the Pods of a Workload

`Deny all` and `Allow all` we don't need to explain right?

:::info
The Ingress Network Policies in Otomi rely on Pod labels. We require that a single label covers Pods for a given workload. We recommend to use the `otomi.io/app: <workload-name>` label.
:::

To allow other Workloads in the cluster to access your Workload's Pods, follow these steps:

- Navigate to the `Network Policies` page in the Otomi Console and click `Create Netpol`.
- Name the network policy and select the `ingress` rule type.
- Add the selector label name and value for the Workload Pods to be accessed. E.g.: use the `otomi.io/app` label.
- Select either `AllowAll` or `AllowOnly` mode.
- If you select `AllowOnly`, specify the namespace (e.g., `team-labs`), and the selector label name and value for the Workload Pods to be accessed.
- Add more rules if needed.

## Understanding Egress Network Policies

The egress network policies allow you to:

- Deny all traffic from the Pods of a Workload (default)
- Allow all Pods within a namespace to access external FQDNs or IPs through an egress rule.

To allow your Workload's Pods to access external FQDNs or IPs, follow these steps:

- Navigate to the `Network Policies` page in the Otomi Console and click `Create Netpol`.
- Name the network policy and select the `egress` rule type.
- Add the FQDN or IP to be accessed.
- Add port number(s) and protocol if needed.

:::info
The egress rules are namespace wide. You cannot bind egress policy to a given workload only.
:::

## Setting Up Network Policies for the Example Voting App: An Ingress Example

### Build Images for the Application

Build the `Vote`, `Worker` and `Result` images from this [repo](https://github.com/redkubes/example-voting-app).

Use the Build feature in Otomi to build the images with `mode: Docker`. Set the `path` to `./vote/Dockerfile` for the Vote image (and `./worker/Dockerfile` for the Worker and `./result/Dockerfile` for Result).

### Create a Redis Cluster and a PostgreSQL Database

Use the `postgresql` and the `redis` charts from the Catalog to create a Redis master-replica cluster and a PostgreSQL database. For this lab, Redis authentication needs to be turned off by setting `auth.enabled=false`.

### Deploy the Vote App

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

### Deploy the Worker App

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

### Deploy the Result App

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

### Register the Services for Exposure

#### Postgres Database

- Register the `<workload-name>-rw` Postgresql service.
- Set exposure to `Private` (default).

#### Redis

- Register the `<workload-name>-master` Redis service.
- Set exposure to `Private` (default).

#### Vote

- Register the `vote` service.
- Set exposure to `External`.

#### Result

- Register the `<result>` service.
- Set exposure to `External`.

### Register the Network Policies for the Example Voting App

#### Postgres Database

- Create a new `Netpol` and select the `ingress` rule type.
- Add the selector label name `otomi.io/app`.
- Add the selector label value `<postgres-workload-name>`.
- Select `AllowOnly`.
- Add the namespace `<team-name>`, the selector label name `otomi.io/app` and the selector label value `<worker>`.
- Add the namespace `<team-name>`, the selector label name `otomi.io/app` and the selector label value `<result>`.

#### Redis

- Create a new `Netpol` and select the `ingress` rule type.
- Add the selector label name `otomi.io/app`.
- Add the selector label value `<redis-workload-name>`.
- Select `AllowOnly`.
- Add the namespace `<team-name>`, the selector label name `otomi.io/app` and the selector label value `<worker>`.
- Add the namespace `<team-name>`, the selector label name `otomi.io/app` and the selector label value `<vote>`.

### Test the Voting App

- Go to the external URL of the `vote` application.
- Click on `Cats` or `Dogs`.
- Now go to the external URL of the `result` application.
- You should see the result of your vote.

## Setting Up Network Policies for Otomi.io: An Egress Example

### Register the Network Policy for Otomi.io

- Navigate to the `Network Policies` page in the Otomi Console and click `Create Netpol`.
- Name the network policy `otomi` and select the `egress` rule type.
- Add the FQDN `otomi.io` to be accessed.
- Add port number `443` and protocol `HTTPS`.

### Deploy Netshoot Pod

- Deploy a Netshoot pod in your namespace within your Kubernetes cluster.
- You can do this using kubectl command:
  ```shell
  kubectl run -i --tty --rm netshoot --image nicolaka/netshoot -n team-labs
  ```

:::info
The [Netshoot](https://github.com/nicolaka/netshoot) pod is a network troubleshooting tool that includes a lot of network tools like `curl`, `dig`, `nslookup`, `ping`, `traceroute`, etc.
:::

### Test the Egress Network Policy

- Run the following command in the Netshoot pod:
  ```shell
  curl https://otomi.io
  ```
- You should see the HTML of the Otomi.io website.
- Run the following command to see the `<h1>Build, Deploy and Run applications at scale</h1>` message:
  ```shell
  curl https://otomi.io | grep -o '<h1>.*</h1>'
  ```
- Type `exit` to exit the Netshoot pod.
- When you exit the Netshoot pod, it will be removed from the cluster.
