"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7444],{9663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const l={slug:"tekton",title:"Tekton",sidebar_label:"Tekton"},r=void 0,o={id:"apps/tekton",title:"Tekton",description:"About",source:"@site/docs/apps/tekton.md",sourceDirName:"apps",slug:"/apps/tekton",permalink:"/docs/apps/tekton",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/apps/tekton.md",tags:[],version:"current",frontMatter:{slug:"tekton",title:"Tekton",sidebar_label:"Tekton"},sidebar:"mainSidebar",previous:{title:"Trivy Operator",permalink:"/docs/apps/trivy"},next:{title:"Velero",permalink:"/docs/apps/velero"}},a={},c=[{value:"About",id:"about",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"about",children:"About"}),"\n",(0,i.jsx)(n.p,{children:"Tekton is used for the Builds self-service feature. When a Build is created, the Tekton Pipeline and Pipelinerun resources are created automatically. There are 2 pipeline types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Docker"})," for building images based on a Dockerfile"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Buildpacks"})," for building images using buildpacks"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When Tekton is activated, 4 Tekton tasks will be added to the Team's namespace:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/tektoncd/catalog/tree/main/task/buildpacks/0.6",children:(0,i.jsx)(n.code,{children:"buildpacks"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/tektoncd/catalog/tree/main/task/git-clone/0.9",children:(0,i.jsx)(n.code,{children:"git-clone"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/tektoncd/catalog/tree/main/task/kaniko/0.6",children:(0,i.jsx)(n.code,{children:"kaniko"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/tektoncd/catalog/tree/main/task/grype/0.1",children:(0,i.jsx)(n.code,{children:"grype"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"and use them in the Build pipelines."}),"\n",(0,i.jsx)(n.p,{children:"When the manifest for the pipeline and the pipelinerun are applied, the pipelinerun will automatically run the pipeline once. Use the following command to check if the status of the pipelinerun:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"tkn pipelineruns logs  <name-of-the-pipelinerun> -n team-<team name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the Build is changed the pipelinerun will not be re-started. Use the following command to start the pipeline after a change:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"tkn pipeline start <name-of-the-pipeline>  --use-pipelinerun <name-of-the-pipelinerun>  -n team-<team name>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);