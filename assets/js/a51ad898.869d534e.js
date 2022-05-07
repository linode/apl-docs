"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6248],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={slug:"apps/gitea",title:"Working with Gitea",sidebar_label:"Gitea"},l=void 0,c={unversionedId:"app-gitea",id:"app-gitea",title:"Working with Gitea",description:"Introduction",source:"@site/docs/app-gitea.md",sourceDirName:".",slug:"/apps/gitea",permalink:"/docs/apps/gitea",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-gitea.md",tags:[],version:"current",frontMatter:{slug:"apps/gitea",title:"Working with Gitea",sidebar_label:"Gitea"},sidebar:"mainSidebar",previous:{title:"ExternalDNS",permalink:"/docs/apps/external-dns"},next:{title:"Grafana",permalink:"/docs/apps/grafana"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Gitea for GitOps",id:"gitea-for-gitops",level:2},{value:"Role based access",id:"role-based-access",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Gitea is a community managed lightweight code hosting solution written in Go. Because Otomi uses Drone to deploy changes to the values repo, it needs a git hosting solution. When no source control is configured, Otomi will deploy Gitea for Drone to target as a git repo."),(0,i.kt)("p",null,"Gitea may be used for other purposes, and is especially useful in combination with Drone as a CI/CD solution. Just like Otomi uses it."),(0,i.kt)("h2",{id:"gitea-for-gitops"},"Gitea for GitOps"),(0,i.kt)("p",null,"When Argo CD is enabled, Otomi will automatically create a GitOps repository for each Team in Gitea."),(0,i.kt)("h2",{id:"role-based-access"},"Role based access"),(0,i.kt)("p",null,"Currently Gitea only supports a single role in combination with OIDC. To sign in to Gitea, a user needs to be a member of the ",(0,i.kt)("inlineCode",{parentName:"p"},"team-admin")," group. Team members will not have access to Gitea."))}f.isMDXComponent=!0}}]);