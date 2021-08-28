(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(176)),i={slug:"sre/known-issues/cli",title:"Known Issues: Current Otomi CLI",sidebar_label:"Otomi CLI"},l={unversionedId:"ki-cli",id:"ki-cli",isDocsHomePage:!1,title:"Known Issues: Current Otomi CLI",description:"The otomi (diff|apply|sync|template) commands are delegated to helmfile, which in turn delegates the deployment work to helm. Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section.",source:"@site/docs/ki-cli.md",slug:"/sre/known-issues/cli",permalink:"/docs/sre/known-issues/cli",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ki-cli.md",version:"current",sidebar_label:"Otomi CLI",sidebar:"mainSidebar",previous:{title:"Known Issues",permalink:"/docs/sre/known-issues/"},next:{title:"Known Issues: Harbor",permalink:"/docs/sre/known-issues/harbor"}},s=[{value:"State drift",id:"state-drift",children:[]},{value:"Deployment errors/problems",id:"deployment-errorsproblems",children:[{value:"1. It can&#39;t deploy a resource when it already exists",id:"1-it-cant-deploy-a-resource-when-it-already-exists",children:[]},{value:"2. Release&#39;s latest state is failed",id:"2-releases-latest-state-is-failed",children:[]},{value:"3. Some resources couldn&#39;t be patched",id:"3-some-resources-couldnt-be-patched",children:[]},{value:"4. Timeout",id:"4-timeout",children:[]},{value:"5. It can&#39;t deploy when another operation is in progress",id:"5-it-cant-deploy-when-another-operation-is-in-progress",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"otomi (diff|apply|sync|template)")," commands are delegated to ",Object(o.b)("inlineCode",{parentName:"p"},"helmfile"),", which in turn delegates the deployment work to ",Object(o.b)("inlineCode",{parentName:"p"},"helm"),". Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section."),Object(o.b)("h2",{id:"state-drift"},"State drift"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Problem"),": ",Object(o.b)("inlineCode",{parentName:"p"},"otomi apply")," does not seem to change resources."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution"),": try ",Object(o.b)("inlineCode",{parentName:"p"},"otomi sync")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Background info"),":"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"otomi apply")," command uses helmfile's ",Object(o.b)("inlineCode",{parentName:"p"},"apply")," command, which combines its ",Object(o.b)("inlineCode",{parentName:"p"},"diff")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," commandds. So it first does a ",Object(o.b)("inlineCode",{parentName:"p"},"helmfile diff")," against helm's bookeeping (which resides in versioned secrets, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"sh.helm.release.v1.loki.v1"),"). This is the most cost effective way and does not lead to a new release version being deployed when there are no changes. However, when you changed cluster resources without the otomi cli (so without using helm) this is not reflected in the secrets. ",Object(o.b)("inlineCode",{parentName:"p"},"helmfile diff")," will not see any changes in the secret, so it won't execute the subsequent ",Object(o.b)("inlineCode",{parentName:"p"},"helmfile sync"),". If you wish to overwrite the desired state on the cluster, use the ",Object(o.b)("inlineCode",{parentName:"p"},"otomi sync -l name=$releaseName")," command directly. Usually only for a certain release, so you don't force change all the releases, which costs a lot of time."),Object(o.b)("h2",{id:"deployment-errorsproblems"},"Deployment errors/problems"),Object(o.b)("p",null,"Helmfile uses Helm 3 under the hood, and it will throw errors in certain situations:"),Object(o.b)("h3",{id:"1-it-cant-deploy-a-resource-when-it-already-exists"},"1. It can't deploy a resource when it already exists"),Object(o.b)("p",null,"When a resource already exists and was not deployed with the chart before (alien to Helm), it is possible to 'adopt' the resource beforehand by labeling and annotating them correctly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"k -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-name=$RELEASE\nk -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-namespace=$NAMESPACE\nk -n $NS label --overwrite $KIND $NAME app.kubernetes.io/managed-by=Helm\n")),Object(o.b)("p",null,"This functionality exists in the stack in ",Object(o.b)("inlineCode",{parentName:"p"},"bin/upgrades/adopt-by-helm.sh"),", and is used in the upgrade scripts."),Object(o.b)("h3",{id:"2-releases-latest-state-is-failed"},"2. Release's latest state is failed"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'Error: "$releaseName" has no deployed releases')),Object(o.b)("p",null,"This may happen when you try to install a chart (usually for the first time) and it fails. This results in the release's deployment having state 'failed'."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When this was the first install: destroy with ",Object(o.b)("inlineCode",{parentName:"li"},"otomi destroy -l name=$releaseName")," and then apply with ",Object(o.b)("inlineCode",{parentName:"li"},"otomi apply -l name=$releaseName")," again."),Object(o.b)("li",{parentName:"ul"},"When it was successfully deployed before: remove the last versioned helm secret that is causing the blockage (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"sh.helm.release.v1.loki.v3"),")")),Object(o.b)("h3",{id:"3-some-resources-couldnt-be-patched"},"3. Some resources couldn't be patched"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Error: UPGRADE FAILED: failed to replace object: ... field is immutable")),Object(o.b)("p",null,"This usually happens when a manifest is not allowed to be patched in place and needs to be replaced. Retry the borking release with ",Object(o.b)("inlineCode",{parentName:"p"},"otomi apply -l name=$releaseName --extraArgs='--force=true'")," which does exactly that."),Object(o.b)("h3",{id:"4-timeout"},"4. Timeout"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Problem"),": Sometimes the otomi cli will time out when operating on a Google cluster."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cause"),": This happens when the containerized kubectl binary wants to refresh an access token, but it can't find the binary that was registered to do so in the otomi docker container."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Workaround"),": Retry the command. Before every invocation with the containerized ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," binary, otomi cli first runs ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl version")," with the local binary to invoke a token refresh, resulting in an up-to-date config to mount."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Background"),":"),Object(o.b)("p",null,"The otomi cli is a docker container with all the binaries it needs to deploy to these clusters. When running a command the local cloud configs are mounted. These configs may contain configuration for token refresh mechanisms, including the name of a binary to execute with certain parameters. This makes it possible to include the binaries in the image, and make them available via the known ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(o.b)("p",null,"However, Google Cloud SDK breaks with that approach, by tightly coupling a hard path to the local gcloud binary. Sample user section from ",Object(o.b)("inlineCode",{parentName:"p"},"$KUBECONFIG"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"- name: gke_otomi-cloud_europe-west4_otomi-gke-demo\n  user:\n    auth-provider:\n      config:\n        access-token: xxxxxxxxx\n        cmd-args: config config-helper --format=json\n        cmd-path: /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/gcloud\n        expiry: '2020-10-29T02:15:37Z'\n        expiry-key: '{.credential.token_expiry}'\n        token-key: '{.credential.access_token}'\n      name: gcp\n")),Object(o.b)("p",null,"This will not work with containerization unfortunately. We also can't predict the path on the users host computer to this binary, so we have to hope for Google to fix this some day. They are not inclined to do so it seems:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://issuetracker.google.com/issues/171493249"}),"https://issuetracker.google.com/issues/171493249")),Object(o.b)("p",null,"Maybe they will start to see the importance of this after getting more feedback ;)"),Object(o.b)("h3",{id:"5-it-cant-deploy-when-another-operation-is-in-progress"},"5. It can't deploy when another operation is in progress"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Problem"),": The ",Object(o.b)("inlineCode",{parentName:"p"},"otomi apply")," or ",Object(o.b)("inlineCode",{parentName:"p"},"otomi sync")," command fails with the following error:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Error: UPGRADE FAILED: another operation (install/upgrade/rollback) is in progress\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cause"),": A given helm release is in ",Object(o.b)("inlineCode",{parentName:"p"},"pending-upgrade")," state, e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"NAME      NAMESPACE    REVISION    UPDATED                 STATUS     CHART      APP VERSION\nkeycloak    keycloak    3        2021-03-22 13:50:22.5069506 +0000 UTC  pending-upgrade keycloak-8.2.2 10.0.0\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution"),": Find helm release that is in the ",Object(o.b)("inlineCode",{parentName:"p"},"pending-upgrade")," state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"helm list -a -A | grep -i pending\n")),Object(o.b)("p",null,"If there is a helm release in the ",Object(o.b)("inlineCode",{parentName:"p"},"pending")," state AND it has more than one revision, then rollback to the previous revision:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"helm -n <namespace> rollback <release-name> <previous revision number>\n")),Object(o.b)("p",null,"Otherwise, if there is a helm release in the state ",Object(o.b)("inlineCode",{parentName:"p"},"pending")," AND it has only one revision, then remove that release:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"helm uninstall -n <namespace> rollback <release-name>\n")))}p.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);