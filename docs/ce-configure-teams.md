---
slug: ce/teams
title: Configuring teams
sidebar_label: Teams
---

When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to commit them manually:

## Pull the values

Pull the `otomi/values` repository from `gitea.<your.domain>/otomi/values`

## Change the values

To create a team, modify the `values/env/teams.yaml`:

```yaml
teamConfig:
  teams:
    <team-name>:
      id: <team-name>
```

## Commit changes

```bash
otomi commit
```

This will detect any version changes, generate Drone pipeline configuration, and then commit all files with a standardized message "Manual commit".
