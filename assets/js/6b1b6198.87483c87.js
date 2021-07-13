(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[6795],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(a),d=o,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5381:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(2122),o=a(9756),l=(a(7294),a(3905)),r=["components"],i={slug:"ce/teams",title:"Configuring Teams in CE mode",sidebar_label:"Teams"},s={unversionedId:"ce-configure-teams",id:"ce-configure-teams",isDocsHomePage:!1,title:"Configuring Teams in CE mode",description:"When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to commit them manually. Before you can start creating Services, Jobs and Secrets, you first need to create a Team. Follow these steps to create a team after deploying Otomi CE:",source:"@site/docs/ce-configure-teams.md",sourceDirName:".",slug:"/ce/teams",permalink:"/docs/ce/teams",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ce-configure-teams.md",version:"current",sidebar_label:"Teams",frontMatter:{slug:"ce/teams",title:"Configuring Teams in CE mode",sidebar_label:"Teams"},sidebar:"mainSidebar",previous:{title:"CE Overview",permalink:"/docs/ce/"},next:{title:"Configuring Services in CE mode",permalink:"/docs/ce/services"}},m=[{value:"Install Otomi CLI (optional)",id:"install-otomi-cli-optional",children:[]},{value:"Pull the values",id:"pull-the-values",children:[]},{value:"Bootstap the values (optional)",id:"bootstap-the-values-optional",children:[]},{value:"Change the values",id:"change-the-values",children:[{value:"1. Modify the teams.yaml",id:"1-modify-the-teamsyaml",children:[]},{value:"2. Create the team files",id:"2-create-the-team-files",children:[]}]},{value:"validate changes (optional)",id:"validate-changes-optional",children:[]},{value:"Apply changes",id:"apply-changes",children:[]}],c={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to commit them manually. Before you can start creating Services, Jobs and Secrets, you first need to create a Team. Follow these steps to create a team after deploying Otomi CE:"),(0,l.kt)("h2",{id:"install-otomi-cli-optional"},"Install Otomi CLI (optional)"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/cli"},"here")," to install Otomi CLI."),(0,l.kt)("h2",{id:"pull-the-values"},"Pull the values"),(0,l.kt)("p",null,"Clone the ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi/values")," repository from ",(0,l.kt)("inlineCode",{parentName:"p"},"gitea.<your.domain>/otomi/values")," (if not already done)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitea.<your.domain>/otomi/values.git\n")),(0,l.kt)("h2",{id:"bootstap-the-values-optional"},"Bootstap the values (optional)"),(0,l.kt)("p",null,"First bootstap the local values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otomi bootstap\n")),(0,l.kt)("p",null,"This will also add a .vscode folder with Otomi extentions for autocompletion."),(0,l.kt)("h2",{id:"change-the-values"},"Change the values"),(0,l.kt)("p",null,"To create a team, follow these steps:"),(0,l.kt)("h3",{id:"1-modify-the-teamsyaml"},"1. Modify the teams.yaml"),(0,l.kt)("p",null,"Add the team to the ",(0,l.kt)("inlineCode",{parentName:"p"},"values/env/teams.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"teamConfig:\n  teams:\n    <team-name>:\n      id: <team-name>\n")),(0,l.kt)("h3",{id:"2-create-the-team-files"},"2. Create the team files"),(0,l.kt)("p",null,"Add the following 3 files:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"external-secrets.<team-name>.yaml")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"jobs.<team-name>.yaml")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"services.<team-name>.yaml"))),(0,l.kt)("p",null,"Each file should contain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"{}\n")),(0,l.kt)("h2",{id:"validate-changes-optional"},"validate changes (optional)"),(0,l.kt)("p",null,"When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otomi validate-values\n")),(0,l.kt)("p",null,"Use -v to get more output"),(0,l.kt)("p",null,"When successful, the output will show: ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi:validate-values:verbose Values validation SUCCESSFUL")),(0,l.kt)("h2",{id:"apply-changes"},"Apply changes"),(0,l.kt)("p",null,"Commit and push the changes using Otomi CLI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otomi apply\n")),(0,l.kt)("p",null,"And then (optionally) commit and push the changes to git:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'otomi commit -m "your commit comment" --no-verify\n')),(0,l.kt)("p",null,"Note: use the default ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi-admin")," account and the provided adminpassword (see ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets.settings.yaml.dec"),")."),(0,l.kt)("p",null,'A first commit will automatically generate a Drone pipeline configuration, and then commit all files with a standardized message "Manual commit".'))}u.isMDXComponent=!0}}]);