---
slug: cli/commit
title: otomi commit
sidebar_label: otomi commit
---

`otomi commit [options]`

## Description

Execute wrapper for generate pipelines -> git commit changed files.

## Options

| Option | Description | Value Type | Default |
| --- | --- | --- | --- |
| `-l` | Helmfile option to select charts by label (format: `<label>=<value>`), e.g. `-l name=prometheus-operator` or `--label group=jobs` | `[array]` |  |
| `-f`, `--file` | Helmfile option to select helmfiles by filename, e.g. '-f helmfile.d/helmfile-15.ingress-core.yaml' | `[array]` |  |
| `--version` | Show version number | `[boolean]` |  |
| `--log-level` |  | `FATAL, ERROR, WARN, INFO, VERBOSE, DEBUG, TRACE` | `WARN` |
| `-s`, `--skip-cleanup` |  | `[boolean]` | `false` |
| `-c`, `--set-context` |  | `[boolean]` | `false` |
| `-v`, `--verbose` |  |  | `count` |
| `--no-interactive`, `--ni` |  | `[boolean]` | `false` |
| `-h`, `--help` | Show help |  | `[boolean]` |
