---
slug: using-the-cli
title: Using the CLI
sidebar_label: Using the CLI
---

## Prerequisites

- Docker
- Bash v4

The CLI only supports bash versions greater than 4. Install or upgrade on Mac OS:

```bash
brew install bash
```

## Install the CLI

### Installer script

```bash
# Using wget
wget -O- https://git.io/otomi-cli-installer | bash
# Using curl
curl -L https://git.io/otomi-cli-installer | bash
```

### Manual installation

#### Using wget

```bash
# Using wget
wget https://git.io/otomi-cli -O otomi && chmod +x otomi
# Using curl
curl https://git.io/otomi-cli -o otomi && chmod +x otomi
```

This will download otomi into the current directory

## Using the CLI

Running any `otomi` command will pull the values' `otomi.version` image tag.

:::note The image used is rather large, so this might take some time.

The total compressed size of the base image with all the tools in use is close to 1Gi, and shows close to 2Gi uncompressed.

:::

To use the CLI you can run:

```bash
otomi --help
```

To find the options available.

## Command Reference

| Command                     | Description                                                                                          |
| ----------------------------| ---------------------------------------------------------------------------------------------------- |
| `otomi apply`               | Apply all, or supplied, K8S resources                                                                |
| `otomi bash`                | Run interactive bash shell in otomi-core container                                                   |
| `otomi bootstrap`           | Bootstrap values repo with artifacts corresponding to the cluster's stack version                    |
| `otomi commit`              | Execute wrapper for generate pipelines -> git commit changed files                                   |
| `otomi decrypt [files..]`   | Decrypts file(s), given as arguments, or any file matching `secrets.*.yaml` in the values repository |
| `otomi destroy`             | Destroy all, or supplied, K8S resources                                                              |
| `otomi diff`                | Diff all, or supplied, K8S resources                                                                 |
| `otomi encrypt [files..]`   | Encrypts file(s), given as arguments, or any file matching `secrets.*.yaml` in the values repository |
| `otomi lint`                | Uses helmfile lint to lint the target manifests                                                      |
| `otomi pull`                | Wrapper for git pull && otomi bootstrap                                                              |
| `otomi rotate-keys`         | Rotate keys for all the sops secrets in the values repository                                        |
| `otomi status`              | Show cluster status                                                                                  |
| `otomi sync`                | Sync all, or supplied, K8S resources                                                                 |
| `otomi template [outDir]`   | Export all, or supplied, K8S resources                                                               |
| `otomi test`                | Run tests against the target cluster                                                                 |
| `otomi validate-templates`  | Validate generated manifests against supported k8s versions/CRDs and best practices                  |
| `otomi validate-values`     | Validate values for each cluster against JSON schema (takes target options)                          |
| `otomi values`              | Show helmfile values for target cluster                                                              |
| `otomi x`                   | Execute command in container                                                                         |
