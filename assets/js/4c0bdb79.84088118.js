"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2801],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return o},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){return function(n){var t=s(n.components);return a.createElement(e,i({},n,{components:t}))}},s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,b=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(b,d(d({ref:n},o),{},{components:t})):a.createElement(b,d({ref:n},o))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},16628:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return s}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],d={id:"inapp",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions.inapp API"},p=void 0,o={unversionedId:"api/profile/subscriptions/inapp",id:"api/profile/subscriptions/inapp",title:"overwolf.profile.subscriptions.inapp API",description:"Provides functions and events to help with user profile subscription in-app management.",source:"@site/pages/docs/api/profile/subscriptions/inapp.mdx",sourceDirName:"api/profile/subscriptions",slug:"/api/profile/subscriptions/inapp",permalink:"/api/profile/subscriptions/inapp",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/profile/subscriptions/inapp.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"inapp",image:"/img/embed/api-docs.jpg",title:"overwolf.profile.subscriptions.inapp API",sidebar_position:0,sidebar_label:"Inapp"},sidebar:"api",previous:{title:"Subscriptions",permalink:"/api/profile/subscriptions/"},next:{title:"Settings",permalink:"/api/settings/"}},m={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"show(planId, theme, callback)",id:"showplanid-theme-callback",level:2},{value:"Version added: 0.170",id:"version-added-0170",level:4},{value:"Permissions required: Subscription",id:"permissions-required-subscription",level:4},{value:"hide(callback)",id:"hidecallback",level:2},{value:"Version added: 0.170",id:"version-added-0170-1",level:4},{value:"Permissions required: Subscription",id:"permissions-required-subscription-1",level:4},{value:"onInAppSubModalOpened",id:"oninappsubmodalopened",level:2},{value:"Version added: 0.170",id:"version-added-0170-2",level:4},{value:"InAppSubModalOpenedEvent Object",id:"inappsubmodalopenedevent-object",level:2},{value:"onInAppSubModalClosed",id:"oninappsubmodalclosed",level:2},{value:"Version added: 0.170",id:"version-added-0170-3",level:4},{value:"InAppSubModalClosedEvent Object",id:"inappsubmodalclosedevent-object",level:2},{value:"Theme enum",id:"theme-enum",level:2},{value:"Version added: 0.174",id:"version-added-0174",level:4}],u={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Provides functions and events to help with user profile subscription in-app management."),(0,i.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Please check the ",(0,i.mdx)("a",{parentName:"p",href:"../subscriptions#sample-app"},"subscriptions API sample app")," that demonstrates a primary usage in the API.",(0,i.mdx)("br",{parentName:"p"}),"\n","Please read all the info about app subscriptions ",(0,i.mdx)("a",{parentName:"p",href:"/start/monetize-with-subs/subscriptions-overview"},"here"),"."))),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Permissions required: Subscription"))),(0,i.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#showplanid-theme-callback"},"overwolf.profile.subscriptions.inapp.show()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#hidecallback"},"overwolf.profile.subscriptions.inapp.hide()"))),(0,i.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#oninappsubmodalopened"},"overwolf.profile.subscriptions.inapp.onInAppSubModalOpened")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#oninappsubmodalclosed"},"overwolf.profile.subscriptions.inapp.onInAppSubModalClosed"))),(0,i.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#inappsubmodalopenedevent-object"},"overwolf.profile.subscriptions.inapp.InAppSubModalOpenedEvent")," Object"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#inappsubmodalclosedevent-object"},"overwolf.profile.subscriptions.inapp.InAppSubModalClosedEvent")," Object"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#theme-enum"},"overwolf.profile.subscriptions.inapp.enums.Theme")," Enum")),(0,i.mdx)("h2",{id:"showplanid-theme-callback"},"show(planId, theme, callback)"),(0,i.mdx)("h4",{id:"version-added-0170"},"Version added: 0.170"),(0,i.mdx)("h4",{id:"permissions-required-subscription"},"Permissions required: Subscription"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Shows the in-app subscription page as a modal window on top of the current window.")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"planId"),(0,i.mdx)("td",{parentName:"tr",align:null},"number"),(0,i.mdx)("td",{parentName:"tr",align:null},"The plan Id to display")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"theme"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"#theme-enum"},"Theme")," enum"),(0,i.mdx)("td",{parentName:"tr",align:null},'Optional. "Dark" or "Light. If not defined, the default is light')),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"Result => void"),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,i.mdx)("h2",{id:"hidecallback"},"hide(callback)"),(0,i.mdx)("h4",{id:"version-added-0170-1"},"Version added: 0.170"),(0,i.mdx)("h4",{id:"permissions-required-subscription-1"},"Permissions required: Subscription"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Hide the current active in-app subscription modal window.")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"Result => void"),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,i.mdx)("h2",{id:"oninappsubmodalopened"},"onInAppSubModalOpened"),(0,i.mdx)("h4",{id:"version-added-0170-2"},"Version added: 0.170"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Fired when a subscription in-app modal window is opened: with the following structure: ",(0,i.mdx)("a",{parentName:"p",href:"#inappsubmodalopenedevent-object"},"InAppSubModalOpenedEvent")," Object")),(0,i.mdx)("h2",{id:"inappsubmodalopenedevent-object"},"InAppSubModalOpenedEvent Object"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"status"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null})))),(0,i.mdx)("h2",{id:"oninappsubmodalclosed"},"onInAppSubModalClosed"),(0,i.mdx)("h4",{id:"version-added-0170-3"},"Version added: 0.170"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Fired when a subscription in-app modal window is closed: with the following structure: ",(0,i.mdx)("a",{parentName:"p",href:"#inappsubmodalclosedevent-object"},"InAppSubModalClosedEvent")," Object")),(0,i.mdx)("h2",{id:"inappsubmodalclosedevent-object"},"InAppSubModalClosedEvent Object"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"status"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null})))),(0,i.mdx)("h2",{id:"theme-enum"},"Theme enum"),(0,i.mdx)("h4",{id:"version-added-0174"},"Version added: 0.174"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Options"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Light"),(0,i.mdx)("td",{parentName:"tr",align:null},"Light")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Dark"),(0,i.mdx)("td",{parentName:"tr",align:null},"Dark")))))}c.isMDXComponent=!0}}]);