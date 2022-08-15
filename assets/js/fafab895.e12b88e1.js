"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2583],{3905:function(t,e,n){n.r(e),n.d(e,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){return function(e){var n=s(e.components);return a.createElement(t,o({},e,{components:n}))}},s=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},x=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),p=s(n),u=r,x=p["".concat(i,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(x,l(l({ref:e},m),{},{components:n})):a.createElement(x,l({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=x;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},97920:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"notifications",image:"/img/embed/api-docs.jpg",title:"overwolf.notifications API"},d=void 0,m={unversionedId:"api/notifications/notifications",id:"api/notifications/notifications",title:"overwolf.notifications API",description:"Use this API to send toast notifications from your OW app.",source:"@site/pages/docs/api/notifications/notifications.mdx",sourceDirName:"api/notifications",slug:"/api/notifications/",permalink:"/api/notifications/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/notifications/notifications.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"notifications",image:"/img/embed/api-docs.jpg",title:"overwolf.notifications API",sidebar_position:0,sidebar_label:"Notifications"},sidebar:"api",previous:{title:"Highlights supported games",permalink:"/api/media/replays/auto-highlights"},next:{title:"OS",permalink:"/api/os/"}},p={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"showToastNotification(args, callback)",id:"showtoastnotificationargs-callback",level:2},{value:"Version added: 0.176",id:"version-added-0176",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"ToastNotificationParams Object",id:"toastnotificationparams-object",level:2},{value:"texts notes",id:"texts-notes",level:4},{value:"logoOverride notes",id:"logooverride-notes",level:4},{value:"heroImage notes",id:"heroimage-notes",level:4},{value:"inlineImage notes",id:"inlineimage-notes",level:4},{value:"attribution notes",id:"attribution-notes",level:4},{value:"buttons notes",id:"buttons-notes",level:4},{value:"ToastNotificationButton Object",id:"toastnotificationbutton-object",level:2},{value:"LogoOverride Object",id:"logooverride-object",level:2},{value:"ShowToastNotificationResult Object",id:"showtoastnotificationresult-object",level:2},{value:"AppLogoCrop enum",id:"applogocrop-enum",level:2},{value:"Version added: 0.176",id:"version-added-0176-1",level:4},{value:"onToastInteraction",id:"ontoastinteraction",level:2},{value:"Version added: 0.176",id:"version-added-0176-2",level:4},{value:"ToastNotificationEvent  Object",id:"toastnotificationevent--object",level:2},{value:"ToatsEventType enum",id:"toatseventtype-enum",level:2},{value:"Version added: 0.176",id:"version-added-0176-3",level:4},{value:"ToastEventError enum",id:"toasteventerror-enum",level:2},{value:"Version added: 0.176",id:"version-added-0176-4",level:4}],u={toc:s};function c(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.mdx)("wrapper",(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Use this API to send toast notifications from your OW app."),(0,o.mdx)("p",null,'Toast are interactive OS notifications that lets you create flexible "reminders" with text, images, and buttons/inputs.\nToast notifications are a combination of some data properties like header, visual (hero image, inline image, app logo) and the toast content.'),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note that currently using toast on an unpacked app does NOT work.")),(0,o.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#showtoastnotificationargs-callback"},"overwolf.notifications.showToastNotification()"))),(0,o.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#ontoastinteraction"},"overwolf.notifications.onToastInteraction"))),(0,o.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#toastnotificationparams-object"},"ToastNotificationParams")," Object"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#showtoastnotificationresult-object"},"ShowToastNotificationResult")," Object"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#logooverride-object"},"LogoOverride")," Object"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#toastnotificationbutton-object"},"ToastNotificationButton")," Object"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#toastnotificationevent-object"},"ToastNotificationEvent")," Object"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#applogocrop-enum"},"overwolf.notifications.enums.AppLogoCrop")," enum"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#toatseventtype-enum"},"overwolf.notifications.enums.ToastEventType")," enum"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#toasteventerror-enum"},"overwolf.notifications.enums.ToastEventError")," enum")),(0,o.mdx)("h2",{id:"showtoastnotificationargs-callback"},"showToastNotification(args, callback)"),(0,o.mdx)("h4",{id:"version-added-0176"},"Version added: 0.176"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Show Windows toast notification.")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"args"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#toastnotificationparams-object"},"ToastNotificationParams")," object"),(0,o.mdx)("td",{parentName:"tr",align:null},"Toast notification params")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"callback"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#showtoastnotificationresult-object"},"(Result: ShowToastNotificationResult)")," => void"),(0,o.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,o.mdx)("h4",{id:"usage-example"},"Usage example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'overwolf.notifications.showToastNotification({\n  header: "Header",\n  texts: ["text1", "text2", "text3"],\n  logoOverride: {\n    url: "overwolf-extension://cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj/84x84.png",\n    cropType: overwolf.notifications.enums.AppLogoCrop.Default\n  },\n  heroImage: "overwolf-extension://cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj/logo_364x180.png",\n  inlineImage: "overwolf-extension://cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj/logo_364x180.png",\n  attribution: "sent from an app",\n  buttons: [\n    {\n      id: about\n      text: "button 1"\n    },\n    {\n      id: about\n      text: "button 2"\n    }\n  ]\n}, console.log);\n')),(0,o.mdx)("p",null,"The above line of code triggers this notification:"),(0,o.mdx)("p",null,(0,o.mdx)("a",{target:"_blank",href:n(92169).Z},"notification-example")),(0,o.mdx)("h2",{id:"toastnotificationparams-object"},"ToastNotificationParams Object"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"header"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Mandatory")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"texts"),(0,o.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,o.mdx)("td",{parentName:"tr",align:null},"Mandatory. See ",(0,o.mdx)("a",{parentName:"td",href:"#texts-notes"},"notes"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"logoOverride"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#logooverride-object"},"LogoOverride")," object"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#logooverride-notes"},"notes"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"heroImage"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#heroimage-notes"},"notes"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"inlineImage"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#inlineimage-notes"},"notes"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"attribution"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#attribution-notes"},"notes"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"buttons"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#toastnotificationbutton-object"},"ToastNotificationButton"),"[]"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#buttons-notes"},"notes"),".")))),(0,o.mdx)("h4",{id:"texts-notes"},"texts notes"),(0,o.mdx)("p",null,"Texts parameter must exist and include 1-3 texts (lines)."),(0,o.mdx)("h4",{id:"logooverride-notes"},"logoOverride notes"),(0,o.mdx)("p",null,"By default, your toast will display your app's logo. However, you can override this logo with your own image."),(0,o.mdx)("h4",{id:"heroimage-notes"},"heroImage notes"),(0,o.mdx)("p",null,"Toasts can display a hero image, which is displayed prominently within the toast banner and while inside Action Center. Image dimensions must be 364x180 pixels."),(0,o.mdx)("h4",{id:"inlineimage-notes"},"inlineImage notes"),(0,o.mdx)("p",null,"You can provide a full-width inline-image that appears when you expand the toast."),(0,o.mdx)("h4",{id:"attribution-notes"},"attribution notes"),(0,o.mdx)("p",null,"If you need to reference the source of your content, you can use attribution text. This text is always displayed at the bottom of your notification, along with your app's identity or the notification's timestamp."),(0,o.mdx)("h4",{id:"buttons-notes"},"buttons notes"),(0,o.mdx)("p",null,"Buttons make your toast interactive, letting the user take quick actions on your toast notification without interrupting their current workflow. Buttons appear in the expanded portion of your notification."),(0,o.mdx)("h2",{id:"toastnotificationbutton-object"},"ToastNotificationButton Object"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"id"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"text"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("h2",{id:"logooverride-object"},"LogoOverride Object"),(0,o.mdx)("p",null,"Note: Must be 364x180."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"url"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"cropType"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#applogocrop-enum"},"AppLogoCrop")," enum"),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("h2",{id:"showtoastnotificationresult-object"},"ShowToastNotificationResult Object"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("em",{parentName:"td"},"success")),(0,o.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,o.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("em",{parentName:"td"},"error")),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"id"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("h2",{id:"applogocrop-enum"},"AppLogoCrop enum"),(0,o.mdx)("h4",{id:"version-added-0176-1"},"Version added: 0.176"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Specify the desired cropping of the image.")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Option"),(0,o.mdx)("th",{parentName:"tr",align:null},"Value"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Default"),(0,o.mdx)("td",{parentName:"tr",align:null},'"Default"'),(0,o.mdx)("td",{parentName:"tr",align:null},"Cropping uses the default behavior of the renderer.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"None"),(0,o.mdx)("td",{parentName:"tr",align:null},'"None"'),(0,o.mdx)("td",{parentName:"tr",align:null},"Image is not cropped.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Circle"),(0,o.mdx)("td",{parentName:"tr",align:null},'"Circle"'),(0,o.mdx)("td",{parentName:"tr",align:null},"Image is cropped to a circle shape.")))),(0,o.mdx)("h2",{id:"ontoastinteraction"},"onToastInteraction"),(0,o.mdx)("h4",{id:"version-added-0176-2"},"Version added: 0.176"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Fired when a user tapped on the body of a toast notification or performed an action inside a toast notification, with the following structure: ",(0,o.mdx)("a",{parentName:"p",href:"#toastnotificationevent-object"},"ToastNotificationEvent")," Object.")),(0,o.mdx)("h2",{id:"toastnotificationevent--object"},"ToastNotificationEvent  Object"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"id"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"eventType"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#toasteventtype-enum"},"ToastEventType")," enum"),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"buttonID"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"error"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"errorCode"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"#toasteventerror-enum"},"ToastEventError")," enum"),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("h2",{id:"toatseventtype-enum"},"ToatsEventType enum"),(0,o.mdx)("h4",{id:"version-added-0176-3"},"Version added: 0.176"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Describes the toast event type.  ")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Option"),(0,o.mdx)("th",{parentName:"tr",align:null},"Value"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Dismiss"),(0,o.mdx)("td",{parentName:"tr",align:null},'"dismiss"'),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"ButtonClick"),(0,o.mdx)("td",{parentName:"tr",align:null},'"buttonClick"'),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Error"),(0,o.mdx)("td",{parentName:"tr",align:null},'"error"'),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("h2",{id:"toasteventerror-enum"},"ToastEventError enum"),(0,o.mdx)("h4",{id:"version-added-0176-4"},"Version added: 0.176"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Describes the toast event error.")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Option"),(0,o.mdx)("th",{parentName:"tr",align:null},"Value"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Unknown"),(0,o.mdx)("td",{parentName:"tr",align:null},'"unknown"'),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"NotificationsDisabled"),(0,o.mdx)("td",{parentName:"tr",align:null},'"notificationsDisabled "'),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Error"),(0,o.mdx)("td",{parentName:"tr",align:null},'"error"'),(0,o.mdx)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0},92169:function(t,e,n){e.Z=n.p+"assets/files/notification-example-c340c640f6c193ab7696c05c39edd470.png"}}]);