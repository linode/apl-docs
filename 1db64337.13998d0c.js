(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,O=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.a.createElement(O,c(c({ref:t},l),{},{components:n})):a.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console-apps-3704ab9d42f2f5e545fd5689bb91a974.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(176)),i={slug:"otomi-console/",title:"Overview",sidebar_label:"Overview"},c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Console apps",source:"@site/docs/overview.md",slug:"/otomi-console/",permalink:"/docs/otomi-console/",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/overview.md",version:"current",sidebar_label:"Overview",sidebar:"mainSidebar",previous:{title:"Install with Chart",permalink:"/docs/installation/chart/"},next:{title:"Teams",permalink:"/docs/otomi-console/teams"}},s=[{value:"Otomi Console",id:"otomi-console",children:[{value:"Platform section",id:"platform-section",children:[]},{value:"Enterprise section",id:"enterprise-section",children:[]},{value:"Team section",id:"team-section",children:[]},{value:"Cluster section",id:"cluster-section",children:[]}]}],l={toc:s};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Console apps",src:n(195).default})),Object(o.b)("h2",{id:"otomi-console"},"Otomi Console"),Object(o.b)("p",null,"Otomi Console is the UI of Otomi and offers a desktop like experience for Kubernetes."),Object(o.b)("p",null,'Otomi Console has a topbar showing a cluster and team selector on the top and the logged-in user. The team selector allows to switch to the context one wishes to operate for. Otomi Console also has a menu (on the left when in desktop mode). The menu shows the sections "Platform", "Enterprise", "Team ',Object(o.b)("inlineCode",{parentName:"p"},"$name"),'" and "Cluster".'),Object(o.b)("h3",{id:"platform-section"},"Platform section"),Object(o.b)("p",null,'The "Platform" section gives access to:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The dashboard which gives stats about clusters, teams and services"),Object(o.b)("li",{parentName:"ul"},"The list of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"platform-apps"}),"platform applications")," ","[ADMINS ONLY]"),Object(o.b)("li",{parentName:"ul"},"The settings in use by the cluster ","[ADMINS ONLY]")),Object(o.b)("h3",{id:"enterprise-section"},"Enterprise section"),Object(o.b)("p",null,'The "Enterprise" section gives access to:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The list of known Otomi ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"clusters"}),"Clusters")),Object(o.b)("li",{parentName:"ul"},"The list of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"teams"}),"Teams")," using this cluster"),Object(o.b)("li",{parentName:"ul"},"The list of all ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"services"}),"Services")," running on this cluster"),Object(o.b)("li",{parentName:"ul"},"The list of all ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"jobs"}),"Jobs")," running on this cluster")),Object(o.b)("h3",{id:"team-section"},"Team section"),Object(o.b)("p",null,'The "Team ',Object(o.b)("inlineCode",{parentName:"p"},"$name"),'" section gives access to:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"teams"}),"Team")," configuration"),Object(o.b)("li",{parentName:"ul"},"The list of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"services"}),"Services")," managed by the team on this cluster"),Object(o.b)("li",{parentName:"ul"},"The list of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"jobs"}),"Jobs")," managed by the team on this cluster"),Object(o.b)("li",{parentName:"ul"},"The list of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"secrets"}),"Secrets")," managed by the team on this cluster"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"team-apps"}),"Apps")," available to the team on this cluster")),Object(o.b)("h3",{id:"cluster-section"},"Cluster section"),Object(o.b)("p",null,'The "Cluster" section shows:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cluster information such as name, cloud, region, k8s version, otomi version, etc"),Object(o.b)("li",{parentName:"ul"},'A "Download KUBECFG" link to download a KUBECONFIG file that gives access to the namespace of the team selected. Admins can download one with ',Object(o.b)("inlineCode",{parentName:"li"},"cluster-admin")," permissions (giving access to all namespaces) by setting the team selector to '-'. You can use it like ",Object(o.b)("inlineCode",{parentName:"li"},"KUBECONFIG=$file_location kubectl ...")," or by merging it with another KUBECONFIG file like ",Object(o.b)("inlineCode",{parentName:"li"},".kube/config"),". Please visit the official k8s ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"}),"documentation about managing kube contexts"),".")))}b.isMDXComponent=!0}}]);