---
slug: ce/teams
title: Configuring Teams in CE mode
sidebar_label: Teams
---

When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to commit them manually. Before you can start creating Services, Jobs and Secrets, you first need to create a Team. Follow these steps to create a team after deploying Otomi CE:

## Install Otomi CLI (optional)

See [here](/docs/cli) to install Otomi CLI.

## Pull the values

Clone the `otomi/values` repository from `gitea.<your.domain>/otomi/values` (if not already done)

```bash
git clone https://gitea.<your.domain>/otomi/values.git
```

## Bootstap the values (optional)

First bootstap the local values:

```bash
otomi bootstap
```

This will also add a .vscode folder with Otomi extentions for autocompletion.

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

### 2. Create the team files

Add the following 3 files:

1. `external-secrets.<team-name>.yaml`
2. `jobs.<team-name>.yaml`
3. `services.<team-name>.yaml`

Each file should contain:

```yaml
{}
```

## validate changes (optional)

When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values
```

Use -v to get more output

When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

## Apply changes

Commit and push the changes using Otomi CLI:

```bash
otomi apply
```

And then (optionally) commit and push the changes to git:

```bash
otomi commit -m "your commit comment" --no-verify
```

Note: use the default `otomi-admin` account and the provided adminpassword (see `secrets.settings.yaml.dec`).

A first commit will automatically generate a Drone pipeline configuration, and then commit all files with a standardized message "Manual commit".
