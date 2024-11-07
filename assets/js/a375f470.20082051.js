"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7376],{2747:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=s(5893),r=s(1151);const o={slug:"platform",title:"Platform settings",sidebar_label:"Platform"},l=void 0,i={id:"for-ops/console/settings/platform",title:"Platform settings",description:"General Settings",source:"@site/docs/for-ops/console/settings/platform.md",sourceDirName:"for-ops/console/settings",slug:"/for-ops/console/settings/platform",permalink:"/docs/for-ops/console/settings/platform",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/console/settings/platform.md",tags:[],version:"current",frontMatter:{slug:"platform",title:"Platform settings",sidebar_label:"Platform"},sidebar:"mainSidebar",previous:{title:"Cluster",permalink:"/docs/for-ops/console/settings/cluster"},next:{title:"Key Management",permalink:"/docs/for-ops/console/settings/key-management"}},a={},d=[{value:"General Settings",id:"general-settings",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"general-settings",children:"General Settings"}),"\n",(0,n.jsx)(t.p,{children:"The Platform settings section offers configuration options for platform and feature flags that influence the way the platform behaves."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Global pull secrets"}),(0,n.jsx)(t.td,{children:'Add you Dockerhub pull secret. Will be connected to each "default" service account in all platform namespaces. Handy for authenticating with DockerHub to avoid rate limiting.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cloud ingress controller"}),(0,n.jsx)(t.td,{children:"Set this to true when using a cloud specific ingress controller. By default the Nginx Ingress Controller is used."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"External DNS"}),(0,n.jsxs)(t.td,{children:["Set this to true when an external DNS zone is available to manage DNS records. (Expects required ",(0,n.jsx)(t.code,{children:"dns:"})," fields to be set.)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"External IdP"}),(0,n.jsxs)(t.td,{children:["Set this to true when bringing your own external IDP such as Azure AD. (Expects required ",(0,n.jsx)(t.code,{children:"oidc:"})," fields to be set.)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Node Selector"}),(0,n.jsx)(t.td,{children:"When a label/value pair is added, all platform workloads will be scheduled on the nodes with this label/value pair"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Version"}),(0,n.jsxs)(t.td,{children:["The installed version. Change to a new valid release to upgrade. see the ",(0,n.jsx)(t.a,{href:"https://github.com/linode/apl-core",children:"core repo"})," for all available versions"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>l});var n=s(7294);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);