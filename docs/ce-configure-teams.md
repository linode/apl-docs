---
slug: ce/teams
title: Configuring Teams in CE mode
sidebar_label: Teams
---

When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to apply them manually. Before you can start creating Services, Jobs and Secrets, you first need to create a Team. Follow these steps to create a team after deploying Otomi CE:

## Install Otomi CLI (optional)

If you haven't deployed Otomi with the CLI, install the Otomi CLI first. See [here](/docs/cli) to install Otomi CLI.

## Pull the values

Clone the `otomi/values` repository from `gitea.<your.domain>/otomi/values` (if not already done) to work with the values locally.

```bash
git clone https://gitea.<your.domain>/otomi/values.git
```

## Bootstap the values (optional)

Bootstap the local values:

```bash
otomi bootstap
```

This will also add a `.vscode` folder with Otomi extentions for autocompletion.

## Change the values

To create a team, follow these steps:

### 1. Modify the teams.yaml

Add the team to the `values/env/teams.yaml`:

```yaml
teamConfig:
  teams:
    <team-name>:
      id: <team-name>
```

### 2. Create the team files, for the Secrets, Jobs and Services of the team

Add the following 3 files to the `/env/teams` folder:

1. `external-secrets.<team-name>.yaml`
2. `jobs.<team-name>.yaml`
3. `services.<team-name>.yaml`

Each file should contain:

```yaml
{}
```

## validate changes (optional)

Noe validate the new values based on the Otomi values schema:

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

## Automation

When you create a Team, a lot is happening (and automatically done for you) behind the scenes:

- Teams are each given a project in Harbor, allowing team users to push and pull container images and create secrets for automation
- Two ingress gateways are automatically configured per team: one for SSO traffic and one for public exposure
- Nginx-ingress ingress resources are automatically generated for all integrated applications and for team services. There is also configuration exposed allowing admins to turn on special Nginx features like throttling or OWASP rule checking
- All teams automatically get their own Prometheus, Alertmanager, and Grafana instance, allowing them to view only their own resources
- Teams are each given a space in Vault where the team can create and manage their own secrets
