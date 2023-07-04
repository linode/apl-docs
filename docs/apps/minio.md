---
slug: minio
title: Minio
sidebar_label: Minio
---

Minio can be enabled to provice an in-cluster S3 compatible Object Store service. Minio is by default provisioned to be used by:

- Loki (for storing logs)
- Thanos (for storing metrics)
- Velero (for storing backups)
- Cloudnative-pg (for storing database backups)