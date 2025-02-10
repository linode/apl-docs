---
slug: akamai-connected-cloud
title: Akamai Connected Cloud
sidebar_label: Akamai Connected Cloud
---

# Get started with the App Platform for LKE

## Create a Kubernetes cluster with the App Platform for LKE

1. Log into your Cloud Manager account.

2. Select Kubernetes from the left navigation menu and then click Create Cluster.

3. The Create a Kubernetes Cluster page appears. At the top of the page, you are required to select the following options

- In the Cluster Label field, provide a name for your cluster. The name must be unique between all of the clusters on your account. This name is how you identify your cluster in Cloud Manager’s Dashboard.

- From the Region dropdown menu, select the Region where you would like your cluster to reside.

- From the Version dropdown menu, select a Kubernetes version to deploy to your cluster.

4. In the App Platform for LKE section, select “Yes, enable App Platform for LKE”

:::info
The App Platform for LKE requires HA control plane to be enabled. When App Platform for LKE is enabled, HA control plane will automatically be enabled.
:::

:::info
It is advised to configure Control Plane ACL. This will restrict access to the Kubernetes API. The ACL will NOT restrict access to the App Platform Console!
:::

5. In the Add Node Pools section, select the required resources for the Linode worker node(s). To the right of each plan, select the plus + and minus - to add or remove a Linode to a node pool one at time.

:::info
During the Beta period the App Platform for LKE requires a node pool with at least **3 worker** nodes with a minimum of **16 GB memory** and **4 CPUs** per node. Make sure to select the required Linode plan.
:::

6. Select Add to include the node pool in your configuration. If you decide that you need more hardware resources after you deploy your cluster, you can always [edit your Node Pool](https://techdocs.akamai.com/cloud-computing/docs/manage-nodes-and-node-pools).

:::info
The App Platform for LKE is not supported in combination with Shared CPU.
:::

7. Once a pool has been added to your configuration, it is listed in the Cluster Summary on the right-hand side of Cloud Manager detailing your cluster's hardware resources and monthly cost. Additional pools can be added before finalizing the cluster creation process by repeating the previous step for each additional pool.

8. When you are satisfied with the configuration of your cluster, click the Create Cluster button on the right hand side of the screen. Your cluster's detail page appears, and your Node Pools are listed on this page. First the LKE cluster will be created and once ready the App Platform for LKE will be installed. The installation of the App Platform for LKE takes around 10 until 15 minutes. When the installation is finished, the URL of the Portal Endpoint will appear in the App Platform for LKE section. The progress of the installation will be checked every 60 seconds. When the installation is still in progress, the URL of the Portal Endpoint will not be displayed. Instead the message “Installation in progress” will appear.

9. When the installation of both the LKE cluster and the App Platform is ready, click on the provided URL of the Portal Endpoint:

![details-page](../../img/cluster-details-page.png)

You will then see the following sign-in page:

![sign-in](../../img/sign-in-page.png)

10. Continue with the next steps to get the initial credentials needed to sign in.

## Access and download your Kubeconfig

1. To access your cluster's Kubeconfig, log in to your Cloud Manager account and navigate to the Kubernetes section.

2. From the Kubernetes listing page, click on your cluster's more options ellipsis and select Download Kubeconfig. The file is saved to your computer's Downloads folder.

3. Open a terminal shell and save your Kubeconfig file's path to the $KUBECONFIG environment variable. In the example command, the Kubeconfig file is located in the Downloads folder, but you should alter this line with this folder's location on your computer:

```bash
export KUBECONFIG=~/Downloads/kubeconfig.yaml
```

## Obtain the initial access credentials and sign in

1. Perform the following command to obtain the user name:

```bash
kubectl get secret platform-admin-initial-credentials -n keycloak --template={{.data.username}} | base64 -d
```

2. Perform the following command to obtain the initial password:

```bash
kubectl get secret platform-admin-initial-credentials -n keycloak --template={{.data.password}} | base64 -d
```

3. Copy the username and password to your clipboard.

4. Sign in to the Console with the provided username and initial password.

5. Change the initial password

## Provision Object Storage for the App Platform

When signed in to the Console (the web UI of the App Platform), the first thing you’ll need to do is configure Object Storage. A wizard will be displayed asking you if the App Platform should provision all the required Buckets and access key for you. This is not required, but strongly recommended as this will prevent `out of disk space errors` when using Storage Volumes for integrated applications. Using Object Storage also has the advantage to create backups of all databases used by the platform.

1. When asked to create all the required Buckets and access key, click Yes. If you don’t want the platform to create all the required buckets, then click Skip for now. Note that in this case some features like creating backups of databases will not be available. You can start the Wizard at any time in the Console (Platform View: Maintenance, Show Object Storage Wizard). 

2. Follow the instructions to [create a Personal Access Token](https://techdocs.akamai.com/linode-api/reference/get-started#personal-access-tokens) and make sure to select **Read/Write** for the Object Storage category. Copy the Access Token.

3. Now paste the Access Token into the wizard and select the region where the buckets should be created from the dropdown list.

4. Click `Submit`.

All the required buckets will now be created in your account and the platform will be configured to use Object Storage to store persistent data and backups. The provided Personal Access Token will not be stored. The created buckets will have the `<cluster-id>` prefix`

## Onboard Teams and Users
You can now start enabling Applications, onboarding [Teams](../../for-ops/console/teams) and create [Users](../../for-ops/console/user-management).

We recommend to go through the [Hands-on Labs](../labs/overview) to learn how to take advantage of the App Platform for LKE.

## Known issues

Are you experiencing issue during installation or operation? Check the [Known Issues page](../../for-ops/sre/known-issues.md)
