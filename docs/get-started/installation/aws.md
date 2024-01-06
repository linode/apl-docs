---
slug: aws
title: AWS
sidebar_label: AWS
---

# Install Otomi on EKS with DNS using Route53

## Prerequisites

- [AWS CLI](https://aws.amazon.com/cli/)
- [Terraform](https://cloud.google.com/sdk/docs/install)
- [Helm](https://kubernetes.io/docs/tasks/tools/)

## Additional resources

- If you use VSCode, hover over variables to see the description/type in .tf and .tfvars files with the [Terraform extension](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform)
- [How to setup aws cli and terraform](https://learn.hashicorp.com/tutorials/terraform/aws-build)


```jsx title="AWS CLI Cheat Sheet"
# Obtain account
aws sts get-caller-identity
# Obtain username and userarn
aws iam get-user
# Obtain rolearn
aws iam list-roles
# Obtain groups
aws iam list-groups
```

## Create an EKS cluster

Clone the Otomi Terraform repository:

```bash
git clone https://github.com/redkubes/quickstart.git
cd eks
```

- Copy `example.tfvars` file to `terraform.tfvars` file and fill in missing configuration parameters
- Open a terminal and run the following:

```bash
terraform init
# install the EKS cluster
terraform apply
```

## Add a CNI

To use the network policies feature in Otomi, make sure to install the [Calico](https://www.tigera.io/project-calico/) CNI or any other CNI that supports Kubernetes network polices.

Install Tigera Operator:

```bash
helm repo add projectcalico https://docs.tigera.io/calico/charts
helm repo update
kubectl create namespace tigera-operator
helm install calico projectcalico/tigera-operator --version v3.26.3 --namespace tigera-operator
```

Or install Calico minimal:

```bash
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.3/manifests/calico.yaml
```

## Configure Route53

Follow these steps to use AWS Route53.

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
aws iam create-policy --policy-name "otomi-dns" --policy-document file://dns-policy.json
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
ACCESS_KEY=$(aws iam create-access-key --user-name $USER)
```

8. Get the `secret-access-id` and `secret-access-key`:

```bash
ACCESS_KEY_ID=$(echo $ACCESS_KEY | jq -r '.AccessKey.AccessKeyId')
ACCESS_KEY_SECRET=$(echo $ACCESS_KEY | jq -r '.AccessKey.SecretAccessKey')
```

## Create the values.yaml file

Add the DNS configuration created in the previous step to the `values.yaml` that we'll use to install Otomi:
```bash
tee values.yaml<<EOF
cluster:
  name: otomi
  provider: aws
  domainSuffix: your-domain.com
otomi:
  hasExternalDNS: true
dns:
  domainFilters: 
    - your-domain.com
  provider:
    aws:
      credentials:
        secretKey: $ACCESS_KEY_ID
        accessKey: $ACCESS_KEY_SECRET
      region: eu-central-1 # your region
apps:
  cert-manager:
    issuer: letsencrypt
    stage: production
    email: admin@your-domain.com
EOF
```

And adjust the `domainSuffix`, `domainFilters`, `region` and `email`.


## Install Otomi on EKS

Get the credentials of the cluster:

```bash
# Update your kubeconfig
# Default: aws eks update-kubeconfig --name otomi
aws eks update-kubeconfig --name <cluster_name>
```

Install Otomi using Helm:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
helm install -f values.yaml otomi otomi/otomi
```

Monitor the logs of the installer job:

```bash
kubectl logs jobs/otomi -n default -f
```

When the installer is finished, copy the `url` and `admin-password` from the console output.

Follow the activation steps [here.](https://otomi.io/docs/get-started/activation)

:::tip
Like to learn how to use Otomi? Go through the [Get Started labs](../labs/overview.md)
:::
