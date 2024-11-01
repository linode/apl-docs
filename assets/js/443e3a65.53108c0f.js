"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1254],{8414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const r={slug:"teams",title:"Platform - Teams",sidebar_label:"Teams"},o=void 0,a={id:"for-ops/console/teams",title:"Platform - Teams",description:"About Teams",source:"@site/docs/for-ops/console/teams.md",sourceDirName:"for-ops/console",slug:"/for-ops/console/teams",permalink:"/docs/for-ops/console/teams",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/console/teams.md",tags:[],version:"current",frontMatter:{slug:"teams",title:"Platform - Teams",sidebar_label:"Teams"},sidebar:"mainSidebar",previous:{title:"Apps",permalink:"/docs/for-ops/console/apps"},next:{title:"User Management",permalink:"/docs/for-ops/console/user-management"}},c={},d=[{value:"About Teams",id:"about-teams",level:2},{value:"Team Admin",id:"team-admin",level:2},{value:"Creating a Team",id:"creating-a-team",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"about-teams",children:"About Teams"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Teams are isolated tenants on the platform to support Development/DevOps teams, projects or even DTAP."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"A Team will get access to the Console, providing access to self-service features and all the shared apps available on the platform."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Teams can choose to receive alerts in Microsoft Teams, Slack or email and each team will get access to a project in Harbor."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Teams can be allowed self-service features like configure ingress, configure a notification receiver for alerts, change the OIDC group mappings and download the KubeConfig."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"team-admin",children:"Team Admin"}),"\n",(0,s.jsx)(t.p,{children:"By default, a Team called Team Admin is created. Admins can use this team to expose any service in the team-admin namespace, but also in custom (created by the admin) namespaces."}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/docs/for-devs/console/services",children:"Team Services"})," for more info about how to create Services and how to configure ingress. The only difference here is that when creating Services in Team Admin, the admin can also select the namespace of the service."]}),"\n",(0,s.jsx)(t.p,{children:"Another difference between the Team Admin and regular Teams is that Team Admin does not have apps and it is not possible to configure any settings for the team-admin namespace."}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-team",children:"Creating a Team"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Login with a user who is a member of the ",(0,s.jsx)(t.code,{children:"otomi-admin"})," or ",(0,s.jsx)(t.code,{children:"team-admin"})," role."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Provide a name for the team (lowercase). The teamname can not be changed afterwards! Creating a team will result in the creation of namespace ",(0,s.jsx)(t.code,{children:"team-$NAME"}),". The name of a team can be max ",(0,s.jsx)(t.code,{children:"12"})," characters."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Optional: Provide a OIDC group name/id granting for granting access to team. Only members of the group will get access to the team."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Optional: Configure Managed Monitoring. This allows Teams to get a dedicated Grafana, Prometheus and Alert Manager instance. Select ",(0,s.jsx)(t.code,{children:"Private"})," to disable cross-team access and isolate access to Team monitoring resources."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Optional (only when Alert Manager is enabled for the team): In order to receive alerts, please choose an alerting endpoint:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Slack"}),(0,s.jsx)(t.td,{children:"Needs a slack webhook url that will give alerts for warnings and criticals"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Microsoft Teams"}),(0,s.jsx)(t.td,{children:"Needs two alerting endpoints, for both warnings as well as criticals"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Email"}),(0,s.jsx)(t.td,{children:"You may provide a list of email addresses for both 'Non Critical' and 'Critical'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"If none selected"}),(0,s.jsx)(t.td,{children:"Global (admin) alerting endpoint configuration will be used"})]})]})]}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Optional: Add Resource Quotas."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:['When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described ',(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"note",children:(0,s.jsx)(t.p,{children:"There is no validation as there is no schema published. Add/change resource quota at your own risk."})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsx)(t.li,{children:"Turn Network Policy On/Off for the team:"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Network policies"}),(0,s.jsx)(t.td,{children:"When enabled team services will be bound by (ingress) network policies"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Egress control"}),(0,s.jsx)(t.td,{children:"When enabled team service egress traffic will be limited to pre-defined external endpoints only"})]})]})]}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsx)(t.li,{children:"Add Team self service flags:"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["A user with the ",(0,s.jsx)(t.code,{children:"otomi-admin"})," and ",(0,s.jsx)(t.code,{children:"team-admin"})," role can delegate permissions to modify certain configuration parameters to the team."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Section"}),(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Service"}),(0,s.jsx)(t.td,{children:"Ingress"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to configure exposure for Services"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Policies"}),(0,s.jsx)(t.td,{children:"Edit Policies"}),(0,s.jsx)(t.td,{children:"Select to grant the team to edit security policies"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Team Settings"}),(0,s.jsx)(t.td,{children:"Managed Monitoring"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to change the managed monitoring configuration"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Team Settings"}),(0,s.jsx)(t.td,{children:"Oidc"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to configure OIDC for the team"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Team Settings"}),(0,s.jsx)(t.td,{children:"Alerts"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to configure Alerts for the team"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Team Settings"}),(0,s.jsx)(t.td,{children:"Resource quota"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to configure Resource Quota for the team"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Team settings"}),(0,s.jsx)(t.td,{children:"Network policy"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to configure network polices"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Access"}),(0,s.jsx)(t.td,{children:"Shell"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to use the cloud shell"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Access"}),(0,s.jsx)(t.td,{children:"Download kube config"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to download the KubeConfig to get Kube API access to the teams namespace"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Access"}),(0,s.jsx)(t.td,{children:"Download docker config"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to download the Dockerconfig for the teams project in Harbor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Access"}),(0,s.jsx)(t.td,{children:"Download certificate authority"}),(0,s.jsx)(t.td,{children:"Select to grant the team the permission to download the CA (only when installed with a generated CA)"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);