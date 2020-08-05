---
id: setup
title: Setup
---

## 1. Get the source

Please clone or download [Otomi Container Platform core](https://github.com/redkubes/otomi-stack) first:
```bash
git clone https://github.com/redkubes/otomi-stack
```

## 2. Initalize an empty git repo as storage

Otomi needs a git repo to store it's configuration. It will encrypt the with [sops](https://github.com/mozilla/sops).

```bash
git init otomi-values && cd otomi-values
```

## 3. Get credentials from a Key Management Service

In order to encrypt and decrypt the values, the KMS credentials needs to be provided in `.sops.yaml`. Examples are provided in `docs/.sops.yaml.sample` for the big 3 cloud KMS providers (Hashicorp Vault coming soon). Copy it, and then edit it:

```bash
cp otomi-stack/docs/.sops.yaml.sample otomi-values/.sops.yaml
```

## 4. Generate the value repo structure

```bash
cd otomi-stack
```

### 4.1 With Otomi UI

If you have a license for Otomi UI you can run it locally for initial configuration before deployment:
```bash
bin/start-ui.sh
```
After starting the UI visit the [Administration Overview](./administration-overview.md) for detailed instructions.

### 4.2 Manually

If have don't have a license for Otomi UI, you will have to generate the initial repo structure with the cli:
```bash
bin/generate-repo.sh ../otomi-values
```

After that continue to the [Configuration](./configuration.md) section to edit the values manually.
