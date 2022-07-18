"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[834],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return b},useMDXComponents:function(){return o},withMDXComponents:function(){return s}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){return function(t){var a=o(t.components);return n.createElement(e,l({},t,{components:a}))}},o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),u=r,x=s["".concat(i,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(x,d(d({ref:t},m),{},{components:a})):n.createElement(x,d({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=x;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},63626:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return o}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],d={id:"subscriptions",title:"overwolf.profile.subscriptions API",sidebar_label:"overwolf.profile.subscriptions"},p=void 0,m={unversionedId:"api/profile/subscriptions/subscriptions",id:"api/profile/subscriptions/subscriptions",title:"overwolf.profile.subscriptions API",description:"Provides functions and events to help with user profile subscription management.",source:"@site/pages/docs/api/profile/subscriptions/subscriptions.mdx",sourceDirName:"api/profile/subscriptions",slug:"/api/profile/subscriptions/",permalink:"/api/profile/subscriptions/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/profile/subscriptions/subscriptions.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"subscriptions",title:"overwolf.profile.subscriptions API",sidebar_label:"overwolf.profile.subscriptions"},sidebar:"api",previous:{title:"overwolf.profile",permalink:"/api/profile/"},next:{title:"overwolf.profile.subscriptions.inapp",permalink:"/api/profile/subscriptions/inapp"}},s={},o=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"Sample app",id:"sample-app",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Setting up",id:"setting-up",level:3},{value:"getActivePlans(callback)",id:"getactiveplanscallback",level:2},{value:"Version added: 0.134",id:"version-added-0134",level:4},{value:"Important Notes",id:"important-notes",level:4},{value:"getDetailedActivePlans(callback)",id:"getdetailedactiveplanscallback",level:2},{value:"Version added: 0.170",id:"version-added-0170",level:4},{value:"onSubscriptionChanged",id:"onsubscriptionchanged",level:2},{value:"Version added: 0.134",id:"version-added-0134-1",level:4},{value:"SubscriptionChangedEvent Object",id:"subscriptionchangedevent-object",level:2},{value:"GetActivePlansResult Object",id:"getactiveplansresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"GetDetailedActivePlansResult Object",id:"getdetailedactiveplansresult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"Plan Object",id:"plan-object",level:2},{value:"SubscriptionState enum",id:"subscriptionstate-enum",level:2},{value:"Subscription states notes",id:"subscription-states-notes",level:4}],u={toc:o};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Provides functions and events to help with user profile subscription management."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Permissions required: profile"))),(0,l.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Please check the ",(0,l.mdx)("a",{parentName:"p",href:"#sample-app"},"subscriptions API sample app")," that demonstrates a primary usage in the API.",(0,l.mdx)("br",{parentName:"p"}),"\n","Please read all the info about app subscriptions ",(0,l.mdx)("a",{parentName:"p",href:"/start/monetize-with-subs/subscriptions-overview"},"here"),"."))),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getactiveplanscallback"},"overwolf.profile.subscriptions.getActivePlans()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getdetailedactiveplanscallback"},"overwolf.profile.subscriptions.getDetailedActivePlans()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onsubscriptionchanged"},"overwolf.profile.subscriptions.onSubscriptionChanged"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#subscriptionchangedevent"},"overwolf.profile.subscriptions.SubscriptionChangedEvent")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getactiveplansresult-object"},"overwolf.profile.subscriptions.GetActivePlansResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#plan-object"},"overwolf.profile.subscriptions.Plan")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#subscriptionstate-enum"},"overwolf.profile.SubscriptionState")," Enum")),(0,l.mdx)("h2",{id:"sample-app"},"Sample app"),(0,l.mdx)("p",null,"In our ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/apis-sample-apps"},"APIs sample apps repository"),", you can find and download a  sample app that demonstrate the usage in the subscriptions and Ads API: "),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"subscriptions-sample")," - Demonstrates how to purchase a subscription that removes an ad. ")),(0,l.mdx)("p",null,"It's a great place to get started - All the samples in this repository are built with JS code and demonstrate primary usage in the API."),(0,l.mdx)("h3",{id:"functionality"},"Functionality"),(0,l.mdx)("p",null,"The sample app's functionality is pretty straightforward: You launch it, open the dev console (to see all the debug messages), and hit the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Subscribe")," button to purchase a subscription and remove the add. In addition, you have the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Subscribe in-app")," button that opens the subscribe page inside the app UI, and allow you to purchase a subscription without leaving the app."),(0,l.mdx)("p",null,"You can look at the dev console to see the status of each call (success, failure, etc.)."),(0,l.mdx)("h3",{id:"setting-up"},"Setting up"),(0,l.mdx)("p",null,"Download the app's source code from the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/apis-sample-apps"},"repository")," as a zip file, and extract it to a new folder on your machine.",(0,l.mdx)("br",{parentName:"p"}),"\n",'Load the app as an "unpacked extension" (Note that to do that you have to whitelist your OW username as a developer).'),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},'Open the Overwolf desktop client settings (by right-clicking the client and selecting "Packages" Or by clicking on the wrench icon in the dock and going to the "About" tab => "Development Options").'),(0,l.mdx)("li",{parentName:"ul"},'Click on "Development options".'),(0,l.mdx)("li",{parentName:"ul"},'In the opened window, click on "Load unpacked extension" and select the extracted ',(0,l.mdx)("inlineCode",{parentName:"li"},"subscriptions-sample")," folder. This will add the manual sample app to your Overwolf dock. "),(0,l.mdx)("li",{parentName:"ul"},'Make sure you are logged in to the OW client. Otherwise, you will get an "Unauthorized App" error message. (Click on the "Appstore" icon in the OW dock to login to the OW client).'),(0,l.mdx)("li",{parentName:"ul"},"Click on the app's icons in your OW dock to run the apps.")),(0,l.mdx)("h2",{id:"getactiveplanscallback"},"getActivePlans(callback)"),(0,l.mdx)("h4",{id:"version-added-0134"},"Version added: 0.134"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Returns active subscriptions for the calling extension via callback.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getactiveplansresult-object"},"Result: GetActivePlansResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,l.mdx)("h4",{id:"important-notes"},"Important Notes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Many users can have the same planID,  while subscriptionID is an individual unique ID for a user's subscription."),(0,l.mdx)("li",{parentName:"ul"},"When calling getActivePlans(), make sure you use your live app and not the sample app, etc., as subscriptions are pairs to a specific app UID."),(0,l.mdx)("li",{parentName:"ul"},"We refresh cache every 2 hours and update it on-demand when the user does an action (cancel, subscribe, extend, etc.)")),(0,l.mdx)("h2",{id:"getdetailedactiveplanscallback"},"getDetailedActivePlans(callback)"),(0,l.mdx)("h4",{id:"version-added-0170"},"Version added: 0.170"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Returns more details about the active subscriptions for the calling extension via callback.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getdetailedactiveplansresult-object"},"Result: GetDetailedActivePlansResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,l.mdx)("h2",{id:"onsubscriptionchanged"},"onSubscriptionChanged"),(0,l.mdx)("h4",{id:"version-added-0134-1"},"Version added: 0.134"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when current extension subscription has changed, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#subscriptionchangedevent-object"},"SubscriptionChangedEvent")," Object")),(0,l.mdx)("h2",{id:"subscriptionchangedevent-object"},"SubscriptionChangedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"plans"),(0,l.mdx)("td",{parentName:"tr",align:null},"int[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"an array of plan IDs")))),(0,l.mdx)("h2",{id:"getactiveplansresult-object"},"GetActivePlansResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"status"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Reason"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"plans"),(0,l.mdx)("td",{parentName:"tr",align:null},"int[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"an array of plan IDs (only current active plans)")))),(0,l.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "plans": [ 4564, 23455 ], //If there is no active plans, a null is returned.\n  "success": true\n}\n')),(0,l.mdx)("h2",{id:"getdetailedactiveplansresult-object"},"GetDetailedActivePlansResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"status"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Reason"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"plans"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#plan-object"},"Plan"),"[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"an array of active plans")))),(0,l.mdx)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "plans": [\n    {"planId":23, "state":"cancelled", "expiryDate": "1684244095000", "title": "Forget Ads", "description": "Remvoe all ads from the app", "price":"", "periodMonths": "6"},\n    {"planId":25, "state":"active", "expiryDate": "1684244095000", "title": "Forget Ads test", "description": "", "price":"", "periodMonths": "12"}\n  ], //If there is no active plans, a null is returned.\n  "success": true\n}\n')),(0,l.mdx)("h2",{id:"plan-object"},"Plan Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"planId"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"state"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#subscriptionstate-enum"},"SubscriptionState")," Enum"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#subscription-states-notes"},"Subscription states notes"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"expiryDate"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#subscription-states-notes"},"Subscription states notes"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"title"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"description"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"price"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"periodMonths"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"subscriptionstate-enum"},"SubscriptionState enum"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Active"),(0,l.mdx)("td",{parentName:"tr",align:null},'"active"')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Cancelled"),(0,l.mdx)("td",{parentName:"tr",align:null},'"cancelled"')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Revoked"),(0,l.mdx)("td",{parentName:"tr",align:null},'"revoked"')))),(0,l.mdx)("h4",{id:"subscription-states-notes"},"Subscription states notes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"If the state is ",(0,l.mdx)("inlineCode",{parentName:"li"},"active"),", the expiryDate means when the next renewal is (i.e., next payment)."),(0,l.mdx)("li",{parentName:"ul"},"If the state is ",(0,l.mdx)("inlineCode",{parentName:"li"},"canceled"),', the expiryDate means that a user canceled the subscription, and it will expire on this date. BTW, we give a few days of grace, so it could be that even when expired, the state will still be "active".  '),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"revoked")," means an immediate cancellation - the date will be expired automatically. The only way to revoke is via the console.overwolf.com interface.")))}c.isMDXComponent=!0}}]);