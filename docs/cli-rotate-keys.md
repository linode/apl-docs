---
slug: cli/rotate-keys
title: otomi rotate-keys
sidebar_label: otomi rotate-keys
---

`otomi rotate-keys [options]`

## Description

Rotate keys for all the sops secrets in the values repository

## Options

| Option                      | Description | Value Type                                        | Default     |
| --------------------------- | ----------- | ------------------------------------------------- | ----------- |
| `--log-level`               |             | `fatal, error, warn, info, verbose, debug, trace` | `warn`      |
| `-s`, `--skip-cleanup`      |             | `[boolean]`                                       | `false`     |
| `-c`, `--set-context`       |             | `[boolean]`                                       | `false`     |
| `-v`, `--verbose`           |             |                                                   | `count`     |
| `--ni`, `--non-interactive` |             | `[boolean]`                                       | `false`     |
| `-h`, `--help`              | Show help   |                                                   | `[boolean]` |
