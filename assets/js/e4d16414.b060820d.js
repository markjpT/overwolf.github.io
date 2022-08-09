"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8301],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:170,title:"Version 0.170",sidebar_label:"0.170",sidebar_position:170},s=void 0,p={unversionedId:"api/changelogs/2021/may/170",id:"api/changelogs/2021/may/170",title:"Version 0.170",description:"API",source:"@site/pages/docs/api/changelogs/2021/5-may/170.mdx",sourceDirName:"api/changelogs/2021/5-may",slug:"/api/changelogs/2021/may/170",permalink:"/api/changelogs/2021/may/170",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2021/5-may/170.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657780987,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:170,frontMatter:{id:"170",title:"Version 0.170",sidebar_label:"0.170",sidebar_position:-170},sidebar:"api",previous:{title:"0.173",permalink:"/api/changelogs/2021/june/173"},next:{title:"0.169",permalink:"/api/changelogs/2021/april/169"}},m={},u=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h3",{id:"api"},"API"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"App Channels:"),(0,i.mdx)("br",{parentName:"li"}),"Channels are no longer exclusive to the Overwolf client, apps can now also have channels; Creators can set a specific channel to use a specific version, this way they can super easily create and distribute beta versions for their apps.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"Note that testing is still in progress. We will announce that soon for general usage.")," "),(0,i.mdx)("li",{parentName:"ul"},"API: ",(0,i.mdx)("a",{parentName:"li",href:"/api/settings#setextensionsettingsextensionsettings-callback"},"The overwolf.settings.setExtensionSettings")," function now accepts a new property in its ",(0,i.mdx)("a",{parentName:"li",href:"/api/settings#generalextensionsettings-object"},"GeneralExtensionSettings")," object called ",(0,i.mdx)("inlineCode",{parentName:"li"},"channel"),", this will set the app to a specific channel."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"In-app Subscriptions flow:"),(0,i.mdx)("br",{parentName:"li"}),"We now give Creators the option to show the subscription modal inside their apps. You will never have to send the users to the store again.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"In order for this feature to work, the Creator will need to add ",(0,i.mdx)("inlineCode",{parentName:"li"},"Subscription")," to the \u201cPermissions\u201d array in the app\u2019s ",(0,i.mdx)("inlineCode",{parentName:"li"},"manifest.json")," file."),(0,i.mdx)("li",{parentName:"ul"},"New API, ",(0,i.mdx)("a",{parentName:"li",href:"/api/profile/subscriptions/inapp"},"overwolf.profile.subscriptions.inapp"),': Allow apps to launch the subscription window inside their app and change subscription through the app (includs new permission: "subscription").'),(0,i.mdx)("li",{parentName:"ul"},"API: New function introduced to return additional details about the subscribed user, such as expiry date and subscription state:",(0,i.mdx)("br",{parentName:"li"}),(0,i.mdx)("a",{parentName:"li",href:"/api/profile/subscriptions#getdetailedactiveplanscallback"},"overwolf.profile.subscriptions.getDetailedActivePlans()"),"."),(0,i.mdx)("li",{parentName:"ul"},"new enum with the 3 available subscription states: active, cancelled, and revoked: ",(0,i.mdx)("a",{parentName:"li",href:"/api/profile/subscriptions#subscriptionstate-enum"},"overwolf.profile.SubscriptionState"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/profile#getcurrentusercallback"},"overwolf.profile.getCurrentUser")," - this API now also returns the user\u2019s display name.")))),(0,i.mdx)("h3",{id:"platform"},"Platform"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},".NET 4.8 implementation - we\u2019ve upgraded the .NET version Overwolf uses to 4.8.")),(0,i.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Subscriptions statistics page was added")),(0,i.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Fix ",(0,i.mdx)("a",{parentName:"li",href:"/api/utils#openurlinoverwolfbrowserurl"},"overwolf.utils.openUrlInOverwolfBrowser"),": allow to open tab and redirect back to extension when origin URL is at 'externally_connectable' and to tab was open from the same extension."),(0,i.mdx)("li",{parentName:"ul"},"Overwolf no longer reloads apps when a secondary GPU process is being created."),(0,i.mdx)("li",{parentName:"ul"},"Fixed a typo in setRequiredFeatures when getting the \u201cProvider not ready\u201d error, what was once ",(0,i.mdx)("inlineCode",{parentName:"li"},"succedss")," is now ",(0,i.mdx)("inlineCode",{parentName:"li"},"success"),".")),(0,i.mdx)("h3",{id:"game-events"},"Game events"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Support for the COD: Warzone game has been disabled temporarily."),(0,i.mdx)("li",{parentName:"ul"},"Support for the PUBG Lite game will be disabled permanently from Apr. 2021 since PUBG Lite will be shut down at that date. In addition, we will remove all the content from our site."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/valorant"},"VALORANT")),(0,i.mdx)("li",{parentName:"ul"},"New supported map - Breeze."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/rocket-league"},"Rocket League"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New info update under:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"game_info"))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/apex-legends"},"Apex Legends"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'New "Arena" game mode will be enabled in the near future.'))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/valheim"},"Valheim"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New updates and events under:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"game_info"),(0,i.mdx)("li",{parentName:"ul"},"kill")))))))}c.isMDXComponent=!0}}]);