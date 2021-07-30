---
slug: cli/validate-values
title: otomi validate-values
sidebar_label: otomi validate-values
---

`otomi validate-values [options]`

## Description

Validate values for each cluster against JSON schema (takes target options).

## Options

| Option | Description | Value Type | Default |
| --- | --- | --- | --- |
| `-l`, `--label` | Helmfile option to select charts by label (format: `<label>=<value>`), e.g. `-l name=prometheus-operator` or `--label group=jobs` | `[array]` |  |
| `-f`, `--file` | Helmfile option to select helmfiles by filename, e.g. '-f helmfile.d/helmfile-15.ingress-core.yaml' | `[array]` |  |
| `--log-level` |  | `fatal, error, warn, info, verbose, debug, trace` | `warn` |
| `-s`, `--skip-cleanup` |  | `[boolean]` | `false` |
| `-c`, `--set-context` |  | `[boolean]` | `false` |
| `-v`, `--verbose` |  |  | `count` |
| `--ni`, `--non-interactive` |  | `[boolean]` | `false` |
| `-h`, `--help` | Show help |  | `[boolean]` |
