---
slug: switch-to-dns
title: Switch to use DNS
---

When Otomi is installed with minimal values, a custom CA is generated and Otomi uses nip.io for host names. It is possible to switch from nip.io to using a DNS zone after installing Otomi initially without DNS. To switch from nip.io to a DNS zone, follow the instructions as described below.

## Step 1: Enable external DNS flag

- Sing in to Otomi Console with user `otomi-admin`
- In the left menu, click on `Setting` under `Platform`
- Click on `Otomi`
- Enable the External DNS option
- Click on `Submit`

## Step 2: Provide DNS values

- Go back to the `Settings` and click `DNS`
- Provide the Domain filter and optionally the Zone id filters
- Select your Provider
- Provide the required values
- Click on `Submit`

## Step 3: Set cluster domain suffix

- Go back to the `Settings` and click `Cluster`
- Provide the cluster Domain Suffix
- Click on `Submit`


## Step 4 (optional): Use Let's Encrypt

Let's Encrypt requires a DNS zone. So if you would like to start using Let's Encrypt as a CA, now you can.

- Click on `Apps` under platform
- Click on the `cert-manager` app
- Click on the `values` tab
- Fill in an email address with a valid domain name (required!)
- Under `Issuer`, click on `Lets Encrypt`
- Select `Production`
- Click on `Submit`

## Step 5: Deploy Changes

In the left menu, click on `Deploy Changes`

Wait for the Drone runner to finish:

```
kubectl get pod -n drone-pipelines -w
```

## Step 6: Adjust the webhook in Gitea

Open Gitea and follow these steps:

First sign in to the Otomi Console using the new domain name: `https://otomi.<your-domain-name>`

- Click on `Apps` under Platform
- Click on the `Gitea` app
- Sign in
- Click on the `otomi/values` repository
- Click `Settings`
- Click `Webhooks`
- Click on the existing webhook (`https://drone.<ip-address>.nip.io/`)
- Change the domain name in the target URL to your new domain name
- Click `Update Webhook`


## Step 7: Restart and Authorize Drone

After the webhook is adjusted, restart Drone:

```bash
kubectl delete pod -n drone -l app=drone
```

When the pods have restarted and are in a running state:

- Click on `Apps` under Platform
- Click on the `Drone` app
- Click on `Sign In` on the 404 page
- Click `Continue`
- Click on `Authorize Application`
- Complete the Drone registration
- Click `Submit`

Now you still see the pipeline running of the DNS change is still running. You can manually cancel the pipeline by clicking on the pipeline and then click `cancel` in the top right.

You're ready to go!