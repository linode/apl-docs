---
slug: development
title: Development
sidebar_label: Development
---

## 1. Editing source files

Most of the code is in go templates: helmfile's `*.gotmpl` and helm chart's `templates/*.yaml`. Please become familiar with it's intricacies by reading our [special section on go templating](https://github.com/redkubes/otomi-core/docs/GO_TEMPLATING.md).

For editing the `values-schema.yaml` please refer to the [meta-schema documentation](https://github.com/redkubes/otomi-core/docs/meta-schema-validation.md).

For working with `bats` and adding tests to `bin/tests/*` please refer to the [online bats documentation](https://bats-core.readthedocs.io/en/latest/)

You can define OPA policies in `policies/*/src.rego` and unit tests in `policies/*/src_test.rego` files that are used both for statical analysis (also at build time), as well as by [gatekeeper](https://github.com/open-policy-agent/gatekeeper) (at run time) to check whether manifests are conformant. Please read [more about our setup in the docs](https://github.com/redkubes/otomi-core/docs/policies.md).

## 2. Validating changes

For the next steps you will need to export `ENV_DIR` to point to your values folder, and source the aliases:

```bash
# assuming you created otomi-values repo next to this:
export ENV_DIR=$PWD/../otomi-values
. bin/aliases
```

### Input

Start by validating the configuration values against the `values-schema.yaml` with:

```bash
# all clusters
otomi validate-values
# For the next step you will also need to export`CLOUD` and `CLUSTER`, as it is only validating a configured target cluster:
otomi validate-values: 1
```

Any changes made to the meta-schema will then also be automatically validated.

### Output

You can check whether resulting manifests are conform our specs with:

```bash
# all clusters
otomi validate-templates
# For the next step you will also need to export`CLOUD` and `CLUSTER`, as it is only validating a configured target cluster:
export CLOUD=google CLUSTER=demo
otomi validate-templates 1
```

This will check whether any CRs are matching their CRDs, but also check for k8s manifest best practices using [kubeval](https://www.kubeval.com).

And to run the policy checks run the following:

```bash
# all clusters
otomi check-policies
# For the next step you will also need to export`CLOUD` and `CLUSTER`, as it is only validating a configured target cluster:
otomi check-policies 1
```

## 3. Diffing changes

To test changes in code against running clusters you will need to export at least `ENV_DIR`, `CLOUD` and `CLUSTER` and source the aliases:

After changing code you can do a diff to see everything still works and what has changed in the output manifests:

```bash
otomi diff
# or target one release:
otomi diff -l name=prometheus-operator
```

## 4. Deploying changes

It is preferred that deployment is done from the values repo, as it is tied to the clusters listed there only, and thus has a smaller blast radius. When you feel that you are in control and want fast iteration you can connect to a values repo directly by exporting `ENV_DIR`. It is mandatory and won't work without it. The CLI will also check that you are targeting `kubectl`'s `current-context` as a failsafe mechanism.

To deploy everything in the stack:

```bash
# target your cluster
export CLOUD=google && CLUSTER=demo
# and deploy
otomi apply
```

NOTICE: when on GKE this may sometimes result in an access token refresh error as the full path to the `gcloud` binary is referenced from GKE's token refresh mechanism in `.kube/config`, which is mounted from the host, but inaccessible from within the container. (See bug report: https://issuetracker.google.com/issues/171493249). Retrying the command usuall works, so do that to work around it for now.

It is also possible to target individual helmfile releases from the stack:

```bash
otomi apply -l name=prometheus-operator
```

This will first do a `diff` and then a `sync`. But if you expect the helm bookkeeping to not match the current state (because resources were manipulated without helm), then do a sync:

```bash
otomi sync -l name=prometheus-operator
```
