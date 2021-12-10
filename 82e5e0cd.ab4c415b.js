(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(188)),b={slug:"cli/diff",title:"otomi diff",sidebar_label:"otomi diff"},i={unversionedId:"cli-diff",id:"cli-diff",isDocsHomePage:!1,title:"otomi diff",description:"otomi diff [options]",source:"@site/docs/cli-diff.md",slug:"/cli/diff",permalink:"/docs/cli/diff",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/cli-diff.md",version:"current",sidebar_label:"otomi diff",sidebar:"mainSidebar",previous:{title:"otomi destroy",permalink:"/docs/cli/destroy"},next:{title:"otomi encrypt",permalink:"/docs/cli/encrypt"}},c=[{value:"Description",id:"description",children:[]},{value:"Options",id:"options",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"otomi diff [options]")),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Diff all, or supplied, K8S resources."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-l"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--label")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Helmfile option to select charts by label (format: ",Object(l.b)("inlineCode",{parentName:"td"},"<label>=<value>"),"), e.g. ",Object(l.b)("inlineCode",{parentName:"td"},"-l name=prometheus-operator")," or ",Object(l.b)("inlineCode",{parentName:"td"},"--label group=jobs")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[array]")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-f"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--file")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Helmfile option to select helmfiles by filename, e.g. '-f helmfile.d/helmfile-15.ingress-core.yaml'"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[array]")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--log-level")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"fatal, error, warn, info, verbose, debug, trace")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"warn"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-s"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--skip-cleanup")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[boolean]")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-v"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--verbose")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"count"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--ni"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--non-interactive")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Same as setting env.CI"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[boolean]")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-h"),", ",Object(l.b)("inlineCode",{parentName:"td"},"--help")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Show help"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,j=d["".concat(b,".").concat(m)]||d[m]||O[m]||l;return n?r.a.createElement(j,i(i({ref:t},o),{},{components:n})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);