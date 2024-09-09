---
slug: minio
title: Minio
sidebar_label: Minio
---

## About

Minio can be enabled to provide an in-cluster S3 compatible Object Storage service. Minio is automatically provisioned to be used by:

- Loki (for storing logs)

- Thanos (for storing metrics)

- Velero (for storing backups)

- Cloudnative-pg (for storing database backups)

- Tempo (for storing traces)