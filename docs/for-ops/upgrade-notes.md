---
slug: upgrade-notes
title: Upgrade Notes
sidebar_label: Upgrade Notes
---

## About upgrade notes

In some cases between versions upgrades there are issues that can occur. This page describes known potential issues and their mitigation.

## v4.7.0

### Manual Istio Sidecar Updates Required

Due to an issue with automatic Istio sidecar restarts for certain pod types, manual intervention is required after upgrading Istio to ensure all pods have the latest sidecar version.

#### Affected Pod Types

The following pod types require manual restart after Istio upgrades:

1. TTY pods (standalone pods without controllers)
2. Tekton EventListener pods (managed by Tekton controllers)

#### Manual Restart Procedures

**For TTY Pods:**

TTY pods are standalone and will not be recreated automatically when deleted. Handle with care:

```shell
# Delete all TTY pods (WARNING: This will terminate TTY sessions for any connected users)
kubectl delete pods -A -l otomi=tty
```

:::warning
Deleting TTY pods will disconnect any active user sessions and the pods will NOT be recreated automatically. Users will need to create a new TTY session through the UI. Coordinate with users before performing this action.
:::

**For Tekton EventListener Pods:**

EventListener pods will be automatically recreated by the Tekton controller:

```shell
# Delete all EventListener pods (safe - will be recreated automatically)
kubectl delete pods -A -l app.kubernetes.io/managed-by=EventListener
```

:::note
The Tekton controller will automatically recreate the pod with the new Istio sidecar.
:::

#### Verification

After restarting pods, verify they have the correct Istio sidecar version:

```shell
# Get the current Istio version for comparison
echo "=== Current Istio Version ==="
kubectl get deployment -n istio-system -l app=istiod -o jsonpath='{.items[0].spec.template.spec.containers[0].image}' | cut -d: -f2

echo ""
echo "=== TTY Pods Sidecar Versions ==="
kubectl get pods -A -l otomi=tty -o jsonpath='{range .items[*]}{.metadata.namespace}{"\t"}{.metadata.name}{"\t"}{.spec.containers[?(@.image contains "istio/proxyv2")].image}{"\n"}{end}' | column -t

echo ""
echo "=== EventListener Pods Sidecar Versions ==="
kubectl get pods -A -l app.kubernetes.io/managed-by=EventListener -o jsonpath='{range .items[*]}{.metadata.namespace}{"\t"}{.metadata.name}{"\t"}{.spec.containers[?(@.image contains "istio/proxyv2")].image}{"\n"}{end}' | column -t
```

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
If the version you are going to upgrade to is of v4.7.0 or higher you also have to stop automated syncing and scale down the apl-operator
:::

```shell
kubectl patch application apl-operator-apl-operator \
 -n argocd \
 --type='json' \
 -p='[{"op": "remove", "path": "/spec/syncPolicy/automated"}]'
```

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
If the version you are going to upgrade to is of v4.7.0 or higher you also have to enable automated syncing and scale up the apl-operator
:::

```shell
kubectl scale deploy apl-operator --replicas=1 -n apl-operator
```

```shell
kubectl patch application apl-operator-apl-operator \
  -n argocd \
  --type='json' \
  -p='[{"op": "add", "path": "/spec/syncPolicy/automated", "value": {"prune": true,"selfHeal": true, "allowEmpty": false}}]' 
```

