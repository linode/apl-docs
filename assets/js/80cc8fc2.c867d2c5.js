"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[411],{7783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(5893),r=n(1151);const a={slug:"entrypoint",title:"Install with entrypoint",sidebar_label:"Entrypoint"},i=void 0,o={id:"get-started/installation/entrypoint",title:"Install with entrypoint",description:"In some cases, the Kubernetes cluster will de deployed in a private setup where public access is only possible using an external gateway or firewall.",source:"@site/docs/get-started/installation/entrypoint.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/entrypoint",permalink:"/docs/get-started/installation/entrypoint",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/installation/entrypoint.md",tags:[],version:"current",frontMatter:{slug:"entrypoint",title:"Install with entrypoint",sidebar_label:"Entrypoint"},sidebar:"mainSidebar",previous:{title:"SOPS",permalink:"/docs/get-started/installation/sops"},next:{title:"BYO Wild Card Cert",permalink:"/docs/get-started/installation/byo-wildcard-cert"}},l={},d=[{value:"Use case",id:"use-case",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In some cases, the Kubernetes cluster will de deployed in a private setup where public access is only possible using an external gateway or firewall."}),"\n",(0,s.jsx)(t.h2,{id:"use-case",children:"Use case"}),"\n",(0,s.jsx)(t.p,{children:"When installed on a private Kubernetes cluster and all services are exposed using a private load balancer, we would like to create A records and point them to the IP address of the external gateway instead of the Ip address of the private load balancer."}),"\n",(0,s.jsxs)(t.p,{children:["For this you can use the ",(0,s.jsx)(t.code,{children:"entrypoint"}),". The entrypoint is a public IP address that will override the (load balancer's private) IP used for registering hosts in DNS. This allows public access to private clusters through an external gateway."]}),"\n",(0,s.jsxs)(t.p,{children:["To configure an entrypoint, add the following to the ",(0,s.jsx)(t.code,{children:"values.yaml"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"ingress:\n  platformClass:\n    entrypoint: <entrypoint-ip-address>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Make sure the external gateway is configured to connect to the IP of the private load balancer used by the ",(0,s.jsx)(t.code,{children:"platformClass"})," ingress controller."]}),"\n",(0,s.jsx)(t.p,{children:"The DNS A records will now point to the IP address of the external gateway."})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);