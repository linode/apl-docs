"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4107],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1600:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"console/settings",title:"Settings"},s=void 0,u={unversionedId:"ui-settings",id:"ui-settings",title:"Settings",description:"Alerts",source:"@site/docs/ui-settings.md",sourceDirName:".",slug:"/console/settings",permalink:"/docs/console/settings",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ui-settings.md",tags:[],version:"current",frontMatter:{slug:"console/settings",title:"Settings"},sidebar:"mainSidebar",previous:{title:"Jobs",permalink:"/docs/console/jobs"},next:{title:"Deploy changes",permalink:"/docs/console/deploy-changes"}},d={},c=[{value:"Alerts",id:"alerts",level:2},{value:"Home alerts",id:"home-alerts",level:2},{value:"Azure",id:"azure",level:2},{value:"DNS",id:"dns",level:2},{value:"KMS",id:"kms",level:2},{value:"OIDC",id:"oidc",level:2},{value:"Otomi",id:"otomi",level:2},{value:"SMTP",id:"smtp",level:2}],p={toc:c};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"alerts"},"Alerts"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alerts",src:n(884).Z,width:"2522",height:"1554"})),(0,i.kt)("p",null,"The alerts settings section offers configuration options to define alerting endpoints for alert manager and deployment feedback. The list of providers selected in ",(0,i.kt)("inlineCode",{parentName:"p"},"Notification receivers"),' should reflect their configuration. I.e. when receiver "slack" is selected, the slack configuration needs to be defined. Teams can also configure additional endpoints for the alerts spawning from their team namespace.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Repeat interval"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Group interval"),(0,i.kt)("td",{parentName:"tr",align:null},"How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slack"),(0,i.kt)("td",{parentName:"tr",align:null},"Slack webhook url and channels for critical and non-critical alerts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MSteams"),(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Teams webhook urls for critical (high prio) and non-critical alerts (low prio).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Email"),(0,i.kt)("td",{parentName:"tr",align:null},"Email address(es) for critical and non-critical alerts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notification receivers"),(0,i.kt)("td",{parentName:"tr",align:null},"Select default notification channel(s) for receiving alerts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Drone notifications"),(0,i.kt)("td",{parentName:"tr",align:null},"Channel to be used by the deployment pipeline for failure/success notifications. Can only be delivered to Slack or MSteams (for now).")))),(0,i.kt)("h2",{id:"home-alerts"},"Home alerts"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Home Alerts",src:n(92).Z,width:"2520",height:"1524"})),(0,i.kt)("p",null,"The Home alerts section is similar to the ",(0,i.kt)("a",{parentName:"p",href:"#alerts"},"Alerts"),' section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. Those will become active when ',(0,i.kt)("inlineCode",{parentName:"p"},"otomi.isHomeMonitored"),' is turned on. This allows for a 3rd party to also monitor the system. This comes in handy when setting up Otomi as a managed service for clients that want to receive notifications themselves. We consider "Home" to be the managing party, and the regular "Alerts" section should then only contain endpoints for the client. Of course teams can still configure their own endpoints for the alerts spawning from their team namespace.'),(0,i.kt)("h2",{id:"azure"},"Azure"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure",src:n(575).Z,width:"2524",height:"1526"})),(0,i.kt)("p",null,"The Azure settings section offers specific configuration options when running Otomi on a Kubernetes cluster in Azure. Note that this section will only be available when running on Azure (cloud=azure)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Appgw"),(0,i.kt)("td",{parentName:"tr",align:null},"Select if Azure Application Gateway is used as an external Load Balancer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Azure Monitor"),(0,i.kt)("td",{parentName:"tr",align:null},"Turn on Azure monitor to use Azure metrics in Grafana dashboards.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Storage Types"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the Azure disk types used for storage classes in Otomi.")))),(0,i.kt)("p",null,"IMPORTANT NOTES:"),(0,i.kt)("p",null,"Using an Azure Application Gateway is optional. In case an application gateway is used with a WAF, make sure that its on detection mode and not prevention, as this might deny traffic to your cluster, which can have consequences on the availability of services. For example Grafana relies heavily on queries inside the api request that might trigger OWASP rules."),(0,i.kt)("h2",{id:"dns"},"DNS"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DNS",src:n(7490).Z,width:"2540",height:"1588"})),(0,i.kt)("p",null,"The DNS settings section offers configuration options for DNS."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Zones"),(0,i.kt)("td",{parentName:"tr",align:null},'Defines the dns zones accessible by the credentials given in the "Provider" section underneath.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Provider"),(0,i.kt)("td",{parentName:"tr",align:null},"The provider hosting the dns zones. Can be AWS, Azure or Google.")))),(0,i.kt)("h2",{id:"kms"},"KMS"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KMS",src:n(7110).Z,width:"2540",height:"1518"})),(0,i.kt)("p",null,"The KMS settings section offers configuration options for the Key Management Service information needed to seal and unseal secrets used by Otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi-values")," repo), and one for sealing/unsealing Vault storage."),(0,i.kt)("p",null,"IMPORTANT NOTES:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text"),(0,i.kt)("li",{parentName:"ul"},"When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!")),(0,i.kt)("p",null,"It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide."),(0,i.kt)("p",null,"Settings for Vault can be found under ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.vault")," in the Otomi values repository, but will be added to this section soon."),(0,i.kt)("h2",{id:"oidc"},"OIDC"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OIDC",src:n(8618).Z,width:"2540",height:"1522"})),(0,i.kt)("p",null,"The OIDC settings section offers configuration options to connect with an external Identity Provider (Bring Your Own IDP). This allows to map IDP group names to the following Otomi roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Otomi admins (",(0,i.kt)("inlineCode",{parentName:"li"},"adminGroupID"),")"),(0,i.kt)("li",{parentName:"ul"},"Team admins (",(0,i.kt)("inlineCode",{parentName:"li"},"teamAdminGroupID"),")")),(0,i.kt)("p",null,"Some settings are left in case Keycloak is not needed (it is heavy, and small teams might not need authorization), and are used by Grafana only:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Auth url"),(0,i.kt)("li",{parentName:"ul"},"Api url"),(0,i.kt)("li",{parentName:"ul"},"Token url")),(0,i.kt)("h2",{id:"otomi"},"Otomi"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Otomi",src:n(7389).Z,width:"2658",height:"2450"})),(0,i.kt)("p",null,"The Otomi settings section offers configuration options for Otomi and feature flags that influence the way Otomi behaves."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Admin password"),(0,i.kt)("td",{parentName:"tr",align:null},"Default admin password for all Otomi apps. Handy for quick rotation ;)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Additional Clusters"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of additional clusters to select in the Otomi console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"External load balancer"),(0,i.kt)("td",{parentName:"tr",align:null},"Set this to true when an external load balancer exists (Azure AppGW, Google Apigee) or needs to be started (AWS ALB). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Home monitored"),(0,i.kt)("td",{parentName:"tr",align:null},'When this is turned on alerts will also be sent to the endpoints configured in the "Home" settings.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Managed masters"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether masters are managed and not under control. Set this to false when onprem.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Multi-tenancy"),(0,i.kt)("td",{parentName:"tr",align:null},"Will separate team metrics and logs. Disabling this lets everybody be admin and see everything. Will still use team-","*"," namespaces for segmentation of services, but not use authorization of users.")))),(0,i.kt)("h2",{id:"smtp"},"SMTP"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SMTP",src:n(6308).Z,width:"2662",height:"1508"})),(0,i.kt)("p",null,"The alerts settings section offers configuration options to define for Mail server settings. A mail server needs to be configured in case email notifications are used."))}m.isMDXComponent=!0},884:function(t,e,n){e.Z=n.p+"assets/images/settings-alerts-f0dc9880a528be78a62031a71ba01db7.png"},575:function(t,e,n){e.Z=n.p+"assets/images/settings-azure-f95c940cb6497cf2173fd2231ea9b750.png"},7490:function(t,e,n){e.Z=n.p+"assets/images/settings-dns-a5cd873c7e59a9d7f0b114542f23511f.png"},92:function(t,e,n){e.Z=n.p+"assets/images/settings-home-alerts-032323fa2c4a4da2c89512d3c6f55ec2.png"},7110:function(t,e,n){e.Z=n.p+"assets/images/settings-kms-4822f324f20b08d1d8108ab9738e7e18.png"},8618:function(t,e,n){e.Z=n.p+"assets/images/settings-oidc-f3fa8157b24ef6c8e85dce153da9da06.png"},7389:function(t,e,n){e.Z=n.p+"assets/images/settings-otomi-b7f56a36cb02e2fb907275f534ce6700.png"},6308:function(t,e,n){e.Z=n.p+"assets/images/settings-smtp-24778eab5e62a0664ae549c8b8e29b3a.png"}}]);