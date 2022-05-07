"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3733],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5870:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={slug:"sre/upgrades",title:"Upgrades"},l=void 0,u={unversionedId:"lm-upgrades",id:"lm-upgrades",title:"Upgrades",description:"Introduction",source:"@site/docs/lm-upgrades.md",sourceDirName:".",slug:"/sre/upgrades",permalink:"/docs/sre/upgrades",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/lm-upgrades.md",tags:[],version:"current",frontMatter:{slug:"sre/upgrades",title:"Upgrades"},sidebar:"mainSidebar",previous:{title:"Loki",permalink:"/docs/sre/known-issues/loki"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Steps to upgrade otomi-core",id:"steps-to-upgrade-otomi-core",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'Since otomi-core is a mono repo with many open source charts that are working together, it is very hard to coordinate updates to its parts. Luckily we can rely on a lot of smart operators to take care of upgrades (we strive to only adopt operators with capability level "Seamless Upgrades"), but some scripting is always needed in this case. We strive to make upgrades as painless as possible by creating upgrade scripts for the release versions. You can find these in ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/tree/master/bin/upgrades"},"otomi-core/bin/upgrades"),"."),(0,a.kt)("p",null,"Example: in order to migrate from ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.10.*")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.*")," you would run ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/upgrades/v0.11.sh"),". Soon the upgrade scripts can also be used to migrate from an older version, as it will apply any in between upgrade scripts successively."),(0,a.kt)("p",null,"In some situations however, the automatic upgrades will throw an error, and might require removing/patching existing resources before helm can adopt or manipulate them. Notable issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resources not under helm chart control: since helm 3.2 these can be adopted. When trying to deploy helm resources over existing resources helm will give detailed instructions on how to adopt these."),(0,a.kt)("li",{parentName:"ul"},"Some resources have labels and do not allow changing them. This usually points to bad chart practices, but mandates removal before recreating these resources. This can't always be done and is a big drawback. Remedies usually exist but might have to be investigated on the fly.")),(0,a.kt)("h2",{id:"steps-to-upgrade-otomi-core"},"Steps to upgrade otomi-core"),(0,a.kt)("p",null,"So every time an upgrade of the stack is released it is important to follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Read the release notes on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-core"},"otomi-core")," for impact and special cases."),(0,a.kt)("li",{parentName:"ol"},"Check the corresponding upgrade script(s) and read the comments. It might involve manual steps."),(0,a.kt)("li",{parentName:"ol"},"Set the new version tag in ",(0,a.kt)("inlineCode",{parentName:"li"},"clusters.yaml")," and run ",(0,a.kt)("inlineCode",{parentName:"li"},"otomi bootstrap")," to pull in latest artifacts"),(0,a.kt)("li",{parentName:"ol"},"Do a diff first: ",(0,a.kt)("inlineCode",{parentName:"li"},"otomi diff")),(0,a.kt)("li",{parentName:"ol"},"Run the upgrade script"),(0,a.kt)("li",{parentName:"ol"},"Check the output and fix anything that needs fixing and repeat steps 4-6"),(0,a.kt)("li",{parentName:"ol"},"Commit the values when all is well and Drone syncing will take it from there")))}m.isMDXComponent=!0}}]);