---
slug: reinstall
title: Reinstalling the platform
sidebar_label: Reinstall
---

## Prerequisites

* The following steps assume that all required backups exist in object storage, and that this storage has not been corrupted.
* You should have downloaded a values file using Platform -> Maintenance.
* It requires that you have your own domain name for the cluster. The old and the reinstalled cluster may use the same domain, but in that case the old cluster should no longer be running; due to issues with DNS caching it is advised to use a new (sub-)domain.

## Steps

1. Make sure to stop any write operations to object storage.
2. 