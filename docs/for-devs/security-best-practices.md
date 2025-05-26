---
slug: security-best-practices
title: Security Best Practices
sidebar_label: Security Best Practices
---

In addition to the out-of-the-box security capabilities provides by App Platform, it is a responsibility of Teams to keep their applications secure. Here is a list of security best-practices Teams are advised to implement:

1. Use [secrets](../for-devs/console/sealed-secrets.md) to secure sensitive data and use a `secretKeyRef` to map an environment variable to the secret data.

2. Drop `ALL` or specific capabilities in the Pod or container `SecurityContext` to ensure all (unused) capabilities are disabled.

3. Make sure containers are running with a read-only root file system by setting the `readOnlyRootFilesystem` to `true` in the Pod or container `SecurityContext`.

4. Prevent pods from sharing the host’s IPC or network namespace by setting the `hostNetwork` parameter to `false`.

5. Avoid running containers in privileged mode by setting the `allowPrivilegeEscalation` parameter to false in the Pod or container `SecurityContext`.

6. Identify and mitigate threats in running containers. See the [Detect threats in running containers](../get-started/labs/detect-threats.md) hands-on lab for more information.

7. Scan running container for vulnerabilities. See the [Scan running containers for vulnerabilities](../get-started/labs/scan-containers.md) hands-on lab for more information.

8. Scan images pushed to the Team's private container registry in Harbor for vulnerabilities. See the [Scan images for vulnerabilities](../get-started/labs/scan-images.md) hands-on lab for more information.
