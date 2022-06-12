"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4107],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1600:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"console/settings",title:"Platform - Settings",sidebar_label:"Settings"},s=void 0,d={unversionedId:"ui-settings",id:"ui-settings",title:"Platform - Settings",description:"Cluster",source:"@site/docs/ui-settings.md",sourceDirName:".",slug:"/console/settings",permalink:"/docs/console/settings",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/ui-settings.md",tags:[],version:"current",frontMatter:{slug:"console/settings",title:"Platform - Settings",sidebar_label:"Settings"},sidebar:"mainSidebar",previous:{title:"Jobs",permalink:"/docs/console/jobs"},next:{title:"Deploy changes",permalink:"/docs/console/deploy-changes"}},c={},m=[{value:"Cluster",id:"cluster",level:2},{value:"Alerts",id:"alerts",level:2},{value:"Home alerts",id:"home-alerts",level:2},{value:"Azure",id:"azure",level:2},{value:"DNS",id:"dns",level:2},{value:"Ingress",id:"ingress",level:2},{value:"KMS",id:"kms",level:2},{value:"OIDC",id:"oidc",level:2},{value:"Otomi",id:"otomi",level:2},{value:"SMTP",id:"smtp",level:2}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cluster"},"Cluster"),(0,i.kt)("p",null,"The Cluster section provides information about the cluster running Otomi. Only 2 settings can be changed:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"API Server"),(0,i.kt)("td",{parentName:"tr",align:null},"Add the full url of the kubernetes API server. This is used to generate the KUBECONFIG for local API access.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Owner"),(0,i.kt)("td",{parentName:"tr",align:null},"A cluster owner. Used in alerts/reports to distinguish between resources for different customers.")))),(0,i.kt)("h2",{id:"alerts"},"Alerts"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Alerts settings will only be active when Alertmanager is active."))),(0,i.kt)("p",null,"The alerts settings section offers configuration options to define alerting endpoints for alert manager and deployment feedback. The list of providers selected in ",(0,i.kt)("inlineCode",{parentName:"p"},"Notification receivers"),' should reflect their configuration. I.e. when receiver "slack" is selected, the slack configuration needs to be defined. Teams can also configure additional endpoints for the alerts spawning from their team namespace.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Repeat interval"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Group interval"),(0,i.kt)("td",{parentName:"tr",align:null},"How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slack"),(0,i.kt)("td",{parentName:"tr",align:null},"Slack webhook url and channels for critical and non-critical alerts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MSteams"),(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Teams webhook urls for critical (high prio) and non-critical alerts (low prio).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Email"),(0,i.kt)("td",{parentName:"tr",align:null},"Email address(es) for critical and non-critical alerts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notification receivers"),(0,i.kt)("td",{parentName:"tr",align:null},"Select default notification channel(s) for receiving alerts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Drone notifications"),(0,i.kt)("td",{parentName:"tr",align:null},"Channel to be used by the deployment pipeline for failure/success notifications. Can only be delivered to Slack or MSteams (for now).")))),(0,i.kt)("h2",{id:"home-alerts"},"Home alerts"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Home alerts settings will only be active when Alertmanager is active."))),(0,i.kt)("p",null,"The Home alerts section is similar to the ",(0,i.kt)("a",{parentName:"p",href:"#alerts"},"Alerts"),' section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. Those will become active when ',(0,i.kt)("inlineCode",{parentName:"p"},"otomi.isHomeMonitored"),' is turned on. This allows for a 3rd party to also monitor the system. This comes in handy when setting up Otomi as a managed service for clients that want to receive notifications themselves. We consider "Home" to be the managing party, and the regular "Alerts" section should then only contain endpoints for the client. Of course teams can still configure their own endpoints for the alerts spawning from their team namespace.'),(0,i.kt)("h2",{id:"azure"},"Azure"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Azure settings will only be active when ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.provider=azure"),"."))),(0,i.kt)("p",null,"The Azure settings section offers specific configuration options when running Otomi on a Kubernetes cluster in Azure. Note that this section will only be available when running on Azure (cloud=azure)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Appgw"),(0,i.kt)("td",{parentName:"tr",align:null},"Select if Azure Application Gateway is used as an external Load Balancer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Azure Monitor"),(0,i.kt)("td",{parentName:"tr",align:null},"Turn on Azure monitor to use Azure metrics in Grafana dashboards.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Storage Types"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the Azure disk types used for storage classes in Otomi.")))),(0,i.kt)("p",null,"IMPORTANT NOTES:"),(0,i.kt)("p",null,"Using an Azure Application Gateway is optional. In case an application gateway is used with a WAF, make sure that its on detection mode and not prevention, as this might deny traffic to your cluster, which can have consequences on the availability of services. For example Grafana relies heavily on queries inside the api request that might trigger OWASP rules."),(0,i.kt)("h2",{id:"dns"},"DNS"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DNS settings will only be active when ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi.hasExternalDNS=true"),"."))),(0,i.kt)("p",null,"The DNS settings section offers configuration options for DNS."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Zones"),(0,i.kt)("td",{parentName:"tr",align:null},'Defines the dns zones accessible by the credentials given in the "Provider" section underneath.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Provider"),(0,i.kt)("td",{parentName:"tr",align:null},"The provider hosting the dns zones. Can be AWS, Azure or Google.")))),(0,i.kt)("h2",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,"By default (after installing Otomi), one ingress controller (ingress-nginx-platform) is deployed and is used to publicly expose both platform and user created services. In the settings for ingress, an admin can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure the platform ingress class to be private (using a private load balancer)"),(0,i.kt)("li",{parentName:"ol"},"Add additional ingress classes to expose user created services")),(0,i.kt)("p",null,"By changing the platform ingress class from public to private, all platform services (like Otomi Console, the Keycloak platform instance and all other platform end-points) will only be accessible from the private network."),(0,i.kt)("p",null,"By adding additional ingress classes, each class will get a dedicated ingress controller and a dedicated cloud load balancer. This allows grouping of services and exposing them to differend networks."),(0,i.kt)("h2",{id:"kms"},"KMS"),(0,i.kt)("p",null,"The KMS settings section offers configuration options for the Key Management Service information needed to seal and unseal secrets used by Otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi-values")," repo), and one for sealing/unsealing Vault storage."),(0,i.kt)("p",null,"IMPORTANT NOTES:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text"),(0,i.kt)("li",{parentName:"ul"},"When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!")),(0,i.kt)("p",null,"It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide."),(0,i.kt)("p",null,"Settings for Vault can be found under ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.vault")," in the Otomi values repository, but will be added to this section soon."),(0,i.kt)("h2",{id:"oidc"},"OIDC"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"OIDC settings will only be active when ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi.hasExternalIDP=true")))),(0,i.kt)("p",null,"The OIDC settings section offers configuration options to connect with an external Identity Provider (Bring Your Own IDP). This allows to map IDP group names to the following Otomi roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Otomi admins (",(0,i.kt)("inlineCode",{parentName:"li"},"adminGroupID"),")"),(0,i.kt)("li",{parentName:"ul"},"Team admins (",(0,i.kt)("inlineCode",{parentName:"li"},"teamAdminGroupID"),")")),(0,i.kt)("p",null,"Some settings are left in case Keycloak is not needed (it is heavy, and small teams might not need authorization), and are used by Grafana only:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Auth url"),(0,i.kt)("li",{parentName:"ul"},"Api url"),(0,i.kt)("li",{parentName:"ul"},"Token url")),(0,i.kt)("h2",{id:"otomi"},"Otomi"),(0,i.kt)("p",null,"The Otomi settings section offers configuration options for Otomi and feature flags that influence the way Otomi behaves."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Admin password"),(0,i.kt)("td",{parentName:"tr",align:null},"Default admin password for all Otomi apps. The default admin password can not be changed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Additional Clusters"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of additional clusters to select in the Otomi console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Global pull secrets"),(0,i.kt)("td",{parentName:"tr",align:null},'Add you Dockerhub pull secret. Will be connected to each "default" service account in all otomi app namespaces. Handy for authenticating with DockerHub to avoid rate limiting. Also useful when pulling all otomi images from a private repo.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"External load balancer"),(0,i.kt)("td",{parentName:"tr",align:null},"Set this to true when an external load balancer exists (Azure AppGW, Google Apigee) or needs to be started (AWS ALB). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"External DNS"),(0,i.kt)("td",{parentName:"tr",align:null},"Set this to true when an external DNS zone is available to manage DNS records. (Expects required ",(0,i.kt)("inlineCode",{parentName:"td"},"dns:")," fields to be set.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"External IdP"),(0,i.kt)("td",{parentName:"tr",align:null},"Set this to true when bringing your own external IDP such as Azure AD. (Expects required ",(0,i.kt)("inlineCode",{parentName:"td"},"oidc:")," fields to be set.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Home monitored"),(0,i.kt)("td",{parentName:"tr",align:null},'When this is turned on alerts will also be sent to the endpoints configured in the "Home" settings.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Managed masters"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether masters are managed and not under control. Set this to false when onprem.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Multi-tenancy"),(0,i.kt)("td",{parentName:"tr",align:null},"When turned on, team metrics and logs will be separated. Disabling this let everybody be admin and see everything. Will still use team-","*"," namespaces for segmentation and network isolation of services.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Version"),(0,i.kt)("td",{parentName:"tr",align:null},"The installed version of Otomi. Change to a new valid release to upgrade")))),(0,i.kt)("h2",{id:"smtp"},"SMTP"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"SMTP settings will only be active when Alertmanager is active."))),(0,i.kt)("p",null,"The alerts settings section offers configuration options to define for Mail server settings. A mail server needs to be configured in case email notifications are used."))}u.isMDXComponent=!0}}]);