---
slug: vision
title: Vision
---

## Kubernetes becoming the new foundation

The container space is slowly evolving from the wild west it used to be, into a landscape of governance, security reliability and thus trust. After many years of working with Kubernetes it is not hard to imagine it is becoming the foundation for (cloud native) software. That movement already started years ago. We can see that this new DIY architecture paradigm breeds a plethora of containerized solutions and suites offered. And that has become the new reality: too many (possibly good) things to choose from. But this also presents a new opportunity to us: to be able to quickly deploy and test solutions to see if they meets our needs.

## What to expect from a PaaS container service

First we have to look at containerization and its microservice way of working, as it has brought focus on the following areas:

1. **Observability**: State of the (parts of the) system now and over time. Metrics and logs, preferably correlated. Hopefully AI to help us monitor and make sense of it.
2. **Stateful storage**: Where to keep your crown jewels, and how to automate backups and failover.
3. **Application Configuration Management**: Kubernetes configuration and package management like Helm, Kustomize and others exist. We need to abstract configuration away from the solution for easier retrofitting and repeatability. Should be idempotently deployable as code (gitops).
4. **Policy enforcement**: Are the pieces and the players operating within governable constraints?
5. **Security**: What are the new security concerns when containerizing workloads?
6. **Continuous Deployment**: New platforms demand a new way of continuously deploying. And so does kubernetes. Think Helm charts, Knative services, GitOps push/pull.
7. **Single Sign On**: One Identity Provider could be used by a group of applications to authenticate its users and know their roles and permissions.
8. **Networking/service configuration**: Ingress flowing into the cluster's network. SSL termination. Routing logic and rules. Service governance.

When checking out a platform it makes sense to evaluate the solutions offered to the above problem spaces. Anything not handled out of the box can lead to a lot of hidden cost. And the solutions should be straightforward to use and not lock you in too much. Hot swapping solutions should be made easy.

## Our key principles

### 1. Honour open source projects

Don't reinvent the wheel.

Coming from developers working with the 12-factor app methodology, Otomi was designed to be open and flexible, embracing open source projects and inevitable change. The best way to do that is to avoid technical debt and contribute effort where it makes most sense: in these projects we've come to love and use. Many companies try to wrap open source building blocks into their own abstraction/experience, offering a unified interface to all these wonderful functionalities. This looks great, but this custom wiring/glueing creates huge technical debt. They are on their own when it comes to patching/updating these parts.

Embracing this new era of turnkey (point) solutions we decided instead to use those apps as is, and make them aware of the bigger context they serve in: a company of teams and users that have roles and permissions to work with them. Otomi ultimately is an integration platform that strives to make these open source apps work together.

### 2. Serve developers

Dealing with this multitude of applications and configuration it is of utmost importance to ease the developers workflow. They have to adopt this way of working, and so we aim for the following:

- No local installs: we eat our own dogfood and build tooling images to run our code in containers, so it behaves the same locally as in the cloud.
- Automate everything: input/output validation, testing, deployment, issue management. Limit errors and let developers focus on features.
- Less integration points: Easily add core apps or wire them together, abstracting configuration away to a single repository.
- Coding support: deliver jsonschema for validation in your favorite editor (vscode out of the box).
- API oriented: easily create openapi clients for tasks to do CRUD operations on the apps, giving autocompletion while developing.
- Sane configuration defaults: wherever possible, provide configuration for the most common use case(s).

Please continue to [our development journey](journey) to read about !
