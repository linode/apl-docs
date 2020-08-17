---
id: lm-configuration-changes
title: Configuration changes
---

**NOTE: The below information is not needed when using the Otomi UI (license fees apply).**

When you wish to change values manually some things need to be taken into account. There are some quirks when it comes to editing configuration files that are encrypted with sops.

## 1. Changing values of a running Otomi platform

Always start by doing a `git fetch` first. `git pull` will try an auto-merge, which will always result in conflicts, so avoid it. (In case you do get conflicts, it's best to do a `git reset origin/master --hard`.)

If there are new incoming changes then the latest repo values will be automatically decrypted into `*.yaml.dec` files. If your git hooks are not working correctly you have to decrypt the repo manually:
```bash
drun bin/crypt.sh dec
```

Now, since you DO need to decrypt the incoming changes, these WILL overwrite your local changes in the `.yaml.dec` files. So in order to keep your local edits, you cannot rely on git anymore (as it has no control over the `*.dec` files), and you have to use something like the `xyz.local-history` vscode plugin. (Suggested to you when opening this repo for the first time.)
Now that you are prepared, edit the files you need.

## 2. Performing a git diff

Since you already know the diff from the history plugin's comparison, there is no need to do so really. But if you wish to be sure of your changes, you can still do a `git diff`.
In order to see the git diff after you made some changes you have to perform these actions when opening a new shell:
```bash
source bin/bootstrap.sh
# encrypt the values in order to diff them:
drun bin/crypt.sh enc
# diffing needs to happen with the bootstrapped git binary in the image:
drun git diff
```

## 3. Deploying changes

Now that you have done all you need to prepare for deployment, again run:
```bash
export CLOUD=xxx && CLUSTER=yyy && source bin/bootstrap.sh
drun
``` 