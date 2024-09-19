"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2020],{8121:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var l=n(5893),t=n(1151);const o={slug:"backups",title:"Create/Restore backups",sidebar_label:"Backups"},c=void 0,r={id:"for-ops/how-to/backups",title:"Create/Restore backups",description:"When Velero is activated on the platform level, platform admins can create backups of Persistent Volumes (PVs) in Team namespaces using APL Console. When creating backups using APL Console, a Velero schedule resource is created that will create the backup at a specified time, defined by a Cron expression.",source:"@site/docs/for-ops/how-to/backups.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/backups",permalink:"/docs/for-ops/how-to/backups",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/how-to/backups.md",tags:[],version:"current",frontMatter:{slug:"backups",title:"Create/Restore backups",sidebar_label:"Backups"},sidebar:"mainSidebar",previous:{title:"Clone APL",permalink:"/docs/for-ops/how-to/clone-apl"},next:{title:"Installation",permalink:"/docs/for-ops/cli/installation"}},i={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a backup schedule using APL",id:"create-a-backup-schedule-using-apl",level:2},{value:"Check if the schedule is created",id:"check-if-the-schedule-is-created",level:2},{value:"Check if the backup is created",id:"check-if-the-backup-is-created",level:2},{value:"Restore the backup",id:"restore-the-backup",level:2},{value:"Manually create backups",id:"manually-create-backups",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["When Velero is activated on the platform level, platform admins can create backups of Persistent Volumes (PVs) in Team namespaces using APL Console. When creating backups using APL Console, a Velero ",(0,l.jsx)(s.code,{children:"schedule"})," resource is created that will create the backup at a specified time, defined by a Cron expression."]}),"\n",(0,l.jsx)(s.p,{children:"In this how-to, we'll create a backup of a PV using APL and then restore it using the velero CLI integrated into the APL Shell."}),"\n",(0,l.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(s.p,{children:"To perform this how-to, first make sure Velero is enabled. Velero requires object storage to be be configured. APL can be configured to use Linode Object Storage or use the local Minio provided by APL. In this how-to we'll use Minio."}),"\n",(0,l.jsxs)(s.p,{children:["When APL installs Velero, only theVelero plug-in for Linode is configured by default. Velero also has support for backing up and restoring Kubernetes volumes using ",(0,l.jsx)(s.a,{href:"https://velero.io/docs/v1.3.2/restic/#limitations",children:"Restic"}),". Note that Restic is not enabled by default."]}),"\n",(0,l.jsx)(s.p,{children:"For this how-to we'll use the PV of a Team's private Prometheus instance, so make sure Prometheus is also enabled."}),"\n",(0,l.jsx)(s.h2,{id:"create-a-backup-schedule-using-apl",children:"Create a backup schedule using APL"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Select the Team name in the top bar to set the context to the namespace that contains the PV to backup. In this how-to we'll use the team ",(0,l.jsx)(s.code,{children:"demo"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["In APL Console, click on ",(0,l.jsx)(s.code,{children:"Backup"})," in the left menu under ",(0,l.jsx)(s.code,{children:"Platform"})," and click on ",(0,l.jsx)(s.code,{children:"Create"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Enter a name for the backup. In this how-to we'll use the name ",(0,l.jsx)(s.code,{children:"prom"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Add the schedule of the backup. The schedule is a cron-type expression to schedule the backup. Defaults to once a day at 00:00. Create your cron-type expression ",(0,l.jsx)(s.a,{href:"https://crontab.guru/",children:"here"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["In this how-to, we'll create a backup of the private Prometheus PV in the ",(0,l.jsx)(s.code,{children:"demo"})," team by using a ",(0,l.jsx)(s.code,{children:"labelSelector"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"If the labelSelector is not used, the backup schedule will backup all PVs of the team."})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["In APL Console, click on ",(0,l.jsx)(s.code,{children:"Shell"})," in the bottom of the left menu."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Run the following cmd in the shell:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"kubectl get statefulset prometheus-demo-po-prometheus -n team-demo --show-labels\n\\NAME                            READY   AGE   LABELS\nprometheus-demo-po-prometheus   1/1     77m   app.kubernetes.io/instance=prometheus-demo,app.kubernetes.io/managed-by=Helm,app.kubernetes.io/part-of=demo-po,app.kubernetes.io/version=46.4.1,app=demo-po-prometheus,chart=kube-prometheus-stack-46.4.1,heritage=Helm,operator.prometheus.io/mode=server,operator.prometheus.io/name=demo-po-prometheus,operator.prometheus.io/shard=0,prometheus=team-demo,release=prometheus-demo\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["click on ",(0,l.jsx)(s.code,{children:"Add Item"})," and fill in the following:"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-yaml",children:"name: prometheus\nvalue: team-demo\n"})}),"\n",(0,l.jsxs)(s.ol,{start:"7",children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Use the default TTL (expiration of the backup). Defaults to 7 days."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Click ",(0,l.jsx)(s.code,{children:"Submit"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"check-if-the-schedule-is-created",children:"Check if the schedule is created"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["In APL Console, click on ",(0,l.jsx)(s.code,{children:"Shell"})," in the bottom of the left menu."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Run the following cmd in the shell:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"velero get schedules\nNAME                    STATUS    CREATED                         SCHEDULE     BACKUP TTL   LAST BACKUP   SELECTOR   PAUSED\nteam-demo-backup-prom   Enabled   2023-09-24 11:50:59 +0000 UTC   55 * * * *   168h0m0s     n/a           <none>     false\n"})}),"\n",(0,l.jsx)(s.h2,{id:"check-if-the-backup-is-created",children:"Check if the backup is created"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Run the following cmd in the shell:"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"velero get backups\nNAME                                   STATUS      ERRORS   WARNINGS   CREATED                         EXPIRES   STORAGE LOCATION   SELECTOR\nteam-demo-backup-prom-20230924115514   Completed   0        0          2023-09-24 11:55:14 +0000 UTC   6d        APL              prometheus=team-demo\n"})}),"\n",(0,l.jsxs)(s.p,{children:["You can see the status of the backup is ",(0,l.jsx)(s.code,{children:"Completed"}),". The backup is now stored in the local Minio."]}),"\n",(0,l.jsx)(s.h2,{id:"restore-the-backup",children:"Restore the backup"}),"\n",(0,l.jsx)(s.p,{children:"Now the backup is created, we can restore the backup."}),"\n",(0,l.jsx)(s.p,{children:"Follow this procedure to restore a backup:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Scale down the ",(0,l.jsx)(s.code,{children:"replicas"})," of the ",(0,l.jsx)(s.code,{children:"deployment"})," or ",(0,l.jsx)(s.code,{children:"statefulset"})," that uses the PV."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Delete the PVC. You can find the name of the PVC in the deployment ",(0,l.jsx)(s.code,{children:"spec.template.spec.volumes"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Run the following cmd in the shell:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'velero restore create --from-backup team-demo-backup-prom-20230924115514\nRestore request "team-demo-backup-prom-20230924115514-20230924133133" submitted successfully.\nRun `velero restore describe team-demo-backup-prom-20230924115514-20230924133133` or `velero restore logs team-demo-backup-prom-20230924115514-20230924133133` for more details.\n'})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Scale up the ",(0,l.jsx)(s.code,{children:"replicas"})," of the ",(0,l.jsx)(s.code,{children:"deployment"})," or ",(0,l.jsx)(s.code,{children:"statefulset"})," to use the restored PV."]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"manually-create-backups",children:"Manually create backups"}),"\n",(0,l.jsxs)(s.p,{children:["APL only provides a self-service option for administrators to schedule backups of persistent volumes within team namespaces. The shell in APL includes the Velero CLI, so if you're confortable with Velero you can also create you're own custom backups. Check the docs on ",(0,l.jsx)(s.a,{href:"https://velero.io/",children:"https://velero.io/"})," for more information."]}),"\n",(0,l.jsx)(s.p,{children:"This is an example of creating a custom backup:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Create a full backup (to backup all resources, including PVs):"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"velero backup create my-custom-backup-01 --include-namespaces team-demo\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Create a backup of specific resources:"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"velero backup create my-custom-backup-02 --include-namespaces team-demo --include-resources secret,deployment\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Verify the backup:"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"velero describe backup my-custom-backup-01 --details\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Restore a backup:"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"velero restore create --from-backup my-custom-backup-01\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>c});var l=n(7294);const t={},o=l.createContext(t);function c(e){const s=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),l.createElement(o.Provider,{value:s},e.children)}}}]);