---
slug: overview
title: SRE Overview
sidebar_label: Overview
---

App Platform is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, App Platform offers all required parts in a single package. App Platform can be seen as any other Kubernetes application or add-on, with the difference that App Platform is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications.

The user controls the configuration of all objects installed by App Platform, based on the [values schema](https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml) provided by App Platform, and the user controls the full configuration of all Kubernetes objects deployed. Lets take a closer look:

## Reference configuration

App Platform provides a reference configuration (`values` repository) that can be used as a quick-start to install and configure a complete suite of integrated open source applications, an advanced ingress architecture, multi-tenancy, developer self-service, and implemented security best-practices. The reference configuration can be modified using the App Platform Console and App Platform API, based on a pre-defined value schema. SRE can change and optimize the reference configuration when needed. There are 2 supported options:

- Standard, using the `values-schema` to modify the configuration

- Advanced, customization using overrides

Let's take a closer look at both options.

### Standard

Out-of-the-box, App Platform comes with an extensive values [schema](https://github.com/linode/apl-core/blob/main/values-changes.yaml). Most of the standard values (platform configuration) can be modified using the values editor in App Platform Console. Changes made through the APL Console are translated into configuration code (based on the values schema). The values-schema supports the most common use-cases when working with Kubernetes.

### Advanced

For advanced use-cases, configuration values of all integrated open source applications can be customized. Together with the fully integrated observability suite, SRE's can pro-actively monitor the resource usage of the integrated open source applications (like Istio and Ingress Nginx) and optimize the configuration when needed.

The values can be overridden by custom configuration values using `_rawValues`. Custom configuration values can be all values supported by the upstream Helm chart of the integrated open source application in App Platform Core (`apl-core` repo).

SRE's can use App Platform Console to change configuration settings (like security policies), but can also change the values directly using the values-schema and by using overrides. In all cases, the configuration is stored in code (the `values` repository).

The following code shows the configuration values of the ingress-nginx chart.

```yaml
charts:
  ingress-nginx:
    private:
      enabled: false
    modsecurity:
      enabled: true
      owasp: true
    _rawValues:
      controller:
        config:
          error-log-level: info
```

Line 1-7 are configuration options supported in the values-schema. Line 8-11 are used to add specific (not schema supported) configuration values using overrides (rawValues).

## Guides & checklists

For SRE's we have created a couple of guides and checklists:

- [Daily routine](daily.md)

- [Troubleshooting](troubleshooting.md)

- [Known Issues](known-issues.md)
