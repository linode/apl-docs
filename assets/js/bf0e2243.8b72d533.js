"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1313],{9794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151);const r={slug:"create-repos",title:"Create a private Git repo",sidebar_label:"Create GIT repos"},o=void 0,l={id:"get-started/labs/create-repos",title:"Create a private Git repo",description:"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, you can use the integrated Git service.",source:"@site/docs/get-started/labs/create-repos.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/create-repos",permalink:"/docs/get-started/labs/create-repos",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/get-started/labs/create-repos.md",tags:[],version:"current",frontMatter:{slug:"create-repos",title:"Create a private Git repo",sidebar_label:"Create GIT repos"},sidebar:"mainSidebar",previous:{title:"Lab Prerequisites",permalink:"/docs/get-started/labs/lab-prerequisites"},next:{title:"Build Images",permalink:"/docs/get-started/labs/build-images"}},a={},c=[{value:"Using a Git client",id:"using-a-git-client",level:2},{value:"Create the private repository",id:"create-the-private-repository",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, you can use the integrated Git service."}),"\n",(0,i.jsx)(n.p,{children:"As a team member, you can create and manage your own repositories."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Team members first have to sign in to Gitea (using OpenID), after which they are automatically added to the correct team."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"otomi-admin"})," account is unable to login with OpenID, this account needs to login with the user/password login form."]})}),"\n",(0,i.jsxs)(n.p,{children:["In the labs we'll be using a Team called ",(0,i.jsx)(n.code,{children:"labs"})," and a user called ",(0,i.jsx)(n.code,{children:"labs-user"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"using-a-git-client",children:"Using a Git client"}),"\n",(0,i.jsx)(n.p,{children:"Gitea only supports HTTPS for Git authentication. To connect to Git using HTTPS you'll first need to add a password to your account in Gitea:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sign in to Gitea using OpenID."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on your account (top right) and then click ",(0,i.jsx)(n.code,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in a password in the ",(0,i.jsx)(n.code,{children:"Account"})," tab."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After adding a password, you can now authenticate using your username (labs-user) and the password created in Gitea."}),"\n",(0,i.jsx)(n.h2,{id:"create-the-private-repository",children:"Create the private repository"}),"\n",(0,i.jsx)(n.p,{children:"In the apps section in the console, you'll see an app called Gitea. Click on it."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(6242).Z+"",width:"3124",height:"1530"})}),"\n",(0,i.jsx)(n.p,{children:"Now follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Sign In"})," with OpenID."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(5737).Z+"",width:"2200",height:"1082"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"+ New Repository"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(9193).Z+"",width:"2926",height:"1224"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the name ",(0,i.jsx)(n.code,{children:"blue"})," for the repository."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"Make Repository Private"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"Initialize Repository"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Create Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Your repo is now ready to be used!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(8602).Z+"",width:"3002",height:"1302"})}),"\n",(0,i.jsx)(n.p,{children:"Add the following 2 files to the repository:"}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Dockerfile",children:"FROM nginxinc/nginx-unprivileged:stable\nCOPY blue.html /usr/share/nginx/html/index.html\nEXPOSE 8080\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"blue.html"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Sample Deployment</title>\n    <style>\n      body {\n        color: #ffffff;\n        background-color: blue;\n        font-family: Arial, sans-serif;\n        font-size: 14px;\n      }\n      h1 {\n        font-size: 500%;\n        font-weight: normal;\n        margin-bottom: 0;\n      }\n      h2 {\n        font-size: 200%;\n        font-weight: normal;\n        margin-bottom: 0;\n      }\n      .centered-text {\n          text-align: center;\n      }\n    </style>\n  </head>\n  <body>\n  <div class="centered-text">\n      <h1>Welcome to Blue</h1>\n  </div>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the following labs we are going to use the ",(0,i.jsx)(n.code,{children:"blue"})," repository, but we'll also need a ",(0,i.jsx)(n.code,{children:"green"})," repository.\nCreate the ",(0,i.jsx)(n.code,{children:"green"})," repository and add the 2 files, but change ",(0,i.jsx)(n.code,{children:"blue"})," into ",(0,i.jsx)(n.code,{children:"green"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"+ New Repository"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the name ",(0,i.jsx)(n.code,{children:"green"})," for the repository."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Optional: Enable ",(0,i.jsx)(n.code,{children:"Initialize Repository"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make Repository Private."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Create Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Add the following 2 files to the repository:"}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Dockerfile",children:"FROM nginxinc/nginx-unprivileged:stable\nCOPY green.html /usr/share/nginx/html/index.html\nEXPOSE 8080\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"green.html"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Sample Deployment</title>\n    <style>\n      body {\n        color: #ffffff;\n        background-color: green;\n        font-family: Arial, sans-serif;\n        font-size: 14px;\n      }\n      h1 {\n        font-size: 500%;\n        font-weight: normal;\n        margin-bottom: 0;\n      }\n      h2 {\n        font-size: 200%;\n        font-weight: normal;\n        margin-bottom: 0;\n      }\n      .centered-text {\n          text-align: center;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="centered-text">\n      <h1>Welcome to Green</h1>\n    </div>\n  </body>\n</html>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5737:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/gitea-openid-dca1d73e3512321edcd5fc9a3c290cb0.png"},8602:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-gitea-repo-ready-263e35893562092e57d84bfa588e8fef.png"},9193:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-gitea-repo-ae8b4ad9ecc7436acffaade0a79585d6.png"},6242:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/team-app-gitea-668891a94451284ad62d1634796bc8bc.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);