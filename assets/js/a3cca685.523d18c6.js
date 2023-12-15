"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"builds",title:"Platform - Builds",sidebar_label:"Builds"},l=void 0,i={unversionedId:"for-ops/console/builds",id:"for-ops/console/builds",title:"Platform - Builds",description:"To enable this feature, first make sure Harbor and Tekton are activated. To be able to push images to Harbor, Otomi needs to be configured with a DNS and trusted certificates (Lets encrypt with production certificates).",source:"@site/docs/for-ops/console/builds.md",sourceDirName:"for-ops/console",slug:"/for-ops/console/builds",permalink:"/docs/for-ops/console/builds",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/console/builds.md",tags:[],version:"current",frontMatter:{slug:"builds",title:"Platform - Builds",sidebar_label:"Builds"},sidebar:"mainSidebar",previous:{title:"Projects",permalink:"/docs/for-ops/console/projects"},next:{title:"Secrets",permalink:"/docs/for-ops/console/secrets"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To enable this feature, first make sure ",(0,a.kt)("a",{parentName:"p",href:"/docs/apps/harbor"},"Harbor")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/apps/tekton"},"Tekton")," are activated. To be able to push images to Harbor, Otomi needs to be configured with a DNS and trusted certificates (Lets encrypt with production certificates).")),(0,a.kt)("p",null,"All known Builds on the platform are listed here. Builds can be sorted based on:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the build")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the build. Buildpacks or Docker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Webhook url"),(0,a.kt)("td",{parentName:"tr",align:null},"The webhook URL if a trigger is configured for the build")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tekton"),(0,a.kt)("td",{parentName:"tr",align:null},"Link to the `PipelineRun`` of the build in the Tekton dashboard")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Repository"),(0,a.kt)("td",{parentName:"tr",align:null},"The repository of the image")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tag"),(0,a.kt)("td",{parentName:"tr",align:null},"The tag of the image")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Team"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Team responsible for the build")))),(0,a.kt)("p",null,"A platform admin can also create builds. Make sure to select the correct context (team-name) in the top bar. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/for-devs/console/builds"},"here")," for more information about creating builds."))}c.isMDXComponent=!0}}]);