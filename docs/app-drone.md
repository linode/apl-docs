---
slug: apps/drone
title: Working with Drone
sidebar_label: Drone
---

Drone CI is a build tool. The most prominent feature of Drone is that it uses containers for everything. Every stage in a complex pipeline in Drone is performed through a Docker container. This offers a great deal of flexibility when it comes to using several tools and/or environments for build and deployment needs. Drone CI must integrate with a Git repository to function correctly.

Drone CI uses YAML files to get its instructions. The instructions file is checked in the repository with the rest of the application code. Otomi installs and configures Drone by default and provides a instructions file (pipeline definition) for synchronization with the otomi/values in Gitea.
