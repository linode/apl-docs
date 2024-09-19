"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7674],{6012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(5893),s=a(1151);const o={slug:"catalog",title:"Catalog",sidebar_label:"Catalog"},r=void 0,l={id:"for-devs/console/catalog",title:"Catalog",description:"The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by APL to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog.",source:"@site/docs/for-devs/console/catalog.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/catalog",permalink:"/docs/for-devs/console/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-devs/console/catalog.md",tags:[],version:"current",frontMatter:{slug:"catalog",title:"Catalog",sidebar_label:"Catalog"},sidebar:"mainSidebar",previous:{title:"Apps",permalink:"/docs/for-devs/console/apps"},next:{title:"Projects",permalink:"/docs/for-devs/console/projects"}},c={},i=[{value:"About APL Catalog quick starts",id:"about-apl-catalog-quick-starts",level:2},{value:"Kubernetes Deployment",id:"kubernetes-deployment",level:3},{value:"Kubernetes Deployment with Open Telemetry Instrumentation",id:"kubernetes-deployment-with-open-telemetry-instrumentation",level:3},{value:"Kubernetes Canary Deployments",id:"kubernetes-canary-deployments",level:3},{value:"Knative-service",id:"knative-service",level:3},{value:"PostgreSQL cluster",id:"postgresql-cluster",level:3},{value:"Redis master-replica cluster",id:"redis-master-replica-cluster",level:3},{value:"RabbitMQ Cluster and/or Queues",id:"rabbitmq-cluster-andor-queues",level:3},{value:"Using the Catalog",id:"using-the-catalog",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by APL to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog."}),"\n",(0,n.jsx)(t.p,{children:"The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team."}),"\n",(0,n.jsx)(t.h2,{id:"about-apl-catalog-quick-starts",children:"About APL Catalog quick starts"}),"\n",(0,n.jsx)(t.p,{children:"The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:"}),"\n",(0,n.jsx)(t.h3,{id:"kubernetes-deployment",children:"Kubernetes Deployment"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apl-quickstart-k8s-deployment"})," Helm chart can be used to create a Kubernetes ",(0,n.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,n.jsx)(t.code,{children:"Service"})," and a ",(0,n.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a ",(0,n.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,n.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,n.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,n.jsx)(t.h3,{id:"kubernetes-deployment-with-open-telemetry-instrumentation",children:"Kubernetes Deployment with Open Telemetry Instrumentation"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apl-quickstart-k8s-deployment-otel"})," Helm chart can be used to create a Kubernetes ",(0,n.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,n.jsx)(t.code,{children:"Service"}),", a ",(0,n.jsx)(t.code,{children:"ServiceAccount"})," and an ",(0,n.jsx)(t.code,{children:"Instrumentation"})," resource. Optionally a ",(0,n.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,n.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,n.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,n.jsx)(t.h3,{id:"kubernetes-canary-deployments",children:"Kubernetes Canary Deployments"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apl-quickstart-k8s-deployments-canary"})," Helm chart can be used to create 2 Kubernetes ",(0,n.jsx)(t.code,{children:"Deployments"})," (to deploy 2 versions of an image), a ",(0,n.jsx)(t.code,{children:"Service"})," and a ",(0,n.jsx)(t.code,{children:"ServiceAccount"})," resource. Optionally a ",(0,n.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,n.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,n.jsx)(t.code,{children:"Configmap"})," (for each version) can be created."]}),"\n",(0,n.jsx)(t.h3,{id:"knative-service",children:"Knative-service"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apl-quickstart-knative-service"})," Helm chart can be used to create a Knative ",(0,n.jsx)(t.code,{children:"Service"})," (to deploy a single image), a ",(0,n.jsx)(t.code,{children:"Service"})," and a  ",(0,n.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a Prometheus ",(0,n.jsx)(t.code,{children:"ServiceMonitor"})," can be created."]}),"\n",(0,n.jsx)(t.h3,{id:"postgresql-cluster",children:"PostgreSQL cluster"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apl-quickstart-postgresql"})," Helm chart can be used to create a cloudnativepg PostgreSQL ",(0,n.jsx)(t.code,{children:"Cluster"}),". Optionally a Prometheus ",(0,n.jsx)(t.code,{children:"PodMonitor"})," and a ",(0,n.jsx)(t.code,{children:"Configmap"})," (for adding a postgresql dashboard to Grafana) can be created."]}),"\n",(0,n.jsx)(t.h3,{id:"redis-master-replica-cluster",children:"Redis master-replica cluster"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apl-quickstart-redis"})," Helm chart can be used to create a Redis master-replica cluster."]}),"\n",(0,n.jsx)(t.h3,{id:"rabbitmq-cluster-andor-queues",children:"RabbitMQ Cluster and/or Queues"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apl-quickstart-rabbitmq"})," Helm chart can be used to create a ",(0,n.jsx)(t.code,{children:"RabbitmqCluster"}),", ",(0,n.jsx)(t.code,{children:"queues"})," and ",(0,n.jsx)(t.code,{children:"Policy"}),"s"]}),"\n",(0,n.jsx)(t.h2,{id:"using-the-catalog",children:"Using the Catalog"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click on ",(0,n.jsx)(t.code,{children:"Catalog"})," in the left menu"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"You will now see all the templates that are available to use"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"catalog",src:a(2963).Z+"",width:"3174",height:"1520"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.code,{children:"k8s-deployment"})," template"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"catalog",src:a(6025).Z+"",width:"3180",height:"1828"})}),"\n",(0,n.jsx)(t.p,{children:"In the Info tab you'll see some information about the Chart like the version and additional instructions."}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.code,{children:"Values"})," tab"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"catalog",src:a(9170).Z+"",width:"3176",height:"2086"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Continue to ",(0,n.jsx)(t.a,{href:"/docs/for-devs/console/workloads",children:"create a workload"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-2-7f29bcefa79bf8ef6ed93297d8f00c30.png"},9170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-3-d3d54f9d4394bd831be5a7eb385ed7ef.png"},2963:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-892a0f882c8fd9006baa213a32b0b012.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>r});var n=a(7294);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);