---
slug: ee/settings
title: Platform Settings
---

This page describes the Otomi patform settings available only to users with the "admin" role:

- [Alerts](#alerts)
- [Azure](#Azure)
- [Customer](#customer)
- [DNS](#dns)
- [KMS](#kms)
- [Home](#home)
- [OIDC](#oidc)
- [Otomi](#otomi)
- [Policies](#policies)
- [SMTP](#smtp)

Screenshot (admin role)

![Console: settings](img/console-settings.png)

### Alerts

Defines alerting endpoints for alertmanager and deployment feedback. The list of providers selected in `Notification receivers` should reflect their configuration. I.e. when receiver "slack" is chosen, the slack configuration needs to be defined.

| Setting | Description |
| --- | --- |
| Repeat interval | Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more). |
| Group interval | How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) |
| Slack | Slack webhook url and channels for critical and non-critical alerts. |
| MSteams | Microsoft Teams webhook urls for critical (high prio) and non-critical alerts (low prio). |
| Email | Email address(es) for critical and non-critical alerts. |
| Notification receivers | Select default notification channel(s) for receiving alerts. |
| Drone notifications | Channel to be used by the deployment pipeline for failure/success notifications. Can only be delivered to Slack or MSteams (for now). |

### Azure

Azure specific configuration options. Will only be available when running on Azure (cloud=azure).

| Setting       | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| Appgw         | Select if Azure Application Gateway is used as an external Load Balancer. |
| Azure Monitor | Turn on Azure monitor to use Azure metrics in Grafana dashboards.         |
| Storage Types | Specify the Azure disk types used for storage classes in Otomi.           |

IMPORTANT NOTES:

Using an Azure Application Gateway is optional. In case an application gateway is used with a WAF, make sure that its on detection mode and not prevention, as this might deny traffic to your cluster, which can have consequences on the availability of services. For example Grafana relies heavily on queries inside the api request that might trigger OWASP rules.

### Customer

Defines customer information. Used for naming the cluster in alerts: `$customer/$cloud/$cluster`.

| Setting | Description    |
| ------- | -------------- |
| name    | Lowercase name |

### DNS

| Setting  | Description                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------- |
| Zones    | Defines the dns zones accessible by the credentials given in the "Provider" section underneath. |
| Provider | The provider hosting the dns zones. Can be AWS, Azure or Google.                                |

### KMS

Defines the Key Managment Service information needed to unseal secrets containers used by otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the `otomi-values` repo), and another one for sealing/unsealing Vault storage.

IMPORTANT NOTES:

- When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text.
- When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!

It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide.

#### SOPS

Credentials to a KMS used by SOPS. For now it expects the `.sops.yaml` file in the root of the `otomi/values` repo to have the configuration pointing to the keys in use there. (Soon this file will be generated from key configuration gathered here.)

#### Vault

Settings for Vault are now found under `charts.vault` but will move here soon.

### Home

Exactly similar to the "Alerts" section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. This allows for a 3rd party to also monitor the system. (Handy when setting up Otomi as a managed service for clients that want to receive notifications themselves.)

### OIDC

Settings to connect with an external Identity Provider (Bring Your Own IDP). Allows to map IDP group names to Otomi superadmins (`adminGroupID`) and team admins (`teamAdminGroupID`).

Some settings are left for the case when Keycloak is not needed (it is heavy, and small teams might not need authorization), and are used by grafana only:

- Auth url
- Api url
- Token url

### Otomi

Settings and feature flags that influence the way otomi behaves.

| Setting | Description |
| --- | --- |
| Admin password | Default admin password for all Otomi apps. Handy for quick rotation ;) |
| Additional Clusters | A list of additional clusters to select in the Otomi console. |
| External load balancer | Set this to true when an external load balancer exists (Azure AppGW, Google Apigee) or needs to be started (AWS ALB). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion. |
| Home monitored | When this is turned on alerts will also be sent to the endpoints configured in the "Home" settings. |
| Managed masters | Whether masters are managed and not under control. Set this to false when onprem. |
| Multi-tenancy | Will separate team metrics and logs. Disabling this lets everybody be admin and see everything. Will still use team-\* namespaces for segmentation of services, but not use authorization of users. |
| Pull secret | A pull secret that gives access to the Otomi API. Needs and enterprise license. |

### Policies

This section allows to turn Open Policy Agent (OPA) policies on or off, and also set default parameters to be used by them.

| Setting | Description |
| --- | --- |
| banned-image-tags | Add any image tags for containers that are not allowed in your cluster. |
| container-limits | Set global compute limits for your containers. |
| psp-allowed-repos | Add globally allowed repositories for version control. |
| psp-host-filesystem | Set policies for the host filesystem of all Kubernetes cluster nodes. |
| psp-allowed-users | Default user (UID) settings to force containers to run with. It is recommended to at least set 'runAsUser' to 'MustRunAsNonRoot' to disallow root. |
| psp-host-security | Whether a pod is allowed to access the host PID namespace/host IPC, or if a pod defines host aliases. |
| psp-host-networking-ports | Whether a pod can access ports on the host. |
| psp-privileged | Whether privileged containers can escalate to root privileges on the node. |
| psp-capabilities | Whether to allow containers with sufficient capabilities granted to obtain escalated access. |
| psp-forbidden-sysctls | Determine what system controls are allowed or not. |
| psp-apparmor | Prevents an application from accessing files it should not access. |
| psp-seccomp | Reduces the chance that a kernel vulnerability will be successfully exploited. |
| psp-selinux | Security-enhanced Linux. |

Please see the [OPA Gatekeeper policy library](https://github.com/open-policy-agent/gatekeeper-library) as it is the source for the policies here. We made a selection of usable policies for Otomi and adapted them to be used by Conftest as well for static analysis of manifests generated by Otomi.

### SMTP

Mail server settings. In case email notifications are wanted.
