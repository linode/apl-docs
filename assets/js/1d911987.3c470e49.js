"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[912],{4080:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(5893),i=n(1151);const o={slug:"ingress",title:"Platform settings",sidebar_label:"Ingress"},r=void 0,l={id:"for-ops/console/settings/ingress",title:"Platform settings",description:"The Ingress section in the Settings will not be visible when the installation is done by Akamai Connected Cloud. In this case you will not be able to create multiple ingress classes.",source:"@site/docs/for-ops/console/settings/ingress.md",sourceDirName:"for-ops/console/settings",slug:"/for-ops/console/settings/ingress",permalink:"/docs/for-ops/console/settings/ingress",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/console/settings/ingress.md",tags:[],version:"current",frontMatter:{slug:"ingress",title:"Platform settings",sidebar_label:"Ingress"},sidebar:"mainSidebar",previous:{title:"DNS",permalink:"/docs/for-ops/console/settings/dns"},next:{title:"OIDC",permalink:"/docs/for-ops/console/settings/oidc"}},a={},c=[{value:"Ingress",id:"ingress",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"The Ingress section in the Settings will not be visible when the installation is done by Akamai Connected Cloud. In this case you will not be able to create multiple ingress classes."})}),"\n",(0,t.jsx)(s.h2,{id:"ingress",children:"Ingress"}),"\n",(0,t.jsx)(s.p,{children:"By default (after installation), one ingress controller (ingress-nginx-platform) is deployed and is used to publicly expose both platform and user created services. In the settings for ingress, an admin can:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Configure the platform ingress class to be private (by adding the required ",(0,t.jsx)(s.code,{children:"annotations"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Add additional ingress classes to expose user created services."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"By changing the platform ingress class from public to private, all platform services (like the Console, the Keycloak instance and all other platform end-points) will only be accessible from the private network."}),"\n",(0,t.jsx)(s.p,{children:"By adding additional ingress classes, each class will get a dedicated ingress controller and a dedicated cloud load balancer. This allows grouping of services and exposing them to differend networks."}),"\n",(0,t.jsxs)(s.p,{children:["Read more about configuring ingress classes ",(0,t.jsx)(s.a,{href:"/docs/for-ops/how-to/ingress-classes",children:"here"}),"."]})]})}function g(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var t=n(7294);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);