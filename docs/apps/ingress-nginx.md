---
slug: ingress-nginx
title: NGINX Ingress
sidebar_label: Ingress-nginx
---

Ingress NGINX is the default ingress controller in Otomi and part of the core setup (this means it is not possible use another controller within Otomi).

### Using the OWASP rule set

The OWASP ModSecurity Core Rule Set (CRS) is a set of generic attack detection rules for use with ModSecurity or compatible web application firewalls. The CRS aims to protect web applications from a wide range of attacks, including the OWASP Top Ten, with a minimum of false alerts. The CRS provides protection against many common attack categories, including SQL Injection, Cross Site Scripting, Local File Inclusion, etc.

The OWASP rule set can only be enabled when ModSecurity is enabled. Read more about the OWASP rule set [here](https://owasp.org/www-project-modsecurity-core-rule-set/)

## Automation

Teams will be be automatically given a git repository in Gitea named `team-$teamId-argocd`, and Argo CD is automatically configured to access the repository and sync. All that is left to do is for a team-admin (or team member with self-service rights) to fill their repository with intended state and commit.

## Integrations

Otomi integrated NGINX Ingress Controller into an advanced [ingress architecture](/product/architecture#advanced-ingress-architecture-as-its-core).

## Instructions

### Using ModSecurity

By default, ModSecurity is not enabled in Nginx. To turn on ModSecurity, go to the values tab of the app. Under `Mod security` click `enabled`.

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