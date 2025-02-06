---
slug: use-team-admin
title: Use team-admin
sidebar_label: Use Team Admin
---

By default a team called `team-admin` is created. The Admin Team is no regular team. This team for instance has no apps. Instead the admin needs to use the platform apps to see logs and metrics of workloads deployed in the `team-admin` namespace.

The Admin Team can be used by admins to:

- Deploy workloads in any namespace
- Configure ingress for any service in any namespace

This makes it possible for admin to add any kind of tool to the platform and use the Services self-service feature to expose the UI of the tool and configure SSO.

## Create workloads in any namespace

To create workloads in a custom namespace (namespaces not owned by teams), first create a namespace with label `istio-injection: enabled`:

```
kubectl create namespace my-namespace
kubectl label namespace my-namespace istio-injection=enabled
```

You can now create a workload to deploy Helm charts to this new namespace. In this example we'll use the deployment chart in the `otomi-charts` repo. In the left menu, under `team-admin` click `Workloads` and then click `Create Workload`.

1. Enter a name for the workload:

```
hello-deploy
```

2. Enter the URL to the Git repo containing the Helm Chart or a Helm repository:

```
https://github.com/linode/apl-charts.git
```

3. Enter the path of the chart:

```
quickstart-k8s-deployment
```

4. Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version

5. Enter the name of the namespace where the workload will be deployed:

```
my-namespace
```

6. Click `Submit`.

After submitting the new workload specs, the values editor will be shown. Here you can edit the chart values.

7. Click on `Edit`.

8. Add the following (minimal) values:

```
fullnameOverride: hello-deploy
image:
  repository: otomi/nodejs-helloworld
  tag: v1.2.13
```

9.  Click on `Submit`.

10. Click on `Deploy Changes`.


## Publicly expose a service deployed in any namespace

The Services in `team-admin` can be used to publicly expose services deployed in any namespace. The only requirement is that the namespace has the label `istio-injection: enabled`.

Let's now configure public exposure for the workload we deployed in the namespace `my-namespace`:

1. In the left menu panel under click `Services` then click on `Create Service`.

2. Fill in the name of the Kubernetes service (hello-deploy) that you already deployed.

3. Fill in the namespace where the service is deployed (my-namespace in this example).

4. Fill in the port of the service (8080 in this case).

5. Under `Exposure Ingress`, select `External`.

6. Turn off `Use team domain` and fill in the name of the service as the hostname (hello-deploy in this example).

7. Click on `Submit`.

8. Click on `Deploy Changes` (the Deploy Changes button in the left panel will light-up after you click on submit).

Your service and URL will now show up in the list of Services.
