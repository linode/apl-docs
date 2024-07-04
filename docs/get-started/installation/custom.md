---
slug: custom
title: Custom
sidebar_label: Custom
---

# Install Otomi using the `custom` provider

To install Otomi on any other cloud or infrastructure platform, use the `custom` provider in Otomi. Make sure your infrastructure adheres to the following pre-requisites:

## Kubernetes versions

Otomi currently supports the following Kubernetes versions:

- `1.27`
- `1.28`
- `1.29`

## Compute resources

Otomi requires a node pool with at least **8 vCPU** and **16 GiB RAM**. Note that this is the requirements for a minimal install. When activating more apps, you'll probably need more resources.

:::info ATTENTION
The minimal resource requirement to run Otomi is based on running Core Apps only! The core apps provide an advanced ingress architecture based on Nginx, Istio, Keycloak, Oaut2 Proxy and Certmanager. Activating optional apps will require more compute resources. We advise to have a node pool available with 16 vCPU and 24 GiB memory.
:::

## Default storage class

The custom provider uses the default storage class. If your cluster has a storage class, make sure it is set to be the default:

```bash
kubectl patch storageclass ,your-storage-class> -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

## External IP

Otomi needs to be able to create a Kubernetes LoadBalancer Service that obtains an external IP. This IP needs to be accessible from within the cluster. Use Metallb for on-prem installations to allow Otomi to create a LoadBalancer Service:

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

## CNI

To use the network policies feature in Otomi, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.

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

## API certificates

If your cluster uses untrusted certificates, make sure to set `metrics-server` for `kubelet-insecure-tls`:

```yaml
apps:
  metrics-server:
    extraArgs:
      kubelet-insecure-tls: true
      kubelet-preferred-address-types: InternalIP
```

## Install Otomi using the Helm chart

To install Otomi using the `custom` provider, use the following values:

```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: custom
# optionally configure metrics-server for kubelet-insecure-tls
apps:
  metrics-server:
    extraArgs:
      kubelet-insecure-tls: true
      kubelet-preferred-address-types: InternalIP
EOF
```

The `custom` Otomi provider can be used in combination with any DNS provider.