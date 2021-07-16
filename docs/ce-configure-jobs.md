---
slug: ce/jobs
title: Configuring Jobs in CE mode
sidebar_label: Jobs
---

When you are running Otomi in CE mode, you will operate on the values directly and have to commit them manually. This page describes how to create a Job when running in CE mode. Before you can create an Otomi Job, make sure a [Team](/docs/ce/teams) is created first.

A [Job](/about/architecture#jobs) in Otomi is a feature for easy deployment of Kubernetes Jobs.

2 types of Jobs are supported:

- [Jobs](#create-a-job)
- [CronJobs](#create-a-cronjob)

## Create a Job

To create a Job open the `jobs.<team-name>.yaml` file in `/env/teams/`.

The next code example creates a Job in the team demo:

```yaml
teamConfig:
  teams:
    otomi:
      jobs:
        - name: hello-world # the name of the job
          type: Job
          enabled: true # select to enable the job. If not enabled, the Job will nopt be executed.
          runPolicy: OnSpecChange # the job controller will only be re-deployed if one changes this specification
          script: |
            #!/usr/bin/perl
            use strict;
            use warnings;
            print "Hello World";
          ttlSecondsAfterFinished: 86400 # Time To Live after job is finished in seconds. Will be removed afterwards.
          image: # the image used to execute the script of the job
            repository: perl
            tag: latest
          resources:
            limits:
              cpu: 50m
              memory: 64Mi
            requests:
              cpu: 50m
              memory: 64Mi
```

# Create a CronJob

To create a CronJob open the `jobs.<team-name>.yaml` file in `/env/teams/`.

The next code example creates a CronJob in the team demo:

```yaml
teamConfig:
  teams:
    otomi:
      jobs:
        - name: hi-world # the name of the job
          type: CronJob
          enabled: true # select to enable the job. If not enabled, the Job will nopt be executed.
          runPolicy: OnSpecChange # the job controller will only be re-deployed if one changes this specification
          schedule: 0 1 * * *
          script: |
            #!/bin/sh
            echo Hi World
          ttlSecondsAfterFinished: 86400 # Time To Live after job is finished in seconds. Will be removed afterwards.
          image: # the image used to execute the script of the job
            repository: busybox
            tag: 1.28
          resources:
            limits:
              cpu: 50m
              memory: 64Mi
            requests:
              cpu: 50m
              memory: 64Mi
```

## Validate changes (optional)

Use Otomi CLI to validate the changes in the values based on the Otomi values schema:

```bash
otomi validate-values
```

Use `-v` to get more output (or `-vvv` to get even more output). When successful, the output will show: `otomi:validate-values:verbose Values validation SUCCESSFUL`

## Deploy changes

Apply the changes:

```bash
otomi apply
```
