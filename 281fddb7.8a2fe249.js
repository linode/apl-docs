(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{175:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,j=d["".concat(l,".").concat(u)]||d[u]||O[u]||b;return n?r.a.createElement(j,c(c({ref:t},o),{},{components:n})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),b=(n(0),n(175)),l={slug:"cli/x",title:"otomi x",sidebar_label:"otomi x"},c={unversionedId:"cli-x",id:"cli-x",isDocsHomePage:!1,title:"otomi x",description:"otomi x",source:"@site/docs/cli-x.md",slug:"/cli/x",permalink:"/docs/cli/x",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/cli-x.md",version:"current",sidebar_label:"otomi x",sidebar:"mainSidebar",previous:{title:"otomi values",permalink:"/docs/cli/values"},next:{title:"SRE Overview",permalink:"/docs/sre/"}},i=[{value:"Description",id:"description",children:[]},{value:"Options",id:"options",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"otomi x")),Object(b.b)("h2",{id:"description"},"Description"),Object(b.b)("p",null,"Execute bash command in the otomi container"),Object(b.b)("h2",{id:"options"},"Options"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--log-level")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fatal, error, warn, info, verbose, debug, trace")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"warn"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"-s"),", ",Object(b.b)("inlineCode",{parentName:"td"},"--skip-cleanup")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[boolean]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"-c"),", ",Object(b.b)("inlineCode",{parentName:"td"},"--set-context")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[boolean]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"-v"),", ",Object(b.b)("inlineCode",{parentName:"td"},"--verbose")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"count"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--ni"),", ",Object(b.b)("inlineCode",{parentName:"td"},"--non-interactive")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[boolean]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"-h"),", ",Object(b.b)("inlineCode",{parentName:"td"},"--help")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Show help"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[boolean]"))))))}p.isMDXComponent=!0}}]);