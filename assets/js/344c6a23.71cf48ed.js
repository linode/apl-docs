"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2358],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(i),c=r,b=h["".concat(d,".").concat(c)]||h[c]||p[c]||l;return i?n.createElement(b,a(a({ref:t},u),{},{components:i})):n.createElement(b,a({ref:t},u))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5727:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=i(7462),r=(i(7294),i(3905));const l={slug:"lab-26",title:"Trigger builds",sidebar_label:"Trigger builds"},a=void 0,o={unversionedId:"for-devs/get-started/lab-26",id:"for-devs/get-started/lab-26",title:"Trigger builds",description:"In the previous lab we created a build in Otomi using the blue repo in Gitea. In this lab we'll create a build for the green repo and trigger the build based on a webhook.",source:"@site/docs/for-devs/get-started/lab-26.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-26",permalink:"/docs/for-devs/get-started/lab-26",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-26.md",tags:[],version:"current",frontMatter:{slug:"lab-26",title:"Trigger builds",sidebar_label:"Trigger builds"},sidebar:"mainSidebar",previous:{title:"Build images",permalink:"/docs/for-devs/get-started/lab-6"},next:{title:"Create secrets",permalink:"/docs/for-devs/get-started/lab-8"}},d={},s=[{value:"Create a build in Otomi with Trigger enabled",id:"create-a-build-in-otomi-with-trigger-enabled",level:2},{value:"Get the webhook URL",id:"get-the-webhook-url",level:2},{value:"Create a Webhook",id:"create-a-webhook",level:2},{value:"Trigger the build",id:"trigger-the-build",level:2},{value:"Check the status of the build",id:"check-the-status-of-the-build",level:2}],u={toc:s};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous lab we created a build in Otomi using the ",(0,r.kt)("inlineCode",{parentName:"p"},"blue")," repo in Gitea. In this lab we'll create a build for the ",(0,r.kt)("inlineCode",{parentName:"p"},"green")," repo and trigger the build based on a webhook."),(0,r.kt)("h2",{id:"create-a-build-in-otomi-with-trigger-enabled"},"Create a build in Otomi with Trigger enabled"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the left menu, click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Builds")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Create Build")),(0,r.kt)("li",{parentName:"ol"},"Fill in the name ",(0,r.kt)("inlineCode",{parentName:"li"},"green")," for your build"),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"./Dockerfile")," and fill in the repo URL for the ",(0,r.kt)("inlineCode",{parentName:"li"},"green")," repo created in the previous lab."),(0,r.kt)("li",{parentName:"ol"},"Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"Trigger")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,r.kt)("h2",{id:"get-the-webhook-url"},"Get the webhook URL"),(0,r.kt)("p",null,"Before we can configure the webhook for the ",(0,r.kt)("inlineCode",{parentName:"p"},"green")," repo in Gitea, we will need the webhook URL. You can find this webhook URL for your build in the list of Builds. Add the webhook URL to your clipboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"trigger build",src:i(8275).Z,width:"2250",height:"960"})),(0,r.kt)("p",null,"Also notice that the status of the Build shows an exclamation mark. This is because Otomi created the Pipeline, but the PipelineRun is not yet created because it was not triggered yet."),(0,r.kt)("h2",{id:"create-a-webhook"},"Create a Webhook"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Otomi Console, click on ",(0,r.kt)("inlineCode",{parentName:"li"},"apps")," the left menu and then open ",(0,r.kt)("inlineCode",{parentName:"li"},"Gitea")),(0,r.kt)("li",{parentName:"ol"},"In the top menu of Gitea, click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Explore")," and then on the ",(0,r.kt)("inlineCode",{parentName:"li"},"green")," repo"),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (top right) and then to ",(0,r.kt)("inlineCode",{parentName:"li"},"Webhooks")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Webhook")," and select ",(0,r.kt)("inlineCode",{parentName:"li"},"Gitea")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Target URL"),", paste the webhook URL from your clipboard."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Webhook"))),(0,r.kt)("h2",{id:"trigger-the-build"},"Trigger the build"),(0,r.kt)("p",null,"You can now trigger the build by doing a commit in the ",(0,r.kt)("inlineCode",{parentName:"p"},"green")," repo, or by testing the webhook. Let's test the webhook:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Gitea, go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (top right) of the ",(0,r.kt)("inlineCode",{parentName:"li"},"green")," repo and then to ",(0,r.kt)("inlineCode",{parentName:"li"},"Webhooks")),(0,r.kt)("li",{parentName:"ol"},"Click on the webhook we just created"),(0,r.kt)("li",{parentName:"ol"},"In the bottom, click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Test Delivery"))),(0,r.kt)("h2",{id:"check-the-status-of-the-build"},"Check the status of the build"),(0,r.kt)("p",null,"The build should now have started. Based on the webhook, Tekton has now created a ",(0,r.kt)("inlineCode",{parentName:"p"},"PipelineRun"),". Let's check the status of the PipelineRun:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Otomi Console, click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Builds"))),(0,r.kt)("p",null,"Because the Build was triggered, a PipelineRun is now running and the status of the Build will show ",(0,r.kt)("inlineCode",{parentName:"p"},"in progress"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"trigger build",src:i(6866).Z,width:"2228",height:"870"})),(0,r.kt)("p",null,"When the Build is completed, the status will show ",(0,r.kt)("inlineCode",{parentName:"p"},"healthy"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"trigger build",src:i(2434).Z,width:"2252",height:"724"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In the list of Builds, click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"PipelineRun")," link of the ",(0,r.kt)("inlineCode",{parentName:"li"},"green")," build"),(0,r.kt)("li",{parentName:"ol"},"Tekton Dashboard will open and show a list of all the PipelineRuns. It will show all PipelineRuns because when using a Trigger, the PipelineRun resource is created based on a template and Otomi will not know the exact name of the PipelineRun because the name is automatically generated."),(0,r.kt)("li",{parentName:"ol"},"Click on the PipelineRun with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-trigger-build-green-*")),(0,r.kt)("li",{parentName:"ol"},"You can now see the the full log of the build")))}p.isMDXComponent=!0},6866:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/trigger-builds-2-e282da16fa6c32735135734a512c57b8.png"},2434:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/trigger-builds-3-eec76fb07711b588f4161fdefaaf8dab.png"},8275:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/trigger-builds-f01f4a7ec35391ad9e2d0457c7d26627.png"}}]);