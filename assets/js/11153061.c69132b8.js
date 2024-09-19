"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9063],{3946:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=s(5893),t=s(1151);const a={slug:"canary-deployment",title:"Canary deployment",sidebar_label:"Canary Deployment"},i=void 0,l={id:"get-started/labs/canary-deployment",title:"Canary deployment",description:"In this lab we are going to create a canary deployment. The idea behind canary deployment (or rollout) is to introduce a new version of an application by first testing it using a small percentage of user traffic, and then if all goes well increasing the percentage while simultaneously phasing out the old version.",source:"@site/docs/get-started/labs/canary-deployment.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/canary-deployment",permalink:"/docs/get-started/labs/canary-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/canary-deployment.md",tags:[],version:"current",frontMatter:{slug:"canary-deployment",title:"Canary deployment",sidebar_label:"Canary Deployment"},sidebar:"mainSidebar",previous:{title:"Use OpenTelemery",permalink:"/docs/get-started/labs/use-otel"},next:{title:"Create RabbitMQ cluster",permalink:"/docs/get-started/labs/create-rabbitmq-cluster"}},d={},o=[{value:"Prepare images",id:"prepare-images",level:2},{value:"Create a workload from the Catalog",id:"create-a-workload-from-the-catalog",level:2},{value:"Expose the service",id:"expose-the-service",level:2},{value:"See the results",id:"see-the-results",level:2},{value:"Update the canary image",id:"update-the-canary-image",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this lab we are going to create a canary deployment. The idea behind canary deployment (or rollout) is to introduce a new version of an application by first testing it using a small percentage of user traffic, and then if all goes well increasing the percentage while simultaneously phasing out the old version."}),"\n",(0,r.jsx)(n.p,{children:"For this we are going to deploy the stable version (blue), introduce a new version and then change the new version until we are happy with it and then increase the traffic to the new version."}),"\n",(0,r.jsx)(n.h2,{id:"prepare-images",children:"Prepare images"}),"\n",(0,r.jsxs)(n.p,{children:["For this lab we need the 2 images (",(0,r.jsx)(n.code,{children:"blue"})," and ",(0,r.jsx)(n.code,{children:"green"}),") we already created in the previous labs. If you haven't created the blue and green images, first complete these 2 labs:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/get-started/labs/build-images",children:"Build images"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/get-started/labs/trigger-builds",children:"Trigger builds"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Or you can use public images e.g. ",(0,r.jsx)(n.code,{children:"nginx:latest"})," and ",(0,r.jsx)(n.code,{children:"tomcat:latest"})," for this lab."]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-workload-from-the-catalog",children:"Create a workload from the Catalog"}),"\n",(0,r.jsxs)(n.p,{children:["Go to the list of Builds and add the ",(0,r.jsx)(n.code,{children:"repository"})," of the ",(0,r.jsx)(n.code,{children:"green"})," build to your clipboard."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.code,{children:"Workloads"})," in the left menu and click on ",(0,r.jsx)(n.code,{children:"Create Workload"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.code,{children:"k8s-deployment-canary"})," from the Catalog."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the Name ",(0,r.jsx)(n.code,{children:"canary"})," for the workload."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the ",(0,r.jsx)(n.code,{children:"Auto image updater"})," to ",(0,r.jsx)(n.code,{children:"Digest"})," and fill in:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"imageRepository : paste from the clipboard"}),"\n",(0,r.jsxs)(n.li,{children:["imageParameter : ",(0,r.jsx)(n.code,{children:"versionTwo.image.repository"})]}),"\n",(0,r.jsxs)(n.li,{children:["tagParameter : ",(0,r.jsx)(n.code,{children:"versionTwo.image.tag"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["In the workload ",(0,r.jsx)(n.code,{children:"values"}),", change the following parameters:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# For the v1 as the stable version\nversionOne:\n  image:\n    repository: # paste from clipboard, but change to blue\n    tag: latest\n# The v2 as canary with the auto image updater configured\nversionTwo:\n  image:\n    repository: # paste from clipboard. This will be the green image\n    tag: latest\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.code,{children:"Submit"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on ",(0,r.jsx)(n.code,{children:"Deploy Changes"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["We now created 2 deployments. One for ",(0,r.jsx)(n.code,{children:"blue"})," and one for ",(0,r.jsx)(n.code,{children:"green"}),". The ",(0,r.jsx)(n.code,{children:"green"})," image (our canary) will be automatically updated after a change (commit)."]}),"\n",(0,r.jsx)(n.h2,{id:"expose-the-service",children:"Expose the service"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the left menu panel under click ",(0,r.jsx)(n.code,{children:"Services"})," then click on ",(0,r.jsx)(n.code,{children:"Create Service"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the ",(0,r.jsx)(n.code,{children:"canary"})," service."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.code,{children:"Traffic Control"})," click ",(0,r.jsx)(n.code,{children:"enabled"})," (and use the default weights for v1 and v2)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.code,{children:"Exposure Ingress"}),", select ",(0,r.jsx)(n.code,{children:"Ingress"})," and use the default configuration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.code,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.code,{children:"Deploy Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"see-the-results",children:"See the results"}),"\n",(0,r.jsxs)(n.p,{children:["You will see the ",(0,r.jsx)(n.code,{children:"canary"})," service in the list of Services. Click on the URL and refresh the page for a couple of times. You should first see:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Team apps",src:s(1075).Z+"",width:"1946",height:"974"})}),"\n",(0,r.jsx)(n.p,{children:"After a refresh of the page you should see:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Team apps",src:s(1779).Z+"",width:"1944",height:"968"})}),"\n",(0,r.jsx)(n.h2,{id:"update-the-canary-image",children:"Update the canary image"}),"\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.code,{children:"green"})," repo and change the ",(0,r.jsx)(n.code,{children:"background-color"})," in the ",(0,r.jsx)(n.code,{children:"green.html"})," file from ",(0,r.jsx)(n.code,{children:"green"})," to ",(0,r.jsx)(n.code,{children:"MediumSeaGreen"})," and commit the change. After a couple of minutes you should now see the background color of version 1 (our canary) changed:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Team apps",src:s(4810).Z+"",width:"2422",height:"1188"})}),"\n",(0,r.jsx)(n.p,{children:"Do you see the difference?"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1075:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/canary-v1-7918cee6deeb9623785fde0e3f2ad204.png"},4810:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/canary-v2-mediumgreen-159d17ee97473283700b9d217c99ba84.png"},1779:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/canary-v2-de0a8acd39d54883520fbb243566df54.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var r=s(7294);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);