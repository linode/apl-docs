---
slug: lab-16
title: Check for threads
sidebar_label: Lab 16
---
:::info
Prerequisite: For this lab, Falco needs to be activated.
:::

When the platform administrator has enabled Falco, you might like to check and see if any threads are detected in your workloads. When the administrator has enabled Falco on the platform level, each team will automatically get access to a Detected threads dashboard in Grafana.

## View detected threads

- Open the Grafana app

- Click on `Dashboards` / `Browse`

- In the list of dashboards you will see a dashboard called `Detected Threads`. Click on it

- Now you will see the following dashboard, showing all the detected threads in your team workloads


![detected-threads](../../img/detected-threads.png)

To learn more about the detection rules, see the complete list of all the rules [here](https://github.com/falcosecurity/rules/blob/c558fc7d2d02cc2c2edc968fe5770d544f1a9d55/rules/falco_rules.yaml).



