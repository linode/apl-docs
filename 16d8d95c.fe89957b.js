(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{189:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||O[m]||c;return a?r.a.createElement(d,o(o({ref:t},l),{},{components:a})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},254:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ingress-overview-419bc5e7be19dafdebd9a8ec6b04a3b1.svg"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(189)),i={slug:"architecture",title:"Otomi Architecture",sidebar_label:"Architecture"},o={unversionedId:"about-architecture",id:"about-architecture",isDocsHomePage:!1,title:"Otomi Architecture",description:"Components",source:"@site/about/about-architecture.md",slug:"/architecture",permalink:"/about/architecture",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-architecture.md",version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1636440828,sidebar_label:"Architecture",sidebar:"about",previous:{title:"Our development journey",permalink:"/about/journey"},next:{title:"Roadmap",permalink:"/about/roadmap"}},b=[{value:"Components",id:"components",children:[{value:"Otomi Core",id:"otomi-core",children:[]},{value:"Otomi CLI",id:"otomi-cli",children:[]},{value:"Otomi Chart",id:"otomi-chart",children:[]},{value:"Otomi Tasks",id:"otomi-tasks",children:[]},{value:"Otomi Clients",id:"otomi-clients",children:[]},{value:"Otomi Values",id:"otomi-values",children:[]},{value:"Otomi API",id:"otomi-api",children:[]},{value:"Otomi Console",id:"otomi-console",children:[]}]},{value:"Functions",id:"functions",children:[{value:"Teams",id:"teams",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Services",id:"services",children:[]},{value:"Jobs",id:"jobs",children:[]},{value:"Settings",id:"settings",children:[]},{value:"Role based access",id:"role-based-access",children:[]}]},{value:"Integrated Applications",id:"integrated-applications",children:[]},{value:"Ingress &amp; SSO",id:"ingress--sso",children:[]}],l={toc:b};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"components"},"Components"),Object(c.b)("p",null,"Otomi is not a single application, but consists of multiple components. Each component has its own (GitHub) code repository, most of them public (open source), some private (for Enterprise Edition features)."),Object(c.b)("p",null,"The following table shows the Otomi projects and the produced artifacts."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Project"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"open source"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/redkubes/otomi-core"}),"otomi-core")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/redkubes/otomi-tasks"}),"otomi-tasks")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/redkubes/otomi-clients"}),"otomi-clients")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/redkubes/otomi-console"}),"otomi-console")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/redkubes/otomi-api"}),"otomi-api")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.b)("h3",{id:"otomi-core"},"Otomi Core"),Object(c.b)("p",null,"Otomi Core is the heart of Otomi and contains a set of about (currently) 47 Helm Charts. Most of these charts are optimized charts from open source projects, others are developed by ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://redkubes.com"}),"Red Kubes"),". Otomi Core is made available (per release) as a container image. For more information, see the public repository ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core"}),"here")," (and star ;)"),Object(c.b)("p",null,"Otomi Core also contains the source code for Otomi CLI and Otomi Chart."),Object(c.b)("h3",{id:"otomi-cli"},"Otomi CLI"),Object(c.b)("p",null,"Otomi CLI is a custom developed Command Line Interface for Otomi. Otomi CLI is part of the Otomi Core repository. At the time of writing the CLI is using bash scripts, but these are now ported to Javascript, allowing for multi platform support. Otomi CLI can be used for (advanced) initial configuration (bootstrapping), deployment, sync, push, template validation, and more."),Object(c.b)("h3",{id:"otomi-chart"},"Otomi Chart"),Object(c.b)("p",null,"Installing Otomi can also be done using a Helm Chart. The chart install supports setting Otomi Values as values in the chart. The Chart contains a Job that uses Otomi CLI to deploy Otomi. One benefit of using the chart install is that installation is done locally on the cluster. This limits possible issues during install when dealing with poor network connectivity between client and Kubernetes API."),Object(c.b)("h3",{id:"otomi-tasks"},"Otomi Tasks"),Object(c.b)("p",null,"Otomi Tasks consists of a set of Kubernetes jobs. These jobs ensure that the configuration of applications integrated in Otomi are always equal to the desired-state configuration (see Otomi Values). An example: If a team is created via Otomi Console (in combination with Otomi API), Otomi Tasks ensures that a project is created for the new team in Harbor, the access to the project in Harbor is configured, a robot account (that can be used to push images to the project registry) is created and that a pull secret is created in the namespace of the team."),Object(c.b)("p",null,"Otomi Tasks is currently used to configure the following applications:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"KeyCloak"),Object(c.b)("li",{parentName:"ul"},"Harbor"),Object(c.b)("li",{parentName:"ul"},"Gitea"),Object(c.b)("li",{parentName:"ul"},"Drone")),Object(c.b)("h3",{id:"otomi-clients"},"Otomi Clients"),Object(c.b)("p",null,"A factory to build and publish openapi clients used in the redkubes/otomi-tasks repo."),Object(c.b)("p",null,"Otomi Clients is currently used to generate openapi clients for the following applications:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"KeyCloak"),Object(c.b)("li",{parentName:"ul"},"Harbor"),Object(c.b)("li",{parentName:"ul"},"Gitea")),Object(c.b)("h3",{id:"otomi-values"},"Otomi Values"),Object(c.b)("p",null,"The charts in Otomi Core contain the default configuration values. Each cluster on which Otomi is installed also has its own configuration, the Otomi Values. These values \u200b\u200bare managed in a Git repository (Gitea), running on each cluster where Otomi is installed. The Otomi Values \u200b\u200bcan be changed directly (by pulling the repository and making validated changes via Otomi CLI in combination with autocompletion in Visual Studio Code) or can be changed via the Otomi API (using Otomi Console). A commit in the values repository automatically triggers a synchronization (via a Drone pipeline). During synchronization, the Otomi Values \u200b\u200bare 'injected' into the Otomi Core charts and applied to the cluster, resulting in a new state."),Object(c.b)("p",null,"Otomi Values can be bootstrapped and adjusted before initial deployment of Otomi using the Otomi CLI. When deployed using the Helm Chart, Otomi Values will be automatically bootstrapped and adjusted based on the values configured in the chart."),Object(c.b)("h3",{id:"otomi-api"},"Otomi API"),Object(c.b)("p",null,"Otomi API allows for a controlled change of all Otomi Values, based on a configuration scheme and is the brain of Otomi. Otomi API runs as a container on each cluster running."),Object(c.b)("h3",{id:"otomi-console"},"Otomi Console"),Object(c.b)("p",null,"Otomi Console is the User Interface of Otomi. Otomi Console communicates with Otomi API for reading and changing Otomi Values configuration. Otomi Console also offers (via the Otomi Apps option) shortcuts to the UI of the various integrated applications."),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("p",null,"Otomi offers a set of functions, built on top of the suite of integrated open source applications. All of these functions are controlled by the Otomi operation (Otomi Console, Otomi API and Otomi Core."),Object(c.b)("h3",{id:"teams"},"Teams"),Object(c.b)("p",null,"Teams are tenants on the platform to support Development-, DevOps teams, projects or even DTAP. A team can operate on multiple Kubernetes clusters, even when running on different Clouds."),Object(c.b)("p",null,"A team will get access to Otomi Console, providing access to all the tools needed for complete observability. Container logs are only accessible for team members and traffic between services of different teams is not allowed based on network policies."),Object(c.b)("p",null,"Teams can choose to receive alerts in Microsoft Teams, Slack or email and each team will automatically get access to a project in Harbor and a space in Vault (if these applications are enabled). Team Members can access all the team apps using Otomi Console with SSO."),Object(c.b)("p",null,"A Team Administrator can set Team Self Service Flags to grant the team permissions to modify specific team configurations. Currently the following flags are provided:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Ingress: allows the team to configure public and private ingress for a service"),Object(c.b)("li",{parentName:"ul"},"Alerts: allows the team to change the alerting endpoints used"),Object(c.b)("li",{parentName:"ul"},"OIDC: allows the team to change the OIDC group mapping for the team")),Object(c.b)("p",null,"Teams are provided access to the team with Otomi Console based on a OIDC group mapping. When configured a Role in KeyCloak is automatically configured for the team."),Object(c.b)("h3",{id:"secrets"},"Secrets"),Object(c.b)("p",null,"Secrets can be used to map and synchronize secrets stored in the local Hashicorp Vault. After a secret is created in Vault, a secret in Otomi can be created and then be used in Services and Jobs, or by custom deployments. A Secret is synchronized with Kubernetes and available as a Kubernetes secret. Otomi supports 3 kinds of secrets: 1) Generic secrets, 2) TLS secrets and 3) Docker registry (pull) secrets."),Object(c.b)("h3",{id:"services"},"Services"),Object(c.b)("p",null,"A service in Otomi is a feature for easy deployment of container workloads using Knative Serving and exposing services with a public URL."),Object(c.b)("p",null,"An Otomi Service contains 2 sections:"),Object(c.b)("h4",{id:"exposure"},"Exposure"),Object(c.b)("p",null,"The exposure part of a Services enables teams to configure (advanced) ingress for a service. By default every service is configured as a clusterIP service. Ingress can be configured for private and public exposure."),Object(c.b)("p",null,"When exposure is configured for a service, Otomi will automatically configure all the Kubernetes ingress resources, including Istio, certificates and DNS A-records in the selected DNS zone."),Object(c.b)("h4",{id:"service-type"},"Service type"),Object(c.b)("p",null,"Ingress can be configured for 3 service types: 1) a pre-deployed Kubernetes service, 2) a pre-deployed Knative service or 3) a Knative service created by Otomi. Pre-deployed services are services deployed by the team (the team has set up a pipeline to deploy Kubernetes objects). Otomi also offers the option to create a Knative service manifest for you and deploy it. When using the New knative service option, all settings can be configured for a new knative service."),Object(c.b)("h3",{id:"jobs"},"Jobs"),Object(c.b)("p",null,"Jobs can be used to create and run Kubernetes Jobs and CronJobs."),Object(c.b)("h3",{id:"settings"},"Settings"),Object(c.b)("p",null,"The values schema of Otomi supports a rich set of settings that can be configured using Otomi Console. The following settings sections are available:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Alerts: Configure alerting settings for the customer"),Object(c.b)("li",{parentName:"ul"},"Customers: the name of the customer"),Object(c.b)("li",{parentName:"ul"},"DNS: the Domain zones available for the cluster"),Object(c.b)("li",{parentName:"ul"},"KMS: credential settings for retrieving encryption keys"),Object(c.b)("li",{parentName:"ul"},"Home: configure alerting settings to share with an organization (in case a third party monitors the cluster)"),Object(c.b)("li",{parentName:"ul"},"OIDC: Configure OpenID settings"),Object(c.b)("li",{parentName:"ul"},"Otomi: add additional Otomi clusters (so support changing context in Otomi Console), turn multi tenancy on/off, enable cloud load balancers, enable home monitored"),Object(c.b)("li",{parentName:"ul"},"Policies: turn security policies on/off and adjust policy configuration"),Object(c.b)("li",{parentName:"ul"},"SMTP: configure SMTP mail server")),Object(c.b)("h3",{id:"role-based-access"},"Role based access"),Object(c.b)("p",null,"Otomi supports role based access control for Otomi Console and user and tenant aware applications. See KeyCloak for more information."),Object(c.b)("h2",{id:"integrated-applications"},"Integrated Applications"),Object(c.b)("p",null,"Otomi contains four types of applications:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Core applications; applications that operate on the platform-level"),Object(c.b)("li",{parentName:"ul"},"Shared applications; applications that are shared between teams. Shared applications can be user- and role-aware or not (user is anonymous)"),Object(c.b)("li",{parentName:"ul"},"Team applications; applications with a dedicated instance per team"),Object(c.b)("li",{parentName:"ul"},"Optional applications; applications that can be turned on or off")),Object(c.b)("p",null,"The following table shows all integrated applications:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Application"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Core"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Shared"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Team"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"User/role-aware"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Istio"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nginx Ingress Controller"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Knative"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/apps/keycloak"}),"KeyCloak")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Prometheus Server"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Prometheus kube state metrics"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Alertmanager"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Grafana/Loki"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/apps/gatekeeper"}),"Gatekeeper Operator")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/apps/vault"}),"Hashicorp Vault")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/apps/harbor"}),"Harbor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/apps/kubeapps"}),"Kubeapps")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/apps/drone"}),"Drone")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gitea"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Httpbin"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Jeager"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kiali"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"ingress--sso"},"Ingress & SSO"),Object(c.b)("p",null,"Otomi installs and configures an advanced ingress architecture. Ingress for a service can be configured using Otomi Services. The following figure shows the ingress and SSO architecture."),Object(c.b)("p",null,Object(c.b)("img",{alt:"img/ingress-overview",src:a(254).default})),Object(c.b)("p",null,"The ingress & SSO architecture explained (shortly):"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"(optional) an external gateway is used for termination of external traffic (e.g. an Azure Application Gateway or an AWS Application Load Balancer)."),Object(c.b)("li",{parentName:"ul"},"2 nginx ingress controllers are deployed, one for public access and one for authenticated access"),Object(c.b)("li",{parentName:"ul"},"Authenticated (SSO) access is handled by an oauth2 proxy and KeyCloak. The user logs in using the Otomi custom KeyCloak login page. - KeyCloak is configured with an external IDP (optional) or uses local accounts. After authentication, KeyCloak provides a normalized JWT token. The JWT token is used by integrated core applications (providing user and role information) and team services configured with SSO"),Object(c.b)("li",{parentName:"ul"},"4 Istio (ingress) gateways are provisioned: 1) a public gateway for routing public (non authenticated traffic to a service, 2) an authentication gateway to route authenticated traffic to a service, 3) a local gateway (for local cluster routing), 4) a Knative gateway to route traffic to Knative services"),Object(c.b)("li",{parentName:"ul"},"For each service a Istio virtual service is configured"),Object(c.b)("li",{parentName:"ul"},"One egress gateway is provisioned for all egress traffic (network policies allow all egress traffic)")))}s.isMDXComponent=!0}}]);