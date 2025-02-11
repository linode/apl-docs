"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3870],{3272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"apps/certmanager","title":"CertManager","description":"About","source":"@site/docs/apps/certmanager.md","sourceDirName":"apps","slug":"/apps/certmanager","permalink":"/docs/apps/certmanager","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/apps/certmanager.md","tags":[],"version":"current","frontMatter":{"slug":"certmanager","title":"CertManager","sidebar_label":"Cert-Manager"},"sidebar":"mainSidebar","previous":{"title":"Argo CD","permalink":"/docs/apps/argocd"},"next":{"title":"Cloudnative Postgresql","permalink":"/docs/apps/cloudnativepg"}}');var a=n(4848),o=n(8453);const i={slug:"certmanager",title:"CertManager",sidebar_label:"Cert-Manager"},s=void 0,c={},d=[{value:"About",id:"about",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"about",children:"About"}),"\n",(0,a.jsx)(t.p,{children:"Cert-Manager is used to automatically create and rotate wildcard TLS certificates for service endpoints. You may bring your own CA, or otherwise one is created for you. If you bring your own trusted wildcard certificate, then cert-manager will not manage this certificate."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The wildcard certificate must be valid for the following domain ",(0,a.jsx)(t.code,{children:"*.<cluster.domainSuffix>"}),", where the value of ",(0,a.jsx)(t.code,{children:"<cluster.domainSuffix>"})," comes from the cluster.yaml file."]})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Setting Cert-Manager to use Letsencrypt requires DNS availability of the requesting domains, and forces Otomi to install ",(0,a.jsx)(t.a,{href:"/docs/apps/external-dns",children:"ExternalDNS"}),". Because a lot of DNS settings are used by other contexts, all DNS configuration can be found ",(0,a.jsx)(t.a,{href:"/docs/for-ops/console/settings/dns",children:"here"}),".\n:::                                                                                                                                                                                                                                                      |"]})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(6540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);