"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5920],{3576:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(5893),s=i(1151);const r={slug:"ingress-nginx",title:"NGINX Ingress",sidebar_label:"Ingress-nginx"},o=void 0,a={id:"apps/ingress-nginx",title:"NGINX Ingress",description:"About",source:"@site/docs/apps/ingress-nginx.md",sourceDirName:"apps",slug:"/apps/ingress-nginx",permalink:"/docs/apps/ingress-nginx",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/apps/ingress-nginx.md",tags:[],version:"current",frontMatter:{slug:"ingress-nginx",title:"NGINX Ingress",sidebar_label:"Ingress-nginx"},sidebar:"mainSidebar",previous:{title:"Harbor",permalink:"/docs/apps/harbor"},next:{title:"Istio",permalink:"/docs/apps/istio"}},c={},l=[{value:"About",id:"about",level:2},{value:"Using the OWASP rule set",id:"using-the-owasp-rule-set",level:3},{value:"Using ModSecurity",id:"using-modsecurity",level:3},{value:"Configure tracing",id:"configure-tracing",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"about",children:"About"}),"\n",(0,t.jsx)(n.p,{children:"Ingress NGINX is the default ingress controller in APL and part of the core setup (this means it is not possible use another controller within APL)."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-owasp-rule-set",children:"Using the OWASP rule set"}),"\n",(0,t.jsx)(n.p,{children:"The OWASP ModSecurity Core Rule Set (CRS) is a set of generic attack detection rules for use with ModSecurity or compatible web application firewalls. The CRS aims to protect web applications from a wide range of attacks, including the OWASP Top Ten, with a minimum of false alerts. The CRS provides protection against many common attack categories, including SQL Injection, Cross Site Scripting, Local File Inclusion, etc."}),"\n",(0,t.jsxs)(n.p,{children:["The OWASP rule set can only be enabled when ModSecurity is enabled. Read more about the OWASP rule set ",(0,t.jsx)(n.a,{href:"https://owasp.org/www-project-modsecurity-core-rule-set/",children:"here"})]}),"\n",(0,t.jsx)(n.h3,{id:"using-modsecurity",children:"Using ModSecurity"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ModSecurity is not enabled in Nginx. To turn on ModSecurity, go to the values tab of the app. Under ",(0,t.jsx)(n.code,{children:"Mod security"})," click ",(0,t.jsx)(n.code,{children:"enabled"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"When enabled, ModSecurity by default is configured in blocking mode. This can have a negative impact on your application. First turn blocking off and adjust the applications accordingly. Teams can see all ModSecurity warnings using Grafana. A shortcut for this dashboard is allready preconfigured."}),"\n",(0,t.jsx)(n.p,{children:"The default modesecurity snipped added to the Nginx configuration contains the following defaults:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"modsecurity-snippet: |\n    SecAuditEngine RelevantOnly\n    SecAuditLogParts ABDEFHIJZ\n    SecAuditLogFormat JSON\n    SecAuditLogType Serial\n    SecAuditLog /dev/stdout\n    SecRequestBodyLimit 1073741824\n    SecRuleRemoveById 920350\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To change the modsecurity configuration, use ",(0,t.jsx)(n.code,{children:"Raw values"}),". ",(0,t.jsx)(n.a,{href:"https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-(v3.x)#Configuration_Directives",children:"Here"})," is an overview of all the configuration directives."]}),"\n",(0,t.jsx)(n.h3,{id:"configure-tracing",children:"Configure tracing"}),"\n",(0,t.jsx)(n.p,{children:"To enable tracing set the following values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'tracing:\n    enabled: true\n    samplingRatio: "0.10"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The sampling rate should be in the range of 0.0 to 100.0 with a precision of 0.01. For example, to trace 10 requests out of every 10000, use 0.10 as the value here."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);