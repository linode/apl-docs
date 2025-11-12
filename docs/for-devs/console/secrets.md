---
slug: secrets
title: Team Secrets
sidebar_label: Secrets
---

Secrets in the Console are securely encrypted and stored in your Values Git repository using Sealed Secrets. When you create a secret in the Console, it generates a standard Kubernetes Secret in your Team's namespace that can be used like any other Kubernetes secret.

6 types of secrets are supported:

- Opaque
- Docker Config
- Docker Config Json
- Basic Auth
- SSH Auth
- TLS

## Create a Secret

1. Provide a name for the Secret. The Kubernetes secret will have the same name.

2. Select `Immutable` if the data of the secret (and the Kubernetes secret) can not be updated after the secret has been created. When the secret is Immutable, only the metadata can be modified after creation.

3. Select the Type:

### Opaque secret

Opaque is the default secret type in Kubernetes. Read more about Opaque secrets [here](https://kubernetes.io/docs/concepts/configuration/secret/#opaque-secrets).

4. Add the `Secret data`:

| Key     | Value                                     | 
| ------- | ----------------------------------------- |
| Name of the Key | The value of the data item        |

5. Add more data items if needed.

### Docker Config secret

| Key          | Value                                     | 
| ------------ | ----------------------------------------- |
| .dockercfg   | a .dockerconfigjson key for which the value is the content of a base64 encoded `~/.docker/config.json` file |

### Docker Config Json secret

| Key          | Value                                     | 
| ------------ | ----------------------------------------- |
| .dockerconfigjson   | a .dockerconfigjson key `~/.docker/config.json` file |

Example of a `config.json`:

```json
{
"auths": {
  "my-registry.example:5000": {
    "username":"tiger",
    "password":"pass1234",
    "email":"tiger@acme.example",
    "auth":"the-authentication-key"
    }
  }
}
```

Use the following command to create the json:

```bash
email="not@us.ed" # can be something else if the registry provider expects it, but usually this is ignored
server="" # example: "https://harbor.myclusterid.akamai-apl.net/"
username="" # your username
password="" # your password, can be token
kubectl create secret docker-registry --dry-run=client regcred --docker-email=$email --docker-server=$server --docker-username=$username --docker-password=$password -o jsonpath='{.data.\.dockerconfigjson}' | base64 --decode
```

### Basic Auth secret

| Key          | Value                                     | 
| ------------ | ----------------------------------------- |
| username     | a username                                |
| password     | a password                                |

### SSH Auth secret

| Key          | Value                                     | 
| ------------ | ----------------------------------------- |
| ssh-privatekey    | a `ssh-privatekey` key-value pair in the data field as the SSH credential to use |

### TLS secret


| Key     | Value                                     | 
| ------- | ----------------------------------------- |
| tls.crt | The PEM encoded public key certificate    |
| tls.key | The private key certificate content       |

:::note
The secret value will only be visible at the time of creation. After creation, the value field will display asterisks `****` to indicate the data is encrypted and cannot be revealed through the interface, though it can be overwritten. To overwrite the secret, click on the lock `🔒` icon next to the value field, enter the new secret value, and click on `Save Changes`.
:::


## Metadata

Adding metadata is optional.

Add the following standard metadata to the secret:

- `Labels`. See [here](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) for more information about labels
- `Annotations`. See [here](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) for more information about annotations
- `Finalizers`. See [here](https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/) for more information about finalizers

Click the corresponding add button (`+Add Labels`, `+Add Annotations` or `+Add Finalizers`) to add key-value pairs.
