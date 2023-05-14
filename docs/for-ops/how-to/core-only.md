---
slug: core-only
title: Use Otomi Core only
sidebar_label: Use Core only
---

Otomi by default installs Gitea, Drone, Otomi API and Otomi Console. Otomi Console is the self-service UI and uses Otomi API to generate validated configuration code. This configuration code is then committed to Gitea (in the `values` repository), which will trigger teh pre-configured Drone pipeline to apply the changes.

In some cases you might not want to use Otomi Console, Otomi API and Drone, but instead install and manage configuration of the platform using a custom pipeline. Possible use-cases for this scenario are:

- Pushing configuration changes to multiple clusters at the same time (edge use-case)
- Not allowing configuration changes be made by developers
- Only using the open source [otomi-core](https://github.com/redkubes/otomi-core) project

## Example

The example Otomi chart values below shows how to install Otomi with 

- Drone disabled
- A team with 2 workloads and 2 services

```
cluster:
  k8sVersion: ${clusterVersion}
  name: ${clusterName}
  provider: ${clusterProvider}
otomi:
  adminPassword: ${password}
apps:
  argocd:
    enabled: true
  drone:
    enabled: false
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
        url: https://github.com/redkubes/otomi-charts.git
      - name: api
        path: deployment
        revision: v1.0.1
        selectedChart: deployment
        url: https://github.com/redkubes/otomi-charts.git
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

1. Install otomi using your custom values:

```
helm install -f values.yaml otomi otomi/otomi
```

After Otomi has been installed with these values, Otomi will install and configure:

- All required ingress resources
- Istio (including the virtual services for public exposed services with HTTP response headers)
- Network policies
- ArgoCD and ArgoCD application sets to automatically deploy the front-end and api workloads

2. Change the values

You can extend the values with all Otomi supported configuration.

3. Uninstall the Otomi release:

```
helm uninstall otomi --no-hooks
```

3. Re-install the chart with the adjusted values:

```
helm install -f values.yaml otomi otomi/otomi
```
