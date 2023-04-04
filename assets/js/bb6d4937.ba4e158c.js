"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={slug:"activation",title:"Activation steps",sidebar_label:"Activation"},i=void 0,l={unversionedId:"get-started/activation",id:"get-started/activation",title:"Activation steps",description:"Follow the steps below to activate Otomi after initial installation.",source:"@site/docs/get-started/activation.md",sourceDirName:"get-started",slug:"/get-started/activation",permalink:"/docs/get-started/activation",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/activation.md",tags:[],version:"current",frontMatter:{slug:"activation",title:"Activation steps",sidebar_label:"Activation"},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/docs/get-started/installation"},next:{title:"Get Started Labs",permalink:"/docs/for-devs/get-started/overview"}},s={},p=[{value:"Step 1: Get the log output of the installer job",id:"step-1-get-the-log-output-of-the-installer-job",level:3},{value:"Step 2 (optional): Add the auto generated CA to your keychain",id:"step-2-optional-add-the-auto-generated-ca-to-your-keychain",level:3},{value:"Step 3: Activate Drone",id:"step-3-activate-drone",level:3},{value:"Step 4 (Optional): Create a new admin user",id:"step-4-optional-create-a-new-admin-user",level:3},{value:"Step 5 (Optional): Add the URL of the Kubernetes API",id:"step-5-optional-add-the-url-of-the-kubernetes-api",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow the steps below to activate Otomi after initial installation."),(0,a.kt)("h3",{id:"step-1-get-the-log-output-of-the-installer-job"},"Step 1: Get the log output of the installer job"),(0,a.kt)("p",null,"When the installer job (in the default namespace) has finished, copy the URL and the generated password from the bottom of the logs, sign in to the console with the provided URL, username and password."),(0,a.kt)("p",null,"Use the following command to get the logs of the installer job:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl logs jobs/otomi -n default -f\n")),(0,a.kt)("h3",{id:"step-2-optional-add-the-auto-generated-ca-to-your-keychain"},"Step 2 (optional): Add the auto generated CA to your keychain"),(0,a.kt)("p",null,"Otomi by default automatically generates a CA. The generated CA is of course not trusted on your local machine. Here are some options to prevent you from clicking away lots of security warning in your browser:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'In the left menu of the console, click on "Download CA"'),(0,a.kt)("li",{parentName:"ol"},"Double click the downloaded CA.crt or add the CA to your keychain on Mac using the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt\n")),(0,a.kt)("p",null,"On Windows, use PowerShell (running as Administrator) with the Certutil:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"certutil.exe -addstore root <downloaded cert path>\n")),(0,a.kt)("p",null,"Or:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Import-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\\LocalMachine\\Root\n# Restart the browser\n')),(0,a.kt)("p",null,"But you could also run Chrome in insecure mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias chrome-insecure='/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Optional: Restart Docker (to support pushing images to Harbor)")),(0,a.kt)("h3",{id:"step-3-activate-drone"},"Step 3: Activate Drone"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.drone.io/"},"Drone")," is an integral part in the deployment of Otomi cluster configuration."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the side menu of Otomi Console under ",(0,a.kt)("inlineCode",{parentName:"li"},"platform")," click on the ",(0,a.kt)("strong",{parentName:"li"},"Drone")," app"),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"play")," button in the top right. A new tab will open for Drone"),(0,a.kt)("li",{parentName:"ol"},"Sign in locally with as ",(0,a.kt)("inlineCode",{parentName:"li"},"otomi-admin")," and the password provided in the logs of the installer job."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorize Application")),(0,a.kt)("li",{parentName:"ol"},"Click on `Submit on the Complete your Drone Registration page. You don't need to fill in your Email, Full Name or Company Name if you don't want to"),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"otomi/values")," repository"),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"+ Activate Repository"))),(0,a.kt)("h3",{id:"step-4-optional-create-a-new-admin-user"},"Step 4 (Optional): Create a new admin user"),(0,a.kt)("admonition",{title:"ATTENTION",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We strongly advise to not use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi-admin")," account after activation and to not change the password. Store it somewhere safe and only use it in case absolutely required.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/apps/keycloak#step-2-create-a-user-in-keycloak"},"Create a new user account in Keycloak")," and add the new user to the ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi-admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"team-admin"),"."),(0,a.kt)("h3",{id:"step-5-optional-add-the-url-of-the-kubernetes-api"},"Step 5 (Optional): Add the URL of the Kubernetes API"),(0,a.kt)("admonition",{title:"NOTE",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Adding the URL of the K8s cluster API is required by teams to be able to download the KUBECONFIG")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Platform")," in Otomi Console, click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Cluster")),(0,a.kt)("li",{parentName:"ul"},"Add the full URL of the API server"),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Submit")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))))}d.isMDXComponent=!0}}]);