(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(176)),i={slug:"console/settings/alerts",title:"Alerts"},c={unversionedId:"settings-alerts",id:"settings-alerts",isDocsHomePage:!1,title:"Alerts",description:'The alerts settings section offers configuration options to define alerting endpoints for alert manager and deployment feedback. The list of providers selected in Notification receivers should reflect their configuration. I.e. when receiver "slack" is selected, the slack configuration needs to be defined. Teams can also configure additional endpoints for the alerts spawning from their team namespace.',source:"@site/docs/settings-alerts.md",slug:"/console/settings/alerts",permalink:"/docs/console/settings/alerts",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/settings-alerts.md",version:"current",sidebar:"mainSidebar",previous:{title:"Platform Apps",permalink:"/docs/console/platform-apps"},next:{title:"Azure",permalink:"/docs/console/settings/azure"}},l=[],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The alerts settings section offers configuration options to define alerting endpoints for alert manager and deployment feedback. The list of providers selected in ",Object(o.b)("inlineCode",{parentName:"p"},"Notification receivers"),' should reflect their configuration. I.e. when receiver "slack" is selected, the slack configuration needs to be defined. Teams can also configure additional endpoints for the alerts spawning from their team namespace.'),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Setting"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Repeat interval"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Group interval"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Slack"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Slack webhook url and channels for critical and non-critical alerts.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MSteams"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Microsoft Teams webhook urls for critical (high prio) and non-critical alerts (low prio).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Email"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Email address(es) for critical and non-critical alerts.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Notification receivers"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Select default notification channel(s) for receiving alerts.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Drone notifications"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Channel to be used by the deployment pipeline for failure/success notifications. Can only be delivered to Slack or MSteams (for now).")))))}b.isMDXComponent=!0}}]);