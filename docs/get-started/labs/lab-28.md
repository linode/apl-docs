---
slug: lab-28
title: Canary deployments
sidebar_label: Canary Deployments
---

In this lab we are going to create a canary deployment. The idea behind canary deployment (or rollout) is to introduce a new version of a service by first testing it using a small percentage of user traffic, and then if all goes well the percentage while simultaneously phasing out the old version.

For this we are going to deploy the stable version (blue), introduce a new version and then change the new version until we are happy with it and then increase the traffic to the new version.

## Prepare images

For this lab we need the 2 images (`blue` and `green`) we already created in the previous labs. If you haven't created the blue and green images, first complete these 2 labs:

- [Build images](lab-6.md)
- [Trigger builds](lab-26.md)

## Create a workload from the developer catalog

Go to the list of Builds and add the repository of the `green` build to your clipboard.

1. Go to `Workloads` in the left menu and click on `Create Workload`
2. Select `k8s-deployment-canary` from the catalog
3. Add the Name `canary` for the workload
4. Set the `Auto image updater` to `Digest` and fill in:

- imageRepository = paste from the clipboard
- imageParameter = `versionTwo.image.repository`
- tagParameter = `versionTwo.image.tag`

5. In the workload `values`, change the following parameters:

```yaml
# For the v1 as the stable version
versionOne:
  image:
    repository: # paste from clipboard, but change to blue
    tag: latest
# The v2 as canary with the auto image updater configured
versionTwo:
  image:
    repository: # paste from clipboard. This will be the green image
    tag: latest
```

6. Click `Submit`

Now click on `Deploy Changes`

We now created 2 deployments. One for `blue` and one for `green`. The `green` image (our canary) will be automatically updated after a change (commit).

## Expose the service

- In the left menu panel under click `Services` then click on `Create Service`
- Select the `canary` service
- Under `Traffic Control` click `enabled` (and use the default weights for v1 and v2)
- Under `Exposure Ingress`, select `Ingress` and use the default configuration
- Click `Submit`
- Click `Deploy Changes`

## See the results

You will see the `canary` service in the list of Services. Click on the URL and refresh the page for a couple of times. You should first see:

![Team apps](../../img/canary-v1.png)

After a refresh of the page you should see:

![Team apps](../../img/canary-v2.png)

## Update the canary image

Go to the `green` repo and change the `background-color` in the `green.html` file from `green` to `MediumSeaGreen` and commit the change. After a couple of minutes you should now see the background color of version 1 (our canary) changed:

![Team apps](../../img/canary-v2-mediumgreen.png)

Do you see the difference?
