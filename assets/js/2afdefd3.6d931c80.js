"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1717],{8258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(5893),o=n(1151);const r={slug:"kms",title:"Use KMS to manage keys for encryption",sidebar_label:"KMS"},i=void 0,a={id:"get-started/installation/kms",title:"Use KMS to manage keys for encryption",description:"If you would like the secrets in the values repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by sops, the tool used for encryption.",source:"@site/docs/get-started/installation/kms.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/kms",permalink:"/docs/get-started/installation/kms",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/kms.md",tags:[],version:"current",frontMatter:{slug:"kms",title:"Use KMS to manage keys for encryption",sidebar_label:"KMS"},sidebar:"mainSidebar",previous:{title:"OIDC",permalink:"/docs/get-started/installation/oidc"},next:{title:"EntryPoint",permalink:"/docs/get-started/installation/entrypoint"}},l={},c=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If you would like the secrets in the ",(0,s.jsx)(t.code,{children:"values"})," repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/sops",children:"sops"}),", the tool used for encryption."]}),"\n",(0,s.jsx)(t.p,{children:"Find quickstart documentation below on how to setup KMS access per supported provider:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://aws.amazon.com/kms/getting-started/",children:"AWS KMS"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/services/key-vault/#getting-started",children:"Azure Vault"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://cloud.google.com/kms/docs/quickstart",children:"Google KMS"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps."}),"\n",(0,s.jsx)(t.p,{children:"To install Otomi with SOPS/KMS, use the following values:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"kms:\n  sops:\n    provider: \"\" # provider can be one of aws|azure|google|vault\n#     aws:\n#       keys: ''\n#       accessKey: ''\n#       secretKey: ''\n#       region: ''\n#     azure:\n#       keys: ''\n#       tenantID: ''\n#       clientID: ''\n#       clientSecret: ''\n#     google:\n#       keys: ''\n#       accountJson: ''\n#       project: ''\n#     vault:\n#       token: ''\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);