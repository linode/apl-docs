"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7638],{5986:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var o=s(5893),a=s(1151);const l={slug:"create-workloads",title:"Create Workloads",sidebar_label:"Create Workloads"},n=void 0,r={id:"get-started/labs/create-workloads",title:"Create Workloads",description:"In the previous lab we deployed a workload using Argo CD with a BYO manifest and we explored the Catalog. In this lab we'll create a Workload (a Kubernetes Deployment) using the Catalog and the Workload self-service feature.",source:"@site/docs/get-started/labs/create-workloads.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/create-workloads",permalink:"/docs/get-started/labs/create-workloads",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/labs/create-workloads.md",tags:[],version:"current",frontMatter:{slug:"create-workloads",title:"Create Workloads",sidebar_label:"Create Workloads"},sidebar:"mainSidebar",previous:{title:"Use the Catalog",permalink:"/docs/get-started/labs/use-catalog"},next:{title:"Expose Services",permalink:"/docs/get-started/labs/expose-services"}},d={},i=[{value:"Create a Workload using the Catalog",id:"create-a-workload-using-the-catalog",level:2}];function c(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In the previous lab we deployed a workload using Argo CD with a BYO manifest and we explored the Catalog. In this lab we'll create a Workload (a Kubernetes Deployment) using the Catalog and the Workload self-service feature."}),"\n",(0,o.jsx)(t.h2,{id:"create-a-workload-using-the-catalog",children:"Create a Workload using the Catalog"}),"\n",(0,o.jsxs)(t.p,{children:["Before creating a Workload from the Catalog, we'll need the ",(0,o.jsx)(t.code,{children:"repository"})," and ",(0,o.jsx)(t.code,{children:"tag"})," of the image to use. Go to the list of Builds and add the ",(0,o.jsx)(t.code,{children:"repository"})," of the ",(0,o.jsx)(t.code,{children:"blue"})," build to your clipboard. Remember that the tag is ",(0,o.jsx)(t.code,{children:"latest"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"You can create a workload from the developer catalog:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.code,{children:"Catalog"})," in the left menu and click on the ",(0,o.jsx)(t.code,{children:"Quickstart-K8s-Deployment"}),"template."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click on ",(0,o.jsx)(t.code,{children:"Values"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Add the Name ",(0,o.jsx)(t.code,{children:"blue"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Leave the ",(0,o.jsx)(t.code,{children:"Auto image updater"})," to ",(0,o.jsx)(t.code,{children:"Disabled"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the workload ",(0,o.jsx)(t.code,{children:"values"}),", change the following parameters:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"image:\n  repository: <paste from clipboard>\n  tag: latest\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"workloads",src:s(3940).Z+"",width:"3180",height:"2002"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Deploy Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"All the needed Argo CD resources to deploy your workload will now be created."}),"\n",(0,o.jsxs)(t.ol,{start:"8",children:["\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.code,{children:"Workloads"})," in the left menu. You will now see a list of all Workloads and there status:"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"workloads",src:s(1951).Z+"",width:"2362",height:"1112"})}),"\n",(0,o.jsxs)(t.ol,{start:"9",children:["\n",(0,o.jsxs)(t.li,{children:["In the workloads list, click on the ",(0,o.jsx)(t.code,{children:"Application"})," link of your workload to see the status of your workload in Argo CD:"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"workloads",src:s(3080).Z+"",width:"3202",height:"1562"})}),"\n",(0,o.jsx)(t.p,{children:"The values of a workload can be changed at any time. Changes will automatically be synchronized."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3940:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/workloads-1-7000bf60259adf90d80a8f8bde0b162c.png"},1951:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/workloads-2-e3ed841a534a95713897e3cd5e2ea280.png"},3080:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/workloads-3-293aaadb75696774b05ec448975862f4.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>n});var o=s(7294);const a={},l=o.createContext(a);function n(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);