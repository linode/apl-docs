"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={slug:"knative",title:"Knative",sidebar_label:"Knative"},a=void 0,c={unversionedId:"apps/knative",id:"apps/knative",title:"Knative",description:"Introduction",source:"@site/docs/apps/knative.md",sourceDirName:"apps",slug:"/apps/knative",permalink:"/docs/apps/knative",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/knative.md",tags:[],version:"current",frontMatter:{slug:"knative",title:"Knative",sidebar_label:"Knative"},sidebar:"mainSidebar",previous:{title:"Keycloak",permalink:"/docs/apps/keycloak"},next:{title:"Kubeapps",permalink:"/docs/apps/kubeapps"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Automation",id:"automation",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Instructions",id:"instructions",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Knative can be activated in Otomi to deliver Container-as-a-Service (CaaS) functionality with scale-to-zero possibility. It can be compared to Functions-as-a-service (FaaS) but is container oriented, and takes only one manifest to configure an autoscaling service based on a container image of choice."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"automation"},"Automation"),(0,i.kt)("h2",{id:"integrations"},"Integrations"),(0,i.kt)("p",null,"Otomi uses Istio Virtual Services under the hood to route traffic coming in for a public domain to its backing Knative Service, allowing to set a custom domain."),(0,i.kt)("h2",{id:"instructions"},"Instructions"))}p.isMDXComponent=!0}}]);