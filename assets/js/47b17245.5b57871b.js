"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9297],{2770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"for-ops/disaster-recovery/gitea","title":"Gitea repositories and database","description":"Introduction","source":"@site/docs/for-ops/disaster-recovery/gitea.md","sourceDirName":"for-ops/disaster-recovery","slug":"/for-ops/disaster-recovery/gitea","permalink":"/docs/for-ops/disaster-recovery/gitea","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/disaster-recovery/gitea.md","tags":[],"version":"current","frontMatter":{"slug":"gitea","title":"Gitea repositories and database","sidebar_label":"Gitea"},"sidebar":"mainSidebar","previous":{"title":"Overview","permalink":"/docs/for-ops/disaster-recovery/overview"},"next":{"title":"Databases","permalink":"/docs/for-ops/disaster-recovery/databases"}}');var o=r(4848),s=r(8453);const i={slug:"gitea",title:"Gitea repositories and database",sidebar_label:"Gitea"},n=void 0,c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Retrieving backups",id:"retrieving-backups",level:2},{value:"Restoring a single repository",id:"restoring-a-single-repository",level:2},{value:"Other assets",id:"other-assets",level:2},{value:"Restoring the database",id:"restoring-the-database",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["Gitea stores the platform configuration (in the ",(0,o.jsx)(t.code,{children:"values"})," repository), the workload catalog (in the ",(0,o.jsx)(t.code,{children:"charts"})," repository), and user-created repositories."]}),"\n",(0,o.jsxs)(t.p,{children:["The recovery procedure described here uses the application-level backup of Gitea, i.e. using the ",(0,o.jsx)(t.code,{children:"gitea dump"})," command line. This includes a current SQL dump of the database as well as all repositories and data. However, ",(0,o.jsx)(t.a,{href:"https://docs.gitea.com/administration/backup-and-restore",children:"Gitea documentation"})," recommends different methods for restoring the database, due to potential compatibility issues."]}),"\n",(0,o.jsx)(t.p,{children:"A restore using this backup is advised if for some reason only Gitea has been affected by a severe operational event leading to data corruption or loss. It is also possible to restore the complete the database or single repositories. Be aware that after a partial restore there may be mismatches between the repository information and the database."}),"\n",(0,o.jsx)(t.h2,{id:"retrieving-backups",children:"Retrieving backups"}),"\n",(0,o.jsx)(t.p,{children:"When uploading and storing backups in the configured object storage bucket, there is also a local retention of the backups on a local volume for one day. After the local retention has expired, archives can be retrieved from the remote storage."}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"rclone"})," is installed on the first time upload of a Gitea backup. If not present, it can be obtained from the releases page at ",(0,o.jsx)(t.a,{href:"https://github.com/rclone/rclone/releases/",children:"https://github.com/rclone/rclone/releases/"}),". Following variables such as ",(0,o.jsx)(t.code,{children:"$BUCKET_NAME"})," or storage authentication are pre-configured in the container, so they do not need to be changed."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"##\n## In the local terminal\n##\nkubectl exec -it -n gitea gitea-0 -- /bin/bash\n\n##\n## The following to be run in the remote container\n##\n\n## If needed, obtain and install Rclone\nmkdir -p /backup/.bin\ncd /backup/.bin\ncurl -fsSL -o rclone.zip https://github.com/rclone/rclone/releases/download/v1.69.0/rclone-v1.69.0-linux-amd64.zip\nunzip -oj rclone.zip\ncd /backup\n\n## Optional, not required if backup is available locally\n.bin/rclone lsf gitea:/$BUCKET_NAME  # List files\n.bin/rclone copy gitea:/$BUCKET_NAME/<backup-name>.tar.bz2 /backup/  # Retrieve file from remote\n\n## Extract the backup\nmkdir restore\ntar xvjf <backup-name>.tar.bz2 -C restore\ncd restore\n"})}),"\n",(0,o.jsx)(t.h2,{id:"restoring-a-single-repository",children:"Restoring a single repository"}),"\n",(0,o.jsxs)(t.p,{children:["Repositories are stored in the mounted container path ",(0,o.jsx)(t.code,{children:"/data/git/gitea-repositories"}),", with the owning user or organization as a subdirectory. To restore a single repository, find the backup in the backup's ",(0,o.jsx)(t.code,{children:"data/repos/<owner>"})," directory and copy it over to ",(0,o.jsx)(t.code,{children:"/data/git/gitea-repositories/<owner>"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Note it is not recommended to restore the ",(0,o.jsx)(t.code,{children:"otomi/values"})," repository with this method after restoring a full cluster."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"## ... commands above to obtain and extract the backup\ncp -R repos/otomi/charts.git /data/git/gitea-repositories/otomi/\n"})}),"\n",(0,o.jsx)(t.h2,{id:"other-assets",children:"Other assets"}),"\n",(0,o.jsxs)(t.p,{children:["Gitea file assets such as avatar images are to be found in the ",(0,o.jsx)(t.code,{children:"data"})," directory of the backup. Similarly, they can be copied to the ",(0,o.jsx)(t.code,{children:"/data/"})," subdirectory as needed, e.g."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"## ... commands above to obtain and extract the backup\ncp -R data/avatars /data/\n"})}),"\n",(0,o.jsx)(t.h2,{id:"restoring-the-database",children:"Restoring the database"}),"\n",(0,o.jsxs)(t.p,{children:["For restoring the database of Gitea, please refer to the ",(0,o.jsx)(t.a,{href:"/docs/for-ops/disaster-recovery/databases",children:"platform database instructions"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"cleaning-up",children:"Cleaning up"}),"\n",(0,o.jsxs)(t.p,{children:["Remove any extracted files from the local backup directory to free up space. They are not removed automatically. Only compressed backups with the ",(0,o.jsx)(t.code,{children:".tar.bz2"})," are cleaned up after one day."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"cd /backup\nrm -R restore\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>n});var a=r(6540);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);