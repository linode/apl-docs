---
slug: cli
title: 'Known Issues: Current Otomi CLI'
sidebar_label: Otomi CLI
---

The `otomi (diff|apply|sync|template)` commands are delegated to `helmfile`, which in turn delegates the deployment work to `helm`. Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section.

## State drift

**Problem**: `otomi apply` does not seem to change resources.

**Solution**: try `otomi sync`

**Background info**:

The `otomi apply` command uses helmfile's `apply` command, which combines its `diff` and `sync` commandds. So it first does a `helmfile diff` against helm's bookeeping (which resides in versioned secrets, e.g. `sh.helm.release.v1.loki.v1`). This is the most cost effective way and does not lead to a new release version being deployed when there are no changes. However, when you changed cluster resources without the otomi cli (so without using helm) this is not reflected in the secrets. `helmfile diff` will not see any changes in the secret, so it won't execute the subsequent `helmfile sync`. If you wish to overwrite the desired state on the cluster, use the `otomi sync -l name=$releaseName` command directly. Usually only for a certain release, so you don't force change all the releases, which costs a lot of time.

## Deployment errors/problems

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

- When this was the first install: destroy with `otomi destroy -l name=$releaseName` and then apply with `otomi apply -l name=$releaseName` again.
- When it was successfully deployed before: remove the last versioned helm secret that is causing the blockage (e.g. `sh.helm.release.v1.loki.v3`)

### 3. Some resources couldn't be patched

`Error: UPGRADE FAILED: failed to replace object: ... field is immutable`

This usually happens when a manifest is not allowed to be patched in place and needs to be replaced. Retry the borking release with `otomi apply -l name=$releaseName --extraArgs='--force=true'` which does exactly that.

### 4. Timeout

**Problem**: Sometimes the otomi cli will time out when operating on a Google cluster.

**Cause**: This happens when the containerized kubectl binary wants to refresh an access token, but it can't find the binary that was registered to do so in the otomi docker container.

**Workaround**: Retry the command. Before every invocation with the containerized `kubectl` binary, otomi cli first runs `kubectl version` with the local binary to invoke a token refresh, resulting in an up-to-date config to mount.

**Background**:

The otomi cli is a docker container with all the binaries it needs to deploy to these clusters. When running a command the local cloud configs are mounted. These configs may contain configuration for token refresh mechanisms, including the name of a binary to execute with certain parameters. This makes it possible to include the binaries in the image, and make them available via the known `$PATH`.

However, Google Cloud SDK breaks with that approach, by tightly coupling a hard path to the local gcloud binary. Sample user section from `$KUBECONFIG`:

```yaml
- name: gke_otomi-cloud_europe-west4_otomi-gke-demo
  user:
    auth-provider:
      config:
        access-token: xxxxxxxxx
        cmd-args: config config-helper --format=json
        cmd-path: /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/gcloud
        expiry: '2020-10-29T02:15:37Z'
        expiry-key: '{.credential.token_expiry}'
        token-key: '{.credential.access_token}'
      name: gcp
```

This will not work with containerization unfortunately. We also can't predict the path on the users host computer to this binary, so we have to hope for Google to fix this some day. They are not inclined to do so it seems:

https://issuetracker.google.com/issues/171493249

Maybe they will start to see the importance of this after getting more feedback ;)

### 5. It can't deploy when another operation is in progress

**Problem**: The `otomi apply` or `otomi sync` command fails with the following error:

```
Error: UPGRADE FAILED: another operation (install/upgrade/rollback) is in progress
```

**Cause**: A given helm release is in `pending-upgrade` state, e.g.:

```
NAME      NAMESPACE    REVISION    UPDATED                 STATUS     CHART      APP VERSION
keycloak    keycloak    3        2021-03-22 13:50:22.5069506 +0000 UTC  pending-upgrade keycloak-8.2.2 10.0.0
```

**Solution**: Find helm release that is in the `pending-upgrade` state:

```
helm list -a -A | grep -i pending
```

If there is a helm release in the `pending` state AND it has more than one revision, then rollback to the previous revision:

```
helm -n <namespace> rollback <release-name> <previous revision number>
```

Otherwise, if there is a helm release in the state `pending` AND it has only one revision, then remove that release:

```
helm uninstall -n <namespace> rollback <release-name>
```
