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

## Teams are not deleted properly

### Details

When deleting a team through the console only the gitea values are removed at the moment. Because of this argocd will show status unknown for those repositories. To fix this follow these steps to remove teams properly.

Application Platform - Console:
- Platform View: Click on Team to remove, scroll down and click on delete, fill in team name.

Gitea:
- Delete all team organization repositories: Go to team organization page, click on repositories, click on the repository you want to remove, click on settings, click on 'Delete This Repository', fill in the repository name
- Delete team organization (ex: team-remove-me): Go to team organization page, click on settings, click on 'Delete This Organization' and fill in the organization name.
- Delete team argocd repository (ex: otomi/team-remove-me-argocd): On the Gitea Home Page, under repositories, click on the repository (ex: otomi/team-remove-me-argocd) you want to remove, click on settings, click on 'Delete This Repository', fill in the repository name

Argocd:
- Go to applications, search for the team that needs to be removed.
- Delete the following applications:
    Team-teamname (ex: team-remove-me)
    Team-teamname-team-ns-teamname (ex: team-remove-me-team-ns-remove-me)
    Team-teamname-tekton-dashboard-teamname (ex: team-remove-me-tekton-dashboard-remove-me)
    Team-teamname-values-gitops (ex: team-remove-me-values-gitops)
- Remove any other application that is in the team project.
- Delete App project (if still present)
    Go to Settings, Projects, remove the project with the same team name.

Harbor:
- In Projects click on the team, select all the repositories, click delete
- In Projects select the team project that needs to be removed, click on action, choose delete.

Delete namespace
- In a terminal run the following command: kubectl delete namespace <teamname>