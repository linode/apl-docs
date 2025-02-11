"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5996],{4572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"get-started/installation/oidc","title":"OIDC","description":"Use Azure Entra ID","source":"@site/docs/get-started/installation/oidc.md","sourceDirName":"get-started/installation","slug":"/get-started/installation/oidc","permalink":"/docs/get-started/installation/oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/get-started/installation/oidc.md","tags":[],"version":"current","frontMatter":{"slug":"oidc","title":"OIDC","sidebar_label":"OIDC"},"sidebar":"mainSidebar","previous":{"title":"DNS","permalink":"/docs/get-started/installation/dns"},"next":{"title":"SOPS","permalink":"/docs/get-started/installation/sops"}}');var s=n(4848),r=n(8453);const d={slug:"oidc",title:"OIDC",sidebar_label:"OIDC"},l=void 0,a={},o=[{value:"Use Azure Entra ID",id:"use-azure-entra-id",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"use-azure-entra-id",children:"Use Azure Entra ID"}),"\n",(0,s.jsx)(t.p,{children:"The authentication of brokered identities through Azure Entra ID (formerly Azure Active Directory) requires a service principal with certain API permissions. An app registration needs to be created with the following API permissions:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"API / Permission name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Microsoft Graph / email"}),(0,s.jsx)(t.td,{children:"Delegated"}),(0,s.jsx)(t.td,{children:"View users' email address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Microsoft Graph / openid"}),(0,s.jsx)(t.td,{children:"Delegated"}),(0,s.jsx)(t.td,{children:"Sign users in"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Microsoft Graph / profile"}),(0,s.jsx)(t.td,{children:"Delegated"}),(0,s.jsx)(t.td,{children:"View users' basic profile"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Microsoft Graph / User.Read"}),(0,s.jsx)(t.td,{children:"Delegated"}),(0,s.jsx)(t.td,{children:"Sign in and read user profile"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"And the following token configurations:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Claim"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Token type"}),(0,s.jsx)(t.th,{children:"Optional settings"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"family_name"}),(0,s.jsx)(t.td,{children:"Provides the last name, surename, or family name"}),(0,s.jsx)(t.td,{children:"ID"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"given_name"}),(0,s.jsx)(t.td,{children:'Provides the first or "give" name of the user'}),(0,s.jsx)(t.td,{children:"ID"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"groups"}),(0,s.jsx)(t.td,{children:"Optional formatting for group claims"}),(0,s.jsx)(t.td,{children:"ID, Access, SAML"}),(0,s.jsx)(t.td,{children:"Default"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"upn"}),(0,s.jsx)(t.td,{children:"An identifier for the user that can be used ..."}),(0,s.jsx)(t.td,{children:"ID"}),(0,s.jsx)(t.td,{children:"Default"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Note that the group type should be set to 'security groups'."}),"\n",(0,s.jsx)(t.p,{children:'At the \'Authentication\' tab you should be able to set the following callback URL\xa7s and enable that both "Access tokens" and "ID tokens" are issued and public client flows are allowed:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"https://keycloak.<dns-zone-name>/realms/master/broker/otomi-idp/endpoint"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"https://keycloak.<dns-zone-name>"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To use Azure Entra ID as an IdP instead of (default) using Keycloak as an IdP, use the following values:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'oidc:\n  clientID: ""\n  clientSecret: ""\n  issuer: ""\n  # IDP group id used to identify global admin\n  adminGroupID: ""\n  # IDP group id used to identify team admin\n  teamAdminGroupID: ""\n'})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"otomi-idp"})," is the default KeyCloak alias (shown as login title). To use another alias, add the following to the chart values:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apps:\n  keycloak:\n    idp:\n      alias: <your-alias>\n"})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var i=n(6540);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);