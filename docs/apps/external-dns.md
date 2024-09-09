---
slug: external-dns
title: External-DNS
sidebar_label: ExternalDNS
---

## About

External-dns is required to make public service domains accessible by registering them with APL's front loadbalancer CNAME or IP address. When it is not enabled (default) APL will instead rely on [nip.io](https://nip.io) to create host names for all services.

The use of external-dns is a prerequisite for using the following features:

- Harbor private registries for teams.

- The Builds self-service feature in APL Console (relies on Harbor).

- The Projects self-service feature in APL Console (relies on Harbor).