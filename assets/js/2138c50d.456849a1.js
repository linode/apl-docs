"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"lab-22",title:"Using custom metrics",sidebar_label:"Using custom metrics"},i=void 0,l={unversionedId:"for-devs/get-started/lab-22",id:"for-devs/get-started/lab-22",title:"Using custom metrics",description:"What are custom metrics",source:"@site/docs/for-devs/get-started/lab-22.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-22",permalink:"/docs/for-devs/get-started/lab-22",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-22.md",tags:[],version:"current",frontMatter:{slug:"lab-22",title:"Using custom metrics",sidebar_label:"Using custom metrics"},sidebar:"mainSidebar",previous:{title:"View container metrics",permalink:"/docs/for-devs/get-started/lab-21"},next:{title:"Create custom dashboards",permalink:"/docs/for-devs/get-started/lab-30"}},s={},c=[{value:"What are custom metrics",id:"what-are-custom-metrics",level:2},{value:"Create a Workload",id:"create-a-workload",level:2},{value:"Check the status of the ServiceMonitor",id:"check-the-status-of-the-servicemonitor",level:2},{value:"See the custom metrics",id:"see-the-custom-metrics",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-are-custom-metrics"},"What are custom metrics"),(0,a.kt)("p",null,"Prometheus will collect all kind of standard container metrics like CPU and memory usage, but no (custom) business or customer metrics like the number of customers who logged into your app each hour."),(0,a.kt)("p",null,"To be able to collect custom metrics you will need to expose this data in your code. This is called instrumentation of code and can include annotating the code with metadata, or adding in logic to calculate and expose data."),(0,a.kt)("p",null,"Instrumenting code means you write code to expose information about the technical, business, and customer context. This information can then be collected and analyzed using Prometheus and Grafana."),(0,a.kt)("p",null,"In this lab we'll not dive into the way how to instrument your code. We will use a container that exposes custom metrics and then show how the metrics can be collected and analysed."),(0,a.kt)("h2",{id:"create-a-workload"},"Create a Workload"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the Catalog and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s-deployment")," template")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Values")," tab")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the name ",(0,a.kt)("inlineCode",{parentName:"p"},"custom-metrics"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the following values:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"image:\n  repository: quay.io/rbaumgar/monitor-demo-app-jvm\n  pullPolicy: IfNotPresent\n  tag: latest\ncontainerPorts:\n  - name: web\n    containerPort: 8080\n    protocol: TCP\nservicePorts:\n  - port: 8080\n    targetPort: 8080\n    protocol: TCP\n    name: web\nreplicaCount: 2\nserviceMonitor:\n  create: true\n  endpoints:\n    - interval: 30s\n      port: web\n      scheme: http\n      path: /q/metrics\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Submit")," and then ",(0,a.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))),(0,a.kt)("h2",{id:"check-the-status-of-the-servicemonitor"},"Check the status of the ServiceMonitor"),(0,a.kt)("p",null,"Check if the ServiveMonitor has been picked up by Prometheus:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the left menu go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Apps")),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Prometheus")," app"),(0,a.kt)("li",{parentName:"ol"},"In Prometheus, click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Status")," in the top menu and then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Targets")),(0,a.kt)("li",{parentName:"ol"},"You will now see that the ServiceMonitor has the ",(0,a.kt)("inlineCode",{parentName:"li"},"State")," UP:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"metrics",src:n(4945).Z,width:"3348",height:"1342"})),(0,a.kt)("p",null,"Okay, our metrics are now being scraped by the Team's Prometheus. Before we continue, let's first generate some load:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/for-devs/get-started/lab-18"},"Expose services")," lab and expose the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom-metrics")," service")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command in your terminal:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"for i in {1..1000}; do curl https://custom-metrics-labs.<your-domain>/hello; sleep 10; done\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Wait for approximately 10 minutes...")),(0,a.kt)("h2",{id:"see-the-custom-metrics"},"See the custom metrics"),(0,a.kt)("p",null,"To see the metrics:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"Prometheus")," app"),(0,a.kt)("li",{parentName:"ol"},"In Prometheus, fill in the following Expression: ",(0,a.kt)("inlineCode",{parentName:"li"},"application_greetings_total")),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Graph")),(0,a.kt)("li",{parentName:"ol"},"You should now see the following:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"metrics",src:n(1932).Z,width:"3354",height:"1678"})),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Prometheus is now scraping our custom metrics. You can now use these metrics to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a dashboard in Grafana in the lab ",(0,a.kt)("a",{parentName:"li",href:"/docs/for-devs/get-started/lab-30"},"Create custom dashboards")),(0,a.kt)("li",{parentName:"ul"},"Create rules and send alerts in the lab ",(0,a.kt)("a",{parentName:"li",href:"/docs/for-devs/get-started/lab-31"},"Create custom rules"))))}p.isMDXComponent=!0},1932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-metrics-1-9fa964600b6dbb303c5e18d19204ebf9.png"},4945:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-metrics-84c2d188b5fafed0cacccf7aae94c599.png"}}]);