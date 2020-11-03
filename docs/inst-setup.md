---
slug: setup
title: Setup
---

## 1. Initalize a values repo

Otomi needs a git repo to store it's configuration. We call it a **_values_** repo. You can create one like this:

```bash
# initialize git repo
mkdir otomi-values && cd $_ && git init .
# and get all the files
docker run -e ENV_DIR=$PWD -v $PWD:$PWD otomi/core:latest bin/bootstrap.sh
# and source the aliases including the otomi cli
. bin/aliases
```

This will install the demo value files, but also the needed artifacts, such as the Otomi CLI. It also imports a `README.md` with extensive instructions on initial configuration. Lastly, it sources aliases you can use, such as the otomi cli (which is an alias to the importedd `bin/otomi`)

Otomi will encrypt the files with [sops](https://github.com/mozilla/sops) if it finds a `.sops.yaml` configuration file. (How to work with sops is not in scope of this documentation.) If you don't need encryption straight away please remove or rename that file and continue to [configuration](configuration). In case you also don't want to change any demo values but just want to deploy those, skip to [validating the configuration](configuration#2-validation).

## 2. Get credentials from a Key Management Service (optional)

In order to encrypt and decrypt the values, the KMS credentials needs to be provided in `.sops.yaml`. Examples are provided in `docs/.sops.yaml.sample` for the big 3 cloud KMS providers (Hashicorp Vault coming soon). Copy it, and then edit it:

```bash
cp otomi-core/docs/.sops.yaml.sample otomi-values/.sops.yaml
```

Most of these KMS endpoints need credentials to access them, so we will need to create a `.secrets` file in the values repo. (Don't worry, it will be ignored by git.) In case of Google KMS add the following to it:

```bash
export GCLOUD_SERVICE_KEY="YOUR_KEY_JSON_DATA_WITHOUT_NEWLINES"
```

## 3 Start Otomi Console on your local machine (optional)

:::info Only for Otomi Enterprise Edition users

If you have a license for Otomi EE you can run the console locally for initial configuration.

:::

If you have not done so already, put the pullsecret you have been given in `secrets.settings.yaml` under `otomi.pullSecret`.

Then start the console

```bash
. bin/aliases
otomi console
```

If you don't have a license, or need to configure settings not editable through the console, then please continue to the [Configuration](configuration) section to edit these values manually.

After starting the console visit the [Otomi Console documentation](console) for detailed instructions.
