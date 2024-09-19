"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5996],{1138:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=s(5893),n=s(1151);const r={slug:"obj",title:"Platform settings",sidebar_label:"Object Storage"},i=void 0,c={id:"for-ops/console/settings/obj",title:"Platform settings",description:"Object Storage",source:"@site/docs/for-ops/console/settings/obj.md",sourceDirName:"for-ops/console/settings",slug:"/for-ops/console/settings/obj",permalink:"/docs/for-ops/console/settings/obj",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/console/settings/obj.md",tags:[],version:"current",frontMatter:{slug:"obj",title:"Platform settings",sidebar_label:"Object Storage"},sidebar:"mainSidebar",previous:{title:"Backup",permalink:"/docs/for-ops/console/settings/backup"},next:{title:"Overview",permalink:"/docs/for-ops/how-to/overview"}},d={},l=[{value:"Object Storage",id:"object-storage",level:2},{value:"Providers",id:"providers",level:3},{value:"Linode",id:"linode",level:3},{value:"Buckets",id:"buckets",level:3}];function a(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"object-storage",children:"Object Storage"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Object Storage needs to be configured to be able to use Velero and create database backups. See the ",(0,o.jsx)(t.a,{href:"/docs/for-ops/console/settings/backup",children:"backup section"}),"."]})}),"\n",(0,o.jsx)(t.admonition,{type:"important",children:(0,o.jsx)(t.p,{children:"To prevent loss of data it is advised to configure Object Storage before activating apps that use Object Storage (like Loki, Harbor and Tempo)."})}),"\n",(0,o.jsx)(t.h3,{id:"providers",children:"Providers"}),"\n",(0,o.jsx)(t.p,{children:"Select between one of the following Object Storage Providers:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Disabled (default): No provider is configured. Apps that can use Object Storage will instead be configured to use persistent volumes."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Minio Local: Use the local self-hosted minio instance in APL. When Minio Local is selected, Minio app also needs to be enabled."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Linode: Use Linode Object Storage."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"linode",children:"Linode"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Setting"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"region"}),(0,o.jsxs)(t.td,{children:["The name of the Linode region (Datacenter ID) where the buckets are created. See ",(0,o.jsx)(t.a,{href:"https://techdocs.akamai.com/cloud-computing/docs/access-buckets-and-files-through-urls#cluster-url-s3-endpoint",children:"here"})," for all Linode Datacenter IDs"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"accessKeyId"}),(0,o.jsx)(t.td,{children:"The Id of the access key with read/write permissions for all buckets"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"secretAccessKey"}),(0,o.jsx)(t.td,{children:"The secret of the access key used"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"buckets",children:"Buckets"}),"\n",(0,o.jsx)(t.p,{children:"The preferred bucket names to be used for each app"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Bucket"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"loki"}),(0,o.jsx)(t.td,{children:"Bucket used to store Loki logs"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"cnpg"}),(0,o.jsx)(t.td,{children:"Bucket used to store backups of databases"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"velero"}),(0,o.jsx)(t.td,{children:"Bucket used to store backups of Perstent Volumes by Velero"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"harbor"}),(0,o.jsx)(t.td,{children:"Bucket used to store images of private registries in Harbor"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"tempo"}),(0,o.jsx)(t.td,{children:"Bucket used to store Tempo traces"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var o=s(7294);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);