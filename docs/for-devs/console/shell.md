---
slug: shell
title: Shell (TTY Console)
sidebar_label: Shell
---

The Shell feature allows to start a web based shell in Console with Kube API access. When starting a shell, a dedicated shell instance will be started for the user. The shell includes the following tools:

- [Kubectl](https://kubernetes.io/docs/reference/kubectl/)
- [K9s](https://k9scli.io/)
- [Tekton CLI](https://tekton.dev/docs/cli/)

When running the shell as a member of a team, the shell will allow only provide acccess to resources in the team namespace.

The Shell provides an easy and efficient way to access and manage Kubernetes resources directly from your browser, eliminating the need for complex VPN setups or external tools. This guide will walk you through the steps of using the TTY Console effectively:

- **Simplified Access**: Access your Kubernetes cluster without the hassle of VPNs or additional tools.

- **Identity-Based Access**: Leverage your group membership from an Identity Provider, such as Azure AD, for secure access to your Kubernetes namespace.

- **Efficient Interface**: Utilize essential Kubernetes management tools and perform tasks seamlessly.

## Using the Shell

1. Log in into the APL Console.

2. Click on the "Shell" option in the left menu.

3. You'll be connected to the TTY Console interface, granting direct access to the Kubernetes namespace of the Team.

### Basic Commands and Shortcuts

- Utilize the `kubectl` command to interact with your Kubernetes cluster.

- Benefit from the convenient `k` shortcut for `kubectl` with bash-completion.

### Integrated CLI tools

The Shell comes with a set of integrated CLI tools:

- **k9s**: Gain insights into your Kubernetes resources with an intuitive UI.

- **Tekton ClI**: Monitor Project pipelines efficiently.

- **Other Tools**: Tools like `jq`, `yq`, and `curl` are at your disposal for enhanced functionality.

### Working with Tmux

- If you're a Tmux enthusiast, enjoy the ability to create multiple windows and panes for multitasking

- This feature enhances your productivity by allowing you to organize your workspace effectively

## Session Management

### Browser Crash Resilience

- The TTY Console is designed to be resilient in the face of browser crashes.

- If your browser unexpectedly crashes, your session remains intact.

- You can simply reopen the browser and resume your Kubernetes management tasks.

### Ending Sessions

- When you're finished with your Kubernetes management tasks, remember to properly end your session by clicking the recycle bin button on the top right of the TTY window. This will delete your session.

- Logging out of your session will have the same effect.
