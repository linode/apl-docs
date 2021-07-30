---
slug: cli/check-policies
title: check-policies
sidebar_label: otomi check-policies
---

`otomi check-policies [options]`

## Description

Check if generated manifests adhere to defined OPA policies.

## Options

| Option | Description | Value Type | Default |
| --- | --- | --- | --- |
| `-l`, `--label` | Select charts by label (format: `<label>=<value>`), e.g. `-l name=prometheus-operator` or `--label group=jobs` | `[array]` |  |
| `-f`, `--file` | Select helmfiles by filename, e.g. `-f helmfile.d/helmfile-15.ingress-core.yaml` | `[array]` |  |
| `--log-level` |  | `fatal, error, warn, info, verbose, debug, trace` | `warn` |
| `-s`, `--skip-cleanup` |  | `[boolean]` | `false` |
| `-c`, `--set-context` |  | `[boolean]` | `false` |
| `-v`, `--verbose` |  |  | `count` |
| `--ni`, `--non-interactive` |  | `[boolean]` | `false` |
| `-h`, `--help` | Show help |  | `[boolean]` |
