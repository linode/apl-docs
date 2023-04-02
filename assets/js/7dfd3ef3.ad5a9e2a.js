"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={slug:"lab-19",title:"Deploy serverless workloads",sidebar_label:"Lab 19"},o=void 0,i={unversionedId:"for-devs/get-started/lab-19",id:"for-devs/get-started/lab-19",title:"Deploy serverless workloads",description:"Otomi uses Knative serving for serverless (or Function as a Service) support.",source:"@site/docs/for-devs/get-started/lab-19.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-19",permalink:"/docs/for-devs/get-started/lab-19",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-19.md",tags:[],version:"current",frontMatter:{slug:"lab-19",title:"Deploy serverless workloads",sidebar_label:"Lab 19"},sidebar:"mainSidebar",previous:{title:"Lab 18",permalink:"/docs/for-devs/get-started/lab-18"},next:{title:"Overview",permalink:"/docs/for-ciso/overview"}},s={},p=[{value:"Create a workload",id:"create-a-workload",level:2},{value:"Publicly expose the service",id:"publicly-expose-the-service",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Otomi uses Knative serving for serverless (or Function as a Service) support."),(0,a.kt)("p",null,"As a developer, you'll have the following options to deploy serverless workloads:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BYO Knative service manifest and deploy it using kubectl or ArgoCD"),(0,a.kt)("li",{parentName:"ul"},"Use the workloads feature with the knative Helm Chart in ",(0,a.kt)("inlineCode",{parentName:"li"},"otomi-charts"))),(0,a.kt)("p",null,"In this lab we're going to create a workload in Otomi to create a Knative service using the knative chart in ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi-charts"),"."),(0,a.kt)("h2",{id:"create-a-workload"},"Create a workload"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter a name for the workload")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hello-ksvc\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Enter the URL to the Git repo containing the Helm Chart or a Helm repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://github.com/redkubes/otomi-charts.git\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Enter the path of the chart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ksvc\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,a.kt)("p",null,"After submitting the new workload specs, the values editor will be shown. Here you can edit the chart values."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit")),(0,a.kt)("li",{parentName:"ol"},"Add the following (minimal) values:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fullnameOverride: hello-ksvc\nimage:\n  repository: otomi/nodejs-helloworld\n  tag: v1.2.13\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,a.kt)("p",null,"Now click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy Changes")),(0,a.kt)("h2",{id:"publicly-expose-the-service"},"Publicly expose the service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the left menu panel under click ",(0,a.kt)("inlineCode",{parentName:"p"},"Services")," then click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Service"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fill in the name of the (existing) knative service: ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world-ksvc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"service-type")," select ",(0,a.kt)("inlineCode",{parentName:"p"},"existing knative service"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Exposure Ingress"),", select ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress")," and use the default configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Submit"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy Changes")," (the Deploy Changes button in the left panel will light-up after you click on submit)."))))}u.isMDXComponent=!0}}]);