"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={slug:"lab-6",title:"Build images from application source",sidebar_label:"Lab 6"},o=void 0,l={unversionedId:"for-devs/get-started/lab-6",id:"for-devs/get-started/lab-6",title:"Build images from application source",description:"Prerequisite: For this lab, Harbor and Tekton needs to be activated.",source:"@site/docs/for-devs/get-started/lab-6.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-6",permalink:"/docs/for-devs/get-started/lab-6",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-6.md",tags:[],version:"current",frontMatter:{slug:"lab-6",title:"Build images from application source",sidebar_label:"Lab 6"},sidebar:"mainSidebar",previous:{title:"Lab 5",permalink:"/docs/for-devs/get-started/lab-5"},next:{title:"Lab 7",permalink:"/docs/for-devs/get-started/lab-7"}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Prerequisite: For this lab, Harbor and Tekton needs to be activated.")),(0,n.kt)("p",null,"When your team is using Harbor for private image registries and Tekton is enabled on the platform level. you can build images from source using pre-configured Tekton pipelines and buildpacks from ",(0,n.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/buildpack-author-guide/package-a-buildpack/"},"paketo")," to build images from application source."),(0,n.kt)("p",null,"In this lab, you are going to create a build, using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-petclinic"},"Spring Pet Clinic sample app")," and buildpacks. When using the buildpacks option, Otomi uses buildpacks to build an image based on application source code without using a Dockerfile."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the right menu, click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Build")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Create Build"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harbor-projects",src:r(9832).Z,width:"2940",height:"1726"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Fill in the name ",(0,n.kt)("inlineCode",{parentName:"li"},"petclinic")," for your build and a tag (default is tag is latest)"),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"Buildpacks")),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"Application source")," section, fill in the following:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RepoURL: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-petclinic"},"https://github.com/spring-projects/spring-petclinic")),(0,n.kt)("li",{parentName:"ul"},"revision: 82cb521d636b282340378d80a6307a08e3d4a4c4")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harbor-projects",src:r(3549).Z,width:"3058",height:"2556"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,n.kt)("p",null,"When the build is ready, you will see the image in Harbor:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open Harbor"),(0,n.kt)("li",{parentName:"ol"},"Click on the project of your team. Here you will see all the registries of the team, including the registry of the new build image")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harbor-projects",src:r(4841).Z,width:"3060",height:"1022"})),(0,n.kt)("p",null,"When using the Build feature in Otomi, a Tekton Pipeline is created and the pipline is executed only once using a Tekton Pipelinerun. To run the build again, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Change the tag of the build to ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0.0")),(0,n.kt)("li",{parentName:"ol"},"Use the following command to run the pipeline again:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"tkn pipeline start buildpacks-build-petclinic  --use-pipelinerun buildpacks-build-petclinic\n")))}u.isMDXComponent=!0},3549:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/build-buildpacks-8e53a223bba958546b58458f801cfb17.png"},9832:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/create-build-3df7594bcbb47bbdf8371d4232b58fac.png"},4841:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/see-build-harbor-2f494c446cd55265ff5758d1690d7fc3.png"}}]);