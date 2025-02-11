"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[108],{2357:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"for-ops/cli/apply","title":"otomi apply","description":"otomi apply [options]","source":"@site/docs/for-ops/cli/apply.md","sourceDirName":"for-ops/cli","slug":"/for-ops/cli/apply","permalink":"/docs/for-ops/cli/apply","draft":false,"unlisted":false,"editUrl":"https://github.com/linode/linode.github.io/tree/main/docs/for-ops/cli/apply.md","tags":[],"version":"current","frontMatter":{"slug":"apply","title":"otomi apply","sidebar_label":"otomi apply"},"sidebar":"mainSidebar","previous":{"title":"Known issues","permalink":"/docs/for-ops/cli/known-issues"},"next":{"title":"otomi bash","permalink":"/docs/for-ops/cli/bash"}}');var i=t(4848),d=t(8453);const n={slug:"apply",title:"otomi apply",sidebar_label:"otomi apply"},o=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2}];function h(e){const s={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"otomi apply [options]"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["Apply Kubernetes resources. Without any options it will (re)deploy the full stack. With ",(0,i.jsx)(s.code,{children:"-l"})," or ",(0,i.jsx)(s.code,{children:"-f"})," it will apply only the defined resources"]}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Option"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Value Type"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"-l"}),", ",(0,i.jsx)(s.code,{children:"--label"})]}),(0,i.jsxs)(s.td,{children:["Helmfile option to select charts by label (format: ",(0,i.jsx)(s.code,{children:"<label>=<value>"}),"), e.g. ",(0,i.jsx)(s.code,{children:"-l name=prometheus-operator"})," or ",(0,i.jsx)(s.code,{children:"--label group=jobs"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"[array]"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"-f"}),", ",(0,i.jsx)(s.code,{children:"--file"})]}),(0,i.jsx)(s.td,{children:"Helmfile option to select helmfiles by filename, e.g. '-f helmfile.d/helmfile-15.ingress-core.yaml'"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"[array]"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"--log-level"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fatal, error, warn, info, verbose, debug, trace"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"warn"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"-s"}),", ",(0,i.jsx)(s.code,{children:"--skip-cleanup"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"[boolean]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"-v"}),", ",(0,i.jsx)(s.code,{children:"--verbose"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"count"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"--ni"}),", ",(0,i.jsx)(s.code,{children:"--non-interactive"})]}),(0,i.jsx)(s.td,{children:"Same as setting env.CI"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"[boolean]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"false"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"-h"}),", ",(0,i.jsx)(s.code,{children:"--help"})]}),(0,i.jsx)(s.td,{children:"Show help"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>o});var l=t(6540);const i={},d=l.createContext(i);function n(e){const s=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),l.createElement(d.Provider,{value:s},e.children)}}}]);