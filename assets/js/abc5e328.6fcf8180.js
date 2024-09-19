"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2115],{2477:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var l=s(5893),o=s(1151);const t={slug:"create-netpols",title:"Configuring network policies",sidebar_label:"Create Network Policies"},r=void 0,i={id:"get-started/labs/create-netpols",title:"Configuring network policies",description:"In some cases you want to explicitly allow access to your application. This can be done by creating network policies. APL supports 2 types of network policies:",source:"@site/docs/get-started/labs/create-netpols.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/create-netpols",permalink:"/docs/get-started/labs/create-netpols",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/create-netpols.md",tags:[],version:"current",frontMatter:{slug:"create-netpols",title:"Configuring network policies",sidebar_label:"Create Network Policies"},sidebar:"mainSidebar",previous:{title:"Create Custom Rules",permalink:"/docs/get-started/labs/custom-rules"},next:{title:"Use OpenTelemery",permalink:"/docs/get-started/labs/use-otel"}},d={},c=[{value:"Understanding Internal Ingress Network Policies",id:"understanding-internal-ingress-network-policies",level:2},{value:"Understanding Egress Network Policies",id:"understanding-egress-network-policies",level:2},{value:"Setting Up Network Policies for the Example Voting App: An Ingress Example",id:"setting-up-network-policies-for-the-example-voting-app-an-ingress-example",level:2},{value:"Build Images for the Application",id:"build-images-for-the-application",level:3},{value:"Create a Redis Cluster and a PostgreSQL Database",id:"create-a-redis-cluster-and-a-postgresql-database",level:3},{value:"Deploy the Vote App",id:"deploy-the-vote-app",level:3},{value:"Deploy the Worker App",id:"deploy-the-worker-app",level:3},{value:"Deploy the Result App",id:"deploy-the-result-app",level:3},{value:"Register Services for Exposure",id:"register-services-for-exposure",level:3},{value:"Vote",id:"vote",level:4},{value:"Result",id:"result",level:4},{value:"Create the Network Policies for the Example Voting App",id:"create-the-network-policies-for-the-example-voting-app",level:3},{value:"Postgres Database",id:"postgres-database",level:4},{value:"Redis",id:"redis",level:4},{value:"Test the Voting App",id:"test-the-voting-app",level:3},{value:"Setting Up Network Policies for apl-docs.net: An Egress Example",id:"setting-up-network-policies-for-apl-docsnet-an-egress-example",level:2},{value:"Register the Network Policy for apl-docs.net",id:"register-the-network-policy-for-apl-docsnet",level:3},{value:"Deploy Netshoot Pod",id:"deploy-netshoot-pod",level:3},{value:"Test the Egress Network Policy",id:"test-the-egress-network-policy",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"In some cases you want to explicitly allow access to your application. This can be done by creating network policies. APL supports 2 types of network policies:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Policies for ingress traffic inside the cluster."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Policies for egress traffic to go outside of the cluster (to access external FQDNs)."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"understanding-internal-ingress-network-policies",children:"Understanding Internal Ingress Network Policies"}),"\n",(0,l.jsx)(n.p,{children:"The internal ingress network policies allow you to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Deny all traffic to Pods (default mode)"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Allow selected Workload Pods running on the cluster to access your Workload's Pods"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Allow all traffic to the Pods of a Workload"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Deny all"})," and ",(0,l.jsx)(n.code,{children:"Allow all"})," we don't need to explain right?"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["The Ingress Network Policies in APL rely on Pod labels. We require that a single label covers Pods for a given workload. We recommend to use the ",(0,l.jsx)(n.code,{children:"otomi.io/app: <workload-name>"})," label."]})}),"\n",(0,l.jsx)(n.p,{children:"To allow other Workloads in the cluster to access your Workload's Pods, follow these steps:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Navigate to the ",(0,l.jsx)(n.code,{children:"Network Policies"})," page in the APL Console and click ",(0,l.jsx)(n.code,{children:"Create Netpol"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Name the network policy and select the ",(0,l.jsx)(n.code,{children:"ingress"})," rule type."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the selector label name and value for the Workload Pods to be accessed. E.g.: use the ",(0,l.jsx)(n.code,{children:"otomi.io/app"})," label."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select either ",(0,l.jsx)(n.code,{children:"AllowAll"})," or ",(0,l.jsx)(n.code,{children:"AllowOnly"})," mode."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If you select ",(0,l.jsx)(n.code,{children:"AllowOnly"}),", specify the namespace (e.g., ",(0,l.jsx)(n.code,{children:"team-labs"}),"), and the selector label name and value for the Workload Pods to be accessed."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Add more rules if needed."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"understanding-egress-network-policies",children:"Understanding Egress Network Policies"}),"\n",(0,l.jsx)(n.p,{children:"The egress network policies allow you to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Deny all traffic from the Pods of a Workload (default)"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Allow all Pods within a namespace to access external FQDNs or IPs through an egress rule"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"To allow your Workload's Pods to access external FQDNs or IPs, follow these steps:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Navigate to the ",(0,l.jsx)(n.code,{children:"Network Policies"})," page in the APL Console and click ",(0,l.jsx)(n.code,{children:"Create Netpol"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Name the network policy and select the ",(0,l.jsx)(n.code,{children:"egress"})," rule type."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Add the FQDN or IP to be accessed."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Add port number(s) and protocol if needed."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"The egress rules are namespace wide. You cannot bind an egress policy to one Workload only."})}),"\n",(0,l.jsx)(n.h2,{id:"setting-up-network-policies-for-the-example-voting-app-an-ingress-example",children:"Setting Up Network Policies for the Example Voting App: An Ingress Example"}),"\n",(0,l.jsx)(n.h3,{id:"build-images-for-the-application",children:"Build Images for the Application"}),"\n",(0,l.jsxs)(n.p,{children:["Build the ",(0,l.jsx)(n.code,{children:"Vote"}),", ",(0,l.jsx)(n.code,{children:"Worker"})," and ",(0,l.jsx)(n.code,{children:"Result"})," images from this ",(0,l.jsx)(n.a,{href:"https://github.com/linode/apl-example-app",children:"repo"}),". Use the Build feature in APL to build the images with ",(0,l.jsx)(n.code,{children:"mode: Docker"}),". Set the ",(0,l.jsx)(n.code,{children:"path"})," to ",(0,l.jsx)(n.code,{children:"./vote/Dockerfile"})," for the Vote image (and ",(0,l.jsx)(n.code,{children:"./worker/Dockerfile"})," for the Worker and ",(0,l.jsx)(n.code,{children:"./result/Dockerfile"})," for Result)."]}),"\n",(0,l.jsx)(n.h3,{id:"create-a-redis-cluster-and-a-postgresql-database",children:"Create a Redis Cluster and a PostgreSQL Database"}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"postgresql"})," and the ",(0,l.jsx)(n.code,{children:"redis"})," charts from the Catalog to create a Redis master-replica cluster and a PostgreSQL database. For this lab, Redis authentication needs to be turned off by setting ",(0,l.jsx)(n.code,{children:"auth.enabled=false"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"deploy-the-vote-app",children:"Deploy the Vote App"}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"k8s-deployment"})," chart to deploy the vote app. Use the following values:"]}),"\n",(0,l.jsxs)(n.p,{children:["Name: ",(0,l.jsx)(n.code,{children:"vote"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"containerPorts:\n  - name: http\n    containerPort: 80\n    protocol: TCP\nenv:\n  - name: REDIS_HOST\n    value: <redis-cluster-name>-master\n"})}),"\n",(0,l.jsx)(n.h3,{id:"deploy-the-worker-app",children:"Deploy the Worker App"}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"k8s-deployment"})," chart to deploy the worker app. Use the following values:"]}),"\n",(0,l.jsxs)(n.p,{children:["Name: ",(0,l.jsx)(n.code,{children:"worker"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"containerPorts:\n  - name: http\n    containerPort: 80\n    protocol: TCP\nenv:\n  - name: DATABASE_USER\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-app\n        key: username\n  - name: DATABASE_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-app\n        key: password\n  - name: REDIS_HOST\n    value: <redis-cluster-name>-master\n  - name: DATABASE_HOST\n    value: <psql-cluster-name>-rw\n"})}),"\n",(0,l.jsx)(n.h3,{id:"deploy-the-result-app",children:"Deploy the Result App"}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"k8s-deployment"})," chart to deploy the result app. Use the following values:"]}),"\n",(0,l.jsxs)(n.p,{children:["Name: ",(0,l.jsx)(n.code,{children:"result"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"containerPorts:\n  - name: http\n    containerPort: 80\n    protocol: TCP\nenv:\n  - name: DATABASE_USER\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-app\n        key: username\n  - name: DATABASE_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-app\n        key: password\n  - name: DATABASE_HOST\n    value: <psql-cluster-name>-rw\n"})}),"\n",(0,l.jsx)(n.h3,{id:"register-services-for-exposure",children:"Register Services for Exposure"}),"\n",(0,l.jsx)(n.h4,{id:"vote",children:"Vote"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Register the ",(0,l.jsx)(n.code,{children:"vote"})," service."]}),"\n",(0,l.jsxs)(n.li,{children:["Set exposure to ",(0,l.jsx)(n.code,{children:"External"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"result",children:"Result"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Register the ",(0,l.jsx)(n.code,{children:"<result>"})," service."]}),"\n",(0,l.jsxs)(n.li,{children:["Set exposure to ",(0,l.jsx)(n.code,{children:"External"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"create-the-network-policies-for-the-example-voting-app",children:"Create the Network Policies for the Example Voting App"}),"\n",(0,l.jsx)(n.h4,{id:"postgres-database",children:"Postgres Database"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Create a new ",(0,l.jsx)(n.code,{children:"Netpol"})," and select the ",(0,l.jsx)(n.code,{children:"ingress"})," rule type."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the selector label name ",(0,l.jsx)(n.code,{children:"otomi.io/app"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the selector label value ",(0,l.jsx)(n.code,{children:"<postgres-workload-name>"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select ",(0,l.jsx)(n.code,{children:"AllowOnly"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the namespace ",(0,l.jsx)(n.code,{children:"<team-name>"}),", the selector label name ",(0,l.jsx)(n.code,{children:"otomi.io/app"})," and the selector label value ",(0,l.jsx)(n.code,{children:"<worker>"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the namespace ",(0,l.jsx)(n.code,{children:"<team-name>"}),", the selector label name ",(0,l.jsx)(n.code,{children:"otomi.io/app"})," and the selector label value ",(0,l.jsx)(n.code,{children:"<result>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"redis",children:"Redis"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Create a new ",(0,l.jsx)(n.code,{children:"Netpol"})," and select the ",(0,l.jsx)(n.code,{children:"ingress"})," rule type."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the selector label name ",(0,l.jsx)(n.code,{children:"otomi.io/app"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the selector label value ",(0,l.jsx)(n.code,{children:"<redis-workload-name>"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select ",(0,l.jsx)(n.code,{children:"AllowOnly"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the namespace ",(0,l.jsx)(n.code,{children:"<team-name>"}),", the selector label name ",(0,l.jsx)(n.code,{children:"otomi.io/app"})," and the selector label value ",(0,l.jsx)(n.code,{children:"<worker>"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the namespace ",(0,l.jsx)(n.code,{children:"<team-name>"}),", the selector label name ",(0,l.jsx)(n.code,{children:"otomi.io/app"})," and the selector label value ",(0,l.jsx)(n.code,{children:"<vote>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"test-the-voting-app",children:"Test the Voting App"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Go to the external URL of the ",(0,l.jsx)(n.code,{children:"vote"})," application."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click on ",(0,l.jsx)(n.code,{children:"Cats"})," or ",(0,l.jsx)(n.code,{children:"Dogs"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Now go to the external URL of the ",(0,l.jsx)(n.code,{children:"result"})," application."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"You should see the result of your vote."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"setting-up-network-policies-for-apl-docsnet-an-egress-example",children:"Setting Up Network Policies for apl-docs.net: An Egress Example"}),"\n",(0,l.jsx)(n.h3,{id:"register-the-network-policy-for-apl-docsnet",children:"Register the Network Policy for apl-docs.net"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Navigate to the ",(0,l.jsx)(n.code,{children:"Network Policies"})," page in the APL Console and click ",(0,l.jsx)(n.code,{children:"Create Netpol"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Name the network policy ",(0,l.jsx)(n.code,{children:"apl-docs"})," and select the ",(0,l.jsx)(n.code,{children:"egress"})," rule type."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the FQDN ",(0,l.jsx)(n.code,{children:"apl-docs.net"})," to be accessed."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add port number ",(0,l.jsx)(n.code,{children:"443"})," and protocol ",(0,l.jsx)(n.code,{children:"HTTPS"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"deploy-netshoot-pod",children:"Deploy Netshoot Pod"}),"\n",(0,l.jsx)(n.p,{children:"Deploy a Netshoot pod in your namespace within your Kubernetes cluster. You can do this using kubectl command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"kubectl run -i --tty --rm netshoot --image nicolaka/netshoot -n team-labs\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"https://github.com/nicolaka/netshoot",children:"Netshoot"})," pod is a network troubleshooting tool that includes a lot of network tools like ",(0,l.jsx)(n.code,{children:"curl"}),", ",(0,l.jsx)(n.code,{children:"dig"}),", ",(0,l.jsx)(n.code,{children:"nslookup"}),", ",(0,l.jsx)(n.code,{children:"ping"}),", ",(0,l.jsx)(n.code,{children:"traceroute"}),", etc."]})}),"\n",(0,l.jsx)(n.h3,{id:"test-the-egress-network-policy",children:"Test the Egress Network Policy"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Run the following command in the Netshoot pod:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl https://apl-docs.net\n"})}),"\n",(0,l.jsx)(n.p,{children:"You should see the HTML of the apl-docs.net website"}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["Run the following command to see the ",(0,l.jsx)(n.code,{children:"<h1>Build, Deploy and Run applications at scale</h1>"})," message:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl https://apl-docs.net | grep -o '<h1>.*</h1>'\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["Type ",(0,l.jsx)(n.code,{children:"exit"})," to exit the Netshoot pod."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"When you exit the Netshoot pod, it will be removed from the cluster."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var l=s(7294);const o={},t=l.createContext(o);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);