---
slug: ce/services
title: Configuring Services in CE mode
sidebar_label: Services
---

When you are running Otomi in CE mode, you will operate on the values directly and have to commit them manually. This page describes how to create a service, and how to edit a service when running in CE mode. Before you can create a Service, make sure a [Team](/docs/ce/teams) is created first.

A [Service](/about/architecture#services) in Otomi is a feature for easy deployment of container workloads using Knative Serving and exposing (existing) services with a public URL.

3 types of Services are supported:

- [1. Existing Kubernetes Service](#existing-kubernetes-service)
- [2. Existing Knative service](#existing-knative-service)
- [3. New Knative Service](#new-knative-service)

3 types of exposure are supported:

- Cluster: has no internet exposure, and is only accessible in the cluster
- Private: only accessible via the cluster's private network loadbalancer
- Public: publicly accessible via the cluster's public network loadbalancer

The examples below focus on the 3 types of services. All of these 3 services will be configured with public exposure. Fot more infomation about all the supported exposure configuration values, see the Otomi [values-schema](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) or use the Visual Studio plugin (automatically added when using the `otomi bootstrap` CLI command)

### Existing Kubernetes Service

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

### Existing Knative service

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

### New Knative Service

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

## validate changes (optional)

When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values -v
```

When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

## Commit changes

Commit and push the changes using Otomi CLI:

```bash
otomi commit
```

or commit and push the changes manually using git:

```bash
git commit -m "your commit comment" --no-verify
git push
```

Note: use the default `otomi-admin` account and the provided adminpassword (see `secrets.settings.yaml.dec`).
