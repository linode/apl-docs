---
slug: reinstall
title: Reinstalling the platform
sidebar_label: Reinstall
---

## Prerequisites

* The following steps assume that all required backups exist in object storage, and that this storage has not been corrupted.
* You should have downloaded a values file using Platform -> Maintenance.
* It requires that you have your own domain name for the cluster. The old and the reinstalled cluster may use the same domain, but in that case the old cluster should no longer be running; due to issues with DNS caching it is advised to use a new (sub-)domain.
* Re-installing a Linode LKE cluster with the platform reinstalled is currently not supported. It can only be installed in a new LKE cluster without the pre-installed platform, using your own domain.

## Steps

The following steps are decribed in more detail:

1. Prepare the values for for reinstallation.
2. Pepare a new cluster.
3. Make sure to stop any write operations to object storage.
4. Reinstall the platform on the new cluster.

## Values file adjustments

Make a copy of the values file and adjust
   * `cluster.domainSuffix`
   * `dns.domainFilters`
   * any credentials (e.g. access tokens) that will change

Then prepare the database to be initialized with the backup data from the attached object storage.
