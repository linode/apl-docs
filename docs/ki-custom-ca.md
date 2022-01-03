---
slug: sre/known-issues/custom-ca
title: 'Known Issues: Using a custom CA'
sidebar_label: 'Custom CA'
---

When using a BYO CA or a auto-generated CA, some Otomi functionality may not work.

### Can not pull images from Harbor when using a custom CA

**Problem**

When running Otomi on Azure AKS (version 1.19 and up), it is not possible to pull images from Harbor because the CA is not valid.

**Cause**

When Otomi is installed with minimal values, a CA is automatically generated and added to the worker nodes using a DeamonSet. From AKS 1.19, Docker has been replaced by Containerd. Docker automatically picked up these cert files, but although Containerd has a similar functionality, this requires the registry configpath parameter to be set. By default this parameter is empty on the AKS worker nodes.

**Solution** 

Add the CA.crt manually to the worker nodes. Also see Azure AKS issue [#1940](https://github.com/Azure/AKS/issues/1940). A solution is expected by the end of January 2022.
