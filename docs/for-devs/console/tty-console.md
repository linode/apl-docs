# TTY Console

This feature provides an easy and efficient way to access and manage your Kubernetes clusters directly from your browser, eliminating the need for complex VPN setups or external tools. This guide will walk you through the steps of using the TTY Console effectively.

## Table of Contents

1. [Introduction](#1-introduction)
2. [Getting Started](#2-getting-started)
3. [Using the TTY Console](#3-using-the-tty-console)
4. [Session Management](#4-session-management)

## 1. Introduction

### What is the TTY Console?

The TTY Console is a powerful feature in Otomi that provides a streamlined way to manage your Kubernetes clusters directly from your web browser. By integrating this feature, Otomi offers a convenient and efficient solution for Kubernetes management.

### Key Benefits

- **Simplified Access**: Access your Kubernetes cluster without the hassle of VPNs or additional tools.
- **Identity-Based Access**: Leverage your group membership from an Identity Provider, such as Azure AD, for secure access to your Kubernetes namespace.
- **Efficient Interface**: Utilize essential Kubernetes management tools and perform tasks seamlessly.

## 2. Getting Started

### Logging In

1. Log in to your Otomi account.
2. Upon successful login, you'll be directed to the platform dashboard.

### Accessing Your Kubernetes Namespace

1. Locate and click on the "Shell" option on the left-hand side of the dashboard.
2. You'll be connected to the TTY Console interface, granting direct access to your Kubernetes namespace.


## 3. Using the TTY Console

### Basic Commands and Shortcuts

- Utilize the `kubectl` command to interact with your Kubernetes cluster.
- Benefit from the convenient `k` shortcut for `kubectl` with bash-completion.
- Explore various tools, all available within the console:
    - **k9s**: Gain insights into your Kubernetes resources with an intuitive UI.
    - **Velero Cli**: Manage cluster backups effortlessly.
    - **Tekton Cli**: Monitor Project pipelines efficiently.
    - **Other Tools**: Tools like `jq`, `yq`, and `curl` are at your disposal for enhanced functionality.

### Working with Tmux

- If you're a Tmux enthusiast, enjoy the ability to create multiple windows and panes for multitasking.
- This feature enhances your productivity by allowing you to organize your workspace effectively.

## 4. Session Management

### Browser Crash Resilience

- The TTY Console is designed to be resilient in the face of browser crashes.
- If your browser unexpectedly crashes, your session remains intact.
- You can simply reopen the browser and resume your Kubernetes management tasks.

### Ending Sessions

- When you're finished with your Kubernetes management tasks, remember to properly end your session by clicking the recycle bin button on the top right of the TTY window. This will delete your session.
- Logging out of your session will also have the same effect 
