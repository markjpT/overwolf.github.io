"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2242],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return s},mdx:function(){return f},useMDXComponents:function(){return g},withMDXComponents:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){return function(t){var n=g(t.components);return a.createElement(e,l({},t,{components:n}))}},g=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=g(n),s=r,p=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,d=new Array(l);d[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var u=2;u<l;u++)d[u]=n[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),d=["components"],i={id:"language",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.language API"},o=void 0,u={unversionedId:"api/settings/language",id:"api/settings/language",title:"overwolf.settings.language API",description:"Use this API to view and modify the Overwolf language properties.",source:"@site/pages/docs/api/settings/language.mdx",sourceDirName:"api/settings",slug:"/api/settings/language",permalink:"/api/settings/language",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/settings/language.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"language",image:"/img/embed/api-docs.jpg",title:"overwolf.settings.language API",sidebar_position:0,sidebar_label:"Language"},sidebar:"api",previous:{title:"Hotkeys",permalink:"/api/settings/hotkeys"},next:{title:"Social",permalink:"/api/social/"}},m={},g=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"get(callback)",id:"getcallback",level:2},{value:"Version added: 0.143",id:"version-added-0143",level:4},{value:"onLanguageChanged",id:"onlanguagechanged",level:2},{value:"Version added: 0.143",id:"version-added-0143-1",level:4},{value:"LanguageChangedEvent Object",id:"languagechangedevent-object",level:2},{value:"GetLanguageResult Object",id:"getlanguageresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4}],s={toc:g};function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Use this API to view and modify the Overwolf language properties."),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getcallback"},"overwolf.settings.language.get()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onlanguagechanged"},"overwolf.settings.language.onLanguageChanged"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getlanguageresult-object"},"overwolf.settings.language.GetLanguageResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getlanguageresult-object"},"overwolf.settings.language.LanguageChangedEvent")," Object")),(0,l.mdx)("h2",{id:"getcallback"},"get(callback)"),(0,l.mdx)("h4",{id:"version-added-0143"},"Version added: 0.143"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Returns the current language overwolf is set to in a two letter ISO name format.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getlanguageresult-object"},"Result: GetLanguageResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,l.mdx)("h2",{id:"onlanguagechanged"},"onLanguageChanged"),(0,l.mdx)("h4",{id:"version-added-0143-1"},"Version added: 0.143"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when user change client language, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#languagechangedevent-object"},"LanguageChangedEvent")," Object")),(0,l.mdx)("h2",{id:"languagechangedevent-object"},"LanguageChangedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"language"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"the new language overwolf is set to in a two letter ISO name format")))),(0,l.mdx)("h2",{id:"getlanguageresult-object"},"GetLanguageResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"language"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"the current language overwolf is set to in a two letter ISO name format")))),(0,l.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "language": "en",\n    "success": true\n}\n')))}c.isMDXComponent=!0}}]);