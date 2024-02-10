"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9613],{7313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=r(5893),n=r(1151);const a={slug:"roadmap",title:"Product Roadmap",sidebar_label:"Roadmap"},o="Roadmap",s={id:"roadmap",title:"Product Roadmap",description:"Supported Kubernetes version",source:"@site/product/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/product/roadmap",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/roadmap.md",tags:[],version:"current",lastUpdatedBy:"Sander Rodenhuis",lastUpdatedAt:1707574785,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{slug:"roadmap",title:"Product Roadmap",sidebar_label:"Roadmap"},sidebar:"mainSidebar",previous:{title:"Otomi Projects",permalink:"/product/architecture"},next:{title:"FAQ",permalink:"/product/faq"}},l={},d=[{value:"Supported Kubernetes version",id:"supported-kubernetes-version",level:2},{value:"2023 Q4",id:"2023-q4",level:2},{value:"2024 Q1",id:"2024-q1",level:2},{value:"2024 Q2",id:"2024-q2",level:2},{value:"After Q2 2024",id:"after-q2-2024",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"roadmap",children:"Roadmap"}),"\n",(0,i.jsx)(t.h2,{id:"supported-kubernetes-version",children:"Supported Kubernetes version"}),"\n",(0,i.jsx)(t.p,{children:"We are dedicated to maintain support for three different Kubernetes versions within a specific major version of Otomi. Whenever we decide to discontinue support for a particular Kubernetes version, we increment the major version of Otomi."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Otomi Version"}),(0,i.jsx)(t.th,{children:"Supported Kubernetes version"}),(0,i.jsx)(t.th,{children:"Expected release date"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"v1.0.0"}),(0,i.jsx)(t.td,{children:"1.25, 1.26, 1.27"}),(0,i.jsx)(t.td,{children:"2023-09-28"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"v2.0.0"}),(0,i.jsx)(t.td,{children:"1.25, 1.26, 1.27"}),(0,i.jsx)(t.td,{children:"2023-11-28"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"v3.0.0"}),(0,i.jsx)(t.td,{children:"1.26, 1.27, 1.28"}),(0,i.jsx)(t.td,{children:"2024-03-28"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"2023-q4",children:"2023 Q4"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Provide a developer catalog in Gitea \u2705"}),"\n",(0,i.jsx)(t.li,{children:"Migrate platform pipeline from Drone to Tekton \u2705"}),"\n",(0,i.jsx)(t.li,{children:"Implement status indicators within Otomi Console to keep Team users informed about the status of various components, including Build processes, Workload management, and Service availability \u2705"}),"\n",(0,i.jsx)(t.li,{children:"Add Team and Platform Dashboards to provide an overview of team resource status using Prometheus metrics \u2705"}),"\n",(0,i.jsx)(t.li,{children:"Leverage Argo CD to deploy Team K8s resources \u2705"}),"\n",(0,i.jsx)(t.li,{children:"Quality assurance cluster for continuous Otomi hardening and performance testing \u2705"}),"\n",(0,i.jsx)(t.li,{children:"Provide UI interface for adding Helm charts to developer catalog in Gitea \u2705"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"2024-q1",children:"2024 Q1"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Add Grype to the Otomi Build pipeline to scan source code for security vulnerabilities \u2705"}),"\n",(0,i.jsxs)(t.li,{children:["Add the option to add charts from ",(0,i.jsx)(t.a,{href:"https://artifacthub.io",children:"artifacthub"})," to the Catalog \ud83d\udd04"]}),"\n",(0,i.jsx)(t.li,{children:"Implement a new secret management solution (as a replacement for Hashicorp Vault) \ud83d\udd04"}),"\n",(0,i.jsx)(t.li,{children:"Move network policies out of the Service configuration to improve network policy management \ud83d\udd04"}),"\n",(0,i.jsx)(t.li,{children:"Migrate OPA/Gatekeeper to Kyverno and offer a large set of default policies that can also be managed by Teams \ud83d\udd04"}),"\n",(0,i.jsx)(t.li,{children:"Improve Team self-service permissions \ud83d\udd04"}),"\n",(0,i.jsx)(t.li,{children:"Leverage Argo CD to deploy Otomi Platform apps \ud83d\udd04"}),"\n",(0,i.jsx)(t.li,{children:"Harden the Istio service mesh configuration"}),"\n",(0,i.jsx)(t.li,{children:"Implement Gitea with a database managed by the CloudNativePG operator"}),"\n",(0,i.jsx)(t.li,{children:"Migrate Harbor and Keycloak Jobs to the Otomi operators"}),"\n",(0,i.jsx)(t.li,{children:"Create an Organization in Gitea for each Team (tenant)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"2024-q2",children:"2024 Q2"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Bring user management into Otomi when Keycloak is used as an IdP"}),"\n",(0,i.jsx)(t.li,{children:"Enhance network policies across the platform"}),"\n",(0,i.jsx)(t.li,{children:"Establish separate Kubernetes namespaces for Team Applications"}),"\n",(0,i.jsx)(t.li,{children:"Ensure Otomi's NSA and CISA compliance"}),"\n",(0,i.jsx)(t.li,{children:"Enable user configurable storage classes"}),"\n",(0,i.jsx)(t.li,{children:"Provide disaster recovery procedures for Otomi core applications, such as Gitea, Keycloak and Harbor"}),"\n",(0,i.jsx)(t.li,{children:"Show a compliance report (code vulnerabilities, image vulnerabilities, security violations, container vulnerabilities, config audit, exposed secrets) per workload"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"after-q2-2024",children:"After Q2 2024"}),"\n",(0,i.jsx)(t.p,{children:"After Q2 2024 we have the following goals:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Make Otomi more plugable by enabling users to bring their own platform apps"}),"\n",(0,i.jsx)(t.li,{children:"Migrate to ambient mesh using eBPF"}),"\n",(0,i.jsx)(t.li,{children:"Remove platform app forms in favor of generated values that can be customized in an editor"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var i=r(7294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);