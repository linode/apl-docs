"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={slug:"lab-7",title:"Scan your images for vulnerabilities",sidebar_label:"Scan images"},o=void 0,s={unversionedId:"for-devs/get-started/lab-7",id:"for-devs/get-started/lab-7",title:"Scan your images for vulnerabilities",description:"Prerequisites",source:"@site/docs/for-devs/get-started/lab-7.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-7",permalink:"/docs/for-devs/get-started/lab-7",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-7.md",tags:[],version:"current",frontMatter:{slug:"lab-7",title:"Scan your images for vulnerabilities",sidebar_label:"Scan images"},sidebar:"mainSidebar",previous:{title:"Check policy compliance",permalink:"/docs/for-devs/get-started/lab-15"},next:{title:"Scan containers",permalink:"/docs/for-devs/get-started/lab-17"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Scanning images",id:"scanning-images",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To automatically scan images for vulnerabilities, ",(0,a.kt)("inlineCode",{parentName:"p"},"Automatically scan images on push")," in the Team project settings in Harbor needs to be enabled by the platform administrator:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image vulnerabilities",src:r(8377).Z,width:"2836",height:"1360"})),(0,a.kt)("h2",{id:"scanning-images"},"Scanning images"),(0,a.kt)("p",null,"When your team is using Harbor for private image registries, you can use Trivy to automatically scan your images on push. When ",(0,a.kt)("inlineCode",{parentName:"p"},"Automatically scan images on push")," is enabled by the platform administrator, you can see the results of the scans by following these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the apps section in Otomi console, click on Harbor"),(0,a.kt)("li",{parentName:"ul"},"Click on your project. You will only see the projects of the Teams that you are a member of"),(0,a.kt)("li",{parentName:"ul"},"You will now see a list of the teams repositories"),(0,a.kt)("li",{parentName:"ul"},"Click on the repository that contains the artifact (image) that you would like to investigate"),(0,a.kt)("li",{parentName:"ul"},"In the list of artifacts, you can see a summary of the scan results")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubecfg",src:r(8699).Z,width:"3420",height:"1356"})),(0,a.kt)("p",null,"When you click on the scanned artifact, you'll see a more detailed report on all the vulnerabilities:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubecfg",src:r(1603).Z,width:"2806",height:"1646"})))}p.isMDXComponent=!0},8377:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harbor-config-a3f05759475e9def0cefc7059856865e.png"},1603:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/trivy-scan-details-58f58d9bfa78b2082397f7d8ead99289.png"},8699:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/trivy-scan-sum-75f1210f5bbddfd25a36a2dff38ef69e.png"}}]);