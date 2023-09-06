"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={slug:"services",title:"Team Services",sidebar_label:"Services"},o=void 0,l={unversionedId:"for-devs/console/services",id:"for-devs/console/services",title:"Team Services",description:"A service in Otomi is a self-service feature for:",source:"@site/docs/for-devs/console/services.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/services",permalink:"/docs/for-devs/console/services",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/console/services.md",tags:[],version:"current",frontMatter:{slug:"services",title:"Team Services",sidebar_label:"Services"},sidebar:"mainSidebar",previous:{title:"Workloads",permalink:"/docs/for-devs/console/workloads"},next:{title:"Secrets",permalink:"/docs/for-devs/console/secrets"}},s={},c=[{value:"Create a Service",id:"create-a-service",level:2},{value:"Configuring exposure (ingress)",id:"configuring-exposure-ingress",level:2},{value:"Private",id:"private",level:3},{value:"Public",id:"public",level:3},{value:"Configure CNAME (available from v0.26)",id:"configure-cname-available-from-v026",level:2},{value:"With TLS Termination at the NGINX Controller",id:"with-tls-termination-at-the-nginx-controller",level:3},{value:"With TLS Termination at the Application (Pod) Level",id:"with-tls-termination-at-the-application-pod-level",level:3},{value:"Configure network policies",id:"configure-network-policies",level:2},{value:"Ingress traffic inside the cluster",id:"ingress-traffic-inside-the-cluster",level:3},{value:"External egress filtering",id:"external-egress-filtering",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A service in Otomi is a self-service feature for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Publicly exposing ClusterIP services. Otomi will automatically create and configure all ingress resources needed, including Istio Virtual Services and Gateways, certificates, DNS records and Oauth2 proxy for Single Sign On"),(0,a.kt)("li",{parentName:"ul"},"Private (in-cluster) exposure of ClusterIP services"),(0,a.kt)("li",{parentName:"ul"},"Configure network policies")),(0,a.kt)("h2",{id:"create-a-service"},"Create a Service"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter a name for the service. The name will be used to generate hostname if ",(0,a.kt)("inlineCode",{parentName:"li"},"Use suggested domain")," is chosen (see below). When configuring ingress for an existing (pre-deployed) service, make sure the name provided here matches the name of the CusterIP service"),(0,a.kt)("li",{parentName:"ol"},"Enter the port number of the service")),(0,a.kt)("p",null,"After providing a name and a port number, you can now configure ingress."),(0,a.kt)("h2",{id:"configuring-exposure-ingress"},"Configuring exposure (ingress)"),(0,a.kt)("p",null,"Exposure controls wether internet exposure should be enabled or not. Three options exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Private"),": choose to expose services in-cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Public"),": choose to expose services publicly")),(0,a.kt)("h3",{id:"private"},"Private"),(0,a.kt)("p",null,"Choose private to expose the service in-cluster and configure in-cluster ",(0,a.kt)("a",{parentName:"p",href:"#ingress-traffic-inside-the-cluster"},"ingress network policies")),(0,a.kt)("h3",{id:"public"},"Public"),(0,a.kt)("p",null,"Use Public to expose a service with a domain name and a certificate on an external network (using an external load balancer)"),(0,a.kt)("p",null,"A URL will have a hostname that consists of ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOST_NAME.$DNS_ZONE"),". Options are described below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ingress class name"),(0,a.kt)("td",{parentName:"tr",align:null},"The ingress class to assing this service to. Select one of the available classes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TLS passthrough"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass through the request as is to the backing service")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use suggested domain"),(0,a.kt)("td",{parentName:"tr",align:null},"The suggested domain is the team domain for which a wildcard certificate already exists. Has the team name in it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose a hostname that will be the prefix of the domain")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Forward path"),(0,a.kt)("td",{parentName:"tr",align:null},'Do not "terminate" the path but instead pass it to the receiving service')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DNS Zone"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose a dns zone that will be the suffix of the domain")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authenticate with Single Sign On"),(0,a.kt)("td",{parentName:"tr",align:null},"Forwards any unauthenticated traffic to the Keycloak login page, which might forward to an external IDP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Already has a certificate"),(0,a.kt)("td",{parentName:"tr",align:null},"Don't generate certificates for this service")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"> Certificate ARN"),(0,a.kt)("td",{parentName:"tr",align:null},"[AWS only]"," Provide the certificate ARN")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"> Select existing secret name"),(0,a.kt)("td",{parentName:"tr",align:null},"[non AWS]"," Provide a TLS secret name previously created under ",(0,a.kt)("inlineCode",{parentName:"td"},"Secrets"),". Override to select name of secret not known here")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Response Headers"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Response headers that will be set on the exposed service")))),(0,a.kt)("h2",{id:"configure-cname-available-from-v026"},"Configure CNAME (available from v0.26)"),(0,a.kt)("h3",{id:"with-tls-termination-at-the-nginx-controller"},"With TLS Termination at the NGINX Controller"),(0,a.kt)("p",null,"Follow the steps below to set up a CNAME when the TLS termination happens on the NGINX controller."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure a CNAME entry with your domain name provider."),(0,a.kt)("li",{parentName:"ol"},"Generate or copy your domain certificates and store them as a TLS secret in your team's namespace."),(0,a.kt)("li",{parentName:"ol"},"Go to the service configuration section in the Otomi Console."),(0,a.kt)("li",{parentName:"ol"},"Create a new service by selecting the k8s service and port that you want to expose."),(0,a.kt)("li",{parentName:"ol"},'Check the "Use CNAME" checkbox. Two text boxes will appear: "domain" and "tlsSecretName".'),(0,a.kt)("li",{parentName:"ol"},"Fill in both text boxes accordingly. Example: domain=",(0,a.kt)("inlineCode",{parentName:"li"},"demo.example.com"),", tlsSecretName=",(0,a.kt)("inlineCode",{parentName:"li"},"my-cname-cert"),"."),(0,a.kt)("li",{parentName:"ol"},'Click on the "Submit" button, followed by the "Deploy" button.')),(0,a.kt)("h3",{id:"with-tls-termination-at-the-application-pod-level"},"With TLS Termination at the Application (Pod) Level"),(0,a.kt)("p",null,"Follow the steps below to set up a CNAME when the TLS termination happens on the application (pod) running on the cluster. It is expected that the certificates are already embedded or mounted in the application/pod."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure a CNAME entry with your domain name provider."),(0,a.kt)("li",{parentName:"ol"},"Go to the service configuration section in the Otomi Console."),(0,a.kt)("li",{parentName:"ol"},"Create a new service by selecting the k8s service and port that you want to expose."),(0,a.kt)("li",{parentName:"ol"},'Check the "TLS Passthrough" checkbox.'),(0,a.kt)("li",{parentName:"ol"},'Check the "Use CNAME" checkbox. Fill the domain field(leave the tlsSecretName field empty).'),(0,a.kt)("li",{parentName:"ol"},"Provide your cname domain in the text box."),(0,a.kt)("li",{parentName:"ol"},'Click on the "Submit" button, followed by the "Deploy" button.')),(0,a.kt)("h2",{id:"configure-network-policies"},"Configure network policies"),(0,a.kt)("h3",{id:"ingress-traffic-inside-the-cluster"},"Ingress traffic inside the cluster"),(0,a.kt)("p",null,"When the network policies option is enabled for the team all traffic to the service (from other services within the team and from services in other teams) is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Deny all")," by default. To allow other services to access the service, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow traffic from selected team services")," and specify the Team and Service name of the services that is allowed to access the service. It is also possible to allow traffic from all Team Services. In this case select ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow traffic from all team services"),"."),(0,a.kt)("h3",{id:"external-egress-filtering"},"External egress filtering"),(0,a.kt)("p",null,"Traffic to external endpoints (outside of the cluster) is denied by default. To allow egress traffic to external endpoints, add the FQDN or IP address of the endpoint, the target port and the protocol used."))}d.isMDXComponent=!0}}]);