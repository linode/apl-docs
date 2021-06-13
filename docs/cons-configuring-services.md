---
slug: console/configuring-services
title: Configuring services
---

This page describes how to create a service, and how to edit a service. Both creating and editing a service use the same form.

Screenshot:

![Console: new service](img/console-new-service.png)

## Name

Name of the service. Will be used to generate hostname if `Use suggested domain` is chosen (see below)

## Port

Port of the service.

## Type

What type of service to deploy/expose. Three options exist:

- [1. New Knative Service](#1-knative-service)
- [2. Existing Knative service](#2-existing-knative-service)
- [3. Existing Kubernetes Service](#3-existing-kubernetes-service)

### 1. New Knative Service

Deploy a new knative service.

| Setting                    | Description                                                 |
| -------------------------- | ----------------------------------------------------------- |
| Container image repository | The full repository url of the image (i.e. `otomi/console`) |
| Container image tag        | The image tag (i.e. `latest`)                               |

### Pod annotations

Kubernetes annotations with arbitrary metadata.

### Pod security context

Kubernetes pod security context.

#### Run as user

AKA `runAsUser`
The User ID that the pod's containers' processes will run with.
When `runAsNonRoot` is enforced by policies, k8s needs to be able to determine that the process user is not root. If it can't retrieve a numeric user id that check will fail. This options allows to set it. 

#### Run as group

AKA `runAsGroup`
The Group ID that the pod's containers' processes will run with.
When `runAsNonRoot` is enforced by policies, k8s needs to be able to determine that the process user is not root. If it can't retrieve a numeric user id that check will fail. This options allows to set it. 

#### Run as non root

AKA `runAsNonRoot`
Informs k8s that the pod will not be needing root access.

### Scale to zero

Will bring down service if not accessed for 60 seconds. Will also disable probes that check to see if the service is up.

### Container image

- repository: The image repository of the container to deploy.
- tag: The image tag of the container to deploy. We recommend semver version tags for a sane deployment strategy. For more on that see section [AutoCD](#autocd) below.

### Environment variables

Provide all the needed environment variables that are needed for your container to run.

### Pod resources

Please refer to the kubernetes documentation for in depth information on how to determine the values your workload needs.

#### Requests

- cpu: the guaranteed amount of CPU
- memory: the guaranteed amount of RAM

#### Limits

- cpu: the maximum amount of CPU
- memory: the maximum amount of RAM

NOTE: Limits are not guaranteed. If you need guaranteed resources, set higher [requests](#141-requests).

### 2. Existing Knative Service

Expects a readily deployed knative service by the name given. This option will do an internal rewrite of the public url to the existing knative url.

### 3. Existing Kubernetes Service

Expects a readily deployed Kubernetes service by the name given.

## Exposure

Controls wether internet exposure should be enabled or not. Two options exist:

- `Cluster`: has no internet exposure, and is only accessible in the cluster
- `Private`: only accessible via the cluster's private network loadbalancer
- `Public`: publicly accessible via the cluster's public network loadbalancer

### Cluster

If backend is a ksvc, this will expose a knative service on a local istio gateway, so other services can access it at their "$svc.$namespace" host name.

(Coming soon: ability to choose endpoints to connect to, so network policies are automatically generated.)
    
### Public & Private

A public URL will have a hostname that consists of `$HOST_NAME.$DNS_ZONE`. Options are described below.

| Setting | Description |
| --- | --- |
| TLS passthrough | Pass through the request as is to the backing service. |
| Use suggested domain | The suggested domain is the team domain for which a wildcard certificate already exists. Has the team name in it. |
| Host | Choose a hostname that will be the prefix of the domain. |
| Forward path | Do not "terminate" the path but instead pass it to the receiving service. |
| DNS Zone | Choose a dns zone that will be the suffix of the domain. |
| Authenticate with Single Sign On | Forwards any unauthenticated traffic to the Keycloak login page, which might forward to an external IDP. |
| Already has a certificate | Don't generate certificates for this service. |
| > Certificate ARN | [AWS only] Provide the certificate arn. |
| > Select existing secret name | [non AWS] Provide a TLS secret name previously created under `Secrets`. Override to select name of secret not known here. |

## AutoCD (coming soon!)

Wether or not to allow automatic deployment of image tags that match the chosen strategy's matcher.

| Setting | Description |
| --- | --- |
| Off | No automatic continuous deployment |
| Semver versioning | Semver version pattern. Use this filter if your images tags follow semantic versioning rules (MAJOR.MINOR.PATCH). E.g.: PATCH only: "~1.1", MINOR and PATCH only "~1", ALL "\*" |
| Glob pattern matching | Glob string pattern. Use this filter if you want to make simple non-standard patterns. E.g.: "master-v1._._" |
