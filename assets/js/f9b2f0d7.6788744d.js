"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(y,l(l({ref:t},u),{},{components:n})):o.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={slug:"route-53",title:"Install Otomi using Route53 for DNS",sidebar_label:"Install with Route53"},l=void 0,s={unversionedId:"for-ops/how-to/install-with-dns-aws",id:"for-ops/how-to/install-with-dns-aws",title:"Install Otomi using Route53 for DNS",description:"Follow the following steps to install Otomi with DNS using AWS Route53",source:"@site/docs/for-ops/how-to/install-with-dns-aws.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/route-53",permalink:"/docs/for-ops/how-to/route-53",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/how-to/install-with-dns-aws.md",tags:[],version:"current",frontMatter:{slug:"route-53",title:"Install Otomi using Route53 for DNS",sidebar_label:"Install with Route53"},sidebar:"mainSidebar",previous:{title:"Use Core only",permalink:"/docs/for-ops/how-to/core-only"},next:{title:"Installation",permalink:"/docs/for-ops/cli/installation"}},i={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Follow the following steps to install Otomi with DNS using AWS Route53"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Register a domain and retrieve the Hosted zone ID"),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"dns-policy.json")," file for the policy and add the Zone ID:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "route53:GetChange",\n            "Resource": "arn:aws:route53:::change/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "route53:ChangeResourceRecordSets",\n                "route53:ListResourceRecordSets"\n            ],\n            "Resource": [\n                "arn:aws:route53:::hostedzone/<your-zone-id>"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "route53:ListHostedZonesByName",\n                "route53:ListHostedZones"\n            ],\n            "Resource": [\n                "*"\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create the policy:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'aws iam create-policy --policy-name "d5otomiDNS" --policy-document file://dns-policy.json\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"export the policy ARN:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export POLICY_ARN=$(aws iam list-policies --query 'Policies[?PolicyName==`<policy-name>`].Arn' --output text)\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a user:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"USER=user-name\naws iam create-user --user-name $USER\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Attach the user to the policy:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam attach-user-policy --user-name $USER --policy-arn $POLICY_ARN\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Create the ",(0,r.kt)("inlineCode",{parentName:"li"},"access-key"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SECRET_ACCESS_KEY=$(aws iam create-access-key --user-name $USER)\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Get the ",(0,r.kt)("inlineCode",{parentName:"li"},"secret-access-id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"secret-access-key"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<-EOF > $USER\naws_access_key_id = $(echo $SECRET_ACCESS_KEY | jq -r '.AccessKey.AccessKeyId')\naws_secret_access_key = $(echo $SECRET_ACCESS_KEY | jq -r '.AccessKey.SecretAccessKey')\nEOF\n")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Add the DNS configuration to the ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," to install Otomi:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'cluster:\n  k8sVersion: "1.25"\n  name: my-cluster # choose a name for your cluster\n  provider: your-provider\n  domainSuffix: your-domain.com # your domain name\notomi:\n  hasExternalDNS: true # required\ndns:\n  domainFilters: \n    - your-domain.com\n  provider:\n    aws:\n      credentials:\n        secretKey: aws_access_key_id\n        accessKey: aws_secret_access_key\n      region: eu-central-1 # your region\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@your-domain.net\n')),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Install Otomi:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\nhelm install -f values.yaml otomi otomi/otomi\n")))}p.isMDXComponent=!0}}]);