"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3520],{9108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(5893),s=n(1151);const r={slug:"serverless",title:"Serverless",sidebar_label:"Serverless"},a=void 0,o={id:"use-cases/serverless",title:"Serverless",description:"Introduction",source:"@site/product/use-cases/serverless.md",sourceDirName:"use-cases",slug:"/use-cases/serverless",permalink:"/product/use-cases/serverless",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/serverless.md",tags:[],version:"current",lastUpdatedBy:"ElderMatt",lastUpdatedAt:1710142611,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{slug:"serverless",title:"Serverless",sidebar_label:"Serverless"},sidebar:"mainSidebar",previous:{title:"CI/CD",permalink:"/product/use-cases/ci-cd"},next:{title:"EULA",permalink:"/product/eula/v1"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Creating Knative services",id:"creating-knative-services",level:2},{value:"Migrating Lambda functions to Knative",id:"migrating-lambda-functions-to-knative",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["Knative is a platform that provides tools for deploying, running, and managing ",(0,i.jsx)(t.strong,{children:"serverless"})," cloud-native applications to Kubernetes. Knative brings together the scalability of Kubernetes and ease of development of serverless applications, giving you more control over the resources, and allowing you to focus on the application without worrying about the infrastructure."]}),"\n",(0,i.jsx)(t.p,{children:"Otomi includes Knative Serving as an optional tool. Otomi installs and configures the correct version of Knative based on the used Kubernetes version and integrates Knative into the Otomi ingress architecture. All you need to do after activating Knative is to deploy a Knative service."}),"\n",(0,i.jsx)(t.h2,{id:"creating-knative-services",children:"Creating Knative services"}),"\n",(0,i.jsx)(t.p,{children:"There are 3 ways to deploy Knative serverless workloads in Otomi:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a raw Knative service manifest and add it to the teams ",(0,i.jsx)(t.code,{children:"-argocd"})," repository"]}),"\n",(0,i.jsx)(t.li,{children:"Create a Otomi serverless workload"}),"\n",(0,i.jsx)(t.li,{children:"Create a Otomi workload with a custom (BYO) Helm chart"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"migrating-lambda-functions-to-knative",children:"Migrating Lambda functions to Knative"}),"\n",(0,i.jsxs)(t.p,{children:["A great way to migrate AWS Lambda functions to Kubernetes/Knative is to use ",(0,i.jsx)(t.a,{href:"https://github.com/triggermesh/knative-lambda-runtime",children:"Triggermesh KLR"}),". KLR (pronounced clear) are Tekton Tasks that can be used to run an AWS Lambda function in a Kubernetes cluster installed with Knative."]}),"\n",(0,i.jsx)(t.p,{children:"Steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Activate Knative and Argo CD in Otomi"}),"\n",(0,i.jsxs)(t.li,{children:["Create a Dockerfile, extracting the desired ",(0,i.jsx)(t.a,{href:"https://github.com/triggermesh/knative-lambda-runtime#run-in-docker",children:"runtime"})]}),"\n",(0,i.jsx)(t.li,{children:"Build and push the image (to the private repository in Harbor)"}),"\n",(0,i.jsx)(t.li,{children:"Create a Knative service using the Otomi workload feature"}),"\n",(0,i.jsx)(t.li,{children:"Expose the service publicly using the Otomi services feature"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);