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

- In the left menu, click on `DNS` under Platform Settings. This option will only become active after External DNS is enabled in step 1
- Provide the DNS zone name used by the Teams tom publish URLs on
- Provide the Domain filter and optionally the Zone id filters
- Select your Provider
- Provide the required values
- Click on `Submit`

## Step 3: Set cluster domain suffix

- In the left menu, click on `Cluster` under Platform Settings
- Provide the cluster Domain Suffix
- Click on `Submit`


## Step 4 (optional): Use Let's Encrypt

Let's encrypt requires a DNS zone. So if you would like to start using Let's Encrypt as a CA, now you can.

- Click on `Apps` under platform
- Click on the `CertManager` app
- Click on `values`
- Fill in an email address with a valid domain name (required!)
- Under `Issuer`, click on `Lets Encrypt`
- Use `Production` or `Staging`
- Click on `Submit`

## Step 5: Deploy Changes

In the left menu, click on `Deploy Changes`

Wait for the Drone runner to finish:

```
kubectl get pod -n drone-pipelines -w
```


## Step 6: Adjust the web hook in Gitea

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


## Step 7: Restart the Drone server and agent

Then run the following kubectl command:

```
kubectl delete pods -n team-admin -l app=drone
```

When both the Drone Agent and Server are back up, open the Drone app and follow these steps:

- Click on `Sign In` on the 404 page
- Click `Continue`
- Click on `Authorize Application`
- Complete the Drone registration
- Click `Submit`
- On the Drone dashboard, click `SYNC`

You're ready to go!