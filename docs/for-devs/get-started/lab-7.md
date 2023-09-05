---
slug: lab-7
title: Scan your images for vulnerabilities
sidebar_label: Scan images
---

When your team is using Harbor for private image registries, you can use Trivy to automatically scan your images on push. This is not enabled by default. Ask your platform administrator to turn this on for your project in Harbor. When enabled, you can see the results of the scans by following these steps:

- In the apps section in Otomi console, click on Harbor
- Click on your project. You will only see the projects of the Teams that you are a member of
- You will now see a list of the teams repositories
- Click on the repository that contains the artifact (image) that you would like to investigate
- In the list of artifacts, you can see a summary of the scan results

![kubecfg](../../img/trivy-scan-sum.png)

When you click on the scanned artifact, you'll see a more detailed report on all the vulnerabilities:

![kubecfg](../../img/trivy-scan-details.png)