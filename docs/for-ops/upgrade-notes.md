---
slug: upgrade-notes
title: Upgrade Notes
sidebar_label: Upgrade Notes
---

## About upgrade notes

In some cases between versions upgrades there are issues that can occur, on this page you will find fixes on how to deal with those issues.

## v4.5.0 to a newer version

From v4.5.0 to a newer version there might occur an issue with the harbor redis, which results in the harbor-redis-0 pod restarting indefinitely.

To solve this issue you have to delete the harbor redis data according to the following steps.

### Disable ArgoCD autoSync on harbor-harbor
```shell
kubectl patch application harbor-harbor \
  -n argocd \
  --type='json' \
  -p='[{"op": "remove", "path": "/spec/syncPolicy/automated"}]'
```

### Scale down harbor-jobservice, harbor-core to zero
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

### Scale down the harbor redis to zero
```shell
kubectl scale sts harbor-redis --replicas=0 -n harbor
```

### PVC data-harbor-redis-0 is deleted
```shell
kubectl delete pvc data-harbor-redis-0 -n harbor
```

### Scale up harbor-redis to one
```shell
kubectl scale sts harbor-redis --replicas=1 -n harbor
```

### Wait for pod ready status
Now that the pod is restarted and has status `ready` the issue should be resolved.

:::note
If the version you are going to upgrade to is of v4.7.0 or higher you also have to scale up the apl-operator
:::

```shell
kubectl scale deploy apl-operator --replicas=1 -n apl-operator
```