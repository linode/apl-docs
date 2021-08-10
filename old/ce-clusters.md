---
slug: ce/clusters
title: Clusters
---

## Otomi Console

All known Otomi clusters are listed on this page. Clusters can be sorted based on:

| Property | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| Provider | The configured Otomi provider (`AWS`, `Azure`, `Google` or `on-prem`) |
| Name     | The name of the cluster                                               |
| URL      | The URL of the Otomi Console of the cluster                           |

Kubernetes clusters running Otomi can be grouped by adding additional clusters. This enables to switch context between clusters by selecting `Cluster` on the top bar.

Screenshot (team role):

![Console clusters](img/ce-clusters.png)

## Adding additional clusters

To create a team, follow these steps:

### 1. Modify the settings.yaml

Add the additional cluster to the `values/env/settings.yaml`:

```yaml
otomi:
  additionalClusters:
    - domainSuffix: cluster-name.your-domain.com # the domain name of the cluster
      name: cluster-name # the name of the cluster
      provider: provider # the cloud provider where your cluster is running (AWS, Azure or Google)
```

### 2. validate changes (optional)

When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values
```

Use -v to get more output

When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

### 3. Apply changes

Commit and push the changes using Otomi CLI:

```bash
otomi apply
```

And then (optionally) commit and push the changes to git:

```bash
otomi commit -m "your commit comment" --no-verify
```
