---
slug: universal-opa-policy-development
title: Universal OPA Policies Development
author: Alin Spinu
author_title: Developer @ Red Kubes
tags: [otomi, opa, gatekeeper, rego, security]
---

## Introduction

This is a story behind the trenches of writing **Rego** policies and how to unravel the cumbersome process of working with **Gatekeeper** vs **Conftest** for validating Kubernetes resources.

Working with policy compliant Kubernetes clusters is on the radar for a lot of companies these days, especially if you’re walking the path towards popular certifications like ISO/IEC 27001 for Information Security Management.

## Hands-on using OPA in Otomi Container Platform

As some of you probably already know, the Kubernetes native PodSecurityPolicy resource is going to be deprecated, see [Github](https://github.com/kubernetes/kubernetes/pull/97171) and [Google docs](https://docs.google.com/document/d/1VKqjUlpU888OYtIrBwidL43FOLhbmOD5tesYwmjzO4E/edit#) — this leaves way for external projects like Open Policy Agent to be used as the new standard for developing and enforcing policy rules.

Otomi is using OPA as the standard for providing policy enforcement because of the popularity and commitment to the Kubernetes community, ease of use and also for the future project development plans.

One of the key principles of Otomi Container Platform is that it is easy to use and provide clarity for integrations, allowing developers to easily extend any platform feature and provide integrated security for everything from the ground up.

## OPA ecosystem common knowledge

Decisions are handled by the means of **Admission Controllers** such as **OPA kube-mgmt** project or Gatekeeper, which I will touch upon in a minute, but also remember that we can validate things using **Rego query** language on any plain files using static analysis tools like Conftest. The list of supported Conftest formats include (but is not limited to): json, yaml, Dockerfile, INI files, XML, etc.Here’s the problem, Conftest and Gatekeeper are on the path of diverging. Although they speak the same REGO language, the two disagree on some aspects.

## In-Cluster vs Static Resources Policy Wars

Working in a policy constricted environment is like having “parental controls” turned on for unprivileged users, allowing administrators to decide what kind of resources and setup are safest for their flock of Kubernetes clusters. From an application developer’s perspective, being denied access to deploy some resources means that they are not adhering to the rules imposed for that environment and should decide to find and fix the missing links in this setup.

Policy administrators/developers on the other hand, struggle with finding the correct enforcement strategies and adjusting policy parameters according to desired state or allowing certain exclusions for cases where policy enforcement does not make sense. For example: system namespaces, cloud vendor specific namespaces or anything that should avoid intervention by default. There is no golden rule for policy adoption and you are in charge of overcoming your own mistakes if something is not right.

Let’s start with the simple use-case of running policy checks against any kind of YAML resource. Then I move forward with more details about in-cluster Kubernetes admission review objects.

## Conftest in action

With a simple command we can test if a helm chart is violating any rules in the provided policies folder.

```bash
$ helm template stable/keycloak | conftest test --policy ./policies/ --all-namespaces -
FAIL - Policy: container-limits - container <keycloak> has no resource limits
FAIL - Policy: container-limits - container <keycloak-test> has no resource limits
162 tests, 160 passed, 0 warnings, 2 failures, 0 exceptions
```

The generated yaml files are streamed into Conftest and policies are tested one by one.

By examining the log message, we can see that the container-limits policy is marking two resources as failures. Now all we have to do is modify the templates to provide a “sensitive” amount of resource limits to the indicated containers and our policy checks will pass successfully! Hooray

This is pretty useful if you want to adopt new helm applications, but don’t want to deploy anything to the cluster unless it’s well-examined for any violations. Conftest supports passing values to the policies using the –data option, which allows policy designers to configure different settings through parameters. Parameters can help us control any aspect of creating configurable rules for resources. I will return to that in a moment.

## Running Gatekeeper

Gatekeeper is becoming the new standard for implementing security policies in Kubernetes, endorsing a broad ecosystem to spread ideas. Enforcing policy decisions works by using a validating web-hook, intercepting any request authenticated by the api-server and checking if the request meets the defined policy  or rejecting it otherwise.

Trying to create a non-conformant resource object in a Gatekeeper enabled cluster results in an error with a message to explain the rejected request.

```bash
$ helm template charts/redis | kubectl apply -f -

secret/redis created
configmap/redis created
service/redis-master created
Error from server (
[denied by banned-image-tags] Policy: banned-image-tags - container <redis> has banned image tag <latest>, banned tags are {"latest", "master"}
[denied by psp-allowed-users] Policy: psp-allowed-users - Container redis is attempting to run as disallowed user 0. Allowed runAsUser: {"rule": "MustRunAsNonRoot"}
)
error when creating "redis/templates/redis-master-statefulset.yaml": admission webhook "validation.gatekeeper.sh" denied the request
```

As you can see, some of the resources get created, but the command fails with a denial from the admission webhook.

To make this resource valid, small tweaks to the image tag and securityContext fields will do the trick.

## Policy Development in Gatekeeper context

Similar to plain policy files which Conftest uses, Gatekeeper policy library works by loading into memory a collection of wrapped rego files in Kubernetes CRDs called ConstraintTemplates.

To enforce a policy for certain resource types we need to instantiate a Constraint (CR resource) which is acting like the blueprint with desired values or parameters.

Example Gatekeeper setup for Config and Constraint resources:

```yaml
--- # Gatekeeper Config
apiVersion: config.gatekeeper.sh/v1alpha1
kind: Config
metadata:
  name: config
  namespace: gatekeeper-system
spec:
  match:
    - excludedNamespaces:
        - gatekeeper-system
        - kube-system
      processes:
        - '*'
sync:
  syncOnly:
    - group: ''
      kind: Pod
      version: v1
--- # ContainerLimits Constraint
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: ContainerLimits
metadata:
  name: containerlimits
spec:
  match:
    kinds:
      - apiGroups:
          - apps
          - ''
        kinds:
          - DaemonSet
          - Deployment
          - StatefulSet
          - Pod
parameters:
  container-limits:
    enabled: false
    cpu: '2'
    memory: 2000Mi
```

So far this looks pretty easy . We decide to enable this policy for all namespaces except for “gatekeeper-system” & “kube-system” and Gatekeeper will test all our containers for resource limits.

Hold on.. Where is the definition for this policy? Rego Rules are defined in CRD files called ConstraintTemplates and they need to be deployed prior to the Constraint instance.

```yaml
--- # ConstraintTemplate for container-limits policy
apiVersion: templates.gatekeeper.sh/v1beta1
kind: ConstraintTemplate
metadata:
 name: containerlimits
spec:
 crd:
   spec:
     names:
       kind: ContainerLimits
     validation:        # Schema for the `parameters` field
       openAPIV3Schema:
...
targets:
- target: admission.k8s.gatekeeper.sh
 libs:
   - |-
     package lib.utils
     ...
 rego: |-
   package containerlimits
   ...
```

To simplify the example, we’ve cut out parts of our file, but you can also view it on the [Gatekeeper Library repo](https://github.com/open-policy-agent/gatekeeper-library/blob/master/library/general/containerlimits/template.yaml). The “rego” property is where the actual policy definition lives and any dependency libraries can be declared in the list of “libs”. We won’t go into how Rego rules for violations work now, but you can enjoy all the fun of learning a powerful query language inspired by decades old [Datalog](https://www.openpolicyagent.org/docs/latest/policy-language/).

## Planning for Unification

While the process of creating new policies seems to bear a lot of weight, luckily there is a simple CLI tool to speed up our work called Konstraint.

You can define the rules in Rego files and Konstraint will wrap our policy and all dependency libraries in the necessary CRD files for Gatekeeper. Konstraint has core library functions for working with all kinds of kubernetes native objects which makes it an indispensable tool for Rego development. OK, so this means we only care about writing Rego files and we can test them in both Gatekeeper and Conftest.

## Open Issues in OPA Community

While that is true, after delving deeper into the bowels of Gatekeeper and Conftest, we found conflicting design concepts which completely ruin this unified policy development mindset.

The way you can define parameters in two libraries is different, and Gatekeeper has a restrictive parser which does not allow arbitrary imports in the rego definition. There has been an attempt to change this hard limitation in a discussion [here](https://github.com/open-policy-agent/gatekeeper/issues/1046

## Current State of Unified Rego

To echo the subject once again, we are interested in reducing the boilerplate and simplify the process of developing Policies.

`[ Same Rego == different contexts ]`

Working with one common set Rego policy files and using the same source code for testing “static files”, generated from CI Builds or across any “Gatekeeping context”, where objects are created via the Kubernetes api. Let’s cut to the chase, and say we already made this happen, and delivered a working solution in Otomi. By using the available community tools, lots of integration work and a lot of customization additions. We now have a rich collection of policies and utility functions defined for our Kubernetes clusters . You can browse them in the [Otomi-core repository](https://github.com/redkubes/otomi-core/tree/master/policies/).

## How Istio is Mutating Objects in the Background

So by now, we understand all the nitty gritty details about Rego policies and Gatekeeper — but there will always be external factors, changing the state of the world and you can find yourself in a closed box situation, nowhere to go.

This situation becomes a nightmare when using Istio mesh for networking. In reality Istio is creating a “subspace” of resources by injecting a Sidecar container to all the pods in namespaces where service mesh communication is enabled. This kind of container is sometimes interfering with the security constraints design strategy.

## Otomi Policy Features

To create some flexibility, we have further extended the policy exceptions capabilities by examining granular annotation information for every resource under analysis.

Coming back to the Parameters idea described a while back, if Policy files can read resource files as raw input, why not allow certain exceptions through annotating which resources we want to skip checking, similar to the excludeNamespace option for Gatekeeper.

Rego has a rich built-in library system and is a powerful language, allowing us to easily create robust utility functions for this design.

To give an example, using the following annotations will allow entire pod or certain containers from the pod to exclude one or more policies:

```yaml
# Annotation for entire pod
policy.otomi.io/ignore: psp-allowed-repos
# Annotation for Istio sidecar based containers
policy.otomi.io/ignore-sidecar: psp-allowed-users,psp-capabilities
# Annotation for specific container (name=app-container)
policy.otomi.io/ignore/app-container: banned-image-tags
Another example of exclusion is to turn of the policy entirely by disabling it from the baseline settings:
# baseline configuration
policies:
 container-limits:
   enabled: false
   cpu: '2'
   memory: 2Gi
 banned-image-tags:
   enabled: false
   tags:
     - latest
     - master
 psp-host-filesystem:
   enabled: true
   allowedHostPaths:
     - pathPrefix: /tmp/
       readOnly: false
 psp-allowed-users:
   enabled: true
   runAsUser:
     rule: MustRunAsNonRoot
   runAsGroup:
     rule: MayRunAs
     ranges:
       - min: 1
         max: 65535
   supplementalGroups:
     rule: MayRunAs
     ranges:
       - min: 1
         max: 65535
   fsGroup:
     rule: MayRunAs
     ranges:
       - min: 1
         max: 65535
 psp-host-security:
   enabled: true
psp-host-networking-ports:
   enabled: true
psp-privileged:
   enabled: true
psp-capabilities:
   enabled: true
   allowedCapabilities:
     - NET_BIND_SERVICE
     - NET_RAW
 psp-forbidden-sysctls:
   enabled: true
   forbiddenSysctls:
     - kernel.*
     - net.*
     - abi.*
     - fs.*
     - sunrpc.*
     - user.*
     - vm.*
 psp-apparmor:
   enabled: true
   allowedProfiles:
     - runtime/default
     - docker/default
psp-selinux:
   enabled: false
   seLinuxContext: RunAsAny
psp-seccomp:
   enabled: false
   allowedProfiles:
     - runtime/default
psp-allowed-repos:
   enabled: true
   repos:
     - docker.io
     - gke.otomi.cloud
     - aks.otomi.cloud
     - eks.otomi.cloud
```

## Conclusion

To pin down the state of the landscape —  designing Kubernetes policies is still evolving towards new heights and I can image in the near future more and more projects sharing the same policies from a registry like the [policy-hub](https://github.com/policy-hub/policy-hub-cli).

We think creating a common understanding about unified Rego is the key to a sunny future.

This article was originally posted by Alin Spinu on [Medium](https://spinualin.medium.com/universal-opa-policies-development-a3f88226e3d5).
