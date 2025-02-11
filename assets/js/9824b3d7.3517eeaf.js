"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6944],{2752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"for-devs/console/settings","title":"Team Settings","description":"Based on self-service options allowed by the platfrom administrator, team members can change the settings of their team.","source":"@site/docs/for-devs/console/settings.md","sourceDirName":"for-devs/console","slug":"/for-devs/console/settings","permalink":"/docs/for-devs/console/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-devs/console/settings.md","tags":[],"version":"current","frontMatter":{"slug":"settings","title":"Team Settings","sidebar_label":"Settings"},"sidebar":"mainSidebar","previous":{"title":"User Management","permalink":"/docs/for-devs/console/user-management"},"next":{"title":"Sealed Secrets","permalink":"/docs/for-devs/console/secrets"}}');var i=t(4848),r=t(8453);const l={slug:"settings",title:"Team Settings",sidebar_label:"Settings"},o=void 0,a={},d=[{value:"Configure OIDC group mapping",id:"configure-oidc-group-mapping",level:2},{value:"Managed monitoring",id:"managed-monitoring",level:2},{value:"Grafana",id:"grafana",level:3},{value:"Alertmanger",id:"alertmanger",level:3},{value:"Configure alert settings",id:"configure-alert-settings",level:2},{value:"Configure Resource Quotas",id:"configure-resource-quotas",level:2},{value:"Enable Network Policies",id:"enable-network-policies",level:2},{value:"Team self service flags",id:"team-self-service-flags",level:2},{value:"Service",id:"service",level:3},{value:"Security Policies",id:"security-policies",level:3},{value:"Team",id:"team",level:3},{value:"Access",id:"access",level:3}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Based on self-service options allowed by the platfrom administrator, team members can change the settings of their team."}),"\n",(0,i.jsx)(n.h2,{id:"configure-oidc-group-mapping",children:"Configure OIDC group mapping"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The OIDC group mapping will only be visible when an external Identity Provider (IdP) is used."})}),"\n",(0,i.jsx)(n.p,{children:"Change the OIDC group-mapping to allow access based on a group membership."}),"\n",(0,i.jsx)(n.h2,{id:"managed-monitoring",children:"Managed monitoring"}),"\n",(0,i.jsx)(n.p,{children:"Activate a (platform) managed Grafana, Prometheus or Alertmanager instance for the team. The installed Grafana, Prometheus and Alertmanager will be monitored by the Platform administrator."}),"\n",(0,i.jsx)(n.h3,{id:"grafana",children:"Grafana"}),"\n",(0,i.jsx)(n.p,{children:"Enable to install a Grafana instance for the team."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Dependencies:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The Grafana instance is automatically configured with a datasource for the Team's Prometheus if Prometheus for the Team is enabled."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If Loki (for logs) is enabled on the Platform, Grafana needs to be enabled for the Team to able to see logs in Grafana."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Grafana is provisioned with multiple dashboards that rely on the Platform Prometheus. If Prometheus on the Platform is not enabled, these dashboards will not work!"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"alertmanger",children:"Alertmanger"}),"\n",(0,i.jsx)(n.p,{children:"Enable to install an Alertmanager instance for the team."}),"\n",(0,i.jsx)(n.h2,{id:"configure-alert-settings",children:"Configure alert settings"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Alerts settings will only be applied when Alertmanager is enabled for the team."})}),"\n",(0,i.jsx)(n.p,{children:"Change the alert settings and preferred notification receivers."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Slack"}),(0,i.jsx)(n.td,{children:"Needs a slack webhook url that will give alerts for warnings and criticals"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Microsoft Teams"}),(0,i.jsx)(n.td,{children:"Needs two alerting endpoints, for both warnings as well as criticals"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"If none selected"}),(0,i.jsx)(n.td,{children:"Global (admin) alerting endpoint configuration will be used"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"configure-resource-quotas",children:"Configure Resource Quotas"}),"\n",(0,i.jsxs)(n.p,{children:['When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described ',(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/",children:"here"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"There is no validation as there is no schema published. Add/change resource quota at your own risk."})}),"\n",(0,i.jsx)(n.h2,{id:"enable-network-policies",children:"Enable Network Policies"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ingress control"}),(0,i.jsx)(n.td,{children:"When enabled team services will be bound by (ingress) network policies"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Egress control"}),(0,i.jsx)(n.td,{children:"When enabled team service egress traffic will be limited to pre-defined endpoints only"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"team-self-service-flags",children:"Team self service flags"}),"\n",(0,i.jsx)(n.p,{children:"The self-service flags (what is a team allowed to) can only be configured by an admin user."}),"\n",(0,i.jsx)(n.h3,{id:"service",children:"Service"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Permission"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ingress"}),(0,i.jsx)(n.td,{children:"The Team is allowed to configure External Exposure for a Service"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"security-policies",children:"Security Policies"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Permission"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Edit policies"}),(0,i.jsx)(n.td,{children:"The Team is allowed to edit Team Security Policies"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"team",children:"Team"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Permission"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OIDC"}),(0,i.jsx)(n.td,{children:"The team is allowed to configure the OIDC group mapping for the team"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Alerts"}),(0,i.jsx)(n.td,{children:"The Team is allowed to configure Alert settings for the team"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Managed monitoring"}),(0,i.jsx)(n.td,{children:"The team is allowed to configure Managed Monitoring"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resource quotas"}),(0,i.jsx)(n.td,{children:"The team is allowed to configure resource quotas for the team"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Network policy"}),(0,i.jsx)(n.td,{children:"The team is allowed to configure Security Policies (enable/disable Security Policies for the Team)"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"access",children:"Access"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Permission"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Shell"}),(0,i.jsx)(n.td,{children:"The team is allowed to use the cloud Shell"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Download kube config"}),(0,i.jsx)(n.td,{children:"The team is allowed to download the Kube Config"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Download docker config"}),(0,i.jsx)(n.td,{children:"The team is allowed to download the Docker Config"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Download certificate authority"}),(0,i.jsx)(n.td,{children:"The team is allowed to download the certificate authority (only when installed with a auto-generated or custom CA)"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);