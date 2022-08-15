"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7608],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,m=d["".concat(s,".").concat(p)]||d[p]||g[p]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],a={id:"logs-html",image:"/img/embed/api-best-practices.jpg",title:"Overlay game HTML",sidebar_label:"Overlay game HTML"},l=void 0,c={unversionedId:"topics/understanding-ow-logs/logs-html",id:"topics/understanding-ow-logs/logs-html",title:"Overlay game HTML",description:"These logs will appear as an HTML file with the game title (For example League of Legends07-03-2105-17-06.Game.html) Using these log files you can verify that the processes & dlls were injected correctly into the game, information regarding the windows mode, rendered API and if the hotkeys are being sent and received by Overwolf.",source:"@site/pages/docs/topics/understanding-ow-logs/logs-html.mdx",sourceDirName:"topics/understanding-ow-logs",slug:"/topics/understanding-ow-logs/logs-html",permalink:"/topics/understanding-ow-logs/logs-html",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/understanding-ow-logs/logs-html.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"logs-html",image:"/img/embed/api-best-practices.jpg",title:"Overlay game HTML",sidebar_label:"Overlay game HTML"},sidebar:"topics",previous:{title:"DxDiag log",permalink:"/topics/understanding-ow-logs/logs-dxdiag"},next:{title:"What are Overwolf logs",permalink:"/topics/understanding-ow-logs/logs-intro"}},d={},u=[],p={toc:u};function g(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"These logs will appear as an HTML file with the game title (For example League of Legends_07-03-21_05-17-06.Game.html) Using these log files you can verify that the processes & dlls were injected correctly into the game, information regarding the windows mode, rendered API and if the hotkeys are being sent and received by Overwolf."),(0,o.mdx)("p",null,"In this section you can see the client initializing and the users Windows OS:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"6",src:n(32751).Z,width:"1827",height:"170"})),(0,o.mdx)("p",null,"This section will show which dlls are injected (Allowing you to check coexistence issues with other programs) before the render:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"7",src:n(35080).Z,width:"1749",height:"425"})),(0,o.mdx)("p",null,"This section will show the rendered resolutions and windows mode:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"8",src:n(50429).Z,width:"2441",height:"139"})),(0,o.mdx)("p",null,"This section will show the rendered API:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"9",src:n(41277).Z,width:"1247",height:"284"})),(0,o.mdx)("p",null,"This section will show if the render was successful:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"10",src:n(46818).Z,width:"2681",height:"108"})),(0,o.mdx)("p",null,"This section will show if the OBS render hook was injected: "),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"11",src:n(34371).Z,width:"1208",height:"240"})),(0,o.mdx)("p",null,"This section shows hotkeys that were sent and received by Overwolf "),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"12",src:n(937).Z,width:"2448",height:"68"})),(0,o.mdx)("p",null,"This section shows that the game ended properly without crashes"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"13",src:n(55542).Z,width:"1223",height:"197"})))}g.isMDXComponent=!0},46818:function(e,t,n){t.Z=n.p+"assets/images/10-01a869e337f78ef879c44fe47804bb63.png"},34371:function(e,t,n){t.Z=n.p+"assets/images/11-5e27ee4739b7ea57bf151a757ac2025b.png"},937:function(e,t,n){t.Z=n.p+"assets/images/12-6b73de9e3defc9a8e776953c8a792a21.png"},55542:function(e,t,n){t.Z=n.p+"assets/images/13-e966e9d44e76429afa965f6e20799001.png"},32751:function(e,t,n){t.Z=n.p+"assets/images/6-6edb9ae9d84075d8831d9b7025f1e13d.png"},35080:function(e,t,n){t.Z=n.p+"assets/images/7-d18f368cae4d0d8ea2025d27cb51b3a2.png"},50429:function(e,t,n){t.Z=n.p+"assets/images/8-5fa6e925fb43bffafed9881710dbf724.png"},41277:function(e,t,n){t.Z=n.p+"assets/images/9-d0847307acfe72631f348958b15b69b5.png"}}]);