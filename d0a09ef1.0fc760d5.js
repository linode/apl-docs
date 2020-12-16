(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(123)),i={slug:"installation/deployment",title:"Deployment"},l={unversionedId:"inst-deployment",id:"inst-deployment",isDocsHomePage:!1,title:"Deployment",description:"1. Bootstrapping",source:"@site/docs/inst-deployment.md",slug:"/installation/deployment",permalink:"/docs/installation/deployment",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/inst-deployment.md",version:"current",sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/docs/installation/configuration"},next:{title:"Console Overview",permalink:"/docs/console/"}},c=[{value:"1. Bootstrapping",id:"1-bootstrapping",children:[]},{value:"2. Deploying with the cli",id:"2-deploying-with-the-cli",children:[{value:"Charted vs uncharted resources",id:"charted-vs-uncharted-resources",children:[]},{value:"Working with uncharted resources",id:"working-with-uncharted-resources",children:[]},{value:"Working with charted resources",id:"working-with-charted-resources",children:[]},{value:"Need to know quirks",id:"need-to-know-quirks",children:[]}]},{value:"3. GitOps syncing (optional)",id:"3-gitops-syncing-optional",children:[]},{value:"4. Committing values",id:"4-committing-values",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-bootstrapping"},"1. Bootstrapping"),Object(r.b)("p",null,"Otomi works with versioned tooling that is compatible with the target cluster, so it needs to be told which cloud and cluster to operate on. The ",Object(r.b)("inlineCode",{parentName:"p"},"$CLOUD")," and ",Object(r.b)("inlineCode",{parentName:"p"},"$CLUSTER")," environment variables are used to specify the cloud and cluster you wish to target. As you learned in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration"}),"configuration")," section, the main cluster configuration is stored in ",Object(r.b)("inlineCode",{parentName:"p"},"env/clusters.yaml"),", and env variables in ",Object(r.b)("inlineCode",{parentName:"p"},"env/clouds/$CLOUD/$CLUSTER/.env"),"."),Object(r.b)("p",null,"In the demo values all the clusters are disabled, except ",Object(r.b)("inlineCode",{parentName:"p"},"google/demo")," (which is the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," of the cluster). In order to target it set the variables:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export CLOUD=google CLUSTER=demo\n")),Object(r.b)("p",null,"This will load the cluster's env file and export the variable ",Object(r.b)("inlineCode",{parentName:"p"},"$K8S_CONTEXT")," which represents a context in your ",Object(r.b)("inlineCode",{parentName:"p"},"$KUBECONFIG")," file. Make sure it is correctly set in ",Object(r.b)("inlineCode",{parentName:"p"},"env/clouds/$CLOUD/$CLUSTER/.env"),". In case you used our ",Object(r.b)("inlineCode",{parentName:"p"},"bin/create-gke-cluster.sh")," script to start a GKE cluster it will be correct and have the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'export K8S_CONTEXT="otomi-gke-demo"\n')),Object(r.b)("p",null,"We can now bootstrap the versioned artifacts for our target cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi bootstrap\n")),Object(r.b)("h2",{id:"2-deploying-with-the-cli"},"2. Deploying with the cli"),Object(r.b)("h3",{id:"charted-vs-uncharted-resources"},"Charted vs uncharted resources"),Object(r.b)("p",null,"The output manifests generated by otomi are deployed in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Uncharted: some base manifests are applied directly with ",Object(r.b)("inlineCode",{parentName:"li"},"kubectl apply")),Object(r.b)("li",{parentName:"ul"},"Charted: manfests that are packaged up in helm charts.")),Object(r.b)("p",null,"Ideally, we would like to deploy as helm chart as it has ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.google.nl/search?q=benefits+of+helm+chart"}),"many benefits")," such as rollback. But in some cases we can't or we don't wish to. The reasons for that are the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Some resources we don't want governed by charts (as charts might get accidentally removed, erasing everything that was deployed with it)."),Object(r.b)("li",{parentName:"ol"},"Some existing resources have to be patched (like pull secrets in service accounts), which helmfile won't do as it will not modify existing resources not annotated to be under control by a chart."),Object(r.b)("li",{parentName:"ol"},"Some resources need to exist before the charts are deployed (such as CRDs).")),Object(r.b)("p",null,"The manifests that are currently not charted are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"k8s/base")," (unparameterized, mostly rbac roles)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"values/cloud"),' (applies cloud specific "normalization" patterns, such as for storageclasses)'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"values/k8s")," (team resources, such as namespaces, service accounts, pull secrets)")),Object(r.b)("h3",{id:"working-with-uncharted-resources"},"Working with uncharted resources"),Object(r.b)("p",null,"Currently we don't have any subcommand that only works on uncharted resources, but we have the following commands that target the entire bundle."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"otomi test"),": does a dry run, showing all manifests that will be deployed, and will also show any errors in the output manifests."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"otomi deploy"),": deploys all the manifests (uncharted first, then charted)")),Object(r.b)("p",null,"So after doing ",Object(r.b)("inlineCode",{parentName:"p"},"otomi test"),", if all looks ok, go ahead and do the initial deployment of all resources:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi deploy\n")),Object(r.b)("p",null,"This command executes two stages (please see ",Object(r.b)("inlineCode",{parentName:"p"},"bin/deploy.sh"),"). The first stage will deploy all uncharted resources with ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply"),", and the second stage will deploy all the charted resources with ",Object(r.b)("inlineCode",{parentName:"p"},"helmfile apply"),"."),Object(r.b)("p",null,"Whenever you add a team, or change or add to these uncharted resources, you have to run ",Object(r.b)("inlineCode",{parentName:"p"},"otomi deploy")," to apply them. When you let Drone do the syncing for you, it will invoke that command to synchronize the cluster."),Object(r.b)("h3",{id:"working-with-charted-resources"},"Working with charted resources"),Object(r.b)("p",null,"During development iterations you will probably not touch uncharted resources often, but instead you will add features in charts."),Object(r.b)("p",null,"Otomi has these subcommands that only target charted resources:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi (diff|apply|sync|template)\n")),Object(r.b)("p",null,"You can always target a single chart like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi (diff|apply|sync|template) -l name=prometheus-operator\n")),Object(r.b)("p",null,"(For a list of all supported flags to use those subcommands, we defer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/roboll/helmfile"}),"helmfile documentation"),", as those are deferred to the helmfile cli.)"),Object(r.b)("p",null,"Let's do a diff of all the charts that are enabled:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi diff\n")),Object(r.b)("h3",{id:"need-to-know-quirks"},"Need to know quirks"),Object(r.b)("p",null,"Whenever you modify resources without using helm, its internal bookkeeping (the versioned secrets in the namespaces) will not change, and any subsequent ",Object(r.b)("inlineCode",{parentName:"p"},"otomi apply")," commands will not modify anything. If you notice this, and want to overwrite with the output manifests, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"otomi sync"),", which will skip doing a diff, and instead apply all charted manifests as a new version."),Object(r.b)("h2",{id:"3-gitops-syncing-optional"},"3. GitOps syncing (optional)"),Object(r.b)("p",null,"After initial deployment, to enable Continuous Deployment of this repo from within Drone (running in the cluster), for each cluster:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to Drone and activate the values repo to sync with: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://drone.demo.gke.yourdoma.in/"}),"https://drone.demo.gke.yourdoma.in/")),Object(r.b)("li",{parentName:"ol"},"Choose the drone pipeline file to use: ",Object(r.b)("inlineCode",{parentName:"li"},".env/clouds/(azure|google|aws|onprem)/$CLUSTER/.drone.yml")," and press save."),Object(r.b)("li",{parentName:"ol"},"(Optional) Configure the encryption related secrets as referred to in the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"configuration"}),"configuration")," section:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Google KMS: Set ",Object(r.b)("inlineCode",{parentName:"li"},"GCLOUD_SERVICE_KEY")," with the contents of the service account json file."),Object(r.b)("li",{parentName:"ul"},"Aws KMS: Set ",Object(r.b)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," and ",Object(r.b)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," to an account that has access."),Object(r.b)("li",{parentName:"ul"},"Azure: provide ",Object(r.b)("inlineCode",{parentName:"li"},"AZURE_TENANT_ID"),", ",Object(r.b)("inlineCode",{parentName:"li"},"AZURE_CLIENT_ID"),", ",Object(r.b)("inlineCode",{parentName:"li"},"AZURE_CLIENT_SECRET")," and ",Object(r.b)("inlineCode",{parentName:"li"},"AZURE_ENVIRONMENT"),".")))),Object(r.b)("p",null,"Sync is now live, and every git change in the values repo is applied by each cluster's Drone."),Object(r.b)("h2",{id:"4-committing-values"},"4. Committing values"),Object(r.b)("p",null,"When you are not using Otomi Enterprise Edition, or are doing development, you will operate on values directly and have to commit them manually:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi commit\n")),Object(r.b)("p",null,'This will detect any version changes and generate new Drone pipelines, and then commit all files with a standardized message "Manual commit". (We believe all values repo configuration changes are equally meaningful and don\'t need explicit commit messages.) Directly doing a ',Object(r.b)("inlineCode",{parentName:"p"},"git commit")," is discouraged with a git hook saying so, but whenever you did not touch any versions in ",Object(r.b)("inlineCode",{parentName:"p"},"env/clusters.yaml")," you may bypass with ",Object(r.b)("inlineCode",{parentName:"p"},'git commit -m "Manual commit" --no-verify')," to save development time."),Object(r.b)("p",null,"This will then trigger the pipeline of any ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://drone.demo.gke.yourdoma.in/"}),"configured Drone")," (if you followed the previous step)."))}b.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(h,l(l({ref:t},s),{},{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);