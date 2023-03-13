"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={slug:"installation",title:"Known Issues: Installation",sidebar_label:"Installation"},a=void 0,o={unversionedId:"for-ops/known-issues/installation",id:"for-ops/known-issues/installation",title:"Known Issues: Installation",description:"Otomi can be installed on any Kubernetes cluster. But there are always infrastructure specifics that can impact the installation of Otomi.",source:"@site/docs/for-ops/known-issues/installation.md",sourceDirName:"for-ops/known-issues",slug:"/for-ops/known-issues/installation",permalink:"/docs/for-ops/known-issues/installation",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/known-issues/installation.md",tags:[],version:"current",frontMatter:{slug:"installation",title:"Known Issues: Installation",sidebar_label:"Installation"},sidebar:"mainSidebar",previous:{title:"Istio",permalink:"/docs/for-ops/known-issues/istio"},next:{title:"Loki",permalink:"/docs/for-ops/known-issues/loki"}},l={},u=[{value:"Metrics server with untrusted Kube API certificates",id:"metrics-server-with-untrusted-kube-api-certificates",level:3},{value:"Uninstalling Otomi",id:"uninstalling-otomi",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Otomi can be installed on any Kubernetes cluster. But there are always infrastructure specifics that can impact the installation of Otomi."),(0,i.kt)("h3",{id:"metrics-server-with-untrusted-kube-api-certificates"},"Metrics server with untrusted Kube API certificates"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem")),(0,i.kt)("p",null,"Metrics server will not start when installing on a K8s cluster (like on Minikube or a cluster created with Kubeadm) with Kube API using self-signed certificates"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solution")," "),(0,i.kt)("p",null,"Add extra args to the metrics-service by using the following values when installing Otomi with Helm chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apps:\n  metrics-server:\n    enabled: true\n    _rawValues:\n      extraArgs:\n        kubelet-preferred-address-types: InternalIP\n        kubelet-insecure-tls: true\n")),(0,i.kt)("h3",{id:"uninstalling-otomi"},"Uninstalling Otomi"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem")),(0,i.kt)("p",null,"When uninstalling Otomi using the ",(0,i.kt)("inlineCode",{parentName:"p"},"helm unistall")," cmd, all Otomi namespaces get stuck in a terminating state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solution")," "),(0,i.kt)("p",null,"The work around for now is to delete all namespaces using this cmd:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"for ns in $(kubectl get ns --field-selector status.phase=Terminating -o jsonpath='{.items[*].metadata.name}'); do  kubectl get ns $ns -ojson | jq '.spec.finalizers = []' | kubectl replace --raw \"/api/v1/namespaces/$ns/finalize\" -f -; done\n")))}p.isMDXComponent=!0}}]);