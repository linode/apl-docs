"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={slug:"overview",title:"SRE Overview",sidebar_label:"Overview"},i=void 0,s={unversionedId:"for-ops/sre/overview",id:"for-ops/sre/overview",title:"SRE Overview",description:"Otomi is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, Otomi offers all required parts in a single package. Otomi can be seen as any other Kubernetes application or add-on, with the difference that Otomi is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications.",source:"@site/docs/for-ops/sre/overview.md",sourceDirName:"for-ops/sre",slug:"/for-ops/sre/overview",permalink:"/docs/for-ops/sre/overview",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/sre/overview.md",tags:[],version:"current",frontMatter:{slug:"overview",title:"SRE Overview",sidebar_label:"Overview"},sidebar:"mainSidebar",previous:{title:"otomi x",permalink:"/docs/for-ops/cli/x"},next:{title:"Daily Routine",permalink:"/docs/for-ops/sre/daily"}},l={},c=[{value:"Reference configuration",id:"reference-configuration",level:2},{value:"Standard",id:"standard",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Guides &amp; checklists",id:"guides--checklists",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otomi is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, Otomi offers all required parts in a single package. Otomi can be seen as any other Kubernetes application or add-on, with the difference that Otomi is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications."),(0,r.kt)("p",null,"The user controls the configuration of all objects installed by Otomi, based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml"},"values schema")," provided by Otomi, and the user controls the full configuration of all Kubernetes objects deployed. Lets take a closer look:"),(0,r.kt)("h2",{id:"reference-configuration"},"Reference configuration"),(0,r.kt)("p",null,"Otomi provides a reference configuration (Otomi Values) that can be used as a quick-start to install and configure a complete suite of integrated open source applications, an advanced ingress architecture, multi-tenancy, developer self-service, and implemented security best-practices. The reference configuration can be modified using the Otomi Console and Otomi API, based on a pre-defined value schema. SRE can change and optimize the reference configuration when needed. There are 2 supported options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard, using the Otomi values schema to modify the configuration"),(0,r.kt)("li",{parentName:"ul"},"Advanced, customization using overrides")),(0,r.kt)("p",null,"Let's take a closer look at both options."),(0,r.kt)("h3",{id:"standard"},"Standard"),(0,r.kt)("p",null,"Out-of-the-box, Otomi comes with an extensive values schema (see here). Most of the standard values (platform configuration) can be modified using Otomi Console. Changes made through the console are translated into configuration code (based on the values schema). Schema-supported values that can not be changed using the Otomi Console, can be modified in the Otomi Values repository (default Gitea is installed, but an external repository like Github is also supported). Otomi supports Visual Studio Code integration for autocompletion based on the Otomi schema. The Otomi values schema supports the most common use-cases when working with Kubernetes."),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"For advanced use-cases, configuration values of all integrated open source applications can be customized. Together with the fully integrated observability suite, SRE can pro-actively monitor the resource usage of the integrated open source applications (like Istio and Ingress NGINX) and optimize the configuration when needed."),(0,r.kt)("p",null,"The Otomi values schema, in this case, can be overridden by custom configuration values. Custom configuration values can be all values supported by the charts of the integrated open source applications in Otomi Core."),(0,r.kt)("p",null,"SRE can use Otomi Console to change configuration settings (like security policies), but can also change the Otomi Values directly using the Otomi values schema and by using overrides. In all cases, the configuration is stored in code (the otomi-values repository)."),(0,r.kt)("p",null,"The following code shows the configuration values of the ingress-nginx chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"charts:\n  ingress-nginx:\n    private:\n      enabled: false\n    modsecurity:\n      enabled: true\n      owasp: true\n    _rawValues:\n      controller:\n        config:\n          error-log-level: info\n")),(0,r.kt)("p",null,"Line 1-7 are configuration options supported in the Otomi values schema. Line 8-11 are used to add specific (not schema supported) configuration values using overrides (rawValues)."),(0,r.kt)("h2",{id:"guides--checklists"},"Guides & checklists"),(0,r.kt)("p",null,"For SRE's we have created a couple of guides and checklists:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"daily"},"Daily routine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"troubleshooting"},"Troubleshooting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"upgrades"},"Upgrading Otomi"))))}d.isMDXComponent=!0}}]);