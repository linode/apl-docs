---
slug: troubleshooting/cli
title: 'Troubleshooting: Otomi CLI'
sidebar_label: Otomi CLI
---

The `otomi (diff|apply|sync|template)` commands are delegated to `helmfile`, which in turn delegates the deployment work to `helm`. Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section.

## State drift

**Problem**: `otomi apply` does not seem to change resources.

**Solution**: try `otomi sync`

**Background info**:

The `otomi apply` command uses helmfile's `apply` command, which combines its `diff` and `sync` commandds. So it first does a `helmfile diff` against helm's bookeeping (which resides in versioned secrets, e.g. `sh.helm.release.v1.loki.v1`). This is the most cost effective way and does not lead to a new release version being deployed when there are no changes. However, when you changed cluster resources without the otomi cli (so without using helm) this is not reflected in the secrets. `helmfile diff` will not see any changes in the secret, so it won't execute the subsequent `helmfile sync`. If you wish to overwrite the desired state on the cluster, use the `otomi sync -l name=$releaseName` command directly. Usually only for a certain release, so you don't force change all the releases, which costs a lot of time.

## Deployment errors

Helmfile uses Helm 3 under the hood, and it will throw errors in certain situations:

### 1. It can't deploy a resource when it already exists

When a resource already exists and was not deployed with the chart before (alien to Helm), it is possible to 'adopt' the resource beforehand by labeling and annotating them correctly:

```bash
k -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-name=$RELEASE
k -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-namespace=$NAMESPACE
k -n $NS label --overwrite $KIND $NAME app.kubernetes.io/managed-by=Helm
```

This functionality exists in the stack in `bin/upgrades/adopt-by-helm.sh`, and is used in the upgrade scripts.

### 2. Release's latest state is failed

`Error: "$releaseName" has no deployed releases`

This may happen when you try to install a chart (usually for the first time) and it fails. This results in the release's deployment having state 'failed'.

**Solution**:

- When this was the first install: destroy with `otomi hf -l name=$releaseName destroy` and then apply with `otomi apply -l name=$releaseName` again.
- When the was successfully deployed before: remove the last versioned helm secret that is causing the blockage (e.g. `sh.helm.release.v1.loki.v3`)

### 3. Some resources couldn't be patched

`Error: UPGRADE FAILED: failed to replace object: ... field is immutable`

This usually happens when a manifest is not allowed to be patched in place and needs to be replaced. Retry the borking release with `otomi apply -l name=$releaseName --extraArgs='--force=true'` which does exactly that.
