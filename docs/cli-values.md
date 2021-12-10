---
slug: cli/values
title: otomi values
sidebar_label: otomi values
---

`otomi values [options]`

## Description

Show helmfile values for target cluster

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
