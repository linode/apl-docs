---
slug: workloads
title: Team Workloads
sidebar_label: Workloads
---

<!-- ![Console: new service](img/team-services.png) -->

A Workload in Otomi is a self-service feature for:

- Deploying Kubernetes workloads
  * A regular Kubernetes deployment with a HPA (Horizontal Pod Autoscaler)
  * A Knative service
- Automatically create the ArgoCD resources to deploy the workload in a GitOps way
- Manage the custom values of the workloads in Git

:::info
Ask you platform administrator to activate ArgoCD to be able to use this feature.
:::

:::info
Ask you platform administrator to activate Knative to be able to create Function as a Service workloads.
:::


## Create a Workload

1. In the right menu click on `Workloads` and then on `Create workload`.

2. Select the workload type

- Regular application: will use the [Otomi deployment Helm chart](https://github.com/redkubes/otomi-charts)
- Function as a Service: will use the [Otomi Knative service Helm chart](https://github.com/redkubes/otomi-charts)
- Bring your own Helm chart: use your own (custom) Helm chart

### Regular application

3. Enter a name for the workload
4. Provide [Basic](#basic-values) or [Advanced](#advanced-values) values configuration
5. Click `Next`
6. Review the Values used to install the chart. Optionally add more values. See [here](https://github.com/redkubes/otomi-charts/blob/main/deployment/values.yaml) for all supported values
7. Click `Submit`

Now click on `application` in the `Argocd` column of the workload in the list of workloads. Note that an ArgoCD application is created to deploy the workload.

### Function as a Service

1. Enter a name for the workload
2. Provide [Basic](#basic-values) or [Advanced](#advanced-values) values configuration
3. Click `Next`
4. Review the Values used to install the chart. Optionally add more values. See [here](https://github.com/redkubes/otomi-charts/blob/main/ksvc/values.yaml) for all supported values
5. Click `Submit`

Now click on `application` in the `Argocd` column of the workload in the list of workloads. Note that an ArgoCD application is created to deploy the workload.
### BYO Helm chart

1. Enter a name for the workload
2. Enter the URL to the Git repo containing the Helm Chart or a Helm repository
3. Optionally (only when using a Git repo) add the relative directory path within the Git repository. Absolute paths cause errors.
4. Optionally (only when using a Chart registry) add the name of the Helm chart
5. Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version
6. Click `Next`
7. Review the Values used to install the chart
8. Click `Submit`

Now click on `Deploy Changes`

After a few minutes, Otomi will have created all the needed ArgoCD resources to deploy your workload. In the workloads list, click on the `Application` link of your workload to see the status of your workload.

The values of a workload can be changed at any time. Changes will automatically be deployed.

### Basic values

| Title               | Value               | Description                                            |
| -------------       | ------------------- | --------------------------------                       |
| Image - Registry    | image.registry      | The registry name of the image to deploy               |
| Image - Tag         | image.tag           | The tag of the image to deploy                         |
| Port - Containerport | containerPorts: [] | The port of the container |
| Resources - Requests vCPU | resources.requests.cpu | The minimal amount of vCPU needed to run the container |
| Resources - Requests Memory | resources.requests.memory | The minimal amount of memory needed to run the container |
| Instances - Min     | autoscaling.minReplicas | The minimal amount of containers to run. It's advised to always run at least 2 (default for a regular application). In case of a Function as a Service, the minimal amount of instances is set to 0. A container is started at the first request (scale to zero configuration) 
| Instances - Max     | autoscaling.maxReplicas | The maximum of containers to run. The autoscaling mechanism in this case will never scale above the configured max instances |
| Container security context - run as user | podSecurityContext.runAsUser | Containers must not set to run as user (default) 1001 |
| Container security context - run as non root | podSecurityContext.runAsNonRoot | Select to run the container as a non-root user |
| Container security context - read only file system | podSecurityContext.readOnlyRootFilesystem | Select to make the root filesystem immutable |

### Advanced values

| Title               | Value               | Description                                            |
| -------------       | ------------------- | --------------------------------                       |
| Image - Registry    | image.registry      | The registry name of the image to deploy               |
| Image - Tag         | image.tag           | The tag of the image to deploy                         |
| Port - Containerport | containerPorts: [] | The port of the container |
| Resources - Requests vCPU | resources.requests.cpu | The minimal amount of vCPU needed to run the container |
| Resources - Requests Memory | resources.requests.memory | The minimal amount of memory needed to run the container |
| Resources - Limits vCPU | resources.requests.cpu | The minimal amount of vCPU needed to run the container |
| Resources - Limits Memory | resources.requests.memory | The minimal amount of memory needed to run the container |
| Instances - Max     | autoscaling.maxReplicas | The maximum of containers to run. The autoscaling mechanism in this case will never scale above the configured max instances |
| Environment variables | env: [] | Environment variables for containers |
| Command arguments | command: [] | Override the arguments given to the entrypoint/command of the container |
| Labels | labels: {} | A set of labels that will be added to all the manifests |
| Annotations | annotations: {} | Annotations for pods |
| Secret name | secrets: [] | Set secrets as container environment variables using a secretRef. Select from secrets managed in Otomi/Vault |
| Container security context - run as user | podSecurityContext.runAsUser | Containers must not set to run as user (default) 1001 |
| Container security context - run as non root | podSecurityContext.runAsNonRoot | Select to run the container as a non-root user |
| Container security context - read only file system | podSecurityContext.readOnlyRootFilesystem | Select to make the root filesystem immutable |
| Files | files: {} | Entries of absolute path > content pairs. One caveat: content can be 131072 chars max |
| Secret mounts | secretMounts: {} | Pairs of secret name > absolute folder path. Will mount the contents of the secret in the container at the specified folder path |
| Service ports | servicePorts: [] | Configures the service ports to listens on. Exposes on port 80 by default, using the http port of the pod |
| Service monitor | serviceMonitor.create | Select to create a a Prometheus Operator ServiceMonitor for custom metrics |
| Service monitor endpoints | endpoints: [] | Add endpoints. Note that the port also needs to be exposed by the container |