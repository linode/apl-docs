"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7301],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={slug:"lab-28",title:"Canary deployments",sidebar_label:"Canary Deployments"},i=void 0,o={unversionedId:"for-devs/get-started/lab-28",id:"for-devs/get-started/lab-28",title:"Canary deployments",description:"In this lab we are going to create a canary deployment. The idea behind canary deployment (or rollout) is to introduce a new version of a service by first testing it using a small percentage of user traffic, and then if all goes well the percentage while simultaneously phasing out the old version.",source:"@site/docs/for-devs/get-started/lab-28.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-28",permalink:"/docs/for-devs/get-started/lab-28",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-28.md",tags:[],version:"current",frontMatter:{slug:"lab-28",title:"Canary deployments",sidebar_label:"Canary Deployments"},sidebar:"mainSidebar",previous:{title:"Use OpenTelemery",permalink:"/docs/for-devs/get-started/lab-27"},next:{title:"Alertmanager",permalink:"/docs/apps/alertmanager"}},s={},p=[{value:"Prepare images",id:"prepare-images",level:2},{value:"Create a workload from the developer catalog",id:"create-a-workload-from-the-developer-catalog",level:2},{value:"Expose the service",id:"expose-the-service",level:2},{value:"See the results",id:"see-the-results",level:2},{value:"Update the canary image",id:"update-the-canary-image",level:2}],d={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lab we are going to create a canary deployment. The idea behind canary deployment (or rollout) is to introduce a new version of a service by first testing it using a small percentage of user traffic, and then if all goes well the percentage while simultaneously phasing out the old version."),(0,r.kt)("p",null,"For this we are going to deploy the stable version (blue), introduce a new version and then change the new version until we are happy with it and then increase the traffic to the new version."),(0,r.kt)("h2",{id:"prepare-images"},"Prepare images"),(0,r.kt)("p",null,"For this lab we need the 2 images (",(0,r.kt)("inlineCode",{parentName:"p"},"blue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"green"),") we already created in the previous labs. If you haven't created the blue and green images, first complete these 2 labs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/for-devs/get-started/lab-6"},"Build images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/for-devs/get-started/lab-26"},"Trigger builds"))),(0,r.kt)("h2",{id:"create-a-workload-from-the-developer-catalog"},"Create a workload from the developer catalog"),(0,r.kt)("p",null,"Go to the list of Builds and add the repository of the ",(0,r.kt)("inlineCode",{parentName:"p"},"green")," build to your clipboard."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Workloads")," in the left menu and click on ",(0,r.kt)("inlineCode",{parentName:"li"},"New Workload")),(0,r.kt)("li",{parentName:"ol"},"Add the Name ",(0,r.kt)("inlineCode",{parentName:"li"},"canary")," for the workload"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"otomi-quickstart-k8s-deployment-canary")," from the catalog"),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Auto image updater")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Digest")," and fill in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"imageRepository = paste from the clipboard"),(0,r.kt)("li",{parentName:"ul"},"imageParameter = ",(0,r.kt)("inlineCode",{parentName:"li"},"versionTwo.image.repository")),(0,r.kt)("li",{parentName:"ul"},"tagParameter = ",(0,r.kt)("inlineCode",{parentName:"li"},"versionTwo.image.tag"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"In the workload ",(0,r.kt)("inlineCode",{parentName:"li"},"values"),", change the following parameters:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# For the v1 as the stable version\nversionOne:\n  image:\n    repository: # paste from clipboard, but change to blue\n    tag: latest\n# The v2 as canary with the auto image updater configured\nversionTwo:\n  image:\n    repository: # paste from clipboard. This will be the green image\n    tag: latest\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,r.kt)("p",null,"Now click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Changes")),(0,r.kt)("p",null,"We now created 2 deployments. One for ",(0,r.kt)("inlineCode",{parentName:"p"},"blue")," and one for ",(0,r.kt)("inlineCode",{parentName:"p"},"green"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"green")," image (our canary) will be automatically updated after a change (commit)."),(0,r.kt)("h2",{id:"expose-the-service"},"Expose the service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the left menu panel under click ",(0,r.kt)("inlineCode",{parentName:"li"},"Services")," then click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Create Service")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"canary")," service"),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Traffic Control")," click ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," (and use the default weights for v1 and v2)"),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Exposure Ingress"),", select ",(0,r.kt)("inlineCode",{parentName:"li"},"Ingress")," and use the default configuration"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))),(0,r.kt)("h2",{id:"see-the-results"},"See the results"),(0,r.kt)("p",null,"You will see the ",(0,r.kt)("inlineCode",{parentName:"p"},"canary")," service in the list of Services. Click on the URL and refresh the page for a couple of times. You should first see:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Team apps",src:a(4353).Z,width:"1946",height:"974"})),(0,r.kt)("p",null,"After a refresh of the page you should see:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Team apps",src:a(1663).Z,width:"1944",height:"968"})),(0,r.kt)("h2",{id:"update-the-canary-image"},"Update the canary image"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"green")," repo and change the ",(0,r.kt)("inlineCode",{parentName:"p"},"background-color")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"green.html")," file from ",(0,r.kt)("inlineCode",{parentName:"p"},"green")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"MediumSeaGreen")," and commit the change. After a couple of minutes you should now see the background color of version 1 (our canary) changed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Team apps",src:a(9736).Z,width:"2422",height:"1188"})),(0,r.kt)("p",null,"Do you see the difference?"))}c.isMDXComponent=!0},4353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/canary-v1-7918cee6deeb9623785fde0e3f2ad204.png"},9736:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/canary-v2-mediumgreen-159d17ee97473283700b9d217c99ba84.png"},1663:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/canary-v2-de0a8acd39d54883520fbb243566df54.png"}}]);