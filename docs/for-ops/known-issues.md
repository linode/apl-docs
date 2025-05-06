---
slug: known-issues
title: Known Issues
sidebar_label: Known Issues
---

## Installation gets stuck because of a quota exceeded exception

### Details

When provisioning App Platform, the installation can fail because a quota exceeded exception. If the URL of the Portal Endpoint does not appear in the **App Platform** section of the cluster's dashboard after 30 minutes, this could be caused by a quota exceeded exception.

Next to the resources required for LKE, App Platform also uses a NodeBalancer and a minimum of 11 Storage Volumes. This might result in a quota exceeding exception. Linode currently does not provide quota limits in your account details at this time.

The following issue might be related to quota exceeding exception:

Pods that require a Storage Volume get stuck in a pending state with the following message:

`pod has unbound immediate PersistentVolumeClaims. preemption: 0/3 nodes are available: 3 Preemption is not helpful for scheduling.`

### Workaround

N.A.

### Resolution

- Remove any Storage Volumes that are Unattached.

- If you would like to know your account's limits or want to increase the number of entities you can create, the best way is to get that information through a support ticket.

## The Let’s Encrypt secret request was not successful

### Details

For each LKE cluster with App Platform enabled, a Let’s Encrypt certificate will be requested. If the certificate is not ready within 30 minutes, the installation of App Platform will fail. Run the following command to see if the certificate is created:

```bash
kubectl get secret -n istio-system
```

There should be a secret called: `apl-<cluster-id>-wildcard-cert`

If this secret is not present, then the request failed.

### Workaround

N.A.

### Resolution

- Delete the LKE cluster with App Platform enabled and create a new cluster, making sure to enable the App Platform.

## Argo CD does not synchronize anymore

### Details

Argo CD may occasionally stop synchronizing without a clear cause. In some instances, errors may appear in the logs, while in others, no errors are logged. This issue results in platform updates being halted.

### Workaround

N.A.

### Resolution

- Increase the resource allocation for the Argo CD Application Controller. This can be achieved by updating the resource configuration in the values repository within Gitea (`apps/argocd.yaml`). The updated configuration will automatically restart the Argo CD application.
