---
id: configuring-service
title: Configuring services
---

This page is for documenting how to create a service, and how to edit a service. Both creating and editing a service use
the same form.

**Name** Fill in a name

**Cluster ID** Cluster ID to use.

**Exposure** Two options: Private, or 'Public URL'.

## Public URL

Boolean: Use suggested domain  
Textfield: Host  
Textfield: DNS Zone  
Boolean: Authenticate with Single Sign On  
Boolean: Already has a certificate

## Private

No options for private yet.

**Type:**  
Three options: Knative service, Existing Knative service, Existing Kubernetes service

## Knative Service

Textfield: Container image repository  
Textfield: Container image tag

**Environment variables:**  
Here you can add an unlimited amount of items.  
Item textfield: name  
Item textfield: value

**Pod resources**

**Requests:**  
Textfield: cpu (the guaranteed amount of CPU)  
Textfield: memory (the guaranteed amount of RAM)

**Limits:**  
Textfield: cpu (the maximal amount of CPU)  
Textfield: memory (the maximal amount of RAM)

**Pod annotations:**  
Kubernetes annotations with arbitrary metadata  
Here you can add an unlimited amount of items  
Item textfield: name  
Item textfield: value

## Existing Knative Service

## Existing Kubernetes Service
