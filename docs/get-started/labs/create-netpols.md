---
slug: create-netpols
title: Configuring network policies
sidebar_label: Create Network Policies
---

In this lab you’ll explicitly open only the network paths your app needs using two dedicated UIs:

1. **Inbound Rules** — pod‑to‑pod (cluster‑internal)
2. **Outbound Rules** — external (egress to FQDNs/IPs)

When **Ingress control** is enabled for your team, _all_ pod‑to‑pod traffic is denied by default. When **Egress control** is enabled, _all_ external traffic is denied by default. You’ll create only the rules required by your Voting App.

---

## Understanding Inbound Rules

Inbound Rules let you:

- Keep pods locked down (deny‑all by default)
- Allow specific workloads (via workload dropdown + auto‑fetched labels) to connect to your pods

---

## Understanding Outbound Rules

Outbound Rules let you:

- Keep pods locked down from external traffic (deny‑all by default)
- Allow namespace‑wide access to specific FQDNs or IPs

---

## Lab Part 1: Deploy the Voting App

### 1. Build container images

1. Register a Code Repository with `https://github.com/linode/apl-examples` as the URL.
2. Create three Docker Container Images. For the Dockerfile path you can use:

   - **vote** → `vote-app/vote/Dockerfile`
   - **worker** → `vote-app/worker/Dockerfile`
   - **result** → `vote-app/result/Dockerfile`

### 2. Deploy Redis & Postgres

1. In the Catalog, install **redis** (redis-ha) with default settings.
2. Install **postgresql** (postgresql-cluster) with default settings.

### 3. Deploy your workloads

#### Vote app

Use the `k8s-deployment` chart:

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
    value: <redis-ha-name>
replicaCount: 1
```

#### Worker app

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
    value: <redis-ha-name>
  - name: DATABASE_HOST
    value: <psql-cluster-name>-rw
replicaCount: 1
```

:::note
The worker pod will show an error “Waiting for db” in the logs. This is an expected error that will be resolved when all the steps in the lab are done.
:::

#### Result app

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

### 4. Expose your services

- Create a service for `vote`.
- Create a service for `result`.

---

## Lab Part 2: Ingress Rules for Voting App

You’ll allow only Worker & Result to reach Postgres, and only Vote & Worker to reach Redis.

### Postgres Ingress

1. **Navigate:** **Network Policies > Inbound Rules**
2. **CREATE INBOUND RULE**
3. **Name:** `postgres-ingress`
4. **Sources:**

   - **Workload:** select **worker**
   - **Label(s):** Select `otomi.io/app=worker`from the drop-down
   - Click **ADD SOURCE**, then add:

     - **Workload:** result
     - **Label(s):** `otomi.io/app=result`

5. **Target:**

   - **Workload:** postgres
   - **Label:** `otomi.io/app=postgres`

6. **Save Changes**

### Redis Ingress

1. **CREATE INBOUND RULE**
2. **Name:** `redis-ingress`
3. **Sources:**

   - **Workload:** select **worker**
   - **Label(s):** Select `otomi.io/app=worker`from the drop-down
   - Click **ADD SOURCE**, then add:

     - **Workload:** vote
     - **Label(s):** `otomi.io/app=vote`

4. **Target:** Redis → `otomi.io/app=redis`
5. **Save Changes**

---

## Lab Part 3: Egress Rule for Troubleshooting

You’ll allow HTTPS egress to `example.com` so you can test connectivity.

### Create example.com Egress

1. **Navigate:** **Network Policies > Outbound Rules**
2. **CREATE OUTBOUND RULE**
3. **Name:** `example-egress`
4. **Domain name or IP address:** `example.com`
5. **Protocol & Port:**

   - Protocol: **HTTPS**
   - Port: **443**

6. **Save Changes**

---

## Lab Part 4: Testing

### Verify pod‑to‑pod (Ingress)

1. Browse to your **Vote** service’s external URL → cast a vote.
2. Browse to your **Result** service’s URL → confirm the vote appears.

### Verify external (Egress)

1. Launch Netshoot in your team namespace:

   ```bash
   kubectl run -i --tty --rm netshoot \
     --image nicolaka/netshoot -n team-labs
   ```

2. Inside the pod, run:

   ```bash
    curl -s https://example.com | grep -o '<h1.*</h1>'
   ```

   You should see:

   ```
   <h1>Example Domain</h1>
   ```

3. Exit the pod (`exit`). It will be removed automatically.

---

Congratulations—your Voting App is now locked down to exactly the paths you opened!
