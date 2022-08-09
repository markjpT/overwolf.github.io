"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6258],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){return function(n){var t=s(n.components);return a.createElement(e,i({},n,{components:t}))}},s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,f=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57953:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:199,title:"Version 0.199",sidebar_label:"0.199",sidebar_position:199},m=void 0,p={unversionedId:"api/changelogs/2022/june/199",id:"api/changelogs/2022/june/199",title:"Version 0.199",description:"Docs",source:"@site/pages/docs/api/changelogs/2022/6-june/199.mdx",sourceDirName:"api/changelogs/2022/6-june",slug:"/api/changelogs/2022/june/199",permalink:"/api/changelogs/2022/june/199",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2022/6-june/199.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657780987,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:199,frontMatter:{id:"199",title:"Version 0.199",sidebar_label:"0.199",sidebar_position:-199},sidebar:"api",previous:{title:"0.201",permalink:"/api/changelogs/2022/july/201"},next:{title:"0.198",permalink:"/api/changelogs/2022/may/198"}},d={},s=[{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h3",{id:"docs"},"Docs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Updated the documentation to reflect the new API changes listed below."),(0,i.mdx)("li",{parentName:"ul"},"Added documentation of the ",(0,i.mdx)("a",{parentName:"li",href:"/api/games#gameinfotype-enum"},"overwolf.games.GameInfoType")," Enum.")),(0,i.mdx)("h3",{id:"api"},"API"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Updated API: ",(0,i.mdx)("a",{parentName:"p",href:"/api/streaming"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming"))," ","[EXPERIMENTAL]",":"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"ABSTRACT - It is now possible to choose to capture audio from a game and other specific audio processes, rather than only the entire desktop's audio."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.getCapabilities"))," - New method for obtaining all streaming capabilities in one place, for both video and audio.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Returns a callback with ",(0,i.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamingCapabilities")),"."),(0,i.mdx)("li",{parentName:"ul"},"Of particular note is the new ",(0,i.mdx)("inlineCode",{parentName:"li"},"audioProcessCaptureSupported")," flag, that lets us know if ",(0,i.mdx)("inlineCode",{parentName:"li"},"filtered_capture")," can be enabled."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamAudioOptions.game"))," has been changed to ",(0,i.mdx)("a",{parentName:"li",href:"/api/streaming"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.streaming.GameAudioDevice")),". The new field ",(0,i.mdx)("inlineCode",{parentName:"li"},"filtered_capture")," has been added, and can be used if ",(0,i.mdx)("inlineCode",{parentName:"li"},"audioProcessCaptureSupported")," returned true (this depends on the machine running the app, so make sure to always check it!)."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"New API: ",(0,i.mdx)("a",{parentName:"p",href:"/api/games/tracked#getrunninggameinfocallback"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.games.tracked.getRunningGameInfo"))," - New method for obtaining game info from tracked games, similar to ",(0,i.mdx)("a",{parentName:"p",href:"/api/games"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo")),"."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This method will only work if ",(0,i.mdx)("inlineCode",{parentName:"li"},"tracked")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"track_all_games")," are both set to true in the ",(0,i.mdx)("a",{parentName:"li",href:"/api/manifest#launch_event_settings-array"},"app manifest"),", but it will work on ",(0,i.mdx)("strong",{parentName:"li"},"all")," games, regardless of whether they're supported or not."),(0,i.mdx)("li",{parentName:"ul"},"Keep in mind that an unsupported game that was tracked still won't necessarily work as intended, so be sure to test that it works for your specific use case!")))),(0,i.mdx)("h3",{id:"platform"},"Platform"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Several improvements to Overwolf dll stability.")),(0,i.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo"))," will no longer return a monitor handle of 0 in certain edge cases.")))}c.isMDXComponent=!0}}]);