"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(v,n(n({ref:t},u),{},{components:r})):a.createElement(v,n({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const o={slug:"overview",title:"Get started with Otomi Labs",sidebar_label:"Get Started Labs"},n=void 0,l={unversionedId:"for-devs/get-started/overview",id:"for-devs/get-started/overview",title:"Get started with Otomi Labs",description:"Otomi get started labs",source:"@site/docs/for-devs/get-started/overview.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/overview",permalink:"/docs/for-devs/get-started/overview",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/overview.md",tags:[],version:"current",frontMatter:{slug:"overview",title:"Get started with Otomi Labs",sidebar_label:"Get Started Labs"},sidebar:"mainSidebar",previous:{title:"Activation",permalink:"/docs/get-started/activation"},next:{title:"Overview",permalink:"/docs/for-ops/console/overview"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create private Git repositories",id:"create-private-git-repositories",level:3},{value:"Create builds",id:"create-builds",level:3},{value:"Trigger builds",id:"trigger-builds",level:3},{value:"Create secrets",id:"create-secrets",level:3},{value:"BYO manifest to create a workload",id:"byo-manifest-to-create-a-workload",level:3},{value:"Explore the Catalog",id:"explore-the-catalog",level:3},{value:"Create a workload using the developer catalog",id:"create-a-workload-using-the-developer-catalog",level:3},{value:"Configure the auto image updater",id:"configure-the-auto-image-updater",level:3},{value:"Create a PostgreSQL database",id:"create-a-postgresql-database",level:3},{value:"Check policy compliance",id:"check-policy-compliance",level:3},{value:"Scan images for vulnerabilities",id:"scan-images-for-vulnerabilities",level:3},{value:"Scan your running containers for vulnerabilities",id:"scan-your-running-containers-for-vulnerabilities",level:3},{value:"Publicly expose a service",id:"publicly-expose-a-service",level:3},{value:"Configuring network policies",id:"configuring-network-policies",level:3},{value:"View container logs",id:"view-container-logs",level:3},{value:"View container metrics",id:"view-container-metrics",level:3},{value:"Using custom metrics",id:"using-custom-metrics",level:3},{value:"Create custom dashboards",id:"create-custom-dashboards",level:3},{value:"Create custom rules",id:"create-custom-rules",level:3},{value:"Monitoring availability",id:"monitoring-availability",level:3},{value:"Monitor databases",id:"monitor-databases",level:3},{value:"Tracing with OpenTelemetry",id:"tracing-with-opentelemetry",level:3},{value:"Canary Deployments",id:"canary-deployments",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Otomi get started labs")),(0,i.kt)("p",null,"Welcome to Otomi! If you are going to use Otomi, these getting started labs are for you. Step by step we'll guide you in using Otomi to build, deploy and manage your containerized applications. The getting started with Otomi contains a set of labs to cover the most common activities performed by developer- and/or DevOps teams."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure everything is ready to get started")),(0,i.kt)("h3",{id:"prerequisites"},(0,i.kt)("a",{parentName:"h3",href:"lab-1"},"Prerequisites")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Create code repositories and build images")),(0,i.kt)("h3",{id:"create-private-git-repositories"},(0,i.kt)("a",{parentName:"h3",href:"lab-3"},"Create private Git repositories")),(0,i.kt)("h3",{id:"create-builds"},(0,i.kt)("a",{parentName:"h3",href:"lab-6"},"Create builds")),(0,i.kt)("h3",{id:"trigger-builds"},(0,i.kt)("a",{parentName:"h3",href:"lab-26"},"Trigger builds")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Create workloads")),(0,i.kt)("h3",{id:"create-secrets"},(0,i.kt)("a",{parentName:"h3",href:"lab-8"},"Create secrets")),(0,i.kt)("h3",{id:"byo-manifest-to-create-a-workload"},(0,i.kt)("a",{parentName:"h3",href:"lab-10"},"BYO manifest to create a workload")),(0,i.kt)("h3",{id:"explore-the-catalog"},(0,i.kt)("a",{parentName:"h3",href:"lab-29"},"Explore the Catalog")),(0,i.kt)("h3",{id:"create-a-workload-using-the-developer-catalog"},(0,i.kt)("a",{parentName:"h3",href:"lab-13"},"Create a workload using the developer catalog")),(0,i.kt)("h3",{id:"configure-the-auto-image-updater"},(0,i.kt)("a",{parentName:"h3",href:"lab-11"},"Configure the auto image updater")),(0,i.kt)("h3",{id:"create-a-postgresql-database"},(0,i.kt)("a",{parentName:"h3",href:"lab-24"},"Create a PostgreSQL database")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Secure workloads")),(0,i.kt)("h3",{id:"check-policy-compliance"},(0,i.kt)("a",{parentName:"h3",href:"lab-15"},"Check policy compliance")),(0,i.kt)("h3",{id:"scan-images-for-vulnerabilities"},(0,i.kt)("a",{parentName:"h3",href:"lab-7"},"Scan images for vulnerabilities")),(0,i.kt)("h3",{id:"scan-your-running-containers-for-vulnerabilities"},(0,i.kt)("a",{parentName:"h3",href:"lab-17"},"Scan your running containers for vulnerabilities")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Expose workloads")),(0,i.kt)("h3",{id:"publicly-expose-a-service"},(0,i.kt)("a",{parentName:"h3",href:"lab-18"},"Publicly expose a service")),(0,i.kt)("h3",{id:"configuring-network-policies"},(0,i.kt)("a",{parentName:"h3",href:"lab-19"},"Configuring network policies")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Monitor and debug workloads")),(0,i.kt)("h3",{id:"view-container-logs"},(0,i.kt)("a",{parentName:"h3",href:"lab-20"},"View container logs")),(0,i.kt)("h3",{id:"view-container-metrics"},(0,i.kt)("a",{parentName:"h3",href:"lab-21"},"View container metrics")),(0,i.kt)("h3",{id:"using-custom-metrics"},(0,i.kt)("a",{parentName:"h3",href:"lab-22"},"Using custom metrics")),(0,i.kt)("h3",{id:"create-custom-dashboards"},(0,i.kt)("a",{parentName:"h3",href:"lab-30"},"Create custom dashboards")),(0,i.kt)("h3",{id:"create-custom-rules"},(0,i.kt)("a",{parentName:"h3",href:"lab-31"},"Create custom rules")),(0,i.kt)("h3",{id:"monitoring-availability"},(0,i.kt)("a",{parentName:"h3",href:"lab-23"},"Monitoring availability")),(0,i.kt)("h3",{id:"monitor-databases"},(0,i.kt)("a",{parentName:"h3",href:"lab-25"},"Monitor databases")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advanced Labs")),(0,i.kt)("h3",{id:"tracing-with-opentelemetry"},(0,i.kt)("a",{parentName:"h3",href:"lab-27"},"Tracing with OpenTelemetry")),(0,i.kt)("h3",{id:"canary-deployments"},(0,i.kt)("a",{parentName:"h3",href:"lab-28"},"Canary Deployments")))}d.isMDXComponent=!0}}]);