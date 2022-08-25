"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?i.createElement(k,o(o({ref:t},p),{},{components:a})):i.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const n={slug:"roadmap",title:"Roadmap"},o=void 0,l={unversionedId:"about-roadmap",id:"about-roadmap",title:"Roadmap",description:"In the first quarter of 2022 we added the following features",source:"@site/about/about-roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/about/roadmap",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/about/about-roadmap.md",tags:[],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1661410066,formattedLastUpdatedAt:"8/25/2022",frontMatter:{slug:"roadmap",title:"Roadmap"},sidebar:"about",previous:{title:"Architecture",permalink:"/about/architecture"}},s={},c=[{value:"In the first quarter of 2022 we added the following features",id:"in-the-first-quarter-of-2022-we-added-the-following-features",level:2},{value:"For Q2 2022 we aim to incorporate the following features",id:"for-q2-2022-we-aim-to-incorporate-the-following-features",level:2},{value:"For Q3 2022 we aim to incorporate the following features",id:"for-q3-2022-we-aim-to-incorporate-the-following-features",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"in-the-first-quarter-of-2022-we-added-the-following-features"},"In the first quarter of 2022 we added the following features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Internal ingress network policies: Controlling network traffic between team services"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Outbound egress control: Specify the FQDNs or IPs that services need to be able to access"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add self-service for network policies (ingress/egress)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Modify the configuration of integrated apps using Otomi Console"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Get a minimal set of installed apps to lower the initial footprint"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Activate more apps after initial install"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Support for Kubernetes 1.22 and 1.23")),(0,r.kt)("h2",{id:"for-q2-2022-we-aim-to-incorporate-the-following-features"},"For Q2 2022 we aim to incorporate the following features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add the option to use more ingress controllers allowing to group services on a dedicated controller for segmentation"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Offer option to expose all Otomi platform services privately (LB in private subnet)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Adding Argo CD for team GitOps"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Adding ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openclarity/kubeclarity"},"Kubeclarity")," for runtime container security scanning"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Adding Velero for automatic backup of Otomi platform databases"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add the option to backup Team PVCs"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Change DNS using Otomi Console after initial install")),(0,r.kt)("h2",{id:"for-q3-2022-we-aim-to-incorporate-the-following-features"},"For Q3 2022 we aim to incorporate the following features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make Otomi fully compliant to the ",(0,r.kt)("a",{parentName:"li",href:"https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF"},"NSA hardening guide")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Multi tenancy enhancements: When running Otomi in multi-tenant mode, shared apps will be private for teams"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support for Kubernetes 1.24"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Adding Falco"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introducing otomi.cloud: Use the wizard to generate advanced install scripts, calculate resource requirements and activate Otomi installs")))}u.isMDXComponent=!0}}]);