---
slug: ingress-classes
title: Manage Ingress Controllers
---

When Otomi is installed, exposure (ingress) for all services (included exposure for platform services) is handeled by the default platform ingress class using a public (cloud) load balancer. Otomi offers the option to use multiple ingress classes. Each class get a dedicated ingress controller. In case of security requirements, where platform services are not allowed to be exposed publicly, the default platform class can be configured to use a private load balancer instead of a public one. Additional (public) ingress classes can be created to expose team (application) services.

## prerequisites

- Access to the internal subnet (using a VPN or a Jumphost)
- `cluster.provider=azure`

## related documentation

- [Azure AKS, create internal load balancer](https://docs.microsoft.com/en-us/azure/aks/internal-lb)

## Steps

Steps to change to use a private load balancer for exposing platform services:

If there are no team services created that use the default platform class, then you can skip step 2.

1. Create an additional public ingress class

- Go to Ingress Classes under Settings in the web UI
- Under `additional classes` click on `add item`
- Provide a name for the additional ingress class (for example `teams`)
- Use the public load balancer type
- (optional) If you would like to create a new load balancer in another resource group, fill in the name of that resource group
- (optional) If you would like to use a static (public) IP for the load balancer, then fill in the IP address. More information about using static IP addresses can be found [here](https://docs.microsoft.com/en-us/azure/aks/static-ip)
- Click submit and then deploy changes

2. Move all existing team services to use the new ingress class:

- Go to `services`, click on the service you would like to move to the new ingress class
- Under `Exposure Ingress`, fill in the name of the new ingress class in the `ingress class name` field.
- Click submit and then deploy changes

3. Change the platform class from public to private:

- Go to Ingress Classes under Settings in the web UI
- Under `Platform class`, select `private`
- (optional) If you would like to use a static IP for the load balancer, then fill in the IP address

By default the internal load balancer is is created in the node resource group and connected to the same virtual network as the AKS cluster. If you would like to use a different resource group and subnet, fill in the Resource Group name and the subnet.

- Click submit and then deploy changes

When the platform ingress class has been configured to use an internal load balancer, Otomi will add the following annotations to the K8s load balancer service of the platform ingress controller:

```yaml
service.beta.kubernetes.io/azure-load-balancer-resource-group: {{ . }}
service.beta.kubernetes.io/azure-load-balancer-internal: "true"
service.beta.kubernetes.io/azure-load-balancer-internal-subnet: "{{ . }}"
```


