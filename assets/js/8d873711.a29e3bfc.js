"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4211],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=s(n),d=a,m=v["".concat(c,".").concat(d)]||v[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"tutorials/create-knative-service",title:"Create a Knative service",sidebar_label:"Create a Knative service"},c=void 0,s={unversionedId:"tutorial-5-create-ksvc",id:"tutorial-5-create-ksvc",title:"Create a Knative service",description:"In this tutorial, you are going to deploy the image you build, tagged and pushed to harbor in the previous tutorial by creating a Knative service.",source:"@site/docs/tutorial-5-create-ksvc.md",sourceDirName:".",slug:"/tutorials/create-knative-service",permalink:"/docs/tutorials/create-knative-service",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-5-create-ksvc.md",tags:[],version:"current",frontMatter:{slug:"tutorials/create-knative-service",title:"Create a Knative service",sidebar_label:"Create a Knative service"},sidebar:"mainSidebar",previous:{title:"Create a K8s service",permalink:"/docs/tutorials/create-k8s-service"},next:{title:"Expose a service",permalink:"/docs/tutorials/expose-service"}},u={},p=[{value:"Activate Knative",id:"activate-knative",level:3},{value:"Create a Knative Service",id:"create-a-knative-service",level:3},{value:"Deploy the Knative Service",id:"deploy-the-knative-service",level:3}],v={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, you are going to deploy the image you build, tagged and pushed to harbor in the previous tutorial by creating a Knative service."),(0,i.kt)("h3",{id:"activate-knative"},"Activate Knative"),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Apps")," under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Platform")," section in the side menu and Drag and Drop ",(0,i.kt)("inlineCode",{parentName:"p"},"Knative")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Disabled apps")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Enabled apps")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy Changes")," in the left menu."),(0,i.kt)("h3",{id:"create-a-knative-service"},"Create a Knative Service"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"hello-ksvc.yaml")," file and copy/paste the following Kubernetes manifests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: hello-ksvc\nspec:\n  template:\n    metadata:\n      annotations:\n        autoscaling.knative.dev/minScale: '1'\n        policy.otomi.io/ignore-sidecar: container-limits,psp-allowed-users\n    spec:\n      containers:\n        - image: harbor.<your-ip>.nip.io/team-demo/hello-world:demo\n          securityContext:\n            runAsUser: 1001\n")),(0,i.kt)("h3",{id:"deploy-the-knative-service"},"Deploy the Knative Service"),(0,i.kt)("p",null,"If you haven't done already, first set your kubectl context:"),(0,i.kt)("p",null,"In Otomi console, select team ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," in the top bar. On the bottom of the left panel, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"download KUBECFG"),"."),(0,i.kt)("p",null,"Now export the KUBECFG to set the kubectl context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=$path-to-your-kubeconfig.yaml\n")),(0,i.kt)("p",null,"And apply the manifest to Kubernetes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f hello-ksvc.yaml\n")),(0,i.kt)("p",null,"Check if the Knative service has been created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe ksvc hello-ksvc\n")))}d.isMDXComponent=!0}}]);