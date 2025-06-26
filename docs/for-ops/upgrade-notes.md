---
slug: upgrade-notes
title: Upgrade Notes
sidebar_label: Upgrade Notes
---

## About upgrade notes

In some cases between versions upgrades there are issues that can occur. on this page you will find fixes on how to deal with those issues.

## v4.4.4 to v4.7.0 or higher

Prior to the platform upgrade, a Gitea upgrade requires that no stale pipelines are running and attempting to apply changes to the cluster.
There might occur an issue with the Redis instance of Harbor, which results in the `harbor-redis-0` pod restarting indefinitely after the upgrade.

### Ensuring no stale pipelines run

First of all, ensure no other platform users are currently applying changes to the cluster. Before upgrading, go to Apps -> Tekton and select "PipelineRuns" on the left, and "otomi-pipelines" on the top-right dropdown. Ensure that no pipelines are running: Their status must be either Succeeded, Failed, or Canceled. If any of them are in state Pending or Running, open the menu next to them, and select "Stop".

As soon as the upgrade is started, it will create a PipelineRun. This one will be automatically terminated, and as of v4.7.0 Tekton is no longer used for applying platform changes.

### Fixing the Redis instance of Harbor

To solve this issue you have to delete the Harbor Redis data according to the following steps.

#### Disable ArgoCD autoSync on harbor-harbor
```shell
kubectl patch application harbor-harbor \
  -n argocd \
  --type='json' \
  -p='[{"op": "remove", "path": "/spec/syncPolicy/automated"}]'
```

#### Scale down harbor-jobservice, harbor-core to zero
```shell
kubectl scale deploy harbor-jobservice --replicas=0 -n harbor
kubectl scale deploy harbor-core --replicas=0 -n harbor
```

:::note
If the version you are going to upgrade to is of v4.7.0 or higher you also have to scale down the apl-operator
:::

```shell
kubectl scale deploy apl-operator --replicas=0 -n apl-operator
```

#### Scale down harbor-redis to zero
```shell
kubectl scale sts harbor-redis --replicas=0 -n harbor
```

#### PVC data-harbor-redis-0 is deleted
```shell
kubectl delete pvc data-harbor-redis-0 -n harbor
```

#### Scale up harbor-redis to one
```shell
kubectl scale sts harbor-redis --replicas=1 -n harbor
```

#### Wait for pod ready status
:::note
If the version you are going to upgrade to is of v4.7.0 or higher you also have to scale up the apl-operator
:::

```shell
kubectl scale deploy apl-operator --replicas=1 -n apl-operator
```

#### Enable ArgoCD autoSync on harbor-harbor
```shell
kubectl patch application harbor-harbor \
  -n argocd \
  --type='json' \
  -p='[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true,"selfHeal": true}}]'
```
