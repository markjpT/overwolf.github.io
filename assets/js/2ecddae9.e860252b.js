"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7045],{3905:function(e,r,t){t.r(r),t.d(r,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){return function(r){var t=p(r.components);return n.createElement(e,o({},r,{components:t}))}},p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81955:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var n,a=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],d={id:"user-flow-and-error-handling",image:"/img/embed/api-best-practices.jpg",title:"User journey and error handling",sidebar_label:"User journey and error handling"},l=void 0,c={unversionedId:"topics/best-practices/user-flow-and-error-handling",id:"topics/best-practices/user-flow-and-error-handling",title:"User journey and error handling",description:"User Journey Basics",source:"@site/pages/docs/topics/best-practices/user-flow-and-error-handling.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/user-flow-and-error-handling",permalink:"/topics/best-practices/user-flow-and-error-handling",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/user-flow-and-error-handling.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"user-flow-and-error-handling",image:"/img/embed/api-best-practices.jpg",title:"User journey and error handling",sidebar_label:"User journey and error handling"},sidebar:"topics",previous:{title:"Type definition file",permalink:"/topics/best-practices/type-definition-file"},next:{title:"Use Tab as an app Hotkey",permalink:"/topics/best-practices/using-tab"}},p={},u=[{value:"User Journey Basics",id:"user-journey-basics",level:2},{value:"Desktop journey",id:"desktop-journey",level:3},{value:"Loading screens",id:"loading-screens",level:3},{value:"App data is ready",id:"app-data-is-ready",level:3},{value:"Error handling",id:"error-handling",level:3}],m=(n="ImageSlider",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),f={toc:u};function g(e){var r=e.components,n=(0,o.Z)(e,i);return(0,s.mdx)("wrapper",(0,a.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,s.mdx)("h2",{id:"user-journey-basics"},"User Journey Basics"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"The journey you build for users should make them understand your app's value as well as how to actually get it."),(0,s.mdx)("li",{parentName:"ol"},"Each step and possible action in your app needs to be communicated clearly to your users."),(0,s.mdx)("li",{parentName:"ol"},"Software issues are inevitable, and error messages are super important to help users address the issue or, at least, avoid confusion.")),(0,s.mdx)("h3",{id:"desktop-journey"},"Desktop journey"),(0,s.mdx)("p",null,"The desktop window is a great place to provide information and lead the user onwards - since most apps and features are meant for in-game usage, users launching the desktop app are more attentive and patient. In this window you can explain your app's basics, clearly state what it does and where (for example, 'go in-game to launch this app'). "),(0,s.mdx)("p",null,"The desktop window can be home to plenty more. Sharing news, asking for feedback, showcasing a cool video and more - it's all possible in your desktop hub. "),(0,s.mdx)(m,{mdxType:"ImageSlider"},(0,s.mdx)("img",{src:t(30093).Z,alt:"CS:GO Stats"}),(0,s.mdx)("img",{src:t(89236).Z,alt:"Lolwiz"}),(0,s.mdx)("img",{src:t(73056).Z,alt:"PUBG Tracker"})),(0,s.mdx)("h3",{id:"loading-screens"},"Loading screens"),(0,s.mdx)("p",null,"Good loading screens for your app assist in monetization and provide a great opportunity to communicate with the user in a non-interruptive way. You should include a short reasoning for the loading screen itself (for example, 'fetching player information'), but can also include visuals, materials or texts. "),(0,s.mdx)(m,{mdxType:"ImageSlider"},(0,s.mdx)("img",{src:t(98805).Z,alt:"Streamaware"}),(0,s.mdx)("img",{src:t(54193).Z,alt:"DotaPlus"})),(0,s.mdx)("h3",{id:"app-data-is-ready"},"App data is ready"),(0,s.mdx)("p",null,"When your app is ready to work as intended, let the user know and explain how they should use it initially. It\u2019s super important to make sure that users understand the basics and are able to use your app as intended with hotkeys and/or mouse clicks."),(0,s.mdx)(m,{mdxType:"ImageSlider"},(0,s.mdx)("img",{src:t(5310).Z,alt:"Koreanbuilds"}),(0,s.mdx)("img",{src:t(38868).Z,alt:"DotaPlus"})),(0,s.mdx)("h3",{id:"error-handling"},"Error handling"),(0,s.mdx)("p",null,"Having a downtime? Server being upgraded? Something else is wrong? Your users have to know. A simple and accurate error message announcing the state of the app can go a long way and save you time, energy and bad reviews. We recommend figuring out the most common issues and implementing error messages whenever possible. "),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Examples of error messages:")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"\u201cDue to a recent game patch, Overwolf app API has stopped working - we'll fix it shortly!\u201d"),(0,s.mdx)("li",{parentName:"ul"},"\u201c","[app name]"," is not able to show stats because the chosen game mode is not supported.\u201d"),(0,s.mdx)("li",{parentName:"ul"},"\u201cWe\u2019re experiencing issues and this app is currently unavailable.\u201d"),(0,s.mdx)("li",{parentName:"ul"},"\u201cSome stats may be unavailable. Check <appname's> Facebook and Twitter for updates\u201d")),(0,s.mdx)(m,{mdxType:"ImageSlider"},(0,s.mdx)("img",{src:t(77798).Z,alt:"Herowatch"}),(0,s.mdx)("img",{src:t(30289).Z,alt:"Herowatch"}),(0,s.mdx)("img",{src:t(97434).Z,alt:"Lolwiz"})))}g.isMDXComponent=!0},30093:function(e,r,t){r.Z=t.p+"assets/images/csgo-stats-desktop-mode-3358a7b92eb883d9de5feccd37df9601.jpg"},54193:function(e,r,t){r.Z=t.p+"assets/images/dotaplus-loading-3d55214eb86becb42ad6144bc19ed70a.png"},38868:function(e,r,t){r.Z=t.p+"assets/images/dotaplus-ready-d0f3ac41127ec5fa6998a7ed9bb52d04.png"},30289:function(e,r,t){r.Z=t.p+"assets/images/error-herowatch-9505ab7d7b2d95b2c10aabdbb5bff685.jpg"},77798:function(e,r,t){r.Z=t.p+"assets/images/error-herowatch2-6ffecc9036c34169331a538f43bdc9f1.jpg"},97434:function(e,r,t){r.Z=t.p+"assets/images/error-lolwiz-c610fcec0c053f6b2bf2d677a47dfb66.jpg"},5310:function(e,r,t){r.Z=t.p+"assets/images/koreanbuilds-loading-stats-5ccbfb424c1e99fde82e68d7881ebde9.jpg"},89236:function(e,r,t){r.Z=t.p+"assets/images/lolwiz-home-8018e6491dff43b4e9ac0b91762d82f0.jpg"},73056:function(e,r,t){r.Z=t.p+"assets/images/pubg-tracker-home-516d0470a9a7821a1d7b8f6bd82da058.jpg"},98805:function(e,r,t){r.Z=t.p+"assets/images/streamaware-loading-data-89cb4ee273da085ec23b19bf8d0caf7d.jpg"}}]);