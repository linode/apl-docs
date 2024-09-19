"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2477],{9765:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var s=n(5893),l=n(1151);const t={slug:"build-images",title:"Build images from application source",sidebar_label:"Build Images"},d=void 0,r={id:"get-started/labs/build-images",title:"Build images from application source",description:"Harbor needs to be activated for this lab.",source:"@site/docs/get-started/labs/build-images.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/build-images",permalink:"/docs/get-started/labs/build-images",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/labs/build-images.md",tags:[],version:"current",frontMatter:{slug:"build-images",title:"Build images from application source",sidebar_label:"Build Images"},sidebar:"mainSidebar",previous:{title:"Create GIT repos",permalink:"/docs/get-started/labs/create-repos"},next:{title:"Trigger Builds",permalink:"/docs/get-started/labs/trigger-builds"}},a={},o=[{value:"Build the blue image",id:"build-the-blue-image",level:2},{value:"Re-run the build (optional)",id:"re-run-the-build-optional",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Harbor needs to be activated for this lab."})}),"\n",(0,s.jsxs)(i.p,{children:["When your team is using Harbor for private image registries, you can build images from source using pre-configured Tekton pipelines using the ",(0,s.jsx)(i.a,{href:"https://buildpacks.io/docs/buildpack-author-guide/package-a-buildpack/",children:"paketo"})," (used by Buildpacks mode) task or the ",(0,s.jsx)(i.a,{href:"https://github.com/GoogleContainerTools/kaniko",children:"Kaniko"})," task (used by the Docker mode) to build images from application source."]}),"\n",(0,s.jsx)(i.h2,{id:"build-the-blue-image",children:"Build the blue image"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["In the left menu, click on ",(0,s.jsx)(i.code,{children:"Builds"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click on ",(0,s.jsx)(i.code,{children:"Create Build"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Fill in the name ",(0,s.jsx)(i.code,{children:"blue"})," for your build and a tag (default tag is latest)."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Choose ",(0,s.jsx)(i.code,{children:"Docker"})," and fill in the repo URL for the ",(0,s.jsx)(i.code,{children:"blue"})," repo created in the previous lab."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.code,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.code,{children:"Deploy changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["APL will now create a Tekton Pipeline and PipelineRun resource to build the image. This will take around 15-20 seconds. Then the PipelineRun will start building the image. During this time the status will show ",(0,s.jsx)(i.code,{children:"in progress"}),":"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"build status",src:n(2073).Z+"",width:"2396",height:"1106"})}),"\n",(0,s.jsxs)(i.p,{children:["When the build is finished, the status will show ",(0,s.jsx)(i.code,{children:"healthy"}),":"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"build status",src:n(2105).Z+"",width:"2348",height:"1112"})}),"\n",(0,s.jsxs)(i.p,{children:["To see the full PipelineRun of the build, go to the list of Builds and click on ",(0,s.jsx)(i.code,{children:"PipelineRun"})," of the ",(0,s.jsx)(i.code,{children:"blue"})," build. This will open the Tekton Dashboard and show the status of the PipelineRun of the build:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"build status",src:n(7935).Z+"",width:"3114",height:"1536"})}),"\n",(0,s.jsx)(i.p,{children:"When the build is ready you can see the image in Harbor:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Open Harbor."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Click on the project of your team. Here you will see all the registries of the team, including the registry of the new build image."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"build status",src:n(8280).Z+"",width:"2904",height:"1026"})}),"\n",(0,s.jsx)(i.h2,{id:"re-run-the-build-optional",children:"Re-run the build (optional)"}),"\n",(0,s.jsxs)(i.p,{children:["For this step you need to have the Tekton cli installed. If you don't have the Tekton cli installed, you can install it from this page: ",(0,s.jsx)(i.a,{href:"https://tekton.dev/docs/cli/",children:"https://tekton.dev/docs/cli/"})]}),"\n",(0,s.jsx)(i.p,{children:"To run the build again using APL Console, follow these steps:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Change the tag of the build for example to ",(0,s.jsx)(i.code,{children:"v1.0.0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.code,{children:"Submit"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.code,{children:"Deploy changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"To re-build the image using the same tag, restart the build pipeline using the Tekton cli in the Shell:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Start a shell in APL Console"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Get the name of the pipeline"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"kubectl get pipelines\nNAME                         AGE\ndocker-build-blue            41h\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsx)(i.li,{children:"Get the name of the pipelinerun:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"kubectl get pipelineruns\nNAME                       SUCCEEDED   REASON      STARTTIME   COMPLETIONTIME\ndocker-build-blue-latest   True        Succeeded   41h         41h\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsx)(i.li,{children:"Start the pipeline using the pipelinerun:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"tkn pipeline start docker-build-blue --use-pipelinerun docker-build-blue-latest\nPipelineRun started: docker-build-blue-latest-j5mmt\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"5",children:["\n",(0,s.jsx)(i.li,{children:"In order to track the PipelineRun progress run:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"tkn pipelinerun logs docker-build-blue-latest-j5mmt -f\n"})}),"\n",(0,s.jsxs)(i.p,{children:["But it's easier to just open the Tekton dashboard and Click on ",(0,s.jsx)(i.code,{children:"PipelineRuns"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2105:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/build-status-1-a8942e71700cd65f2b669c25b2681894.png"},7935:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/build-status-2-97c38bcf38a5b5a4b435bcce7f2344d3.png"},8280:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/build-status-3-2c2ff329951664d48d94f6b767e52c2d.png"},2073:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/build-status-7da8376994e53ec9a83b1e51c3ed57cf.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>d});var s=n(7294);const l={},t=s.createContext(l);function d(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);