---
slug: overview
title: SRE Overview
sidebar_label: Overview
---

APL is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, APL offers all required parts in a single package. APL can be seen as any other Kubernetes application or add-on, with the difference that APL is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications.

The user controls the configuration of all objects installed by APL, based on the [values schema](https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml) provided by APL, and the user controls the full configuration of all Kubernetes objects deployed. Lets take a closer look:

## Reference configuration

APL provides a reference configuration (APL Values) that can be used as a quick-start to install and configure a complete suite of integrated open source applications, an advanced ingress architecture, multi-tenancy, developer self-service, and implemented security best-practices. The reference configuration can be modified using the APL Console and APL API, based on a pre-defined value schema. SRE can change and optimize the reference configuration when needed. There are 2 supported options:

- Standard, using the APL values schema to modify the configuration

- Advanced, customization using overrides

Let's take a closer look at both options.

### Standard

Out-of-the-box, APL comes with an extensive values [schema](https://github.com/linode/apl-core/blob/main/values-changes.yaml). Most of the standard values (platform configuration) can be modified using the values editor in APL Console. Changes made through the APL Console are translated into configuration code (based on the values schema). The APL values schema supports the most common use-cases when working with Kubernetes.

### Advanced

For advanced use-cases, configuration values of all integrated open source applications can be customized. Together with the fully integrated observability suite, SRE's can pro-actively monitor the resource usage of the integrated open source applications (like Istio and Ingress Nginx) and optimize the configuration when needed.

The APL values can be overridden by custom configuration values using `_rawValues`. Custom configuration values can be all values supported by the upstream Helm chart of the integrated open source application in APL Core.

SRE's can use APL Console to change configuration settings (like security policies), but can also change the APL values directly using the APL values schema and by using overrides. In all cases, the configuration is stored in code (the otomi-values repository).

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

Line 1-7 are configuration options supported in the APL values schema. Line 8-11 are used to add specific (not schema supported) configuration values using overrides (rawValues).

## Guides & checklists

For SRE's we have created a couple of guides and checklists:

- [Daily routine](daily.md)

- [Troubleshooting](troubleshooting.md)
