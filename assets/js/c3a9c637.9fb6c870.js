"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1576],{8962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(5893),a=n(1151);const s={slug:"alertmanager",title:"Alertmanager",sidebar_label:"Alertmanager"},i=void 0,l={id:"apps/alertmanager",title:"Alertmanager",description:"About",source:"@site/docs/apps/alertmanager.md",sourceDirName:"apps",slug:"/apps/alertmanager",permalink:"/docs/apps/alertmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/alertmanager.md",tags:[],version:"current",frontMatter:{slug:"alertmanager",title:"Alertmanager",sidebar_label:"Alertmanager"},sidebar:"mainSidebar",previous:{title:"Apps Overview",permalink:"/docs/apps/apps-overview"},next:{title:"Argo CD",permalink:"/docs/apps/argocd"}},o={},c=[{value:"About",id:"about",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"about",children:"About"}),"\n",(0,r.jsx)(t.p,{children:"Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of de-duplicating, grouping, and routing them to the correct receiver integration such as email, Slack, MS Teams, or OpsGenie. It also takes care of silencing and inhibition of alerts."}),"\n",(0,r.jsxs)(t.p,{children:["Alertmanager is configured to use the global values found under settings' ",(0,r.jsx)(t.a,{href:"/docs/for-ops/console/settings/alerts",children:"alerts"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A team may decide to override some or all of them, in order to have alerts sent to their own endpoints. Self-service rights to alerting must be enabled for the team (enabled by default for all teams). Each Team can enable a dedicated alertmanager instance."}),"\n",(0,r.jsx)(t.p,{children:"APL supports the following receivers:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"Slack"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"Microsoft Teams"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"Ops Genie"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"Email"})}),"\n",(0,r.jsxs)(t.li,{children:["(default) ",(0,r.jsx)(t.code,{children:"None"})," (will use the ",(0,r.jsx)(t.code,{children:"null"})," receiver to enable the Alertmanager UI)."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(7294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);