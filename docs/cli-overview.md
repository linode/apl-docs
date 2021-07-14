---
slug: cli/
title: Working with Otomi CLI
sidebar_label: Overview
---

:::note ATTENTION: The new Otomi CLI is still in PREVIEW!

A new install path will soon be made available.

:::

## Prerequisites

- Docker
- Bash v4

Otomi CLI only supports Bash -ge version 4.Install or upgrade on Mac OS:

```bash
brew install bash
```

## Install the CLI

```bash
wget https://raw.githubusercontent.com/redkubes/otomi-core/otomi-zx/binzx/otomi -O /usr/local/bin/otomi && chmod +x /usr/local/bin/otomi
```

Note: the image used is rather large, so this might take some time.

Run the following command:

```bash
 docker pull otomi/core:otomi-zx
```

and then:

```bash
otomi --help
```

## Single run

```bash
bash <(wget -q -O- https://raw.githubusercontent.com/redkubes/otomi-core/otomi-zx/binzx/otomi) <COMMANDS HERE>
```

## Command Reference

| Command | Alias | Description |
| --- | --- | --- |
| `otomi apply` | `deploy` | Apply K8S resources |
| `otomi bash` |  | Run interactive bash shell in otomi-core container |
| `otomi bootstrap` |  | Bootstrap values repo with artifacts corresponding to the cluster's stack version |
| `otomi check-policies` |  | Check if generated manifests adhere to defined OPA policies |
| `otomi commit` |  | Execute wrapper for generate pipelines -> git commit changed files |
| `otomi decrypt [files..]` |  | Decrypts file(s) given as arguments (relative to env folder), or all env/_.secrets.yaml to env/_.secrets.yaml.dec files |
| `otomi destroy` |  | Destroy all or some charts |
| `otomi diff` |  | Diff k8s resources |
| `otomi encrypt [files..]` |  | Encrypt file(s) given as arguments (relative to env folder), or all env/\*.secrets.yaml files |
| `otomi gen-drone` |  |  |
| `otomi gen-sops` |  |  |
| `otomi hf [args..]` |  |  |
| `otomi lint` |  |  |
| `otomi pull` |  | Wrapper for git pull && otomi bootstrap |
| `otomi regcred` |  |  |
| `otomi rotate-keys` |  |  |
| `otomi score-template` |  |  |
| `otomi status` |  |  |
| `otomi sync` |  | Sync k8s resources |
| `otomi template [outDir]` |  | Export k8s resources |
| `otomi test` |  | Run tests against the target cluster |
| `otomi validate-templates` |  | Validate generated manifests against supported k8s versions/CRDs and best practices |
| `otomi validate-values` |  | Validate values for each cluster against JSON schema (takes target options) |
| `otomi values` |  | Show helmfile values for target cluster |
| `otomi x` |  | Execute command in container |
