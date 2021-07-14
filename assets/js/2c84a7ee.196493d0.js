(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[3291],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8958:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={slug:"ce/",title:"CE Overview",sidebar_label:"Overview"},s={unversionedId:"ce-overview",id:"ce-overview",isDocsHomePage:!1,title:"CE Overview",description:"Otomi Community Edition",source:"@site/docs/ce-overview.md",sourceDirName:".",slug:"/ce/",permalink:"/docs/ce/",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ce-overview.md",version:"current",sidebar_label:"Overview",frontMatter:{slug:"ce/",title:"CE Overview",sidebar_label:"Overview"},sidebar:"mainSidebar",previous:{title:"Deploy changes",permalink:"/docs/ee/deploy-changes"},next:{title:"Team Apps",permalink:"/docs/ce/team-apps"}},c=[{value:"Otomi Community Edition",id:"otomi-community-edition",children:[]},{value:"Explore Otomi Console in CE mode",id:"explore-otomi-console-in-ce-mode",children:[]},{value:"Start configuring Otomi",id:"start-configuring-otomi",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"otomi-community-edition"},"Otomi Community Edition"),(0,i.kt)("p",null,"Otomi CE is FREE and open source. Otomi CE does not offer self-service forms for Teams, Services, Secrets and Jobs. This is only supported in the EE version. Configuring Otomi in CE mode is done by changing the configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi/values")," repository. This section provides an overview of Otomi CE and instructions and examples to get started."),(0,i.kt)("h2",{id:"explore-otomi-console-in-ce-mode"},"Explore Otomi Console in CE mode"),(0,i.kt)("p",null,"Otomi CE also includes the Otomi Console, but the self-service forms are not available. Otomi Console in CE mode does provide role based access to all integrated applications. When a team is created, team-members can use Otomi Console to view container logs (using Loki) and metrics (Grafana). Teams can see the services deployed within the team and the configured public URLs. Team members also get access to a project in Harbor and a space in Hashicorp Vault."),(0,i.kt)("p",null,"See the following pages for more details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Platform Apps"),(0,i.kt)("li",{parentName:"ul"},"Clusters"),(0,i.kt)("li",{parentName:"ul"},"Switch context"),(0,i.kt)("li",{parentName:"ul"},"Team Apps")),(0,i.kt)("h2",{id:"start-configuring-otomi"},"Start configuring Otomi"),(0,i.kt)("p",null,"Use the following instructions and examples to get started:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create and manage ",(0,i.kt)("a",{parentName:"li",href:"teams"},"Teams")),(0,i.kt)("li",{parentName:"ul"},"Create and manage ",(0,i.kt)("a",{parentName:"li",href:"services"},"Services")),(0,i.kt)("li",{parentName:"ul"},"Create and manage ",(0,i.kt)("a",{parentName:"li",href:"secrets"},"Secrets")),(0,i.kt)("li",{parentName:"ul"},"Create and manage Jobs")))}u.isMDXComponent=!0}}]);