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

1. Select the Security Policy you like to adjust.

2. Set the `action` to `Enforce` to block Pods from being deployed if the don't comply to the policy.

3. Change the severity from `medium` (default) to `low` or `high`.

## See policy reports

### Option 1: Using kubectl inside the Cloud Shell
Requirement: The cloud shell for your team should be enabled in the team settings. This can be done by the platform admin or a team admin.

1. When logged in a team user, click the shell icon on the left menu bar
2. In the shell use kubectl to get the list of `policyreports`
    ```bash
    kubectl get policyreports -n team-<team name>
    ```
3. View a specific report
    ```
    kubectl get policyreports -n team-<team name> <report id>
    ```

### Option 2: Using kubectl locally
Requirement: The kubernetes API server endpoint must be configured (under Settings -> Cluster) in order for you to be able to download the kubeconfig file. This can be done by the platform admin.

1. When logged in a team user, click on **Download KUBECFG** in the left menu bar
2. set your local KUBECONFIG variable
    ```bash
    export KUBECONFIG=<path to the downloaded file in step 1>
    ```
3. In the shell use kubectl to get the list of `policyreports`
    ```bash
    kubectl get policyreports -n team-<team name>
    ```
4. View a specific report
    ```
    kubectl get policyreports -n team-<team name> <report id>
    ```