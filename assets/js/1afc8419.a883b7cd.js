"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8344],{8300:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=o(5893),t=o(1151);const s={slug:"overview",title:"SRE Overview",sidebar_label:"Overview"},r=void 0,a={id:"for-ops/sre/overview",title:"SRE Overview",description:"App Platform is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, App Platform offers all required parts in a single package. App Platform can be seen as any other Kubernetes application or add-on, with the difference that App Platform is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications.",source:"@site/docs/for-ops/sre/overview.md",sourceDirName:"for-ops/sre",slug:"/for-ops/sre/overview",permalink:"/docs/for-ops/sre/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/sre/overview.md",tags:[],version:"current",frontMatter:{slug:"overview",title:"SRE Overview",sidebar_label:"Overview"},sidebar:"mainSidebar",previous:{title:"otomi x",permalink:"/docs/for-ops/cli/x"},next:{title:"Daily Routine",permalink:"/docs/for-ops/sre/daily"}},c={},l=[{value:"Reference configuration",id:"reference-configuration",level:2},{value:"Standard",id:"standard",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Guides &amp; checklists",id:"guides--checklists",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"App Platform is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, App Platform offers all required parts in a single package. App Platform can be seen as any other Kubernetes application or add-on, with the difference that App Platform is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications."}),"\n",(0,i.jsxs)(n.p,{children:["The user controls the configuration of all objects installed by App Platform, based on the ",(0,i.jsx)(n.a,{href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml",children:"values schema"})," provided by App Platform, and the user controls the full configuration of all Kubernetes objects deployed. Lets take a closer look:"]}),"\n",(0,i.jsx)(n.h2,{id:"reference-configuration",children:"Reference configuration"}),"\n",(0,i.jsxs)(n.p,{children:["App Platform provides a reference configuration (",(0,i.jsx)(n.code,{children:"values"})," repository) that can be used as a quick-start to install and configure a complete suite of integrated open source applications, an advanced ingress architecture, multi-tenancy, developer self-service, and implemented security best-practices. The reference configuration can be modified using the App Platform Console and App Platform API, based on a pre-defined value schema. SRE can change and optimize the reference configuration when needed. There are 2 supported options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Standard, using the ",(0,i.jsx)(n.code,{children:"values-schema"})," to modify the configuration"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Advanced, customization using overrides"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's take a closer look at both options."}),"\n",(0,i.jsx)(n.h3,{id:"standard",children:"Standard"}),"\n",(0,i.jsxs)(n.p,{children:["Out-of-the-box, App Platform comes with an extensive values ",(0,i.jsx)(n.a,{href:"https://github.com/linode/apl-core/blob/main/values-changes.yaml",children:"schema"}),". Most of the standard values (platform configuration) can be modified using the values editor in App Platform Console. Changes made through the APL Console are translated into configuration code (based on the values schema). The values-schema supports the most common use-cases when working with Kubernetes."]}),"\n",(0,i.jsx)(n.h3,{id:"advanced",children:"Advanced"}),"\n",(0,i.jsx)(n.p,{children:"For advanced use-cases, configuration values of all integrated open source applications can be customized. Together with the fully integrated observability suite, SRE's can pro-actively monitor the resource usage of the integrated open source applications (like Istio and Ingress Nginx) and optimize the configuration when needed."}),"\n",(0,i.jsxs)(n.p,{children:["The values can be overridden by custom configuration values using ",(0,i.jsx)(n.code,{children:"_rawValues"}),". Custom configuration values can be all values supported by the upstream Helm chart of the integrated open source application in App Platform Core (",(0,i.jsx)(n.code,{children:"apl-core"})," repo)."]}),"\n",(0,i.jsxs)(n.p,{children:["SRE's can use App Platform Console to change configuration settings (like security policies), but can also change the values directly using the values-schema and by using overrides. In all cases, the configuration is stored in code (the ",(0,i.jsx)(n.code,{children:"values"})," repository)."]}),"\n",(0,i.jsx)(n.p,{children:"The following code shows the configuration values of the ingress-nginx chart."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"charts:\n  ingress-nginx:\n    private:\n      enabled: false\n    modsecurity:\n      enabled: true\n      owasp: true\n    _rawValues:\n      controller:\n        config:\n          error-log-level: info\n"})}),"\n",(0,i.jsx)(n.p,{children:"Line 1-7 are configuration options supported in the values-schema. Line 8-11 are used to add specific (not schema supported) configuration values using overrides (rawValues)."}),"\n",(0,i.jsx)(n.h2,{id:"guides--checklists",children:"Guides & checklists"}),"\n",(0,i.jsx)(n.p,{children:"For SRE's we have created a couple of guides and checklists:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/for-ops/sre/daily",children:"Daily routine"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/for-ops/sre/troubleshooting",children:"Troubleshooting"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/for-ops/sre/known-issues",children:"Known Issues"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var i=o(7294);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);