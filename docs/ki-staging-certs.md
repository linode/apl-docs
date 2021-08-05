---
slug: sre/known-issues/staging-certs
title: 'Known Issues: Working with staging certs'
sidebar_label: Staging Certs
---

**Problem**: Using `staging` certs results in some issues.

**Solution**: Use `production` certs.

## Deployment errors/problems

Using staging certs results in the following known issues:

### 1. Not able to log into Vault UI

When using staging certs, it is not possible to log in into the Vault UI.

### 2. vault-external-secrets pod crashing

The pod `vault-external-secrets-` stays in a `CrashLoopBackOff` state after initial installation. This can also have an impact on Grafana and Loki.

**Solution:**

Kill the `vault-external-secrets-` the pod in the `vault` namespaceand and also kill the `grafana-` pod in the monitoring namespace.
