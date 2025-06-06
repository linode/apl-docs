---
slug: team-admin-catalog
title: Team Admin Catalog
sidebar_label: Catalog
---

## About the Catalog Helm charts

The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. 

The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator.

The Catalog contains a set of Helm charts that can be used as quick starts, but also offers the option (for platform administrators only) to add more Helm charts to the Catalog, using the `+ Add Helm Chart` option.

## Adding Helm charts to the Catalog

1. Select view `team` and select team `admin` in the top bar.

2. Click on `Catalog` in the left menu.

3. You will now see all the templates that are available for use.
.
4. Click on `+ Add Helm Chart`.

5. Fill in a URL that points to a `Chart.yaml`.

6. Click on `GET DETAILS`.

7. Optionally change the `Icon URL` to point to an icon you want to use for this hem chart in the Catalog.

8. If the Helm chart should be made available for all Teams, select `Allow teams to use this chart`.

8. Click `ADD CHART`.

The Helm chart will now be added to the `charts` repository in the Local Git service (Gitea) and will be visible in the Catalog.





