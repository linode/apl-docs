---
slug: apps/ingress-nginx
title: Working with Ingress NGINX
sidebar_label: Ingress-NGINX
---

Otomi integrated Ingress NGINX into an advanced [ingress architecture](/about/architecture#ingress--sso).

## ModSecurity with OWASP rule set

By deafault, ModSecurity with OWASP filtering is not enabled in Nginx.

To turn on ModSecurity with OWASP filtering change the ingress-nginx configuration in the Otomi values repository: (`/env/charts/ingress-nginx.yaml`) as follows:

```yaml
charts:
  ingress-nginx:
    modsecurity:
      enabled: true
```

When enabled, ModSecurity is by default configured in non-blocking mode. Teams can see ModSecurity warning messages in the Grafana/OWASP dashboard in the Otomi Apps.

To configure ModSecurity in blocking mode, change the ingress-nginx configuration in the Otomi values repository: (`/env/charts/ingress-nginx.yaml`) as follows:

```yaml
charts:
  ingress-nginx:
    modsecurity:
      enabled: true
      block: true
```
