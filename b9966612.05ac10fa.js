(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(188)),c={slug:"tutorials/create-k8s-svc",title:"Create a Kubernetes service",sidebar_label:"Create a K8s service"},i={unversionedId:"tutorial-2",id:"tutorial-2",isDocsHomePage:!1,title:"Create a Kubernetes service",description:"In this tutorial, we are going to deploy the image we build , tagged and pushed to harbor in the previous tutorial by creating a Kubernetes deployment to rollout a ReplicaSet and by creating a Kubernetes Service.",source:"@site/docs/tutorial-2.md",slug:"/tutorials/create-k8s-svc",permalink:"/docs/tutorials/create-k8s-svc",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-2.md",version:"current",sidebar_label:"Create a K8s service",sidebar:"mainSidebar",previous:{title:"Build, tag and push an image to Harbor",permalink:"/docs/tutorials/build-tag-push"},next:{title:"Publicly expose an existing Kubernetes service with Otomi",permalink:"/docs/tutorials/expose-service"}},l=[{value:"Create a Kubernetes Deployment and Service",id:"create-a-kubernetes-deployment-and-service",children:[{value:"Create the deployment and service",id:"create-the-deployment-and-service",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this tutorial, we are going to deploy the image we build , tagged and pushed to harbor in the previous tutorial by creating a Kubernetes deployment to rollout a ReplicaSet and by creating a Kubernetes Service. "),Object(o.b)("h2",{id:"create-a-kubernetes-deployment-and-service"},"Create a Kubernetes Deployment and Service"),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"hello-svc.yaml")," file and copy/paste the following 2 Kubernetes manifests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-svc\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-svc\n  template:\n    metadata:\n      annotations:\n        policy.otomi.io/ignore-sidecar: container-limits,psp-allowed-users\n      labels:\n        app: hello-svc\n    spec:\n      containers:\n      - name: hello-svc\n        image: harbor.your-domain.com/team-demo/hello-world:latest\n        resources:\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n        securityContext:\n          runAsUser: 1001\n        ports:\n        - containerPort: 8080 \n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-svc\nspec:\n  selector:\n    app: hello-svc\n  ports:\n  - port: 80\n    targetPort: 8080\n')),Object(o.b)("h3",{id:"create-the-deployment-and-service"},"Create the deployment and service"),Object(o.b)("p",null,"In Otomi console, select team ",Object(o.b)("inlineCode",{parentName:"p"},"demo")," in the top bar. On the bottom of the left panel, click on ",Object(o.b)("inlineCode",{parentName:"p"},"download KUBECFG"),"."),Object(o.b)("p",null,"Now export the KUBECFG to set the kubectl context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"export KUBECONFIG=$path-to-your-kubeconfig.yaml\n")),Object(o.b)("p",null,"And apply the manifest to Kubernetes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl apply -f hello-svc.yaml\n")),Object(o.b)("p",null,"Check to see if the pod is running and the service has been created:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get pod\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe svc hello\n")))}p.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);