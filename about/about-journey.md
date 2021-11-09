---
slug: journey
title: Our development journey
sidebar_label: Journey
---

Kubernetes offers a cli to send manifests over the wire for clusters to accept or reject. From a developers perspective, it offers nothing to build or help structuring these manifests. So what do you use to manage your manifests?

### Helm

After having worked with helm charts for a long time this seemed like a natural fit for a k8s package manager. We also saw that we wanted to consolidate the charts into our own repo, offering control, predictability and enabling offline installs.

### Helmfile

However, we quickly realized we needed a solution to provide variations of the chart values. When you have multiple clusters for different purposes, differences in environment (i.e. dev vs prod) become a differentiating factor. After reviewing the solutions at the time (jsonnet, helmfile) we decided to stay with Go templating and go for [Helmfile](https://github.com/roboll/helmfile). This offered us all the flexibility to achieve what we want: describing stateful configuration while abstracting away the input. Looking back we are glad to have made this choice, and still believe nothing else comes this close to meet our needs. (Only recently was a small helper tool added to k8s core: kustomize. This is however just a small utility, and it does not offer templating.)

After having worked with Helmfile however, we discovered that it offered no real best practices when it comes to coding and management, and might be too flexible to come up with a decent architecture. Some setups in the wild had some degree of sanity, but none offered the developers experience we really wanted. After many evolutions organizing our helmfile architecture we settled on something that we are still very happy with. It uses Helmfile's alphabetic ordering and reminds of a Unix runlevel.

### Layered yaml configuration

When modeling configuration for different clusters you come to understand what is shared, and what is unique per cluster. Knowing that helmfile is designed to merge layered yaml files, we settled for a file structure that resembles this understanding. From generic to specific, this made the configuration as [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) as we could, limiting human error.

### Values repo

In the beginning we used our monorepo as is, and kept all the configuration in there as well. But why not make the monorepo stateless itself? And extract the fast moving values to an external storage solution? That offered us the possibility to package up the entire monorepo in a container, and version it. This not only resulted in a clean simple setup in the monorepo with only Go templating, but now we have an external repo with yaml configuration that is extremely suitable for GitOps.

From a developers perspective, having made this seperation of concerns made a lot of sense. Only values exist in the repo, so auditing the trail of changes becomes easy. Just look at the commit diff. The core is now essentially a product (albeit one of many parts with lots of glue) that can evolve over time.

### GitOps with Drone

After having automated the delivery of our monorepo as a docker image, we could finally automate GitOps deployment. However, after having worked with Weave Flux extensively, we came to see that most of these GitOps solutions are an overkill to what we need, and do not support our DRY way of working. Most of the GitOps solutions out there make you use custom resources to tell you what to sync and what not, making you build and maintain a lot of glue to do what should be very easy. We just want to apply changing values using versioned artifacts. We don't want to keep code in sync, just configuration.

So we decided to keep it simple (stupid) and use good old Drone, which is triggered by git webhook to just do what we, as developers do: deploy the changed motherload to the cluster that is interested in receiving those changes. We did not have to deviate from the developers workflow, and could even model it the same way, using the same tooling.

One thing that we don't like about it: it is webhook based (push), and does not retry when the hook is not working. We will soon have a solution that allows for periodic syncing.

### Single Sign On with Keycloak

We were using [oauth2-proxy](https://github.com/oauth2-proxy/oauth2-proxy) from the beginning, and were able to use it for SSO just fine, for a while. We had enabled a lot of OIDC aware applications when we started seeing the beauty of normalizing an OIDC JWT's payload. This would allow applications to just consume the provided JWT without having to run a client to talk to the IdP. That is how we chose to put [Keycloak](https://www.keycloak.org) in between oauth2-proxy and external IdPs, because it is very good at that. It has lots of knobs and settings to talk to exotic IdPs and translate incoming properties and claims.

### Running tasks

Since we are effectively configuring open source applications, we needed a way to run [tasks](https://github.com/redkubes/otomi-tasks/) at the right moments in the deployment lifecycle. Example: Keycloak needs to be told how applications can reach it, before any of the crucial ones actually do. Istio won't forward a request when it is told to authenticate but can't reach Keycloak.

To be able to easily generate openapi typescript clients for tasks to talk to the applications, we have also created a small repo named [otomi-clients](https://github.com/redkubes/otomi-clients/). We were already using typescript for our NodeJS API and Console UI, so this was an easy choice for us.

### Test and validate everything

After unknowingly delivering breaking changes too many times, we went all the way and decided to validate all input and output as best as we can.

#### **Input checks**

We introduced a jsonschema validation routine that can be used statically by your editor (in VSCode this works out of the box), but is also used pre-commit to avoid broken configuration.

#### **Output checks**

After having settled for [OPA](https://www.openpolicyagent.org) as our policy management solution, we came up with an elaborate approach to have Universal OPA Policies (akin to Universal Javascript). We crafted a mix of [Conftest](https://www.conftest.dev) and custom CRD/CR extraction routines to check if all the manifests are adhering to k8s best practices and the OPA policies we settled for. This allows not only for static validation, but also for OPA gatekeeper to uphold these same policies on the cluster.

## Smooth sailing

Having built a very flexible and easily approachable development platform for kubernetes solutions, we can truly say we are now smooth sailing. We just keep building out the functionality in the core, and expose more and more configuration for values to manipulate.

Of course there are sometimes unforeseen waves rocking our boat, and we try to be ready for when they come. We invite you to look at our [roadmap](roadmap) to see potential problems we have identified so far, but also the opportunities waiting to land.
