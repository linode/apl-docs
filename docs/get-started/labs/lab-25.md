---
slug: lab-25
title: Monitor PostgreSQL databases
sidebar_label: Monitor databases
---

If you previously created a database, you'll noticed that we did not let the operator create a PodMonitor. The reason of this, is that the PodMonitor requires specific lables to be picked-up by the team's own Prometheus. In this lab we'll create a custom PodMonitor and create a dashboard in the team's own Grafana.

## Create a PodMonitor

1. In the apps section in Otomi console, click on Gitea. In the list of repo's you'll now see a new repo called `otomi/team-<name>-argocd`.
2. Create a new file called `my-db-pod-monitor.yaml`

```yaml
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: my-db-pm
  labels:
    cnpg.io/cluster: my-db
    prometheus: team-demo
spec:
  namespaceSelector:
    matchNames:
      - team-demo
  podMetricsEndpoints:
    - port: metrics
  selector:
    matchLabels:
      cnpg.io/cluster: my-db
```
3. Save the file and commit the changes.

The pod monitor will be picked-up by the team's own Prometheus. You can now add a dashboard to the team's Grafana instance.

## Add a custom dashboard to the team's Grafana

4. Create a new file called `my-db-dashboard.yaml`

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-db-cluster-dashboard
  labels:
    grafana_dashboard: "1"
    release: grafana-dashboards-demo
data:
  cnp.json: |-
    # your dashboard json
```