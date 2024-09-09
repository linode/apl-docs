---
slug: secrets
title: Team Secrets
sidebar_label: Sealed Secrets
---

Sealed Secrets are encrypted Kubernetes Secrets. The encrypted secrets are stored in the APL Values Git repository. When a Sealed Secrets secret is created in APL Console, the Kubernetes Secret will appear in the Team's namespace and can be used as you would use any secret that you would have created directly.

APL Console supports 7 types of secrets:

- Opaque
- Service Account Token
- Docker Config
- Docker Config Json
- Basic Auth
- SSH Auth
- TLS

## Create a Sealed Secret

1. Provide a name for the Sealed Secret. The Kubernetes secret will have the same name.

2. Select `Immutable` if the data of the Sealed Secret (and the Kubernetes secret) can not be updated after the Sealed Secret has been created. When the Sealed Secret is Immutable, only the metadata can be modified after creation.

3. Select the Type:

### Opaque secret

Opaque is the default secret type in Kubernetes. Read more about Opaque secrets [here](https://kubernetes.io/docs/concepts/configuration/secret/#opaque-secrets).

4. Add the `Encrypted data`:

| Key     | Value                                     | 
| ------- | ----------------------------------------- |
| Name of the Key | The value of the data item        |

5. Add more data items if needed.

:::note
The secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster.
:::

### Service Account Token secret

| Key     | Value                                     | 
| ------- | ----------------------------------------- |
| extra   | The token                                 |

See [here](https://kubernetes.io/docs/concepts/configuration/secret/#serviceaccount-token-secrets") for more information about service account token secrets.

You need to ensure that the `kubernetes.io/service-account.name` annotation is set to an existing ServiceAccount name. See the [metadata](#metadata) section for adding annotations.

:::note
The secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster.
:::

### Docker Config secret

| Key          | Value                                     | 
| ------------ | ----------------------------------------- |
| .dockercfg   | a .dockerconfigjson key for which the value is the content of a base64 encoded `~/.docker/config.json` file |

:::note
The secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster.
:::

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

:::note
The secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster.
:::

### Basic Auth secret

| Key          | Value                                     | 
| ------------ | ----------------------------------------- |
| username     | a username                                |
| password     | a password                                |

:::note
The secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster.
:::

### SSH Auth secret

| Key          | Value                                     | 
| ------------ | ----------------------------------------- |
| ssh-privatekey    | a `ssh-privatekey` key-value pair in the data field as the SSH credential to use |

:::note
The secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster.
:::

### TLS secret


| Key     | Value                                     | 
| ------- | ----------------------------------------- |
| tls.crt | The PEM encoded public key certificate    |
| tls.key | The private key certificate content       |

:::note
The secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster.
:::


## Metadata

Adding metadata is optional.

Add the following standard metadata to the sealed-secret:

- `Annotations`. See [here](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/) for more information about annotations
- `Finalizers`. See [here](https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/) for more information about finalizers
- `Labels`. See [here](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) for more information about labels

Click on `+ Add Item` and add a key-value pair.
