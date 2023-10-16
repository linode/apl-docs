---
slug: known-issues
title: Known Installation Issues
sidebar_label: Known Installation Issues
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

## Drone activation fails when installing Otomi with Cloudflare DNS

**Issue**

When installing Otomi with `otomi.hasExternalDNS=true` and `apps.cert-manager.issuer=letsencrypt` with `apps.cert-manager.stage=staging`, activating Drone is not possible because of the following error:

```
Post "https://gitea.d3-otomi.net/login/oauth/access_token": x509: certificate signed by unknown authority
```

**Solution** 

1. Install with `apps.cert-manager.stage=production`

or 

1. In Cloudflare, set the `A-record` for Gitea to proxy status = `DNS Only`. Also make sure your SSL/TLS encryption mode is set to `Full`


## Installing Otomi with DNS fails due to failed authentication for Gitea

**Issue**

When installing Otomi with DNS fails with the following error:

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

Keycloak jobs fail during installation.

**Solution**

There is no solution for this at the moment. The Keycloak job will retry multiple times and eventually succeed.