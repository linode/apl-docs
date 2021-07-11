---
slug: installation/chart/
title: Install with Chart
---

Use Helm 3 to install Otomi.

## Get Repo

```
helm 3
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

See [helm](https://helm.sh/docs/helm/helm_repo/) repo for command documentation.

## Prepare Values

Prepare `values.yaml` that describe kubernetes cluster and cloud provider resources like DNS or KMS. See [configuration](#configuring) below

## Install Chart

```
# helm 3
helm install -f values.yaml otomi otomi/otomi
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

## Uninstall Chart

```
# helm 3
helm uninstall [RELEASE_NAME]
helm repo update
```

## Configuring

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml), or run these configuration commands:

```
# helm 3
helm inspect values otomi otomi/otomi
```

### Required values

The following table lists the configurable parameters of Otomi chart and all required, optional and default values

| Parameter | Description               | Default |
| --------- | ------------------------- | ------- |
| `image`   | The otomi-core image name |         |

### Optional values

| Parameter | Description               | Default |
| --------- | ------------------------- | ------- |
| `image`   | The otomi-core image name |         |
