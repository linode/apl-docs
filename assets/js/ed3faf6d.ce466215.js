"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={slug:"keycloak",title:"Keycloak",sidebar_label:"Keycloak"},o=void 0,l={unversionedId:"apps/keycloak",id:"apps/keycloak",title:"Keycloak",description:"The SSO login page for Otomi is served by Keycloak. It is used as an identity broker or provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications.",source:"@site/docs/apps/keycloak.md",sourceDirName:"apps",slug:"/apps/keycloak",permalink:"/docs/apps/keycloak",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/keycloak.md",tags:[],version:"current",frontMatter:{slug:"keycloak",title:"Keycloak",sidebar_label:"Keycloak"},sidebar:"mainSidebar",previous:{title:"Jaeger",permalink:"/docs/apps/jaeger"},next:{title:"Knative",permalink:"/docs/apps/knative"}},s={},p=[{value:"Instructions",id:"instructions",level:2},{value:"Create a user in Keycloak",id:"create-a-user-in-keycloak",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SSO login page for Otomi is served by Keycloak. It is used as an identity broker or provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications."),(0,i.kt)("p",null,"Keycloak is automatically configured with 3 roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"otomi-admin"),": super admin role for all platform configuration and core applications"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"team-admin"),": team admin role to manage teams and users"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"team"),": team role for team members")),(0,i.kt)("p",null,"Group (team) membership is reflected in the user's 'groups' claim. When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided groups and roles claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the \"Authenticate with Single Sign On\" checkbox. This then limits the application access to only allow the members of the team."),(0,i.kt)("p",null,'When there are different requirements to use Keycloak for business applications, Keycloak\'s designated "master" and "otomi" realms may not be used, and an additional realm needs to be created. We refer to the keycloak docs for any custom configuration targeting business applications.'),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("h3",{id:"create-a-user-in-keycloak"},"Create a user in Keycloak"),(0,i.kt)("p",null,"To create users in Keycloak, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the Keycloak app"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Administration Console")),(0,i.kt)("li",{parentName:"ol"},"Login with admin credentials (using ",(0,i.kt)("inlineCode",{parentName:"li"},"otomi-admin")," user and password provided in the installer log or the ",(0,i.kt)("inlineCode",{parentName:"li"},"otomi.adminPassword")," provided in the initial values)"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Otomi")," realm"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Users")," then ",(0,i.kt)("inlineCode",{parentName:"li"},"Add user")),(0,i.kt)("li",{parentName:"ol"},"Fill in a user name in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Username")," field"),(0,i.kt)("li",{parentName:"ol"},"Fill in your email address in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Email")," field"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Email verified")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Join Groups")),(0,i.kt)("li",{parentName:"ol"},"Add the user to the required group (Team)"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create")),(0,i.kt)("li",{parentName:"ol"},"Choose the ",(0,i.kt)("inlineCode",{parentName:"li"},"Credentials")," tab and then ",(0,i.kt)("inlineCode",{parentName:"li"},"Set password")),(0,i.kt)("li",{parentName:"ol"},"Fill in a password"),(0,i.kt)("li",{parentName:"ol"},"Optional: Make te password ",(0,i.kt)("inlineCode",{parentName:"li"},"Temporary"),". This requires the user to change the password at the first login"),(0,i.kt)("li",{parentName:"ol"},'Click on "Save"'),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save password"))))}m.isMDXComponent=!0}}]);