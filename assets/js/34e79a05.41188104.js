"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3193],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var o=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return i?o.createElement(f,r(r({ref:t},c),{},{components:i})):o.createElement(f,r({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<n;p++)r[p]=i[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6363:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=i(7462),a=(i(7294),i(3905));const n={slug:"apps/gatekeeper",title:"Working with Gatekeeper",sidebar_label:"Gatekeeper"},r=void 0,s={unversionedId:"app-gatekeeper",id:"app-gatekeeper",title:"Working with Gatekeeper",description:"Introduction",source:"@site/docs/app-gatekeeper.md",sourceDirName:".",slug:"/apps/gatekeeper",permalink:"/docs/apps/gatekeeper",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/app-gatekeeper.md",tags:[],version:"current",frontMatter:{slug:"apps/gatekeeper",title:"Working with Gatekeeper",sidebar_label:"Gatekeeper"},sidebar:"mainSidebar",previous:{title:"ExternalDNS",permalink:"/docs/apps/external-dns"},next:{title:"Gitea",permalink:"/docs/apps/gitea"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Security in-depth",id:"security-in-depth",level:3},{value:"Statical analysis",id:"statical-analysis",level:3},{value:"Runtime protection",id:"runtime-protection",level:3},{value:"Gatekeeper",id:"gatekeeper",level:2},{value:"Switching modes",id:"switching-modes",level:3},{value:"Using annotations to bypass policy checks",id:"using-annotations-to-bypass-policy-checks",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Otomi offers Kubernetes security best practices through security constraints defined as OPA policies and enforced by Gatekeeper."),(0,a.kt)("h3",{id:"security-in-depth"},"Security in-depth"),(0,a.kt)("p",null,"OPA policies are a replacement for the native PodSecurityPolicies and all defined policies are modeled after the most common psp setups. The Otomi values repository holds a ",(0,a.kt)("inlineCode",{parentName:"p"},"policies.yaml")," file with sane default presets. The full set of all policies can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/tree/main/policies"},"here"),". Please see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library"},"OPA Gatekeeper policy library")," as it is the source for the policy baseline here. We made a selection of usable policies for Otomi and adapted them to be used by Conftest as well for static analysis of manifests generated by Otomi. YAML Resources are verified against defined .rego policy rules, using the defined preset parameters as their constraint value."),(0,a.kt)("h3",{id:"statical-analysis"},"Statical analysis"),(0,a.kt)("p",null,"Otomi's generated resources are statically evaluated by Conftest before deployment, but also at build time. This gives developers the tools to test their manifests locally, and increases certainty that only valid output will be generated."),(0,a.kt)("h3",{id:"runtime-protection"},"Runtime protection"),(0,a.kt)("p",null,"The same policies are upheld by OPA's Gatekeeper on the cluster during runtime, making sure all deployed resources are approved by it's admission hook."),(0,a.kt)("h2",{id:"gatekeeper"},"Gatekeeper"),(0,a.kt)("p",null,"Otomi supports 3 modes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enforcing"),(0,a.kt)("li",{parentName:"ol"},"Permissive (default)"),(0,a.kt)("li",{parentName:"ol"},"Disabled")),(0,a.kt)("p",null,"In both Enforcing and Permissive mode, individual policies can be switched on or off. By default gatekeeper is enabled in permissive mode (logging & non-blocking)"),(0,a.kt)("p",null,"Customization of the policies is supported based on the Otomi ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml"},"schema")," (or use Otomi Console). In case of specific requirements, admins can add their own custom policies."),(0,a.kt)("h3",{id:"switching-modes"},"Switching modes"),(0,a.kt)("p",null,"Gatekeeper by default is disabled. To turn on Gatekeeper by dragging Gatekeeper from the disabled apps section (under Platform/Apps) to the enabled aps section and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy Changes"),"."),(0,a.kt)("p",null,"By default Gatekeeper now runs in Permissive mode (the ",(0,a.kt)("inlineCode",{parentName:"p"},"Disable validating webhook")," is active). To switch to blocking mode, uncheck the Disable validating webhook option:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Gatekeeper modes",src:i(9784).Z,width:"1962",height:"466"})),(0,a.kt)("h3",{id:"using-annotations-to-bypass-policy-checks"},"Using annotations to bypass policy checks"),(0,a.kt)("p",null,"It is possible to deviate from the baseline, provided there is a substantiated reason for doing so. To deviate from the baseline, annotations for the pod spec can be configured. Gatekeeper always keeps a log and thus it is traceable when an annotation is used. The use of annotations is a specific Otomi feature."),(0,a.kt)("p",null,"In order to bypass the policy checks that are enforced by Gatekeeper, Otomi provides an override mechanism to disable or parameterize policy checks by means of annotations. This is based on a gentlemen's approach, and will be RBAC enforced in a future version of Otomi. The policy engine is aware of the following annotations for a pod spec:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  policy.otomi.io/ignore: $policy[,$policy2] # pod level ignore for all containers\n  policy.otomi.io/ignore-sidecar: $policy[,$policy2] # pod level ignore for sidecars, such as istio-proxy\n  policy.otomi.io/ignore.$container: $policy[,$policy2] # ignore for just the mentioned container\n  policy.otomi.io/parameters.$policy: \'{"extra":"parameters"}\'\n')),(0,a.kt)("p",null,"Parameters will be merged with the default parameters passed to the rule (as defined in the policies.yaml file in the values repo). No override exists for a specific container to provide parameters for."))}d.isMDXComponent=!0},9784:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/gatekeeper-modes-3978ccc93f80d9ca49cd7e832a5824f4.png"}}]);