---
slug: team-admin-projects
title: Team Admin Projects
sidebar_label: Projects
---

The Projects self-service feature for the Team Admin is the same as for regular Teams, but with the following differences:

- The Workload created by the Project can be used to deploy Helm charts from the Catalog in any namespace.

- The Service created by the Project can expose any K8s `ClusterIP` service that exist in any namespace (but needs to be the same namespace as where the Workload is deployed).

See [here](../../for-devs/console/projects.md) for more information about Projects.


