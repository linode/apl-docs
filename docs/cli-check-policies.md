---
slug: cli/check-policies
title: check-policies
sidebar_label: check-policies
---

`otomi apply [options]`

## Description

Check if generated manifests adhere to defined OPA policies.

## Options

| Option | Description | Value Type | Default |
| --- | --- | --- | --- | --- |
| `-l, --label, --selector` | Select charts by label (format: `<label>=<value>`), e.g. `-l name=prometheus-operator` or `--label group=jobs` | `[array]` |  |
| `-f`, `--file` | Select helmfiles by filename, e.g. `-f helmfile.d/helmfile-15.ingress-core.yaml` | `[array]` |  |
| `--version` | Show version number | `[boolean]` |  |
| `--log-level` |  | `FATAL, ERROR, WARN, INFO, VERBOSE, DEBUG, TRACE` | `WARN` |
| `-s`, `--skip-cleanup` |  | `[boolean]` | `false` |
| `-c`, `--set-context` |  | `[boolean]` | `false` |
| `-v`, `--verbose` |  |  | count |
| `--no-interactive`, `--ni` |  | `[boolean]` | `false` |
| `-h`, `--help` | Show help |  | `[boolean]` |  |
