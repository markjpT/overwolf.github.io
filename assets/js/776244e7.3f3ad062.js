"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4237],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){return function(t){var a=s(t.components);return n.createElement(e,l({},t,{components:a}))}},s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,f=p["".concat(m,".").concat(u)]||p[u]||c[u]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var d=2;d<l;d++)m[d]=a[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},70756:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n,r=a(87462),l=a(63366),m=(a(67294),a(3905)),o=["components"],i={id:"starcraft-2",title:"StarCraft II Game events",hide_title:!0,sidebar_label:"StarCraft II"},d=void 0,p={unversionedId:"api/games/events/starcraft-2",id:"api/games/events/starcraft-2",title:"StarCraft II Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/starcraft-2.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/starcraft-2",permalink:"/api/games/events/starcraft-2",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/starcraft-2.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1658067227,formattedLastUpdatedAt:"7/17/2022",frontMatter:{id:"starcraft-2",title:"StarCraft II Game events",hide_title:!0,sidebar_label:"StarCraft II"},sidebar:"api",previous:{title:"Splitgate: Arena Warfare",permalink:"/api/games/events/splitgate-arena-warfare"},next:{title:"Teamfight Tactics",permalink:"/api/games/events/teamfight-tactics"}},s={},u=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4}],c=(n="GameInfo",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),f={toc:u};function v(e){var t=e.components,a=(0,l.Z)(e,o);return(0,m.mdx)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("head",null,(0,m.mdx)("meta",{name:"keywords",content:"API for StarCraft II, StarCraft II API, SDK for StarCraft II, StarCraft II SDK"})),(0,m.mdx)(c,{gameID:5855,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,m.mdx)("p",null,"Please read the ",(0,m.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,m.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"SC2 game events sample app"))),(0,m.mdx)("h2",{id:"available-features"},"Available Features"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,m.mdx)("h2",{id:"game-events-status"},"Game events status"),(0,m.mdx)("p",null,"It's highly recommended to communicate errors to your users. Check game event status ",(0,m.mdx)("a",{parentName:"p",href:"/status/"},"here")," or easily verify event status directly from your app ",(0,m.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,m.mdx)("h2",{id:"gep_internal"},(0,m.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,m.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,m.mdx)("h4",{id:"gep_internal-note"},(0,m.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,m.mdx)("h2",{id:"match_info"},(0,m.mdx)("inlineCode",{parentName:"h2"},"match_info")),(0,m.mdx)("h3",{id:"events"},"Events"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Event"),(0,m.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,m.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"When the match starts"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,m.mdx)("td",{parentName:"tr",align:null},"victory/defeat"),(0,m.mdx)("td",{parentName:"tr",align:null},"When the match ends"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")))),(0,m.mdx)("h4",{id:"match_start-note"},(0,m.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,m.mdx)("h4",{id:"match_end-note"},(0,m.mdx)("em",{parentName:"h4"},"match_end")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":"defeat"}]}\n')),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":"victory"}]}\n')))}v.isMDXComponent=!0}}]);