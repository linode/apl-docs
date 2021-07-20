---
slug: cli/
title: Working with Otomi CLI
sidebar_label: Overview
---

:::note ATTENTION: The new Otomi CLI is still in PREVIEW!

A new install path will soon be made available. If you encounter problems, please create an issue [here](https://github.com/redkubes/otomi-core/issues).

:::

## Prerequisites

- Docker
- Bash v4

Otomi CLI only supports bash versions greater than 4. Install or upgrade on Mac OS:

```bash
brew install bash
```

## Install the CLI
### Installer script
```bash
# Using wget
wget -O- https://git.io/otomi-cli-installer-beta | bash
# Using curl
curl https://git.io/otomi-cli-installer-beta | bash
```
### Manual installation
#### Using wget
```bash
wget https://raw.githubusercontent.com/redkubes/otomi-core/otomi-zx/binzx/otomi -O /usr/local/bin/otomi && chmod +x /usr/local/bin/otomi
```
#### Using curl
```bash
curl https://raw.githubusercontent.com/redkubes/otomi-core/otomi-zx/binzx/otomi -o /usr/local/bin/otomi && chmod +x /usr/local/bin/otomi
```

## Using the CLI
:::note Note: the image used is rather large, so this might take some time.

Run the following command:

```bash
 docker pull otomi/core:otomi-zx
```
To make sure you are using the latest version
:::

To use the CLI you can run:
```bash
otomi --help
```
To find the options available.

## Single run
To run otomi without installing the CLI, you can run the following command:
```bash
bash <(wget -q -O- https://git.io/otomi-cli-beta) <COMMAND HERE>
```

## Command Reference

| Command | Description |
| --- | --- |
| [`otomi apply`](apply) | Apply K8S resources |
| [`otomi bash`](bash) | Run interactive bash shell in otomi-core container |
| [`otomi bootstrap`](bootstrap) | Bootstrap values repo with artifacts corresponding to the cluster's stack version |
| [`otomi check-policies`](check-policies) | Check if generated manifests adhere to defined OPA policies |
| [`otomi commit`](commit) | Execute wrapper for generate pipelines -> git commit changed files |
| [`otomi decrypt [files..]`](decrypt) | Decrypts file(s) given as arguments (relative to env folder), or all env/_.secrets.yaml to env/_.secrets.yaml.dec files |
| [`otomi destroy`](destroy) | Destroy all or some charts |
| [`otomi diff`](diff) | Diff k8s resources |
| [`otomi encrypt [files..]`](encrypt) | Encrypt file(s) given as arguments (relative to env folder), or all env/\*.secrets.yaml files |
| [`otomi gen-drone`](gen-drone) |  |
| [`otomi gen-sops`](gen-sops) |  |
| [`otomi hf [args..]`](hf) |  |
| [`otomi lint`](lint) |  |
| [`otomi pull`](pull) | Wrapper for git pull && otomi bootstrap |
| [`otomi regcred`](regcred) |  |
| [`otomi rotate-keys`](rotate-keys) |  |
| [`otomi score-template`](score-template) |  |
| [`otomi server`](server) |  |
| [`otomi status`](status) |  |
| [`otomi sync`](sync) | Sync k8s resources |
| [`otomi template [outDir]`](template) | Export k8s resources |
| [`otomi test`](test) | Run tests against the target cluster |
| [`otomi validate-templates`](validate-templates) | Validate generated manifests against supported k8s versions/CRDs and best practices |
| [`otomi validate-values`](validate-values) | Validate values for each cluster against JSON schema (takes target options) |
| [`otomi values`](values) | Show helmfile values for target cluster |
| [`otomi x`](x) | Execute command in container |
