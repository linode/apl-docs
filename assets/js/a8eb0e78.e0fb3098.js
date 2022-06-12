"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6348],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2833:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],s={slug:"vision",title:"Vision"},l=void 0,u={unversionedId:"about-vision",id:"about-vision",title:"Vision",description:"Kubernetes becoming the new foundation",source:"@site/about/about-vision.md",sourceDirName:".",slug:"/vision",permalink:"/about/vision",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/about/about-vision.md",tags:[],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1655047508,formattedLastUpdatedAt:"6/12/2022",frontMatter:{slug:"vision",title:"Vision"},sidebar:"about",previous:{title:"Introduction",permalink:"/about/"},next:{title:"Journey",permalink:"/about/journey"}},c={},p=[{value:"Kubernetes becoming the new foundation",id:"kubernetes-becoming-the-new-foundation",level:2},{value:"What to expect from a PaaS container service",id:"what-to-expect-from-a-paas-container-service",level:2},{value:"Our key principles",id:"our-key-principles",level:2},{value:"1. Honour open source projects",id:"1-honour-open-source-projects",level:3},{value:"2. Serve developers",id:"2-serve-developers",level:3}],d={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kubernetes-becoming-the-new-foundation"},"Kubernetes becoming the new foundation"),(0,i.kt)("p",null,"The container space is slowly evolving from the wild west it used to be, into a landscape of governance, security reliability and thus trust. After many years of working with Kubernetes it is not hard to imagine it is becoming the foundation for (cloud native) software. That movement already started years ago. We can see that this new DIY architecture paradigm breeds a plethora of containerized solutions and suites offered. And that has become the new reality: too many (possibly good) things to choose from. But this also presents a new opportunity to us: to be able to quickly deploy and test solutions to see if they meets our needs."),(0,i.kt)("h2",{id:"what-to-expect-from-a-paas-container-service"},"What to expect from a PaaS container service"),(0,i.kt)("p",null,"First we have to look at containerization and its microservice way of working, as it has brought focus on the following areas:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Observability"),": State of the (parts of the) system now and over time. Metrics and logs, preferably correlated. Hopefully AI to help us monitor and make sense of it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Stateful storage"),": Where to keep your crown jewels, and how to automate backups and failover."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Application Configuration Management"),": Kubernetes configuration and package management like Helm, Kustomize and others exist. We need to abstract configuration away from the solution for easier retrofitting and repeatability. Should be idempotently deployable as code (gitops)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Policy enforcement"),": Are the pieces and the players operating within governable constraints?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Security"),": What are the new security concerns when containerizing workloads?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Continuous Deployment"),": New platforms demand a new way of continuously deploying. And so does kubernetes. Think Helm charts, Knative services, GitOps push/pull."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Single Sign On"),": One Identity Provider could be used by a group of applications to authenticate its users and know their roles and permissions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Networking/service configuration"),": Ingress flowing into the cluster's network. SSL termination. Routing logic and rules. Service governance.")),(0,i.kt)("p",null,"When checking out a platform it makes sense to evaluate the solutions offered to the above problem spaces. Anything not handled out of the box can lead to a lot of hidden cost. And the solutions should be straightforward to use and not lock you in too much. Hot swapping solutions should be made easy."),(0,i.kt)("h2",{id:"our-key-principles"},"Our key principles"),(0,i.kt)("h3",{id:"1-honour-open-source-projects"},"1. Honour open source projects"),(0,i.kt)("p",null,"Don't reinvent the wheel."),(0,i.kt)("p",null,"Coming from developers working with the 12-factor app methodology, Otomi was designed to be open and flexible, embracing open source projects and inevitable change. The best way to do that is to avoid technical debt and contribute effort where it makes most sense: in these projects we've come to love and use. Many companies try to wrap open source building blocks into their own abstraction/experience, offering a unified interface to all these wonderful functionalities. This looks great, but this custom wiring/glueing creates huge technical debt. They are on their own when it comes to patching/updating these parts."),(0,i.kt)("p",null,"Embracing this new era of turnkey (point) solutions we decided instead to use those apps as is, and make them aware of the bigger context they serve in: a company of teams and users that have roles and permissions to work with them. Otomi ultimately is an integration platform that strives to make these open source apps work together."),(0,i.kt)("h3",{id:"2-serve-developers"},"2. Serve developers"),(0,i.kt)("p",null,"Dealing with this multitude of applications and configuration it is of utmost importance to ease the developers workflow. They have to adopt this way of working, and so we aim for the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No local installs: we eat our own dogfood and build tooling images to run our code in containers, so it behaves the same locally as in the cloud."),(0,i.kt)("li",{parentName:"ul"},"Automate everything: input/output validation, testing, deployment, issue management. Limit errors and let developers focus on features."),(0,i.kt)("li",{parentName:"ul"},"Less integration points: Easily add core apps or wire them together, abstracting configuration away to a single repository."),(0,i.kt)("li",{parentName:"ul"},"Coding support: deliver jsonschema for validation in your favorite editor (vscode out of the box)."),(0,i.kt)("li",{parentName:"ul"},"API oriented: easily create openapi clients for tasks to do CRUD operations on the apps, giving autocompletion while developing."),(0,i.kt)("li",{parentName:"ul"},"Sane configuration defaults: wherever possible, provide configuration for the most common use case(s).")),(0,i.kt)("p",null,"Please continue to ",(0,i.kt)("a",{parentName:"p",href:"journey"},"our development journey")," to read about !"))}m.isMDXComponent=!0}}]);