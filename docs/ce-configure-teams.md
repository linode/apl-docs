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
```

:::note ATTENTION: Are you using SOPS? Then do first do the following:

- make sure you have installed the SOPS extention for VSC.
- add your `.secrets` in the `values` folder
- source the secrets: `source .secrets`
- encrypt the secrets by running `otomi decrypt`

:::

## Bootstap the values

Bootstap the local values:

```bash
otomi bootstap
```

Bootstrap will do the following:

- Add a `.vscode` folder with Otomi extentions for autocompletion
- Add the `values-schema.yaml` for values validation

Create a `.env` file in the `env` folder and add the following line:

```bash
export K8S_CONTEXT="<the-context-of-your-k8s-cluster>"
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
```

Add the team to the `secrets.teams.yaml`:

```yaml
teamConfig:
  teams:
    demo:
      password: somesecretvalue
```

note: if you are using SOPS, then now run `otomi encrypt`

Add the following 3 files to the `/env/teams` folder:

1. `external-secrets.demo.yaml`
2. `jobs.demo.yaml`
3. `services.demo.yaml`

Each file should contain:

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

## Automation

When you create a Team, a lot of configuration is done automatically for you behind the scenes:

- Teams are each given a project in Harbor, allowing team users to push and pull container images and create secrets for automation
- Two ingress gateways are automatically configured per team: one for SSO traffic and one for public exposure
- Nginx-ingress ingress resources are automatically generated for all integrated applications and for team services. There is also configuration exposed allowing admins to turn on special Nginx features like throttling or OWASP rule checking
- All teams automatically get their own Prometheus, Alertmanager, and Grafana instance, allowing them to view only their own resources
- Teams are each given a space in Vault where the team can create and manage their own secrets
