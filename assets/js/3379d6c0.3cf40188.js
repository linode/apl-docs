"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7170],{6317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"for-ops/console/settings/dns","title":"Platform settings","description":"The DNS section in the Settings will NOT be visible when the installation is done by Akamai Connected Cloud. In this case the DNS configuration is managed by Akamai.","source":"@site/docs/for-ops/console/settings/dns.md","sourceDirName":"for-ops/console/settings","slug":"/for-ops/console/settings/dns","permalink":"/docs/for-ops/console/settings/dns","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/console/settings/dns.md","tags":[],"version":"current","frontMatter":{"slug":"dns","title":"Platform settings","sidebar_label":"DNS"},"sidebar":"mainSidebar","previous":{"title":"Alerts","permalink":"/docs/for-ops/console/settings/alerts"},"next":{"title":"Ingress","permalink":"/docs/for-ops/console/settings/ingress"}}');var t=s(4848),o=s(8453);const l={slug:"dns",title:"Platform settings",sidebar_label:"DNS"},r=void 0,d={},a=[{value:"DNS",id:"dns",level:2},{value:"Zones",id:"zones",level:3},{value:"Domain filters",id:"domain-filters",level:3},{value:"Zone ID filters",id:"zone-id-filters",level:3},{value:"Provider",id:"provider",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The DNS section in the Settings will NOT be visible when the installation is done by Akamai Connected Cloud. In this case the DNS configuration is managed by Akamai."})}),"\n",(0,t.jsx)(n.h2,{id:"dns",children:"DNS"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["DNS settings will only be active when ",(0,t.jsx)(n.code,{children:"otomi.hasExternalDNS=true"})," flag is set during installation. This can also be set after installation in Settings/General."]})}),"\n",(0,t.jsx)(n.h3,{id:"zones",children:"Zones"}),"\n",(0,t.jsx)(n.p,{children:"Add additional DNS zones Extra that the cluster can administer. Team services can use these zones to publish their URL's on."}),"\n",(0,t.jsx)(n.h3,{id:"domain-filters",children:"Domain filters"}),"\n",(0,t.jsx)(n.p,{children:"Limit possible target Zones by suffix."}),"\n",(0,t.jsx)(n.h3,{id:"zone-id-filters",children:"Zone ID filters"}),"\n",(0,t.jsx)(n.p,{children:"Limit the possible target zones by zone id."}),"\n",(0,t.jsx)(n.h3,{id:"provider",children:"Provider"}),"\n",(0,t.jsx)(n.p,{children:"The DNS provider used to manage the domain(s)."}),"\n",(0,t.jsx)(n.p,{children:"The following DNS providers are supported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AWS Route53"}),"\n",(0,t.jsx)(n.li,{children:"Azure (Public zones)"}),"\n",(0,t.jsx)(n.li,{children:"Azure Private DNS"}),"\n",(0,t.jsx)(n.li,{children:"CloudFlare"}),"\n",(0,t.jsx)(n.li,{children:"Digital Ocean"}),"\n",(0,t.jsx)(n.li,{children:"Google"}),"\n",(0,t.jsx)(n.li,{children:"Linode Domains"}),"\n",(0,t.jsx)(n.li,{children:"Other"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"Other"})," is selected, the required values can be added to support any other DNS provider (supported by ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dns/",children:"ExternalDNS"}),")."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(6540);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);