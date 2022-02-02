---
slug: apps/nginx-ingress
title: Working with Ingress NGINX
sidebar_label: Nginx-ingress
---

Otomi integrated Ingress NGINX into an advanced [ingress architecture](/about/architecture#ingress--sso).

## ModSecurity with OWASP rule set

By deafault, ModSecurity with OWASP filtering is not enabled in Nginx.

To turn on ModSecurity with OWASP filtering change the nginx-ingress configuration in the Otomi values repository: (`/env/charts/nginx-ingress.yaml`) as follows:

```yaml
charts:
  nginx-ingress:
    modsecurity:
      enabled: true
```

When enabled, ModSecurity is by default configured in non-blocking mode. Teams can see ModSecurity warning messages in the Grafana/OWASP dashboard in the Otomi Apps.

To configure ModSecurity in blocking mode, change the nginx-ingress configuration in the Otomi values repository: (`/env/charts/nginx-ingress.yaml`) as follows:

```yaml
charts:
  nginx-ingress:
    modsecurity:
      enabled: true
      block: true
```
