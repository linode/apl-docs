"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1177],{2411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(5893),o=n(1151);const s={slug:"akamai-connected-cloud",title:"Akamai Connected Cloud",sidebar_label:"Akamai Connected Cloud"},a="Get started with the Application Platform for LKE",l={id:"get-started/installation/akamai-connected-cloud",title:"Akamai Connected Cloud",description:"Create a Kubernetes cluster with the App Platform for LKE",source:"@site/docs/get-started/installation/akamai-connected-cloud.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/akamai-connected-cloud",permalink:"/docs/get-started/installation/akamai-connected-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/installation/akamai-connected-cloud.md",tags:[],version:"current",frontMatter:{slug:"akamai-connected-cloud",title:"Akamai Connected Cloud",sidebar_label:"Akamai Connected Cloud"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/get-started/installation/overview"},next:{title:"Linode Kubernetes Engine",permalink:"/docs/get-started/installation/linode"}},r={},c=[{value:"Create a Kubernetes cluster with the App Platform for LKE",id:"create-a-kubernetes-cluster-with-the-app-platform-for-lke",level:2},{value:"Access and download your Kubeconfig",id:"access-and-download-your-kubeconfig",level:2},{value:"Obtain the initial access credentials and sign in",id:"obtain-the-initial-access-credentials-and-sign-in",level:2},{value:"Provision Object Storage for the Application Platform",id:"provision-object-storage-for-the-application-platform",level:2},{value:"Onboard Teams and Users",id:"onboard-teams-and-users",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Installation gets stuck because of a quota exceeded exception",id:"installation-gets-stuck-because-of-a-quota-exceeded-exception",level:3},{value:"The Let\u2019s Encrypt secret request was not successful",id:"the-lets-encrypt-secret-request-was-not-successful",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"get-started-with-the-application-platform-for-lke",children:"Get started with the Application Platform for LKE"}),"\n",(0,i.jsx)(t.h2,{id:"create-a-kubernetes-cluster-with-the-app-platform-for-lke",children:"Create a Kubernetes cluster with the App Platform for LKE"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log into your Cloud Manager account."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Select Kubernetes from the left navigation menu and then click Create Cluster."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The Create a Kubernetes Cluster page appears. At the top of the page, you are required to select the following options"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the Cluster Label field, provide a name for your cluster. The name must be unique between all of the clusters on your account. This name is how you identify your cluster in Cloud Manager\u2019s Dashboard."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"From the Region dropdown menu, select the Region where you would like your cluster to reside."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"From the Version dropdown menu, select a Kubernetes version to deploy to your cluster."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"In the Application Platform for LKE section, select \u201cYes, enable Application Platform for LKE\u201d"}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"The Application Platform for LKE requires HA control plane to be enabled. When Application Platform for LKE is enabled, HA control plane will automatically be enabled."})]}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:"In the Add Node Pools section, select the hardware resources for the Linode worker node(s) that make up your LKE cluster. To the right of each plan, select the plus + and minus - to add or remove a Linode to a node pool one at time."}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"The Application Platform for LKE requires a node pool with at least 3 worker nodes with a total minimum of 16 GB memory and 12 CPUs. Linode plans that do not provide the minimal required resources can not be selected."})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The App Platform for LKE is not supported in combination with Shared CPU."})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select Add to include the node pool in your configuration. If you decide that you need more hardware resources after you deploy your cluster, you can always ",(0,i.jsx)(t.a,{href:"https://techdocs.akamai.com/cloud-computing/docs/manage-nodes-and-node-pools",children:"edit your Node Pool"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Once a pool has been added to your configuration, it is listed in the Cluster Summary on the right-hand side of Cloud Manager detailing your cluster's hardware resources and monthly cost. Additional pools can be added before finalizing the cluster creation process by repeating the previous step for each additional pool."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"When you are satisfied with the configuration of your cluster, click the Create Cluster button on the right hand side of the screen. Your cluster's detail page appears, and your Node Pools are listed on this page. First the LKE cluster will be created and once ready the Application Platform for LKE will be installed. The installation of the Application Platform for LKE takes around 10 until 15 minutes. When the installation is finished, the URL of the Portal Endpoint will appear in the Application Platform for LKE section. The progress of the installation will be checked every 60 seconds. When the installation is still in progress, the URL of the Portal Endpoint will not be displayed. Instead the message \u201cInstallation in progress\u201d will appear."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"When the installation of both the LKE cluster and the Application Platform is ready, click on the provided URL of the Portal Endpoint:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"details-page",src:n(7223).Z+"",width:"2212",height:"1302"})}),"\n",(0,i.jsx)(t.p,{children:"You will then see the following sign-in page:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sign-in",src:n(4583).Z+"",width:"2674",height:"1636"})}),"\n",(0,i.jsxs)(t.ol,{start:"10",children:["\n",(0,i.jsx)(t.li,{children:"Continue with the next steps to get the initial credentials needed to sign in."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"access-and-download-your-kubeconfig",children:"Access and download your Kubeconfig"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To access your cluster's Kubeconfig, log in to your Cloud Manager account and navigate to the Kubernetes section."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"From the Kubernetes listing page, click on your cluster's more options ellipsis and select Download Kubeconfig. The file is saved to your computer's Downloads folder."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Open a terminal shell and save your Kubeconfig file's path to the $KUBECONFIG environment variable. In the example command, the Kubeconfig file is located in the Downloads folder, but you should alter this line with this folder's location on your computer:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"export KUBECONFIG=~/Downloads/kubeconfig.yaml\n"})}),"\n",(0,i.jsx)(t.h2,{id:"obtain-the-initial-access-credentials-and-sign-in",children:"Obtain the initial access credentials and sign in"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Perform the following command to obtain the user name:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl get secret platform-admin-initial-credentials -n keycloak --template={{.data.username}} | base64 -d\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Perform the following command to obtain the initial password:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl get secret platform-admin-initial-credentials -n keycloak --template={{.data.password}} | base64 -d\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Copy the username and password to your clipboard."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Sign in to the Console with the provided username and initial password."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Change the initial password"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"provision-object-storage-for-the-application-platform",children:"Provision Object Storage for the Application Platform"}),"\n",(0,i.jsxs)(t.p,{children:["When signed in to the Console (the web UI of the Application Platform), the first thing you\u2019ll need to do is configure Object Storage. A wizard will be displayed asking you if the Application Platform should provision all the required Buckets and access key for you. This is not required, but strongly recommended as this will prevent ",(0,i.jsx)(t.code,{children:"out of disk space errors"})," when using Storage Volumes for integrated applications. Using Object Storage also has the advantage to create backups of all databases used by the platform."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"When asked to create all the required Buckets and access key, click Yes. If you don\u2019t want the platform to create all the required buckets, then click Skip. Note that in this case some features like creating backups of databases will not be available. You can start the Wizard at any time in the Console (Platform View: Maintenance, Show Object Storage Wizard)."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Follow the instructions to ",(0,i.jsx)(t.a,{href:"https://techdocs.akamai.com/linode-api/reference/get-started#personal-access-tokens",children:"create a Personal Access Token"})," and make sure to select ",(0,i.jsx)(t.strong,{children:"Read/Write"})," for the Object Storage category and ",(0,i.jsx)(t.strong,{children:"Read"})," for the Kubernetes category. Copy the Access Token."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Now paste the Access Token into the wizard and click Submit."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["All the required Buckets and Access Key will now be created in your account and the platform will be configured to use Object Storage to store persistent data and backups. The provided Personal Access Token will not be stored. The created buckets will have the ",(0,i.jsx)(t.code,{children:"<cluster-id>"})," prefix`"]}),"\n",(0,i.jsx)(t.h2,{id:"onboard-teams-and-users",children:"Onboard Teams and Users"}),"\n",(0,i.jsxs)(t.p,{children:["You can now start enabling Applications, onboarding ",(0,i.jsx)(t.a,{href:"../../for-ops/console/teams",children:"Teams"})," and create ",(0,i.jsx)(t.a,{href:"../../for-ops/console/user-management",children:"Users"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We recommend to go through the ",(0,i.jsx)(t.a,{href:"../labs/overview",children:"Hands-on Labs"})," to learn how to take advantage of the Application Platform for LKE."]}),"\n",(0,i.jsx)(t.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,i.jsx)(t.p,{children:"If the URL of the Portal Endpoint does not appear in the Application Platform for LKE section after 30 minutes, then the following may be the issue:"}),"\n",(0,i.jsx)(t.h3,{id:"installation-gets-stuck-because-of-a-quota-exceeded-exception",children:"Installation gets stuck because of a quota exceeded exception"}),"\n",(0,i.jsx)(t.p,{children:"Next to the resources required for LKE, the Application Platform also uses a NodeBalancer and a minimum of 11 Storage Volumes. This might result in a quota exceeding exception. Linode currently does not provide quota limits in your account details at this time."}),"\n",(0,i.jsx)(t.p,{children:"The following issue might be related to quota exceeding exception:"}),"\n",(0,i.jsx)(t.p,{children:"Pods that require a Storage Volume get stuck in a pending state with the following message:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"pod has unbound immediate PersistentVolumeClaims. preemption: 0/3 nodes are available: 3 Preemption is not helpful for scheduling."})}),"\n",(0,i.jsx)(t.p,{children:"Resolution:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Remove any Storage Volumes that are Unattached."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If you would like to know your account's limits or want to increase the number of entities you can create, the best way is to get that information through a support ticket."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"the-lets-encrypt-secret-request-was-not-successful",children:"The Let\u2019s Encrypt secret request was not successful"}),"\n",(0,i.jsx)(t.p,{children:"For each cluster with the Application Platform for LKE enabled, a Let\u2019s Encrypt certificate will be requested. If the certificate is not ready within 30 minutes, the installation of the Application Platform will fail. Run the following command to see if the certificate is created:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl get secret -n istio-system\n"})}),"\n",(0,i.jsxs)(t.p,{children:["There should be a secret called: ",(0,i.jsx)(t.code,{children:"apl-<cluster-id>-wildcard-cert"})]}),"\n",(0,i.jsx)(t.p,{children:"If this secret is not present, then the request failed."}),"\n",(0,i.jsx)(t.p,{children:"Resolution:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Delete the LKE cluster with Application Platform for LKE enabled and create a new cluster with Application Platform for LKE enabled"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7223:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cluster-details-page-a92472aeaf27114cfa3712874dd46765.png"},4583:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sign-in-page-72473e012cb16ab3690fcb872be4e5f8.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);