---
slug: minio
title: Minio
sidebar_label: Minio
---

## About

Minio can be enabled to provide an in-cluster S3 compatible Object Storage service. Minio is automatically provisioned to be used by:

- Loki (for storing logs)

- Velero (for storing backups)

- Cloudnative-pg (for storing database backups)

- Tempo (for storing traces)

- Harbor (for storing artifacts)

:::note
Minio is made available for Development and Proof-of-Concept purposes only! For all other scenarios it is adviced to use Linode Object Storage.
:::