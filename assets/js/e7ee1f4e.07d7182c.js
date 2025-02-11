"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4765],{8345:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"for-ops/how-to/core-only","title":"Use Core only","description":"By default Gitea, Tekton, Argo CD, the platform API and the Console are installed. The Console is the self-service UI and uses the platform API to generate validated configuration code. This configuration code is then committed to Gitea (in the values repository), which will trigger the pre-configured Tekton pipeline to apply the changes.","source":"@site/docs/for-ops/how-to/core-only.md","sourceDirName":"for-ops/how-to","slug":"/for-ops/how-to/core-only","permalink":"/docs/for-ops/how-to/core-only","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/how-to/core-only.md","tags":[],"version":"current","frontMatter":{"slug":"core-only","title":"Use Core only","sidebar_label":"Use Core only"}}');var s=o(4848),r=o(8453);const l={slug:"core-only",title:"Use Core only",sidebar_label:"Use Core only"},i=void 0,a={},c=[{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["By default Gitea, Tekton, Argo CD, the platform API and the Console are installed. The Console is the self-service UI and uses the platform API to generate validated configuration code. This configuration code is then committed to Gitea (in the ",(0,s.jsx)(n.code,{children:"values"})," repository), which will trigger the pre-configured Tekton pipeline to apply the changes."]}),"\n",(0,s.jsx)(n.p,{children:"In some cases you might not want to use the Console and the platform API, but instead install and manage configuration of the platform using a custom pipeline. Possible use-cases for this scenario are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pushing configuration changes to multiple clusters at the same time (edge use-case)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Not allowing configuration changes to be made by developers."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Only using the open source ",(0,s.jsx)(n.a,{href:"https://github.com/linode/apl-core",children:"apl-core"})," project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The example Helm chart values below shows how to install the platform with a team, 2 workloads and 2 services:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"cluster:\n  name: ${clusterName}\n  provider: ${clusterProvider}\notomi::\n  adminPassword: ${password}\napps:\n  argocd:\n    enabled: true\nteamConfig:\n  demo:\n    password: ${somePassword}\n    id: myapp\n    networkPolicy:\n      egressPublic: true\n      ingressPrivate: true\n    services:\n      - name: front-end\n        ingressClassName: platform\n        networkPolicy:\n            ingressPrivate:\n                mode: DenyAll\n        ownHost: true\n        port: 8080\n        type: public\n        headers:\n          response:\n            set:\n              - name: Cache-Control\n                value: no-store\n              - name: Pragma\n                value: no-cache\n      - name: api\n        networkPolicy:\n            ingressPrivate:\n                mode: AllowOnly\n                allow:\n                  team: myapp\n                  service: front-end\n        port: 8081\n    workloads:\n      - name: front-end\n        path: ksvc\n        revision: v1.0.1\n        selectedChart: ksvc\n        url: https://github.com/redkubes/apl-charts.git\n      - name: api\n        path: deployment\n        revision: v1.0.1\n        selectedChart: deployment\n        url: https://github.com/redkubes/apl-charts.git\nfiles:\n  env/teams/workloads/demo/front-end.yaml: |\n    values: |\n        fullnameOverride: front-end\n        image:\n            repository: harbor.${domainSuffix}/team-demo/front-end\n            tag: latest\n        containerPorts:\n            - name: http1\n            containerPort: 8080\n            protocol: TCP\n        resources:\n            requests:\n                cpu: 200m\n                memory: 32Mi\n        autoscaling:\n            minReplicas: 0\n            maxReplicas: 10    \n  env/teams/workloads/demo/api.yaml: |\n    values: |\n      image:\n        image:\n            repository: harbor.${domainSuffix}/team-demo/api\n            tag: latest\n        containerPorts:\n            - name: http1\n            containerPort: 8080\n            protocol: TCP\n        resources:\n            requests:\n                cpu: 200m\n                memory: 32Mi\n        autoscaling:\n            minReplicas: 1\n            maxReplicas: 10    \n"})}),"\n",(0,s.jsx)(n.p,{children:"You can now make changes in this configuration and apply them directly to the cluster:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install using your custom values:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"helm install -f values.yaml apl apl/apl\n"})}),"\n",(0,s.jsx)(n.p,{children:"After installation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"All required ingress resources will be created."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Istio (including the virtual services for public exposed services with HTTP response headers) will be installed and configured."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Network policies."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Argo CD and Argo CD applications and application sets are created to deploy the front-end and api workloads."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Change the values"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can extend the values with all supported configuration options."}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Uninstall the release:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"helm uninstall apl --no-hooks\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Re-install the chart with the adjusted values:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"helm install -f values.yaml apl apl/apl\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>i});var t=o(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);