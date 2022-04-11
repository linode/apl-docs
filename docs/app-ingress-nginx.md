---
slug: apps/ingress-nginx
title: Working with Ingress NGINX
sidebar_label: Ingress-NGINX
---

Otomi integrated Ingress NGINX into an advanced [ingress architecture](/about/architecture#ingress--sso).

## ModSecurity with OWASP rule set

By deafault, ModSecurity with OWASP filtering is not enabled in Nginx.

To turn on ModSecurity with OWASP filtering, click on the `Ingress-NGINX` app in the apps section under Platform en then click on `Values`. Here you can change the ingress-nginx configuration:

![NGINX Modsecurity](img/mod-security.png)

When enabled, ModSecurity is by default configured in blocking mode. This can have a negative impact on your application. First turn blocking of and adjust your application accordingly. Teams can see all ModSecurity warnings using Grafana. A shortcut for this dashboard is allready preconfigured.