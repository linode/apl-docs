---
slug: known-issues
title: Known Installation Issues
sidebar_label: Known Issues
---


## Metrics server does not start with untrusted Kube API certificates

**Issue**

Metrics server will not start when installing on a K8s cluster (like on Minikube or a cluster created with Kubeadm) with Kube API using self-signed certificates

**Solution** 

Add extra args to the metrics-service by using the following values when installing Otomi with Helm chart:

```
apps:
  metrics-server:
    enabled: true
    _rawValues:
      extraArgs:
        kubelet-preferred-address-types: InternalIP
        kubelet-insecure-tls: true
```

## Namespaces stuck in terminating state when uninstalling Otomi

**Issue**

When uninstalling Otomi using the `helm unistall` cmd, all Otomi namespaces get stuck in a terminating state.

**Solution** 

The work around for now is to delete all namespaces using this cmd:

```
for ns in $(kubectl get ns --field-selector status.phase=Terminating -o jsonpath='{.items[*].metadata.name}'); do  kubectl get ns $ns -ojson | jq '.spec.finalizers = []' | kubectl replace --raw "/api/v1/namespaces/$ns/finalize" -f -; done
```


## Installing Otomi with DNS fails due to failed authentication for Gitea

**Issue**

When installing Otomi with DNS, the installations fails with the following error:

```
otomi:cmd:commit:commitAndPush:error remote: Unauthorized
fatal: Authentication failed for 'https://gitea.otomi.example.com/otomi/values.git/'
```

**Solution**

Provide a custom password:

```
otomi:
  adminPassword: yourpassword
```

## Installing Otomi on Civo fails

There can be multiple issues when installing Otomi on Civo:

**Issue**

Some pods get stuck in a `pending` state during installation.

**Solution**

Otomi installs K8s applications like KeyCloak and Gitea. These apps require persistent storage. Civo has default quota set on resources, including volumes. If a pod stays in a pending state, it might be caused by a quota limit. In Civo dashboard, check the amount of volumes and remove all volumes that are not in use. Also check in the amount of volumes did not reach a quota limit and request an increase when needed.

**Issue**

When installing Otomi using Civo market place on a Linux Talos cluster the Otomi installation fails.

**Solution**

Installing Otomi on Civo Linux Talos is currently not supported. Try installing Otomi on Civo K3s.

**Issue**

Keycloak-01 pod is not able to start and the Keycloak logs show the following message: `File "base/16385/PG_VERSION" does not contain valid data.`

**Solution**

This issue is still under investigation. For now, first run the following cmd:

```shell
kubectl exec -it -n keycloak keycloak-db-1 -c postgres -- sh -c 'echo "15" > /var/lib/postgresql/data/pgdata/base/16385/PG_VERSION'
```

and then delete the `keycloak-0` pod:

```shell
kubectl delete pod keycloak-0 -n keycloak
```

Keycloak should now start.

<!-- Currently, `metrics-server` is not by default installed on Linux Talos and also not by default installed by Otomi when using the `civo` provider. For now install metrics-server manually first before installing Otomi:

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

And add the following arguments to the deployment:

```yaml
      - args:
        - --kubelet-preferred-address-types=InternalIP
        - --kubelet-insecure-tls=true
```

Or install Otomi manually and add the following values:

```yaml
apps:
  metrics-server:
    enabled: true
    _rawValues:
      extraArgs:
        kubelet-preferred-address-types: InternalIP
        kubelet-insecure-tls: true
``` -->