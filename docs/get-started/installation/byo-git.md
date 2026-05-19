---
slug: byo-git
title: BYO Git
sidebar_label: BYO Git
---

By default, the App Platform installs Gitea as the built-in Git repository to store platform configuration (the `values` repository). If you prefer to use your own external Git repository, you can disable Gitea and configure the platform to use an external Git provider such as GitHub or GitLab.

## Prerequisites

- An empty git repository accessible from kubernetes cluster via the HTTPS protocol.
- A personal access token with read/write access to the repository.
- The repository should be empty or initialized with a default branch.

## Advantages of BYO Git

- Use your existing Git workflows and access controls.
- Simplified disaster recovery: the platform configuration is stored externally, so you only need to back up the sealed-secrets key pair to restore the platform.
- No need to manage and back up the built-in Gitea instance.

## Configure the values

To install with BYO Git, disable Gitea and add the Git configuration to your `values.yaml`:

```yaml
apps:
  gitea:
    enabled: false
  cert-manager:
    issuer: letsencrypt
    email: admin@example.com
cluster:
  domainSuffix: example.com
  name: my-cluster
  provider: linode
dns:
  domainFilters:
    - example.com
  provider:
    linode:
      apiToken: '<your-linode-api-token>'
otomi:
  hasExternalDNS: true
  git:
    repoUrl: https://github.com/<owner>/<repo>
    username: <git-username>
    password: <personal-access-token>
    email: <git-email>
    branch: main
```

:::note
For v5.x clusters, also add the SOPS configuration to your `values.yaml`. See [SOPS](sops.md) for the required `kms.sops` settings.
:::

### Git configuration options

| Parameter            | Description                                    |
| -------------------- | ---------------------------------------------- |
| `otomi.git.repoUrl`  | The HTTPS URL of the external Git repository   |
| `otomi.git.username` | The Git username for authentication            |
| `otomi.git.password` | A personal access token with read/write access |
| `otomi.git.email`    | The email address used for Git commits         |
| `otomi.git.branch`   | The branch to use (e.g. `main`)                |

## Disaster recovery with BYO Git

Since the values repository is stored outside the cluster, disaster recovery is straightforward. You only need the sealed-secrets key pair from the original cluster and your Git credentials to restore the platform on a new cluster.

See [Recovery Installation](recovery.md) for step-by-step instructions and [Sealed Secrets Key Recovery](../../for-ops/disaster-recovery/sealed-secrets-key.md) for how to back up and restore the key pair.

:::note
For v5.x clusters, disaster recovery requires your age keys instead of the sealed-secrets key pair. See [Manage Age](../../for-ops/how-to/manage-age.md) for the v5.x recovery procedure.
:::

