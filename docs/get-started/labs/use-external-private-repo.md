---
slug: use-external-private-repo
title: Use an external private repository
sidebar_label: Using external private repo's
---

:::info
Harbor needs to be activated for this lab.
:::

The App Platform includes an `internal` self-hosted Git service powered by Gitea. When creating a Build, the repository type by default is set to `internal` so you can select one of the internally hosted Git repositories. In this lab we'll use the Build feature to build an image using an external private repository (Github) with `basic-auth` authentication.

## Create a (Classic) Personal Access Token

Create a Classic personal access token as documented on the [Github documentation site](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) and add the token to your clipboard.

## Create a SealedSecret

1. In the left menu, click on `Sealed Secrets`.

2. Click on `Create SealedSecret`.

3. Fill in a name for your secret. In this lab we'll create a secret with the name `my-access-token`.

4. Select the secret type. Because we're going to use `basic-auth` authentication, select `kubernetes.io/basic-auth`.

5. Add the secret `Encrypted data`. Add the following key-value pairs:

- `username=<your-github-account-name>`
- `password=<your-personal-access-token>`

6. Expand the `Metadata` section and add the following `Annotation`:

- Key: `tekton.dev/git-0`
- Value: `https://github.com`

7. Click `Submit`.

8. Click `Deploy changes`.

## Create Build

1. In the left menu, click on `Builds`.

2. Click on `Create Build`.

3. Fill in the name `my-private-repo` for your build and a tag (default tag is latest).

4. Choose `external` for the `Repository type`

5. Select `Private`.

6. Select the secret you created in the previous step (my-access-token) from the list.

7. Choose `Docker` and fill in the repo URL of your private Github repository.

8. Click `Submit`.

9. Click `Deploy changes`.

