---
slug: setup
title: Setup
---

## 1. Initialize a values repo

Otomi needs a git repo to store it's configuration. We call it a **_values_** repo. You can create one like this:

```bash
# initialize git repo
mkdir otomi-values && cd $_ && git init .
# and get all the files
docker run -e ENV_DIR=$PWD -v $PWD:$PWD otomi/core:latest bin/bootstrap.sh
# and source the aliases including the otomi cli
. bin/aliases
```

This will install the demo value files, but also the needed artifacts, such as the Otomi CLI. Lastly, it sources aliases you can use, such as the `otomi` cli (which is an alias to the imported `bin/otomi`)

:::info otomi cli is bound to the values repo

This is to make sure that the version of the bootstrapped otomi image is configured from within this repo. So in case you get the "command not found: otomi" error, you have to source the aliases again from within the repo's root folder.

:::

## 2. Configure credentials from a KMS (optional)

:::note No encryption needed?

If you don't need encryption straight away please continue to the [next step](#3-start-otomi-console-on-your-local-machine-optional)

:::

Otomi will encrypt any `secrets.*.yaml` files with [sops](https://github.com/mozilla/sops), but only if it finds a `.sops.yaml` configuration file. (How to work with sops is not in scope of this documentation.)

In order to en-/decrypt the secrets in the values repo, the KMS configuration needs to be provided in `.sops.yaml`. Examples are provided in `.sops.yaml.sample` for the big 3 cloud KMS providers. Copy it, and then edit it:

```bash
cp .sops.yaml.sample .sops.yaml
```

Now, these KMS endpoints also need credentials to access them. Your AWS profile is always pointed and loaded (make sure you have loaded the correct one that has access), but in case of Google KMS add the following to the `.secrets` file:

```bash
export GCLOUD_SERVICE_KEY="YOUR_KEY_JSON_DATA_WITHOUT_NEWLINES"
```

Then you can run `otomi bootstrap` again, which will result in the creation of `gcp-key.json`, which is needed for sops to work locally, like when doing a `git diff`.

To allow `git diff` to show unencrypted values, you must register the sops diffing routine once with git. To register it:

```bash
git config diff.sopsdiffer.textconv "sops -d"
```

This only registers the sops differ, which is responsible for invoking sops. But sops still needs the credentials to the KMS service. Again, your AWS profile is always pointed and loaded, but in case of Google KMS you will need to point GOOGLE_APPLICATION_CREDENTIALS to the `gcp-key.json` file holding your account information:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=$PWD/gcp-key.json
```

Now try a diff:

```bash
git diff
```

## 3 Start Otomi Console on your local machine (optional)

:::info Otomi Enterprise Edition license needed

If you have a license for Otomi EE you can run the console locally for initial configuration.

:::

If you have not done so already, put the pullsecret you have been given in `secrets.settings.yaml` under `otomi.pullSecret`.

Then bootstrap again and start the console

```bash
otomi bootstrap
otomi console
```

The console allows for easy configuration of many settings but not all. Please continue to the [Configuration](configuration) section to read more about this.
