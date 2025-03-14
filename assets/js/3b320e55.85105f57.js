"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9712],{6513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"for-ops/console/team-admin-catalog","title":"Team Admin Catalog","description":"About the Catalog Helm charts","source":"@site/docs/for-ops/console/team-admin-catalog.md","sourceDirName":"for-ops/console","slug":"/for-ops/console/team-admin-catalog","permalink":"/docs/for-ops/console/team-admin-catalog","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/console/team-admin-catalog.md","tags":[],"version":"current","frontMatter":{"slug":"team-admin-catalog","title":"Team Admin Catalog","sidebar_label":"Catalog"},"sidebar":"mainSidebar","previous":{"title":"Overview","permalink":"/docs/for-ops/console/team-admin-overview"},"next":{"title":"Projects","permalink":"/docs/for-ops/console/team-admin-projects"}}');var l=a(4848),s=a(8453);const o={slug:"team-admin-catalog",title:"Team Admin Catalog",sidebar_label:"Catalog"},i=void 0,r={},c=[{value:"About the Catalog Helm charts",id:"about-the-catalog-helm-charts",level:2},{value:"Helm charts available for platform administrators",id:"helm-charts-available-for-platform-administrators",level:2},{value:"Adding Helm charts to the Catalog",id:"adding-helm-charts-to-the-catalog",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"about-the-catalog-helm-charts",children:"About the Catalog Helm charts"}),"\n",(0,l.jsx)(t.p,{children:"The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog."}),"\n",(0,l.jsx)(t.p,{children:"The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator."}),"\n",(0,l.jsxs)(t.p,{children:["The Catalog contains a set of Helm charts that can be used as quick starts, but also offers the option (for platform administrators only) to add more Helm charts to the Catalog, using the ",(0,l.jsx)(t.code,{children:"+ Add Helm Chart"})," option."]}),"\n",(0,l.jsx)(t.h2,{id:"helm-charts-available-for-platform-administrators",children:"Helm charts available for platform administrators"}),"\n",(0,l.jsxs)(t.p,{children:["Next to the Helm charts that are by default included in the Catalog and made available for Teams, the Catalog also by default includes a set of curated Helm charts that can only be installed by platform administrators. These Helm charts are visible in the Catalog for the Team ",(0,l.jsx)(t.code,{children:"Admin"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["The Helm charts that are by default added to the Catalog are maintained in the ",(0,l.jsx)(t.a,{href:"https://github.com/linode/apl-charts",children:"apl-charts"})," GitHub repository. Currently the following Helm charts are made available for platform-administrators:"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Kwasm Operator"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"kwasm-operator"})," Helm chart can be used to add WebAssembly support to the Kubernetes Nodes. ",(0,l.jsx)(t.code,{children:"kwasm-operator"})," is a prerequisite for installing ",(0,l.jsx)(t.code,{children:"spin-operator"})]}),"\n",(0,l.jsxs)(t.ol,{start:"2",children:["\n",(0,l.jsx)(t.li,{children:"Spin Operator"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"spin-operator"})," Helm chart can be used to enable deploying Spin applications to Kubernetes."]}),"\n",(0,l.jsxs)(t.ol,{start:"3",children:["\n",(0,l.jsx)(t.li,{children:"Spin Shim Executor"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"spin-shim-executor"})," Helm chart can be used to create a ",(0,l.jsx)(t.code,{children:"SpinAppExecutor"})," utilized by Spin Operator to determine which executor type should be used in running a SpinApp."]}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"KubeFlow Pipelines Cluster Resources"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"kfp-cluster-resources"})," Helm chart can be used to install the KubeFlow Pipelines CRDs."]}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsx)(t.li,{children:"Kubeflow Pipelines"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"kubeflow-pipelines"})," Helm chart can be used to install KubeFlow Pipelines in any Team."]}),"\n",(0,l.jsx)(t.h2,{id:"adding-helm-charts-to-the-catalog",children:"Adding Helm charts to the Catalog"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Select view ",(0,l.jsx)(t.code,{children:"team"})," and select team ",(0,l.jsx)(t.code,{children:"admin"})," in the top bar."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Click on ",(0,l.jsx)(t.code,{children:"Catalog"})," in the left menu."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"You will now see all the templates that are available for use.\n."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Click on ",(0,l.jsx)(t.code,{children:"+ Add Helm Chart"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Fill in a URL that points to a ",(0,l.jsx)(t.code,{children:"Chart.yaml"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Click on ",(0,l.jsx)(t.code,{children:"GET DETAILS"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"catalog",src:a(6421).A+"",width:"3694",height:"2126"})}),"\n",(0,l.jsxs)(t.ol,{start:"7",children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Optionally change the ",(0,l.jsx)(t.code,{children:"Icon URL"})," to point to an icon you want to use for this hem chart in the Catalog."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["If the Helm chart should be made available for all Teams, select ",(0,l.jsx)(t.code,{children:"Allow teams to use this chart"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Click ",(0,l.jsx)(t.code,{children:"ADD CHART"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The Helm chart will now be added to the ",(0,l.jsx)(t.code,{children:"charts"})," repository in the Local Git service (Gitea) and will be visible in the Catalog:"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"catalog",src:a(8979).A+"",width:"3672",height:"1996"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},6421:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/add-helm-chart-8a622252f80ff341eedf37e7d1345069.png"},8979:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/team-admin-catalog-834259e9078fed9dd630cf0f66ca2bf5.png"},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var n=a(6540);const l={},s=n.createContext(l);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);