---
slug: cli/
title: CLI Overview
sidebar_label: Overview
---

:::note ATTENTION: The new Otomi CLI is still in Beta!

A new install path will soon be made available

:::

## Prerequisites

If you are using bash version 3, then please please upgrade. Otomi CLI only supports Bash -ge version 4.

Upgrade on Mac OS:

```bash
brew install bash
```

## Install the CLI

```bash
wget https://raw.githubusercontent.com/redkubes/otomi-core/otomi-zx/binzx/otomi -O /usr/local/bin/otomi && chmod +x /usr/local/bin/otomi
```

Note: the image used is rather large, so this might take some time.

When the CLI is installed, run the following command to see if it works:

```bash
otomi --help
```

## Single run

```bash
bash <(wget -q -O- https://raw.githubusercontent.com/redkubes/otomi-core/otomi-zx/binzx/otomi) <COMMANDS HERE>
```
