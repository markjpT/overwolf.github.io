"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6357],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return l}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15151:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n,a=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],c={id:"launch-time-performance",image:"/img/embed/api-best-practices.jpg",title:"App Launch Performance",sidebar_label:"App launch performance"},p=void 0,l={unversionedId:"topics/best-practices/launch-time-performance",id:"topics/best-practices/launch-time-performance",title:"App Launch Performance",description:"When gamers launch an app, they expect it to load quickly and be responsive immediately when launched. Bad launch performance or an app that takes a while to start working can disappoint or annoy users, not meeting their standards. Naturally, different apps have different requirements, and some apps to take a couple of seconds to load - however, you should do your very best to make your app light and efficient so loading and launch times are as short as possible.",source:"@site/pages/docs/topics/best-practices/launch-time-performance.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/launch-time-performance",permalink:"/topics/best-practices/launch-time-performance",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/launch-time-performance.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"launch-time-performance",image:"/img/embed/api-best-practices.jpg",title:"App Launch Performance",sidebar_label:"App launch performance"},sidebar:"topics",previous:{title:"Hotkey best practices",permalink:"/topics/best-practices/hotkeys-best-practices"},next:{title:"Reduce OPK size",permalink:"/topics/best-practices/reduce-opk-size"}},u={},m=[{value:"Tips for a better launch experience",id:"tips-for-a-better-launch-experience",level:4}],d=(n="ImageSlider",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When gamers launch an app, they expect it to load quickly and be responsive immediately when launched. Bad launch performance or an app that takes a while to start working can disappoint or annoy users, not meeting their standards. Naturally, different apps have different requirements, and some apps to take a couple of seconds to load - however, you should do your very best to make your app light and efficient so loading and launch times are as short as possible."),(0,i.mdx)("h4",{id:"tips-for-a-better-launch-experience"},"Tips for a better launch experience"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Locally store assets used by your app's Home and Notification windows, which are the ones seen by the user on launch. These images, fonts or other assets should be a part of the base .opk file for faster loading times.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Use long-term caching for resources that do not change often, so your user won't have to redownload materials. For example, League of Legends champion portraits and item visuals can be stored long-term. ")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Compress your app\u2019s JavaScript. For example, comments and whitespace are not needed for code execution, and removing them will reduce file size and speed up script execution times.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Compress images to the smallest size possible with ",(0,i.mdx)("a",{parentName:"p",href:"https://www.jpegmini.com/"},"JPEGMini")," or ",(0,i.mdx)("a",{parentName:"p",href:"https://tinypng.com/"},"TinyPNG"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Remove non-critical JavaScript from your app to reduce transmission times, CPU-intensive compiling and potential memory overhead.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"During runtime, prefer smaller, short running scripts to minimize responsiveness issues. Long-running JavaScript can block the main thread causing pages to become unresponsive."))),(0,i.mdx)("p",null,"Our goal is to load any window in under 30ms from the moment the user clicked to open the app from the Overwolf dock or used to hotkey in-game. A loader can be used once the app has been launched."),(0,i.mdx)(d,{mdxType:"ImageSlider"},(0,i.mdx)("img",{src:r(9367).Z,alt:"Trophy Hunter loader"}),(0,i.mdx)("img",{src:r(88902).Z,alt:"CSGO Scout loader"})))}h.isMDXComponent=!0},88902:function(e,t,r){t.Z=r.p+"assets/images/csgo-scout-loader-72a51ecc988d0edb801e600dfd65cb09.png"},9367:function(e,t,r){t.Z=r.p+"assets/images/th-loader-8f7574545326dfcd7e807b5d78230bc9.jpg"}}]);