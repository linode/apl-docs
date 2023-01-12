---
slug: ingress-nginx
title: Working with ingress-NGINX Controller for Kubernetes
sidebar_label: Ingress-nginx
---

Otomi integrated NGINX Ingress Controller into an advanced [ingress architecture](/product/architecture#ingress--sso).

## Using ModSecurity

By default, ModSecurity is not enabled in Nginx.

To turn on ModSecurity, go to the values tab of the app. Under `Mod security` click `enabled`.

<!-- ![NGINX Modsecurity](../img/mod-security.png) -->

When enabled, ModSecurity by default is configured in blocking mode. This can have a negative impact on your application. First turn blocking off and adjust the applications accordingly. Teams can see all ModSecurity warnings using Grafana. A shortcut for this dashboard is allready preconfigured.

The default modesecurity snipped added to the Nginx configuration contains the following defaults:

```
modsecurity-snippet: |
    SecAuditEngine RelevantOnly
    SecAuditLogParts ABDEFHIJZ
    SecAuditLogFormat JSON
    SecAuditLogType Serial
    SecAuditLog /dev/stdout
    SecRequestBodyLimit 1073741824
    SecRuleRemoveById 920350
```

To change the modsecurity configuration, use `Raw values`. [Here](<https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-(v3.x)#Configuration_Directives>) is an overview of all the configuration directives.

## Using the OWASP rule set

The OWASP ModSecurity Core Rule Set (CRS) is a set of generic attack detection rules for use with ModSecurity or compatible web application firewalls. The CRS aims to protect web applications from a wide range of attacks, including the OWASP Top Ten, with a minimum of false alerts. The CRS provides protection against many common attack categories, including SQL Injection, Cross Site Scripting, Local File Inclusion, etc.

The OWASP rule set can only be enabled when ModSecurity is enabled. Read more about the OWASP rule set [here](https://owasp.org/www-project-modsecurity-core-rule-set/)
