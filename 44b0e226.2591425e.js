(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(175)),r={slug:"installation/post-install-actions/",title:"Post install actions"},c={unversionedId:"post-install",id:"post-install",isDocsHomePage:!1,title:"Post install actions",description:"After installing Otomi, a couple of post install configuration actions are required. Follow these instructions:",source:"@site/docs/post-install.md",slug:"/installation/post-install-actions/",permalink:"/docs/installation/post-install-actions/",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/post-install.md",version:"current",sidebar:"mainSidebar",previous:{title:"Install with CLI",permalink:"/docs/installation/cli/"},next:{title:"Overview",permalink:"/docs/console/"}},l=[{value:"Sign in to the Otomi Console",id:"sign-in-to-the-otomi-console",children:[]},{value:"Activate Drone",id:"activate-drone",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"After installing Otomi, a couple of post install configuration actions are required. Follow these instructions:"),Object(i.b)("h3",{id:"sign-in-to-the-otomi-console"},"Sign in to the Otomi Console"),Object(i.b)("p",null,"Open the url in the browser of your choice ",Object(i.b)("inlineCode",{parentName:"p"},"https://otomi.<domainSuffix>"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"domainSuffix")," can be found in the ",Object(i.b)("inlineCode",{parentName:"p"},"values.yaml")," that was provided during installation."),Object(i.b)("p",null,"If Otomi is configured with OIDC (using Azure AD as an IDP), click on the right button (redkubes-azure in the example below). If you did not configure OIDC, log in with the default ",Object(i.b)("inlineCode",{parentName:"p"},"otomi-admin")," account and the password provided during installation."),Object(i.b)("p",null,Object(i.b)("img",{alt:"console-login",src:n(241).default})),Object(i.b)("p",null,"After you have successfully logged in, you will see the ",Object(i.b)("strong",{parentName:"p"},"Otomi Dashboard."),". To learn more about using Otomi Console, checkout ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/console"}),"Otomi Console")),Object(i.b)("p",null,Object(i.b)("img",{alt:"console-lading-page",src:n(242).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"console-apps",src:n(184).default})),Object(i.b)("h3",{id:"activate-drone"},"Activate Drone"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitea.io/en-us/"}),"Gitea")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.drone.io/"}),"Drone")," are an integral part of how Otomi cluster configurations are stored and updated. Click on the ",Object(i.b)("strong",{parentName:"p"},"Gitea")," app (under Platform/Otomi Apps) in the console. It will open a new browser tab and show the sign in page of Gitea. Sign in into with the default ",Object(i.b)("inlineCode",{parentName:"p"},"otomi-admin")," account."),Object(i.b)("p",null,Object(i.b)("img",{alt:"gitea-login",src:n(243).default})),Object(i.b)("p",null,"After sign in, it can take a couple of minutes before the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi/values")," repository becomes visible."),Object(i.b)("p",null,Object(i.b)("img",{alt:"gitea-values",src:n(244).default})),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"otomi/values")," repository holds the otomi cluster configuration and is updated whenever new changes occur through the console. Now head back to the console to activate Drone."),Object(i.b)("p",null,Object(i.b)("img",{alt:"console-apps",src:n(184).default})),Object(i.b)("p",null,"Click on the Drone app and it should open a new tab as shown below,"),Object(i.b)("p",null,Object(i.b)("img",{alt:"drone-landing",src:n(245).default})),Object(i.b)("p",null,"Select ",Object(i.b)("inlineCode",{parentName:"p"},"Activate"),", and then ",Object(i.b)("inlineCode",{parentName:"p"},"ACTIVATE REPOSITORY")),Object(i.b)("p",null,Object(i.b)("img",{alt:"drone-activate",src:n(246).default})),Object(i.b)("p",null,"Save the changes and you are good to go."),Object(i.b)("p",null,Object(i.b)("img",{alt:"drone-save",src:n(247).default})),Object(i.b)("p",null,"Now the final step is to create a Team. See the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/console/teams"}),"Teams"))," page for more information."))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(r,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},184:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console-apps-eed3320fa1754480a623287e0bbe2365.png"},241:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console-login-674f187bd93d1c7535335041aa140840.png"},242:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console-landing-page-515451f2df816a4eb939656ab5302b06.png"},243:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gitea-login-caa32a03bc2b8889c9cc6fcce33eea3a.png"},244:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gitea-values-b745166845de7fcba345726a846a143b.png"},245:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drone-landing-ec436af98acc3e7ebf02819bd04df0d2.png"},246:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drone-activate-d0cdfcda638a52092ce04000db3ba07e.png"},247:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drone-save-2f6f70cf0b764de14c0b811f6cd12c44.png"}}]);