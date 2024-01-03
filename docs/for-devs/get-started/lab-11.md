---
slug: lab-11
title: Configure auto image updater
sidebar_label: Configure auto image updater
---

When using the Workload feature in Otomi to deploy Helm charts from the Developer Catalog, then you can also use the `Auto image updater` feature to to automatically update the container images of Kubernetes workloads.

:::info
Otomi only supports the image update feature in combination with a Helm chart stored in the Developer Catalog.
:::

## Create a Workload with auto image updater

Before creating a workload from the developer catalog, we'll need the `repository` and `tag` of the image we like to deploy. Go to the list of Builds and add the `repository` of the `green` build to your clipboard. Remember that the tag is `latest`.

You can now create a workload from the developer catalog:

1. Go to `Workloads` in the left menu and click on `New Workload`

2. Add the Name `green` for the workload

3. Select `otomi-quickstart-k8s-deployment` from the catalog

4. Set the `Auto image updater` to `Digest` and fill in the `ImageRepository` from the clipboard.

`Digest` is the update strategy and will update the image to the most recent pushed version of a given tag.

5. In the workload `values`, change the following parameters:

```yaml
image:
  repository: <paste from clipboard>
  tag: latest
```

6. Click `Submit`

Now click on `Deploy Changes`

In the example above, we used the `Digest` update strategy. The `Semver` strategy allows you to track & update images which use tags that follow the semantic versioning scheme.

## Expose the service

Now go to the [Expose services](lab-18.md) lab and expose the `green` service. When the service is created, go to `Services` in the left menu and click on the Url of the `green` service. What do you see?

## Make code change to trigger a new build

In the Trigger Builds lab we already created a Build called `green` and configured it with a trigger.

Now go to the `green` repo in Gitea and change the the welcome message:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Sample Deployment</title>
    <style>
      body {
        color: #ffffff;
        background-color: green
        font-family: Arial, sans-serif;
        font-size: 14px;
      }

      h1 {
        font-size: 500%;
        font-weight: normal;
        margin-bottom: 0;
      }

      h2 {
        font-size: 200%;
        font-weight: normal;
        margin-bottom: 0;
      }
    </style>
  </head>
  <body>
    <div align="center">
      <h1>Welcome to the improved Green app</h1>
    </div>
  </body>
</html>
```

And commit changes.

After the change has been committed, go to `Services` in the left menu and click on the Url of the `green` service. After a couple of minutes (note that the auto image update checks for changes every 2 minutes) you should see a `green` page saying `Welcome to the improved Green app`
