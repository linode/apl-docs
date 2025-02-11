"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[453],{9195:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"get-started/installation/linode","title":"Linode","description":"Provision a LKE cluster in Cloud Manager or by using the Linode CLI and manually install the App Platform onto it by using a Linode Domain for DNS.","source":"@site/docs/get-started/installation/linode.md","sourceDirName":"get-started/installation","slug":"/get-started/installation/linode","permalink":"/docs/get-started/installation/linode","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/get-started/installation/linode.md","tags":[],"version":"current","frontMatter":{"slug":"linode","title":"Linode","sidebar_label":"Linode Kubernetes Engine"},"sidebar":"mainSidebar","previous":{"title":"Akamai Connected Cloud","permalink":"/docs/get-started/installation/akamai-connected-cloud"},"next":{"title":"Custom","permalink":"/docs/get-started/installation/custom"}}');var l=i(4848),t=i(8453);const a={slug:"linode",title:"Linode",sidebar_label:"Linode Kubernetes Engine"},o="Install Akamai App Platform on LKE with DNS",r={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Provision a LKE cluster",id:"provision-a-lke-cluster",level:2},{value:"Using Cloud Manager",id:"using-cloud-manager",level:3},{value:"Using Linode CLI",id:"using-linode-cli",level:3},{value:"Create a Domain",id:"create-a-domain",level:2},{value:"Creating a Personal Access Token",id:"creating-a-personal-access-token",level:2},{value:"Create the values.yaml file",id:"create-the-valuesyaml-file",level:2},{value:"Install the App Platform",id:"install-the-app-platform",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"During install Pods get stuck in a Pending state",id:"during-install-pods-get-stuck-in-a-pending-state",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"install-akamai-app-platform-on-lke-with-dns",children:"Install Akamai App Platform on LKE with DNS"})}),"\n",(0,l.jsx)(n.p,{children:"Provision a LKE cluster in Cloud Manager or by using the Linode CLI and manually install the App Platform onto it by using a Linode Domain for DNS."}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Create an account for Linode ",(0,l.jsx)(n.a,{href:"https://cloud.linode.com/",children:"here"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"provision-a-lke-cluster",children:"Provision a LKE cluster"}),"\n",(0,l.jsx)(n.h3,{id:"using-cloud-manager",children:"Using Cloud Manager"}),"\n",(0,l.jsx)(n.p,{children:"Provision a LKE cluster with the following specs:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Fill in the ",(0,l.jsx)(n.code,{children:"Cluster Label"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Use Kubernetes version: ",(0,l.jsx)(n.code,{children:"1.31"})," or ",(0,l.jsx)(n.code,{children:"1.32"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Enable HA Control Plane"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Add Node Pools. Select the Dedicated 8 GB Plan (with 8 GB RAM and 4 CPUs)"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Wait until the nodes are in a ",(0,l.jsx)(n.code,{children:"Running"})," state"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Download the ",(0,l.jsx)(n.code,{children:"kubeconfig"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Update the KUBECONFIG env to gain access to the cluster\nexport KUBECONFIG=<path-to-downloads>/$CLUSTER_NAME-kubeconfig.yaml\n"})}),"\n",(0,l.jsx)(n.h3,{id:"using-linode-cli",children:"Using Linode CLI"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://techdocs.akamai.com/cloud-computing/docs/install-and-configure-the-cli",children:"Install and configure"})," the CLI."]}),"\n",(0,l.jsx)(n.p,{children:"Provision a LKE cluster using the Linode CLI:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"linode-cli lke cluster-create \\\n  --label $CLUSTER_NAME \\\n  --region $REGION \\\n  --k8s_version 1.32 \\\n  --control_plane.high_availability true \\\n  --node_pools.type g6-dedicated-8 \\\n  --node_pools.count 3\n"})}),"\n",(0,l.jsx)(n.p,{children:"And get the Kubecfg:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"linode-cli get-kubeconfig --label $CLUSTER_NAME\nkubectl config use-context lke<cluster_id>-ctx\n"})}),"\n",(0,l.jsx)(n.h2,{id:"create-a-domain",children:"Create a Domain"}),"\n",(0,l.jsxs)(n.p,{children:["If you want to learn about how to use Linode DNS Manager read the following tutorial: ",(0,l.jsx)(n.a,{href:"https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-dns-manager",children:"Get started with DNS Manager"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"When you create a domain in Linode, make sure to set the TTL of the SOA Record to 30 seconds:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click on your domain."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click on the tree dots on the right of the SOA Record and click ",(0,l.jsx)(n.code,{children:"edit"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Change the default TTL to ",(0,l.jsx)(n.code,{children:"30 seconds"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.code,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"creating-a-personal-access-token",children:"Creating a Personal Access Token"}),"\n",(0,l.jsx)(n.p,{children:"Create a new Personal Access Token with Read/Write access for Domains:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Go to your profile on the top right."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click on ",(0,l.jsx)(n.code,{children:"API Tokens"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click on ",(0,l.jsx)(n.code,{children:"Create A Personal Access Token"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add a ",(0,l.jsx)(n.code,{children:"Label"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select the desired ",(0,l.jsx)(n.code,{children:"Expiry"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select ",(0,l.jsx)(n.code,{children:"No Access"})," for all."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Select ",(0,l.jsx)(n.code,{children:"Read/Write"})," for ",(0,l.jsx)(n.code,{children:"Domains"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.code,{children:"Create Token"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Copy your Personal Access Token."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Set environment variable for the token:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'LINODE_TOKEN="<your-personal-access-token>"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"create-the-valuesyaml-file",children:"Create the values.yaml file"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"tee values.yaml<<EOF\ncluster:\n  name: $CLUSTER_NAME\n  provider: linode\n  domainSuffix: <your-domain>\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters: \n    - <your-domain>\n  provider:\n    linode:\n      apiToken: $LINODE_TOKEN\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@<your-domain>\nEOF\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Adjust the ",(0,l.jsx)(n.code,{children:"domainSuffix"}),", ",(0,l.jsx)(n.code,{children:"domainFilters"})," and ",(0,l.jsx)(n.code,{children:"email"}),"!"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["You can also use a different DNS provider. See ",(0,l.jsx)(n.a,{href:"/docs/get-started/installation/dns",children:"here"})," for examples on how to use Akamai EdgeDNS, AWS Route53, Cloudflare DNS and many others."]})}),"\n",(0,l.jsx)(n.h2,{id:"install-the-app-platform",children:"Install the App Platform"}),"\n",(0,l.jsx)(n.p,{children:"Install using Helm:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"helm repo add apl https://linode.github.io/apl-core\nhelm repo update\nhelm install -f values.yaml apl apl/apl\n"})}),"\n",(0,l.jsx)(n.p,{children:"Monitor the logs of the installer job:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl logs jobs/apl -n default -f\n"})}),"\n",(0,l.jsxs)(n.p,{children:["When the installer is finished, copy the ",(0,l.jsx)(n.code,{children:"url"})," and ",(0,l.jsx)(n.code,{children:"admin-password"})," from the console output."]}),"\n",(0,l.jsxs)(n.p,{children:["Follow the post installation steps ",(0,l.jsx)(n.a,{href:"/docs/get-started/installation/post-installation-steps",children:"here"}),"."]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["Like to learn how to use App Platform for LKE? Go through the ",(0,l.jsx)(n.a,{href:"/docs/get-started/labs/overview",children:"Get Started labs"})]})}),"\n",(0,l.jsx)(n.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,l.jsx)(n.h3,{id:"during-install-pods-get-stuck-in-a-pending-state",children:"During install Pods get stuck in a Pending state"}),"\n",(0,l.jsxs)(n.p,{children:["During the installation, multiple ",(0,l.jsx)(n.code,{children:"StatefullSets"})," are created that require a ",(0,l.jsx)(n.code,{children:"PersistentVolumeClaim"})," (PVC). Each PVC is attached to a ",(0,l.jsx)(n.code,{children:"Volume"})," in Linode. Volumes count towards the account limits. If you see Pods in a ",(0,l.jsx)(n.code,{children:"Pending"})," state, it might be that your're hitting the account limit."]}),"\n",(0,l.jsx)(n.p,{children:"What to do:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete unused resources in your Linode account (like unused Volumes)."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a support ticket and request to increase your account limit."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);