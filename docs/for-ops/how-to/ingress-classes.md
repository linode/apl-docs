---
slug: ingress-classes
title: Manage Ingress Controllers
---

Exposure (ingress) for all services (included exposure for platform services) is handeled by the default platform ingress class using a public (cloud) load balancer. It is also possible to use multiple ingress classes. Each class will get a dedicated ingress controller. In case of a security requirement, where platform services are not allowed to be exposed publicly, the default platform class can be configured to use a private load balancer instead of a public one by adding the required annotations. Additional (public) ingress classes can be created to expose team (application) services.

## prerequisites

- Access to the internal subnet (using a VPN or a Jumphost) when using a private load balancer.

## Steps

Steps to change to use a private load balancer for exposing platform services:

If there are no Team services created that use the default platform class, then you can skip step 2.

### Create an additional public ingress class

1. Go to Ingress Classes under Settings in the web UI.

2. Under `additional classes` click on `add item`.

3. Provide a name for the additional ingress class (for example `teams`).

4. (optional) If you need to add specific annotations to Configure the Load Balancer by applying annotations to the Service resource, Click on `Add Item` and add the required annotations.

5. (optional) If you would like to use a static (public) IP for the load balancer, then fill in the IP address.

6. (optional) If you need to whitelist source IP address ranges, add the CIDR in the `Source IP address filtering` field.

7. Click `submit`.


### Move all existing Team Services to use the new ingress class

1. Go to `services`, click on the service you would like to move to the new ingress class.

2. Under `Exposure Ingress`, fill in the name of the new ingress class in the `ingress class name` field.

3. Click `submit`.


### Change the platform class from public to private

1. Go to Ingress Classes under Settings in the web UI.

2. Under `Platform class`, add the required `annotations`:

For Azure:

- `service.beta.kubernetes.io/azure-load-balancer-internal: "true"`
- `service.beta.kubernetes.io/azure-load-balancer-internal-subnet: <lb-subnet>`

For AWS:

- `service.beta.kubernetes.io/aws-load-balancer-internal: true`

For GCP:

- `networking.gke.io/load-balancer-type: "Internal"`

4. Click `submit`.


### Cloud provider specific annotations

Add the following annotations when using:

#### AWS

- `service.beta.kubernetes.io/aws-load-balancer-proxy-protocol: '*'`

#### Azure

- `service.beta.kubernetes.io/azure-load-balancer-resource-group: <resource-group-name>`

#### Digital Ocean

- `service.beta.kubernetes.io/do-loadbalancer-enable-proxy-protocol: true`
