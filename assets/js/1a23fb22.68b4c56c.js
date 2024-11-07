"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4234],{5320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(5893),r=n(1151);const s={slug:"byo-wildcard-cert",title:"BYO Wild card Certificate",sidebar_label:"BYO Wild Card Cert"},a=void 0,l={id:"get-started/installation/byo-wildcard",title:"BYO Wild card Certificate",description:"When installing with DNS, there are 3 issuers you can use:",source:"@site/docs/get-started/installation/byo-wildcard.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/byo-wildcard-cert",permalink:"/docs/get-started/installation/byo-wildcard-cert",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/installation/byo-wildcard.md",tags:[],version:"current",frontMatter:{slug:"byo-wildcard-cert",title:"BYO Wild card Certificate",sidebar_label:"BYO Wild Card Cert"},sidebar:"mainSidebar",previous:{title:"Entrypoint",permalink:"/docs/get-started/installation/entrypoint"},next:{title:"Post Installation Steps",permalink:"/docs/get-started/installation/post-installation-steps"}},o={},c=[];function d(e){const t={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When installing with DNS, there are 3 ",(0,i.jsx)(t.code,{children:"issuers"})," you can use:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"custom-ca"}),"\n",(0,i.jsx)(t.li,{children:"letsencrypt"}),"\n",(0,i.jsx)(t.li,{children:"byo-wildcard-cert"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In most of the installation examples we use ",(0,i.jsx)(t.code,{children:"letsencrypt"}),". In this example we'll show how to use a Bring Your Own wildcard certificate."]}),"\n",(0,i.jsxs)(t.p,{children:["To use a ",(0,i.jsx)(t.code,{children:"byo-wildcard-cert"}),", install with the following values:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"cluster:\n  name: otomi\n  provider: custom\n  domainSuffix: try-otomi.net\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters: \n    - try-otomi.net\n  provider:\n    aws:\n      credentials:\n        secretKey: xxx\n        accessKey: xxx\n      region: eu-central-1\napps:\n  cert-manager:\n    issuer: byo-wildcard-cert\n    # Add the full chain of your wild card certificate\n    byoWildcardCert: |\n      -----BEGIN CERTIFICATE-----\n      -----END CERTIFICATE-----\n      -----BEGIN CERTIFICATE-----\n      -----END CERTIFICATE-----\n      -----BEGIN CERTIFICATE-----\n      -----END CERTIFICATE-----\n    byoWildcardCertKey: |\n      -----BEGIN PRIVATE KEY-----\n      -----END PRIVATE KEY-----\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(7294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);