---
slug: cli/pull
title: otomi pull
sidebar_label: otomi pull
---

`otomi pull [options]`

## Description

Wrapper for `git pull` and `otomi bootstrap`. It pulls the latest values and bootstraps the missing values.

## Options

| Option                      | Description | Value Type                                        | Default     |
| --------------------------- | ----------- | ------------------------------------------------- | ----------- |
| `--log-level`               |             | `fatal, error, warn, info, verbose, debug, trace` | `warn`      |
| `-s`, `--skip-cleanup`      |             | `[boolean]`                                       | `false`     |
| `-c`, `--set-context`       |             | `[boolean]`                                       | `false`     |
| `-v`, `--verbose`           |             |                                                   | `count`     |
| `--ni`, `--non-interactive` |             | `[boolean]`                                       | `false`     |
| `-h`, `--help`              | Show help   |                                                   | `[boolean]` |
