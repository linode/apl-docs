---
slug: custom
title: Custom
sidebar_label: Custom
---

To install APL on any other conformant Kubernetes, use the `custom` provider. Make sure your infrastructure adheres to the following pre-requisites:

## Prerequisites

### Kubernetes versions

APL currently supports the following Kubernetes versions:

- `1.28`
- `1.29`
- `1.30`

### Compute resources

APL requires a node pool with at least **12 vCPU** and **24 GB RAM**.

### Default storage class

The custom provider uses the default storage class. If your cluster has a storage class, make sure it is set to be the default:

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

APL needs to be able to create a Kubernetes LoadBalancer Service that obtains an external IP. This IP needs to be accessible from within the cluster. Use Metallb for on-prem installations to allow APL to create a LoadBalancer Service:

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

APL uses the Nginx Ingress Controller. If the cloud provider requires specific annotations to be set on the `LoadBalancer` Service, add the required annotations to the service in the APL chart values:

```yaml
ingress:
    platformClass:
        entrypoint: ''
        annotations:
            - key: service.beta.kubernetes.io/do-loadbalancer-enable-proxy-protocol
              value: true
```

### CNI

To use the network policies feature in APL, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.

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

APL installs a Metrics Server. If your provider already installed Metrics Server on their managed Kubernetes service, then disable Metrics Server in APL:

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

APL does NOT install a [Cluster Autoscaler](https://github.com/kubernetes/autoscaler). If your provider does not install a Cluster Autoscaler, install one yourself if required.

### DNS

The APL [Builds](../../for-devs/console/builds.md) and [Projects](../../for-devs/console/projects.md) features are NOT supported when APL is installed without DNS. Install APL with [DNS](dns.md) to use all APL features.

## Install APL using Helm

To install APL using the `custom` provider, use the following values:

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