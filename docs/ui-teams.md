---
slug: console/teams
title: Platform - Teams
sidebar_label: Teams
---

![Console: Teams](img/platform-teams.png)

- Teams are tenants on the platform to support Development/DevOps teams, projects or even DTAP
- A team will get access to Otomi Console, providing access to all the shared tools
- Teams can choose to receive alerts in Microsoft Teams, Slack or email and each team will get access to a project in Harbor and a space in Vault to manage secrets
- Teams can be allowed self-service features like configure ingress, configure a notification receiver for alerts, change the OIDC group mapping and download the KubeConfig.

## Team Admin

By default, Otomi creates a team called Team Admin. Admins can use this team to expose any service in the team-admin namespace, but also in other namespaces.

see [Team Services](team-services) for more info about how to create Services in Otomi and how to configure ingress. The only difference here is that when creating Services in Team Admin, the admin can also select the namespace of the service.

Another difference between the Team Admin and user created Teams is that Team Admin does not have apps and it is not possible to configure any settings for the team-admin namespace.


## Creating new Teams

1. Login with a user who is a member of the `otomi-admin` or `team-admin` role
  
2. Provide a name for the team (lowercase). The teamname can not be changed afterwards! Creating a team will result in the creation of namespace `team-$NAME`
   
3. Optional: Provide a OIDC group name/id granting for granting access to team. Only members of the group will get access to the team
  
4. Optional (only when `multi-tenancy` is enabled): In order to receive alerts, please choose an alerting endpoint:


| Option          | Description                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| Slack           | Needs a slack webhook url that will give alerts for warnings and criticals       |
| Microsoft Teams | Needs two alerting endpoints, for both warnings as well as criticals             |
| Email           | You may provide a list of email addresses for both 'Non Critical' and 'Critical' |
| If none selected            | Global (admin) alerting endpoint configuration will be used                      |

5. Add Resource Quotas

When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described [here](https://kubernetes.io/docs/concepts/policy/resource-quotas/).

:::note Notes

There is no validation as there is no schema published. Add/change resource quota at your own risk.

:::

1. Configure Azure Monitor

:::note

Configuring Azure Monitor settings will only be active when  `cluster.provider=azure`) and multi tenancy is enabled.
:::

Azure Monitor is the platform service that provides a single source for monitoring Azure resources.

| Option                                | Description                   |
| ------------------------------------- | ----------------------------- |
| No Azure monitoring                   | -                             |
| Azure monitoring with global settings | Takes on the global settings  |
| Azure monitoring with custom settings | Overrides any global settings |

1. Turn Network Policy On/Off for the team

| Option                              | Description                   |
| ------------------------------------- | ----------------------------- |
| Network policies                   | When enabled team services will be bound by (ingress) network policies |
| Egress control                  | When enabled team service egress traffic will be limited to pre-defined endpoints only |

8. Add Team self service flags

A user with the `otomi-admin` and `team-admin` role can delegate permissions to modify certain configuration parameters to the team.

| Option               | Description                                                                             |
| -------------------- | --------------------------------------------------------------------------------------- |
| Service / Ingress              | Select to grant the team the permission to configure exposure for [services](services) |
| Service / Network policy | Select to grant the team the permission to configure network polices |
| Team / Alerts        | Select to grant the team the permission to configure Alerts for the team               |
| Team / Oidc          | Select to grant the team the permission to configure OIDC for the team                |
| Team / Resource quota | Select to grant the team the permission to configure Resource Quota for the team      |
| Team / Download kube config | Select to grant the team the permission to download the KubeConfig file            |
| Team / Network Policy | Select to grant the team the permission to turn on/off network policies |
