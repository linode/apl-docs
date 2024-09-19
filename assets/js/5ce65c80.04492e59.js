"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2280],{5222:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(5893),l=i(1151);const r={slug:"installation",title:"Installing and using the CLI",sidebar_label:"Installation"},n=void 0,o={id:"for-ops/cli/installation",title:"Installing and using the CLI",description:"Prerequisites",source:"@site/docs/for-ops/cli/installation.md",sourceDirName:"for-ops/cli",slug:"/for-ops/cli/installation",permalink:"/docs/for-ops/cli/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/cli/installation.md",tags:[],version:"current",frontMatter:{slug:"installation",title:"Installing and using the CLI",sidebar_label:"Installation"},sidebar:"mainSidebar",previous:{title:"Backups",permalink:"/docs/for-ops/how-to/backups"},next:{title:"Using the CLI",permalink:"/docs/for-ops/cli/deploying"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the CLI",id:"install-the-cli",level:2},{value:"Installer script",id:"installer-script",level:3},{value:"Manual installation",id:"manual-installation",level:3},{value:"Using wget",id:"using-wget",level:4},{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Command Reference",id:"command-reference",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Docker"}),"\n",(0,t.jsx)(s.li,{children:"Bash v4"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The CLI only supports bash versions greater than 4. Install or upgrade on Mac OS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"brew install bash\n"})}),"\n",(0,t.jsx)(s.h2,{id:"install-the-cli",children:"Install the CLI"}),"\n",(0,t.jsx)(s.h3,{id:"installer-script",children:"Installer script"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Using wget\nwget -O- https://git.io/otomi-cli-installer | bash\n# Using curl\ncurl -L https://git.io/otomi-cli-installer | bash\n"})}),"\n",(0,t.jsx)(s.h3,{id:"manual-installation",children:"Manual installation"}),"\n",(0,t.jsx)(s.h4,{id:"using-wget",children:"Using wget"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Using wget\nwget https://git.io/otomi-cli -O otomi && chmod +x otomi\n# Using curl\ncurl https://git.io/otomi-cli -o otomi && chmod +x otomi\n"})}),"\n",(0,t.jsx)(s.p,{children:"This will download otomi into the current directory"}),"\n",(0,t.jsx)(s.h2,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,t.jsxs)(s.p,{children:["Running any ",(0,t.jsx)(s.code,{children:"otomi"})," command will pull the values' ",(0,t.jsx)(s.code,{children:"otomi.version"})," image tag."]}),"\n",(0,t.jsx)(s.admonition,{title:"The image used is rather large, so this might take some time.",type:"note",children:(0,t.jsx)(s.p,{children:"The total compressed size of the base image with all the tools in use is close to 1Gi, and shows close to 2Gi uncompressed."})}),"\n",(0,t.jsx)(s.p,{children:"To use the CLI you can run:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"otomi --help\n"})}),"\n",(0,t.jsx)(s.p,{children:"To find the options available."}),"\n",(0,t.jsx)(s.h2,{id:"command-reference",children:"Command Reference"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Command"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/apply",children:(0,t.jsx)(s.code,{children:"otomi apply"})})}),(0,t.jsx)(s.td,{children:"Apply all, or supplied, K8S resources"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/bash",children:(0,t.jsx)(s.code,{children:"otomi bash"})})}),(0,t.jsx)(s.td,{children:"Run interactive bash shell in otomi-core container"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/bootstrap",children:(0,t.jsx)(s.code,{children:"otomi bootstrap"})})}),(0,t.jsx)(s.td,{children:"Bootstrap values repo with artifacts corresponding to the cluster's stack version"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/check-policies",children:(0,t.jsx)(s.code,{children:"otomi check-policies"})})}),(0,t.jsx)(s.td,{children:"Check if generated manifests adhere to defined OPA policies"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/commit",children:(0,t.jsx)(s.code,{children:"otomi commit"})})}),(0,t.jsx)(s.td,{children:"Execute wrapper for generate pipelines -> git commit changed files"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/decrypt",children:(0,t.jsx)(s.code,{children:"otomi decrypt [files..]"})})}),(0,t.jsxs)(s.td,{children:["Decrypts file(s), given as arguments, or any file matching ",(0,t.jsx)(s.code,{children:"secrets.*.yaml"})," in the values repository"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/destroy",children:(0,t.jsx)(s.code,{children:"otomi destroy"})})}),(0,t.jsx)(s.td,{children:"Destroy all, or supplied, K8S resources"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/diff",children:(0,t.jsx)(s.code,{children:"otomi diff"})})}),(0,t.jsx)(s.td,{children:"Diff all, or supplied, K8S resources"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/encrypt",children:(0,t.jsx)(s.code,{children:"otomi encrypt [files..]"})})}),(0,t.jsxs)(s.td,{children:["Encrypts file(s), given as arguments, or any file matching ",(0,t.jsx)(s.code,{children:"secrets.*.yaml"})," in the values repository"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/lint",children:(0,t.jsx)(s.code,{children:"otomi lint"})})}),(0,t.jsx)(s.td,{children:"Uses helmfile lint to lint the target manifests"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/pull",children:(0,t.jsx)(s.code,{children:"otomi pull"})})}),(0,t.jsx)(s.td,{children:"Wrapper for git pull && otomi bootstrap"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/rotate-keys",children:(0,t.jsx)(s.code,{children:"otomi rotate-keys"})})}),(0,t.jsx)(s.td,{children:"Rotate keys for all the sops secrets in the values repository"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/status",children:(0,t.jsx)(s.code,{children:"otomi status"})})}),(0,t.jsx)(s.td,{children:"Show cluster status"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/sync",children:(0,t.jsx)(s.code,{children:"otomi sync"})})}),(0,t.jsx)(s.td,{children:"Sync all, or supplied, K8S resources"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/template",children:(0,t.jsx)(s.code,{children:"otomi template [outDir]"})})}),(0,t.jsx)(s.td,{children:"Export all, or supplied, K8S resources"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/test",children:(0,t.jsx)(s.code,{children:"otomi test"})})}),(0,t.jsx)(s.td,{children:"Run tests against the target cluster"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/validate-templates",children:(0,t.jsx)(s.code,{children:"otomi validate-templates"})})}),(0,t.jsx)(s.td,{children:"Validate generated manifests against supported k8s versions/CRDs and best practices"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/validate-values",children:(0,t.jsx)(s.code,{children:"otomi validate-values"})})}),(0,t.jsx)(s.td,{children:"Validate values for each cluster against JSON schema (takes target options)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/values",children:(0,t.jsx)(s.code,{children:"otomi values"})})}),(0,t.jsx)(s.td,{children:"Show helmfile values for target cluster"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/for-ops/cli/x",children:(0,t.jsx)(s.code,{children:"otomi x"})})}),(0,t.jsx)(s.td,{children:"Execute command in container"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>n});var t=i(7294);const l={},r=t.createContext(l);function n(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);