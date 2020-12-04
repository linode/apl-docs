---
slug: known-issues/istio
title: 'Known Issues: Istio'
sidebar_label: 'Istio'
---

When working with Istio you can expect to run into the following issues:

### Stale Keycloak JWKS cache

**Problem**

```
`Jwks doesn't have key to match kid or alg from Jwt`
```

**Cause** The istio-proxy sidecar caches JWKS with a TTL of 20 minutes. The TTL is a hardcoded parameter (`JwtPubKeyRefreshInterval`) and cannot be configured. By redeploing keycloak `kid` or `alg` can change, thus JWKS that is cached by istio-proxy sidecar is not valid anymore.

**Solution** Either wait 20 minutes, so JWKS is refreshed or kill all pods that are referenced by a RequestAuthentication resource. All services that have `authz.workload` set will have one (see: core.yaml).
