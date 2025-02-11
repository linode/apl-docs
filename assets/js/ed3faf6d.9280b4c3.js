"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8200],{3609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"apps/keycloak","title":"Keycloak","description":"About","source":"@site/docs/apps/keycloak.md","sourceDirName":"apps","slug":"/apps/keycloak","permalink":"/docs/apps/keycloak","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/apps/keycloak.md","tags":[],"version":"current","frontMatter":{"slug":"keycloak","title":"Keycloak","sidebar_label":"Keycloak"},"sidebar":"mainSidebar","previous":{"title":"Jaeger","permalink":"/docs/apps/jaeger"},"next":{"title":"Knative","permalink":"/docs/apps/knative"}}');var a=n(4848),i=n(8453);const s={slug:"keycloak",title:"Keycloak",sidebar_label:"Keycloak"},r=void 0,l={},c=[{value:"About",id:"about",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"about",children:"About"}),"\n",(0,a.jsx)(t.p,{children:"The SSO login page for all platform services (like the Console) is served by Keycloak. It is used as an identity broker or provider for all integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by integrated applications."}),"\n",(0,a.jsx)(t.p,{children:"Keycloak is automatically configured with 3 roles:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"platform-admins"}),": super admin role for all platform configuration and core applications."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"team-admins"}),": team admin role to manage teams and users."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"team-members"}),": team role for team members."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Group (team) membership is reflected in the user's 'groups' claim. When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided groups and roles claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the \"Authenticate with Single Sign On\" checkbox. This then limits the application access to only allow the members of the team."}),"\n",(0,a.jsx)(t.p,{children:'When there are different requirements to use Keycloak for business applications, Keycloak\'s designated "master" and "otomi" realms may not be used, and an additional realm needs to be created. We refer to the keycloak docs for any custom configuration targeting business applications.'})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);