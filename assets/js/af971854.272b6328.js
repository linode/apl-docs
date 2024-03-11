"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1509],{5575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=n(5893),i=n(1151);const c={slug:"lab-33",title:"Create rabbitMQ Cluster",sidebar_label:"Create RabbitMQ cluster"},a=void 0,r={id:"get-started/labs/lab-33",title:"Create rabbitMQ Cluster",description:"In this lab we will deploy a RabbitMQ workload that is created with the Catalog.",source:"@site/docs/get-started/labs/lab-33.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-33",permalink:"/docs/get-started/labs/lab-33",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-33.md",tags:[],version:"current",frontMatter:{slug:"lab-33",title:"Create rabbitMQ Cluster",sidebar_label:"Create RabbitMQ cluster"},sidebar:"mainSidebar",previous:{title:"Canary Deployments",permalink:"/docs/get-started/labs/lab-28"},next:{title:"Overview",permalink:"/docs/for-ops/console/overview"}},d={},l=[{value:"Enabling RabbitMQ",id:"enabling-rabbitmq",level:2},{value:"Creating a RabbitMQ Cluster",id:"creating-a-rabbitmq-cluster",level:2},{value:"Adding Queues and Policies",id:"adding-queues-and-policies",level:2},{value:"Accessing the RabbitMQ Management UI",id:"accessing-the-rabbitmq-management-ui",level:2},{value:"Checking the RabbitMQ Management UI",id:"checking-the-rabbitmq-management-ui",level:2},{value:"Connecting an Application to the rabbitMQ Cluster",id:"connecting-an-application-to-the-rabbitmq-cluster",level:2}];function o(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In this lab we will deploy a RabbitMQ workload that is created with the Catalog."}),"\n",(0,s.jsx)(t.h2,{id:"enabling-rabbitmq",children:"Enabling RabbitMQ"}),"\n",(0,s.jsxs)(t.p,{children:["As an ",(0,s.jsx)(t.code,{children:"Admin"})," go to the ",(0,s.jsx)(t.code,{children:"Apps"})," panel and activate ",(0,s.jsx)(t.code,{children:"RabbitMQ"}),", afterwards click the ",(0,s.jsx)(t.code,{children:"deploy"})," button.\nIf you are not and ",(0,s.jsx)(t.code,{children:"Admin"})," then ask your ",(0,s.jsx)(t.code,{children:"Admin"})," to enable the ",(0,s.jsx)(t.code,{children:"RabbitMQ"})," application."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Apps Overview",src:n(3695).Z+"",width:"901",height:"619"})}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-rabbitmq-cluster",children:"Creating a RabbitMQ Cluster"}),"\n",(0,s.jsxs)(t.p,{children:["To create a RabbitMQ Cluster, on the team overview click on the ",(0,s.jsx)(t.code,{children:"Catalog"})," in the sidebar and select the ",(0,s.jsx)(t.code,{children:"RabbitMQ"})," workload. This will take you to the page with the readme where you can see all specifications and definitions that you can use to create your RabbitMQ Cluster with Queues and Policies."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Workload Catalog",src:n(8521).Z+"",width:"1917",height:"903"})}),"\n",(0,s.jsxs)(t.p,{children:["To configure the RabbitMQ Cluster workload go to the ",(0,s.jsx)(t.code,{children:"Values"})," tab and fill in a name for the RabbitMQ Cluster workload. Afterwards you can scroll down an edit the cluster parameters."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Name",src:n(2020).Z+"",width:"1920",height:"950"})}),"\n",(0,s.jsx)(t.h2,{id:"adding-queues-and-policies",children:"Adding Queues and Policies"}),"\n",(0,s.jsxs)(t.p,{children:["To configure ",(0,s.jsx)(t.code,{children:"Queues"})," and ",(0,s.jsx)(t.code,{children:"Policies"})," for the rabbitMQ Cluster you can add them to the ",(0,s.jsx)(t.code,{children:"queues"})," and ",(0,s.jsx)(t.code,{children:"policies"})," parameters respectively.\nFor example we create a rabbitMQ Cluster workload with the name ",(0,s.jsx)(t.code,{children:"rabbit1"})," with 2 ",(0,s.jsx)(t.code,{children:"queues"})," and 2 ",(0,s.jsx)(t.code,{children:"policies"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Fill In Values",src:n(6009).Z+"",width:"1920",height:"966"})}),"\n",(0,s.jsx)(t.admonition,{title:"ALERT",type:"info",children:(0,s.jsxs)(t.p,{children:["Do remember that even though these values can be edited afterwards, not all specifications or definitions can be updated after a ",(0,s.jsx)(t.code,{children:"queue"})," or ",(0,s.jsx)(t.code,{children:"policy"})," has been created. Please make sure everything is filled in correctly."]})}),"\n",(0,s.jsxs)(t.p,{children:["When everything is filled in correctly you can ",(0,s.jsx)(t.code,{children:"submit"})," and click the ",(0,s.jsx)(t.code,{children:"deploy changes"})," button."]}),"\n",(0,s.jsxs)(t.p,{children:["To check the status of the deployment you can go to the ",(0,s.jsx)(t.code,{children:"workload"})," list page."]}),"\n",(0,s.jsxs)(t.p,{children:["Workload Status:\n",(0,s.jsx)(t.img,{alt:"Check Workload Status",src:n(7338).Z+"",width:"1920",height:"966"})]}),"\n",(0,s.jsxs)(t.p,{children:["ArgoCD Status:\n",(0,s.jsx)(t.img,{alt:"Check ArgoCD",src:n(9740).Z+"",width:"1920",height:"968"})]}),"\n",(0,s.jsx)(t.h2,{id:"accessing-the-rabbitmq-management-ui",children:"Accessing the RabbitMQ Management UI"}),"\n",(0,s.jsxs)(t.p,{children:["To access the ",(0,s.jsx)(t.code,{children:"RabbitMQ Management UI"})," you have to retrieve the default user credentials and ",(0,s.jsx)(t.code,{children:"port-forward"})," the ",(0,s.jsx)(t.code,{children:"rabbitMQ server"}),".\nTo do this connect to your k8s cluster with ",(0,s.jsx)(t.code,{children:"kubectl"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,s.jsxs)(t.p,{children:["In this example the ",(0,s.jsx)(t.code,{children:"rabbitMQ cluster"})," was created in the demo team so we have to get the ",(0,s.jsx)(t.code,{children:"secret"})," from the ",(0,s.jsx)(t.code,{children:"team-demo"})," namespace. Please retrieve the ",(0,s.jsx)(t.code,{children:"secret"})," from the namespace where the ",(0,s.jsx)(t.code,{children:"rabbitMQ cluster"})," was created."]})}),"\n",(0,s.jsx)(t.p,{children:"To retrieve the username and decode it from base64 use the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.username}" | base64 --decode\n'})}),"\n",(0,s.jsx)(t.p,{children:"To retrieve the password and decode it from base64 use the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.password}" | base64 --decode\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Which looks like the this:\n",(0,s.jsx)(t.img,{alt:"User Credentials",src:n(107).Z+"",width:"797",height:"77"})]}),"\n",(0,s.jsx)(t.admonition,{title:"ALERT",type:"info",children:(0,s.jsxs)(t.p,{children:["Make sure you don't copy the ",(0,s.jsx)(t.code,{children:"%"})," symbol at the end."]})}),"\n",(0,s.jsxs)(t.p,{children:["Now you have to ",(0,s.jsx)(t.code,{children:"port-forward"})," the rabbitmq ",(0,s.jsx)(t.code,{children:"container"})," with port number ",(0,s.jsx)(t.code,{children:"15672"})," that is inside the rabbitmq ",(0,s.jsx)(t.code,{children:"pod"})," called ",(0,s.jsx)(t.code,{children:"rabbit1-rabbitmq-server-0"})," to a port of your choice that is not used, I use port ",(0,s.jsx)(t.code,{children:"56027"})," for this example."]}),"\n",(0,s.jsx)(t.admonition,{title:"ALERT",type:"info",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"rabbit1-rabbitmq-server-0"})," has the prefix ",(0,s.jsx)(t.code,{children:"rabbit1"})," because this is the name that we gave it when creating the workload."]})}),"\n",(0,s.jsxs)(t.p,{children:["To ",(0,s.jsx)(t.code,{children:"port-forward"})," use the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"kubectl port-forward -n team-demo rabbit1-rabbitmq-server-0 56027:15672\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Port Forwarding",src:n(2933).Z+"",width:"523",height:"64"})}),"\n",(0,s.jsxs)(t.p,{children:["Access ",(0,s.jsx)(t.code,{children:"http://localhost:56027"})," and use the previously acquired user credentials to log in. If you cannot log in, please check if the credentials are for the correct rabbitMQ cluster."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Logging-in to Management UI",src:n(8603).Z+"",width:"863",height:"252"})}),"\n",(0,s.jsx)(t.h2,{id:"checking-the-rabbitmq-management-ui",children:"Checking the RabbitMQ Management UI"}),"\n",(0,s.jsx)(t.p,{children:"Now that we are logged in you should see the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ManagementUI Overview",src:n(8757).Z+"",width:"1920",height:"968"})}),"\n",(0,s.jsxs)(t.p,{children:["We can also check the ",(0,s.jsx)(t.code,{children:"queues"})," that we specified when creating the rabbitmq cluster in the ",(0,s.jsx)(t.code,{children:"Queues and Streams"})," tab."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Overview Queues",src:n(5459).Z+"",width:"2153",height:"486"})}),"\n",(0,s.jsxs)(t.p,{children:["To see the ",(0,s.jsx)(t.code,{children:"policies"})," that we defined you can see them in the ",(0,s.jsx)(t.code,{children:"Admin"})," tab and under ",(0,s.jsx)(t.code,{children:"Policies"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Overview Policies",src:n(5331).Z+"",width:"1919",height:"614"})}),"\n",(0,s.jsx)(t.h2,{id:"connecting-an-application-to-the-rabbitmq-cluster",children:"Connecting an Application to the rabbitMQ Cluster"}),"\n",(0,s.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,s.jsx)(t.p,{children:"Will be expanded upon"})}),"\n",(0,s.jsxs)(t.p,{children:["To connect to the ",(0,s.jsx)(t.code,{children:"rabbitMQ cluster"})," you use ",(0,s.jsx)(t.code,{children:"AMQP"})," to open a connection. To open a connection you need to create a connection string using the ",(0,s.jsx)(t.code,{children:"username"}),", ",(0,s.jsx)(t.code,{children:"password"}),", ",(0,s.jsx)(t.code,{children:"host"})," and ",(0,s.jsx)(t.code,{children:"port"})," of the rabbitmq cluster."]}),"\n",(0,s.jsx)(t.p,{children:"To get the host use the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.host}" | base64 --decode\n'})}),"\n",(0,s.jsx)(t.p,{children:"To get the port use the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'kubectl get secret rabbit1-rabbitmq-default-user -n team-demo -o jsonpath="{.data.port}" | base64 --decode\n'})}),"\n",(0,s.jsx)(t.p,{children:"The connection string is build like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"amqp://USERNAME:PASSWORD@HOST:PORT/\n"})}),"\n",(0,s.jsx)(t.p,{children:"With values:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"amqp://default_user_mWPUECo5wsbtpgY3oze:MdzUL4CcgF-cQryLfk5uxqf57qqWBG8l@matthew-rabbit1-rabbitmq.team-admin.svc:5672/\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},3695:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-0-enable-rabbitmq-41fe464d5087649f78f676b568bc284d.png"},8521:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-1-click-workload-80714dc960e250ad522bad870cfb3f0a.png"},5459:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-10-queues-c7282e26180c8b45ad0feff6f3f371c4.png"},5331:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-11-policies-7b9fd478e92bcfae01acec2631c8f014.png"},2020:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-2-add-name-b1d02de65d838bcfba89fba525a26c66.png"},6009:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-3-add-queues-and-policies-50d05b131a2233305b0f823cadac520c.png"},7338:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-4-check-status-cfe771d487ed7a5c525958cb5c4c12d0.png"},9740:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-5-check-argocd-status-3b82c45792c65008c36d7831ff13f318.png"},107:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-6-user-credentials-e21d1f14b2081e44510671e2a59e1246.png"},2933:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},8603:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-8-logging-in-4c9c20d1499ca0bcc942ba7d863a0ed3.png"},8757:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rabbitmq-9-management-ui-0eb14163f450f423a0e19145512cad3e.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const i={},c=s.createContext(i);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);