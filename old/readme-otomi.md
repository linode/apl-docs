<p align="center"><img src="https://otomi.io/img/otomi-logo.svg" width="40%" align="center" alt="Otomi"></p>

# Otomi

![Build Status](https://img.shields.io/github/workflow/status/redkubes/otomi-core/Build%20and%20publish%20Docker) ![Downloads](https://img.shields.io/github/downloads/redkubes/otomi-core/total) ![Docker Image Version (latest semver)](https://img.shields.io/docker/v/otomi/core?sort=semver) ![Crates.io](https://img.shields.io/crates/l/ap) ![GitHub last commit](https://img.shields.io/github/last-commit/redkubes/otomi-core) ![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

The easiest way to turn Kubernetes into a full blown container platform. Get started at [otomi.io](https://otomi.io/)

## About Otomi

Otomi offers an Operating System experience for Kubernetes:

- One install
- An intuitive UI (desktop environment) offering developer self-service to provide access to build-in applications and hiding the Kubernetes internals
- Ready to use built-in applications: Otomi includes pre-configured and ready to use applications like Harbor, Prometheus, Grafana, Loki, HashiCorp Vault, Open Policy Agent, KeyCloak, Jaeger, Kiali and more
- An out of the box experience: After installing Otomi, a user can log in and start deploying and managing containerized apps and use all build-in applications

Next to this, Otomi includes:

- Application configuration management for all integrated applications, providing a (multiple layer) base overlay configuration
- Multi-tenancy: Create teams and provide SSO access to team and shared applications
- Implemented policies for better governance and security. Manifests are checked both statically and on the cluster at runtime for obedience to policies
- Single Sign On: Bring your own IDP
- Automatic ingress configuration: Easily configure ingress for team services or core apps, allowing access within minutes. Istio gateways and virtual services are automatically generated and configured for team services, tying a generic ingress architecture to service endpoints in a predictable way
- Input/output validation: Configuration and output manifests are checked statically for validity and best practices
- Automatic vulnerability scanning: Scan all configured team service containers in Harbor

Otomi aims to support the most common DevOps use cases out-of-the-box and strongly relies on GitOps patterns, where desired state is reflected as code and the cluster state is automatically updated.

Otomi consists out of multiple projects:

- Otomi Core (this project): The heart of Otomi
- [Otomi API](https://github.com/redkubes/otomi-api): The brain of Otomi, handling console input and talking to Otomi Core
- [Otomi Console](https://github.com/redkubes/otomi-console): The UI of Otomi for admins and teams, talking to Otomi API
- [Otomi Tasks](https://github.com/redkubes/otomi-tasks): Autonomous jobs orchestrated by Otomi Core
- [Otomi Clients](https://github.com/redkubes/otomi-clients): Factory to build and publish openapi clients used in the redkubes/otomi-tasks repo

Learn more about Otomi at [otomi.io](https://otomi.io/about).

## Get started

Add the Otomi Helm repository:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

Install the chart with the prepared `values.yaml` file.

```bash
helm install -f /path/to/values.yaml my-otomi-release otomi/otomi
```

Open the Console:

```bash
open -a "Google Chrome" https://otomi.<your.domain>
```

<p align="center"><img src="https://otomi.io/assets/images/ce-platform-apps-2f2ca904b17f827e002e8c0d6eaf2470.png" width="100%" align="center" alt="Otomi console CE"></p>

For more detailed documentation on how to get started with Otomi, see [otomi.io](https://otomi.io/).

## Contribution

If you wish to contribute please read our [Contributor Code of Conduct](https://otomi.io/community/code-of-conduct) and [Contribution Guidelines](https://otomi.io/community/get-involved).
