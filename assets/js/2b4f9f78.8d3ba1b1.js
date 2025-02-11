"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5649],{3075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"get-started/installation/post-install-steps","title":"Post installation steps","description":"Follow the post-installation steps after initial installation.","source":"@site/docs/get-started/installation/post-install-steps.md","sourceDirName":"get-started/installation","slug":"/get-started/installation/post-installation-steps","permalink":"/docs/get-started/installation/post-installation-steps","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/get-started/installation/post-install-steps.md","tags":[],"version":"current","frontMatter":{"slug":"post-installation-steps","title":"Post installation steps","sidebar_label":"Post Installation Steps"},"sidebar":"mainSidebar","previous":{"title":"BYO Wild Card Cert","permalink":"/docs/get-started/installation/byo-wildcard-cert"},"next":{"title":"Labs Overview","permalink":"/docs/get-started/labs/overview"}}');var i=t(4848),o=t(8453);const l={slug:"post-installation-steps",title:"Post installation steps",sidebar_label:"Post Installation Steps"},r=void 0,a={},d=[{value:"Step 1: Get the initial administrator credentials",id:"step-1-get-the-initial-administrator-credentials",level:2},{value:"Step 2 (optional): Add the auto generated CA to your keychain",id:"step-2-optional-add-the-auto-generated-ca-to-your-keychain",level:2},{value:"Step 3 (Optional): Add the URL of the Kubernetes API",id:"step-3-optional-add-the-url-of-the-kubernetes-api",level:2},{value:"Step 4 (optional): Configure Object Storage",id:"step-4-optional-configure-object-storage",level:2},{value:"Step 5 (Optional): Add a Linode Personal Access Token to backup Persistent Volumes (Linode only)",id:"step-5-optional-add-a-linode-personal-access-token-to-backup-persistent-volumes-linode-only",level:2},{value:"Step 6 (optional): Activate more Apps",id:"step-6-optional-activate-more-apps",level:2},{value:"Step 7: Create Teams",id:"step-7-create-teams",level:2},{value:"Step 8: Create users and add them to a Team",id:"step-8-create-users-and-add-them-to-a-team",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Follow the post-installation steps after initial installation."}),"\n",(0,i.jsx)(n.h2,{id:"step-1-get-the-initial-administrator-credentials",children:"Step 1: Get the initial administrator credentials"}),"\n",(0,i.jsx)(n.p,{children:"When the installer job (in the default namespace) has finished you can obtain the initial administrator credentials and sign in to the Console."}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to get the logs of the installer job:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl logs jobs/apl -n default -f\n"})}),"\n",(0,i.jsx)(n.p,{children:"At the end of the logs you should see the following message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"########################################################################################################################################\n#\n#  The App Platform console is available at https://console.${domainSuffix}\n#\n#  Obtain login credentials by using the below commands:\n#      kubectl get secret platform-admin-initial-credentials -n keycloak -o jsonpath='{.data.username}' | base64 -d\n#      kubectl get secret platform-admin-initial-credentials -n keycloak -o jsonpath='{.data.password}' | base64 -d\n#\n########################################################################################################################################\n"})}),"\n",(0,i.jsx)(n.p,{children:"Perform the 2 commands to get the initail credentails and use them to sign in to the Console. You will need to change your password at first login."}),"\n",(0,i.jsx)(n.h2,{id:"step-2-optional-add-the-auto-generated-ca-to-your-keychain",children:"Step 2 (optional): Add the auto generated CA to your keychain"}),"\n",(0,i.jsxs)(n.p,{children:["The generated CA is not trusted on your local machine when installed using Let's Encrypt ",(0,i.jsx)(n.code,{children:"staging"})," certificates. Here are some options to prevent you from clicking away lots of security warning in your browser:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'In the left menu of the console, click on "Download CA"'}),"\n",(0,i.jsx)(n.li,{children:"Double click the downloaded CA.crt or add the CA to your keychain on Mac using the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt\n"})}),"\n",(0,i.jsx)(n.p,{children:"On Windows, use PowerShell (running as Administrator) with the Certutil:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"certutil.exe -addstore root <downloaded cert path>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'Import-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\\LocalMachine\\Root\n# Restart the browser\n'})}),"\n",(0,i.jsx)(n.p,{children:"But you could also run Chrome in insecure mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"alias chrome-insecure='/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-optional-add-the-url-of-the-kubernetes-api",children:"Step 3 (Optional): Add the URL of the Kubernetes API"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Adding the URL of the K8s cluster API is required by teams to be able to download the KUBECONFIG"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.code,{children:"Platform"})," in the Console, click on ",(0,i.jsx)(n.code,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Cluster"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the full URL of the API server."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Submit"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-4-optional-configure-object-storage",children:"Step 4 (optional): Configure Object Storage"}),"\n",(0,i.jsx)(n.p,{children:"If you're planning on activating apps that can use Object Storage (like Loki, Harbor, Tempo, Velero), then first configure Object Storage. Check the table in Step 6 to see which App requires Object Storage configured."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Velero requires Object Storage!"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Creating Database backups requires Object Storage!"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.code,{children:"Platform"})," in the Console, click on ",(0,i.jsx)(n.code,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Object Storage"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"Minio Local"})," or ",(0,i.jsx)(n.code,{children:"Linode"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When Minio is selected (only for development), Minio App is enabled and all required buckets are automatically provisioned.\nWhen Linode is selected, create the buckets for the apps you are planning to use and fill in the region and the Access Key ID and Secret Access Key (with read/write access)."}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-5-optional-add-a-linode-personal-access-token-to-backup-persistent-volumes-linode-only",children:"Step 5 (Optional): Add a Linode Personal Access Token to backup Persistent Volumes (Linode only)"}),"\n",(0,i.jsx)(n.p,{children:"To use the self-service feature to create backups of Persistent Volumes in Linode, first create a new Personal Access Token with Read/Write access for Volumes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Go to your profile on the top right."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"API Tokens"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Create A Personal Access Token"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.code,{children:"Label"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the desired ",(0,i.jsx)(n.code,{children:"Expiry"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"No Access"})," for all."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"Read/Write"})," for ",(0,i.jsx)(n.code,{children:"Volumes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.code,{children:"Create Token"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Copy your Personal Access Token."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then Add the Token:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sign in to the Console as an admin."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the left menu, click on Settings."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Backup"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the API Token in the ",(0,i.jsx)(n.code,{children:"Backup persistent volumes"})," section."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When Object Storage is configured and an API Token is added, then activate the Velero App. You can now use the Backup self-service feature to create backup schedules to backup Persistent Volumes."}),"\n",(0,i.jsx)(n.h2,{id:"step-6-optional-activate-more-apps",children:"Step 6 (optional): Activate more Apps"}),"\n",(0,i.jsx)(n.p,{children:"App Platform for LKE is a composable platform. Activate more Apps based on the required platform capabilities:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Capability"}),(0,i.jsx)(n.th,{children:"App"}),(0,i.jsx)(n.th,{children:"Object storage"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Log aggregation"}),(0,i.jsx)(n.td,{children:"Loki and Grafana"}),(0,i.jsx)(n.td,{children:"Optional"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Metric collection"}),(0,i.jsx)(n.td,{children:"Prometheus and Grafana"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Send Alerts"}),(0,i.jsx)(n.td,{children:"Prometheus and Alert manager"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Tracing"}),(0,i.jsx)(n.td,{children:"Tempo, OTEL, Loki and Grafana"}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Build images from source code"}),(0,i.jsx)(n.td,{children:"Harbor"}),(0,i.jsx)(n.td,{children:"Optional"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scan running containers for vulnerabilities"}),(0,i.jsx)(n.td,{children:"Trivy"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Enforce security policies"}),(0,i.jsx)(n.td,{children:"Kyverno"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Database backups"}),(0,i.jsx)(n.td,{children:"CloudnativePG"}),(0,i.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"step-7-create-teams",children:"Step 7: Create Teams"}),"\n",(0,i.jsxs)(n.p,{children:["Create your first team. Follow the instructions ",(0,i.jsx)(n.a,{href:"/docs/for-ops/console/teams#creating-a-team",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"step-8-create-users-and-add-them-to-a-team",children:"Step 8: Create users and add them to a Team"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The option to create users and add them to Teams is not available when installed with ",(0,i.jsx)(n.a,{href:"/docs/get-started/installation/oidc",children:"OIDC"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Create Users and add them to a Team. Follow the instructions ",(0,i.jsx)(n.a,{href:"/docs/for-ops/console/user-management",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);