---
slug: ce/services
title: Configuring Services in CE mode
sidebar_label: Services
---

When you are running Otomi in CE mode, you will operate on the values directly and have to commit them manually. This page describes how to create a Service, and how to edit a Service when running in CE mode. Before you can create a Service, make sure a [Team](/docs/ce/teams) is created first.

A [Service](/about/architecture#services) in Otomi is a feature for easy deployment of container workloads using Knative Serving and exposing (existing/pre-deployed) Kubernetes and Knative services with a public URL.

3 types of Services are supported:

- [1. Existing Kubernetes Service](#existing-kubernetes-service)
- [2. Existing Knative service](#existing-knative-service)
- [3. New Knative Service](#new-knative-service)

3 types of exposure are supported:

- Cluster: has no internet exposure, and is only accessible in the cluster
- Private: only accessible via the cluster's private network loadbalancer
- Public: publicly accessible via the cluster's public network loadbalancer

The examples below focus on the 3 types of services. All of these 3 services will be configured with public exposure. Fot more infomation about all the supported exposure configuration values, see the Otomi [values-schema](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) or use the Visual Studio plugin (automatically added when using the `otomi bootstrap` CLI command)

## Existing Kubernetes Service

To create a Service for an existing (pre-deployed) Kubernetes service, open the `services.<team-name>.yaml` file in `/env/teams/`.

The next code example creates a Service in the team demo for the pre-deployed Kubernetes service with the name `hello` and make it public:

```yaml
teamConfig:
  teams:
    otomi:
      services:
        - name: hello # the name of the pre deployed service
          port: 80 # the port of the pre deployed service
          type: public
```

## Existing Knative service

To create a Service for an existing (pre-deployed) Knative service, open the `services.<team-name>.yaml` file in `/env/teams/`.

The next code example creates a Service in the team demo for the pre-deployed Knative service with the name `hello` and make it public:

```yaml
teamConfig:
  teams:
    otomi:
      services:
        - name: hello # the name of the pre deployed service
          port: 80 # the port of the pre deployed service
          ksvc: # service type
            preDeployed: true # set to true to use a pre deployed knative service
          type: public
```

## New Knative Service

To create a new Knative service, open the `services.<team-name>.yaml` file in `/env/teams/`.

The next code example creates a new Knative service in the team demo to deploy a `nginx:stable` image and make it public:

```yaml
teamConfig:
  teams:
    demo: # name of the team
      services:
        - name: test # name of the service
          port: 80 # the port the service
          ksvc: # service type
            image: # provide the image for a new knative service
              repository: nginx
              tag: stable
            scaleToZero: false # scale to zero true/false
            resources:
              limits:
                cpu: 50m
                memory: 64Mi
              requests:
                cpu: 50m
                memory: 64Mi
            containerPort: 80 # the container port
          type: public #exposure
```

### validate changes (optional)

Use Otomi CLI to validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values -v
```

When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

### Deploy changes

Apply the changes:

```bash
otomi apply
```

## Automation

When you create a Service, a lot is happening (and automatically done for you) behind the scenes:

- Istio Virtual services are automatically generated for team services, tying a generic ingress architecture to service endpoints in a predictable way
- Mutual TLS is automatically started between workloads that are part of the mesh
- When creating a new Knative service, the Knative service manifest is created and deployed

## More examples

The following examples show the configuration of 2 services:

- A new knative service using the `otomi/nodejs-helloworld` image with public exposure
- A new knative service using the `nginx:latest` image with TLS passthrough

### New Knative service with public exposure

The following service uses a generic secret that is mounted to the pod as an environment variable and exposes the service public based on the default host-name convention `<service-name.<team-name>.yourdomain.com>`.

```yaml
teamConfig:
  teams:
    demo:
      services:
        - name: hello
          port: 80
          ownHost: true
          ksvc:
            image:
              repository: otomi/nodejs-helloworld
              tag: v1.2.12
            scaleToZero: false
            resources:
              limits:
                cpu: 50m
                memory: 64Mi
              requests:
                cpu: 50m
                memory: 64Mi
            secrets:
              - mysecret-generic
          type: public
```

### New Knative service with TLS passthrough

The following service uses a TLS secret that is mounted in the container at the specified folder path. This service is configured with TLS passthough, meaning the TLS traffic is terminated by the pod and not by the ingress controller (with is done if exposure is set to Public). The service is exposed based on a custom hostname `tlspass.eks.dev.otomi.cloud`.

```yaml
teamConfig:
  teams:
    demo:
      services:
        - name: my-nginx
          port: 443
          domain: tlspass.eks.dev.otomi.cloud
          ksvc:
            image:
              repository: nginx
              tag: latest
            scaleToZero: false
            resources:
              limits:
                cpu: 50m
                memory: 64Mi
              requests:
                cpu: 50m
                memory: 64Mi
            files:
              /etc/nginx.conf: |
                events {
                }
                http {
                  log_format main '$remote_addr - $remote_user [$time_local]  $status '
                  '"$request" $body_bytes_sent "$http_referer" '
                  '"$http_user_agent" "$http_x_forwarded_for"';
                  access_log /var/log/nginx/access.log main;
                  error_log  /var/log/nginx/error.log;
                  server {
                    listen 443 ssl;
                    root /usr/share/nginx/html;
                    index index.html;
                    server_name nginx.example.com;
                    ssl_certificate /etc/nginx-server-certs/tls.crt;
                    ssl_certificate_key /etc/nginx-server-certs/tls.key;
                  }
                }
            secretMounts:
              /etc/nginx-server-certs: mysecret-tls
          type: tlsPass
```
