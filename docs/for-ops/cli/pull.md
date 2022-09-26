---
slug: pull
title: otomi pull
sidebar_label: otomi pull
---

`otomi pull [options]`

## Description

Wrapper for `git pull` and `otomi bootstrap`. It pulls the latest values and bootstraps the missing values.

## Options

| Option                      | Description            | Value Type                                        | Default |
| --------------------------- | ---------------------- | ------------------------------------------------- | ------- |
| `--log-level`               |                        | `fatal, error, warn, info, verbose, debug, trace` | `warn`  |
| `-s`, `--skip-cleanup`      |                        | `[boolean]`                                       | `false` |
| `--ni`, `--non-interactive` | Same as setting env.CI | `[boolean]`                                       | `false` |
| `-v`, `--verbose`           |                        |                                                   | `count` |
| `-h`, `--help`              | Show help              |                                                   |         |
