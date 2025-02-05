---
slug: teams
title: Platform - Teams
sidebar_label: Teams
---

<!-- ![Console: Teams](../../img/platform-teams.png) -->

## About Teams

- Teams are isolated tenants on the platform to support Development/DevOps teams, projects or even DTAP.

- A Team will get access to the Console, providing access to self-service features and all the shared apps available on the platform.

- Teams can choose to receive alerts in Microsoft Teams or Slack or Ops Genie and each team will get access to a project in Harbor.

- Teams can be allowed self-service features like configure ingress, configure a notification receiver for alerts, change the OIDC group mappings and download the KubeConfig.

## Team Admin

By default, a Team called Team Admin is created. Admins can use this team to expose any service in the team-admin namespace, but also in custom (created by the admin) namespaces.

See [Team Services](../../for-devs/console/services.md) for more info about how to create Services and how to configure ingress. The only difference here is that when creating Services in Team Admin, the admin can also select the namespace of the service.

Another difference between the Team Admin and regular Teams is that Team Admin does not have apps and it is not possible to configure any settings for the team-admin namespace.

## Creating a Team

1. Login with a user who is a member of the `otomi-admin` or `team-admin` role.

2. Provide a name for the team (lowercase). The teamname can not be changed afterwards! Creating a team will result in the creation of namespace `team-$NAME`. The name of a team can be max `12` characters.

3. Optional: Provide a OIDC group name/id granting for granting access to team. Only members of the group will get access to the team.

4. Optional: Configure Managed Monitoring. This allows Teams to get a dedicated Grafana, Prometheus and Alert Manager instance. Select `Private` to disable cross-team access and isolate access to Team monitoring resources.

5. Optional (only when Alert Manager is enabled for the team): In order to receive alerts, please choose an alerting endpoint:

| Option           | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| Slack            | Needs a slack webhook url that will give alerts for warnings and criticals       |
| Microsoft Teams  | Needs two alerting endpoints, for both warnings as well as criticals             |
| If none selected | Global (admin) alerting endpoint configuration will be used                      |

6. Optional: Add Resource Quotas.

When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described [here](https://kubernetes.io/docs/concepts/policy/resource-quotas/).

:::note Note
There is no validation as there is no schema published. Add/change resource quota at your own risk.
:::

7.  Turn Network Policy On/Off for the team:

| Option           | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| Network policies | When enabled team services will be bound by (ingress) network policies                 |
| Egress control   | When enabled team service egress traffic will be limited to pre-defined external endpoints only |

8. Add Team self service flags:

A user with the `otomi-admin` and `team-admin` role can delegate permissions to modify certain configuration parameters to the team.

| Section | Option               | Description                                                                      |
| ------- | -------------------- | -------------------------------------------------------------------------------- |
| Service | Ingress | Select to grant the team the permission to configure exposure for Services |
| Policies | Edit Policies | Select to grant the team to edit security policies |
| Team Settings | Managed Monitoring | Select to grant the team the permission to change the managed monitoring configuration |
| Team Settings | Oidc | Select to grant the team the permission to configure OIDC for the team |
| Team Settings | Alerts | Select to grant the team the permission to configure Alerts for the team |
| Team Settings | Resource quota | Select to grant the team the permission to configure Resource Quota for the team |
| Team settings | Network policy | Select to grant the team the permission to configure network polices |
| Access | Shell | Select to grant the team the permission to use the cloud shell |
| Access | Download kube config | Select to grant the team the permission to download the KubeConfig to get Kube API access to the teams namespace |
| Access | Download docker config | Select to grant the team the permission to download the Dockerconfig for the teams project in Harbor |
| Access | Download certificate authority | Select to grant the team the permission to download the CA (only when installed with a generated CA) |
