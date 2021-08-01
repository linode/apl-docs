---
slug: ce/teams
title: Configuring Teams in CE mode
sidebar_label: Teams
---

When you are running Otomi in CE mode or doing local development, you will operate on the values directly and have to apply them manually. Before you can start creating Services, Jobs and Secrets, you first need to create a Team. Follow these steps to create a team after deploying Otomi CE:

## Install Otomi CLI (optional)

If you haven't deployed Otomi with the CLI, install the Otomi CLI first. See [here](/docs/cli) to install Otomi CLI.

## Pull the values

Clone the `otomi/values` repository from `gitea.<your.domain>/otomi/values` (if not already done) to work with the values locally.

```bash
git clone https://gitea.<your.domain>/otomi/values.git
cd values
```

:::note ATTENTION: Are you using SOPS? Then do first do the following:

- Make sure you have installed the SOPS extention for VSC.
- Add your `.secrets` file to the `values` folder
- Source the secrets: `source .secrets`
- Decrypt the secrets by running `otomi decrypt`

:::

## Bootstap the values

First create a `.env` file in the `env` folder and add the following line:

```bash
echo 'export K8S_CONTEXT="<the-context-of-your-k8s-cluster>"' > .env
```

Bootstap the local values:

```bash
otomi bootstap
```

## Adding a new team to the values

In the following steps we are going to create a team with the name 'demo':

### 1. Modify the teams.yaml

Add the team to the `values/env/teams.yaml`:

```yaml
teamConfig:
  teams:
    demo:
      id: demo
      oidc:
        groupMapping: <group-object-id> # The id of the AD group with the team members who need access to the team
```

Add the team to the `secrets.teams.yaml` (or `secrets.teams.yaml.dec` when using SOPS):

```yaml
teamConfig:
  teams:
    demo:
      password: somesecretvalue
```

When using SOPS, first encrypt the team password:

```bash
otomi encrypt
```

Add the following 3 files to the `/env/teams` folder:

1. `external-secrets.demo.yaml`
2. `jobs.demo.yaml`
3. `services.demo.yaml`

Each file should contain an empty object:

```yaml
{}
```

## validate changes (optional)

Now validate the new values based on the Otomi values schema:

```bash
otomi validate-values
```

Use `-v` to get more output (or `-vvv` to get even more output). See [here](/docs/cli/validate-values) for a full list of `otomi validate` command options. When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

## Deploy changes

Deploy the changes using Otomi CLI:

```bash
otomi apply
```

Use `-v` to get more output (or `-vvv` to get even more output). See [here](/docs/cli/apply) for a full list of `otomi apply` command options.

Note: Creating a team can take around 5 to 10 minutes to complete.

## Commit changes

Now commit your changes to the (otomi/values) GIT repository on the cluster to store the new desired state configuration.

## Automation

When Otomi is configures for multi tenancy, Otomi will now automatically:

- Configure the ingress gateways: one for SSO traffic and one for public exposure
- Generate (Istio) ingress resources for all team services
- Provision a Prometheus, Alertmanager, and Grafana instance for the team
- Provide access to Loki to see the logs of team applications (only team members can see logs)
- Teams will get access to Kubeapps (if Kubeapps is enabled)
- Create a project in Harbor (if Harbor is enabled) and provide SSO access to Harbor for team members
- Create a robot account for the team in Harbor
- Create a pull secret for the Harbor repository in the team namespace
- Create a space in Vault and provide SSO access to vault for team members
