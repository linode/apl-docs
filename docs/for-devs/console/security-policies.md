---
slug: security-policies
title: Security policies
sidebar_label: Security policies
---

:::info
Ask your platform administrator to activate the Kyverno App to use this feature.
:::

All known Security Policies for the Team are listed here. Security policies can be sorted based on:

| Property      | Description                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------- |
| Name          | The name of the Security Policy                                                                    |
| Severity      | The Severity of the policy. Can be `low`, `medium` or `high`                                       |
| Action        | The action to take when a policy gets violated. Can be `Audit` (which is the default) or `Enforce` |

## About Security Policies

When Security Policies are enabled for the Team, then know that:

- Team's can only modify policies if the Platform administrator allowed the Team to edit policies (see the Team permissions in de Team Settings)

- Teams can ask the Platform administrator to adjust the default list of policies for the Team.

- Some of the policies can be adjusted using `Custom Values`.

## Adjusting Security Policies

1. Select the Security Policy you like to adjust

2. Set the `action` to `Enforce` to block Pods from beeing deployed if the don't comply to the policy

3. Change the severity from `medium` (default) to `low` or `high`.

## See policy reports

1. Go to `Workloads`

2. Click on the ArgoCD `application` for the Workload you want to see the policy report

3. In the `Application Details Tree` you will see a `policyreport` attached to the `ReplicaSet` and an `admissionreport` attached to each `Pod`