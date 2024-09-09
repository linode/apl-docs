---
slug: istio
title: Istio
sidebar_label: Istio
---

## About

Istio is installed by APL to deliver the following capabilities:

- mTLS enforcement for all traffic that is deemed compromisable.

- egress control, forcing teams to choose explicit egress endpoints.

- advanced routing capabilities such as weight based load balancing (A/B or blue/green testing).


## Known issues

### Stale Keycloak JWKS cache

**Problem**

```
Jwks doesn't have key to match kid or alg from Jwt
```

**Cause** The istio-proxy sidecar caches JWKS with a TTL of 20 minutes. The TTL is a hardcoded parameter (`JwtPubKeyRefreshInterval`) and cannot be configured. By redeploing keycloak `kid` or `alg` can change, thus JWKS that is cached by istio-proxy sidecar is not valid anymore.

**Solution** Either wait 20 minutes, so JWKS is refreshed or kill all pods that are referenced by a RequestAuthentication resource. All services that have `authz.workload` set will have one (see: core.yaml).

### Istio log errors

When you see errors in the logs like such:

```
error    authorization    skipped rule ns[monitoring]-policy[grafana-dev-mycluster.akamai-apl-net]-rule[0]: :authority must not be used in TCP
```

These are not real errors, but logged incorrectly: https://github.com/istio/istio/issues/24701#issuecomment-649719089