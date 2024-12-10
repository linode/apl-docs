---
slug: daily
title: SRE Daily Routine
sidebar_label: Daily Routine
---

As an SRE you would like to keep your daily tasks to a minimum and be automatically informed on issues. App Platform offers the following tools to automate this:

- Prometheus is the main monitoring tool, and notifications will be triggered for issues that need attention

- Loki is used to collect cluster and container logs. Loki will only collect logs and not analyze them, it's up to the user to review the logs. Logs can help find issues that are invisible to monitoring systems

- Grafana is used to visualize metrics, it can help you analyze issues with performance. (Note that we don't use its alerting capabilities.) Its historical data can help in pinpointing resource conflicts over time

- Prometheus BlackBox exporter is a service probing tool used by Prometheus to periodically probe services over HTTP, TCP, UDP, and ICMP. When it receives non-valid responses it will trigger an alert

App Platform makes use of Slack (but MS Teams and email can also be configured) as the main notifications channel. Subscribe to the configured channels.

### Steps to perform

- [ONGOING] Keep a close eye on the #mon-\* channels in Slack, it will show all Alertmanager notifications
- [ONGOING] Proactively monitor things not automatically detected (see the following steps)

Since not everything is monitored it is necessary to log in to certain systems and look:

- Check k9s (or `kubectl top nodes`) for current cluster resource usage

- Check Grafana for cluster resource and disk usage

- Check Loki for stderr messages on the cluster

- Check if pods are restarting over and over

- Check if operators are working. (some operators stop working after a while, the Istio operator is an important component)

- Check for cluster events (`kubectl get events -A`) on all nodes and validate if any pods have issues

- [PERIODICALLY] Check if Prometheus (BlackBox) rules are correct

- [OPTIONAL] Check if a backup is available for state data
