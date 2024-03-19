---
slug: loki
title: Loki
sidebar_label: Loki
---

Loki aggregates all the container logs from the platform and stores them in a storage endpoint of choice (defaults to PVC). When Otomi is installed in multi-tenancy mode (see [here](../for-ops/console/settings/otomi.md)) it will split logs from team namespaces and make them available only to team members. Otomi provides shortcuts to selections of logs based on interest. Otomi splits logs per team, installs a dedicated Grafana instance per team and configures authentication for Grafana to allow access for team members only.

## Setup with GCS

When using Google Cloud Storage as a backend in combination with Google Kubernetes Engine, authentication can be set up using workload identity federation. The following instructions provide a service account, that can be set in the `serviceAccount` field when selecting the GCS option for Loki storage.

1. Make sure the cluster supports the feature. It needs to be activated on the cluster as well as each node pool. This will possibly require draining nodes temporarily, so account for extra capacity. Follow the instructions in the [GKE docs](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) to set up the required API and update cluster and node pool. Follow the rest of the instructions below.
2. Create a GCS storage bucket to use for Loki, if possible in the same project as the Otomi cluster.
3. Create a IAM service account. Note that the project name should match the project of the storage bucket and the GKE cluster. This is not strictly required, but cross-project access may have to be granted separately.

   ```
   gcloud iam service-accounts create $SA_NAME --project=$PROJECT
   ```

4. Grant the role access to your storage bucket.

   ```
   gcloud projects add-iam-policy-binding $PROJECT \
   --member="serviceAccount:$SA_NAME@$PROJECT.iam.gserviceaccount.com" \
   --project $PROJECT \
   --role="roles/storage.objectAdmin"
   ```

5. Create a policy binding, allowing resources with the Kubernetes ServiceAccount to impersonate the IAM service account:

   ```
   gcloud iam service-accounts add-iam-policy-binding --project $PROJECT $SA_NAME \
   --role roles/iam.workloadIdentityUser \
   --member "serviceAccount:$PROJECT.svc.id.goog[monitoring/loki]"
   ```

6. Provide the service account in the GCS storage values for Loki, in the full notation `$SA_NAME@$PROJECT.iam.gserviceaccount.com` and deploy.

## Known issues

### Time Range does not show all data

Unfortunately the Grafana team has not yet solved their long running problems with their LogQL interface. Instead of providing paginated queries to Loki, it is needed to provide a "line limit" by the user manually.

In a data driven application that has pagination, when a user selects a time window for a data query, the user will not have to provide additional information to perform that query. The UI application takes responsibility for instrumenting the query towards its data backend. It should thus load & render the results either through pagination or by scrolling the time range into view.

**Solution:**

When you don't see enough data, try increasing the line limit. The maximum is configurable in the Loki values.
