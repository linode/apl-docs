"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7360],{2741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=n(5893),s=n(1151);const l={slug:"create-projects",title:"Create projects",sidebar_label:"Create Projects"},i=void 0,r={id:"get-started/labs/create-projects",title:"Create projects",description:"A Project in APL is a collection of a Build, a Workload and a Service. The benefit of using Projects is that you can create a Build, a Workload and a Service in one run. Projects are ideal for developers to run multiple code branches next to each other and automatically update the deployment based on a push. In this lab we are going to create a Project and see how everything now comes together is one simple form.",source:"@site/docs/get-started/labs/create-projects.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/create-projects",permalink:"/docs/get-started/labs/create-projects",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/create-projects.md",tags:[],version:"current",frontMatter:{slug:"create-projects",title:"Create projects",sidebar_label:"Create Projects"},sidebar:"mainSidebar",previous:{title:"Configure Auto Image Updater",permalink:"/docs/get-started/labs/auto-image-update"},next:{title:"Create a Database",permalink:"/docs/get-started/labs/create-postgresql-db"}},c={},d=[{value:"Create a new Git repository",id:"create-a-new-git-repository",level:2},{value:"Create a Project",id:"create-a-project",level:2},{value:"Get the webhook URL",id:"get-the-webhook-url",level:2},{value:"Create a Webhook",id:"create-a-webhook",level:2},{value:"Trigger the build",id:"trigger-the-build",level:2},{value:"Check the status of the Workload",id:"check-the-status-of-the-workload",level:2},{value:"Check the status of the Service",id:"check-the-status-of-the-service",level:2},{value:"Change the code and push the commit",id:"change-the-code-and-push-the-commit",level:2}];function h(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A Project in APL is a collection of a Build, a Workload and a Service. The benefit of using Projects is that you can create a Build, a Workload and a Service in one run. Projects are ideal for developers to run multiple code branches next to each other and automatically update the deployment based on a push. In this lab we are going to create a Project and see how everything now comes together is one simple form."}),"\n",(0,o.jsx)(t.h2,{id:"create-a-new-git-repository",children:"Create a new Git repository"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Create a new repo called ",(0,o.jsx)(t.code,{children:"nodejs-helloworld"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Set the Default Branch to ",(0,o.jsx)(t.code,{children:"master"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Clone the Hello World Sample Application:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/linode/apl-nodejs-helloworld\ncd apl-nodejs-helloworld\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["Mirror the Hello World Sample Application to your ",(0,o.jsx)(t.code,{children:"nodejs-helloworld"})," repo:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"git push --mirror https://gitea.<your-domain>/<your-user-name>/nodejs-helloworld.git\n"})}),"\n",(0,o.jsx)(t.h2,{id:"create-a-project",children:"Create a Project"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.code,{children:"Project"})," and click ",(0,o.jsx)(t.code,{children:"Create Project"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Fill in a name for the Project. This name is used for the Build (the name of the image) and the Workload. The Service will automatically select the ClusterIP service name based on the Workload name."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Create build from source"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Next"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Choose ",(0,o.jsx)(t.code,{children:"Docker"})," and fill in the repository URL of the ",(0,o.jsx)(t.code,{children:"nodejs-helloworld"})," repository."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Enable ",(0,o.jsx)(t.code,{children:"Trigger"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select the ",(0,o.jsx)(t.code,{children:"Digest"})," strategy for the ",(0,o.jsx)(t.code,{children:"Auto image updater"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"imageRepository"})," is already filled in. Make sure the ",(0,o.jsx)(t.code,{children:"tag"})," is identical to the tag used for the Build."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Use the default Chart values."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Next"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Under ",(0,o.jsx)(t.code,{children:"Exposure"})," select ",(0,o.jsx)(t.code,{children:"External"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Deploy Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"get-the-webhook-url",children:"Get the webhook URL"}),"\n",(0,o.jsxs)(t.p,{children:["Before we can configure the webhook for the ",(0,o.jsx)(t.code,{children:"nodejs-helloworld"})," repo in Gitea, we will need the webhook URL. You can find this webhook URL for your build in the list of Builds. Add the webhook URL to your clipboard."]}),"\n",(0,o.jsx)(t.p,{children:"Also notice that the status of the Build shows an exclamation mark. This is because APL created the Pipeline, but the PipelineRun is not yet created because it was not triggered yet."}),"\n",(0,o.jsx)(t.h2,{id:"create-a-webhook",children:"Create a Webhook"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In APL Console, click on ",(0,o.jsx)(t.code,{children:"apps"})," the left menu and then open ",(0,o.jsx)(t.code,{children:"Gitea"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the top menu of Gitea, click on ",(0,o.jsx)(t.code,{children:"Explore"})," and then on the ",(0,o.jsx)(t.code,{children:"nodejs-helloworld"})," repo."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.code,{children:"Settings"})," (top right) and then to ",(0,o.jsx)(t.code,{children:"Webhooks"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Add Webhook"})," and select ",(0,o.jsx)(t.code,{children:"Gitea"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"Target URL"}),", paste the webhook URL from your clipboard."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.code,{children:"Add Webhook"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"trigger-the-build",children:"Trigger the build"}),"\n",(0,o.jsxs)(t.p,{children:["You can now trigger the Build by doing a commit in the ",(0,o.jsx)(t.code,{children:"nodejs-helloworld"})," repo, or by testing the webhook. Let's test the webhook:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In Gitea, go to the ",(0,o.jsx)(t.code,{children:"Settings"})," (top right) of the ",(0,o.jsx)(t.code,{children:"nodejs-helloworld"})," repo and then to ",(0,o.jsx)(t.code,{children:"Webhooks"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Click on the webhook we just created."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the bottom, click on ",(0,o.jsx)(t.code,{children:"Test Delivery"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"check-the-status-of-the-workload",children:"Check the status of the Workload"}),"\n",(0,o.jsxs)(t.p,{children:["Go to Workloads and click on the Argo CD ",(0,o.jsx)(t.code,{children:"application"})," link of the Workload created by the Project. What do you see? The Argo CD application is still in a ",(0,o.jsx)(t.code,{children:"Degraded"})," state because the image build has not completed yet. When the build in finished and the image can be pulled, the status of the application will automatically become ",(0,o.jsx)(t.code,{children:"Healthy"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"check-the-status-of-the-service",children:"Check the status of the Service"}),"\n",(0,o.jsxs)(t.p,{children:["When the state of the Workload becomes ",(0,o.jsx)(t.code,{children:"Healthy"}),", the URL of the Service created by the Project will show the following page:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Hello World",src:n(3145).Z+"",width:"778",height:"182"})}),"\n",(0,o.jsx)(t.h2,{id:"change-the-code-and-push-the-commit",children:"Change the code and push the commit"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go to the ",(0,o.jsx)(t.code,{children:"hello-world"})," repository."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Edit the ",(0,o.jsx)(t.code,{children:"package.json"})," and set the ",(0,o.jsx)(t.code,{children:"Version"})," to ",(0,o.jsx)(t.code,{children:"1.4.0"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Commit the changes."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Check the URL again. After a couple of minutes you will see the following page:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Hello World",src:n(6090).Z+"",width:"890",height:"252"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6090:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-2-671a268fda45f814837a1a130d96823a.png"},3145:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-ff027196740055b940f6785f98b26500.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7294);const s={},l=o.createContext(s);function i(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);