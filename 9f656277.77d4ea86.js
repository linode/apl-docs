(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(176)),o={slug:"installation/prerequisites",title:"Minimal requirements"},c={unversionedId:"inst-prerequisites",id:"inst-prerequisites",isDocsHomePage:!1,title:"Minimal requirements",description:"Client binaries",source:"@site/docs/inst-prerequisites.md",slug:"/installation/prerequisites",permalink:"/docs/installation/prerequisites",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/inst-prerequisites.md",version:"current",sidebar:"mainSidebar",previous:{title:"Installation Overview",permalink:"/docs/installation/"},next:{title:"Optional configuration",permalink:"/docs/installation/optional"}},l=[{value:"Client binaries",id:"client-binaries",children:[]},{value:"Kubernetes and DNS",id:"kubernetes-and-dns",children:[{value:"AWS",id:"aws",children:[]},{value:"Azure (AKS)",id:"azure-aks",children:[]},{value:"Google (GKE)",id:"google-gke",children:[]}]}],i={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"client-binaries"},"Client binaries"),Object(s.b)("p",null,"Please make sure the following client binaries exist:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/#kubectl"}),"Kubectl")," to access the cluster."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.docker.com/"}),"Docker")," must be installed and running, as Otomi runs in a container."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/"}),"Helm")," for helm chart installation of Otomi."),Object(s.b)("li",{parentName:"ul"},"Optional: ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/cli/"}),"Otomi CLI"))),Object(s.b)("h2",{id:"kubernetes-and-dns"},"Kubernetes and DNS"),Object(s.b)("p",null,"Otomi requires at least:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A running Kubernetes cluster with at least 3 worker nodes (using General Purpose instance types with at least 4 vCPU)"),Object(s.b)("li",{parentName:"ul"},"Access to a public DNS zone")),Object(s.b)("p",null,"Otomi supports Kubernetes versions ",Object(s.b)("inlineCode",{parentName:"p"},"1.18")," up to ",Object(s.b)("inlineCode",{parentName:"p"},"1.20")),Object(s.b)("p",null,"Follow the instructions below to set up a Kubernetes cluster and DNS on the cloud of your choice:"),Object(s.b)("h3",{id:"aws"},"AWS"),Object(s.b)("p",null,"Set up an EKS cluster on AWS: ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"}),"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html")),Object(s.b)("p",null,"Get access to the cluster with kubectl:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"aws eks update-kubeconfig --name $CLUSTER_NAME\n")),Object(s.b)("p",null,"Setting up external DNS: ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md"}),"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md")),Object(s.b)("h3",{id:"azure-aks"},"Azure (AKS)"),Object(s.b)("p",null,"Set up an AKS cluster on Azure: ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal"}),"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal")),Object(s.b)("p",null,"Make sure to use the Azure Network CNI and Calico network policies. "),Object(s.b)("p",null,"Get access to the cluster with kubectl:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin\n")),Object(s.b)("p",null,"Setting up external DNS: ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md"}),"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md")),Object(s.b)("h3",{id:"google-gke"},"Google (GKE)"),Object(s.b)("p",null,"Set up a GKE cluster on Google Cloud Platform: ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/kubernetes-engine/docs/how-to"}),"https://cloud.google.com/kubernetes-engine/docs/how-to")),Object(s.b)("p",null,"Get access to the cluster with kubectl:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gcloud container clusters get-credentials <cluster-name> --region <region> --project <project>\n")),Object(s.b)("p",null,"Setting up external DNS: ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md"}),"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md")))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||s;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);