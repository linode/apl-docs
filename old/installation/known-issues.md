---
slug: known-issues
title: Known Installation Issues
sidebar_label: Known Issues
---


## Installation On Linode takes around 30 minutes

**Issue**
When installing APL on Linode LKE

**Solution** 

Add extra args to the metrics-service by using the following values when installing Otomi with Helm chart:

```
apps:
  metrics-server:
    enabled: true
    _rawValues:
      extraArgs:
        kubelet-preferred-address-types: InternalIP
        kubelet-insecure-tls: true
```

## Installing Otomi with DNS fails due to failed authentication for Gitea

**Issue**

When installing Otomi with DNS, the installations fails with the following error:

```
otomi:cmd:commit:commitAndPush:error remote: Unauthorized
fatal: Authentication failed for 'https://gitea.otomi.example.com/otomi/values.git/'
```

**Solution**

Provide a custom password:

```
otomi:
  adminPassword: yourpassword
```

