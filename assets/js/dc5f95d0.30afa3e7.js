"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4079],{4798:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"for-ops/how-to/manage-age","title":"Manage Age for Development, Security, and Recovery","description":"This documentation was written for SOPS that is using Age Encryption. Please check the SOPS page for other KMS providers.","source":"@site/docs/for-ops/how-to/manage-age.md","sourceDirName":"for-ops/how-to","slug":"/for-ops/how-to/manage-age","permalink":"/docs/for-ops/how-to/manage-age","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/how-to/manage-age.md","tags":[],"version":"current","frontMatter":{"slug":"manage-age","title":"Manage Age for Development, Security, and Recovery","sidebar_label":"Manage Age"},"sidebar":"mainSidebar","previous":{"title":"Clone the Platform","permalink":"/docs/for-ops/how-to/clone-apl"},"next":{"title":"Change admin password","permalink":"/docs/for-ops/how-to/change-admin-password"}}');var o=s(4848),t=s(8453);const r={slug:"manage-age",title:"Manage Age for Development, Security, and Recovery",sidebar_label:"Manage Age"},l=void 0,c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local development setup",id:"local-development-setup",level:2},{value:"Steps",id:"steps",level:3},{value:"Age keys rotation",id:"age-keys-rotation",level:2},{value:"Steps",id:"steps-1",level:3},{value:"Age disaster recovery",id:"age-disaster-recovery",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This documentation was written for SOPS that is using Age Encryption. Please check the SOPS page for other ",(0,o.jsx)(n.a,{href:"/docs/get-started/installation/sops#use-sops-with-an-external-key-management-service-kms",children:"KMS"})," providers."]})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Version >= ",(0,o.jsx)(n.code,{children:"v3.1"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"local-development-setup",children:"Local development setup"}),"\n",(0,o.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create a values folder:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir -p values-folder ~/workspace\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Clone the values repo from Gitea:"}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"In case your TLS certificate is not trusted, set GIT_SSL_NO_VERIFY to clone the git repository:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export GIT_SSL_NO_VERIFY=true\n"})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone gitea.<cluster.domainSuffix>/otomi/values.git ~/workspace/values-folder\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Copy SOPS_AGE_KEY secret:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy the ",(0,o.jsx)(n.code,{children:"SOPS_AGE_KEY"})," secret, which is the private key for Age, from the cluster. It is located in the ",(0,o.jsx)(n.code,{children:"otomi-pipelines"})," namespace in the ",(0,o.jsx)(n.code,{children:"otomi-sops-secrets"}),", or in the ",(0,o.jsx)(n.code,{children:"otomi"})," namespace in the ",(0,o.jsx)(n.code,{children:"otomi-api"})," secret."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:".secrets"})," file in the values-folder at the root level and insert the ",(0,o.jsx)(n.code,{children:"SOPS_AGE_KEY"})," into it."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"Don't forget to use = instead of :"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"SOPS_AGE_KEY=AGE-SECRET-KEY-1XXX\n"})})]}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Export ENV_DIR:"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Export ",(0,o.jsx)(n.code,{children:"ENV_DIR"})," in the core repository to use ",(0,o.jsx)(n.code,{children:"otomi-cli"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export ENV_DIR=~/workspace/values-folder\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"otomi-cli"}),":"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The local development environment is now ready to use ",(0,o.jsx)(n.a,{href:"/docs/for-ops/cli/installation",children:"otomi-cli"})," commands."]}),"\n",(0,o.jsx)(n.h2,{id:"age-keys-rotation",children:"Age keys rotation"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Please follow the local development setup steps above and be prepared to use ",(0,o.jsx)(n.code,{children:"otomi-cli"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"steps-1",children:"Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Decrypt files with the old key and credentials:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -it -v $ENV_DIR:/home/app/stack/env linode/apl-core binzx/otomi decrypt\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The decrypted files have the ",(0,o.jsx)(n.code,{children:".dec"})," extension."]})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Change the following files"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"env/settings.yaml"})," file update the ",(0,o.jsx)(n.code,{children:"kms.sops.age.publicKey"})," property."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"env/secrets.settings.yaml.dec"})," file update the ",(0,o.jsx)(n.code,{children:"kms.sops.age.privateKey"})," property."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:".secrets"})," file change the ",(0,o.jsx)(n.code,{children:"SOPS_AGE_KEY"})," credential."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Change the modification date of each ",(0,o.jsx)(n.code,{children:".dec"})," file"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This way we enforce encryption of all secret files."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd ~/workspace/values-folder && find . -name '*.dec' -type f  -exec touch {} \\;\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Encrypt the ",(0,o.jsx)(n.code,{children:"*.dec"})," files:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -it -v $ENV_DIR:/home/app/stack/env linode/apl-core binzx/otomi encrypt\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Update the secrets in the cluster."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Update the following secrets in the cluster for ",(0,o.jsx)(n.code,{children:"SOPS_AGE_KEY"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Update the ",(0,o.jsx)(n.code,{children:"otomi-sops-secrets"})," secret in the ",(0,o.jsx)(n.code,{children:"otomi-pipelines"})," namespace."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Update the ",(0,o.jsx)(n.code,{children:"otomi-api"})," secret in the ",(0,o.jsx)(n.code,{children:"otomi"})," namespace."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["These secrets and related applications are managed by Argo CD, so don\u2019t forget to update the secret values via Argo CD.\nIt\u2019s also possible to use a tool such as Kubernetes Lens to update Argo CD applications.\nAlternatively, ",(0,o.jsx)(n.code,{children:"otomi apply"})," can be used to update the secrets in the cluster before the next ",(0,o.jsx)(n.code,{children:"git push"}),"."]})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["Push the values to the ",(0,o.jsx)(n.code,{children:"otomi-values"})," repo in Gitea:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd ~/workspace/values-folder && git push\n"})}),"\n",(0,o.jsx)(n.h2,{id:"age-disaster-recovery",children:"Age disaster recovery"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For disaster recovery, users need the ",(0,o.jsx)(n.code,{children:"SOPS_AGE_KEY"}),", which is the private key for Age.\nPlease make sure to store the ",(0,o.jsx)(n.code,{children:"SOPS_AGE_KEY"})," in a secure place.\nThis key can be obtained from the ",(0,o.jsx)(n.code,{children:"otomi-sops-secrets"})," secret in the ",(0,o.jsx)(n.code,{children:"otomi-pipelines"})," namespace or from the ",(0,o.jsx)(n.code,{children:"otomi-api"})," secret in the ",(0,o.jsx)(n.code,{children:"otomi"})," namespace."]})}),"\n",(0,o.jsxs)(n.p,{children:["To configure Age public and private keys, add or update the following ",(0,o.jsx)(n.code,{children:"kms"})," section in the values.yaml file when installing the App Platform."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"kms:\n  sops:\n    provider: age\n    age:\n      publicKey: <age-public-key>\n      privateKey: <age-private-key>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Make sure to replace ",(0,o.jsx)(n.code,{children:"age-public-key"})," and ",(0,o.jsx)(n.code,{children:"age-private-key"})," values with your actual (existing) Age public and private keys."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);