---
slug: cli/bootstrap
title: otomi bootstrap
sidebar_label: otomi bootstrap
---

`otomi bootstrap [options]`

## Description

Bootstrap values repository with artifacts corresponding to the cluster's stack version

## Options

| Option | Description | Value Type | Default |
| --- | --- | --- | --- |
| `-p`, `--profile` | Bootstrap selected profile | `[String]` |  |
| `--version` | Show version number | `[boolean]` `[choices: "aws", "azure", "google"]` |  |
| `--log-level` |  | `FATAL, ERROR, WARN, INFO, VERBOSE, DEBUG, TRACE` | `WARN` |
| `-s`, `--skip-cleanup` |  | `[boolean]` | `false` |
| `-c`, `--set-context` |  | `[boolean]` | `false` |
| `-v`, `--verbose` |  |  | `count` |
| `--no-interactive`, `--ni` |  | `[boolean]` | `false` |
| `-h`, `--help` | Show help |  | `[boolean]` |
