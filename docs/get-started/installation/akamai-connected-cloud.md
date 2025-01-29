---
slug: akamai-connected-cloud
title: Akamai Connected Cloud
sidebar_label: Akamai Connected Cloud
---

# Deploy the App Platform on LKE

## Create a Kubernetes cluster with the App Platform enabled

These instructions provide the basic steps for deploying the App Platform on an LKE cluster. For more complete instructions on creating an LKE cluster, see the [Create a cluster](https://techdocs.akamai.com/cloud-computing/docs/create-a-cluster) guide.

1. Log in to your Cloud Manager account.

2. Select Kubernetes from the main navigation menu and then click **Create Cluster**.

3. The _Create a Kubernetes Cluster_ page appears. At the top of the page, select the following options

- In the **Cluster Label** field, provide a name for your cluster. The name must be unique between all of the clusters on your account. This name is how you identify your cluster in Cloud Manager.

- From the **Region** dropdown menu, select the region where you would like your cluster to reside.

- From the **Version** dropdown menu, select a Kubernetes version to use on your cluster.

4. In the **App Platform for LKE section**, select _Yes, enable App Platform for LKE_.

:::note
The App Platform for LKE requires HA control plane. When you enable the **App Platform for LKE** setting, the **HA control plane** setting is automatically enabled.
:::

5. In the **Add Node Pools** section, select the required resources for the worker nodes. To the right of each plan, select the plus + and minus - to add or remove a node to a node pool one at time.

:::note
During the beta period, the App Platform for LKE requires a node pool with at least **3 worker** nodes with a minimum of **16 GB memory** and **4 CPUs** per node.
:::

:::note
The App Platform for LKE is not supported in combination with Shared CPU Linode plans.
:::

6. Select **Add** to include the node pool in your configuration. If you need more hardware resources after you deploy your cluster, you can always [edit your Node Pool](https://techdocs.akamai.com/cloud-computing/docs/manage-nodes-and-node-pools).

7. Once a node pool has been added to your configuration, it is listed in the **Cluster Summary** section detailing your cluster's hardware resources and monthly cost. Additional pools can be added before finalizing the cluster creation process by repeating the previous step for each additional pool.

8. When you are satisfied with the configuration of your cluster, click the **Create Cluster** button. This creates your cluster and displays the cluster's details page in the Cloud Manager. Once the cluster has been fully provisioned, the App Platform for LKE is installed. **The installation of the App Platform for LKE takes around 10 until 15 minutes.** When the installation is finished, the URL of the **Portal Endpoint** is displayed in the App Platform for LKE section. The progress of the installation is checked every 60 seconds. When the installation is still in progress, the message “Installation in progress” is displayed instead of the URL of the Portal Endpoint.

9. When the installation of both the LKE cluster and the App Platform is complete, click on the provided URL of the Portal Endpoint:

![details-page](../../img/cluster-details-page.png)

This takes you to the App Platform Console login page:

![sign-in](../../img/sign-in-page.png)

10. Continue with the next steps to get the initial credentials needed to sign in.

## Access and download your Kubeconfig

1. To access your cluster's Kubeconfig, log in to your Cloud Manager account and navigate to the Kubernetes section.

2. From the Kubernetes listing page, click on your cluster's _more options_ ellipsis and select **Download Kubeconfig**. The file is saved to your computer's downloads folder.

3. Open a terminal shell and save your Kubeconfig file's path to the $KUBECONFIG environment variable. In the example command, the Kubeconfig file is located in the **Downloads** folder, but you should alter this line with this folder's location on your computer:

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

3. Navigate back to the App Platform Console login page in your web browser and sign in with these credentials.

4. Change the initial password. See the [Change user passwords](http://localhost:3001/docs/for-ops/how-to/change-user-passwords) and [Change admin password](http://localhost:3001/docs/for-ops/how-to/change-admin-password) guides.

## Provision Object Storage for the App Platform (Expected to be available on November 12)

When signed in to the App Platform Console (the web UI of the App Platform), you should first configure Object Storage. This is not required, but strongly recommended as this will prevent `out of disk space errors` when using Storage Volumes for integrated applications. Using Object Storage also has the advantage of creating backups of all databases used by the platform.

1. The **Object Storage Wizard** screen is automatically displayed, which asks you to confirm creating an Object Storage access key and configuring all required buckets. Click **Yes** to confirm configuring Object Storage. If you don’t want the platform to create all the required buckets, then click **Skip for now**. In this case, some features like creating backups of databases will not be available. You can start the Wizard at any time in the Console (Platform View: Maintenance, Show Object Storage Wizard).

1. Follow the instructions to [create a Personal Access Token](https://techdocs.akamai.com/linode-api/reference/get-started#personal-access-tokens) and make sure to select **Read/Write** for the Object Storage category. Copy the Access Token.

1. Paste the Access Token into the wizard and select the region where the buckets should be created from the dropdown list.

1. Click `Submit`.

All the required buckets are now created in your account and the platform will be configured to use Object Storage to store persistent data and backups. The provided Personal Access Token will not be stored. The created buckets will have the `<cluster-id>` prefix`

## Onboard Teams and Users

You can now start enabling Applications, onboarding [Teams](../../for-ops/console/teams) and create [Users](../../for-ops/console/user-management).

We recommend to go through the [Hands-on Labs](../labs/overview) to learn how to take advantage of the App Platform for LKE.

## Known issues

Are you experiencing issue during installation or operation? Check the [Known Issues page](../../for-ops/sre/known-issues.md)
