(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(176)),a={slug:"console/settings/kms",title:"KMS"},s={unversionedId:"settings-kms",id:"settings-kms",isDocsHomePage:!1,title:"KMS",description:"The KMS settings section offers configuration options for the Key Management Service information needed to seal and unseal secrets used by Otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the otomi-values repo), and another one for sealing/unsealing Vault storage.",source:"@site/docs/settings-kms.md",slug:"/console/settings/kms",permalink:"/docs/console/settings/kms",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/settings-kms.md",version:"current",sidebar:"mainSidebar",previous:{title:"Home",permalink:"/docs/console/settings/home"},next:{title:"OIDC",permalink:"/docs/console/settings/oidc"}},c=[{value:"SOPS",id:"sops",children:[]},{value:"Vault",id:"vault",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The KMS settings section offers configuration options for the Key Management Service information needed to seal and unseal secrets used by Otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi-values")," repo), and another one for sealing/unsealing Vault storage."),Object(i.b)("p",null,"IMPORTANT NOTES:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text"),Object(i.b)("li",{parentName:"ul"},"When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!")),Object(i.b)("p",null,"It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide."),Object(i.b)("h3",{id:"sops"},"SOPS"),Object(i.b)("p",null,"Credentials to a KMS used by SOPS. For now it expects the ",Object(i.b)("inlineCode",{parentName:"p"},".sops.yaml")," file in the root of the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi/values")," repo to have the configuration pointing to the keys in use there. (Soon this file will be generated from key configuration gathered here.)"),Object(i.b)("h3",{id:"vault"},"Vault"),Object(i.b)("p",null,"Settings for Vault can be found under ",Object(i.b)("inlineCode",{parentName:"p"},"charts.vault")," in the Otomi values repository, but will be added to this section soon."))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);