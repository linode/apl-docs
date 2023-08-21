"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={slug:"use-team-admin",title:"Use team-admin",sidebar_label:"Use Team Admin"},i=void 0,l={unversionedId:"for-ops/how-to/use-team-admin",id:"for-ops/how-to/use-team-admin",title:"Use team-admin",description:"When Otomi is installed, by default a team called team-admin is created. The Admin Team is no regular team. This team for instance has no apps. Instead the admin needs to use the platform apps to see logs and metrics of workloads deployed in the team-admin namespace.",source:"@site/docs/for-ops/how-to/use-team-admin.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/use-team-admin",permalink:"/docs/for-ops/how-to/use-team-admin",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/how-to/use-team-admin.md",tags:[],version:"current",frontMatter:{slug:"use-team-admin",title:"Use team-admin",sidebar_label:"Use Team Admin"},sidebar:"mainSidebar",previous:{title:"Use private ingress class",permalink:"/docs/for-ops/how-to/ingress-classes"},next:{title:"Use Core only",permalink:"/docs/for-ops/how-to/core-only"}},p={},s=[{value:"Create workloads in any namespace",id:"create-workloads-in-any-namespace",level:2},{value:"Publicly expose a service deployed in any namespace",id:"publicly-expose-a-service-deployed-in-any-namespace",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When Otomi is installed, by default a team called ",(0,o.kt)("inlineCode",{parentName:"p"},"team-admin")," is created. The Admin Team is no regular team. This team for instance has no apps. Instead the admin needs to use the platform apps to see logs and metrics of workloads deployed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"team-admin")," namespace."),(0,o.kt)("p",null,"The Admin Team can be used by admins to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy workloads in any namespace"),(0,o.kt)("li",{parentName:"ul"},"Configure ingress for any service in any namespace")),(0,o.kt)("p",null,"This makes it possible for admin to add any kind of tool to the platform and use the Services in Otomi to expose the UI of the tool and configure SSO."),(0,o.kt)("h2",{id:"create-workloads-in-any-namespace"},"Create workloads in any namespace"),(0,o.kt)("p",null,"To create workloads in a namespace not managed by Otomi (namespaces not owned by teams created in Otomi), first create a namespace with label ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-injection: enabled"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create namespace my-namespace\nkubectl label namespace my-namespace istio-injection=enabled\n")),(0,o.kt)("p",null,"You can now create a workload to deploy Helm charts to this new namespace. In this example we'll use the deployment chart in the ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi-charts")," repo. In the left menu, under ",(0,o.kt)("inlineCode",{parentName:"p"},"team-admin")," click ",(0,o.kt)("inlineCode",{parentName:"p"},"Workloads")," and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Workload"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter a name for the workload")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hello-deploy\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Enter the URL to the Git repo containing the Helm Chart or a Helm repository:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/redkubes/otomi-charts.git\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Enter the path of the chart")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"deployment\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the name of the namespace where the workload will be deployed:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-namespace\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,o.kt)("p",null,"After submitting the new workload specs, the values editor will be shown. Here you can edit the chart values."),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following (minimal) values:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fullnameOverride: hello-deploy\nimage:\n  repository: otomi/nodejs-helloworld\n  tag: v1.2.13\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Submit"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Changes")," (the Deploy Changes button in the left panel will light-up after you click on submit)."))),(0,o.kt)("h2",{id:"publicly-expose-a-service-deployed-in-any-namespace"},"Publicly expose a service deployed in any namespace"),(0,o.kt)("p",null,"The Services in ",(0,o.kt)("inlineCode",{parentName:"p"},"team-admin")," can be used to publicly expose services deployed in any namespace. The only requirement is that the namespace has the label ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-injection: enabled"),"."),(0,o.kt)("p",null,"Let's now configure public exposure for the workload we deployed in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"my-namespace"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left menu panel under click ",(0,o.kt)("inlineCode",{parentName:"p"},"Services")," then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Service"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the name of the Kubernetes service (hello-deploy) that you already deployed")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the namespace where the service is deployed (my-namespace in this example)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the port of the service (8080 in this case)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Exposure Ingress"),", select ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Turn off ",(0,o.kt)("inlineCode",{parentName:"p"},"Use team domain")," and fill in the name of the service as the hostname (hello-deploy in this example)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Submit"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Changes")," (the Deploy Changes button in the left panel will light-up after you click on submit)."))),(0,o.kt)("p",null,"Your service and URL will now show up in the list of Services."))}c.isMDXComponent=!0}}]);