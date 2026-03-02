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
- Simplified disaster recovery: the platform configuration is stored externally, so you only need to back up your age keys to restore the platform.
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
kms:
  sops:
    provider: age
otomi:
  hasExternalDNS: true
  git:
    repoUrl: https://github.com/<owner>/<repo>
    username: <git-username>
    password: <personal-access-token>
    email: <git-email>
    branch: main
```

### Git configuration options

| Parameter            | Description                                    |
| -------------------- | ---------------------------------------------- |
| `otomi.git.repoUrl`  | The HTTPS URL of the external Git repository   |
| `otomi.git.username` | The Git username for authentication            |
| `otomi.git.password` | A personal access token with read/write access |
| `otomi.git.email`    | The email address used for Git commits         |
| `otomi.git.branch`   | The branch to use (e.g. `main`)                |

## Disaster recovery with BYO Git

Since the configuration parametes (the values repository) is stored outside the cluster the disaster recover process is straightforward.

To restore the App Platform, you can re-use the same `values.yaml` file from the initial installation.
In the recovery mode the `values.yaml` file must contian the following parameters:

- `kms.sops.age` with `privateKey` and `publicKey`
- `otomi.git` configuration options
- `installation.mode` set to `recovery`

For example:

```yaml
cluster:
  name: your-cluster-name
  provider: linode
otomi:
  git:
    repoUrl: https://github.com/<owner>/<repo>
    username: <git-username>
    password: <personal-access-token>
    email: <git-email>
    branch: main
kms:
  sops:
    age:
      privateKey: '<your-age-private-key>'
      publicKey: '<your-age-public-key>'
    provider: age
installation:
  mode: recovery
```

Then reinstall the platform using the updated values file:
The following command can be used to reinstall the App Platform:

```bash
helm install -f values.yaml apl apl/apl
```

> Make sure to store your age keys securely outside of the cluster (e.g. in a password manager or secrets vault). Without them you won't be able to decrypt the secrets stored in the git repository.

> This procedure works out of the box for App Platform instancies that manage their own DNS records (via external-dns and cert manager).

See the [disaster recovery documentation](../../for-ops/disaster-recovery/overview.md) for the full procedure.
