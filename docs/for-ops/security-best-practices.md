---
slug: security-best-practices
title: Security Best Practices
sidebar_label: Security Best Practices
---

The Akamai App Platform comes with many security capabilities. It is up to the platform administrator to make sure these capabilities are enabled and correctly used. The following checklist can be used to make sure security is implemented to follow best-practices when running App PLatform on LKE.

1. Install the cloud-firewall-controller for LKE.

Using the [cloud-firewall-controller](https://github.com/linode/cloud-firewall-controller) ensures that all nodes in the cluster are added to the same Cloud firewall ruleset.

2. Limit access to the cluster API server.

Kubernetes API servers should not ordinarily be exposed to the open internet. Use the `Control Plane ACL` for LKE to only allow access to the API server from trusted IP addresses.

3. Use Object Storage for persistency.

Use the Object Storage Wizard in App Platform to prevent dataloss.

4. Enable vulnerability scanning in Harbor.

Enable `Automatically scan images for vulnerabilities` in the Team project settings in Harbor to automatically scan all images on push.

5. Configure Keycloak to use 2 factor authentication (MFA)

Configure the `otomi` realm to force users to use a MFA app like Google Authenticator, Microsoft Authenticator or Free OTP to use one time passwords (OTP). See [here](https://www.keycloak.org/docs/latest/server_admin/index.html#configuring-authentication_server_administration_guide) for instructions.

6. Don't disable network policies for Teams.

By default App Platform enforces the use of network policies (ingress and egress). This means that by default all traffic between Pods in the Team namespace and access to external URLs or IP addresses is forbidden. To allow traffic between Pods or access to external URLs or IP addresses, Teams need to create netwok policies. Disabling network policies increases risks and is not adviced.

7. Enable observability.

App Platform comes with a fully integrated and pre-configured stack of observability applications for Kubernetes. The observability applications (like Prometheus, Grafana and Alertmanager) are disabled by default. It is adviced to turn on the observability applications to get insights into resource usage and possible issues.

8. Enable disk encryption on all nodes.

Disk encryption ensures that your data stored on compute instances is secured. In addition to Akamai's information security compliance with standards such as SOC 2, disk encryption provides further protections by keeping data encrypted, even if the disk is removed, decommissioned, or disposed of. See [here](https://techdocs.akamai.com/cloud-computing/docs/local-disk-encryption) for more information on disk encryption.
