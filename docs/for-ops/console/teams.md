---
slug: teams
title: Platform - Teams
sidebar_label: Teams
---

<!-- ![Console: Teams](../../img/platform-teams.png) -->

## About Teams

- Teams are isolated tenants on the platform to support Development/DevOps teams, projects or even DTAP.

- Team members will get access to the App Platform Console and can use the self-service forms and all the shared apps available on the platform.

- Teams can choose to receive alerts in Microsoft Teams or Slack and each team will get access to a project in Harbor.

- Teams can be allowed permissions to create services, edit security policies, use the shell, download the Kubecfg file or download the docker login credentials.

## Team Admin

By default, a Team called `admin` is created. Admins can use this team to deploy workloads in any namespace and expose services from any namespace namespace. Another difference between the Team `admin` and regular Teams is that Team admin does not have apps and it is not possible to configure any Team settings.

## Creating a Team

1. Login with a user with the `platform-admin` role (like the `platform-admin` user).

2. Provide a name for the team (lowercase). The name of a Team can not be changed afterwards. Creating a Team will result in the creation of namespace `team-$NAME`. The name of a team can be max `12` characters.

3. Optional: Provide a OIDC group name/id for granting access to Team when using an external IdP. Only members of this group will get access to the Team in the Console.

4. Optional: Configure Advanced Settings

- Enable Dashboards. This installs a dedicated Grafana instance in the Team namespace with pre-configured dashboards. Dashboards are added based on enabled capabilities (Apps) on the platform level.

- Enable Alerts. This installs a dedicated Alertmanager instance in the Team namespace to receive Team specific alerts from the platform Prometheus. Select one of the following Notification Receivers:

| Option           | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| Slack            | Needs a slack webhook url that will give alerts for warnings and criticals       |
| Microsoft Teams  | Needs two alerting endpoints, for both warnings as well as criticals             |

It is not required to select a Notification Receiver. Team members can always use the Alertmanager UI (available in the Apps section) to see alerts.

- Configure Resource Quotas. Adjust the default Count and Resource quota if required and/or add custom resource quota. The resource quota should adhere to the "spec.hard" format as described [here](https://kubernetes.io/docs/concepts/policy/resource-quotas/).

:::note Note
There is no validation as there is no schema published. Add/change resource quota at your own risk.
:::

- Enable/disable Network Policies:

| Option           | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| Network policies | When enabled team services will be bound by (ingress) network policies                 |
| Egress control   | When enabled team service egress traffic will be limited to pre-defined external endpoints only |

- Set Permissions for members of the Team:

| Action                            | Description                                                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Create Services                   | Select to grant team members permission to create Services                                                 |
| Edit Security Policies            | Select to grant team members permission to edit Security Policies                                          |
| Use Cloud Shell                   | Select to grant team members permission to use the cloud shell                                             |
| Download kubeconfig file          | Select to grant team members permission to download the KubeConfig to get Kube API access to the namespace |
| Download docker login credentials | Select to grant team members permission to download the Dockerconfig for the teams project in Harbor       |
