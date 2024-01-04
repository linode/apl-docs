"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(f,n(n({ref:t},c),{},{components:r})):a.createElement(f,n({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const i={slug:"lab-23",title:"Monitoring service availability",sidebar_label:"Monitor services"},n=void 0,l={unversionedId:"for-devs/get-started/lab-23",id:"for-devs/get-started/lab-23",title:"Monitoring service availability",description:"When your application is deployed, you would of course like to get an alert when you application (service) is not available anymore. To automatically monitor you applications for availability, Otomi automatically configures a prope to monitor your service.",source:"@site/docs/for-devs/get-started/lab-23.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-23",permalink:"/docs/for-devs/get-started/lab-23",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-23.md",tags:[],version:"current",frontMatter:{slug:"lab-23",title:"Monitoring service availability",sidebar_label:"Monitor services"},sidebar:"mainSidebar",previous:{title:"Create custom rules",permalink:"/docs/for-devs/get-started/lab-31"},next:{title:"Configure network policies",permalink:"/docs/for-devs/get-started/lab-19"}},s={},p=[{value:"Monitor your application for availability",id:"monitor-your-application-for-availability",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When your application is deployed, you would of course like to get an alert when you application (service) is not available anymore. To automatically monitor you applications for availability, Otomi automatically configures a prope to monitor your service."),(0,o.kt)("h2",{id:"monitor-your-application-for-availability"},"Monitor your application for availability"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/for-devs/get-started/lab-7"},"Create a Service")," for your app in Otomi. The service can have an Exposure ingress of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Cluster")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Prometheus"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(8538).Z,width:"2898",height:"1916"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In Prometheus, Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Status")," and click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Targets"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(852).Z,width:"2968",height:"1920"})),(0,o.kt)("p",null,"In the list of targets you will see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"PodMonitor")," endpoints of the ",(0,o.kt)("inlineCode",{parentName:"li"},"istio sidecars")," os the Team Workloads"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Probes")," of all the Team services that are exposed")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In Prometheus, Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Alerts"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(7038).Z,width:"2970",height:"880"})),(0,o.kt)("p",null,"In the alerts you will see an (inactive) alert for ",(0,o.kt)("inlineCode",{parentName:"p"},"ProbeFailing"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," of a Servive Probe is ",(0,o.kt)("inlineCode",{parentName:"p"},"Down")," the Prometheus ",(0,o.kt)("inlineCode",{parentName:"p"},"Rule")," for this alert will fire. When alertmanager is enabled, and an alert notification receiver is configured, you will automatically receive an alert when your exposed Service is down."))}u.isMDXComponent=!0},7038:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-alerts-8b0a876a39c137149412137249531b83.png"},8538:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-teams-98c9bed1aa25d7d9f7fe76ef8120efa4.png"},852:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/targets-up-cc925a02c4de2f0f97fd9efcfa7e9075.png"}}]);