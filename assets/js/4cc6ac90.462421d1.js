"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1656],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8226:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={slug:"roadmap",title:"Roadmap"},s=void 0,c={unversionedId:"about-roadmap",id:"about-roadmap",title:"Roadmap",description:"We are currently working on the following features for the next release.",source:"@site/about/about-roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/about/roadmap",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-roadmap.md",tags:[],version:"current",lastUpdatedBy:"darron froese",lastUpdatedAt:1652082731,formattedLastUpdatedAt:"5/9/2022",frontMatter:{slug:"roadmap",title:"Roadmap"},sidebar:"about",previous:{title:"Architecture",permalink:"/about/architecture"}},p={},u=[{value:"In the first quarter of 2022 we added the following features",id:"in-the-first-quarter-of-2022-we-added-the-following-features",level:3},{value:"For the second quarter of 2022 we aim to incorporate the following features",id:"for-the-second-quarter-of-2022-we-aim-to-incorporate-the-following-features",level:3},{value:"After that we see the following features on the horizon",id:"after-that-we-see-the-following-features-on-the-horizon",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are currently working on the following features for the next release."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Release Cycle")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release from our ",(0,i.kt)("strong",{parentName:"li"},"stable")," channel every 3 months"),(0,i.kt)("li",{parentName:"ul"},"Release from ",(0,i.kt)("strong",{parentName:"li"},"beta")," channel bi-weekly"),(0,i.kt)("li",{parentName:"ul"},"Release from ",(0,i.kt)("strong",{parentName:"li"},"alpha")," is nightly")),(0,i.kt)("p",null,"This approach might change, so keep watching our socials."),(0,i.kt)("h3",{id:"in-the-first-quarter-of-2022-we-added-the-following-features"},"In the first quarter of 2022 we added the following features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Internal ingress network policies: Controlling network traffic between team services"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Outbound egress control: Specify the FQDNs or IPs that services need to be able to access"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add self-service for network policies (ingress/egress)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Modify the configuration of integrated apps using Otomi Console"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Get a minimal set of installed apps to lower the initial footprint"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Activate more apps after initial install"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Support for Kubernetes 1.22 and 1.23")),(0,i.kt)("h3",{id:"for-the-second-quarter-of-2022-we-aim-to-incorporate-the-following-features"},"For the second quarter of 2022 we aim to incorporate the following features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add the option to use more ingress controllers allowing to group services on a dedicated controller for segmentation"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add Velero for automatic backup up Otomi platform apps (like Harbor, Keycloak, Gitea and Kubeapps Postgresql databases)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add the option to backup Team PVCs"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automated deployment of container images using ArgoCD"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add Falco and Kubei for runtime security monitoring")),(0,i.kt)("h3",{id:"after-that-we-see-the-following-features-on-the-horizon"},"After that we see the following features on the horizon"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Multi tenancy enhancements: Allow teams to create and manage their own namespaces"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Kubernetes operators: Expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades)."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bring Message Queue options to the stack: We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Streaming tools for real time inspection and tagging of traffic"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A Market place to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A Catalog with preconfigured flavours of stateful applications: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Adding buildpack")))}m.isMDXComponent=!0}}]);