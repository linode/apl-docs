---
slug: console/settings/home
title: Home
---

The Home settings section is similar to the [Alerts](alerts) section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. Those will become active when `otomi.isHomeMonitored` is turned on. This allows for a 3rd party to also monitor the system. This comes in handy when setting up Otomi as a managed service for clients that want to receive notifications themselves. We consider "Home" to be the managing party, and the regular "Alerts" section should then only contain endpoints for the client. Of course teams can still configure their own endpoints for the alerts spawning from their team namespace.
