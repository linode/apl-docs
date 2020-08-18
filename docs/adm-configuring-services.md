---
id: configuring-services
title: Configuring services
---

This page is for documenting how to create a service, and how to edit a service. Both creating and editing a service use
the same form.

## Name

Name of the service. Will be used to generate hostname if `Use suggested domain` is chosen (see below)

## Cluster ID

Cluster to deploy service on.

## Type

What type of service to deploy/expose. Three options exist:

- [1. Knative Service](#1-knative-service)
- [2. Existing Knative service](#2-existing-knative-service)
- [3. Existing Kubernetes Service](#3-existing-kubernetes-service)

### 1. Knative Service

Deploy a new knative service.

| Setting                    | Description                                                                     |
| -------------------------- | ------------------------------------------------------------------------------- |
| Container image repository | The full repository url of the image (i.e. `eu.gcr.io/otomi-cloud/otomi-stack`) |
| Container image tag        | The image tag (i.e. `v0.11.1`)                                                  |

### 1.1 Scale to zero

Will bring down service if not accessed for 60 seconds. Will also disable probes that check to see if the service is up.

### 1.2 Container image

- repository: The image repository of the container to deploy.
- tag: The image tag of the container to deploy. We recommend semver version tags for a sane deployment strategy. For more on that see section [AutoCD](#autocd) below.

### 1.3 Environment variables

Provide all the needed environment variables that are needed for your container to run.

### 1.4 Pod resources

Please refer to the kubernetes documentation for in depth information on how to determine the values your workload
needs.

### 1.4.1 Requests

- cpu: the guaranteed amount of CPU
- memory: the guaranteed amount of RAM

### 1.4.2 Limits

- cpu: the maximum amount of CPU
- memory: the maximum amount of RAM

NOTE: Limits are not guaranteed. If you need guaranteed resources, set higher [requests](#141-requests).

### 1.5 Pod annotations

Kubernetes annotations with arbitrary metadata.

### 2. Existing Knative Service

Expects a readily deployed knative service by the name given. This option will do an internal rewrite of the public url
to the existing knative url.

### 3. Existing Kubernetes Service

Expects a readily deployed Kubernetes service by the name given.

## Exposure

Controls wether internet exposure should be enabled or not. Two options exist:

- `Private`
- `Public URL`

A private service has no internet exposure, and is only accessible in the cluster.

### Public URL

A public URL will have a hostname that consists of `$HOST_NAME.$DNS_ZONE`. Options are described below.

| Setting                          | Description                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Use suggested domain             | The suggested domain is the team domain for which a wildcard certificate already exists                                   |
| Host                             | Choose a hostname that will be the prefix of the domain                                                                   |
| DNS Zone                         | Choose a dns zone that will be the suffix of the domain                                                                   |
| Authenticate with Single Sign On | Forwards any unauthenticated traffic to the Keycloak login page, which might forward to an external IDP                   |
| Already has a certificate        | Don't generate certificates for this service                                                                              |
| > Certificate ARN                | [AWS only] Provide the certificate arn                                                                                    |
| > Select existing secret name    | [non AWS] Provide a TLS secret name previously created under `Secrets`. Override to select name of secret not known here. |

## AutoCD

Wether or not to allow automatic deployment of image tags that match the chosen strategy's matcher.

| Setting               | Description                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Off                   | No automatic continuous deployment                                                                                                                                              |
| Semver versioning     | Semver version pattern. Use this filter if your images tags follow semantic versioning rules (MAJOR.MINOR.PATCH). E.g.: PATCH only: "~1.1", MINOR and PATCH only "~1", ALL "\*" |
| Glob pattern matching | Glob string pattern. Use this filter if you want to make simple non-standard patterns. E.g.: "master-v1._._"                                                                    |
