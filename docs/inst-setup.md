---
slug: installation/setup
title: Setup
---

## 1. Initialize a values repo

Otomi needs a git repo to store its configuration. We call it a **_values_** repo.

You can now bootstrap the versioned artifacts for aws/azure/google profile. In the following example values for azure

```bash
profile='azure'
# initialize git repo
mkdir otomi-values && cd $_ && git init -b main .
# and get all the files
docker run --rm -e ENV_DIR=$PWD -v $PWD:$PWD otomi/core:latest bin/bootstrap.sh --profile $profile
# and source the aliases including the otomi cli
. bin/aliases
```

This will install the value files, but also the needed artifacts, such as the Otomi CLI. Lastly, it sources aliases you can use, such as the `otomi` cli (which is an alias to the imported `bin/otomi`).

## 2. Customize configuration

As you learned in the [configuration](configuration) section, the essential otomi platform configurations are stored in `env/cluster.yaml`, `env/settings.yaml` and `env/secrets.settings.yaml` files. Inspect them and customize values to much your environment.

The environment variables are defined `env/.env` file, where:

- `K8S_CONTEXT` indicates a kubernetes context name to be used with otomi CLI

## 3. Configure credentials from a KMS (optional)

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

If you have not done so already, put the pullsecret you have been given in `secrets.settings.yaml` under `otomi.pullSecret`. Also make sure the git details are correctly added to `charts/*otomi-api.yaml`. Remember that some providers like GitHub need an access token when MFA/2FA is turned on, so create one (see https://github.com/settings/tokens) and provide that for `password`. At least the following values are expected:

```yaml
repoUrl: github.com/redkubes/otomi-values-demo.git
email: some@secret.value
user: somesecretvalue
password: somesecretvalue
```

Make sure these are correct and allowing access to the above initialized and pushed repository.

Then bootstrap again and start the console:

```bash
otomi bootstrap
otomi console
```

The console allows for easy configuration of many settings but not all. Please continue to the [Configuration](configuration) section to read more about this.
