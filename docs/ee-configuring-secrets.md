---
slug: ee/secrets
title: Secrets
---

This page describes how to create a secret, and how to edit a secret. Both creating and editing a secret use the same form.

Any secret that is created here should have it's counterpart in Vault by the same name. Otomi will create kubernetes secrets from those Vault secrets. These can then be registered in services or jobs, as injected env vars, or file mounts.

Screenshot (admin role):

![Console: new secret](img/console-new-secret.png)

## Type

What type of secret to deploy/expose. Three options exist:

- [1. Generic](#1-generic)
- [2. Docker Registry](#2-docker-registry)
- [3. TLS](#3-tls)

### 1. Generic

Deploy a generic kubernetes secret by listing a selection of (or all) properties of a vault secret registered with the same name.

### 2. Docker Registry

Deploy a docker registry secret. It should exist in Vault as a secret with the same name. The vault secret should be of type "json" and have only one property `.dockerconfigjson` that is set to the value of the following command:

```bash
email="not@us.ed" # can be something else if the registry provider expects it, but usually this is ignored
server="" # example: "https://harbor.demo.eks.otomi.cloud/"
username="" # your username
password="" # your password, can be token
kubectl create secret docker-registry --dry-run=client regcred --docker-email=$email --docker-server=$server --docker-username=$username --docker-password=$password -ojsonpath='{.data.\.dockerconfigjson}' | base64 --decode
```

### 3. TLS

Deploy a kubernetes TLS secret. The three fields here should correspond with the properties as named in the vault secret registered with the same name. The "ca" field is optional and can be used to provide the certificate authority (for mTLS).

| Setting | Description                                    |
| ------- | ---------------------------------------------- |
| crt     | The PEM encoded public key certificate content |
| key     | The private key certificate content            |
| ca      | The CA certificate content (optional)          |
