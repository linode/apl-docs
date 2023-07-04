---
slug: drone
title: Drone
sidebar_label: Drone
---

Otomi uses Drone to deploy changes from the values repo. As such, it is installed and configured by default. When no source control is configured, Otomi will deploy Gitea as Drone's git hosting dependency.

You may use Otomi's Drone for other purposes if desired.

## Configuration values

### Source control

Configure Drone to use another Git repository for `otomi-values`. The following sGit services are supported:

- Bitbucket cloud
- Bitbucket server
- Gitea (external)
- Git hub
- Git lab
- Gogs

### Debug

Turns on debugging in Drone.

### Tracing

Turns on tracing in Drone

### Resources

Adjust default provided resource requests and limits for Drone Runner, Drone Server and Drone Agent