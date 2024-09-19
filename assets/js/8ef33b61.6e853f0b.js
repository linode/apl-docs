"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1902],{5187:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(5893),a=s(1151);const r={slug:"dns",title:"DNS",sidebar_label:"DNS"},o=void 0,i={id:"get-started/installation/dns",title:"DNS",description:"The APL Builds and Projects features are NOT supported when APL is installed with minimal values. Install APL with DNS to use all APL features.",source:"@site/docs/get-started/installation/dns.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/dns",permalink:"/docs/get-started/installation/dns",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/dns.md",tags:[],version:"current",frontMatter:{slug:"dns",title:"DNS",sidebar_label:"DNS"},sidebar:"mainSidebar",previous:{title:"Helm",permalink:"/docs/get-started/installation/helm"},next:{title:"OIDC",permalink:"/docs/get-started/installation/oidc"}},l={},c=[{value:"Linode Domains",id:"linode-domains",level:2},{value:"Akamai EdgeDNS",id:"akamai-edgedns",level:2},{value:"AWS Route53",id:"aws-route53",level:2},{value:"Azure DNS",id:"azure-dns",level:2},{value:"Google Cloud Platform DNS",id:"google-cloud-platform-dns",level:2},{value:"DigitalOcean DNS",id:"digitalocean-dns",level:2},{value:"Cloudflare DNS",id:"cloudflare-dns",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The APL ",(0,t.jsx)(n.a,{href:"/docs/for-devs/console/builds",children:"Builds"})," and ",(0,t.jsx)(n.a,{href:"/docs/for-devs/console/projects",children:"Projects"})," features are NOT supported when APL is installed with minimal values. Install APL with DNS to use all APL features."]}),"\n",(0,t.jsx)(n.h2,{id:"linode-domains",children:"Linode Domains"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to learn about how to use Linode DNS Manager read the following tutorial: ",(0,t.jsx)(n.a,{href:"https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-dns-manager",children:"Get started with DNS Manager"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"When you create a domain in Linode, make sure to set the TTL of the SOA Record to 30 seconds:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click on your domain."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on the tree dots on the right of the SOA Record and click ",(0,t.jsx)(n.code,{children:"edit"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change the default TTL to ",(0,t.jsx)(n.code,{children:"30 seconds"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.code,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Create a new Personal Access Token with Read/Write access for Domains:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Go to your profile on the top right."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.code,{children:"API Tokens"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.code,{children:"Create A Personal Access Token"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add a ",(0,t.jsx)(n.code,{children:"Label"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the desired ",(0,t.jsx)(n.code,{children:"Expiry"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.code,{children:"No Access"})," for all."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.code,{children:"Read/Write"})," for ",(0,t.jsx)(n.code,{children:"Domains"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.code,{children:"Create Token"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy your Personal Access Token."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set environment variable for the token:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'LINODE_TOKEN="<your-personal-access-token>"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"11",children:["\n",(0,t.jsx)(n.li,{children:"Create the values.yaml file"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the DNS configuration created in the previous step, the ",(0,t.jsx)(n.code,{children:"domainSuffix"}),", ",(0,t.jsx)(n.code,{children:"domainFilters"})," and ",(0,t.jsx)(n.code,{children:"email"})," to the ",(0,t.jsx)(n.code,{children:"values.yaml"})," that we'll use to install APL:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tee values.yaml<<EOF\ncluster:\n  name: $CLUSTER_NAME\n  provider: custom\n  domainSuffix: <your-domain>\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters: \n    - <your-domain>\n  provider:\n    linode:\n      apiToken: $LINODE_TOKEN\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@<your-domain>\nEOF\n"})}),"\n",(0,t.jsx)(n.h2,{id:"akamai-edgedns",children:"Akamai EdgeDNS"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to use Akamai EdgeDNS, provided that you have a registered domain."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note that the DNS entries can also be created using a ",(0,t.jsx)(n.a,{href:"https://github.com/akamai/cli-dns",children:"CLI"}),"; however, creating the client and credentials requires to use the UI (or the API directly)."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) Set up a group to manage the domain at the ",(0,t.jsx)(n.a,{href:"https://control.akamai.com/apps/identity-management/#/tabs/groups",children:'Akamai Control Center: ACCOUNT ADMIN > Identity & access > Tab "Groups"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['(Once for all domains) It is highly recommended to have a role restricted to DNS administration. If not already present, go to the "Roles" tab in ',(0,t.jsx)(n.a,{href:"https://control.akamai.com/apps/identity-management/#/tabs/roles",children:"Akamai Control Center"}),' create a role with permissions "Enhanced DNS - All privileges (add/edit/view)".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add a new zone in ",(0,t.jsx)(n.a,{href:"https://control.akamai.com/apps/authoritative-dns/#/zones",children:"DNS SOLUTIONS > EdgeDNS"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Click on "Add zone" (top right).'}),"\n",(0,t.jsx)(n.li,{children:"(Optional) Select the group from step 1."}),"\n",(0,t.jsx)(n.li,{children:'Set "Zone type": Primary'}),"\n",(0,t.jsx)(n.li,{children:'Enter the "Zone names", e.g. akamai.example.com'}),"\n",(0,t.jsx)(n.li,{children:'Click "Create zone"'}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Select "Add record sets" to create the default SOA and NS records.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Click "Review change list", then "Activate zone"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Go to the "Users and API Clients" tab in ',(0,t.jsx)(n.a,{href:"https://control.akamai.com/apps/identity-management/#/tabs/users/createClient",children:"Akamai Control Center: ACCOUNT ADMIN > Identity & access"}),', then select "Create API client"']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select Service account > Set API client options"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set name, description, and any other fields as needed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'"Select APIs": First "Reset API selection"; only set "DNS\u2014Zone Record Management" to "READ-WRITE"; then "Submit"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'"Select groups": For the group that was assigned to the domain in step 3, select the role from step 2 (or any other suitable existing role).'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'"Compare user permissions" if needed and check the box "I reviewed and acknowledge...", then "Create API client".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['In the new API client details, go to the "Credentials" section and click "Create credential". The values generated for ',(0,t.jsx)(n.code,{children:"client_secret"})," in this step will be visible only once. Either download or copy them directly into your values file. The values file should look similar to this, credentials to be replaced below:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"cluster:\n  name: $CLUSTER_NAME\n  provider: custom\n  domainSuffix: akamai.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters:\n    - akamai.example.com\n  provider:\n    akamai:\n      host: <host>\n      accessToken: <access_token>\n      clientToken: <client_token>\n      clientSecret: <client_secret>\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\n"})}),"\n",(0,t.jsx)(n.h2,{id:"aws-route53",children:"AWS Route53"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to use AWS Route53:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Register a domain and retrieve the Hosted zone ID"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"dns-policy.json"})," file for the policy and add the Zone ID:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "route53:GetChange",\n            "Resource": "arn:aws:route53:::change/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "route53:ChangeResourceRecordSets",\n                "route53:ListResourceRecordSets"\n            ],\n            "Resource": [\n                "arn:aws:route53:::hostedzone/<your-zone-id>"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "route53:ListHostedZonesByName",\n                "route53:ListHostedZones"\n            ],\n            "Resource": [\n                "*"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create the policy:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'aws iam create-policy --policy-name "apl-dns" --policy-document file://dns-policy.json\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"export the policy ARN:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export POLICY_ARN=$(aws iam list-policies --query 'Policies[?PolicyName==`<policy-name>`].Arn' --output text)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Create a user:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"USER=user-name\naws iam create-user --user-name $USER\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Attach the user to the policy:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws iam attach-user-policy --user-name $USER --policy-arn $POLICY_ARN\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsxs)(n.li,{children:["Create the ",(0,t.jsx)(n.code,{children:"access-key"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ACCESS_KEY=$(aws iam create-access-key --user-name $USER)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["Get the ",(0,t.jsx)(n.code,{children:"secret-access-id"})," and ",(0,t.jsx)(n.code,{children:"secret-access-key"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ACCESS_KEY_ID=$(echo $ACCESS_KEY | jq -r '.AccessKey.AccessKeyId')\nACCESS_KEY_SECRET=$(echo $ACCESS_KEY | jq -r '.AccessKey.SecretAccessKey')\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsx)(n.li,{children:"Create the values.yaml file"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get the API server endpoint. You can find the API server endpoint in the Details section of the cluster in the AWS console."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the DNS configuration created in the previous step, the API server endpoint, the ",(0,t.jsx)(n.code,{children:"domainSuffix"}),", ",(0,t.jsx)(n.code,{children:"domainFilters"}),", ",(0,t.jsx)(n.code,{children:"region"})," and ",(0,t.jsx)(n.code,{children:"email"})," to the ",(0,t.jsx)(n.code,{children:"values.yaml"})," that we'll use to install APL:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tee values.yaml<<EOF\ncluster:\n  name: $CLUSTER_NAME\n  provider: custom\n  region: your-region\n  apiName: api-server-endpoint\n  domainSuffix: your-domain.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters:\n    - your-domain.com\n  provider:\n    aws:\n      credentials:\n        secretKey: $ACCESS_KEY_ID\n        accessKey: $ACCESS_KEY_SECRET\n      region: your-region\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@your-domain.com\nEOF\n"})}),"\n",(0,t.jsx)(n.h2,{id:"azure-dns",children:"Azure DNS"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to use Azure DNS:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a resource group:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ az group create --name "MyDnsResourceGroup" --location $LOCATION\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create a Azure DNS zone for example.com:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ az network dns zone create --resource-group "MyDnsResourceGroup" --name "example.com"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Substitute a domain you own for example.com if desired."}),"\n",(0,t.jsxs)(n.p,{children:["If using your own domain that was registered with a third-party domain registrar, you should point your domain's name servers to the values in the ",(0,t.jsx)(n.code,{children:"nameServers"})," field from the JSON data returned by the ",(0,t.jsx)(n.code,{children:"az network dns zone create"})," command. Please consult your registrar's documentation on how to do that."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create a Service Principal"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Create a Service Principal with a minimum access level of DNS Zone Contributor or Contributor to the DNS zone(s) and Reader to the resource group containing the Azure DNS zone(s)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ DNS_NEW_SP_NAME="ExternalDnsServicePrincipal" # name of the service principal\n$ AZURE_DNS_ZONE_RESOURCE_GROUP="MyDnsResourceGroup" # name of resource group where dns zone is hosted\n$ AZURE_DNS_ZONE="example.com" # DNS zone name like example.com or sub.example.com\n\n# Create the service principal\n$ DNS_SP=$(az ad sp create-for-rbac --name $DNS_NEW_SP_NAME)\n$ DNS_SP_APP_ID=$(echo $DNS_SP | jq -r \'.appId\')\n$ DNS_SP_PASSWORD=$(echo $DNS_SP | jq -r \'.password\')\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Grant access to Azure DNS zone for the service principal."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# fetch DNS id used to grant access to the service principal\nDNS_ID=$(az network dns zone show --name $AZURE_DNS_ZONE \\\n --resource-group $AZURE_DNS_ZONE_RESOURCE_GROUP --query "id" --output tsv)\n\n# 1. as a reader to the resource group\n$ az role assignment create --role "Reader" --assignee $DNS_SP_APP_ID --scope $DNS_ID\n\n# 2. as a contributor to DNS Zone itself\n$ az role assignment create --role "Contributor" --assignee $DNS_SP_APP_ID --scope $DNS_ID\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Create the values.yaml file"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'tee values.yaml<<EOF\ncluster:\n  name: $CLUSTER_NAME\n  provider: custom\n  domainSuffix: azure.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters:\n    - example.com\n  provider:\n    azure:\n      resourceGroup: $AZURE_DNS_ZONE_RESOURCE_GROUP\n      aadClientId: $DNS_SP_APP_ID\n      aadClientSecret: $DNS_SP_PASSWORD\n      tenantId: "$(az account show --query tenantId -o tsv)"\n      subscriptionId: "$(az account show --query id -o tsv)"\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"google-cloud-platform-dns",children:"Google Cloud Platform DNS"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to use Google Cloud DNS:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a DNS zone which will contain the managed DNS records. If using your own domain that was registered with a third-party domain registrar, you should point your domain's name servers to the values under the ",(0,t.jsx)(n.code,{children:"nameServers"})," key. Please consult your registrar's documentation on how to do that.  This tutorial will use example domain of  ",(0,t.jsx)(n.code,{children:"example.com"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'gcloud dns managed-zones create "example-com" --dns-name "example.com." \\\n  --description "Automatically managed zone by kubernetes.io/external-dns"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Make a note of the nameservers that were assigned to your new zone."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'gcloud dns record-sets list \\\n    --zone "example-com" --name "example.com." --type NS\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create a Google Service Account for use with static credentials"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this scenario, a new GSA (Google Service Account) is created that has access to the CloudDNS zone.  The credentials for this GSA are saved and installed as a Kubernetes secret that will be used by ExternalDNS. This allows only containers that have access to the secret, such as ExternalDNS to update records on the Cloud DNS Zone."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'DNS_SA_NAME="external-dns-sa"\nDNS_SA_EMAIL="$DNS_SA_NAME@${GKE_PROJECT_ID}.iam.gserviceaccount.com"\n\n# create GSA used to access the Cloud DNS zone\ngcloud iam service-accounts create $DNS_SA_NAME --display-name $DNS_SA_NAME\n\n# assign google service account to dns.admin role in cloud-dns project\ngcloud projects add-iam-policy-binding $DNS_PROJECT_ID \\\n  --member serviceAccount:$DNS_SA_EMAIL --role "roles/dns.admin"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create credentials"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Generate static credentials from the ExternalDNS GSA:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# download static credentials\ngcloud iam service-accounts keys create /local/path/to/credentials.json \\\n  --iam-account $DNS_SA_EMAIL\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Get the contents of the ",(0,t.jsx)(n.code,{children:"credentials.son"}),". Note that you don't need to create a Kubernetes secret. The credentials will be directly provided to the APL installer and APL will create the secret."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat /local/path/to/credentials.json\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "type": "service_account",\n    "project_id": "xxx",\n    "private_key_id": "xxx",\n    "private_key": xxx,\n    "client_email": "external-dns-sa@apl.iam.gserviceaccount.com",\n    "client_id": "000000000000",\n    "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n    "token_uri": "https://oauth2.googleapis.com/token",\n    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx.iam.gserviceaccount.com"\n}\n\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Create the values.yaml file"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'tee values.yaml<<EOF\ncluster:\n  name: $CLUSTER_NAME\n  provider: google\n  domainSuffix: gcp.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters:\n    - example.com\n  provider:\n    google:\n      serviceAccountKey: |\n        {\n            "type": "service_account",\n            "project_id": "xxx",\n            "private_key_id": "xxx",\n            "private_key": xxx,\n            "client_email": "external-dns-sa@apl.iam.gserviceaccount.com",\n            "client_id": "000000000000",\n            "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n            "token_uri": "https://oauth2.googleapis.com/token",\n            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx.iam.gserviceaccount.com"\n        }\n      project: $DNS_PROJECT_ID\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"digitalocean-dns",children:"DigitalOcean DNS"}),"\n",(0,t.jsx)(n.p,{children:"If you want to learn about how to use DigitalOcean's DNS service read the following tutorial series:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorial_series/an-introduction-to-managing-dns",children:"An Introduction to Managing DNS"}),", and specifically ",(0,t.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean",children:"How To Set Up a Host Name with DigitalOcean DNS"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new DNS zone where you want to create your records in. Let's use ",(0,t.jsx)(n.code,{children:"example.com"})," as an example here."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Generate a new personal token by going to ",(0,t.jsx)(n.a,{href:"https://cloud.digitalocean.com/settings/api/tokens",children:"the API settings"})," or follow ",(0,t.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2",children:"How To Use the DigitalOcean API v2"})," if you need more information. Provide a name for the token and choose read and write access."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'DO_TOKEN="<your-token>"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create the values.yaml file"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"tee values.yaml<<EOF\ncluster:\n  name: $CLUSTER_NAME\n  provider: custom\n  domainSuffix: do.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters:\n    - example.com\n  provider:\n    digitalocean:\n      apiToken: $DO_TOKEN\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\nEOF\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cloudflare-dns",children:"Cloudflare DNS"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Creating a Cloudflare DNS zone"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We highly recommend to read this tutorial if you haven't used Cloudflare before:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://support.cloudflare.com/hc/en-us/articles/201720164-Step-2-Create-a-Cloudflare-account-and-add-a-website",children:"Create a Cloudflare account and add a website"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Creating Cloudflare Credentials"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Snippet from ",(0,t.jsx)(n.a,{href:"https://api.cloudflare.com/#getting-started-endpoints",children:"Cloudflare - Getting Started"}),":"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Cloudflare's API exposes the entire Cloudflare infrastructure via a standardized programmatic interface. Using Cloudflare's API, you can do just about anything you can do on cloudflare.com via the customer dashboard."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:['The Cloudflare API is a RESTful API based on HTTPS requests and JSON responses. If you are registered with Cloudflare, you can obtain your API key from the bottom of the "My Account" page, found here: ',(0,t.jsx)(n.a,{href:"https://dash.cloudflare.com/profile",children:"Go to My account"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When using API Token authentication, the token should be granted Zone ",(0,t.jsx)(n.code,{children:"Read"}),", DNS ",(0,t.jsx)(n.code,{children:"Edit"})," privileges, and access to ",(0,t.jsx)(n.code,{children:"All zones"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you would like to further restrict the API permissions to a specific zone (or zones), you also need to use the ",(0,t.jsx)(n.code,{children:"--zone-id-filter"})," so that the underlying API requests only access the zones that you explicitly specify, as opposed to accessing all zones."]}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"CF_API_TOKEN"})," environment variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'CF_API_TOKEN="Your Cloudflare API Token"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create the values.yaml file"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"cluster:\n  name: otomi\n  provider: custom\n  domainSuffix: linode.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters:\n    - example.com\n  provider:\n    cloudflare:\n      apiToken: $CF_API_TOKEN\n      proxied: false\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(7294);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);