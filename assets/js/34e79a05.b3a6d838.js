(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[3193],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5179:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={slug:"apps/gatekeeper",title:"Working with Gatekeeper Operator",sidebar_label:"Gatekeeper"},p={unversionedId:"app-gatekeeper",id:"app-gatekeeper",isDocsHomePage:!1,title:"Working with Gatekeeper Operator",description:"Otomi uses Gatekeeper for policy enforcement. Gatekeeper can be turned on or off. When turned on, individual policies can be switched on or off. Please see the OPA Gatekeeper policy library as it is the source for the policy baseline here. We made a selection of usable policies for Otomi and adapted them to be used by Conftest as well for static analysis of manifests generated by Otomi.",source:"@site/docs/app-gatekeeper.md",sourceDirName:".",slug:"/apps/gatekeeper",permalink:"/docs/apps/gatekeeper",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/app-gatekeeper.md",version:"current",sidebar_label:"Gatekeeper",frontMatter:{slug:"apps/gatekeeper",title:"Working with Gatekeeper Operator",sidebar_label:"Gatekeeper"},sidebar:"mainSidebar",previous:{title:"Working with Hashicorp Vault",permalink:"/docs/apps/vault"},next:{title:"Working with Otomi CLI",permalink:"/docs/cli/"}},l=[{value:"Enable Gatekeeper",id:"enable-gatekeeper",children:[]},{value:"Using annotations",id:"using-annotations",children:[]},{value:"BYO policies",id:"byo-policies",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Otomi uses Gatekeeper for policy enforcement. Gatekeeper can be turned on or off. When turned on, individual policies can be switched on or off. Please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library"},"OPA Gatekeeper policy library")," as it is the source for the policy baseline here. We made a selection of usable policies for Otomi and adapted them to be used by Conftest as well for static analysis of manifests generated by Otomi."),(0,o.kt)("p",null,"The policies are provided as a best-practice security baseline. The full set of all policies can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/tree/master/policies"},"here"),"."),(0,o.kt)("p",null,"Customization of the policies is supported based on the Otomi ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml"},"schema")," (or use Otomi Console in EE mode). In case of specific requirements, admins can add their own custom policies."),(0,o.kt)("p",null,"IMPORTANT NOTES:"),(0,o.kt)("p",null,"It is possible to deviate from the baseline, provided there is a substantiated reason for doing so. To deviate from the baseline, annotations for the pod spec can be configured. Gatekeeper always keeps a log and thus it is traceable when an annotation is used. The use of annotations is a specific Otomi feature."),(0,o.kt)("h3",{id:"enable-gatekeeper"},"Enable Gatekeeper"),(0,o.kt)("p",null,"To enable Gatekeeper Operator, edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"values/env/charts/gatekeeper-operator.yaml")," file and set enabled to true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"charts:\n  gatekeeper-operator:\n    enabled: true\n")),(0,o.kt)("h3",{id:"using-annotations"},"Using annotations"),(0,o.kt)("h3",{id:"byo-policies"},"BYO policies"))}u.isMDXComponent=!0}}]);