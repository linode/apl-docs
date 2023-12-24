"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={slug:"lab-21",title:"View container metrics",sidebar_label:"View container metrics"},o=void 0,s={unversionedId:"for-devs/get-started/lab-21",id:"for-devs/get-started/lab-21",title:"View container metrics",description:"Prometheus and Grafana need to be activated for this lab.",source:"@site/docs/for-devs/get-started/lab-21.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-21",permalink:"/docs/for-devs/get-started/lab-21",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-21.md",tags:[],version:"current",frontMatter:{slug:"lab-21",title:"View container metrics",sidebar_label:"View container metrics"},sidebar:"mainSidebar",previous:{title:"View container logs",permalink:"/docs/for-devs/get-started/lab-20"},next:{title:"Using custom metrics",permalink:"/docs/for-devs/get-started/lab-22"}},l={},c=[{value:"View container metrics (no multi-tenancy)",id:"view-container-metrics-no-multi-tenancy",level:2},{value:"View container metrics (in multi-tenancy mode)",id:"view-container-metrics-in-multi-tenancy-mode",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Prometheus and Grafana need to be activated for this lab.")),(0,a.kt)("p",null,"When your application is deployed, you would of course like to be able to see container metrics for debugging purposes. Prometheus is used in Otomi for metrics. When Prometheus is enabled, you'll see the Prometheus app in your apps."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When Otomi is configured in multi-tenant mode, each team will get a dedicated Prometheus and Grafana instance. Container metrics are provided by the platform Prometheus and you can use the dedicated team Prometheus to collect custom application metrics.")),(0,a.kt)("h2",{id:"view-container-metrics-no-multi-tenancy"},"View container metrics (no multi-tenancy)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the Grafana app in your team apps")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubecfg",src:n(3516).Z,width:"3118",height:"1726"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Grafana will open the default Welcome to Grafana page. On the right, click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Dashboards"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubecfg",src:n(6693).Z,width:"2208",height:"856"})),(0,a.kt)("p",null,"Here you will see a long list of dashboards that are added by Otomi. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Kubernetes / Compute Resources / Namespace (Pods)")," dashboard")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubecfg",src:n(2931).Z,width:"2208",height:"1168"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select your team namespace")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubecfg",src:n(3807).Z,width:"2558",height:"1112"})),(0,a.kt)("h2",{id:"view-container-metrics-in-multi-tenancy-mode"},"View container metrics (in multi-tenancy mode)"),(0,a.kt)("p",null,"When Otomi runs in multi-tenant mode, using Grafana for Prometheus is a little different. If you go to the dashboards, you'll only see 2 dashboards:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Kubernetes / deployment"),(0,a.kt)("li",{parentName:"ol"},"Kubernetes / Pods")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the Kubernetes / Pods dashboard. ")),(0,a.kt)("p",null,"Note that you will not see any data. This is because the dedicated team Prometheus is used as a datasource, but the team Prometheus instance does not collect container metrics."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Prometheus-platform")," data source")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubecfg",src:n(6941).Z,width:"1734",height:"894"})),(0,a.kt)("p",null,"Now you will see metrics of containers running in your team namespace."))}d.isMDXComponent=!0},2931:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dashboard-1-326cc0d2b2b799f69c2f1f19e671485c.png"},3807:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dashboard-2-924d04302cf1e4876311caa1123aedf5.png"},6693:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/grafana-dashboards-0a271947291fb0ddb66c3b676fcfd47f.png"},3516:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/grafana-teams-4f15c08dfa14e6ede5c873bdc63e4d69.png"},6941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-platform-609e30c0b629ed5cdf93175380060288.png"}}]);