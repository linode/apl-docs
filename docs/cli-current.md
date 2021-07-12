---
slug: cli/current
title: Work with the current Otomi CLI
sidebar_label: Current Otomi CLI
---

:::note ATTENTION: The cutrent Otomi CLI will soon be deprecated!

:::

## Use Otomi CLI

To use the Otomi CLI, run the following command:

```bash
docker run --rm -e ENV_DIR=$PWD -v $PWD:$PWD otomi/core:latest
```

and then source the CLI aliases:

```bash
. bin/aliases
```
