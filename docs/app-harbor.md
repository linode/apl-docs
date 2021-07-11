---
slug: apps/harbor
title: Working with Harbor
sidebar_label: Harbor
---

Harbor is an open-source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted. As a [CNCF](https://www.cncf.io/announcements/2020/06/23/cloud-native-computing-foundation-announces-harbor-graduation/) graduated project, Harbor delivers compliance, performance, and interoperability to help you consistently and securely manage artifacts across cloud-native compute platforms like Kubernetes. (source: https://goharbor.io/)

Harbor has been made user and tenant aware. Otomi Tasks is used to automate:

- Creating a project in Harbor for each team
- Creating a bot-account for each team
- Creating a Kubernetes pull secret in the teamspace to enable pulling of images out of the local registry
