---
slug: console/configuring-secrets
title: Configuring secrets
---

This page describes how to create a secret, and how to edit a secret. Both creating and editing a secret use the same form.

Screenshot:

![Console: new secret](img/console-new-secret.png)

## Type

What type of secret to deploy/expose. Three options exist:

- [1. Docker Registry](#1-docker-registry)
- [2. Generic](#2-generic)
- [3. TLS](#3-tls)

### 1. Docker Registry

Deploy a docker registry secret.

| Setting  | Description                                                  |
| -------- | ------------------------------------------------------------ |
| Server   | The image registry location                                  |
| Username | The username (for google's gcr.io use '\_json_key')          |
| Password | The password (for google this will be an accounts json blob) |

### 2. Generic

Deploy a generic kubernetes secret by adding key value pairs.

### 3. TLS

Deploy a kubernetes TLS secret.

| Setting | Description                                    |
| ------- | ---------------------------------------------- |
| CRT     | The PEM encoded public key certificate content |
| Key     | The private key certificate content            |
| CA      | The CA certificate content                     |
