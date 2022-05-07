"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5684],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2651:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={slug:"sre/daily",title:"SRE Daily Routine",sidebar_label:"Daily Routine"},s=void 0,u={unversionedId:"sre-daily",id:"sre-daily",title:"SRE Daily Routine",description:"As an SRE you would like to keep your daily tasks to a minimum and be automatically informed on issues. Otomi offers the following tooling to automate this:",source:"@site/docs/sre-daily.md",sourceDirName:".",slug:"/sre/daily",permalink:"/docs/sre/daily",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/sre-daily.md",tags:[],version:"current",frontMatter:{slug:"sre/daily",title:"SRE Daily Routine",sidebar_label:"Daily Routine"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/sre/"},next:{title:"Troubleshooting",permalink:"/docs/sre/troubleshooting"}},c={},p=[{value:"Steps to perform",id:"steps-to-perform",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As an SRE you would like to keep your daily tasks to a minimum and be automatically informed on issues. Otomi offers the following tooling to automate this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prometheus is the main monitoring tool, and notifications will be triggered for issues that need attention"),(0,i.kt)("li",{parentName:"ul"},"Loki is used to collect cluster and container logs. Loki will only collect logs and not analyze them, it's up to the user to review the logs. Logs can help find issues that are invisible to monitoring systems"),(0,i.kt)("li",{parentName:"ul"},"Grafana is used to visualize metrics, it can help you analyze issues with performance. (Note that we don't use its alerting capabilities.) Its historical data can help in pinpointing resource conflicts over time"),(0,i.kt)("li",{parentName:"ul"},"Prometheus BlackBox exporter is a service probing tool used by Prometheus to periodically probe services over HTTP, TCP, UDP, and ICMP. When it receives non-valid responses it will trigger an alert")),(0,i.kt)("p",null,"Otomi makes use of Slack (but MS Teams and email can also be configured) as the main notifications channel. Subscribe to the configured channels."),(0,i.kt)("h3",{id:"steps-to-perform"},"Steps to perform"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[ONGOING]"," Keep a close eye on the #mon-","*"," channels in Slack, it will show all Alertmanager notifications"),(0,i.kt)("li",{parentName:"ul"},"[ONGOING]"," Proactively monitor things not automatically detected (see the following steps)")),(0,i.kt)("p",null,"Since not everything is monitored it is necessary to log in to certain systems and look:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check k9s (or ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl top nodes"),") for current cluster resource usage"),(0,i.kt)("li",{parentName:"ul"},"Check Grafana for cluster resource and disk usage"),(0,i.kt)("li",{parentName:"ul"},"Check Loki for stderr messages on the cluster"),(0,i.kt)("li",{parentName:"ul"},"Check if pods are restarting over and over"),(0,i.kt)("li",{parentName:"ul"},"Check if operators are working. (some operators stop working after a while, the Istio operator is an important component)"),(0,i.kt)("li",{parentName:"ul"},"Check for cluster events (",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get events -A"),") on all nodes and validate if any pods have issues"),(0,i.kt)("li",{parentName:"ul"},"[PERIODICALLY]"," Check if Prometheus (BlackBox) rules are correct"),(0,i.kt)("li",{parentName:"ul"},"[OPTIONAL]"," Check if a backup is available for state data")))}d.isMDXComponent=!0}}]);