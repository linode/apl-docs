---
slug: create-rabbitmq-cluster
title: Create rabbitMQ Cluster
sidebar_label: Create RabbitMQ cluster
---

In this lab we will create a RabbitMQ Cluster using the APL quick start Rabbitmq Helm charts from the Catalog.

:::info
For this lab, RabbitMQ Operator needs to be activated.
:::

## Creating the RabbitMQ Cluster

1. In the left sidebar click on `Catalog`.

2. Click on the `RabbitMQ` item in the Catalog. This will take you to the page with the readme where you can see all specifications and definitions that you can use to create your RabbitMQ Cluster with Queues and Policies.

3. Click on the `Values` tab and fill in a name for the RabbitMQ Cluster. In this lab we will create a rabbitMQ Cluster with the name `rabbit1`.

4. Scroll down and optionally edit the cluster parameters.

5. Configure `Queues` and `Policies` for the rabbitMQ Cluster with 2 `queues` and 2 `policies`:

```yaml
queues:
  - name: my-quorum-queue1
    spec:
      durable: true
      arguments:
        x-queue-type: quorum
  - name: my-quorum-queue2
    spec:
      arguments:
        autoDelete: true

policies:
  - name: my-policy1
    pattern: ".*"
    definition:
      dead-letter-exchange: cc
      ha-mode: all
    spec:
      applyTo: classic_queues
      priority: 1
      vhost: "/"
  - name: my-policy2
    pattern: ".*"
    definition:
      dead-letter-exchange: cc
      max-age: 1h
    spec:
      applyTo: quorum_queues
```

:::info
Remember that even though these values can be edited afterwards, not all specifications or definitions can be updated after a `queue` or `policy` has been created. Please make sure everything is filled in correctly.
:::

6. Click `submit`.

7. Click `Deploy Changes`.

## Accessing the RabbitMQ Management UI

To access the `RabbitMQ Management UI` you have two options:

- Retrieve the default user credentials and `port-forward` the `rabbitMQ server`

- Create a service to expose the `rabbitMQ server` and access the `Management UI` publicly. This is not recommended for production services

In this lab we are going to use port-forwarding. 

:::note
In this example the `rabbitMQ cluster` was created in the Team demo, so we have to get the `secret` from the `team-demo` namespace. Please retrieve the `secret` from the namespace where the `rabbitMQ cluster` was created.
:::

1. Use the following command to retrieve the username:

```bash
kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.username}" | base64 --decode
```

2. Use the following command to retrieve the password:

```bash
kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.password}" | base64 --decode
```
:::info
Make sure you don't copy the `%` symbol at the end.
:::

Now you have to `port-forward` the rabbitmq `container` with port number `15672` that is inside the rabbitmq `pod` called `rabbit1-rabbitmq-server-0` to a port of your choice that is not used. In this lab we use port `56027`.

:::info
`rabbit1-rabbitmq-server-0` has the prefix `rabbit1` because this is the name that we gave the cluster.
:::

3. Use the following command to enable the port-forwarding:

```bash
kubectl port-forward -n team-demo rabbit1-rabbitmq-server-0 56027:15672
```

4. Open a browser and go to `http://localhost:56027`

5. Use the previously acquired user credentials to log in. If you cannot log in, please check if the credentials are for the correct rabbitMQ cluster.

![Logging-in to Management UI](../../img/rabbitmq-8-logging-in.png)

## Checking the RabbitMQ Management UI

Now that we are logged in you should see the following:

![ManagementUI Overview](../../img/rabbitmq-9-management-ui.png)

We can also check the `queues` that we specified when creating the rabbitmq cluster in the `Queues and Streams` tab.

![Overview Queues](../../img/rabbitmq-10-queues.png)

To see the `policies` that we defined you can see them in the `Admin` tab and under `Policies`:

![Overview Policies](../../img/rabbitmq-11-policies.png)

## Connecting an Application to the rabbitMQ Cluster

To connect to the `rabbitMQ cluster` you use `AMQP` to open a connection. To open a connection you need to create a connection string using the `username`, `password`, `host` and `port` of the rabbitmq cluster.

1. Get the host use the following command:

```bash
kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.host}" | base64 --decode
```

2. Get the port use the following command:

```bash
kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.port}" | base64 --decode
```

The connection string is build like this:

```
amqp://USERNAME:PASSWORD@HOST:PORT/
```

With values:

```
amqp://default_user_mWPUECo5wsbtpgY3oze:MdzUL4CcgF-cQryLfk5uxqf57qqWBG8l@matthew-rabbit1-rabbitmq.team-admin.svc:5672/
```
