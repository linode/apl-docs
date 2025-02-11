"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8289],{9275:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"for-devs/console/workloads","title":"Team Workloads","description":"A Workload is a self-service feature for creating Kubernetes resources using Helm charts from the Catalog.","source":"@site/docs/for-devs/console/workloads.md","sourceDirName":"for-devs/console","slug":"/for-devs/console/workloads","permalink":"/docs/for-devs/console/workloads","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-devs/console/workloads.md","tags":[],"version":"current","frontMatter":{"slug":"workloads","title":"Team Workloads","sidebar_label":"Workloads"},"sidebar":"mainSidebar","previous":{"title":"Builds","permalink":"/docs/for-devs/console/builds"},"next":{"title":"Network Policies","permalink":"/docs/for-devs/console/netpols"}}');var r=t(4848),n=t(8453);const l={slug:"workloads",title:"Team Workloads",sidebar_label:"Workloads"},a=void 0,d={},i=[{value:"Workloads (all)",id:"workloads-all",level:2},{value:"Create a Workload",id:"create-a-workload",level:2}];function c(e){const o={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"A Workload is a self-service feature for creating Kubernetes resources using Helm charts from the Catalog."}),"\n",(0,r.jsx)(o.h2,{id:"workloads-all",children:"Workloads (all)"}),"\n",(0,r.jsx)(o.p,{children:"All Workloads of the team are listed here."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Team workloads",src:t(9334).A+"",width:"2376",height:"1178"})}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Property"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Name"}),(0,r.jsx)(o.td,{children:"The name of the workload"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Argocd"}),(0,r.jsx)(o.td,{children:"Link to the Argo CD application in the Argo CD UI"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Image update strategy"}),(0,r.jsx)(o.td,{children:"The configured update strategy for the workload"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Status"}),(0,r.jsx)(o.td,{children:"The status of the workload. Click on the Argo CD application link to see more status details"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"create-a-workload",children:"Create a Workload"}),"\n",(0,r.jsxs)(o.p,{children:["Before creating a workload from the developer catalog, we'll need the ",(0,r.jsx)(o.code,{children:"repository"})," and ",(0,r.jsx)(o.code,{children:"tag"})," of the image you would like to use."]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Go to the list of Builds and add the ",(0,r.jsx)(o.code,{children:"repository"})," of the build to use to your clipboard. Remember the tag."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Go to ",(0,r.jsx)(o.code,{children:"Workloads"})," in the left menu and click on ",(0,r.jsx)(o.code,{children:"Create Workload"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Select a template from the catalog to use."}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Add a ",(0,r.jsx)(o.code,{children:"Name"})," for the workload."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["(Optional) Configure the ",(0,r.jsx)(o.code,{children:"Auto image updater"}),". Default is ",(0,r.jsx)(o.code,{children:"Disabled"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"The Auto Image Updater will (based on the update strategy) automatically update the container images of a workload."}),"\n",(0,r.jsx)(o.p,{children:"Select the update strategy. Choose between:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Digest: Inspects a single tag in the registry for changes, and updates the image on any change to the previous state. Requires to provide a ",(0,r.jsx)(o.code,{children:"repository"})," and a ",(0,r.jsx)(o.code,{children:"tag"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Semver: Update based on semantic versions. Example: ",(0,r.jsx)(o.code,{children:"v1.0"})," would allow the image to be updated to any patch version within the 1.0 minor release."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["There are 2 other properties available: ",(0,r.jsx)(o.code,{children:"imageParameter"})," and ",(0,r.jsx)(o.code,{children:"tagParameter"}),". Change the parameters in case your Helm application contains more than one image in the manifests or uses another parameters to define which image to render in the manifests."]}),"\n",(0,r.jsxs)(o.ol,{start:"6",children:["\n",(0,r.jsxs)(o.li,{children:["In the workload ",(0,r.jsx)(o.code,{children:"values"}),", change the following parameters:"]}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"image:\n  repository: <paste from clipboard>\n  tag: latest\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"6",children:["\n",(0,r.jsxs)(o.li,{children:["Click ",(0,r.jsx)(o.code,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["After a few minutes, all the needed Argo CD resources (one ",(0,r.jsx)(o.code,{children:"applicationSet"})," per Workload) to deploy your workload will be created. In the workloads list, click on the ",(0,r.jsx)(o.code,{children:"Application"})," link of your workload to see the status of your workload."]}),"\n",(0,r.jsx)(o.p,{children:"The values of a workload can be changed at any time. Changes will automatically be deployed."})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9334:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/team-workloads-3f0f5ef066baee14d59050148d354204.png"},8453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>a});var s=t(6540);const r={},n=s.createContext(r);function l(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);