"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[670],{6060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=a(5893),r=a(1151);const o={slug:"use-catalog",title:"Use the Catalog",sidebar_label:"Use the Catalog"},n=void 0,c={id:"get-started/labs/use-catalog",title:"Use the Catalog",description:"In this lab we are going to explore the Catalog. The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by APL to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team.",source:"@site/docs/get-started/labs/use-catalog.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/use-catalog",permalink:"/docs/get-started/labs/use-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/use-catalog.md",tags:[],version:"current",frontMatter:{slug:"use-catalog",title:"Use the Catalog",sidebar_label:"Use the Catalog"},sidebar:"mainSidebar",previous:{title:"Using Argo CD",permalink:"/docs/get-started/labs/using-argo-cd"},next:{title:"Create Workloads",permalink:"/docs/get-started/labs/create-workloads"}},l={},i=[{value:"About Catalog quick starts",id:"about-catalog-quick-starts",level:2},{value:"k8s-deployment",id:"k8s-deployment",level:3},{value:"k8s-deployment-otel",id:"k8s-deployment-otel",level:3},{value:"k8s-deployments-canary",id:"k8s-deployments-canary",level:3},{value:"knative-service",id:"knative-service",level:3},{value:"APL quick start for creating a PostgreSQL cluster",id:"apl-quick-start-for-creating-a-postgresql-cluster",level:3},{value:"APL quick start for creating a Redis master-replica cluster",id:"apl-quick-start-for-creating-a-redis-master-replica-cluster",level:3},{value:"Using the Catalog",id:"using-the-catalog",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In this lab we are going to explore the Catalog. The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by APL to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team."}),"\n",(0,s.jsx)(t.h2,{id:"about-catalog-quick-starts",children:"About Catalog quick starts"}),"\n",(0,s.jsx)(t.p,{children:"The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:"}),"\n",(0,s.jsx)(t.h3,{id:"k8s-deployment",children:"k8s-deployment"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"quickstart-k8s-deployment"})," Helm chart can be used to create a Kubernetes ",(0,s.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,s.jsx)(t.code,{children:"Service"})," and a ",(0,s.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a ",(0,s.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,s.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,s.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,s.jsx)(t.h3,{id:"k8s-deployment-otel",children:"k8s-deployment-otel"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"quickstart-k8s-deployment-otel"})," Helm chart can be used to create a Kubernetes ",(0,s.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,s.jsx)(t.code,{children:"Service"}),", a ",(0,s.jsx)(t.code,{children:"ServiceAccount"}),", an ",(0,s.jsx)(t.code,{children:"OpenTelemetryCollector"})," and an ",(0,s.jsx)(t.code,{children:"Instrumentation"}),". Optionally a ",(0,s.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,s.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,s.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,s.jsx)(t.h3,{id:"k8s-deployments-canary",children:"k8s-deployments-canary"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"quickstart-k8s-deployments-canary"})," Helm chart can be used to create 2 Kubernetes ",(0,s.jsx)(t.code,{children:"Deployments"})," (to deploy 2 versions of an image), a ",(0,s.jsx)(t.code,{children:"Service"})," and a ",(0,s.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a ",(0,s.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,s.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,s.jsx)(t.code,{children:"Configmap"})," (for each version) can be created."]}),"\n",(0,s.jsx)(t.h3,{id:"knative-service",children:"knative-service"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"quickstart-knative-service"})," Helm chart can be used to create a Knative ",(0,s.jsx)(t.code,{children:"Service"})," (to deploy a single image), a ",(0,s.jsx)(t.code,{children:"Service"})," and a ",(0,s.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a Prometheus ",(0,s.jsx)(t.code,{children:"ServiceMonitor"})," can be created."]}),"\n",(0,s.jsx)(t.h3,{id:"apl-quick-start-for-creating-a-postgresql-cluster",children:"APL quick start for creating a PostgreSQL cluster"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"quickstart-postgresql"})," Helm chart can be used to create a cloudnativepg PostgreSQL ",(0,s.jsx)(t.code,{children:"Cluster"}),". Optionally a Prometheus ",(0,s.jsx)(t.code,{children:"PodMonitor"})," and a ",(0,s.jsx)(t.code,{children:"Configmap"})," (for adding a postgresql dashboard to Grafana) can be created."]}),"\n",(0,s.jsx)(t.h3,{id:"apl-quick-start-for-creating-a-redis-master-replica-cluster",children:"APL quick start for creating a Redis master-replica cluster"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"quickstart-redis"})," Helm chart can be used to create a Redis master-replica cluster."]}),"\n",(0,s.jsx)(t.h2,{id:"using-the-catalog",children:"Using the Catalog"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.code,{children:"Catalog"})," in the left menu."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"You will now see all the templates that are available to use."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"catalog",src:a(2963).Z+"",width:"3174",height:"1520"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.code,{children:"k8s-deployment"})," template."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"catalog",src:a(6025).Z+"",width:"3180",height:"1828"})}),"\n",(0,s.jsx)(t.p,{children:"In the Info tab you'll see some information about the Chart like the version and additional instructions."}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.code,{children:"Values"})," tab."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"catalog",src:a(9170).Z+"",width:"3176",height:"2086"})}),"\n",(0,s.jsxs)(t.p,{children:["From here you can create a Workload using the Catalog template by adding a name and changing the values. Go to the ",(0,s.jsx)(t.a,{href:"/docs/get-started/labs/create-workloads",children:"next lab"})," to create a Workload."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6025:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/catalog-2-7f29bcefa79bf8ef6ed93297d8f00c30.png"},9170:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/catalog-3-d3d54f9d4394bd831be5a7eb385ed7ef.png"},2963:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/catalog-892a0f882c8fd9006baa213a32b0b012.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>n});var s=a(7294);const r={},o=s.createContext(r);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);