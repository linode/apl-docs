"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"lab-2",title:"Access Otomi Console and download the KUBECFG",sidebar_label:"Access the Console"},i=void 0,l={unversionedId:"for-devs/get-started/lab-2",id:"for-devs/get-started/lab-2",title:"Access Otomi Console and download the KUBECFG",description:"When you have received the URL of the web UI of Otomi Platform and have a username/password with access permissions, then it's time to sign-in",source:"@site/docs/for-devs/get-started/lab-2.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-2",permalink:"/docs/for-devs/get-started/lab-2",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-2.md",tags:[],version:"current",frontMatter:{slug:"lab-2",title:"Access Otomi Console and download the KUBECFG",sidebar_label:"Access the Console"}},s={},c=[{value:"Sign in",id:"sign-in",level:2},{value:"(Optional) Download CA",id:"optional-download-ca",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you have received the URL of the web UI of Otomi Platform and have a username/password with access permissions, then it's time to sign-in"),(0,o.kt)("h2",{id:"sign-in"},"Sign in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the provided URL. The URL will look like this: ",(0,o.kt)("a",{parentName:"li",href:"https://otomi.yourdomain.com"},"https://otomi.yourdomain.com")),(0,o.kt)("li",{parentName:"ul"},"Sign in with the provided username/password or your existing corporate AD account")),(0,o.kt)("p",null,"After sign in, you will see this page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Team apps",src:n(3874).Z,width:"2954",height:"1734"})),(0,o.kt)("h2",{id:"optional-download-ca"},"(Optional) Download CA"),(0,o.kt)("p",null,"In some cases the platform is using a non-trusted CA. In this case you can download the CA and add it to your keychain."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When Otomi is using non-trusted certificates (and is probably not configured with DNS), you will not be able to do the labs that are using Harbor.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In the left menu of the console, click on "Download CA"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:n(283).Z,width:"962",height:"326"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Double click the downloaded CA.crt or add the CA to your keychain on Mac using the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt\n")),(0,o.kt)("p",null,"On Windows, use PowerShell (running as Administrator) with the Certutil:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"certutil.exe -addstore root <downloaded cert path>\n")),(0,o.kt)("p",null,"Or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'Import-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\\LocalMachine\\Root\n# Restart the browser\n')),(0,o.kt)("p",null,"But you could also run Chrome in insecure mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alias chrome-insecure='/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'\n")))}u.isMDXComponent=!0},283:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ca-cc3981636e6d2f22cac11ea3e0f5df91.png"},3874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/team-apps-801d3401d1ec86bfead774e901d2bb83.png"}}]);