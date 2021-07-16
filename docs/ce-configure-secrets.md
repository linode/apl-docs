---
slug: ce/secrets
title: Configuring Secrets in CE mode
sidebar_label: Secrets
---

When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to commit them manually. Before you can start creating Secrets, you first need to create a Team. Follow these steps to create a Secret in Otomi CE:

## Create generic secrets

### 1. Create a secret in Vault

- Login in to Otomi Console as a team-admin or team-member
- If you are a member of multiple teams, select the team in the top bar
- Under the Team section (right menu bar), click 'Otomi Apps'
- Now open Hashicorp Vault
- To login, select 'OIDC' and then click 'login'
- Click 'Create secret'
- Provide a name (path = `teams/team-name/secret-name)
- Add the key / value pairs
- Click 'Save'

### 2. Create a generic secret in Otomi

Add the secret created in Vault to the `values/env/teams/external-secrets.<team-name>.yaml`:

```yaml
teamConfig:
  teams:
    demo:
      secrets:
        - name: otomi-welcome # the name of the secret in Vault
          teamId: demo # teh name of the team
          type: generic # the secret type, in this case generic
          entries:
            - HELLO # the key of the secret in Vault
```

#### validate changes (optional)

When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values
```

Use -v to get more output

When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

#### Apply changes

Commit and push the changes using Otomi CLI:

```bash
otomi apply
```

And then (optionally) commit and push the changes to git:

```bash
otomi commit -m "your commit comment" --no-verify
```

The secret is now available to be used in Otomi [Services](/docs/ce/services)

## Create a (Kubernetes) pull secret

### 1. Create a Kubernetes docker-registry secret

```bash
email="not@us.ed" # can be something else if the registry provider expects it, but usually this is ignored
server="" # example: "https://harbor.demo.eks.otomi.cloud/"
username="" # your username
password="" # your password, can be token
kubectl create secret docker-registry --dry-run=client regcred --docker-email=$email --docker-server=$server --docker-username=$username --docker-password=$password -ojsonpath='{.data.\.dockerconfigjson}' | base64 --decode
```

### 2. Create a secret in Vault

- Login in to Otomi Console as a team-admin or team-member
- If you are a member of multiple teams, select the team in the top bar
- Under the Team section (right menu bar), click 'Otomi Apps'
- Now open Hashicorp Vault
- To login, select 'OIDC' and then click 'login'
- Click 'Create secret'
- Select '**JSON**'
- Provide a name (path = `teams/team-name/secret-name)
- Add the JSON created in step 1
- Click 'Save'

### 3. Create a Docker registry secret in Otomi

Add the secret created in Vault to the `values/env/teams/external-secrets.<team-name>.yaml`:

```yaml
teamConfig:
  teams:
    demo:
      secrets:
        - name: test-pull-secret # the name of the secret in Vault
          teamId: demo # the name of the team
          type: docker-registry # the secret type, a docker registry secret
```

#### validate changes (optional)

When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values
```

Use -v to get more output

When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

#### Apply changes

Commit and push the changes using Otomi CLI:

```bash
otomi apply
```

And then (optionally) commit and push the changes to git:

```bash
otomi commit -m "your commit comment" --no-verify
```

The pull secret can now be used by the team to pull images. Note: Otomi automatically creates a pull secret in the team namespace to enable pulling images from the local Harbor registry (also automatically created for the team).

## Create TLS secrets

### 1. Create a secret in Vault

- Login in to Otomi Console as a team-admin or team-member
- If you are a member of multiple teams, select the team in the top bar
- Under the Team section (right menu bar), click 'Otomi Apps'
- Now open Hashicorp Vault
- To login, select 'OIDC' and then click 'login'
- Click 'Create secret'
- Provide a name (path = `teams/team-name/secret-name)
- Add 3 Keys: `key`, `crt` and `ca` and add the certificate content as a value. The `ca` field is optional and can be used to provide the certificate authority (for mTLS)
- Click 'Save'

### 2. Create a TLS secret in Otomi

Add the secret created in Vault to the `values/env/teams/external-secrets.<team-name>.yaml`:

```yaml
teamConfig:
  teams:
    demo:
      secrets:
        - name: tls-test # the name of the secret in Vault
          teamId: demo # the name of the team
          type: tls # the type of the secret, a TLS secret in this case
          ca: ca.crt # optional
          crt: tls.crt # property corresponding to the key of the secret in Vault
          key: tls.key # property corresponding to the key of the secret in Vault
```

#### Validate changes (optional)

When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values
```

Use `-v` to get more output (or `-vvv` to get even more output). When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

#### Deploy changes

Apply the changes:

```bash
otomi apply
```

The secret is now available to be used in Otomi [Services](/docs/ce/services)
