---
slug: custom
title: Custom
sidebar_label: Custom
---

To install on any other conformant Kubernetes, use the `custom` provider. Make sure your infrastructure adheres to the following pre-requisites:

## Prerequisites

### Kubernetes versions

The following Kubernetes versions are currently supported:

- `1.28`
- `1.29`
- `1.30`

### Compute resources

A node pool with at least **12 vCPU** and **24 GB RAM** is required.

### Default storage class

The default storage class will be used. If your cluster has a storage class, make sure it is set to be the default:

```bash
kubectl patch storageclass <your-storage-class> -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

Use the `_rawValues` to specify another StorageClass per app. This is an example for Harbor:

```yaml
app:
  harbor:
    _rawValues:
      persistence:
        persistentVolumeClaim:
          registry:
            storageClass: <your-storage-class>
            size: 5Gi
```

### External IP

During install a Kubernetes LoadBalancer Service is created that obtains an external IP address. This IP address needs to be accessible from within the cluster. Use Metallb for on-prem installations to allow the installer to create a LoadBalancer Service:

```bash
# Install Metallb with Helm
kubectl create namespace mlb
helm repo add metallb https://metallb.github.io/metallb
helm repo update
helm install metallb metallb/metallb -n mlb

sleep 60
# Create the IPAddressPool and L2Advertisement
cat <<EOF | kubectl apply -f -
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: default-pool
  namespace: mlb
spec:
  addresses:
  - <start-ip>-<end-ip>
---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: default-pool
  namespace: mlb
EOF
```

A Nginx Ingress Controller is installed. If the cloud provider requires specific annotations to be set on the `LoadBalancer` Service, add the required annotations to the service in the chart values:

```yaml
ingress:
    platformClass:
        entrypoint: ''
        annotations:
            - key: service.beta.kubernetes.io/do-loadbalancer-enable-proxy-protocol
              value: true
```

### CNI

To use the network policies feature, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.

Install Tigera Operator:

```bash
helm repo add projectcalico https://docs.tigera.io/calico/charts
helm repo update
kubectl create namespace tigera-operator
helm install calico projectcalico/tigera-operator --version v3.26.3 --namespace tigera-operator
```

Or install Calico minimal:

```bash
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.3/manifests/calico.yaml
```

### Metrics Server

The Metrics Server is installed. If your provider already installed Metrics Server on their managed Kubernetes service, then disable the Metrics Server:

```yaml
apps:
  metrics-server:
    enabled: false
```

### API certificates

If your Kubernetes cluster uses untrusted certificates, make sure to set `metrics-server` for `kubelet-insecure-tls`:

```yaml
apps:
  metrics-server:
    extraArgs:
      kubelet-insecure-tls: true
      kubelet-preferred-address-types: InternalIP
```

### Cluster Autoscaler

A [Cluster Autoscaler](https://github.com/kubernetes/autoscaler) is NOT installed. If your provider does not install a Cluster Autoscaler, install one yourself if required.

### DNS

The [Builds](../../for-devs/console/builds.md) and [Projects](../../for-devs/console/projects.md) features are NOT supported without DNS. Install with [DNS](dns.md) to use all the features.

## Install using Helm

To install using the `custom` provider, use the following values:

```bash
tee values.yaml<<EOF
cluster:
  name: $CLUSTER_NAME
  provider: custom
# optionally configure metrics-server for kubelet-insecure-tls
apps:
  metrics-server:
    extraArgs:
      kubelet-insecure-tls: true
      kubelet-preferred-address-types: InternalIP
EOF
```

The `custom` provider can be used in combination with any [DNS](dns.md) provider.