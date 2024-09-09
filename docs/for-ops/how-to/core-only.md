---
slug: core-only
title: Use APL Core only
sidebar_label: Use APL only
---

APL by default installs Gitea, Drone, APL API and APL Console. APL Console is the self-service UI and uses APL API to generate validated configuration code. This configuration code is then committed to Gitea (in the `otomi-values` repository), which will trigger the pre-configured Tekton pipeline to apply the changes.

In some cases you might not want to use APL Console and APL API, but instead install and manage configuration of the platform using a custom pipeline. Possible use-cases for this scenario are:

- Pushing configuration changes to multiple clusters at the same time (edge use-case).

- Not allowing configuration changes be made by developers.

- Only using the open source [APL-core](https://github.com/linode/apl-core) project.

## Example

The example APL Helm chart values below shows how to install APL with A team with 2 workloads and 2 services:

```yaml
cluster:
  name: ${clusterName}
  provider: ${clusterProvider}
otomi::
  adminPassword: ${password}
apps:
  argocd:
    enabled: true
teamConfig:
  demo:
    password: ${somePassword}
    id: myapp
    networkPolicy:
      egressPublic: true
      ingressPrivate: true
    services:
      - name: front-end
        ingressClassName: platform
        networkPolicy:
            ingressPrivate:
                mode: DenyAll
        ownHost: true
        port: 8080
        type: public
        headers:
          response:
            set:
              - name: Cache-Control
                value: no-store
              - name: Pragma
                value: no-cache
      - name: api
        networkPolicy:
            ingressPrivate:
                mode: AllowOnly
                allow:
                  team: myapp
                  service: front-end
        port: 8081
    workloads:
      - name: front-end
        path: ksvc
        revision: v1.0.1
        selectedChart: ksvc
        url: https://github.com/redkubes/APL-charts.git
      - name: api
        path: deployment
        revision: v1.0.1
        selectedChart: deployment
        url: https://github.com/redkubes/APL-charts.git
files:
  env/teams/workloads/demo/front-end.yaml: |
    values: |
        fullnameOverride: front-end
        image:
            repository: harbor.${domainSuffix}/team-demo/front-end
            tag: latest
        containerPorts:
            - name: http1
            containerPort: 8080
            protocol: TCP
        resources:
            requests:
                cpu: 200m
                memory: 32Mi
        autoscaling:
            minReplicas: 0
            maxReplicas: 10    
  env/teams/workloads/demo/api.yaml: |
    values: |
      image:
        image:
            repository: harbor.${domainSuffix}/team-demo/api
            tag: latest
        containerPorts:
            - name: http1
            containerPort: 8080
            protocol: TCP
        resources:
            requests:
                cpu: 200m
                memory: 32Mi
        autoscaling:
            minReplicas: 1
            maxReplicas: 10    
```

You can now make changes in this configuration and apply them directly to the cluster:

1. Install APL using your custom values:

```
helm install -f values.yaml apl apl/apl
```

After APL has been installed with these values, APL will install and configure:

- All required ingress resources.

- Istio (including the virtual services for public exposed services with HTTP response headers).

- Network policies.

- Argo CD and Argo CD application sets to automatically deploy the front-end and api workloads.

2. Change the values

You can extend the values with all APL supported configuration.

3. Uninstall the APL release:

```
helm uninstall APL --no-hooks
```

3. Re-install the chart with the adjusted values:

```
helm install -f values.yaml apl apl/apl
```
