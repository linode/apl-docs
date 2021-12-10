---
slug: cli/apply
title: otomi apply
sidebar_label: otomi apply
---

`otomi apply [options]`

## Description

Apply Kubernetes resources. Without any options it will (re)deploy the full stack. With `-l` or `-f` it will apply only the defined resources

## Options

| Option | Description | Value Type | Default |
| --- | --- | --- | --- |
| `-l`, `--label` | Helmfile option to select charts by label (format: `<label>=<value>`), e.g. `-l name=prometheus-operator` or `--label group=jobs` | `[array]` |  |
| `-f`, `--file` | Helmfile option to select helmfiles by filename, e.g. '-f helmfile.d/helmfile-15.ingress-core.yaml' | `[array]` |  |
| `--log-level` |  | `fatal, error, warn, info, verbose, debug, trace` | `warn` |
| `-s`, `--skip-cleanup` |  | `[boolean]` | `false` |
| `-v`, `--verbose` |  |  | `count` |
| `--ni`, `--non-interactive` | Same as setting env.CI | `[boolean]` | `false` |
| `-h`, `--help` | Show help |  |  |
