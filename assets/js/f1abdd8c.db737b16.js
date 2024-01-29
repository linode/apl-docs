"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4734],{3167:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const n={slug:"faq",title:"FAQ"},r=void 0,a={id:"faq",title:"FAQ",description:"More about Otomi",source:"@site/product/faq.md",sourceDirName:".",slug:"/faq",permalink:"/product/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/faq.md",tags:[],version:"current",lastUpdatedBy:"Dennis van Kekem",lastUpdatedAt:1706520983,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{slug:"faq",title:"FAQ"},sidebar:"mainSidebar",previous:{title:"Roadmap",permalink:"/product/roadmap"},next:{title:"Overview",permalink:"/product/use-cases/overview"}},l={},c=[{value:"More about Otomi",id:"more-about-otomi",level:2},{value:"Setup and Installation",id:"setup-and-installation",level:2},{value:"Other",id:"other",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"more-about-otomi",children:"More about Otomi"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Is Otomi a lightweight version of Rancher or OpenShift"}),(0,i.jsx)(o.p,{children:"No. Otomi is a pre-configured and curated package of open source projects combined with a self-service portal and requires an existing Kubernetes cluster to be installed on. Otomi can not be used to install a Kubernetes cluster."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Is Otomi some kind of Kubeapps"}),(0,i.jsx)(o.p,{children:"We can imagine when looking at the list of all pre-configured and ready-to-use apps, you might get the impression that Otomi is some kind of application catalog for Kubernetes. But the opposite is true. When you install Otomi, you will get all of these apps and they\u2019re already configured for you, and they will work out-of-the-box. You can then use the web UI or values repository to adjust the configuration of these apps based on your own requirements."}),(0,i.jsx)(o.p,{children:"Otomi itself comes with a Developer Catalog that can be customized do offer custom Helm charts (Golden path Templates) to developers to use."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Do I need to use Gitea for my code repositories?"}),(0,i.jsxs)(o.p,{children:["No. Otomi itself uses Gitea for 2 repositories: the ",(0,i.jsx)(o.code,{children:"otomi/values"})," and the ",(0,i.jsx)(o.code,{children:"otomi/charts"})," repositories. ",(0,i.jsx)(o.code,{children:"otomi/values"}),' is used for the "local bookkeeping" of the platform configuration and ',(0,i.jsx)(o.code,{children:"otomi/charts"})," is used for the Developer Catalog. Using external Git services for these repositories is not supported."]}),(0,i.jsx)(o.p,{children:"But it is not required to use Gitea for your own code repositories. Yes, Gitea can be used as a Git service for your own code projects, but if you are already using a Git service like Gitlab or GitHub, you are not forced to migrate."}),(0,i.jsx)(o.p,{children:"The Build feature in Otomi is configured with credentials for Gitea private repositories, but it is also possible to use public Git repositories, or create a secret for an external Git service and use this secret."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"I already have a CI build pipeline. Do I need to use the Build feature in Otomi? "}),(0,i.jsx)(o.p,{children:"No. If you already have a CI build pipeline you can keep using it. You can choose to push your images to Harbor in Otomi. For this you can download the Docker credentials in Otomi Console."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Do I need to use Harbor?"}),(0,i.jsxs)(o.p,{children:["No, using Harbor is optional. The advantage of using Harbor is that Otomi automatically adds a ",(0,i.jsx)(o.code,{children:"pull-secret"})," for Harbor to the Team namespace. If you would like to use an external image registry, then you will need to create the pull-secrets yourself."]})]}),"\n",(0,i.jsx)(o.h2,{id:"setup-and-installation",children:"Setup and Installation"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"What are the minimal requirements to install Otomi?"}),(0,i.jsxs)(o.p,{children:["Otomi requires a running Kubernetes cluster of version ",(0,i.jsx)(o.code,{children:"1.25"})," up to ",(0,i.jsx)(o.code,{children:"1.27"})," using a Node pool with at least ",(0,i.jsx)(o.code,{children:"12 vCPU"})," and ",(0,i.jsx)(o.code,{children:"24 GiB memory"}),", but more is recommended. When using the ",(0,i.jsx)(o.code,{children:"custom"})," provider (when installing Kubernetes on a unsupported provider), make sure Otomi can create a K8s LoadBalancer Service that is accessible from your machine (but not using 127.0.0.1)."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Where can I find all possible configuration options for Otomi?"}),(0,i.jsxs)(o.p,{children:["When installing Otomi with the helm chart you can find its ",(0,i.jsx)(o.code,{children:"values-schema.json"})," inside, which contains all the possible configuration parameters. It is generated from ",(0,i.jsx)(o.a,{href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml",children:"otomi-core/values-schema.yaml"}),"."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Can Otomi be deployed on an existing cluster?"}),(0,i.jsx)(o.p,{children:"Yes, Otomi can be installed on an existing cluster as long as there are no namespaces that are also used by Otomi. We advise to install Otomi on a Vanilla Kubernetes cluster without any cloud specific add-ons installed."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Can I install Otomi without using a DNS zone?"}),(0,i.jsx)(o.p,{children:"Yes, using a DNS zone for name resolution is optional (but prefferred). When installing Otomi with minimal values, nip.io is used for name resolution pointing to the public IP of the cloud load balancer."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"I don't have an external IdP like Azure AD. Can I still install Otomi?"}),(0,i.jsxs)(o.p,{children:["Yes, using an external IdP like Azure AD is optional. When installing Otomi without ",(0,i.jsx)(o.code,{children:"OIDC"})," values, Otomi will configure Keycloak as an IdP. You can create users in Keycloak and assign them to the pre-configured roles."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Can I install Otomi on my laptop using Minikube?"}),(0,i.jsxs)(o.p,{children:["Yes. You can use the Otomi ",(0,i.jsx)(o.code,{children:"custom"})," provider to install Otomi on Kubernetes running on your own hardware, including Minikube. Note that Otomi needs to be able to create a Kubernetes LoadBalancer service and the IP needs to be accessible for pods running in the cluster and for your local browser. ",(0,i.jsx)(o.code,{children:"127.0.0.1"})," can not be used, so running minikube with the Docker provider is not supported. Use the ",(0,i.jsx)(o.a,{href:"https://minikube.sigs.k8s.io/docs/drivers/hyperkit/",children:"Hyperkit driver"})," instead. Also note that Otomi does not support ARM."]}),(0,i.jsx)(o.p,{children:"Otomi is a complete platform suite and not a single purpose tool. This is why otomi requires a stable (cloud) infrastructure and sufficient resources. Running Otomi on your laptop is therefor not advised."})]}),"\n",(0,i.jsx)(o.h2,{id:"other",children:"Other"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Do you provide commercial support?"}),(0,i.jsxs)(o.p,{children:["Yes, you can contact us for commercial support. ",(0,i.jsx)(o.a,{href:"https://redkubes.com",children:"Red Kubes"})," is the company behind Otomi."]})]})]})}function u(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>r});var i=t(7294);const s={},n=i.createContext(s);function r(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);