"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7578],{3498:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(5893),l=s(1151);const o={slug:"clone-apl",title:"Clone APL Instance",sidebar_label:"Clone APL"},i=void 0,a={id:"for-ops/how-to/clone-apl",title:"Clone APL Instance",description:"It may happen that you need to move APL to another Kubernetes cluster. Because APL is a GitOps driven platfrom, you can export the existing setup that can then be used to install a new APL instance.",source:"@site/docs/for-ops/how-to/clone-apl.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/clone-apl",permalink:"/docs/for-ops/how-to/clone-apl",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/how-to/clone-apl.md",tags:[],version:"current",frontMatter:{slug:"clone-apl",title:"Clone APL Instance",sidebar_label:"Clone APL"},sidebar:"mainSidebar",previous:{title:"Use APL only",permalink:"/docs/for-ops/how-to/core-only"},next:{title:"Backups",permalink:"/docs/for-ops/how-to/backups"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Download values file",id:"download-values-file",level:3},{value:"Use the values to install a new APL instance",id:"use-the-values-to-install-a-new-apl-instance",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"It may happen that you need to move APL to another Kubernetes cluster. Because APL is a GitOps driven platfrom, you can export the existing setup that can then be used to install a new APL instance."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This procedure does not cover cloning the persistent volumes from your old cluster."})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["APL version >= ",(0,t.jsx)(n.code,{children:"v2.6"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"download-values-file",children:"Download values file"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sign in as an admin."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.code,{children:"platform"})," view in the top bar."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"Maintenance"})," page in the left menu bar."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.code,{children:"Download APL values"})," link."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The values should be in your ",(0,t.jsx)(n.code,{children:"Downloads"})," folder."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"It is advised to keep this file save as it contains passwords and access credentials."})}),"\n",(0,t.jsx)(n.h3,{id:"use-the-values-to-install-a-new-apl-instance",children:"Use the values to install a new APL instance"}),"\n",(0,t.jsxs)(n.p,{children:["Depending on your use case, you may need to change some settings from the ",(0,t.jsx)(n.code,{children:"values.yaml"})," file before using it to install a new APL instance. The most common use cases:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change the ",(0,t.jsx)(n.code,{children:"domainSuffix"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Change the team service URLs."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Change the access credentials to cloud resources."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once the ",(0,t.jsx)(n.code,{children:"values.yaml"})," file is ready you can use Helm to install APL on to a new Kubernetes cluster:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install -f values.yaml apl apl/apl\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const l={},o=t.createContext(l);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);