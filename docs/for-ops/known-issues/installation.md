---
slug: installation
title: 'Known Issues: Installation'
sidebar_label: 'Installation'
---

Otomi can be installed on any Kubernetes cluster. But there are always infrastructure specifics that can impact the installation of Otomi.

### Metrics server with untrusted Kube API certificates

**Problem**

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