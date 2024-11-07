"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6128],{4422:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>l});var o=a(5893),s=a(1151);const c={slug:"catalog",title:"Managing the Catalog",sidebar_label:"Manage the Catalog"},r=void 0,n={id:"for-ops/how-to/use-catalog",title:"Managing the Catalog",description:"A Catalog is made available to Teams on the platform to offer them golden path templates (Helm charts). This is how it works:",source:"@site/docs/for-ops/how-to/use-catalog.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/catalog",permalink:"/docs/for-ops/how-to/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/how-to/use-catalog.md",tags:[],version:"current",frontMatter:{slug:"catalog",title:"Managing the Catalog",sidebar_label:"Manage the Catalog"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/for-ops/how-to/overview"},next:{title:"Manage Ingress Controllers",permalink:"/docs/for-ops/how-to/ingress-classes"}},i={},l=[{value:"Quick start Helm charts",id:"quick-start-helm-charts",level:2},{value:"quickstart-k8s-deployment",id:"quickstart-k8s-deployment",level:3},{value:"quickstart-k8s-deployment-otel",id:"quickstart-k8s-deployment-otel",level:3},{value:"quickstart-k8s-deployments-canary",id:"quickstart-k8s-deployments-canary",level:3},{value:"quickstart-knative-service",id:"quickstart-knative-service",level:3},{value:"quickstart-postgresql",id:"quickstart-postgresql",level:3},{value:"quickstart-redis",id:"quickstart-redis",level:3},{value:"Customize the catalog",id:"customize-the-catalog",level:2},{value:"Configure chart access",id:"configure-chart-access",level:2},{value:"Everybody",id:"everybody",level:3},{value:"Specific teams",id:"specific-teams",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A Catalog is made available to Teams on the platform to offer them golden path templates (Helm charts). This is how it works:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Add a Helm chart to the ",(0,o.jsx)(t.code,{children:"otomi/charts"})," repo in the local Gitea."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Configure which Teams can use the chart."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Teams can create Workloads from the Catalog."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The Catalog (the ",(0,o.jsx)(t.code,{children:"otomi/charts"})," repo) will contain a set of quick start Helm charts. The Helm charts are not mandatory to use and can be removed or modified to your own liking. They are only provided to make it easier to get started."]}),"\n",(0,o.jsx)(t.h2,{id:"quick-start-helm-charts",children:"Quick start Helm charts"}),"\n",(0,o.jsx)(t.p,{children:"The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:"}),"\n",(0,o.jsx)(t.h3,{id:"quickstart-k8s-deployment",children:"quickstart-k8s-deployment"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"quickstart-k8s-deployment"})," Helm chart can be used to create a Kubernetes ",(0,o.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,o.jsx)(t.code,{children:"Service"})," and a ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a ",(0,o.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"quickstart-k8s-deployment-otel",children:"quickstart-k8s-deployment-otel"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"quickstart-k8s-deployment-otel"})," Helm chart can be used to create a Kubernetes ",(0,o.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,o.jsx)(t.code,{children:"Service"}),", a ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),", an ",(0,o.jsx)(t.code,{children:"OpenTelemetryCollector"})," and an ",(0,o.jsx)(t.code,{children:"Instrumentation"}),". Optionally a ",(0,o.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"quickstart-k8s-deployments-canary",children:"quickstart-k8s-deployments-canary"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"quickstart-k8s-deployments-canary"})," Helm chart can be used to create 2 Kubernetes ",(0,o.jsx)(t.code,{children:"Deployments"})," (to deploy 2 versions of an image), a ",(0,o.jsx)(t.code,{children:"Service"})," and a ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a ",(0,o.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," (for each version) can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"quickstart-knative-service",children:"quickstart-knative-service"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"quickstart-knative-service"})," Helm chart can be used to create a Knative ",(0,o.jsx)(t.code,{children:"Service"})," (to deploy a single image), a ",(0,o.jsx)(t.code,{children:"Service"})," and a  ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"quickstart-postgresql",children:"quickstart-postgresql"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"quickstart-postgresql"})," Helm chart can be used to create a cloudnativepg PostgreSQL ",(0,o.jsx)(t.code,{children:"Cluster"}),". Optionally a Prometheus ",(0,o.jsx)(t.code,{children:"PodMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," (for adding a postgresql dashboard to Grafana) can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"quickstart-redis",children:"quickstart-redis"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"quickstart-redis"})," Helm chart can be used to create a Redis master-replica cluster."]}),"\n",(0,o.jsx)(t.h2,{id:"customize-the-catalog",children:"Customize the catalog"}),"\n",(0,o.jsxs)(t.p,{children:["The charts are not mandetory to use and can be removed or modified to your own liking. They are only provided to make it easier to get started. To manage the catalog, just pull the ",(0,o.jsx)(t.code,{children:"otomi/charts"})," repo, add the Helm charts you would like to make available and push changes. A newly added chart will immediately become available in the catalog for Teams to use."]}),"\n",(0,o.jsx)(t.h2,{id:"configure-chart-access",children:"Configure chart access"}),"\n",(0,o.jsx)(t.p,{children:"For charts to become available for Teams to use, Teams need to be given access to use a chart. The catalog supports the following access options:"}),"\n",(0,o.jsx)(t.h3,{id:"everybody",children:"Everybody"}),"\n",(0,o.jsxs)(t.p,{children:["If a chart can be used by all teams, including the ",(0,o.jsx)(t.code,{children:"team-admin"})," Team, add the following to the ",(0,o.jsx)(t.code,{children:"rbac.yaml"})," in the root of the ",(0,o.jsx)(t.code,{children:"otomi/charts"})," repository:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"rbac:\n  chart-name: null\n"})}),"\n",(0,o.jsx)(t.h3,{id:"specific-teams",children:"Specific teams"}),"\n",(0,o.jsxs)(t.p,{children:["If a chart is only allowed to be used by one or more specific teams, add the following to the ",(0,o.jsx)(t.code,{children:"rbac.yaml"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"rbac:\n  chart-name:\n    - team-demo\n    - team-hello\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To allow a chart to be used by the ",(0,o.jsx)(t.code,{children:"team-admin"})," only, add the following to the ",(0,o.jsx)(t.code,{children:"rbac.yaml"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"rbac:\n  chart-name:\n    - team-admin\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>r});var o=a(7294);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);