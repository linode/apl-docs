"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"alertmanager",title:"Alertmanager",sidebar_label:"Alertmanager"},i=void 0,l={unversionedId:"apps/alertmanager",id:"apps/alertmanager",title:"Alertmanager",description:"Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of de-duplicating, grouping, and routing them to the correct receiver integration such as email, Slack, MS Teams, or OpsGenie. It also takes care of silencing and inhibition of alerts.",source:"@site/docs/apps/alertmanager.md",sourceDirName:"apps",slug:"/apps/alertmanager",permalink:"/docs/apps/alertmanager",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/alertmanager.md",tags:[],version:"current",frontMatter:{slug:"alertmanager",title:"Alertmanager",sidebar_label:"Alertmanager"},sidebar:"mainSidebar",previous:{title:"Canary Deployments",permalink:"/docs/for-devs/get-started/lab-28"},next:{title:"Argo CD",permalink:"/docs/apps/argocd"}},s={},c=[{value:"Configuration values",id:"configuration-values",level:2},{value:"Resources",id:"resources",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of de-duplicating, grouping, and routing them to the correct receiver integration such as email, Slack, MS Teams, or OpsGenie. It also takes care of silencing and inhibition of alerts."),(0,a.kt)("p",null,"Alertmanager is configured to use the global values found under settings' ",(0,a.kt)("a",{parentName:"p",href:"../for-ops/console/settings/alerts"},"alerts")," and ",(0,a.kt)("a",{parentName:"p",href:"../for-ops/console/settings/co-monitoring"},"co-monitoring"),"."),(0,a.kt)("p",null,"A team may decide to override some or all of them, in order to have alerts sent to their own endpoints. Self-service rights to alerting must be enabled for the team (enabled by default for all teams). When running Otomi in multi-tenant mode, each team is provided a dedicated alertmanger instance."),(0,a.kt)("p",null,"Otomi supports the following receivers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Slack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Microsoft Teams")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ops Genie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Email")),(0,a.kt)("li",{parentName:"ul"},"(default) ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," (will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," receiver to enable the Alertmanger UI).")),(0,a.kt)("h2",{id:"configuration-values"},"Configuration values"),(0,a.kt)("h3",{id:"resources"},"Resources"))}p.isMDXComponent=!0}}]);