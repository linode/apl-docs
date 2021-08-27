---
slug: sre/
title: SRE Overview
sidebar_label: Overview
---

Otomi is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, Otomi offers all required parts in a single package. Otomi can be seen as any other Kubernetes application or add-on, with the difference that Otomi is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications.

The user controls the configuration of all objects installed by Otomi, based on the [values schema](https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml) provided by Otomi, and the user controls the full configuration of all Kubernetes objects deployed. Lets take a closer look:

## Reference configuration

Otomi provides a reference configuration (Otomi Values) that can be used as a quick-start to install and configure a complete suite of integrated open source applications, an advanced ingress architecture, multi-tenancy, developer self-service, and implemented security best-practices. The reference configuration can be modified using the Otomi Console and Otomi API, based on a pre-defined value schema. SRE can change and optimize the reference configuration when needed. There are 2 supported options:

- Standard, using the Otomi values schema to modify the configuration
- Advanced, customization using overrides

Let's take a closer look at both options.

### Standard

Out-of-the-box, Otomi comes with an extensive values schema (see here). Most of the standard values (platform configuration) can be modified using Otomi Console. Changes made through the console are translated into configuration code (based on the values schema). Schema-supported values that can not be changed using the Otomi Console, can be modified in the Otomi Values repository (default Gitea is installed, but an external repository like Github is also supported). Otomi supports Visual Studio Code integration for autocompletion based on the Otomi schema. The Otomi values schema supports the most common use-cases when working with Kubernetes.

### Advanced

For advanced use-cases, configuration values of all integrated open source applications can be customized. Together with the fully integrated observability suite, SRE can pro-actively monitor the resource usage of the integrated open source applications (like Istio and Nginx ingress) and optimize the configuration when needed.

The Otomi values schema, in this case, can be overridden by custom configuration values. Custom configuration values can be all values supported by the charts of the integrated open source applications in Otomi Core.

SRE can use Otomi Console to change configuration settings (like security policies), but can also change the Otomi Values directly using the Otomi values schema and by using overrides. In all cases, the configuration is stored in code (the otomi-values repository).

The following code shows the configuration values of the nginx-ingress chart.

```yaml
charts:
  nginx-ingress:
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

Line 1-7 are configuration options supported in the Otomi values schema. Line 8-11 are used to add specific (not schema supported) configuration values using overrides (rawValues).

## Guides & checklists

For SRE's we have created a couple of guides and checklists:

- [Daily routine](daily)
- [Troubleshooting](troubleshooting)
- [Known issues](/docs/sre/known-issues/)
- [Upgrading Otomi](upgrades)
