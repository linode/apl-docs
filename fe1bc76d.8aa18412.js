(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(176)),a={slug:"sre/known-issues/istio",title:"Known Issues: Istio",sidebar_label:"Istio"},s={unversionedId:"ki-istio",id:"ki-istio",isDocsHomePage:!1,title:"Known Issues: Istio",description:"When working with Istio you can expect to run into the following issues:",source:"@site/docs/ki-istio.md",slug:"/sre/known-issues/istio",permalink:"/docs/sre/known-issues/istio",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ki-istio.md",version:"current",sidebar_label:"Istio",sidebar:"mainSidebar",previous:{title:"Known Issues: Harbor",permalink:"/docs/sre/known-issues/harbor"},next:{title:"Known Issues: Loki",permalink:"/docs/sre/known-issues/loki"}},c=[{value:"Stale Keycloak JWKS cache",id:"stale-keycloak-jwks-cache",children:[]},{value:"Istio log errors",id:"istio-log-errors",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When working with Istio you can expect to run into the following issues:"),Object(i.b)("h3",{id:"stale-keycloak-jwks-cache"},"Stale Keycloak JWKS cache"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Problem")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"`Jwks doesn't have key to match kid or alg from Jwt`\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cause")," The istio-proxy sidecar caches JWKS with a TTL of 20 minutes. The TTL is a hardcoded parameter (",Object(i.b)("inlineCode",{parentName:"p"},"JwtPubKeyRefreshInterval"),") and cannot be configured. By redeploing keycloak ",Object(i.b)("inlineCode",{parentName:"p"},"kid")," or ",Object(i.b)("inlineCode",{parentName:"p"},"alg")," can change, thus JWKS that is cached by istio-proxy sidecar is not valid anymore."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Solution")," Either wait 20 minutes, so JWKS is refreshed or kill all pods that are referenced by a RequestAuthentication resource. All services that have ",Object(i.b)("inlineCode",{parentName:"p"},"authz.workload")," set will have one (see: core.yaml)."),Object(i.b)("h3",{id:"istio-log-errors"},"Istio log errors"),Object(i.b)("p",null,"When you see errors in the logs like such:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"error    authorization    skipped rule ns[monitoring]-policy[grafana-dev-eks-otomi-cloud]-rule[0]: :authority must not be used in TCP\n")),Object(i.b)("p",null,"These are not real errors, but logged incorrectly: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/istio/istio/issues/24701#issuecomment-649719089"}),"https://github.com/istio/istio/issues/24701#issuecomment-649719089")))}u.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return r?o.a.createElement(m,s(s({ref:t},l),{},{components:r})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);