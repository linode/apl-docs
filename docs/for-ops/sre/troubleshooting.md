---
slug: troubleshooting
title: SRE Troubleshooting Checklist
sidebar_label: Troubleshooting
---

## Pods not starting

Pods that are unable to start do not show any log output, the issue is related to k8s. Look for a pod with status Pending. Most of the time this is related to resources and container component issues.

- Describe the pod, look closely at listed events
- Is the image pullable? Is there a pull secret configured?
- Can volumes, configmaps and secrets be mounted?
- Check resource requests: is the requested resource available?
- Are commands and arguments correct? (make sure to use /bin/sh -c as command to use ENV)
- Does the cluster have enough resources available?

### Advanced

- Check affinity and node selector rules
- Is the image tag valid and compatible with the host CPU? (exec format error)
- Check namespace quotas for pod, cm or secret limits etc.
- Check service account and permissions
- Is the pod a job, deployment, daemonset or statefulset?
- Is there a limitrange configured in the namespace?
- Is the template spec in the pod matching the running container?

## Pods not running

Pods that are running but restart for whatever reason indicate that a container itself is having issues. Look for pod status `Crashloop, OOMkilled` or `incomplete ready status (2/3)`

- Check if dns resolving works
- Are the required services available to the pod?
- Check restart count and inspect logs and previous logs
- Check if istio injection is required and working
- Is a lifecycle spec configured?
- Does the container depend on sidecar containers?
- Check for available resources requests
- Check readiness and liveness probes
- Does the pod have enough CPU resources to do it's job?
- Inspect the restart counter for the pod, a high value (32+) indicates an unstable pod

### Advanced

- Check pod's service account permissions
- Attach shell and inspect container status
- Rootless containers need special care combined with volumes
- Check securitycontext and pod security policy
- Check volume permissions

## Network services not working

Pods are working but a user can't connect to the service. Most HTTP-based services use an Ingress object, non HTTP services require a service port to be defined.

Network policies or Istio policies can deny pods from communicating, note that DNS resolving is required for normal operation.

- Check if network policies are too strict by removing suspect one(s) (if so report an issue to have it/them refactored, if not put back)
- Use `kubectl port-forward` to debug pod service on lowest level
- Check if kube-dns / coredns pods are working in kube-system namespace
- Check invalid DNS names, too long (64+) or invalid characters
- Attach a shell and perform basic nslookup or ping commands (ping doesn't work between internal services in k8s)
- Confirm that services do not mix http and https in frontend and backend
- Service names matter, prefix accordingly with http- or https- for istio to recognize
- Validate ingress, istio gateway, virtual service and services

### Advanced

- heck for network policies
- Validate istio pods are working
- Check if istio injection is configured and working
- Validate istio-operator working
- Run `istioctl analyze`

## Istio issues

Istio sidecars manipulate the container's network to reroute traffic. A namespace can have an Istio sidecar policy indicated by a label, the same is valid for a deployment or pod. Make sure you see Istio sidecars running when applicable (indicated by the 3/3 Ready status).

- Check if istio-operator is working
- Check logs for istiod pods
- Are services correctly named? (istio treats http- prefix and https- prefix differently)
- Check logs for istio sidecar proxy
- Check if mtls is enabled and working

### Advanced

- Is the correct service account configured?
- Is Istio mTLS enabled and configured correctly?
- Turn on logging for a context of an istio sidecar: `ksh exec -it $container_id -c istio-proxy -- sh -c 'curl -k -X POST localhost:15000/logging?jwt=debug'`

## DNS issues

The external-dns service is registering DNS names to makes sure that the service names are publicly available.

- Make sure external-dns logs indicate All records are already up to date
- Are the credentials configured correctly?

## Certificate issues

- Check cert-manager working
- Run `kubectl describe orders.acme.cert-manager.io -A`
- Run `kubectl describe challenges.acme.cert-manager.io -A`
- Run `kubectl describe certificates.cert-manager.io -A`

## Storage issues

Check available storage classes `std` and `fast` exist

### Advanced

- Describe pv and pvc, check if pv's are `rwo` or `rwx` and look for conflicts
- Check if container expects or `rwx` pv

## Contact support (Enterprise subscription required)

In case (after troubleshooting) the customer discovers one of the Otomi functions is not working as expected, an issue can be reported. When reporting an issue the following information needs to be provided:

- Is the function not working in only a single case, or in all cases?
- Which function is not working?
- Which remediation activities have been performed?
- kubeLog output of the container(s) supporting this function

In case the issue is caused by a bug in one of the Otomi features, then Red Kubes will provide a fix within at least 24 hours.
