---
slug: setup
title: Setup
---

## 1. Get the source

Please clone or download [Otomi Core](https://github.com/redkubes/otomi-core) first:

```bash
git clone https://github.com/redkubes/otomi-core
```

## 2. Initalize the values repo as storage

Otomi needs a git repo to store it's configuration. If you don't yet have a values repo you can create one like this:

```bash
# initialize git repo
mkdir otomi-values && cd $_ && git init .
# and get all the files
docker run -e ENV_DIR=$PWD -v $PWD:$PWD otomi/core:latest bin/bootstrap.sh
```

This will install the demo value files, but also the needed artifacts, such as the Otomi CLI. It also imports a
`README.md` with extensive instructions on initial configuration.

Otomi will encrypt the files with [sops](https://github.com/mozilla/sops) if it finds the `.sops.yaml` configuration
file. If you don't need encryption straight away please remove or rename that file and continue to
[configuration](configuration). In case you also don't want to change any demo values but just want to deploy those,
skip to [validating the configuration](configuration#2-validation).

## 3. Get credentials from a Key Management Service (optional)

In order to encrypt and decrypt the values, the KMS credentials needs to be provided in `.sops.yaml`. Examples are
provided in `docs/.sops.yaml.sample` for the big 3 cloud KMS providers (Hashicorp Vault coming soon). Copy it, and then
edit it:

```bash
cp otomi-core/docs/.sops.yaml.sample otomi-values/.sops.yaml
```

Most of these KMS endpoints need credentials to access them, so we will need to create a `.secrets` file in the values
repo. (Don't worry, it will be ignored by git.) In case of Google KMS add the following to it:

```bash
export GCLOUD_SERVICE_KEY="YOUR_KEY_JSON_DATA"
```

## 4 Start Otomi Console on your local machine (optional)

If you have a license for Otomi EE you can run the console locally for initial configuration. But first, if you have not
done so already, put the pullsecret you have been given in `secrets.settings.yaml` under `otomi.pullSecret`.

Then start the console

```bash
. bin/aliases
otomi console
```

If you don't have a license for Otomi EE, please continue to the [Configuration](configuration) section to edit the
values manually.

After starting the console visit the [Otomi Console documentation](console) for detailed instructions.
