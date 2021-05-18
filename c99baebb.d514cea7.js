(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(128)),r={slug:"installation/setup",title:"Setup"},c={unversionedId:"inst-setup",id:"inst-setup",isDocsHomePage:!1,title:"Setup",description:"1. Initialize a values repo",source:"@site/docs/inst-setup.md",slug:"/installation/setup",permalink:"/docs/installation/setup",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/inst-setup.md",version:"current",sidebar:"mainSidebar",previous:{title:"Prerequisites",permalink:"/docs/installation/prerequisites"},next:{title:"Configuration",permalink:"/docs/installation/configuration"}},s=[{value:"1. Initialize a values repo",id:"1-initialize-a-values-repo",children:[]},{value:"2. Customize configuration",id:"2-customize-configuration",children:[]},{value:"3. Configure credentials from a KMS (optional)",id:"3-configure-credentials-from-a-kms-optional",children:[]},{value:"3 Start Otomi Console on your local machine (optional)",id:"3-start-otomi-console-on-your-local-machine-optional",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-initialize-a-values-repo"},"1. Initialize a values repo"),Object(i.b)("p",null,"Otomi needs a git repo to store its configuration. We call it a ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"values"))," repo."),Object(i.b)("p",null,"You can now bootstrap the versioned artifacts for aws/azure/google profile. In the following example values for azure"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"profile='azure'\n# initialize git repo\nmkdir otomi-values && cd $_ && git init .\n# and get all the files\ndocker run --rm -e ENV_DIR=$PWD -v $PWD:$PWD otomi/core:latest bin/bootstrap.sh $profile\n# and source the aliases including the otomi cli\n. bin/aliases\n")),Object(i.b)("p",null,"This will install the value files, but also the needed artifacts, such as the Otomi CLI. Lastly, it sources aliases you can use, such as the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi")," cli (which is an alias to the imported ",Object(i.b)("inlineCode",{parentName:"p"},"bin/otomi"),")."),Object(i.b)("h2",{id:"2-customize-configuration"},"2. Customize configuration"),Object(i.b)("p",null,"As you learned in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"configuration"}),"configuration")," section, the essential otomi platform configurations are stored in ",Object(i.b)("inlineCode",{parentName:"p"},"env/cluster.yaml"),", ",Object(i.b)("inlineCode",{parentName:"p"},"env/settings.yaml")," and ",Object(i.b)("inlineCode",{parentName:"p"},"env/secrets.settings.yaml")," files. Inspect them and customize values to much your environment."),Object(i.b)("p",null,"The environment variables are defined ",Object(i.b)("inlineCode",{parentName:"p"},"env/.env")," file, where:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"K8S_CONTEXT")," indicates a kubernetes context name to be used with otomi CLI")),Object(i.b)("h2",{id:"3-configure-credentials-from-a-kms-optional"},"3. Configure credentials from a KMS (optional)"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"No encryption needed?")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you don't need encryption straight away please continue to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#3-start-otomi-console-on-your-local-machine-optional"}),"next step")))),Object(i.b)("p",null,"Otomi will encrypt any ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.*.yaml")," files with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mozilla/sops"}),"sops"),", but only if it finds a ",Object(i.b)("inlineCode",{parentName:"p"},".sops.yaml")," configuration file. (How to work with sops is not in scope of this documentation.)"),Object(i.b)("p",null,"In order to en-/decrypt the secrets in the values repo, the KMS configuration needs to be provided in ",Object(i.b)("inlineCode",{parentName:"p"},".sops.yaml"),". Examples are provided in ",Object(i.b)("inlineCode",{parentName:"p"},".sops.yaml.sample")," for the big 3 cloud KMS providers. Copy it, and then edit it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cp .sops.yaml.sample .sops.yaml\n")),Object(i.b)("p",null,"Now, these KMS endpoints also need credentials to access them. Your AWS profile is always pointed and loaded (make sure you have loaded the correct one that has access), but in case of Google KMS add the following to the ",Object(i.b)("inlineCode",{parentName:"p"},".secrets")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'export GCLOUD_SERVICE_KEY="YOUR_KEY_JSON_DATA_WITHOUT_NEWLINES"\n')),Object(i.b)("p",null,"Then you can run ",Object(i.b)("inlineCode",{parentName:"p"},"otomi bootstrap")," again, which will result in the creation of ",Object(i.b)("inlineCode",{parentName:"p"},"gcp-key.json"),", which is needed for sops to work locally, like when doing a ",Object(i.b)("inlineCode",{parentName:"p"},"git diff"),"."),Object(i.b)("p",null,"To allow ",Object(i.b)("inlineCode",{parentName:"p"},"git diff")," to show unencrypted values, you must register the sops diffing routine once with git. To register it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'git config diff.sopsdiffer.textconv "sops -d"\n')),Object(i.b)("p",null,"This only registers the sops differ, which is responsible for invoking sops. But sops still needs the credentials to the KMS service. Again, your AWS profile is always pointed and loaded, but in case of Google KMS you will need to point GOOGLE_APPLICATION_CREDENTIALS to the ",Object(i.b)("inlineCode",{parentName:"p"},"gcp-key.json")," file holding your account information:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export GOOGLE_APPLICATION_CREDENTIALS=$PWD/gcp-key.json\n")),Object(i.b)("p",null,"Now try a diff:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git diff\n")),Object(i.b)("h2",{id:"3-start-otomi-console-on-your-local-machine-optional"},"3 Start Otomi Console on your local machine (optional)"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Otomi Enterprise Edition license needed")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you have a license for Otomi EE you can run the console locally for initial configuration."))),Object(i.b)("p",null,"If you have not done so already, put the pullsecret you have been given in ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.settings.yaml")," under ",Object(i.b)("inlineCode",{parentName:"p"},"otomi.pullSecret"),". Also make sure the git details are correctly added to ",Object(i.b)("inlineCode",{parentName:"p"},"charts/*otomi-api.yaml"),". Remember that some providers like GitHub need an access token when MFA/2FA is turned on, so create one (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/settings/tokens"}),"https://github.com/settings/tokens"),") and provide that for ",Object(i.b)("inlineCode",{parentName:"p"},"password"),". At least the following values are expected:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"repoUrl: github.com/redkubes/otomi-values-demo.git\nemail: some@secret.value\nuser: somesecretvalue\npassword: somesecretvalue\n")),Object(i.b)("p",null,"Make sure these are correct and allowing access to the above initialized and pushed repository."),Object(i.b)("p",null,"Then bootstrap again and start the console:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi bootstrap\notomi console\n")),Object(i.b)("p",null,"The console allows for easy configuration of many settings but not all. Please continue to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"configuration"}),"Configuration")," section to read more about this."))}p.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);