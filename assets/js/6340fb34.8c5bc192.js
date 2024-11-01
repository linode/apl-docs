"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6781],{6535:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var s=t(5893),o=t(1151);const n={slug:"security-policies",title:"Security policies",sidebar_label:"Security policies"},c=void 0,r={id:"for-devs/console/security-policies",title:"Security policies",description:"Ask your platform administrator to activate the Kyverno App to use this feature.",source:"@site/docs/for-devs/console/security-policies.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/security-policies",permalink:"/docs/for-devs/console/security-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-devs/console/security-policies.md",tags:[],version:"current",frontMatter:{slug:"security-policies",title:"Security policies",sidebar_label:"Security policies"},sidebar:"mainSidebar",previous:{title:"Services",permalink:"/docs/for-devs/console/services"},next:{title:"User Management",permalink:"/docs/for-devs/console/user-management"}},l={},d=[{value:"About Security Policies",id:"about-security-policies",level:2},{value:"Adjusting Security Policies",id:"adjusting-security-policies",level:2},{value:"See policy reports",id:"see-policy-reports",level:2}];function h(e){const i={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Ask your platform administrator to activate the Kyverno App to use this feature."})}),"\n",(0,s.jsx)(i.p,{children:"All known Security Policies for the Team are listed here. Security policies can be sorted based on:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Name"}),(0,s.jsx)(i.td,{children:"The name of the Security Policy"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Severity"}),(0,s.jsxs)(i.td,{children:["The Severity of the policy. Can be ",(0,s.jsx)(i.code,{children:"low"}),", ",(0,s.jsx)(i.code,{children:"medium"})," or ",(0,s.jsx)(i.code,{children:"high"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Action"}),(0,s.jsxs)(i.td,{children:["The action to take when a policy gets violated. Can be ",(0,s.jsx)(i.code,{children:"Audit"})," (which is the default) or ",(0,s.jsx)(i.code,{children:"Enforce"})]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"about-security-policies",children:"About Security Policies"}),"\n",(0,s.jsx)(i.p,{children:"When Security Policies are enabled for the Team, then know that:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Team's can only modify policies if the Platform administrator allowed the Team to edit policies (see the Team permissions in de Team Settings)"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Teams can ask the Platform administrator to adjust the default list of policies for the Team."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Some of the policies can be adjusted using ",(0,s.jsx)(i.code,{children:"Custom Values"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"adjusting-security-policies",children:"Adjusting Security Policies"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Select the Security Policy you like to adjust."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Set the ",(0,s.jsx)(i.code,{children:"action"})," to ",(0,s.jsx)(i.code,{children:"Enforce"})," to block Pods from being deployed if the don't comply to the policy."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Change the severity from ",(0,s.jsx)(i.code,{children:"medium"})," (default) to ",(0,s.jsx)(i.code,{children:"low"})," or ",(0,s.jsx)(i.code,{children:"high"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"see-policy-reports",children:"See policy reports"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Go to ",(0,s.jsx)(i.code,{children:"Workloads"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click on the ArgoCD ",(0,s.jsx)(i.code,{children:"application"})," for the Workload you want to see the policy report."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the ",(0,s.jsx)(i.code,{children:"Application Details Tree"})," you will see a ",(0,s.jsx)(i.code,{children:"policyreport"})," attached to the ",(0,s.jsx)(i.code,{children:"ReplicaSet"})," and an ",(0,s.jsx)(i.code,{children:"admissionreport"})," attached to each ",(0,s.jsx)(i.code,{children:"Pod"}),"."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>c});var s=t(7294);const o={},n=s.createContext(o);function c(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);