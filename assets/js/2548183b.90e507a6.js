"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9717],{2394:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(5893),r=t(1151);const a={slug:"create-sealed-secrets",title:"Create Sealed Secrets",sidebar_label:"Create Sealed Secrets"},c=void 0,l={id:"get-started/labs/create-sealed-secrets",title:"Create Sealed Secrets",description:"In this lab we will create sealed secrets and see how to securely sensitive information in git repository.",source:"@site/docs/get-started/labs/create-sealed-secrets.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/create-sealed-secrets",permalink:"/docs/get-started/labs/create-sealed-secrets",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/labs/create-sealed-secrets.md",tags:[],version:"current",frontMatter:{slug:"create-sealed-secrets",title:"Create Sealed Secrets",sidebar_label:"Create Sealed Secrets"},sidebar:"mainSidebar",previous:{title:"Push Images",permalink:"/docs/get-started/labs/push-images"},next:{title:"Using Argo CD",permalink:"/docs/get-started/labs/using-argo-cd"}},i={},d=[{value:"Creating a Sealed Secret",id:"creating-a-sealed-secret",level:2},{value:"Checking the GIT repository",id:"checking-the-git-repository",level:2},{value:"Checking the Kubernetes secret",id:"checking-the-kubernetes-secret",level:2}];function o(e){const s={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"In this lab we will create sealed secrets and see how to securely sensitive information in git repository."}),"\n",(0,n.jsx)(s.h2,{id:"creating-a-sealed-secret",children:"Creating a Sealed Secret"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click on the ",(0,n.jsx)(s.code,{children:"Sealed Secrets"})," in the sidebar."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click on ",(0,n.jsx)(s.code,{children:"Create SealedSecret"}),". This will take you to the page where you can create a sealed secret."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Fill in a name for your secret. In this lab we will use the name ",(0,n.jsx)(s.code,{children:"secret-credentials"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Select the secret type. In this lab we will create a secret of type ",(0,n.jsx)(s.code,{children:"opaque"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Add the secret ",(0,n.jsx)(s.code,{children:"data"}),". Add the following key-value pairs:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"password=helloworld"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"username=labs-user"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Create sealed secret",src:t(6485).Z+"",width:"2384",height:"1900"})}),"\n",(0,n.jsxs)(s.ol,{start:"6",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click on ",(0,n.jsx)(s.code,{children:"submit"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click on ",(0,n.jsx)(s.code,{children:"Deploy Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Note that the secret value will only be visible at the time of creation or once it has been successfully synchronized with the cluster."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Created sealed secret",src:t(4613).Z+"",width:"2382",height:"1894"})}),"\n",(0,n.jsx)(s.h2,{id:"checking-the-git-repository",children:"Checking the GIT repository"}),"\n",(0,n.jsxs)(s.p,{children:["Now go to Gitea and check the otomi/values repository. You will see that under ",(0,n.jsx)(s.code,{children:"values/env/teams/sealedsecrets.<team-name>.yaml"})," the secret is stored in yaml, but the values are encrypted."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Repository sealed secret",src:t(8849).Z+"",width:"1714",height:"723"})}),"\n",(0,n.jsx)(s.h2,{id:"checking-the-kubernetes-secret",children:"Checking the Kubernetes secret"}),"\n",(0,n.jsx)(s.p,{children:"The only way to see the values of the secret is to decrypt the secret. The secret values are stored as base64 encoded values. Open a Shell and run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl get secret secret-credentials -o yaml -n team-labs\n"})}),"\n",(0,n.jsx)(s.p,{children:"This wil return the secret in yaml format. The values are stored as base64 encoded values."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'apiVersion: v1\ndata:\n  password: aGVsbG93b3JsZA==\n  username: bGFicy11c2Vy\nkind: Secret\nmetadata:\n  creationTimestamp: "2024-09-12T06:11:55Z"\n  name: secret-credentials\n  namespace: team-labs\n  ownerReferences:\n  - apiVersion: bitnami.com/v1alpha1\n    controller: true\n    kind: SealedSecret\n    name: secret-credentials\n    uid: b9dc5d5c-9699-4efb-86a8-7bd1dd869318\n  resourceVersion: "357105"\n  uid: 84dd34e1-2313-482d-b7de-e5d848675fb7\ntype: kubernetes.io/opaque\n'})}),"\n",(0,n.jsxs)(s.p,{children:["If you want to decode the secret you can use ",(0,n.jsx)(s.code,{children:"base64 -- decode"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'kubectl get secret secret-credentials -n team-labs -o jsonpath="{.data.password}" | base64 --decode\nhelloworld\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},6485:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/create-sealed-secrets-0e70f5c68ac5cf07df0eaf20cd9da781.png"},4613:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/created-sealed-secrets-02f6e4bb69a26875d72787a9419b8ac7.png"},8849:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/repository-sealed-secrets-6b6ff826474e2f5c6a57cc7510aed318.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>c});var n=t(7294);const r={},a=n.createContext(r);function c(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);