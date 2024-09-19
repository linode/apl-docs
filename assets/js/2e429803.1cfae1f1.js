"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5786],{181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(5893),i=t(1151);const a={slug:"scan-containers",title:"Scan your running containers for vulnerabilities",sidebar_label:"Scan Containers"},r=void 0,o={id:"get-started/labs/scan-containers",title:"Scan your running containers for vulnerabilities",description:"Trivy Operator needs to be activated for this lab.",source:"@site/docs/get-started/labs/scan-containers.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/scan-containers",permalink:"/docs/get-started/labs/scan-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/labs/scan-containers.md",tags:[],version:"current",frontMatter:{slug:"scan-containers",title:"Scan your running containers for vulnerabilities",sidebar_label:"Scan Containers"},sidebar:"mainSidebar",previous:{title:"Scan Images",permalink:"/docs/get-started/labs/scan-images"},next:{title:"View Container Logs",permalink:"/docs/get-started/labs/view-logs"}},c={},l=[{value:"See Trivy scan results",id:"see-trivy-scan-results",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Trivy Operator needs to be activated for this lab."})}),"\n",(0,s.jsx)(n.p,{children:"So now you know how to scan container images when pushed to Harbor. But what if you have long running versions of containers? When new vulnerabilities are identified after you scanned the image, you wil only see them when you update your image. For this scenario, APL offers Trivy Operator for automatic daily scanning of containers in all Teams."}),"\n",(0,s.jsx)(n.h2,{id:"see-trivy-scan-results",children:"See Trivy scan results"}),"\n",(0,s.jsx)(n.p,{children:"When Trivy is enabled by the platform admin and APL runs in multi-tenant mode, then each team will see the Trivy scan results for all containers deployed within the Team, in a Trivy dashboard in Grafana."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the left menu, click on ",(0,s.jsx)(n.code,{children:"apps"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.code,{children:"Grafana"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the Trivy scan results dashboard."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In the dashboard you can see all identified vulnerabilities per container:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kubecfg",src:t(9898).Z+"",width:"2864",height:"1582"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9898:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/trivy-dashboard-5c26f046dbb2689a5e8f05ab3e6f364d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);