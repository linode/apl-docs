"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1280],{8004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(5893),a=n(1151);const r={slug:"detect-threats",title:"Detect threats in running containers",sidebar_label:"Detect Threats"},i=void 0,o={id:"get-started/labs/detect-threats",title:"Detect threats in running containers",description:"Falco needs to be activated for this lab.",source:"@site/docs/get-started/labs/detect-threats.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/detect-threats",permalink:"/docs/get-started/labs/detect-threats",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/labs/detect-threats.md",tags:[],version:"current",frontMatter:{slug:"detect-threats",title:"Detect threats in running containers",sidebar_label:"Detect Threats"},sidebar:"mainSidebar",previous:{title:"Scan Containers",permalink:"/docs/get-started/labs/scan-containers"},next:{title:"View Container Logs",permalink:"/docs/get-started/labs/view-logs"}},c={},d=[{value:"Generate threats",id:"generate-threats",level:2},{value:"See the events in the detected threats in containers dashboard",id:"see-the-events-in-the-detected-threats-in-containers-dashboard",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Falco needs to be activated for this lab."})}),"\n",(0,s.jsx)(t.p,{children:"Falco is a cloud native security tool that provides runtime security. It leverages custom rules on Linux kernel events and other data sources through plugins, enriching event data with contextual metadata to deliver real-time alerts. Falco enables the detection of abnormal behavior, potential security threats, and compliance violations."}),"\n",(0,s.jsx)(t.h2,{id:"generate-threats",children:"Generate threats"}),"\n",(0,s.jsxs)(t.p,{children:["For this lab we'll deploy the ",(0,s.jsx)(t.code,{children:"event-generator"})," in a Team namespace. The event-generator is a tool designed to generate events for both syscalls and k8s audits. The tool can be used to check if Falco is working properly. It does so by performing a variety of suspects actions which trigger security events. The event-event generator implements a minimalistic framework which makes easy to implement new actions."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Add the falcosecurity charts repository:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"helm repo add falcosecurity https://falcosecurity.github.io/charts\nhelm repo update\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Install the chart in the team namespace:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"helm install team-labs falcosecurity/event-generator -n team-labs\n"})}),"\n",(0,s.jsx)(t.h2,{id:"see-the-events-in-the-detected-threats-in-containers-dashboard",children:"See the events in the detected threats in containers dashboard"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the left menu, click on ",(0,s.jsx)(t.code,{children:"Apps"})," and open ",(0,s.jsx)(t.code,{children:"Grafana"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.code,{children:"Detected threads in containers"})," dashboards"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"See all the generated threat events"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"falco-dashboard",src:n(3559).Z+"",width:"3628",height:"1894"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3559:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/falco-dashboard-f53db16fd918832ea7113895b78fd0c7.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);