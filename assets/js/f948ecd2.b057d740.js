"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1970],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(o),p=a,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return o?n.createElement(f,r(r({ref:t},c),{},{components:o})):n.createElement(f,r({ref:t},c))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5890:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],s={slug:"journey",title:"Our development journey",sidebar_label:"Journey"},l=void 0,u={unversionedId:"about-journey",id:"about-journey",title:"Our development journey",description:"Kubernetes offers a cli to send manifests over the wire for clusters to accept or reject. From a developers perspective, it offers nothing to build or help structuring these manifests. So what do you use to manage your manifests?",source:"@site/about/about-journey.md",sourceDirName:".",slug:"/journey",permalink:"/about/journey",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-journey.md",tags:[],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1649669732,formattedLastUpdatedAt:"4/11/2022",frontMatter:{slug:"journey",title:"Our development journey",sidebar_label:"Journey"},sidebar:"about",previous:{title:"Vision",permalink:"/about/vision"},next:{title:"Architecture",permalink:"/about/architecture"}},c={},d=[{value:"Helm",id:"helm",level:3},{value:"Helmfile",id:"helmfile",level:3},{value:"Layered yaml configuration",id:"layered-yaml-configuration",level:3},{value:"Values repo",id:"values-repo",level:3},{value:"GitOps with Drone",id:"gitops-with-drone",level:3},{value:"Single Sign On with Keycloak",id:"single-sign-on-with-keycloak",level:3},{value:"Running tasks",id:"running-tasks",level:3},{value:"Test and validate everything",id:"test-and-validate-everything",level:3},{value:"<strong>Input checks</strong>",id:"input-checks",level:4},{value:"<strong>Output checks</strong>",id:"output-checks",level:4},{value:"Smooth sailing",id:"smooth-sailing",level:2}],h={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kubernetes offers a cli to send manifests over the wire for clusters to accept or reject. From a developers perspective, it offers nothing to build or help structuring these manifests. So what do you use to manage your manifests?"),(0,i.kt)("h3",{id:"helm"},"Helm"),(0,i.kt)("p",null,"After having worked with helm charts for a long time this seemed like a natural fit for a k8s package manager. We also saw that we wanted to consolidate the charts into our own repo, offering control, predictability and enabling offline installs."),(0,i.kt)("h3",{id:"helmfile"},"Helmfile"),(0,i.kt)("p",null,"However, we quickly realized we needed a solution to provide variations of the chart values. When you have multiple clusters for different purposes, differences in environment (i.e. dev vs prod) become a differentiating factor. After reviewing the solutions at the time (jsonnet, helmfile) we decided to stay with Go templating and go for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/roboll/helmfile"},"Helmfile"),". This offered us all the flexibility to achieve what we want: describing stateful configuration while abstracting away the input. Looking back we are glad to have made this choice, and still believe nothing else comes this close to meet our needs. (Only recently was a small helper tool added to k8s core: kustomize. This is however just a small utility, and it does not offer templating.)"),(0,i.kt)("p",null,"After having worked with Helmfile however, we discovered that it offered no real best practices when it comes to coding and management, and might be too flexible to come up with a decent architecture. Some setups in the wild had some degree of sanity, but none offered the developers experience we really wanted. After many evolutions organizing our helmfile architecture we settled on something that we are still very happy with. It uses Helmfile's alphabetic ordering and reminds of a Unix runlevel."),(0,i.kt)("h3",{id:"layered-yaml-configuration"},"Layered yaml configuration"),(0,i.kt)("p",null,"When modeling configuration for different clusters you come to understand what is shared, and what is unique per cluster. Knowing that helmfile is designed to merge layered yaml files, we settled for a file structure that resembles this understanding. From generic to specific, this made the configuration as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY")," as we could, limiting human error."),(0,i.kt)("h3",{id:"values-repo"},"Values repo"),(0,i.kt)("p",null,"In the beginning we used our monorepo as is, and kept all the configuration in there as well. But why not make the monorepo stateless itself? And extract the fast moving values to an external storage solution? That offered us the possibility to package up the entire monorepo in a container, and version it. This not only resulted in a clean simple setup in the monorepo with only Go templating, but now we have an external repo with yaml configuration that is extremely suitable for GitOps."),(0,i.kt)("p",null,"From a developers perspective, having made this seperation of concerns made a lot of sense. Only values exist in the repo, so auditing the trail of changes becomes easy. Just look at the commit diff. The core is now essentially a product (albeit one of many parts with lots of glue) that can evolve over time."),(0,i.kt)("h3",{id:"gitops-with-drone"},"GitOps with Drone"),(0,i.kt)("p",null,"After having automated the delivery of our monorepo as a docker image, we could finally automate GitOps deployment. However, after having worked with Weave Flux extensively, we came to see that most of these GitOps solutions are an overkill to what we need, and do not support our DRY way of working. Most of the GitOps solutions out there make you use custom resources to tell you what to sync and what not, making you build and maintain a lot of glue to do what should be very easy. We just want to apply changing values using versioned artifacts. We don't want to keep code in sync, just configuration."),(0,i.kt)("p",null,"So we decided to keep it simple (stupid) and use good old Drone, which is triggered by git webhook to just do what we, as developers do: deploy the changed motherload to the cluster that is interested in receiving those changes. We did not have to deviate from the developers workflow, and could even model it the same way, using the same tooling."),(0,i.kt)("p",null,"One thing that we don't like about it: it is webhook based (push), and does not retry when the hook is not working. We will soon have a solution that allows for periodic syncing."),(0,i.kt)("h3",{id:"single-sign-on-with-keycloak"},"Single Sign On with Keycloak"),(0,i.kt)("p",null,"We were using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy"},"oauth2-proxy")," from the beginning, and were able to use it for SSO just fine, for a while. We had enabled a lot of OIDC aware applications when we started seeing the beauty of normalizing an OIDC JWT's payload. This would allow applications to just consume the provided JWT without having to run a client to talk to the IDP. That is how we chose to put ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org"},"Keycloak")," in between oauth2-proxy and external IDPs, because it is very good at that. It has lots of knobs and settings to talk to exotic IDPs and translate incoming properties and claims."),(0,i.kt)("h3",{id:"running-tasks"},"Running tasks"),(0,i.kt)("p",null,"Since we are effectively configuring open source applications, we needed a way to run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-tasks/"},"tasks")," at the right moments in the deployment lifecycle. Example: Keycloak needs to be told how applications can reach it, before any of the crucial ones actually do. Istio won't forward a request when it is told to authenticate but can't reach Keycloak."),(0,i.kt)("p",null,"To be able to easily generate openapi typescript clients for tasks to talk to the applications, we have also created a small repo named ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-clients/"},"otomi-clients"),". We were already using typescript for our NodeJS API and Console UI, so this was an easy choice for us."),(0,i.kt)("h3",{id:"test-and-validate-everything"},"Test and validate everything"),(0,i.kt)("p",null,"After unknowingly delivering breaking changes too many times, we went all the way and decided to validate all input and output as best as we can."),(0,i.kt)("h4",{id:"input-checks"},(0,i.kt)("strong",{parentName:"h4"},"Input checks")),(0,i.kt)("p",null,"We introduced a jsonschema validation routine that can be used statically by your editor (in VSCode this works out of the box), but is also used pre-commit to avoid broken configuration."),(0,i.kt)("h4",{id:"output-checks"},(0,i.kt)("strong",{parentName:"h4"},"Output checks")),(0,i.kt)("p",null,"After having settled for ",(0,i.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org"},"OPA")," as our policy management solution, we came up with an elaborate approach to have Universal OPA Policies (akin to Universal Javascript). We crafted a mix of ",(0,i.kt)("a",{parentName:"p",href:"https://www.conftest.dev"},"Conftest")," and custom CRD/CR extraction routines to check if all the manifests are adhering to k8s best practices and the OPA policies we settled for. This allows not only for static validation, but also for OPA gatekeeper to uphold these same policies on the cluster."),(0,i.kt)("h2",{id:"smooth-sailing"},"Smooth sailing"),(0,i.kt)("p",null,"Having built a very flexible and easily approachable development platform for kubernetes solutions, we can truly say we are now smooth sailing. We just keep building out the functionality in the core, and expose more and more configuration for values to manipulate."),(0,i.kt)("p",null,"Of course there are sometimes unforeseen waves rocking our boat, and we try to be ready for when they come. We invite you to look at our ",(0,i.kt)("a",{parentName:"p",href:"roadmap"},"roadmap")," to see potential problems we have identified so far, but also the opportunities waiting to land."))}p.isMDXComponent=!0}}]);