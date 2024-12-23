"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1177],{2411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(5893),s=t(1151);const i={slug:"akamai-connected-cloud",title:"Akamai Connected Cloud",sidebar_label:"Akamai Connected Cloud"},a="Get started with the App Platform for LKE",r={id:"get-started/installation/akamai-connected-cloud",title:"Akamai Connected Cloud",description:"Create a Kubernetes cluster with the App Platform for LKE",source:"@site/docs/get-started/installation/akamai-connected-cloud.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/akamai-connected-cloud",permalink:"/docs/get-started/installation/akamai-connected-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/installation/akamai-connected-cloud.md",tags:[],version:"current",frontMatter:{slug:"akamai-connected-cloud",title:"Akamai Connected Cloud",sidebar_label:"Akamai Connected Cloud"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/get-started/installation/overview"},next:{title:"Linode Kubernetes Engine",permalink:"/docs/get-started/installation/linode"}},l={},d=[{value:"Create a Kubernetes cluster with the App Platform for LKE",id:"create-a-kubernetes-cluster-with-the-app-platform-for-lke",level:2},{value:"Access and download your Kubeconfig",id:"access-and-download-your-kubeconfig",level:2},{value:"Obtain the initial access credentials and sign in",id:"obtain-the-initial-access-credentials-and-sign-in",level:2},{value:"Provision Object Storage for the App Platform (Expected to be available on November 12)",id:"provision-object-storage-for-the-app-platform-expected-to-be-available-on-november-12",level:2},{value:"Onboard Teams and Users",id:"onboard-teams-and-users",level:2},{value:"Known issues",id:"known-issues",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"get-started-with-the-app-platform-for-lke",children:"Get started with the App Platform for LKE"}),"\n",(0,o.jsx)(n.h2,{id:"create-a-kubernetes-cluster-with-the-app-platform-for-lke",children:"Create a Kubernetes cluster with the App Platform for LKE"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log into your Cloud Manager account."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Select Kubernetes from the left navigation menu and then click Create Cluster."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The Create a Kubernetes Cluster page appears. At the top of the page, you are required to select the following options"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In the Cluster Label field, provide a name for your cluster. The name must be unique between all of the clusters on your account. This name is how you identify your cluster in Cloud Manager\u2019s Dashboard."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"From the Region dropdown menu, select the Region where you would like your cluster to reside."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"From the Version dropdown menu, select a Kubernetes version to deploy to your cluster."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"In the App Platform for LKE section, select \u201cYes, enable App Platform for LKE\u201d"}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsx)(n.p,{children:"The App Platform for LKE requires HA control plane to be enabled. When App Platform for LKE is enabled, HA control plane will automatically be enabled."})]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"In the Add Node Pools section, select the required resources for the Linode worker node(s). To the right of each plan, select the plus + and minus - to add or remove a Linode to a node pool one at time."}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsxs)(n.p,{children:["During the Beta period the App Platform for LKE requires a node pool with at least ",(0,o.jsx)(n.strong,{children:"3 worker"})," nodes with a minimum of ",(0,o.jsx)(n.strong,{children:"16 GB memory"})," and ",(0,o.jsx)(n.strong,{children:"4 CPUs"})," per node. Make sure to select the required Linode plan."]})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The App Platform for LKE is not supported in combination with Shared CPU."})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Select Add to include the node pool in your configuration. If you decide that you need more hardware resources after you deploy your cluster, you can always ",(0,o.jsx)(n.a,{href:"https://techdocs.akamai.com/cloud-computing/docs/manage-nodes-and-node-pools",children:"edit your Node Pool"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Once a pool has been added to your configuration, it is listed in the Cluster Summary on the right-hand side of Cloud Manager detailing your cluster's hardware resources and monthly cost. Additional pools can be added before finalizing the cluster creation process by repeating the previous step for each additional pool."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"When you are satisfied with the configuration of your cluster, click the Create Cluster button on the right hand side of the screen. Your cluster's detail page appears, and your Node Pools are listed on this page. First the LKE cluster will be created and once ready the App Platform for LKE will be installed. The installation of the App Platform for LKE takes around 10 until 15 minutes. When the installation is finished, the URL of the Portal Endpoint will appear in the App Platform for LKE section. The progress of the installation will be checked every 60 seconds. When the installation is still in progress, the URL of the Portal Endpoint will not be displayed. Instead the message \u201cInstallation in progress\u201d will appear."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"When the installation of both the LKE cluster and the App Platform is ready, click on the provided URL of the Portal Endpoint:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"details-page",src:t(7223).Z+"",width:"2212",height:"1302"})}),"\n",(0,o.jsx)(n.p,{children:"You will then see the following sign-in page:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"sign-in",src:t(4583).Z+"",width:"2674",height:"1636"})}),"\n",(0,o.jsxs)(n.ol,{start:"10",children:["\n",(0,o.jsx)(n.li,{children:"Continue with the next steps to get the initial credentials needed to sign in."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"access-and-download-your-kubeconfig",children:"Access and download your Kubeconfig"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"To access your cluster's Kubeconfig, log in to your Cloud Manager account and navigate to the Kubernetes section."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"From the Kubernetes listing page, click on your cluster's more options ellipsis and select Download Kubeconfig. The file is saved to your computer's Downloads folder."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open a terminal shell and save your Kubeconfig file's path to the $KUBECONFIG environment variable. In the example command, the Kubeconfig file is located in the Downloads folder, but you should alter this line with this folder's location on your computer:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export KUBECONFIG=~/Downloads/kubeconfig.yaml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obtain-the-initial-access-credentials-and-sign-in",children:"Obtain the initial access credentials and sign in"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Perform the following command to obtain the user name:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get secret platform-admin-initial-credentials -n keycloak --template={{.data.username}} | base64 -d\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Perform the following command to obtain the initial password:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get secret platform-admin-initial-credentials -n keycloak --template={{.data.password}} | base64 -d\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Copy the username and password to your clipboard."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Sign in to the Console with the provided username and initial password."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Change the initial password"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"provision-object-storage-for-the-app-platform-expected-to-be-available-on-november-12",children:"Provision Object Storage for the App Platform (Expected to be available on November 12)"}),"\n",(0,o.jsxs)(n.p,{children:["When signed in to the Console (the web UI of the App Platform), the first thing you\u2019ll need to do is configure Object Storage. A wizard will be displayed asking you if the App Platform should provision all the required Buckets and access key for you. This is not required, but strongly recommended as this will prevent ",(0,o.jsx)(n.code,{children:"out of disk space errors"})," when using Storage Volumes for integrated applications. Using Object Storage also has the advantage to create backups of all databases used by the platform."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"When asked to create all the required Buckets and access key, click Yes. If you don\u2019t want the platform to create all the required buckets, then click Skip for now. Note that in this case some features like creating backups of databases will not be available. You can start the Wizard at any time in the Console (Platform View: Maintenance, Show Object Storage Wizard)."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Follow the instructions to ",(0,o.jsx)(n.a,{href:"https://techdocs.akamai.com/linode-api/reference/get-started#personal-access-tokens",children:"create a Personal Access Token"})," and make sure to select ",(0,o.jsx)(n.strong,{children:"Read/Write"})," for the Object Storage category. Copy the Access Token."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Now paste the Access Token into the wizard and select the region where the buckets should be created from the dropdown list."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.code,{children:"Submit"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["All the required buckets will now be created in your account and the platform will be configured to use Object Storage to store persistent data and backups. The provided Personal Access Token will not be stored. The created buckets will have the ",(0,o.jsx)(n.code,{children:"<cluster-id>"})," prefix`"]}),"\n",(0,o.jsx)(n.h2,{id:"onboard-teams-and-users",children:"Onboard Teams and Users"}),"\n",(0,o.jsxs)(n.p,{children:["You can now start enabling Applications, onboarding ",(0,o.jsx)(n.a,{href:"../../for-ops/console/teams",children:"Teams"})," and create ",(0,o.jsx)(n.a,{href:"../../for-ops/console/user-management",children:"Users"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We recommend to go through the ",(0,o.jsx)(n.a,{href:"../labs/overview",children:"Hands-on Labs"})," to learn how to take advantage of the App Platform for LKE."]}),"\n",(0,o.jsx)(n.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,o.jsxs)(n.p,{children:["Are you experiencing issue during installation or operation? Check the ",(0,o.jsx)(n.a,{href:"/docs/for-ops/sre/known-issues",children:"Known Issues page"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},7223:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cluster-details-page-a92472aeaf27114cfa3712874dd46765.png"},4583:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sign-in-page-72473e012cb16ab3690fcb872be4e5f8.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(7294);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);