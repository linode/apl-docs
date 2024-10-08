---
slug: external-dns
title: External-DNS
sidebar_label: ExternalDNS
---

## About

ExternalDNS is required to make public service domains accessible by registering them with the loadbalancer IP address. When externalDNS is not enabled, [nip.io](https://nip.io) will be used.

The use of ExternalDNS is a prerequisite for using the following features:

- Harbor private registries for teams.

- The Builds self-service feature in the Console (relies on Harbor).

- The Projects self-service feature in the Console (relies on Harbor).
