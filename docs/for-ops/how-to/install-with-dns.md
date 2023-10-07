---
slug: install-with-dns
title: Install Otomi with DNS
sidebar_label: Install with DNS
---

## Route53

Follow the following steps to install Otomi with DNS using AWS Route53.

1. Register a domain and retrieve the Hosted zone ID
2. Create a `dns-policy.json` file for the policy and add the Zone ID:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "route53:GetChange",
            "Resource": "arn:aws:route53:::change/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "route53:ChangeResourceRecordSets",
                "route53:ListResourceRecordSets"
            ],
            "Resource": [
                "arn:aws:route53:::hostedzone/<your-zone-id>"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "route53:ListHostedZonesByName",
                "route53:ListHostedZones"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

3. Create the policy:

```bash
aws iam create-policy --policy-name "d5otomiDNS" --policy-document file://dns-policy.json
```

4. export the policy ARN:

```bash
export POLICY_ARN=$(aws iam list-policies --query 'Policies[?PolicyName==`<policy-name>`].Arn' --output text)
```

5. Create a user:

```bash
USER=user-name
aws iam create-user --user-name $USER
```

6. Attach the user to the policy:

```bash
aws iam attach-user-policy --user-name $USER --policy-arn $POLICY_ARN
```

7. Create the `access-key`:

```bash
SECRET_ACCESS_KEY=$(aws iam create-access-key --user-name $USER)
```

8. Get the `secret-access-id` and `secret-access-key`:

```bash
cat <<-EOF > $USER
aws_access_key_id = $(echo $SECRET_ACCESS_KEY | jq -r '.AccessKey.AccessKeyId')
aws_secret_access_key = $(echo $SECRET_ACCESS_KEY | jq -r '.AccessKey.SecretAccessKey')
EOF
```

9. Add the DNS configuration to the `values.yaml` to install Otomi:

```yaml
cluster:
  name: my-cluster # choose a name for your cluster
  provider: your-provider
  domainSuffix: your-domain.com # your domain name
otomi:
  hasExternalDNS: true # required
dns:
  domainFilters: 
    - your-domain.com
  provider:
    aws:
      credentials:
        secretKey: aws_access_key_id
        accessKey: aws_secret_access_key
      region: eu-central-1 # your region
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@your-domain.com
```

10. Install Otomi:

```yaml
helm repo add otomi https://otomi.io/otomi-core
helm repo update
helm install -f values.yaml otomi otomi/otomi
```

## Civo DNS (Coming soon!)

Set up DNS in Civo:

1. Under `Networking` in the Civo Dashboard, click `DNS` and then `Add a domain name`
2. Fill in a domain name and then click `Add domain`
3. Create a NS record in the zone where your domain is hosted and add the Civo name servers `ns0.civo.com` ans `ns1.civo.com`
4. Under `Settings`, `Profile`, click on the tab `Security` and copy the `API key`

Install Otomi:

5. Add the DNS configuration to the `values.yaml` to install Otomi:

```yaml
cluster:
  name: my-cluster # choose a name for your cluster
  provider: civo
  domainSuffix: your-domain.com # your domain name
otomi:
  hasExternalDNS: true # required
dns:
  domainFilters: 
    - your-domain.com
  provider:
    civo:
      apiToken: <add your api token here>
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@your-domain.com
```

6. Install Otomi:

```yaml
helm repo add otomi https://otomi.io/otomi-core
helm repo update
helm install -f values.yaml otomi otomi/otomi
```