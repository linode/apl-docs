---
slug: cli/encrypt
title: otomi encrypt
sidebar_label: otomi encrypt
---

`otomi encrypt [files...] [options]`

## Description

Encrypts file(s), given as arguments, or any file matching `secrets.*.yaml` in the values repository

## Options

| Option                      | Description | Value Type                                        | Default     |
| --------------------------- | ----------- | ------------------------------------------------- | ----------- |
| `--log-level`               |             | `fatal, error, warn, info, verbose, debug, trace` | `warn`      |
| `-s`, `--skip-cleanup`      |             | `[boolean]`                                       | `false`     |
| `-c`, `--set-context`       |             | `[boolean]`                                       | `false`     |
| `-v`, `--verbose`           |             |                                                   | `count`     |
| `--ni`, `--non-interactive` |             | `[boolean]`                                       | `false`     |
| `-h`, `--help`              | Show help   |                                                   | `[boolean]` |
