"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"kms",title:"Use KMS to manage keys for encryption",sidebar_label:"KMS"},i=void 0,s={unversionedId:"get-started/installation/kms",id:"get-started/installation/kms",title:"Use KMS to manage keys for encryption",description:"If you would like the secrets in the values repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by sops, the tool used for encryption.",source:"@site/docs/get-started/installation/kms.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/kms",permalink:"/docs/get-started/installation/kms",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/kms.md",tags:[],version:"current",frontMatter:{slug:"kms",title:"Use KMS to manage keys for encryption",sidebar_label:"KMS"},sidebar:"mainSidebar",previous:{title:"OIDC",permalink:"/docs/get-started/installation/oidc"},next:{title:"EntryPoint",permalink:"/docs/get-started/installation/entrypoint"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you would like the secrets in the ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops"},"sops"),", the tool used for encryption."),(0,o.kt)("p",null,"Find quickstart documentation below on how to setup KMS access per supported provider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/kms/getting-started/"},"AWS KMS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/key-vault/#getting-started"},"Azure Vault")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/kms/docs/quickstart"},"Google KMS"))),(0,o.kt)("p",null,"Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps."),(0,o.kt)("p",null,"To install Otomi with SOPS/KMS, use the following values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kms:\n  sops:\n    provider: \"\" # provider can be one of aws|azure|google|vault\n#     aws:\n#       keys: ''\n#       accessKey: ''\n#       secretKey: ''\n#       region: ''\n#     azure:\n#       keys: ''\n#       tenantID: ''\n#       clientID: ''\n#       clientSecret: ''\n#     google:\n#       keys: ''\n#       accountJson: ''\n#       project: ''\n#     vault:\n#       token: ''\n")))}p.isMDXComponent=!0}}]);