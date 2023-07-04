---
slug: velero
title: Velero
sidebar_label: Velero
---

Velero can be activated for creating backups of PVC's and Kubernetes resources.

## Configuration

### Azure

Velero in Otomi uses the Velero plugin for Microsoft Azure. To setup Velero in Azure, follow the instructions [here](https://github.com/vmware-tanzu/velero-plugin-for-microsoft-azure). Note that Otomi only supports the use of Service Principals.

### AWS

Velero in Otomi uses the Velero plugin for AWS. To setup Velero in AWS, follow the instructions [here](https://github.com/vmware-tanzu/velero-plugin-for-aws).

## Instructions

 To start using Velero, follow these steps:

1. Activate the Velero app by dragging the app to the activated apps section.
2. Click on the app en go to the `Values` tab
3. Select the provider used for your Kubernetes cluster
4. Fill in the required fields
5. Go to `Settings` and select `Backup`
6. Select the preferred backup schedule (platform and/or team) and optionally change the settings
7. Click `Deploy Changes`

Velero will now be installed and the backup schedules will be created. Check the cloud storage endpoint to see if the backups have been created.

Optionally install the Velero [cli](https://velero.io/docs/v1.9/velero-install/).
