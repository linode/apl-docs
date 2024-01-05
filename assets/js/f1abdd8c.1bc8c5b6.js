"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6779],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return o?n.createElement(h,r(r({ref:t},p),{},{components:o})):n.createElement(h,r({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},684:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const a={slug:"faq",title:"FAQ"},r=void 0,l={unversionedId:"faq",id:"faq",title:"FAQ",description:"More about Otomi",source:"@site/product/faq.md",sourceDirName:".",slug:"/faq",permalink:"/product/faq",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/faq.md",tags:[],version:"current",lastUpdatedBy:"Dennis van Kekem",lastUpdatedAt:1704461671,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{slug:"faq",title:"FAQ"},sidebar:"mainSidebar",previous:{title:"Roadmap",permalink:"/product/roadmap"},next:{title:"Overview",permalink:"/product/use-cases/overview"}},s={},u=[{value:"More about Otomi",id:"more-about-otomi",level:2},{value:"Setup and Installation",id:"setup-and-installation",level:2},{value:"Other",id:"other",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"more-about-otomi"},"More about Otomi"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Is Otomi a lightweight version of Rancher or OpenShift"),(0,i.kt)("p",null,"No. Otomi is a pre-configured and curated package of open source projects combined with a self-service portal and requires an existing Kubernetes cluster to be installed on. Otomi can not be used to install a Kubernetes cluster.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Is Otomi some kind of Kubeapps"),(0,i.kt)("p",null,"We can imagine when looking at the list of all pre-configured and ready-to-use apps, you might get the impression that Otomi is some kind of application catalog for Kubernetes. But the opposite is true. When you install Otomi, you will get all of these apps and they\u2019re already configured for you, and they will work out-of-the-box. You can then use the web UI or values repository to adjust the configuration of these apps based on your own requirements."),(0,i.kt)("p",null,"Otomi itself comes with a Developer Catalog that can be customized do offer custom Helm charts (Golden path Templates) to developers to use.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Do I need to use Gitea for my code repositories?"),(0,i.kt)("p",null,"No. Otomi itself uses Gitea for 2 repositories: the ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi/values")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi/charts")," repositories. ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi/values"),' is used for the "local bookkeeping" of the platform configuration and ',(0,i.kt)("inlineCode",{parentName:"p"},"otomi/charts")," is used for the Developer Catalog. Using external Git services for these repositories is not supported."),(0,i.kt)("p",null,"But it is not required to use Gitea for your own code repositories. Yes, Gitea can be used as a Git service for your own code projects, but if you are already using a Git service like Gitlab or GitHub, you are not forced to migrate."),(0,i.kt)("p",null,"The Build feature in Otomi is configured with credentials for Gitea private repositories, but it is also possible to use public Git repositories, or create a secret for an external Git service and use this secret.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"I already have a CI build pipeline. Do I need to use the Build feature in Otomi? "),(0,i.kt)("p",null,"No. If you already have a CI build pipeline you can keep using it. You can choose to push your images to Harbor in Otomi. For this you can download the Docker credentials in Otomi Console.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Do I need to use Harbor?"),(0,i.kt)("p",null,"No, using Harbor is optional. The advantage of using Harbor is that Otomi automatically adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"pull-secret")," for Harbor to the Team namespace. If you would like to use an external image registry, then you will need to create the pull-secrets yourself.")),(0,i.kt)("h2",{id:"setup-and-installation"},"Setup and Installation"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What are the minimal requirements to install Otomi?"),(0,i.kt)("p",null,"Otomi requires a running Kubernetes cluster of version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.25")," up to ",(0,i.kt)("inlineCode",{parentName:"p"},"1.27")," using a Node pool with at least ",(0,i.kt)("inlineCode",{parentName:"p"},"12 vCPU")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"24 GiB memory"),", but more is recommended. When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," provider (when installing Kubernetes on a unsupported provider), make sure Otomi can create a K8s LoadBalancer Service that is accessible from your machine (but not using 127.0.0.1).")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Where can I find all possible configuration options for Otomi?"),(0,i.kt)("p",null,"When installing Otomi with the helm chart you can find its ",(0,i.kt)("inlineCode",{parentName:"p"},"values-schema.json")," inside, which contains all the possible configuration parameters. It is generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml"},"otomi-core/values-schema.yaml"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Can Otomi be deployed on an existing cluster?"),(0,i.kt)("p",null,"Yes, Otomi can be installed on an existing cluster as long as there are no namespaces that are also used by Otomi. We advise to install Otomi on a Vanilla Kubernetes cluster without any cloud specific add-ons installed.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Can I install Otomi without using a DNS zone?"),(0,i.kt)("p",null,"Yes, using a DNS zone for name resolution is optional (but prefferred). When installing Otomi with minimal values, nip.io is used for name resolution pointing to the public IP of the cloud load balancer.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"I don't have an external IdP like Azure AD. Can I still install Otomi?"),(0,i.kt)("p",null,"Yes, using an external IdP like Azure AD is optional. When installing Otomi without ",(0,i.kt)("inlineCode",{parentName:"p"},"OIDC")," values, Otomi will configure Keycloak as an IdP. You can create users in Keycloak and assign them to the pre-configured roles.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Can I install Otomi on my laptop using Minikube?"),(0,i.kt)("p",null,"Yes. You can use the Otomi ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," provider to install Otomi on Kubernetes running on your own hardware, including Minikube. Note that Otomi needs to be able to create a Kubernetes LoadBalancer service and the IP needs to be accessible for pods running in the cluster and for your local browser. ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," can not be used, so running minikube with the Docker provider is not supported. Use the ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/drivers/hyperkit/"},"Hyperkit driver")," instead. Also note that Otomi does not support ARM."),(0,i.kt)("p",null,"Otomi is a complete platform suite and not a single purpose tool. This is why otomi requires a stable (cloud) infrastructure and sufficient resources. Running Otomi on your laptop is therefor not advised.")),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Do you provide commercial support?"),(0,i.kt)("p",null,"Yes, you can contact us for commercial support. ",(0,i.kt)("a",{parentName:"p",href:"https://redkubes.com"},"Red Kubes")," is the company behind Otomi.")))}c.isMDXComponent=!0}}]);