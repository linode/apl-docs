"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4986],{4530:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var n=o(5893),l=o(1151);const t={slug:"netpols",title:"Team Network Policies",sidebar_label:"Network Policies"},r=void 0,i={id:"for-devs/console/netpols",title:"Team Network Policies",description:"A Network Policy in APL is a self-service feature for creating Kubernetes Network Policies (Ingress) and Istio Service Entries (Egress).",source:"@site/docs/for-devs/console/netpols.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/netpols",permalink:"/docs/for-devs/console/netpols",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-devs/console/netpols.md",tags:[],version:"current",frontMatter:{slug:"netpols",title:"Team Network Policies",sidebar_label:"Network Policies"},sidebar:"mainSidebar",previous:{title:"Workloads",permalink:"/docs/for-devs/console/workloads"},next:{title:"Services",permalink:"/docs/for-devs/console/services"}},c={},d=[{value:"Network Policies (all)",id:"network-policies-all",level:2},{value:"Create a Network Policy",id:"create-a-network-policy",level:2},{value:"Ingress",id:"ingress",level:3},{value:"Egress",id:"egress",level:3}];function a(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"A Network Policy in APL is a self-service feature for creating Kubernetes Network Policies (Ingress) and Istio Service Entries (Egress)."}),"\n",(0,n.jsxs)(s.p,{children:["When the Network Policies ",(0,n.jsx)(s.code,{children:"Ingress control"})," option is enabled for the team, all traffic to the Pods of the Team (from other Pods within the Team and from Pods in other Teams) will be blocked by default. To allow other Pods to access your Pod you will need to create a Network Policy of type ",(0,n.jsx)(s.code,{children:"ingress"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["When the Network Policies ",(0,n.jsx)(s.code,{children:"Egress control"})," option is enabled for the team, all traffic to external endpoints (outside of the cluster) is blocked by default. To allow access to external endpoints you will need to create a Network Policy of type ",(0,n.jsx)(s.code,{children:"egress"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"network-policies-all",children:"Network Policies (all)"}),"\n",(0,n.jsx)(s.p,{children:"All Network Policies of the team are listed here."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Name"}),(0,n.jsx)(s.td,{children:"The name of the Network Policy"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Rule type"}),(0,n.jsx)(s.td,{children:"Type of the Network Policy (Ingress or Egress)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Team"}),(0,n.jsx)(s.td,{children:"The name of the Team responsible for the build"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"create-a-network-policy",children:"Create a Network Policy"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Enter a name for the Network Policy."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Select the Rule type:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"Ingress"})," to allow other Pods to connect to your Pod"]}),"\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"Egress"})," to allow all Pods in the Team to connect an external (outside of the cluster) endpoint (based on a FQDN or an IP address)"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"ingress",children:"Ingress"}),"\n",(0,n.jsxs)(s.p,{children:["If type ",(0,n.jsx)(s.code,{children:"Ingress"})," is selected:"]}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Add the label name and value of your Pod."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Select the mode."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.code,{children:"AllowAll"})," to allow all Pods in all Teams to connect to your Pod"]}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.code,{children:"AllowOnly"})," to only allow specific Pods in a specific Namespace"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["If mode ",(0,n.jsx)(s.code,{children:"AllowOnly"})," is selected:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Add the label name (",(0,n.jsx)(s.code,{children:"fromLabelName"}),") of the Pod that is allowed to connect"]}),"\n",(0,n.jsxs)(s.li,{children:["Add the label value (",(0,n.jsx)(s.code,{children:"fromLabelValue"}),") of the Pod that is allowed to connect"]}),"\n",(0,n.jsxs)(s.li,{children:["Add the namespace (",(0,n.jsx)(s.code,{children:"fromNamespace"}),") of the Pod that is allowed to connect"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"egress",children:"Egress"}),"\n",(0,n.jsxs)(s.p,{children:["If type ",(0,n.jsx)(s.code,{children:"Egress"})," is selected:"]}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Add the Fully Qualified Domain Name (FQDN) or the IP address of the external endpoint."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Add the Port number (between 1 and 65535)."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Select the Protocol (HTTP, HTTPS or TCP)."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>r});var n=o(7294);const l={},t=n.createContext(l);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);