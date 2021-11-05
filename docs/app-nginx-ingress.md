---
slug: apps/nginx-ingress
title: Working with Nginx Ingress
sidebar_label: Nginx-ingress
---

Otomi integrated Nginx Ingress into an advanced [ingress architecture](/about/architecture#ingress--sso).

## ModSecurity with OWASP rule set

By deafault, ModSecurity is enabled in Nginx and configured with an OWASP rule set in a non-blocking mode. Teams can see ModSecurity warning messages in the Grafana/OWASP dashboard in the Otomi Apps.

To configure ModSecurity in blocking mode, change the nginx-ingress configuration in the Otomi values repository: (`/env/charts/nginx-ingress.yaml`) as follows:

```yaml
charts:
    nginx-ingress:
        modsecurity:
            block: true
```
